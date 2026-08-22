# PLAN-MOBILISATION-ECONOCOM-M6.md — Plan retenu (v2)

> **Scénario** : contrat **helpdesk IT N1** en marque blanche pour l'ESN **Econocom**, opéré
> **sous sa marque** pour son client final **M6**. Chaîne de rang 2 : **M6 → Econocom →
> Salverys**.
>
> **v2 — 2026-08-22.** Remplace la v1 (dans l'historique git). Issue de
> `AUDIT-PLAN-MOBILISATION-ECONOCOM-M6.md`, qui compare la v1 à un plan directeur type
> transition ESN. La v2 garde la **séquence et les verrous** de la v1 et reprend la
> **méthode de transition** du plan directeur.
>
> **Trois corrections matérielles par rapport à la v1** :
> 1. **Dimensionnement** — la v1 oubliait le shrinkage : **16 ETP → 18**.
> 2. **Financement** — la v1 annonçait 60 k€ sans mettre l'investissement dans la courbe de
>    trésorerie : le besoin nu est de **85 k€**, ramené à **~28 k€** avec les trois leviers.
> 3. **Jalons → gates** — six portes avec critère de sortie et décideur, au lieu de dix dates.
>
> **Quatre ajouts** : Transition Pack opposable · courbe de bascule du volume distincte de la
> courbe d'effectif · hypercare borné · lignes de planning **à la charge d'Econocom**.
>
> Vue timeline : `gantt-econocom-m6.html`. Sources qui font foi et ne sont pas réécrites ici :
> `PRICING.md`, `01-Strategie-Offre/FINANCE-PREVISIONNEL.md`,
> `05-Process-Delivery/GOUVERNANCE-CHAINE-COMMANDEMENT.md`, `PROCESS-QA-DOUBLE-ECOUTE.md`,
> `04-Closing/ONBOARDING-CLIENT.md`.

---

## 1. Dimensionnement (hypothèse à valider — tout le plan en dépend)

| Paramètre | Valeur | Règle |
|---|---|---|
| Positions de service simultanées | **12** | hypothèse |
| Amplitude | 8h-20h (60 h/sem) ⇒ **×1,33** | `PRICING.md §3.c` |
| **Shrinkage** (congés 30 j/an, maladie ~3 %, formation, pauses) | **×1,15** | ~13 % d'absence, `PRICING.md §3.e` |
| **ETP facturés** | **18** | 12 × 1,33 × 1,15 = 18,4 |
| Palier tarifaire | **9+ ETP — 1 550 €/ETP/mois** | `PRICING.md §3` |
| **CA de régime** | **27 900 €/mois ≈ 335 k€/an** | 18 × 1 550 € |
| Encadrement | 2 référents d'exploitation IT + 1 coordinateur planning | 1 par métier +1 par tranche de 8, `PRICING.md §3.e` |
| **Effectif total** | **21 personnes** | 18 + 3 |

> **Formule à porter dans `PRICING.md §3.c`** :
> `ETP facturés = positions × coefficient d'amplitude × coefficient de shrinkage (1,15)`.
> Le §3.c traite déjà l'amplitude en ETP plutôt qu'en majoration ; l'absentéisme relève de la
> même logique — il impose des têtes, pas un pourcentage de confort. La v1, qui s'arrêtait à
> l'amplitude, sortait une marge de 20 % qui n'existait qu'en supposant zéro absence.

**Ordre de grandeur** : ce seul contrat vaut **~2× le scénario ambitieux à M12** du
prévisionnel, pour un effectif actuel d'**une salariée**. Ce n'est pas un onboarding client,
c'est un changement d'échelle de l'entreprise.

### Ce que ça déplace dans la doctrine maison

| Règle habituelle | Ce que ce contrat en fait |
|---|---|
| Séquence **Prospection → Équipe → Infrastructure** (`CLAUDE.md`) | La prospection est faite. **Équipe et Infrastructure en parallèle** — un grand compte n'homologue pas 18 agents sans plateau contrôlé. |
| Dépôt d'activation 900 €/position, **plafond 2 700 €** (`PRICING.md §3.a`) | Plafond calibré pour 3 positions. Remplacé par un **acompte de mobilisation de 50 k€** (§6). |
| « Opérationnel en 3 à 4 semaines » (`PRICING.md §3.c`) | Vrai **par vague, après embauche**. Faux pour 18 ETP : **go-live S16, 100 % du volume S26**. |
| Mise en service **offerte** | Reste offerte comme ligne de devis. L'**investissement plateau** se finance — il n'est pas dans le prix du palier. |

---

## 2. Les six gates

Un jalon est une date, et une date se rate en silence. Un gate est une **question à laquelle
il faut répondre oui**, avec un décideur. **Le go-live est impossible tant que G1 → G5 ne sont
pas franchis.**

| Gate | Quand | Décideur | Ce qu'il faut pouvoir affirmer | Ce qu'il ouvre |
|---|---|---|---|---|
| **G1 — Contract Ready** | fin S6 · 02/10 | Direction | Autorisation **écrite** de M6 (sous-traitance rang 2 + traitement hors UE) · référencement fournisseur abouti · contrat, DPA et CCT signés · bon de commande émis · **acompte encaissé** | Toute embauche et tout engagement de dépense |
| **G2 — Scope Ready** | fin S9 · 23/10 | Direction + Econocom | **Transition Pack** reçu et complet · périmètre et exclusions figés · SLA, KPI et plafond de pénalités actés · dimensionnement validé · **plan de bascule du volume convenu par écrit** | La formation métier et la suite du build |
| **G3 — Production Ready** | fin S12 · 13/11 | Direction + sécurité Econocom | Plateau homologué · réseau et énergie redondés et **testés** · postes et accès nominatifs opérationnels · ITSM et téléphonie recettés · **PCA testé** · financement disponible | Le pilote |
| **G4 — People Ready** | fin S12 · 13/11 | Référent d'exploitation | Vague 1 **certifiée** (go/no-go individuel) · background checks passés · encadrement en poste · dispositif QA armé | Le pilote |
| **G5 — Pilot Accepted** | fin S15 · 04/12 | Econocom | KPI du pilote tenus sur 3 semaines · écarts corrigés · **PV d'acceptation signé** | Le go-live et l'opposabilité des SLA |
| **G6 — BAU Ready** | S30 · 15/03 | Direction + Econocom | 100 % du volume basculé · SLA tenus 4 semaines consécutives hors hypercare · audit SLA passé · plan de réversibilité remis · comitologie en régime | La clôture du mode projet |

> **G3 et G4 tombent la même semaine.** Deux chaînes critiques — le **plateau** et le
> **recrutement** — convergent en S12 sans marge. C'est contre-intuitif et c'est là que les
> plans de ce type déraillent : on surveille le recrutement et on découvre que le bail n'est
> pas signé.

---

## 3. Plan par étapes

Semaine 1 = **lundi 24/08/2026**. Responsables : **DIR** direction · **EXP** référent
d'exploitation IT · **RH** recrutement · **FIN** finance/administratif · **INF**
infrastructure · **COM** Vololona · **ECO** *Econocom — tâche à la charge du donneur d'ordre,
avec échéance opposable*.

### Phase 1 — Conditions suspensives & contrat · S1 → S6 · *Juridique*

| N° | Tâche | Sem. | Resp. | Ant. | Livrable |
|---|---|---|---|---|---|
| 1.1 | Qualifier la chaîne rang 2 : autorisation M6 (générale/spécifique), clause de localisation UE/EEE | S1-S2 | DIR | — | Réponse **écrite** d'Econocom **(condition suspensive)** |
| 1.2 | Référencement fournisseur : RCS malgache, statuts, attestations CNaPS/fiscale, RIB, KYC | S1-S4 | FIN | — | Dossier déposé (plateforme achats) |
| 1.3 | RC professionnelle : couverture France, montant exigé | S2-S4 | FIN | 1.2 | Attestation conforme |
| 1.4 | Dossier sécurité : PSSI, PCA/PRA, contrôle d'accès, journalisation, zéro download | S2-S5 | DIR | 1.2 | Base : `04-Closing/DOSSIER-AVANT-VENTE/` |
| 1.5 | DPA art. 28 en cascade + CCT hors UE + analyse de transfert | S2-S5 | DIR + conseil | 1.1 | DPA + CCT signés |
| 1.6 | Négociation économique : 1 550 €/ETP, **18 ETP fermes**, acompte 2 mois, paiement 30 j, facturation à échoir, **postes fournis ou loués par Econocom** | S3-S5 | DIR | 1.1 | Conditions actées |
| 1.7 | Termes de sortie : préavis 6 mois, indemnité, **plafond de pénalités 5 %**, exclusions, réversibilité | S3-S5 | DIR | 1.1 | Clauses actées |
| 1.8 | Contrat-cadre + annexes + bon de commande | S5-S6 | DIR | 1.5 | Contrat signé + BdC |

**◆ G1 — CONTRACT READY — fin S6.**

### Phase 2 — Financement · S1 → S8 · *Finance*

| N° | Tâche | Sem. | Resp. | Ant. | Livrable |
|---|---|---|---|---|---|
| 2.1 | Modèle de trésorerie par palier d'effectif | S1-S2 | FIN | — | Simulation (base `tresorerie-salverys.html`) |
| 2.2 | Mobiliser la ligne de financement | S2-S8 | DIR | 2.1 | **50 k€ disponibles** (§5) |
| 2.3 | Affacturage / escompte sur créance Econocom | S5-S8 | FIN | 1.8 | Convention signée |
| 2.4 | Provision « coût de sortie » (préavis + indemnités, 21 CDI) | S17 → | FIN | 9.3 | Provision au bilan |

**◇ F — Financement disponible — fin S8.** Autorise l'investissement plateau.

### Phase 3 — Transition Pack & cadrage · S5 → S9 · *Delivery*

| N° | Tâche | Sem. | Resp. | Ant. | Livrable |
|---|---|---|---|---|---|
| **3.1** | **Remise du Transition Pack complet** (contenu au §4) | S5-S7 | **ECO** | G1 | Pack reçu — **clause de décalage attachée** |
| 3.2 | Atelier périmètre : catalogue N1, **exclusions écrites**, volumétrie, saisonnalité M6 | S6-S7 | DIR | 3.1 | Annexe périmètre |
| 3.3 | Dimensionnement : 12 positions × 1,33 × 1,15 = 18 ETP, plan de rotation | S7 | DIR | 3.2 | Plan de charge |
| 3.4 | SLA & KPI opposables, seuils **figés**, plafond de pénalités | S7-S8 | DIR | 3.2 | Annexe SLA |
| 3.5 | **Plan de bascule du volume** : paliers, dates, préavis de changement | S7-S8 | DIR + ECO | 3.4 | Annexe ramp-up |
| 3.6 | Matrice d'escalade N1 → N2 Econocom → M6 + **canal unique** | S8 | EXP | 3.4 | Procédure (`GOUVERNANCE §2`) |
| **3.7** | **Ouverture des accès ITSM nominatifs + MFA** | S8-S9 | **ECO** | 1.4 | Accès ouverts et testés |
| 3.8 | Runbook, arbre de qualification, base de connaissance | S8-S9 | EXP | 3.7 | Runbook v1 |
| 3.9 | Armement QA : scoring, double écoute, gabarit de reporting | S9 | EXP | 3.8 | Dispositif QA armé |

**◆ G2 — SCOPE READY — fin S9.**

### Phase 4 — Build : plateau, infrastructure, sécurité · S6 → S12 · *Infra*

| N° | Tâche | Sem. | Resp. | Ant. | Livrable |
|---|---|---|---|---|---|
| 4.1 | Plateau dédié Antananarivo (~170 m²) : bail, cloisonnement, contrôle d'accès badge, salle de formation | S6-S9 | DIR | 1.6 | Bail signé + aménagement |
| 4.2 | Double liaison internet (2 opérateurs) + secours 4G + QoS voix | S8-S10 | INF | 4.1 | Liaisons recettées |
| 4.3 | Énergie : onduleurs + groupe électrogène | S8-S10 | INF | 4.1 | Autonomie testée |
| 4.4 | 22 postes masterisés (chiffrés, EDR, zéro download) + casques — **loués via Econocom** | S9-S11 | INF | F | Parc livré et inventorié |
| 4.5 | VPN nominatif + MFA + journalisation | S10-S11 | INF | 4.4 | Accès conformes au dossier sécurité |
| 4.6 | Téléphonie / CTI sous marque Econocom : SDA, routage, supervision | S10-S11 | INF | 4.2 | Chaîne voix recettée |
| 4.7 | **PCA testé** : bascule plateau → kits d'autonomie, test réel documenté | S11-S12 | EXP | 4.6 | PV de test |
| **4.8** | **Audit et visite d'homologation sur site** | S12 | **ECO** | 4.7 | Rapport d'homologation |

**◆ G3 — PRODUCTION READY — fin S12.**

### Phase 5 — Staffing & certification, vague 1 · S3 → S12 · *Équipe*

| N° | Tâche | Sem. | Resp. | Ant. | Livrable |
|---|---|---|---|---|---|
| 5.1 | Sourcing du vivier — **sans engagement, coût ~0** | S3-S6 | RH | — | Vivier 60+ (`07-Recrutement-Vivier/`) |
| 5.2 | Recruter le **référent d'exploitation IT n°1** — avant les agents | S3-S6 | DIR | 5.1 | En poste **S6** |
| 5.3 | Campagne V1 : 6 agents N1 **+ 2 en réserve** | S6-S8 | RH | **G1** | Candidats retenus |
| 5.4 | CDI, clause de confidentialité, **background checks** | S8-S9 | FIN | 5.3 | 6 CDI signés, checks passés |
| 5.5 | Formation socle : marque blanche Econocom, RGPD, sécurité M6 | S9-S10 | EXP | 5.4 | Attestations |
| 5.6 | Formation métier : ITSM, catalogue, runbook, escalade | S10-S11 | EXP | 3.8 | Agents opérationnels sur l'outil |
| 5.7 | Simulation, double écoute, scoring à blanc | S11-S12 | EXP | 5.6 | Scores QA ≥ seuil |
| 5.8 | **Certification individuelle** — go/no-go par agent | S12 | EXP | 5.7 | PV de certification |

**◆ G4 — PEOPLE READY — fin S12.** À partir de 5.4, **les salaires courent**.

### Phase 6 — Pilote à périmètre restreint · S13 → S15 · *Delivery*

| N° | Tâche | Sem. | Resp. | Ant. | Livrable |
|---|---|---|---|---|---|
| 6.1 | **Pilote** : un périmètre M6, 200-400 tickets, 6 positions — **facturé** (`PRICING §3.b`) | S13-S15 | EXP | G3 + G4 | Premier ticket sous marque Econocom |
| 6.2 | Monitoring quotidien + double écoute renforcée | S13-S15 | EXP | 6.1 | Comptes rendus quotidiens |
| 6.3 | Correction des écarts : runbook, seuils, plan de charge | S14-S15 | EXP | 6.2 | Runbook v2 |
| **6.4** | **Recette et PV d'acceptation** | S15 | **ECO** | 6.3 | PV signé |

**◆ G5 — PILOT ACCEPTED — fin S15.**

### Phase 7 — Staffing & certification, vagues 2 et 3 · S10 → S21 · *Équipe*

| N° | Tâche | Sem. | Resp. | Ant. | Livrable |
|---|---|---|---|---|---|
| 7.1 | Campagne V2 — lancée **pendant** la formation V1 | S10-S12 | RH | 5.1 | 6 candidats + réserve |
| 7.2 | Embauches V2 + **référent d'exploitation n°2** (seuil de 8 agents) | S13 | FIN | 7.1 | 7 CDI signés |
| 7.3 | Formation et certification V2 — **tutorat par la V1** | S13-S15 | EXP | 7.2 | 12 agents certifiés à S16 |
| 7.4 | Campagne V3 | S14-S17 | RH | 5.1 | 6 candidats + réserve |
| 7.5 | Embauches V3 + coordinateur planning | S18 | FIN | 7.4 | 7 CDI signés |
| 7.6 | Formation et certification V3 — **conduite pendant le gel de changement** | S19-S21 | EXP | 7.5 | 18 agents certifiés à S22 |

### Phase 8 — Go-live, ramp-up et hypercare · S16 → S26 · *Delivery*

| N° | Tâche | Sem. | Resp. | Ant. | Livrable |
|---|---|---|---|---|---|
| 8.1 | **GO LIVE** : bascule officielle, SLA opposables, **palier 25 %** du volume | S16 | EXP | G5 | Mise en service |
| 8.2 | **Hypercare** : supervision renforcée, point quotidien, **sortie formelle** vers le RUN | S16-S20 | EXP | 8.1 | PV de sortie d'hypercare |
| 8.3 | *Gel de changement M6 — aucun palier de volume possible* | S17-S19 | ECO | — | contrainte client |
| 8.4 | Palier **50 %** du volume | S20 | EXP + ECO | 8.2 | — |
| 8.5 | Palier **75 %** du volume — exige les 18 ETP certifiés | S23 | EXP + ECO | 7.6 | — |
| 8.6 | Palier **100 %** du volume | S26 | EXP + ECO | 8.5 | Production nominale |

**◇ GL — Go-live — S16 · 07/12.**

### Phase 9 — Régime, pilotage et couverture du risque · S13 → S30 · *Pilotage*

| N° | Tâche | Sem. | Resp. | Ant. | Livrable |
|---|---|---|---|---|---|
| 9.1 | Reporting hebdomadaire + revue de service mensuelle (`PRICING §3.d`) | S13-S30 | EXP | 6.1 | Rapports |
| 9.2 | QA en régime : double écoute, scoring, coaching | S13-S30 | EXP | 3.9 | Scores mensuels |
| 9.3 | **Facturation par palier d'effectif certifié** + imputation de l'acompte | S13-S30 | FIN | 6.1 | Factures + échéancier |
| 9.4 | Plan de réversibilité documenté et remis | S18-S21 | DIR | G5 | Plan v1 |
| 9.5 | **Relance de la prospection MB** — viser un 2e donneur d'ordre | S17-S30 | COM | — | Pipeline actif |
| 9.6 | Audit SLA à J+90 du go-live | S28-S29 | DIR | 8.6 | Rapport d'audit |
| 9.7 | Capacity plan v2 et revue de contrat | S29-S30 | DIR | 9.6 | PV de revue |

**◆ G6 — BAU READY — S30 · 15/03/2027.**

**Chemin critique** : 1.1 → 1.5 → 1.8 → **G1** → 5.3 → 5.4 → 5.6 → 5.7 → 5.8 → **G4** →
6.1 → 6.4 → **G5** → 8.1 → 8.4 → 8.5 → 8.6 → **G6**.
**Chaîne critique parallèle** : 4.1 → 4.2 → 4.6 → 4.7 → 4.8 → **G3** — même échéance, aucune
marge.
**Chaîne critique côté Econocom** : 3.1 → 3.7 → 3.8 → 5.6. Un retard sur ces trois lignes
décale le go-live d'autant — d'où la clause de décalage (§4).

---

## 4. Le Transition Pack — à exiger d'Econocom

Livrable unique, daté, **opposable**, dû à **S7** (soit J+10 après le bon de commande).
Deux fonctions au-delà de la commodité : c'est un **filtre d'intention** — un donneur d'ordre
incapable de le produire en deux semaines n'est pas prêt à sous-traiter — et c'est la base de
la **clause de décalage**.

| Domaine | À obtenir |
|---|---|
| Volumétrie | Tickets/jour, appels, mails, saisonnalité, historique 12 mois |
| SLA | Prise en charge, résolution, escalade, mesure, exclusions |
| Catalogue | Types de demandes prises en charge et **exclues** |
| Priorités | Définition et critères P1 / P2 / P3 / P4 |
| Escalade | Qui appeler, dans quel cas, sous quel délai |
| Outils | ITSM, téléphonie, monitoring, prise en main à distance |
| Accès | VPN, SSO, MFA, comptes nominatifs, procédure de création/révocation |
| Documentation | Base de connaissance, procédures, scripts existants |
| Sécurité | Politiques M6 et Econocom, exigences de contrôle, droit d'audit |
| Reporting | KPI attendus, format, fréquence, destinataires |
| Qualité | Dispositif QA, scoring, audits, fréquence |
| Planning | Horaires, jours fériés, astreintes, **gel de changement** |
| Organisation | N1 / N2 / N3, managers, interfaces |
| Contacts | Nominatifs M6 / Econocom / Salverys, avec suppléants |
| Formation | Parcours, examens, habilitations exigées |
| Continuité | Attentes PCA / PRA, scénarios de crise |

> **Clause de décalage** : tout jour de retard sur une ligne à la charge d'Econocom (3.1, 3.7,
> 4.8, 6.4) décale le go-live d'un jour, **sans pénalité pour Salverys**. Sans cette clause,
> le retard du donneur d'ordre devient une pénalité pour le sous-traitant.

