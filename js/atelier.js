const portionSlider = document.querySelector('[data-portions]');

if (portionSlider) {
  const portionOutput = document.querySelector('[data-portions-value]');
  const ingredientValues = [...document.querySelectorAll('[data-base]')];
  const ingredientList = document.querySelector('[data-atelier-list]');
  const feedback = document.querySelector('[data-copy-feedback]');
  const format = new Intl.NumberFormat('fr-FR', { maximumFractionDigits: 1 });

  function updatePortions() {
    const multiplier = Number(portionSlider.value) / 2;
    portionOutput.textContent = portionSlider.value;
    ingredientValues.forEach((item) => {
      item.textContent = `${format.format(Number(item.dataset.base) * multiplier)} ${item.dataset.unit}`;
    });
  }

  document.querySelector('[data-copy-recipe]')?.addEventListener('click', async () => {
    const lines = [...ingredientList.querySelectorAll('li')].map((item) => item.textContent.trim());
    const text = `Colzotto des champs — ${portionSlider.value} personnes\n${lines.join('\n')}`;
    try {
      await navigator.clipboard.writeText(text);
      feedback.textContent = 'La liste a été copiée.';
    } catch (_) {
      feedback.textContent = 'La copie n’est pas disponible dans ce navigateur.';
    }
  });

  portionSlider.addEventListener('input', updatePortions);
  updatePortions();
}
