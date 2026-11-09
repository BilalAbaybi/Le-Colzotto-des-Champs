# Le colzotto des champs

Site statique (HTML, un seul `css/style.css`, scripts dans `js/`) de six pages éditoriales et une page légale. Les images utilisées par le site sont rangées dans `img/`.

## Pages

- `index.html` : page d’accueil et idée du colzotto
- `le-plat.html` : concept et ingrédients
- `recette.html` : recette imaginée pour deux personnes
- `beauce.html` : inspiration paysagère
- `carnet.html` : photo du plat et renvoi vers la recette
- `atelier.html` : calculateur de portions avec liste d’ingrédients copiable
- `mentions-legales.html` : mentions à compléter avant publication

Les pages présentent chacune un sujet distinct : idée du plat, recette, paysage beauceron, photo et ajustement des portions.

## Référencement

Les pages publiques ont des titres, descriptions, URL canoniques et aperçus de partage distincts. `robots.txt` déclare le plan de site `sitemap.xml`, qui liste les pages éditoriales indexables. `recette.html` contient des données structurées `Recipe` reprenant les ingrédients et étapes visibles sur la page. Les mentions légales sont exclues du plan de site et marquées `noindex` tant que les champs entre crochets restent à compléter.

Le domaine personnalisé est déclaré dans `CNAME`. Les changements doivent être publiés sur la branche et le dossier configurés dans GitHub Pages. Google Analytics 4 est configuré dans `js/analytics-consent.js` et ne se charge qu’après acceptation dans la bannière; le choix peut être modifié depuis le pied de page. Le tag est intégré directement avec l’ID GA4, sans utiliser le conteneur Google Tag Manager. Le compte Instagram du projet est lié dans l’accueil et les pieds de page.

`404.html` est la page d’erreur servie par GitHub Pages (non indexée).
