#!/usr/bin/env bash
# Télécharge les photos Unsplash du site dans assets/img/ pour les auto-héberger
# (supprime la dépendance au hotlink images.unsplash.com, fragile et hors de
# notre contrôle). À lancer depuis une machine avec accès internet ouvert,
# puis remplacer les URL https://images.unsplash.com/… dans index.html et les
# simulateur-*.html par assets/img/<nom>.jpg et retirer les <link rel="preconnect">.
set -euo pipefail
cd "$(dirname "$0")/.."
mkdir -p assets/img

declare -A IMAGES=(
  [equipe-support.jpg]="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1100&q=70"
  [support-applicatif.jpg]="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1100&q=70"
  [helpdesk-it.jpg]="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1100&q=70"
  [cabinet-medical.jpg]="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1100&q=70"
  [equipe-collaboration.jpg]="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=70"
  [bureau-salverys.jpg]="https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?auto=format&fit=crop&w=1000&q=70"
)

for name in "${!IMAGES[@]}"; do
  echo "→ assets/img/$name"
  curl -sSfL "${IMAGES[$name]}" -o "assets/img/$name"
done

echo "✓ ${#IMAGES[@]} images téléchargées dans assets/img/."