---

## 5. Les trois courbes

L'effectif, la facturation et le volume **ne montent pas ensemble**. La v1 ne connaissait que
les vagues d'embauche ; le plan directeur ESN ne connaissait que le ramp-up de charge.

| | S13-S15 | S16-S19 | S20-S22 | S23-S25 | S26 → |
|---|---|---|---|---|---|
| **Effectif certifié** | 6 agents | 12 agents | 12 → **18** (S22) | 18 | 18 + 3 encadrants |
| **ETP facturés** | 6 · 9 300 € | 12 · 18 600 € | 18 · 27 900 € (S22) | 18 · 27 900 € | 18 · 27 900 € |
| **Volume basculé** | pilote (200-400 tickets) | **25 %** | **50 %** (S20) | **75 %** (S23) | **100 %** (S26) |

> **La règle : la facturation suit la courbe d'effectif certifié, pas celle du volume
> basculé.** Sinon Salverys finance la montée en charge d'Econocom — 18 ETP payés dès S22 pour
> un volume qui n'atteint 100 % qu'en S26. C'est exactement ce que couvre la clause de
> **volume ferme facturable** (`PRICING.md §3`), et c'est le point de négociation le plus
> rentable du dossier.

Le palier 25 % est calé en **S16, avant le gel de changement** de fin d'année ; aucun palier
n'est possible entre S17 et S19. La formation de la vague 3 est conduite **pendant** le gel,
sans impact production.

