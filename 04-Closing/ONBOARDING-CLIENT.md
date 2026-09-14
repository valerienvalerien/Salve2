# ONBOARDING-CLIENT.md — Process d'onboarding client Salverys

> Du « oui » au régime stabilisé. S'applique au **médical direct** et au **MB partenaire**
> (adapter l'outil et le KPI). Objectif : tenir la promesse du one-pager — **« QA, double
> écoute, reporting, escalades documentés avant le premier appel/ticket »** — et faire
> basculer proprement le mois d'entrée vers le régime avec engagement de service.
>
> ⚠️ **Mécanique d'entrée dissociée (2026-08-03)** : **en direct** → mois pilote **−50 %** ;
> **en marque blanche** → **pas de remise**, mais **dépôt d'activation** encaissé en phase 0
> et **contreparties de risque** (`PRICING.md §3.a/§3.b`).
>
> Prix & garanties : `PRICING.md` fait foi. Documents liés : `MODELE-DEVIS.md`,
> `MODELE-CONTRAT-PRESTATION.md`, `MODELE-DPA-RGPD.md`, `PROCESS-QA-DOUBLE-ECOUTE.md`,
> `MODELE-REPORTING-CLIENT.md`.

---

## Vue d'ensemble (jalons)

| Phase | Quand | Aboutissement |
|---|---|---|
| 0. Cadrage | J-? (1 RDV) | Périmètre figé, contrat + DPA signés, **dépôt encaissé (MB)** |
| 1. Mise en service | ~2-3 semaines | Outils intégrés, scripts prêts, QA armée |
| 2. J1 — démarrage pilote | Jour 1 | 1er appel/ticket décroché sous le nom du client |
| 3. Semaine 1 | S1 | Ajustements scripts, double écoute renforcée |
| 4. Bascule régime | fin du mois d'entrée | Plein tarif (direct) + **activation de l'engagement de service** |
| 5. Jalon 60 j | J+60 | Bilan + **témoignage** (programme fondateurs) |

---

## Phase 0 — Cadrage (1 RDV)

Objectif : **figer le périmètre** (il devient l'Annexe de niche du contrat et la base de
l'engagement de service).

- [ ] Périmètre : créneaux couverts, volumes attendus, forfait/ETP retenu.
- [ ] **Scripts & consignes** d'accueil (sous le nom du client/cabinet).
- [ ] **KPI & seuil** engagés : médical → décroché ≥ 90 % · support → SLA 1re réponse ·
  helpdesk → SLA prise en charge. **Figés ici.**
- [ ] Procédure d'**escalade** (qui, quand, vers qui côté client).
- [ ] Outils à intégrer + modalités d'accès (comptes nominatifs).
- [ ] **MB — régime de sous-traitance du partenaire** (bloquant, cf. `IDEAL-CUSTOMER-PROFILE.md`
  Q7) : son contrat client prévoit une **autorisation générale** (→ information préalable
  suffit) ou un **accord spécifique préalable** (→ il doit l'obtenir **avant** notre
  démarrage) ? Existe-t-il une **clause de localisation UE/EEE** ? Consigner la réponse.
  - [ ] Si accord spécifique requis : **ne pas engager de recrutement** avant confirmation
    écrite du partenaire qu'il l'a obtenu.
- [ ] **Signature** : devis + contrat de prestation + **DPA**.
- [ ] **Direct** — choix offre de lancement : mois pilote −50 % ou programme fondateurs.
- [ ] **Marque blanche** — **pas de remise**. À la place :
  - [ ] **Dépôt d'activation encaissé** : 900 €/position — **avant tout
    démarrage de la mise en service**. Rappeler qu'il est **imputé sur les 3 premières
    factures** (300 €/position/mois) et ne coûte rien au partenaire qui va au bout.
  - [ ] **Palier tarifaire figé** : si palier **5+**, acter le **minimum facturable de
    5 positions** (dues consommées ou non) dans l'Annexe B du contrat.
  - [ ] **Contreparties de risque** concédées, écrites et **cochées** dans le devis (B.7) :
    sortie 30 j / exclusivité 12 mois / appui avant-vente 48 h. Une à la fois.
  - [ ] Si **appui avant-vente** concédé : envoyer le **kit sous 48 h ouvrées** —
    `04-Closing/DOSSIER-AVANT-VENTE/` (PCA, engagement SLA, dispositif QA, profils
    anonymisés, note transfert hors UE) **+ le DPA**. Les pièces existent : il n'y a qu'à
    remplacer les `[...]` par les valeurs du compte. Elle doit partir vite ou elle ne vaut rien.

> **Garde-fou trésorerie** : en MB, **ne pas engager de recrutement avant l'encaissement du
> dépôt**. C'est tout l'intérêt du dispositif (`FINANCE-PREVISIONNEL.md §6` — encaissement
> J0 au lieu de J+30).

## Phase 1 — Mise en service (~2-3 semaines, **offerte**)

- [ ] **Intégration outils par Salverys** : Doctolib / Maiia / Médistory / Cegedim (médical)
  ou ticketing/ITSM (support/IT) — **comptes nominatifs + MFA**, droits au strict nécessaire.
- [ ] Paramétrage agenda / files / macros selon les consignes.
- [ ] **Formation des agents** aux scripts, au secret médical/RGPD, aux process d'escalade.
- [ ] **Armement QA** : grille de scoring prête, planning de double écoute, gabarit de
  reporting instancié (`PROCESS-QA-DOUBLE-ECOUTE.md`, `MODELE-REPORTING-CLIENT.md`).
- [ ] Vérification **continuité** : kit d'autonomie de chaque agent **testé** (bascule
  réelle, autonomie constatée) + **manager du compte identifié et formé aux procédures du
  client** — c'est lui qui reprend les absences ponctuelles sur une position dédiée
  (`PRICING.md` §3.e), aucune tête supplémentaire n'est à prévoir.
- [ ] Test de bout en bout (appel/ticket fictif) avant J1.

## Phase 2 — J1, démarrage du pilote

- [ ] Décroché sous le nom du client dès le 1er appel/ticket.
- [ ] Point de fin de journée J1 (volume, incidents, ressenti).
- [ ] KPI partagés **dès J1** (le pilote reste « sans engagement », mais on mesure tout).

## Phase 3 — Semaine 1

- [ ] **Double écoute renforcée** (cadence rapprochée la 1re semaine).
- [ ] Ajustement des scripts / consignes selon les premiers cas réels.
- [ ] 1er reporting intermédiaire au client + point hebdo.

## Phase 4 — Bascule en régime (fin du mois pilote)

- [ ] Bilan du mois pilote (KPI atteints, ajustements faits).
- [ ] **Direct** : passage au **plein tarif** (ou paliers fondateurs −30 % puis −15 %).
- [ ] **MB** : pas de bascule tarifaire (le tarif du palier s'applique dès le 1er mois).
  Vérifier l'**imputation du dépôt** sur les factures 1 à 3 (300 €/position/mois) et
  **solder le reliquat** sur la facture suivante.
- [ ] **MB, palier 5+** : contrôler que le **minimum facturable de 5 positions** est bien
  facturé, y compris si le partenaire en consomme moins. Sinon, rebasculer au tarif du
  palier 3 ETP pour le mois concerné.
- [ ] **Activation de l'engagement de service** (le KPI engagé court à partir du 1er mois
  plein en régime ; avoir 20 % si non tenu — cf. contrat art. 6 / `PRICING.md §7`).
- [ ] Confirmation de la cadence de reporting (mensuel médical / hebdo MB).

## Phase 5 — Jalon 60 jours

- [ ] Bilan à 60 j (tendance KPI, satisfaction).
- [ ] **Contreparties programme fondateurs** : **témoignage** + **1 mise en relation** si
  satisfait (cf. `PRICING.md §7`).
- [ ] Plan d'extension du périmètre (sites supplémentaires, ETP, options d'amplitude).

