#!/usr/bin/env bash
# Construit le dossier publié sur Netlify (_site) en ne copiant QUE les
# fichiers publics. Tout le reste (fichiers .md stratégiques, CRM, trésorerie,
# tools/ — dont la source en clair de l'espace client) n'est JAMAIS servi.
set -euo pipefail
cd "$(dirname "$0")/.."

PUBLIC_PAGES=(
  index.html
  simulateur-salverys.html
  simulateur-informatique.html
  simulateur-helpdesk-it.html
  espace-client.html
  espace-client-medical.html
  espace-client-support.html
  espace-client-helpdesk.html
  espace-candidat.html
  suivi-candidature.html
  mentions-legales.html
  landing-helpdesk-it-a.html
  landing-helpdesk-it-b.html
)

rm -rf _site
mkdir -p _site/assets
cp "${PUBLIC_PAGES[@]}" _site/
cp -r assets/. _site/assets/

# Pages de closing chiffrées, une par deal (générées par tools/deal-build.mjs).
# Leur URL contient un token non devinable : elles ne sont listées nulle part.
# Supprimer une page ici = révoquer l'accès de ce partenaire, et lui seul.
if compgen -G "espace/*.html" >/dev/null; then
  mkdir -p _site/espace
  cp espace/*.html _site/espace/
  echo "  · $(ls espace/*.html | wc -l) page(s) de deal publiée(s) sous /espace/"
fi

echo "✓ _site construit : $(ls _site | wc -l) entrées."
if ls _site/*.md >/dev/null 2>&1 || [ -d _site/tools ]; then
  echo "✗ ERREUR : fichiers internes présents dans _site" >&2
  exit 1
fi
# Garde-fou : aucun contenu de deal en clair ne doit se retrouver publié.
# "préparé pour" n'apparaît que dans le bandeau nominatif du document déchiffré ;
# une page correctement générée ne contient que le payload chiffré.
if [ -d _site/espace ] && grep -rlq "préparé pour" _site/espace/ 2>/dev/null; then
  echo "✗ ERREUR : contenu de deal non chiffré dans _site/espace" >&2
  exit 1
fi
