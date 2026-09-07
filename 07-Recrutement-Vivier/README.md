# 07 — Recrutement & Vivier de talents

Constitution d'un **vivier préqualifié** de profils repérés **sur Facebook** (sourcing
**sortant**), pour avoir des candidats **prêts à affecter dès qu'un client signe**.
Distinct du flux **entrant** (`espace-candidat.html`, où le candidat postule de lui-même).

Cible : les profils des 3 niches + les 2 managers — **3 250 000 Ar/mois (650 €) brut, en
CDI** (équipe 100 % salariée depuis le 2026-08-14, cf. `CLAUDE.md`), objectif
**zéro turnover**. On recrute des **salariés**, pas des freelances : le sourcing reste
sur les groupes FB fréquentés par des indépendants (vivier le plus actif), mais l'offre
proposée est un contrat salarié dès le premier contact.

## Par où commencer (30 min)

1. **Choisis ton outil** (les deux sont gratuits, même schéma, migration facile) :
   - **Notion mono-user** → blocs illimités, le plus simple, mais **toi seule édites** et pas
     de relance automatique. → `VIVIER-Notion-GUIDE.md`
   - **Airtable** → les **2 managers co-éditent** (3 sièges gratuits) + **digest e-mail de
     relances** auto, au prix d'un plafond de 1 000 lignes/base. → `VIVIER-Airtable-GUIDE.md`

   > Règle simple : si les managers doivent qualifier eux-mêmes leur niche → **Airtable**.
   > Si tu centralises tout → **Notion**.

2. **Importe** `vivier-template.csv` (sert aux deux outils) et suis le guide choisi.
3. **Publie le formulaire de saisie rapide** et épingle-le sur ton mobile (sourcing en 20 s).
4. **Qualifie** chaque profil avec le mini-test → reporte le score dans `Résultat test`.

## Contenu du dossier

| Fichier | Rôle |
|---|---|
| `README.md` | Ce mode d'emploi |
| `OUTREACH-Post-Groupes-FB.md` | **Point d'entrée** : post public de sourcing publié dans les groupes FB |
| `Script-MP-Screening-Candidats-N1.html` | **Boîte à phrases MP** pour le screening en discussion (Support N1) |
| `vivier-template.csv` | Modèle d'import (27 champs) — **Airtable et Notion** |
| `VIVIER-Airtable-GUIDE.md` | Montage Airtable (multi-éditeurs + relances auto) |
| `VIVIER-Notion-GUIDE.md` | Montage Notion (mono-user, blocs illimités) |
| `REFERENTIEL-NIVEAU-AGENT-N1.md` | **Niveau minimal exigé d'un agent N1** (8 dimensions, seuils E/S/C), test technique /20, calage avec le prix vendu et avec le salaire |
| `MINI-TEST-Qualification.md` | Grille de test /20 → Note `A/B/C` |
| `MINI-TEST-Scripts-Reponses.md` | Scripts de mise en situation + corrigé **A vs C** par niche |
| `ROUTINE-Evaluation-Candidat.md` | **Routine d'évaluation** : réclamer le CV, détecter surévaluation/mensonges, note provisoire |

## Le flux en 1 coup d'œil

```
Sourcing FB :
  • Post public dans les groupes (OUTREACH-Post-Groupes-FB.md)  ──► réponses commentaire / MP
  • + repérage manuel ciblé (mobile, form 20 s)
        │
        ▼
  Screening en MP (Script-MP-Screening-Candidats-N1.html)
        │
        ▼
  Réclamer le CV (→ Drive, lien dans « Lien CV ») + évaluation écrite
  (ROUTINE-Evaluation-Candidat.md : surévaluation / mensonges → note provisoire)
        │
        ▼
  Mini-test /20  ──►  Note A / B / C   (reporté dans « Résultat test »)
        │
        ▼
  Pipeline : Repéré → À contacter → En discussion → Préqualifié → Testé
             → ✅ Vivier validé → Affecté → ⛔ Écarté
        │
        ▼
  Client signe  ──►  vue « ✅ Prêts à affecter »  ──►  affectation
```

## Principes à garder

- **Pas de suppression programmée** : le vivier est un **actif**. On **archive** les profils
  inactifs en `⛔ Écarté`, on n'efface pas.
- **Hygiène données (pratique)** : on stocke le **lien** FB (pas la photo), on **informe** la
  personne au 1er contact, on parle en interne via le `Code interne VIV-XXXX`.
- **Pas de scraping** Facebook (CGU Meta) : repérage **manuel ciblé**.
- **Quand quitter le gratuit** : seulement si une base active approche ~900 lignes (parade :
  1 base par niche) ou si tu veux ta marque/propriété totale — voir §10 du guide Airtable.
