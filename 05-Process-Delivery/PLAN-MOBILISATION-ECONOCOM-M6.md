# PLAN-MOBILISATION-ECONOCOM-M6.md — Mobilisation d'un contrat IT en marque blanche de rang 2

> **Scénario** : Salverys décroche un contrat de sous-traitance **helpdesk IT N1** auprès de
> l'ESN **Econocom** (donneur d'ordre), opéré **sous la marque Econocom** pour son client
> final **M6**. Chaîne de rang 2 : **M6 → Econocom → Salverys**.
>
> Ce document est le **plan de mobilisation** : quoi faire, dans quel ordre, avec quelles
> dépendances et quels jalons. Vue timeline : `gantt-econocom-m6.html`.
>
> Sources internes qui font foi et ne sont pas réécrites ici : `PRICING.md` (prix, paliers,
> volume ferme, amplitude en ETP), `01-Strategie-Offre/FINANCE-PREVISIONNEL.md` (coûts,
> point mort, trésorerie), `04-Closing/ONBOARDING-CLIENT.md` (phases d'onboarding),
> `05-Process-Delivery/GOUVERNANCE-CHAINE-COMMANDEMENT.md` (canal unique, art. 8 bis),
> `PROCESS-QA-DOUBLE-ECOUTE.md`, `01-Strategie-Offre/CONFORMITE-HDS-RGPD.md`.

---

## 1. Hypothèse de dimensionnement (à valider — tout le plan en dépend)

Aucune volumétrie n'ayant été fournie, le plan est chiffré sur l'hypothèse suivante. Si elle
bouge, **le nombre de vagues bouge, pas la séquence**.

| Paramètre | Hypothèse retenue | Source de la règle |
|---|---|---|
| Métier | Helpdesk IT N1 (ITIL), utilisateurs internes M6 | `PRICING.md §3` |
| Positions de service simultanées | **12** | hypothèse |
| Amplitude | **8h-20h** (60 h/sem) ⇒ **×1,33 ETP par position** | `PRICING.md §3.c` |
| **ETP facturés** | **16** | 12 × 1,33 |
| Palier tarifaire | **9+ ETP — tarif stratégique : 1 550 €/ETP/mois** | `PRICING.md §3` |
| **CA de régime** | **24 800 €/mois ≈ 298 k€/an** | 16 × 1 550 € |
| Encadrement | 2 référents d'exploitation IT (1 par tranche de 8 agents) + 1 coordinateur planning | `PRICING.md §3.e` |
| Effectif total à recruter | **19 personnes** (16 agents + 2 managers + 1 coordinateur) | — |

**Ordre de grandeur à garder en tête** : ce seul contrat vaut **~1,8 × le scénario ambitieux
à M12** du prévisionnel (30 500 €/mois avec 22 agents, `FINANCE §5`) — et l'effectif actuel
est de **1 salariée**. Ce n'est pas un onboarding client, c'est un **changement d'échelle de
l'entreprise**.

### Ce que ça déplace dans la doctrine maison

| Règle habituelle | Ce que ce contrat en fait |
|---|---|
| Séquence **Prospection → Équipe → Infrastructure** (`CLAUDE.md`) | La prospection est faite. **Équipe et Infrastructure passent en parallèle** — un grand compte n'homologue pas 16 agents en télétravail sans plateau contrôlé. |
| Dépôt d'activation 900 €/position **plafonné à 2 700 €** (`PRICING.md §3.a`) | Plafond **sans rapport avec la taille** : 2 700 € contre ~36 k€ d'investissement. À remplacer par un **acompte de mobilisation** (§5). |
| « Opérationnel en 3 à 4 semaines » (`PRICING.md §3.c`) | Vrai **par vague, après embauche**. Faux pour 16 ETP : la promesse tenable est **pilote à S13, pleine capacité à S23**. |
| Mise en service **offerte** | Reste offerte en tant que ligne de devis. L'**investissement plateau** (~36 k€), lui, se finance — il n'est pas dans le prix du palier. |

---

## 2. Les quatre verrous amont — rien ne démarre sans eux

L'ordre ci-dessous n'est pas une préférence, c'est une chaîne de dépendances. Chaque verrou
sauté se paie plus tard, plus cher.

**Verrou 1 — L'autorisation de sous-traitance de rang 2 (juridique, bloquant absolu).**
Le contrat Econocom ↔ M6 prévoit-il une **autorisation générale** de sous-traitance (une
information préalable suffit) ou un **accord spécifique préalable** (Econocom doit l'obtenir
avant notre démarrage) ? Existe-t-il une **clause de localisation UE/EEE** ? La question est
déjà au cadrage MB standard (`ONBOARDING-CLIENT.md` phase 0) ; ici elle est vitale, parce
qu'un refus de M6 six semaines après la signature laisse 19 CDI sur les bras.
**Exiger l'écrit d'Econocom. Aucun recrutement avant.**

**Verrou 2 — Le financement du BFR.** 19 salaires courent **~1 à 2 mois avant** la première
facture, encaissée 30 à 60 jours plus tard (`FINANCE §5/§6`). Le creux estimé dépasse
largement les **30 k€** provisionnés au prévisionnel (§5 ci-dessous). Un contrat de cette
taille sans ligne de financement est **plus dangereux que pas de contrat du tout** : le burn
d'attente est de 755 €/mois, celui d'une mobilisation ratée se compte en dizaines de k€.

**Verrou 3 — Le référencement fournisseur et la due diligence sécurité.** Chez un grand
compte, aucun bon de commande n'est émis avant le passage aux achats (pièces légales,
assurances, KYC) et à la sécurité (questionnaire, PSSI, PCA, RGPD). Compter **4 à 6
semaines**, à lancer **en S1**, pas après la poignée de main. Une entité malgache ne peut pas
fournir d'attestation de vigilance URSSAF : préparer les **équivalents locaux** avant qu'on
les demande.

