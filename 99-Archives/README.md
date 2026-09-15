# 99-Archives — documents sortis du circuit actif

> **Rien ici ne sert à chiffrer un deal, préparer un appel ou écrire de la copy.**
> En cas de doute sur un prix, une grille ou un délai : `PRICING.md` fait foi.

## Règle d'archivage

Un document part ici quand **les trois conditions** sont réunies :

1. **Son objet n'existe plus** — l'offre est retirée, le modèle est abandonné, le poste
   est supprimé, ou c'est un doublon.
2. **Aucun document actif n'en dépend** comme source. Un fichier cité par `PRICING.md`,
   `FINANCE-PREVISIONNEL.md` ou `CLAUDE.md` **reste en place**, même périmé : on le corrige
   ou on l'annote, on ne le déplace pas.
3. **Il n'est pas publié** — absent de la liste `PUBLIC_PAGES` de `tools/build-site.sh`.

> ⚠️ **Les audits ne s'archivent pas par ancienneté.** Au 2026-09-15, les quatre audits du
> dépôt (`AUDIT-FINANCE-PREVISIONNEL`, `AUDIT-ESPACE-CLIENT`, `AUDIT-OFFRE-PRIX-SIMULATEURS`,
> `AUDIT-PARCOURS-SALES-NAVIGATOR`) sont **tous cités comme sources actives** — certains
> portent des chiffrages que `PRICING.md` reprend directement. Les déplacer casserait les
> renvois. Un audit ancien se **corrige ou s'annote**, il ne se range pas.

## Ce qui est ici, et pourquoi

| Document | Motif | Sorti le |
|---|---|---|
| `rentabilite-horaire-salverys.html` | Calcule la rentabilité d'un **tarif horaire freelance**, modèle abandonné le 2026-08-14 au profit du salariat. Sa variable d'entrée — « à partir de quel tarif un freelance cesse d'être rentable » — n'a plus d'objet : le coût est désormais fixe et connu. Structuré autour de trois forfaits dont un (**Priority**) est retiré du catalogue. Portait déjà son propre bandeau d'obsolescence | 2026-09-15 |
| `ARGUMENTS-APPEL-priority.md` | Anti-sèche d'appel argumentant **en entier** le tier Priority, retiré du catalogue le 2026-08-24. `PRODUIT-ET-OFFRES.md` demandait son archivage « pour éviter qu'il ressorte en préparation d'appel » | 2026-09-15 |
| `EVALUATION-STRATEGIQUE-2026-06.doublon-racine.md` | **Doublon** de `01-Strategie-Offre/EVALUATION-STRATEGIQUE-2026-06.md`, avec 11 lignes divergentes sur la continuité de service. La version conservée est celle du sous-dossier : plus complète et employant le vocabulaire retenu (« kit d'autonomie individuel par agent ») | 2026-09-15 |
| `apercu-hero-simulateur.html` | Maquette de hero portant encore `priorityMult`, supprimé d'`assets/site.js` le 2026-08-24 | 2026-09-15 |
| `prompt-prix.html` · `prompt-prix-v2.html` | Prompts de travail ayant servi à produire `RAPPORT-PRIX.html`. Contiennent des grilles antérieures à la bascule salariale | 2026-09-15 |

## Ce qui n'est **pas** ici, et pourquoi

- **Les quatre audits** — tous cités comme sources actives (voir l'encadré ci-dessus).
- **`remuneration-vololoniaina.html`** — le poste a pris fin le 2026-08-27, mais
  `FINANCE-PREVISIONNEL.md` le cite et il documente la rémunération d'une personne réelle.
  Son sort est une décision RH, pas un rangement.
- **`RAPPORT-PRIX.html`, `BILAN-SESSION-*.html`, `EVALUATION-STRATEGIQUE`** — archives de
  raisonnement datées, qu'on ne réécrit pas a posteriori mais qui restent consultables à
  leur place. `PRICING.md` §3.g les désigne explicitement comme telles.
