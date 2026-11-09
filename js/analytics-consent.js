(() => {
  const measurementId = 'G-4P1TRL20WW';
  const storageKey = 'colzotto-analytics-consent';
  let analyticsStarted = false;

  function startAnalytics() {
    if (analyticsStarted) return;
    analyticsStarted = true;
    window.dataLayer = window.dataLayer || [];
    window.gtag = function gtag() { window.dataLayer.push(arguments); };
    window.gtag('consent', 'default', { analytics_storage: 'denied' });
    window.gtag('consent', 'update', { analytics_storage: 'granted' });
    window.gtag('js', new Date());
    window.gtag('config', measurementId, { send_page_view: false });
    window.gtag('event', 'page_view');

    const tag = document.createElement('script');
    tag.async = true;
    tag.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
    document.head.appendChild(tag);
  }

  function saveChoice(choice) {
    try {
      window.localStorage.setItem(storageKey, choice);
    } catch (_) {
      // The choice still applies for this page if browser storage is unavailable.
    }

    if (choice === 'accepted') {
      startAnalytics();
    } else if (analyticsStarted) {
      window.gtag('consent', 'update', { analytics_storage: 'denied' });
      document.cookie.split(';').forEach((cookie) => {
        const name = cookie.split('=')[0].trim();
        if (name === '_ga' || name.startsWith('_ga_')) {
          document.cookie = `${name}=; Max-Age=0; path=/; SameSite=Lax`;
        }
      });
    }
    render();
  }

  function render() {
    document.querySelector('.analytics-consent')?.remove();
    const panel = document.createElement('section');
    panel.className = 'analytics-consent';
    panel.setAttribute('role', 'dialog');
    panel.setAttribute('aria-labelledby', 'analytics-consent-title');
    panel.innerHTML = `
      <div class="analytics-consent__copy">
        <h2 id="analytics-consent-title">Mesure d’audience</h2>
        <p>Google Analytics nous aide à comprendre la fréquentation du site. Le suivi ne démarre que si vous l’acceptez. Vous pourrez modifier ce choix depuis le bas de page.</p>
      </div>
      <div class="analytics-consent__actions">
        <button type="button" data-consent="refused">Refuser</button>
        <button type="button" data-consent="accepted">Accepter</button>
      </div>`;
    panel.querySelectorAll('[data-consent]').forEach((button) => {
      button.addEventListener('click', () => saveChoice(button.dataset.consent));
    });
    document.body.appendChild(panel);
  }

  document.querySelectorAll('.site-footer nav').forEach((nav) => {
    const settings = document.createElement('button');
    settings.className = 'analytics-consent__settings';
    settings.type = 'button';
    settings.textContent = 'Gérer les cookies';
    settings.addEventListener('click', render);
    nav.appendChild(settings);
  });

  let savedChoice = null;
  try {
    savedChoice = window.localStorage.getItem(storageKey);
  } catch (_) {
    // Ask again next time if browser storage is unavailable.
  }

  if (savedChoice === 'accepted') startAnalytics();
  else if (savedChoice !== 'refused') render();
})();