**Verrou 4 — Les termes de sortie.** 16 CDI en face d'un contrat qui dépend d'un contrat
(Econocom ↔ M6) sur lequel on n'a aucune prise. Préavis, indemnité de rupture et **volume
ferme facturable** (`PRICING.md §3`) ne sont pas du confort de marge — ils couvrent un **coût
de sortie** réel.

---

## 3. Plan par étapes

Semaine 1 = **lundi 24/08/2026**. Responsables : **DIR** direction · **EXP** référent
d'exploitation IT · **RH** recrutement · **FIN** finance/administratif · **COM** Vololona.

### Phase 0 — Verrouiller le deal · S1 → S6 · *Juridique & contrat*

| N° | Tâche | Sem. | Resp. | Dépend de | Livrable |
|---|---|---|---|---|---|
| 0.1 | Qualifier la chaîne de sous-traitance : autorisation M6 (générale/spécifique), clause de localisation UE/EEE | S1-S2 | DIR | — | Réponse écrite d'Econocom **(bloquant)** |
| 0.2 | Dossier de référencement fournisseur : RCS malgache, statuts, attestations CNaPS/fiscale, RIB, KYC, références | S1-S4 | FIN | — | Dossier déposé (plateforme achats) |
| 0.3 | RC professionnelle : vérifier/étendre la couverture (activité en France, montant exigé par Econocom) | S2-S4 | FIN | 0.2 | Attestation d'assurance conforme |
| 0.4 | Questionnaire sécurité Econocom/M6 : PSSI, PCA/PRA, contrôle d'accès, journalisation, zéro download | S2-S5 | DIR | 0.2 | Dossier sécurité — base : `04-Closing/DOSSIER-AVANT-VENTE/` |
| 0.5 | Volet RGPD : DPA art. 28 en cascade + clauses contractuelles types (transfert hors UE) + analyse de transfert | S2-S5 | DIR + conseil | 0.1 | DPA + CCT signés |
| 0.6 | Négociation financière : palier 9+ tenu à 1 550 €, **acompte de mobilisation**, paiement 30 j, volume ferme 16 ETP, indexation annuelle | S3-S5 | DIR | 0.1 | Grille et conditions actées |
| 0.7 | Négociation des termes de sortie : préavis 6 mois, indemnité couvrant le coût de sortie CDI, **plafond de pénalités 5 %**, exclusions, réversibilité | S3-S5 | DIR | 0.1 | Clauses actées |
| 0.8 | Contrat-cadre + annexes (périmètre, SLA, prix, sécurité, réversibilité) et **bon de commande** | S5-S6 | DIR | 0.5-0.7 | Contrat signé + BdC |