---

## 6. Chiffrage

### Économie de régime (18 ETP)

| Poste | Montant mensuel |
|---|---|
| **CA** — 18 ETP × 1 550 € | **+27 900 €** |
| Coût variable des agents placés — 18 × 843 € (`FINANCE §2.a`) | −15 170 € |
| Encadrement — 3 × 736 € | −2 210 € |
| Socle fixe existant (`FINANCE §2`) | −2 110 € |
| Plateau, liaisons, énergie — poste absent du modèle actuel | −2 000 € |
| **Marge nette** | **≈ +6 400 €/mois (23 %)** |

> **Le palier intermédiaire est le moment tendu** : à 12 ETP facturés (S16 → S21), la marge
> tombe à **≈ 2 900 €/mois (16 %)** — le socle fixe et le plateau ne se divisent pas.
>
> ⚠️ Le palier 9+ **n'intègre pas** le coût d'un plateau sécurisé : ~110 €/ETP/mois de plus
> que le modèle standard. **Ne jamais descendre sous 1 550 €** sur ce dossier, et chiffrer
> toute exigence d'amplitude en **ETP supplémentaires**, jamais en pourcentage de majoration
> (`PRICING.md §3.c`).

### Investissement de démarrage

| Poste | Acheté | Loué via Econocom |
|---|---|---|
| 22 postes masterisés + casques | 13 000 € | ~0 € (≈ 350 €/mois) |
| Aménagement plateau, cloisonnement, contrôle d'accès | 9 000 € | 9 000 € |
| Onduleurs + groupe électrogène | 5 000 € | 5 000 € |
| Caution et premiers loyers | 4 000 € | 4 000 € |
| Recrutement + formation (21 personnes) | 9 000 € | 9 000 € |
| **Total** | **~40 000 €** | **~27 000 €** |

