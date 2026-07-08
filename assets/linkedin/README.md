# Visuels LinkedIn — page entreprise Salverys

Refonte de la **photo de profil** et de la **photo de couverture** de la page
LinkedIn entreprise (`linkedin.com/company/salverys`).

## Fichiers à uploader

| Fichier | Dimensions | Usage LinkedIn |
|---|---|---|
| `salverys-linkedin-profil.png` | 800 × 800 px (carré) | Logo / photo de profil de la page entreprise (min. recommandé 300×300) |
| `salverys-linkedin-couverture.png` | 2256 × 382 px (ratio 1128×191) | Bannière / photo de couverture de la page entreprise |

> ⚠️ Sur une page entreprise, le **logo carré chevauche le bas-gauche** de la
> bannière. Les visuels sont conçus pour ça : le contenu de la couverture est
> décalé vers le centre-droite, la zone bas-gauche reste dégagée.

## Parti pris

- **Charte respectée** (`charte-graphique-salverys.html`) : bleu ardoise
  `#2E3B4E`, vert sauge `#6F8770`, accent or IT `#F0B429`, titrage Georgia.
- **Emblème réutilisé** depuis `assets/logo-salverys-blanc.svg` (agent casque +
  flèche) — aucun redessin, cohérence totale avec le logo existant.
- **Message** aligné sur le positionnement du site : « Plus de capacité, pas de
  recrutement » + les 3 niches dans l'ordre de priorité (Support N1 SaaS ·
  Helpdesk IT · Télésecrétariat médical), français langue maternelle, fuseau FR.
- Aucun claim interdit (pas de « structure de 1 000 collaborateurs »).

## Régénérer

Les sources HTML (`source-profil.html`, `source-couverture.html`) sont
autonomes : les ouvrir dans un navigateur puis capturer à la dimension exacte,
ou re-rendre en headless (Chromium, `deviceScaleFactor: 2`).