> ⬥ **J1 — Bon de commande signé et acompte encaissé — fin S6 (02/10).** C'est le seul
> événement qui autorise à embaucher.

### Phase 1 — Sécuriser le financement · S1 → S8 · *Finance*

| N° | Tâche | Sem. | Resp. | Dépend de | Livrable |
|---|---|---|---|---|---|
| 1.1 | Modèle de trésorerie vague par vague (salaires vs facturation vs encaissement) | S1-S2 | FIN | — | Simulation (base `tresorerie-salverys.html`) |
| 1.2 | Mobiliser la ligne de financement : fonds propres, prêt, ou apport | S2-S8 | DIR | 1.1 | **60 k€ disponibles** |
| 1.3 | Affacturage / escompte sur créances Econocom (créance grand compte = finançable) | S5-S8 | FIN | 0.8 | Convention signée |
| 1.4 | Provision « coût de sortie » (préavis + indemnités 19 CDI), dotée dès la 1re facture | S14 → continu | FIN | 9.3 | Provision au bilan |

> ⬥ **J2 — Financement disponible — fin S8 (16/10).**

### Phase 2 — Cadrage opérationnel avec Econocom · S5 → S9 · *Delivery*

| N° | Tâche | Sem. | Resp. | Dépend de | Livrable |
|---|---|---|---|---|---|
| 2.1 | Atelier périmètre : catalogue N1, **exclusions écrites**, volumétrie, saisonnalité M6 | S5-S6 | DIR | 0.6 | Annexe périmètre |
| 2.2 | Dimensionnement : 12 positions 8h-20h ⇒ 16 ETP, plan de rotation, plan de charge par vague | S6 | DIR | 2.1 | Plan de charge |
| 2.3 | SLA & KPI opposables : délai de prise en charge, résolution N1, décroché, backlog — seuils **figés** | S6-S7 | DIR | 2.1 | Annexe SLA + plafond de pénalités |
| 2.4 | Matrice d'escalade N1 Salverys → N2 Econocom → M6 + **règle du canal unique** | S7 | EXP | 2.3 | Procédure d'escalade (`GOUVERNANCE §2`) |
| 2.5 | Accès ITSM (ServiceNow / EasyVista / Ivanti) : comptes **nominatifs**, MFA, rôles, cloisonnement des données M6 | S7-S9 | EXP | 0.4 | Accès ouverts et testés |
| 2.6 | Runbook, arbre de qualification, base de connaissance (dérivés de la KB Econocom/M6) | S7-S9 | EXP | 2.1, 2.5 | Runbook v1 |
| 2.7 | Armement QA : grille de scoring, planning de double écoute, gabarit de reporting hebdo | S8-S9 | EXP | 2.6 | Dispositif QA armé |

> ⬥ **J3 — Dossier d'exploitation validé par Econocom — fin S9 (23/10).**

### Phase 3 — Infrastructure & sécurité · S5 → S12 · *Infra*

| N° | Tâche | Sem. | Resp. | Dépend de | Livrable |
|---|---|---|---|---|---|
| 3.1 | Plateau dédié Antananarivo (~150 m²) : bail, cloisonnement, contrôle d'accès badge, salle de formation | S5-S9 | DIR | 0.6 | Bail signé + aménagement |
| 3.2 | Double liaison internet (2 opérateurs) + secours 4G + QoS voix | S7-S10 | INFRA | 3.1 | Liaisons recettées |
| 3.3 | Énergie : onduleurs + groupe électrogène (coupures réseau) | S7-S10 | INFRA | 3.1 | Autonomie testée |
| 3.4 | 20 postes masterisés (disque chiffré, EDR, **zéro download**) + casques | S8-S11 | INFRA | 1.2 | Parc livré et inventorié |
| 3.5 | VPN nominatif + MFA + journalisation des accès | S9-S11 | INFRA | 3.4, 2.5 | Accès conformes au dossier sécurité |
| 3.6 | Téléphonie / CTI sous marque Econocom : SDA, routage, supervision temps réel | S9-S11 | INFRA | 3.2 | Chaîne voix recettée |
| 3.7 | **PCA testé** : bascule plateau → kits d'autonomie, test réel documenté | S11-S12 | EXP | 3.2-3.6 | PV de test |
| 3.8 | Audit à blanc + visite d'homologation Econocom/M6 sur site | S12 | DIR | 3.7 | Rapport d'homologation |

