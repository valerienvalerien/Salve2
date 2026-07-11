#!/usr/bin/env bash
# Construit le dossier publié sur OVH (_site) en ne copiant QUE les
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
)

rm -rf _site
mkdir -p _site/assets
cp "${PUBLIC_PAGES[@]}" _site/
cp assets/* _site/assets/

# En-têtes OVH/Apache : les espaces partenaires ne doivent être
# ni indexés ni mis en cache par des intermédiaires.
cat > _site/.htaccess <<'HTACCESS'
<IfModule mod_headers.c>
  <FilesMatch "^espace-client.*\.html$">
    Header set X-Robots-Tag "noindex, nofollow"
    Header set Cache-Control "no-store"
  </FilesMatch>
</IfModule>
HTACCESS

echo "✓ _site construit : $(ls _site | wc -l) entrées (+ .htaccess)."
if ls _site/*.md >/dev/null 2>&1 || [ -d _site/tools ]; then
  echo "✗ ERREUR : fichiers internes présents dans _site" >&2
  exit 1
fi