### Trésorerie — l'échelle des leviers

Modèle hebdomadaire : 21 salaires, investissement, facturation par palier d'effectif,
encaissement décalé, acompte imputé sur six factures.

| Configuration | Creux | Besoin (+30 %) | Retour à l'équilibre |
|---|---|---|---|
| **Nu** — capex 40 k€ acheté, acompte 1 mois, paiement 30 j | −65 k€ (S28) | **85 k€** | S57 |
| + **postes loués via Econocom** (capex 22 k€) | −49 k€ | 63 k€ | S49 |
| + **acompte porté à 2 mois** (50 k€ imputables) | −37 k€ | 48 k€ | S49 |
| + **affacturage** sur créance Econocom | **−22 k€** | **28 k€** | **S38** |

> **Le premier levier est le plus facile et le moins évident : Econocom est un loueur et
> financeur d'actifs informatiques — c'est son métier historique.** Lui demander de fournir ou
> de louer les 22 postes n'est pas une faveur, c'est une ligne de son catalogue.
>
> **Recommandation : provisionner 50 k€ et obtenir au minimum deux leviers sur trois.**
> Aucun des trois obtenu ⇒ le contrat se renégocie ou se réduit, il ne se signe pas.
>
> La v1 annonçait 60 k€ : le chiffre couvrait le BFR salarial mais pas l'investissement, qui
> n'était pas dans la courbe.