> ⬥ **J4 — Plateau homologué — fin S12 (13/11).** ⚠️ **Zéro marge** : ce jalon et J6
> (agents certifiés) tombent la même semaine et conditionnent tous deux le go-live. Le
> chemin critique passe **autant par le plateau que par le recrutement** — c'est
> contre-intuitif et c'est là que les plans de ce type déraillent.

### Phase 4 — Recrutement & encadrement, vague 1 · S3 → S9 · *Équipe*

| N° | Tâche | Sem. | Resp. | Dépend de | Livrable |
|---|---|---|---|---|---|
| 4.1 | Sourcing du vivier — **sans engagement, coût ~0** (aucune promesse envoyée) | S3-S6 | RH | — | Vivier 60+ candidats (`07-Recrutement-Vivier/`) |
| 4.2 | Recruter le **référent d'exploitation IT n°1** — première embauche, avant les agents | S3-S6 | DIR | 4.1 | Manager en poste **S6** |
| 4.3 | Campagne V1 : 6 agents N1 (mini-test, entretien, test technique + français) | S6-S8 | RH + EXP | **J1** | 6 candidats retenus + 2 en réserve |
| 4.4 | Promesses d'embauche, CDI, clause de confidentialité (le DPA individuel n'a plus lieu d'être en salariat, `FINANCE §1.b`) | S8-S9 | FIN | 4.3 | 6 CDI signés |

> ⬥ **J5 — Vague 1 embauchée — fin S9 (23/10).** À partir d'ici, **les salaires courent**.

### Phase 5 — Formation & certification, vague 1 · S9 → S12 · *Formation*

| N° | Tâche | Sem. | Resp. | Dépend de | Livrable |
|---|---|---|---|---|---|
| 5.1 | Socle : posture marque blanche Econocom, RGPD, sécurité M6, confidentialité | S9-S10 | EXP | J5 | Attestations signées |
| 5.2 | Métier : ITSM, catalogue, runbook, arbre de qualification, escalade | S10-S11 | EXP | 2.6, 2.5 | Agents opérationnels sur l'outil |
| 5.3 | Simulation : tickets et appels fictifs, double écoute, scoring à blanc | S11-S12 | EXP | 5.2, 3.6 | Scores QA ≥ seuil |
| 5.4 | Certification individuelle — **go/no-go par agent**, partagée avec Econocom | S12 | EXP | 5.3 | PV de certification |

> ⬥ **J6 — 6 agents certifiés — fin S12 (13/11).**

### Phase 6 — Pilote à périmètre restreint · S13 → S15 · *Delivery*

| N° | Tâche | Sem. | Resp. | Dépend de | Livrable |
|---|---|---|---|---|---|
| 6.1 | **Go-live pilote** : un périmètre M6 délimité, 200-400 tickets, 6 positions | S13 | EXP | J4 + J6 | Premier ticket traité sous marque Econocom |
| 6.2 | Double écoute renforcée + point quotidien J1→J5 puis hebdo | S13-S14 | EXP | 6.1 | Comptes rendus quotidiens |
| 6.3 | Ajustements : runbook, arbre de qualification, seuils, plan de charge | S14-S15 | EXP | 6.2 | Runbook v2 |
| 6.4 | Bilan pilote + décision de bascule **conjointe** Econocom/Salverys | S15 | DIR | 6.3 | PV de bascule |

> ⬥ **J7 — Go-live pilote — S13 (16/11).**  ⬥ **J8 — Bascule en régime, SLA opposables — fin S15 (04/12).**

