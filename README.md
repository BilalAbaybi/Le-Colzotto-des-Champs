# Le colzotto des champs

Site statique de cinq pages pour un projet pédagogique. Le plat, son nom et sa recette sont fictifs. Les images optimisées utilisées par le site sont rangées dans `img/`. Les fichiers originaux sont conservés hors du dossier publiable, dans `images-originales/` à la racine du projet.

## Pages

- `index.html` : accueil et définition rapide
- `le-plat.html` : concept et ingrédients
- `recette.html` : recette imaginée pour deux personnes
- `beauce.html` : inspiration paysagère
- `mentions-legales.html` : mentions à compléter avant publication

La page Beauce présente l’inspiration paysagère et renvoie vers le plat.

## Référencement

Les pages publiques ont des titres, descriptions, URL canoniques et aperçus de partage distincts. `robots.txt` déclare le plan de site `sitemap.xml`, qui liste les quatre pages éditoriales. `recette.html` contient des données structurées `Recipe` reprenant les ingrédients et étapes visibles sur la page. Les mentions légales sont exclues du plan de site et marquées `noindex` tant que les champs entre crochets restent à compléter.

Le domaine personnalisé est déclaré dans `CNAME`. Les changements doivent être publiés sur la branche et le dossier configurés dans GitHub Pages. Aucun identifiant Google Analytics n’est intégré pour le moment : ajouter le tag GA4 après création de la propriété et décision sur le recueil du consentement.
