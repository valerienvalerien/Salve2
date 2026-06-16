# Salve2 — Salverys

Dépôt de travail Salverys (BPO Antananarivo → clients FR). Contient la **documentation
business** (rangée par dossiers thématiques ci-dessous) et le **site/CRM** (fichiers HTML
+ `assets/` + `tools/`, à la racine — chemins codés en dur, ne pas déplacer).

## À la racine (contexte permanent)

| Fichier | Rôle |
|---|---|
| `CLAUDE.md` | Instructions projet (contexte, marque, règles) — **doit rester à la racine** |
| `PRICING.md` | **Source unique de vérité tarifaire** — référencé partout |
| `ESPACE-CLIENT-CANDIDAT.md` | Procédure de build des espaces protégés (couplée aux HTML/`tools/`) |

## Documentation par dossier (ordre du funnel)

| Dossier | Contenu |
|---|---|
| `01-Strategie-Offre/` | Offre médicale, offre irrésistible, éval. stratégique, prévisionnel, branding, narratif callbot, arguments Priority, conformité HDS/RGPD |
| `02-Prospection/` | Séquences cold (`OUTREACH-*`) + one-pagers (chaînes médical, partenaire MB) |
| `03-Cibles-Prospects/` | Analyses prospects (`PROSPECT-ANALYSIS-*`), décideurs, cibles ESN/télésec, ICP |
| `04-Closing/` | Devis, contrat de prestation, DPA/RGPD, onboarding client |
| `05-Process-Delivery/` | Grille QA + double écoute, modèles de reporting client |
| `06-Warmup-Email/` | Warm-up email (démarrage, manuel) |

## Site / CRM (racine — ne pas déplacer)

`index.html`, `CRM_Salverys.html`, simulateurs, espaces client/candidat, chartes,
`assets/`, `tools/`. Build : `tools/build-site.sh`.