### Phase 7 — Vague 2 : +6 ETP et manager n°2 · S10 → S16 · *Équipe*

| N° | Tâche | Sem. | Resp. | Dépend de | Livrable |
|---|---|---|---|---|---|
| 7.1 | Campagne V2 (lancée pendant la formation V1, pas après) | S10-S12 | RH | 4.1 | 6 candidats retenus |
| 7.2 | Embauches V2 + **référent d'exploitation n°2** (seuil de 8 agents, `PRICING §3.e`) | S13 | FIN | 7.1, J1 | 7 CDI signés |
| 7.3 | Formation V2 — socle, métier, simulation, **tutorat par la V1** | S13-S15 | EXP | 7.2 | Certification V2 |
| 7.4 | Go-live V2 — **calé avant le gel de changement de fin d'année** | S16 | EXP | 7.3, J8 | 12 ETP en production |

> ⬥ **J9 — 12 ETP en production — S16 (07/12).**

### Phase 8 — Vague 3 : +4 ETP et coordinateur planning · S15 → S23 · *Équipe*

| N° | Tâche | Sem. | Resp. | Dépend de | Livrable |
|---|---|---|---|---|---|
| 8.1 | Campagne V3 | S15-S18 | RH | 4.1 | 4 candidats retenus |
| 8.2 | Embauches V3 + coordinateur planning / superviseur de plateau | S19 | FIN | 8.1 | 5 CDI signés |
| 8.3 | Formation V3 — **conduite pendant le gel de changement**, sans impact production | S20-S22 | EXP | 8.2 | Certification V3 |
| 8.4 | Go-live V3 | S23 | EXP | 8.3 | **16 ETP** |

> ⬥ **J10 — Pleine capacité, 16 ETP facturés — S23 (25/01/2027).**

### Phase 9 — Régime, pilotage et couverture du risque · S13 → continu · *Pilotage*

| N° | Tâche | Sem. | Resp. | Dépend de | Livrable |
|---|---|---|---|---|---|
| 9.1 | Reporting hebdomadaire Econocom + revue de service mensuelle écrite (incluse partout, `PRICING §3.d`) | S13 → | EXP | J7 | Rapports |
| 9.2 | QA en régime : double écoute, scoring, plans de coaching individuels | S13 → | EXP | 2.7 | Scores mensuels |
| 9.3 | Facturation mensuelle, imputation de l'acompte, suivi des encaissements et relances | S14 → | FIN | J7 | Factures + échéancier |
| 9.4 | Plan de réversibilité documenté et tenu à jour (exigence grand compte) | S16-S18 | DIR | J8 | Plan de réversibilité v1 |
| 9.5 | **Relancer la prospection MB** — objectif : un 2e donneur d'ordre pour casser la concentration | S17 → | COM | — | Pipeline actif |
| 9.6 | Revue trimestrielle de contrat : volumes, SLA, indexation, extension de périmètre | S24 | DIR | J10 | PV de revue |

---

## 4. Jalons — vue synthétique

| Jalon | Date | Ce qu'il conditionne |
|---|---|---|
| **J1** Bon de commande signé + acompte encaissé | fin S6 — 02/10/2026 | Autorise **toute** embauche |
| **J2** Financement disponible (60 k€) | fin S8 — 16/10/2026 | Autorise l'investissement plateau |
| **J3** Dossier d'exploitation validé | fin S9 — 23/10/2026 | Autorise la formation métier |
| **J4** Plateau homologué par Econocom | fin S12 — 13/11/2026 | Autorise le go-live |
| **J5** Vague 1 embauchée | fin S9 — 23/10/2026 | Démarrage des salaires |
| **J6** Vague 1 certifiée | fin S12 — 13/11/2026 | Autorise le go-live |
| **J7** Go-live pilote | S13 — 16/11/2026 | Premier ticket sous marque Econocom |
| **J8** Bascule en régime, SLA opposables | fin S15 — 04/12/2026 | Déclenche les pénalités et la facturation pleine |
| **J9** 12 ETP en production | S16 — 07/12/2026 | Avant le gel de changement M6 |
| **J10** Pleine capacité 16 ETP | S23 — 25/01/2027 | CA de régime 24 800 €/mois |

