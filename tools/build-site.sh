#!/usr/bin/env bash
# Construit le dossier à publier (_site) en ne copiant QUE les fichiers publics,
# puis à téléverser sur l'hébergeur (OVH). Tout le reste (fichiers .md stratégiques,
# CRM, trésorerie, tools/ — dont la source en clair de l'espace client) n'est JAMAIS servi.
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
)

rm -rf _site
mkdir -p _site/assets
cp "${PUBLIC_PAGES[@]}" _site/
cp assets/* _site/assets/
cp .htaccess _site/

echo "✓ _site construit : $(ls -A _site | wc -l) entrées."
if ls _site/*.md >/dev/null 2>&1 || [ -d _site/tools ]; then
  echo "✗ ERREUR : fichiers internes présents dans _site" >&2
  exit 1
fi