---

## RACI synthétique

| Activité | Salverys | Client |
|---|---|---|
| Définition périmètre & KPI | Propose / cadre (R) | Valide (A) |
| Fourniture accès & scripts | Consulté (C) | Responsable (R) |
| Intégration outils & formation agents | R/A | Consulté (C) |
| QA / double écoute / reporting | R/A | Informé (I) |
| Disponibilité de ses propres systèmes | Informé (I) | Responsable (R) |
| Signature contrat / DPA | R | A |

---

## Garde-fous onboarding

- Ne jamais démarrer J1 sans **QA armée et escalades documentées** (promesse one-pager).
- Ne jamais **facturer** la mise en service (affichée 490 € → **offerte**), en direct comme
  en MB. Le **dépôt d'activation MB n'est pas une facturation de la mise en service** : il
  est **imputable** et revient au partenaire dans ses 3 premières factures.
- **MB** : ne jamais engager de recrutement **avant encaissement du dépôt**.
- **MB** : ne **jamais** consentir de remise sur le prix de gros (`PRICING.md §3.b`). Si le
  partenaire pousse, concéder une **contrepartie de risque** (B.7 du devis) — une seule.
- Périmètre et seuil **figés au cadrage** — toute extension passe par avenant/devis.
- Médical : parler de **« forfait »**, jamais d'« abonnement ».