**Chemin critique** : 0.1 → 0.5 → 0.8 (**J1**) → 4.3 → 4.4 (**J5**) → 5.2 → 5.3 → 5.4
(**J6**) → 6.1 (**J7**) → 6.4 (**J8**) → 7.4 → 8.4 (**J10**).
**Chaîne critique parallèle** : 3.1 → 3.2 → 3.6 → 3.7 → 3.8 (**J4**) — même échéance, aucune
marge. Un retard de bail ou de liaison décale le go-live autant qu'un retard de recrutement.

---

## 5. Chiffrage — ordres de grandeur

### Économie de régime (à 16 ETP)

| Poste | Montant mensuel |
|---|---|
| **CA** — 16 ETP × 1 550 € | **+24 800 €** |
| Coût variable des agents placés — 16 × 843 € (`FINANCE §2.a`) | −13 490 € |
| Encadrement — 2 managers + 1 coordinateur × 736 € | −2 210 € |
| Socle fixe existant (`FINANCE §2`) | −2 110 € |
| **Plateau, liaisons, énergie** — poste absent du modèle actuel | −2 000 € |
| **Marge nette estimée** | **≈ +5 000 €/mois (≈ 20 %)** |

> ⚠️ **Le palier 9+ n'intègre pas le coût d'un plateau sécurisé.** À 1 550 €/ETP, un grand
> compte exigeant plateau cloisonné, redondance et homologation coûte ~125 €/ETP/mois de
> plus que le modèle standard. **Ne jamais descendre sous 1 550 €** sur ce dossier, et faire
> financer les exigences spécifiques (amplitude, astreinte) en **ETP supplémentaires**, pas
> en pourcentage de majoration (`PRICING.md §3.c`).

### Investissement de démarrage (non récurrent)

| Poste | Estimation |
|---|---|
| 20 postes masterisés + casques | ~12 000 € |
| Aménagement plateau, cloisonnement, contrôle d'accès | ~8 000 € |
| Onduleurs + groupe électrogène | ~5 000 € |
| Caution et premiers loyers | ~3 000 € |
| Recrutement + formation (19 personnes) | ~8 000 € |
| **Total** | **~36 000 €** |

### Trésorerie — le vrai sujet

19 salaires courent avant la première facture, encaissée 30 à 60 jours plus tard.

| Scénario | Creux estimé |
|---|---|
| **Sans acompte, paiement à 60 j** | **−55 à −70 k€** vers M4-M5 |
| **Avec acompte de mobilisation, paiement à 30 j, affacturage** | **−30 à −40 k€** |

Les 30 k€ recommandés au prévisionnel (`FINANCE §6`) sont calibrés sur une montée en charge
diffuse, **pas sur un contrat unique de 16 ETP**. Provisionner **60 k€**.

### Ce qu'il faut obtenir à la négociation (§0.6/0.7)

| Demande | Montant / terme | Justification à opposer |
|---|---|---|
| **Acompte de mobilisation** | **25 000 €** (≈ 1 mois de régime), imputable ~4 200 €/mois sur 6 factures | 19 CDI engagés sur la foi du bon de commande. Le dépôt standard (900 €/position, plafond 2 700 €) est calibré pour 3 positions, pas 12. Imputable = **coût nul** pour Econocom qui va au bout (`PRICING §3.a`). |
| **Paiement à 30 jours date de facture** | au lieu de 45-60 j fin de mois | Chaque mois de délai vaut ~25 k€ de BFR supplémentaire. |
| **Facturation à échoir** des positions fermes | mensuelle, en début de mois | Position ferme = capacité réservée, payée d'avance comme un abonnement. |
| **Volume ferme facturable 16 ETP** | dus consommés ou non | `PRICING.md §3` — le banc en équipe salariée est un coût de sortie, pas un manque à gagner. |
| **Préavis 6 mois + indemnité de rupture** | couvrant préavis et indemnités des CDI | La rigidité de l'effectif remplace le risque de requalification (`CLAUDE.md`). |
| **Plafond de pénalités 5 %** de la facture mensuelle | + exclusions écrites : indisponibilité Econocom/M6, hors périmètre, dépassement de volumétrie, force majeure documentée | `PRICING.md §7` prévoit un avoir de 20 % plafonné à 1 mois sur 12 ; un grand compte demandera plus, ce plafond est la contrepartie. |