### Ce qu'il faut obtenir à la négociation (1.6 / 1.7)

| Demande | Terme | Argument à opposer |
|---|---|---|
| **Volume ferme facturable** | **18 ETP** | Dus consommés ou non, **par palier d'effectif certifié**. En équipe salariée, le banc est un coût de sortie, pas un manque à gagner (`PRICING §3`). |
| **Acompte de mobilisation** | **50 000 €** | Deux mois de régime, imputables sur six factures — **coût nul** pour Econocom qui va au bout. Le dépôt standard (plafond 2 700 €) est calibré pour 3 positions. |
| **Fourniture ou location des postes** | 22 postes | Le métier d'Econocom. Retire 18 k€ du creux sans rien coûter à personne. |
| **Délai de paiement** | **30 j** date de facture | Pas 45-60 j fin de mois. Chaque mois de délai vaut ~28 k€ de BFR. |
| **Facturation à échoir** | mensuelle | Une position ferme est une capacité réservée : elle se paie d'avance. |
| **Clause de décalage** | 1 j / 1 j | Un jour de retard sur une ligne ECO décale le go-live d'un jour, sans pénalité. |
| **Préavis + indemnité de rupture** | **6 mois** | Couvrant préavis et indemnités de 21 CDI engagés sur la foi du bon de commande. |
| **Plafond de pénalités SLA** | **5 %** de la facture mensuelle | + exclusions écrites : indisponibilité Econocom/M6, hors périmètre, dépassement de volumétrie, force majeure documentée. Sans plafond, la marge de 23 % disparaît en un mois. |

