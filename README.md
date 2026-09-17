# Salve2 — Salverys

Dépôt de travail Salverys (BPO Antananarivo → clients FR). Contient la **documentation
business** (rangée par dossiers thématiques ci-dessous) et le **site/CRM** (fichiers HTML
+ `assets/` + `tools/`, à la racine — chemins codés en dur, ne pas déplacer).

## À la racine (contexte permanent)

| Fichier | Rôle |
|---|---|
| `CLAUDE.md` | Instructions projet (contexte, marque, règles) — **doit rester à la racine** |
| `PRICING.md` | **Grille partenaire marque blanche en vigueur** — prix, volume ferme, dépôt et SLA |
| `01-Strategie-Offre/PRODUIT-ET-OFFRES.md` | Produit et discours d'offre actuels |
| `01-Strategie-Offre/FINANCE-PREVISIONNEL.md` | Hypothèses financières et scénarios explicites, à rapprocher des coûts réels |
| `projection-finances-salverys.html` | **Projection de finances** — trésorerie, contribution par contrat et point mort, avec choix du tarif (marque blanche, client final, prix libre). Moteur : `tools/finance-model.mjs`, recopié dans la page par `tools/sync-projection.mjs` |
| `ESPACE-CLIENT-CANDIDAT.md` | Procédure de build des espaces protégés (couplée aux HTML/`tools/`) |

## Documentation par dossier (ordre du funnel)

| Dossier | Contenu |
|---|---|
| `01-Strategie-Offre/` | Offre médicale, offre irrésistible, éval. stratégique, prévisionnel, branding, narratif callbot, arguments Priority, conformité HDS/RGPD |
| `02-Prospection/` | Séquences cold (`OUTREACH-*`), scripts d'appel, one-pagers, **`PLAYBOOK-SALES-NAVIGATOR.md`** (méthode de prospection en production), **`BAROMETRE-EXTERNALISATION-N1.md`** (protocole d'entretiens marché) |
| `03-Cibles-Prospects/` | Analyses prospects (`PROSPECT-ANALYSIS-*`), décideurs, cibles ESN/télésec, ICP |
| `04-Closing/` | Devis, contrat de prestation, DPA/RGPD, onboarding client |
| `05-Process-Delivery/` | Grille QA + double écoute, modèles de reporting client |
| `06-Warmup-Email/` | Warm-up email (démarrage, manuel) |

La version complète antérieure de `PRICING.md` est sauvegardée dans `99-Archives/PRICING-REGISTRE-INTERNE-2026-09-15.md` (décisions passées et tarifs directs). L'ancien prévisionnel, ses audits et les anciens simulateurs directs sont également conservés dans `99-Archives/`. Leurs tarifs, benchmarks et prévisions ne doivent pas être repris dans les devis actifs.

## Site / CRM (racine — ne pas déplacer)

`index.html`, `CRM_Salverys.html`, pages métier partenaires, espaces client/candidat, chartes,
`assets/`, `tools/`. Build : `tools/build-site.sh`.

> Après toute modification de `tools/finance-model.mjs` : `node tools/sync-projection.mjs`
> puis `node tools/finance-model.test.mjs`. Le test échoue si la copie embarquée dans
> `projection-finances-salverys.html` a dérivé de la source. `tresorerie-salverys.html`
> n'est plus qu'une redirection vers cette page.

> ⚠️ **Les CRM HTML (`CRM_Salverys*.html`) ne sont plus l'outil de prospection en production**
> (depuis le 2026-08-28). Ils stockent en `localStorage` : non partagés, non sauvegardés —
> 60 comptes y avaient déjà été perdus. La base de prospection vit désormais dans **Airtable
> (« Prospection Salverys »)** — une seule base, 4 tables liées (`Comptes`, `Contacts`,
> `Appels`, `Objections`) — sauvegardée dans `exports/PROSPECTION-comptes-MB-France.csv`.
> Voir `02-Prospection/AUDIT-PARCOURS-SALES-NAVIGATOR.md`.
