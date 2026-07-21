# Salverys — édition premium (fork design)

Refonte « direction artistique » de la page d'accueil, au niveau d'un site
d'agence à ~50 k€. Le contenu, les prix, les niches et les engagements restent
strictement ceux de `PRICING.md` et de `index.html` d'origine — **seul le design
change**.

- Aperçu : `premium/index.html` (fichier autonome, aucune dépendance externe).
- Preview partageable : artefact claude.ai (voir le lien dans la conversation).

## Direction retenue — « le méridien »

L'atout réel de Salverys est géographique : Antananarivo partage les heures
ouvrées de la France et le français y est natif. Le motif signature du site est
donc l'**arc méridien** Antananarivo → Paris → Montréal, avec **horloges
synchronisées en direct**. On abandonne les photos de call-center sur stock.

| Axe | Site actuel | Édition premium |
|---|---|---|
| Visuels | Photos Unsplash (stock) | 100 % SVG/CSS sur-mesure, aucune image externe |
| Typo | Georgia + Inter (webfont) | Georgia éditorial + system-ui + **mono pour les données** (horloges, KPI, prix) |
| Palette | Greige/sauge/or, 3 thèmes | Nocturne encre + parchemin + **un seul accent or**, clair **et** sombre |
| Héros | Photo + cartes flottantes | Arc méridien animé + horloges live + grain |
| Motion | Reveal + blobs | Tracé d'arc, spark voyageur, count-up, barres animées, rail d'index, barre de progression |
| Preuve prix | Texte | **Graphe comparatif animé** interne vs Salverys |
| Icônes | Emoji | Icônes ligne SVG sur-mesure |
| Thème | Clair only | Bascule clair/sombre persistée |

## Où sont les changements majeurs

1. **Art direction & identité** — motif méridien, grain, accent or unique.
2. **Système typographique** — la mono comme « voix des données » (reporting chiffré).
3. **Héros signature** — horloges live + arc animé au lieu de photo stock.
4. **Preuve chiffrée** — graphe de coût animé (−52 % illustré).
5. **Motion orchestrée** — page-load, scroll-reveal, rail d'index, progress bar.
6. **Accessibilité & thèmes** — `prefers-reduced-motion`, focus visibles, clair/sombre.
7. **Zéro dépendance** — plus d'Unsplash ni de webfont : chargement instantané, RGPD-friendly.

## Déploiement

Fichier autonome : ouvrable tel quel. Pour le publier via Netlify, ajouter
`premium/` à la copie du script `tools/build-site.sh` (non câblé par défaut pour
ne pas impacter le site de production).