---

## 7. Risques & parades

| # | Risque | Impact | Parade |
|---|---|---|---|
| 1 | **M6 n'a pas autorisé la sous-traitance hors UE** | Contrat inexécutable, 21 CDI sur les bras | Écrit d'Econocom **avant signature** (1.1). Condition suspensive, pas tâche projet. |
| 2 | **Trésorerie** : 21 salaires avant facturation pleine | Défaillance | Les trois leviers, **deux au minimum**. Provision 50 k€. Sinon on ne signe pas. |
| 3 | **Transition Pack en retard ou incomplet** | Formation impossible ⇒ pilote impossible | Clause de décalage jour pour jour (3.1) + G2 bloquant |
| 4 | **Rythme de recrutement irréaliste** | SLA raté dès le pilote | Vagues de 6, sourcing dès S3, **+2 candidats en réserve** par vague |
| 5 | **Requalification en prêt de main-d'œuvre** | Sanctions | Canal unique, obligation de résultat sur SLA, aucun lien hiérarchique direct M6 → agent (`GOUVERNANCE §1-§2`, art. 8 bis) |
| 6 | **Econocom facture au volume basculé, pas à l'effectif** | Salverys finance le ramp-up | Volume ferme par palier d'effectif certifié (3.5, 9.3) |
| 7 | **~100 % du CA sur un seul donneur d'ordre** | Dépendance économique | Préavis 6 mois + indemnité (1.7) **et** prospection maintenue (9.5) |
| 8 | **Coupures électricité / internet à Antananarivo** | SLA raté, pénalités | Double liaison + 4G + groupe électrogène + **PCA testé** (4.2, 4.3, 4.7) |
| 9 | **Pénalités SLA non plafonnées** | Marge effacée en un mois | Plafond 5 % + exclusions écrites (1.7) |
| 10 | **Dérive de périmètre** (N1 → N2, projets, VIP) | Marge et SLA dégradés | Catalogue fermé + exclusions écrites ; extension par **avenant** (3.2) |
| 11 | **Gel de changement M6** | Vague de volume bloquée 4 semaines | Palier 25 % calé en S16 ; formation V3 pendant le gel (8.1, 7.6) |
| 12 | **Perte du contrat Econocom ↔ M6** | 21 CDI à porter | Provision de sortie dès la 1re facture (2.4) + volume ferme (1.6) |