---

## 6. Risques & parades

| # | Risque | Impact | Parade |
|---|---|---|---|
| 1 | **M6 n'a pas autorisé la sous-traitance hors UE** | Arrêt brutal, 19 CDI sur les bras | Écrit d'Econocom **avant** tout recrutement (0.1). Bloquant, sans exception. |
| 2 | **Trésorerie** : salaires payés avant facturation | Défaillance | Acompte + paiement 30 j + affacturage + montée en **3 vagues** (1.2, 1.3, 0.6) |
| 3 | **Rythme de recrutement irréaliste** | SLA raté dès J1 | Vagues de 6 max, sourcing dès S3, **+2 candidats en réserve** par vague (4.1, 4.3) |
| 4 | **Requalification en prêt de main-d'œuvre / marchandage** | Requalification, sanctions | Canal unique, obligation de résultat sur SLA, aucun lien hiérarchique direct M6/agent (`GOUVERNANCE §1-§2`, art. 8 bis) |
| 5 | **Concentration : ~100 % du CA sur un donneur d'ordre** | Dépendance économique | Préavis 6 mois + indemnité (0.7) **et** prospection maintenue (9.5) |
| 6 | **Coupures électricité / internet à Antananarivo** | SLA raté, pénalités | Double liaison + 4G + groupe électrogène + **PCA testé** (3.2, 3.3, 3.7) |
| 7 | **Pénalités SLA non plafonnées** | Marge (20 %) effacée en un mois | Plafond 5 % + exclusions écrites (0.7) |
| 8 | **Gel de changement M6 en fin d'année** | Vague 2 bloquée 4 semaines | Go-live V2 calé **avant le 12/12** ; formation V3 pendant le gel (7.4, 8.3) |
| 9 | **Dérive de périmètre** (N1 → N2, projets, VIP) | Marge et SLA dégradés | Catalogue fermé + exclusions écrites ; toute extension par **avenant** (2.1) |
| 10 | **Perte du contrat Econocom ↔ M6** | 19 CDI à porter | Provision de sortie dotée dès la 1re facture (1.4) + volume ferme (0.6) |

---

## 7. Garde-fous — ce qu'il ne faut pas faire

- **Ne pas recruter avant le bon de commande signé et l'acompte encaissé.** Le sourcing (4.1)
  est gratuit, l'embauche ne l'est pas (`ONBOARDING-CLIENT.md`, garde-fou trésorerie).
- **Ne pas accepter le dépôt standard de 2 700 €** sur un contrat de cette taille.
- **Ne pas remiser le prix de gros** (`PRICING.md §3.b`). Si Econocom pousse : concéder une
  **contrepartie de risque**, une seule (sortie à 30 j les 3 premiers mois, exclusivité
  segment, appui avant-vente sous 48 h).
- **Ne pas promettre le 24·7** : ×3,73 ETP par position, non staffable ici (`PRICING §3.c`).
  Si M6 l'exige, c'est un **avenant chiffré en ETP**, pas une extension d'amplitude.
- **Ne pas promettre « opérationnel en 3-4 semaines »** pour l'ensemble : c'est vrai **par
  vague**. Annoncer le pilote à S13 et la pleine capacité à S23.
- **Ne pas laisser Econocom ou M6 encadrer directement les agents** (planning, priorités,
  recadrage, compte rendu individuel) — c'est la ligne entre prestation et mise à disposition
  de personnel (`GOUVERNANCE §2`).
- **Ne jamais opposer un plafond de capacité** à Econocom (`CLAUDE.md`). Ce qui s'annonce
  est un **rythme** : 6 ETP par vague, une vague toutes les 6 à 7 semaines.
- **Ne pas arrêter la prospection** pendant la mobilisation. Un donneur d'ordre unique qui
  représente 100 % du CA fixe le prix au renouvellement.