**Marge de sécurité** : prévoir **10 à 20 %** sur le recrutement, la mise à disposition des
accès, la formation et le pilote — en **marge de délai**, jamais en sur-effectif payé. En
équipe salariée, un pool de remplaçants est un banc à 736 €/tête ; la continuité passe par le
shrinkage intégré au dimensionnement, le manager métier et la rotation (`PRICING §3.e`).

---

## 8. Garde-fous — ce qu'il ne faut pas faire

- **Ne pas signer avant l'écrit de M6** sur la sous-traitance de rang 2 et le traitement hors
  UE. Condition suspensive, pas chantier d'exécution.
- **Ne pas recruter avant G1.** Le sourcing (5.1) est gratuit, l'embauche ne l'est pas.
- **Ne pas laisser la facturation suivre le volume basculé** — elle suit l'effectif certifié.
- **Ne pas accepter le dépôt standard de 2 700 €** ni des pénalités non plafonnées.
- **Ne pas remiser le prix de gros** (`PRICING.md §3.b`). Si Econocom pousse : une
  **contrepartie de risque**, une seule (sortie à 30 j les 3 premiers mois, exclusivité de
  segment, appui avant-vente sous 48 h).
- **Ne pas constituer un pool de remplaçants payés.** Voir §7.
- **Ne pas promettre le 24·7** (×3,73 ETP par position, non staffable ici — `PRICING §3.c`)
  **ni « opérationnel en 3-4 semaines » pour l'ensemble.** C'est vrai par vague : go-live S16,
  100 % du volume S26.
- **Ne pas laisser Econocom ou M6 encadrer directement les agents** (planning, priorités,
  recadrage, compte rendu individuel) — c'est la ligne entre prestation de services et mise à
  disposition de personnel (`GOUVERNANCE §2`).
- **Ne jamais opposer un plafond de capacité** (`CLAUDE.md`). Ce qui s'annonce est un
  **rythme** : 6 ETP par vague, une vague toutes les 5 à 6 semaines.
- **Ne pas arrêter la prospection** pendant la mobilisation. Un donneur d'ordre qui pèse 100 %
  du CA fixe le prix au renouvellement.

---

## 9. Deux horizons — et ne jamais communiquer le second seul

| | Durée | Contenu |
|---|---|---|
| **Interne** | **~30 semaines** (S1 → S30) | Y compris les 6 semaines de conditions suspensives, de référencement et de financement qui précèdent la signature |
| **Contractuel** | **~24 semaines après bon de commande** | Pilote à S+7, go-live à S+10, **effectif complet à S+16**, 100 % du volume à S+20, clôture projet à S+24 — **sous réserve de la remise du Transition Pack dans les délais** |

> **Pourquoi S+24 et non les ~17 semaines des deux plans d'origine.** Les 17 semaines
> mesuraient la **montée en effectif** — ici S+16, inchangée. La clôture projet y ajoute trois
> choses que ni la v1 ni le plan directeur ne comptaient : le **gel de changement** de fin
> d'année (3 semaines sans palier possible), un **ramp-up de volume étalé** au lieu d'une
> bascule d'un coup, et l'**audit SLA à J+90**. C'est le prix de la prudence, et il se
> communique tel quel — un go-live annoncé trop tôt se paie en pénalités.
