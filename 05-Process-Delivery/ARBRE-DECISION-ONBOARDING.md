# ARBRE-DECISION-ONBOARDING.md — Arbre de décision d'onboarding (interne)

> **À quoi ça sert.** Décider, compte par compte, **comment on arme un nouveau compte** :
> faut-il un **référent d'exploitation IT dédié** (« manager IT ») ou un référent mutualisé
> suffit-il, quelle intensité de QA, quel call flow, et **à quelles conditions on refuse**.
>
> **Quand l'utiliser.** Pendant le **RDV de cadrage — Phase 0** de `04-Closing/ONBOARDING-CLIENT.md`,
> avant la signature. La sortie de l'arbre alimente l'Annexe de niche du contrat et le
> plan de mise en service (Phase 1).
>
> **Audience : direction + référents d'exploitation. Ne se transmet pas au client.**
> Le client reçoit la **fiche de compte** dérivée (`FICHE-COMPTE-CALL-FLOW.md`), pas cet arbre.
>
> Version interactive utilisable en RDV : `arbre-decision-onboarding.html` (racine du repo).
>
> Documents dont cet arbre dépend et qu'il ne réécrit pas :
> `GOUVERNANCE-CHAINE-COMMANDEMENT.md` (autorité) · `PROCESS-QA-DOUBLE-ECOUTE.md` (grilles,
> cadences, escalades) · `PRICING.md` (prix, paliers, plancher 840 €) ·
> `03-Cibles-Prospects/IDEAL-CUSTOMER-PROFILE.md` (Q7 conformité) ·
> `04-Closing/ONBOARDING-CLIENT.md` (phases).

---

## 0. La réponse courte à « faut-il un manager IT Salverys ? »

Deux choses sont confondues sous le mot « manager », et la réponse n'est pas la même :

| | Toujours nécessaire ? | Qui peut la porter |
|---|---|---|
| **L'encadrement d'exploitation** (planning, QA, discipline, canal unique vers le client) | **Oui, toujours. Jamais zéro.** | **Salverys exclusivement** — c'est ce qui sépare une prestation de services d'une mise à disposition (`GOUVERNANCE §1/§6`) |
| **L'autorité technique N1.5** (arbitrage de diagnostic, validation d'escalade, tenue de la base de connaissance) | Non — elle doit **exister**, pas forcément chez nous | **Le client** (N2 de l'ESN, lead support de l'éditeur) **ou Salverys** |

> **Donc : la question n'est jamais « référent ou pas », c'est « référent mutualisé ou
> référent dédié », et « qui porte le technique ».** Un compte sans aucun encadrement
> Salverys n'existe pas — ce serait du prêt de main-d'œuvre.

**Le cas nominal « pas de manager IT dédié »** : une ESN ou un MSP structuré, **1 à 4 positions**,
un seul client final, référentiel documenté, plage d'heures ouvrées. Le référent IT mutualisé
suffit, et le technique reste chez le donneur d'ordre. C'est le cas le plus fréquent de la
cible n°1 — et c'est une bonne nouvelle économique (§3.4).

**Le manager IT dédié devient obligatoire** dès qu'un seul de ces éléments est vrai :
volume **≥ 5 positions** · **≥ 6 contextes clients finaux** · **aucune autorité technique
identifiée côté client** · **amplitude étendue ou astreinte** · **criticité** (santé,
paiement, production du client final) · **tier Priority souscrit**.

---

## 1. Étage 0 — Les 4 verrous (GO / NO-GO)

**À passer avant toute discussion d'armement.** Un verrou rouge = **on n'onboarde pas**,
quel que soit l'intérêt du deal. Ils ne se compensent pas entre eux.

### V1 — Conformité de la chaîne de sous-traitance

Question ICP Q7, posée **avant** la signature (`IDEAL-CUSTOMER-PROFILE.md`) :

| Réponse du partenaire | Verdict |
|---|---|
| **Autorisation générale** de sous-traitance dans son contrat client → information préalable suffit | 🟢 GO |
| **Accord spécifique préalable** requis, **déjà obtenu par écrit** | 🟢 GO — pièce au dossier |
| **Accord spécifique** requis, **non obtenu** | 🟠 GEL — **aucun recrutement engagé** avant confirmation écrite |
| **Clause de localisation UE/EEE** stricte non levée | 🔴 **NO-GO** — Madagascar est un pays tiers (`DOSSIER-AVANT-VENTE/05-NOTE-TRANSFERT-HORS-UE.md`) |
| Le partenaire **ne sait pas répondre** | 🟠 Pas disqualifiant — mais la conversation conformité aura lieu **après** le closing : c'est là que les deals meurent. Forcer la réponse avant l'Annexe B |

### V2 — Verrou économique

- Prix appliqué **≥ 840 €/ETP** (plancher absolu, `PRICING §3` — codé en dur dans `tools/deal-build.mjs`).
- Palier **5+** demandé → **minimum facturable de 5 positions** acté à l'Annexe B, dues consommées ou non. Sinon → prix du palier 3 ETP.
- **Coût d'encadrement projeté ≤ 12 % du CA du compte** (§3.4). Au-delà : remonter le volume, redescendre le mode, ou refuser.

### V3 — Verrou trésorerie (marque blanche)

- **Dépôt d'activation encaissé** (900 €/position, plafond 2 700 €) **avant** tout démarrage de mise en service. **Aucun recrutement engagé avant l'encaissement** (`ONBOARDING-CLIENT.md`, garde-fou trésorerie).
- 5 positions engagées = **~3 500 €/mois de fees** avant la première facture, et **5 à 7 semaines** avant encaissement. Vérifier la trésorerie disponible, pas seulement la marge.

### V4 — Verrou de gouvernance

Le prospect accepte-t-il la **règle du canal unique** (`GOUVERNANCE §2`) : les instructions
descendent par le référent, jamais du client directement à l'agent ?

| Signal en cadrage | Verdict |
|---|---|
| « On veut un point quotidien avec le référent, on cadre le périmètre et les priorités » | 🟢 GO — c'est de l'autorité fonctionnelle, normale |
| « Nos agents suivront notre daily, notre lead leur donnera leurs priorités du matin » | 🟠 Reconfigurable — voir §5.3, montage « co-pilotage cadré » |
| « On veut choisir les personnes / faire passer des entretiens individuels » | 🟠 **CV anonymisés uniquement** (`GOUVERNANCE §4`, art. 10 bis). S'il insiste → 🔴 |
| « On veut fixer leurs horaires, les recadrer, décider des remplacements » | 🔴 **NO-GO** — c'est de la mise à disposition. Requalification prêt de main-d'œuvre illicite (L.8241-1) |

> **Formulation de refus au donneur d'ordre** — jamais juridique :
> *« On passe par le référent, c'est ce qui vous garantit que l'engagement de service reste
> opposable. Si personne ne pilote côté nous, vous n'avez plus d'engagement, vous avez des
> intérimaires. »*

---

## 2. Étage 1 — Typologie du compte (5 archétypes)

Le premier branchement. Il détermine **qui détient quoi** et donc le call flow.

```
                        ┌─ Le compte revend-il notre prestation ? ─┐
                        │                                          │
                   OUI (marque blanche)                     NON (client final direct)
                        │                                          │
        ┌───────────────┼───────────────┐                          │
        │               │               │                          │
  Multi-clients   Multi-clients    Mono-produit               ┌─────┴─────┐
  finaux, ITSM    finaux, parcs    (son propre               │           │
  structuré,      hétérogènes,     produit)              Éditeur     Médical
  delivery mgr    astreinte              │                  SaaS      direct
        │               │                │                  direct        │
      [A1 ESN]      [A2 MSP]             │                    │        [M2]
                                    ┌────┴────┐               │
                                    │         │          (grille §3
                              Équipe      Pas d'équipe   « en direct »)
                              support     support
                              existante   (création)
                                  │           │
                              [A3 SaaS-  [A4 SaaS-
                               extension] création]

  Télésecrétariat médical FR qui sous-traite son débordement → [M1] (§5.5)
```

### Fiche d'identification rapide

| | **A1 — ESN / infogéreur** | **A2 — MSP** | **A3 — Éditeur SaaS, extension** | **A4 — Éditeur SaaS, création** |
|---|---|---|---|---|
| Ce qu'il achète | de la **capacité** N1 sur un périmètre déjà cadré | de la **capacité multi-tenant** + amplitude | de la **capacité** sur une file déjà en production | une **fonction support** qu'il n'a pas |
| Outil | son ITSM (GLPI, ServiceNow, EasyVista…) | son RMM/PSA (NinjaOne, Datto, IT-Glue…) | son helpdesk (Zendesk, Intercom, Front, Crisp) | à choisir — souvent rien |
| Référentiel métier | **le sien**, formalisé ITIL | le sien, **par tenant**, souvent inégal | **le sien**, macros + KB en place | **inexistant — à construire** |
| Autorité technique N2 | **chez lui** (N2/N3 identifiés) | chez lui, mais **dispo faible** | **chez lui** (lead support / produit) | **nulle part** ⚠️ |
| Contextes clients finaux | 1 à quelques-uns par lot | **6 à 50** | 1 (son produit) | 1 |
| Risque n°1 | requalification (delivery mgr qui pilote) | **erreur de tenant** | **montée en compétence produit** | on porte tout le build |
| Interlocuteur | Dir. Delivery / Resp. Centre de Services | Fondateur / Resp. exploitation | Head of Support / Customer Care | CEO ou COO (< 50 pers.) |
| GTM / prix | MB — `PRICING §3` rate card | MB — rate card | MB **ou** direct selon revente | **direct** (§3 colonne « En direct ») |
| Mode d'encadrement typique | **M0 / M1** (mutualisé) | **M2** (dédié) | **M1** (mutualisé) | **M2 / M3** |

> **A3 est le cas que la question de départ vise** : « un éditeur qui veut augmenter la
> capacité de son support déjà placé en clientèle ». C'est **l'archétype le moins gourmand
> en encadrement Salverys** — et paradoxalement **le plus risqué en gouvernance** (§5.3),
> parce que le client a déjà des managers et l'habitude de piloter ses propres agents.

**Sous-variante à repérer : A3-R « reprise de prestataire sortant »** — l'éditeur (ou l'ESN)
externalise déjà chez quelqu'un d'autre et nous fait reprendre le périmètre. Traiter comme
A3 **+ trois exigences de cadrage** : (1) **transfert de KB** écrit et daté, (2) **période
de recouvrement** de 2 semaines minimum avec le sortant, (3) **engagement de service
suspendu** jusqu'à la fin du recouvrement. Sans les trois → on hérite d'un SLA qu'on ne
peut pas tenir. Voir §7, éventualité E3.

---

## 3. Étage 2 — Les variables de décision d'armement

Cinq variables. Quatre donnent une **intensité d'encadrement**, la cinquième (le volume)
donne l'**exclusivité du référent**. Le croisement des deux donne le mode.

### 3.1 Les quatre variables d'intensité

| Var. | Question à poser en cadrage | 0 pt | 2 pts | 4 pts |
|---|---|---|---|---|
| **D1** — Supervision côté client | *« Qui, nommément, arbitre un doute technique de mon agent, et sous quel délai ? »* | Un N2 **nommé et joignable** sur la plage couverte | Un lead existe mais **peu disponible** (< 2 h/semaine) | **Personne d'identifié** |
| **D2** — Maturité du référentiel | *« Vos procédures N1 sont écrites où, et à quand remonte la dernière mise à jour ? »* | KB / macros **documentées et à jour** | Partiel, **dans les têtes** pour le reste | **Rien d'écrit** |
| **D4** — Surface de contextes | *« Combien de clients finaux distincts la position servira-t-elle ? »* | **1** | **2 à 5** | **6 et plus** |
| **D5** — Amplitude & continuité | *« Quelle plage horaire, et y a-t-il de l'astreinte ? »* | Plage confort : **7h-19h Paris** (= 9h-21h Tana en hiver) | Étendue : jusqu'à **21h Paris** ou samedi | **Nuit / astreinte / 24-7** |

**Bonus d'intensité** — cumulables :
- **+2** si **criticité** : données de santé, flux de paiement, ou production du client final à l'arrêt en cas d'incident.
- **+2** si **tier Priority** souscrit (`PRICING`) — la capacité réservée et le backup permanent se supervisent.

**Bandes d'intensité** : **0-3 = faible** · **4-7 = moyenne** · **8+ = forte**.

> Note : `D1 = 4` **et** `D2 = 4` donnent mécaniquement 8 → intensité forte. C'est voulu :
> quand personne ne porte le métier ni l'écrit, c'est nous qui le portons, point.

### 3.2 La variable de volume (D3) — arithmétique de capacité

Le référent n'est pas extensible. Charge mesurée à partir de `PROCESS-QA-DOUBLE-ECOUTE.md §5` :

| Poste de charge | Régime | Onboarding (S1) |
|---|---|---|
| Double écoute + notation + restitution 48 h | **~1 h 30 / position / semaine** (2 écoutes) | **~4 h** (≥ 5 écoutes) |
| Escalade N2 exploitation, coaching, arbitrages | ~1 h / position / semaine | ~3 h |
| Planning, remplacements, suivi qualité | ~0 h 30 / position / semaine | ~1 h |
| **Total par position** | **~3 h / semaine** | **~8 h / semaine** |
| Reporting, point client, relation donneur d'ordre | **~2 h / compte / semaine** | ~4 h |

**Capacité utile d'un référent : ~30 h/semaine** (le reste part en interne, formation, imprévus).

| Plafonds durs | Valeur | Pourquoi |
|---|---|---|
| Positions actives portées | **≤ 8** | 8 × 3 h + 2 comptes × 2 h = 28 h |
| Comptes portés simultanément | **≤ 4** | au-delà, le temps de contexte explose |
| Positions **en onboarding simultané** | **≤ 3** | 3 × 8 h = 24 h — il ne reste rien pour le régime |
| Pilotes MB en cours par référent | **≤ 1** | un pilote = charge d'onboarding permanente |

> ⚠️ **Conséquence de planning, souvent oubliée** : deux comptes ne peuvent pas démarrer la
> même semaine sur le même référent. Le J1 se **séquence**, il ne se négocie pas. À dire au
> partenaire au cadrage, pas trois semaines après.

**Bandes de volume** : **1-2** · **3-4** · **5-7** · **8+** positions.

### 3.3 Le verdict — grille volume × intensité

| Positions ↓ \ Intensité → | **Faible (0-3)** | **Moyenne (4-7)** | **Forte (8+)** |
|---|---|---|---|
| **1-2** | **M0** | **M1** | **M2** ⚠️ voir note |
| **3-4** | **M1** | **M1** | **M2** |
| **5-7** | **M2** | **M2** | **M3** |
| **8+** | **M3** | **M3** | **M3** |

> ⚠️ **Case M2 à 1-2 positions = alerte économique.** Un référent dédié coûte 700 €/mois ;
> sur 2 positions à 1 750 €, c'est **20 % du CA** — au-delà du plafond de 12 % (V2). Trois
> issues, dans cet ordre :
> 1. **Faire retomber l'intensité** : exiger au cadrage un N2 nommé côté client (D1 → 0) et
>    la KB écrite (D2 → 0). C'est souvent obtenable et c'est la bonne conversation.
> 2. **Monter le volume** : le référent dédié est un **service de volume engagé** — il
>    s'obtient à **5 positions facturées**, exactement comme le palier 5+ de `PRICING §3`.
> 3. **Refuser.** Un compte de 2 positions qui exige un dédié sans monter le volume est un
>    compte à perte structurelle. Le dire tôt coûte moins cher que de le découvrir à M+4.

**Règles qui priment sur la grille :**
- `D5 = 4` (nuit / astreinte / 24-7) → **M2 minimum + validation direction obligatoire**, et **refus par défaut avant M12** (§7, éventualité E5).
- Le mode ne descend jamais en cours de vie du compte sans **une revue de mode** écrite (§4.3).

### 3.4 Ce que chaque mode contient — et ce qu'il coûte

| | **M0 — Mutualisé standard** | **M1 — Mutualisé renforcé** | **M2 — Référent dédié** | **M3 — Cellule autonome** |
|---|---|---|---|---|
| Référent IT | partagé, **≤ 4 comptes** | partagé, **≤ 2 comptes** | **1 seul compte** | **1 seul compte** + backup nommé |
| Renforts | — | — | — | **lead technique N1.5** (50 % prod / 50 % arbitrage) + **doc owner** (0,2 ETP) |
| Double écoute | ≥ 2 / agent / semaine | ≥ 3 / agent / semaine | ≥ 3 / agent / semaine + revue KB hebdo | ≥ 3 / agent / semaine, **calibrage croisé** mensuel |
| Point client | bimensuel (hebdo si MB l'exige) | **hebdo** | **hebdo** + revue mensuelle | hebdo + **comité de service** mensuel |
| Joignabilité du référent | 4 h ouvrées | 2 h ouvrées | **30 min sur la plage couverte** | 30 min + backup |
| Ce qu'on annonce au client | « un référent d'exploitation nommé, joignable en heures ouvrées » | « un référent nommé, présent sur votre plage » | « **un référent d'exploitation dédié à votre compte** » | « une **cellule dédiée** : référent, lead technique, base de connaissance tenue » |
| Coût interne / mois | 700 € ÷ ~8 positions | 700 € ÷ ~6 positions | 700 € | 700 € + 140 € (doc owner) |
| **Coût par position** | **~88 €** | **~117 €** | **~140 €** (à 5 pos.) | **~105 €** (à 8 pos.) |
| **% du CA** (helpdesk MB) | ~5 % | ~7 % | ~9 % | ~8 % |

**Trois règles économiques, non négociables :**

1. **L'encadrement n'est jamais une ligne facturée.** Il est inclus dans le tarif ETP — la
   marge du palier le finance (≈ 48 % à 1 350 €, `FINANCE-PREVISIONNEL.md §3`). Le facturer
   séparément le ferait ressembler à de la régie et affaiblirait précisément l'argument de
   `GOUVERNANCE §6`. **Ce qui se négocie, c'est le volume, pas le prix du référent.**
2. **Exception :** en **M3**, le **lead technique N1.5 est une position facturée** — il
   produit. Le référent et le doc owner restent inclus.
3. **Plafond : 12 % du CA du compte.** Au-delà, le mode calculé est refusé et on repasse
   par les trois issues de §3.3.

---

## 4. Étage 3 — Ce que le verdict déclenche

### 4.1 Sortie de l'arbre → livrables

| Sortie | Va dans |
|---|---|
| Archétype + mode (M0-M3) | **Fiche de compte** (`FICHE-COMPTE-CALL-FLOW.md`) |
| Périmètre N1 (liste blanche) et hors-périmètre | Annexe de niche du contrat |
| KPI + seuil engagés | Annexe B du devis + contrat art. 6 |
| Chaîne d'escalade instanciée (N1 → N2 référent → N3 client) | Fiche de compte + brief agent |
| Call flow opérationnel | Fiche de compte §4, affiché au poste |
| Charge référent projetée (h/semaine) | Plan de capacité interne |
| Concessions accordées | `tools/deals/*.json` → `concessions[]` |

### 4.2 Séquencement du J1

| Mode | Délai réaliste signature → J1 | Ce qui le contraint |
|---|---|---|
| M0 / M1 | **2-3 semaines** | recrutement freelance 2-4 sem. si nouvelle position, formation 2-3 sem. |
| M2 | **4-5 semaines** | 5 positions ne s'onboardent pas ensemble (plafond ≤ 3 simultanées) → **2 vagues** |
| M3 | **6-8 semaines** | build du référentiel + recrutement du lead technique |
| A4 (création de fonction) | **+2 semaines** | construction des catégories, priorités, macros, KB v0 |

> **Ne jamais annoncer un J1 avant d'avoir passé cet arbre.** C'est la promesse la plus
> facile à casser et la plus coûteuse en confiance.

### 4.3 Revue de mode (le compte bouge, l'armement doit suivre)

Repasser l'arbre — **20 minutes, pas une refonte** — à ces quatre moments :

- **Fin du mois d'entrée** (Phase 4 `ONBOARDING-CLIENT.md`) — l'intensité réelle diffère presque toujours de l'estimée.
- **Toute variation de ±2 positions.**
- **Ajout d'un client final** chez un MSP (D4 bouge vite).
- **Deux fiches QA rouges** sur le même compte en 30 jours → le mode est sous-dimensionné, remonter d'un cran sans attendre.

Une **descente de mode** (M2 → M1) est possible mais s'écrit : elle change ce qu'on a annoncé
au client. Ne jamais la faire silencieusement — c'est la meilleure façon de perdre un compte.

---

## 5. Étage 4 — Arbres client-spécifiques par archétype

### 5.1 A1 — ESN / infogéreur

**Chemin par défaut : M0 (1-2 positions) ou M1 (3-4).** Le technique reste chez l'ESN.

```
ESN
 ├─ Le N2 de l'ESN est-il nommé et joignable sur la plage ?
 │   ├─ NON → D1=4. Exiger un nom au cadrage. Sans nom → intensité forte → M2 → réévaluer le prix
 │   └─ OUI ─┐
 ├─ Le périmètre N1 est-il une liste blanche écrite ?
 │   ├─ NON → la co-écrire en Phase 0 (elle devient l'Annexe de niche). Non négociable
 │   └─ OUI ─┐
 ├─ Combien de clients finaux dans le lot confié ?
 │   ├─ 1        → D4=0
 │   ├─ 2-5      → D4=2, fiche par client final obligatoire
 │   └─ 6+       → D4=4 → on est en réalité sur un profil MSP, basculer §5.2
 ├─ Plage demandée ?
 │   ├─ 7h-19h Paris → D5=0 — ⚡ c'est notre créneau naturel (7h-9h FR = matinée à Tana)
 │   ├─ jusqu'à 21h  → D5=2
 │   └─ astreinte/24-7 → D5=4 → validation direction, refus par défaut (E5)
 └─ Positions → grille §3.3
```

**Pièges spécifiques ESN**
- Le **delivery manager veut piloter au quotidien**. C'est le marqueur de requalification n°1 sur cet archétype (`GOUVERNANCE §2`). Cadrer dès le RDV : il prescrit les règles, le référent les applique.
- **L'ESN vend déjà un SLA à son client final** plus strict que celui qu'elle nous achète. Vérifier l'écart en Phase 0 : si elle nous achète du 4 h et vend du 1 h, l'écart nous reviendra en réclamation.
- **Appel d'offres en cours** : l'ESN veut nos pièces pour répondre. C'est la contrepartie « appui avant-vente 48 h » (`PRICING §3.b`) — la concéder **explicitement**, une seule contrepartie, et la tracer.

### 5.2 A2 — MSP

**Chemin par défaut : M2 (dédié), même à 3-4 positions.** D4 seul suffit à faire basculer
l'intensité.

```
MSP
 ├─ Combien de tenants distincts ?
 │   ├─ ≤ 5  → D4=2
 │   └─ 6+   → D4=4 → intensité ≥ moyenne quoi qu'il arrive
 ├─ Existe-t-il une fiche par tenant (contacts autorisés, périmètre, heures, exceptions) ?
 │   ├─ NON → 🔴 blocage de mise en service : c'est le prérequis n°1 du call flow (§6.2)
 │   └─ OUI ─┐
 ├─ Astreinte / hors heures demandée ?
 │   ├─ OUI → D5=4 → validation direction (E5)
 │   └─ NON ─┐
 ├─ Le MSP a-t-il un N2 dédié ou son N2 est-il « le patron quand il peut » ?
 │   ├─ patron indisponible → D1=4 → M2 minimum, et prévoir un lead N1.5 dès 5 positions
 │   └─ N2 dédié → D1=0
 └─ Positions → grille §3.3
```

**Le risque n°1, l'erreur de tenant.** Appliquer la procédure du client A au client B :
divulgation entre clients concurrents, action sur le mauvais parc. Trois verrous :
1. **Identification du tenant avant tout acte** (§6.2, étape 1) — critère KO de la grille QA du compte.
2. **Vérification du droit à agir** : le demandeur figure-t-il dans la liste des contacts autorisés du tenant ?
3. **KB cloisonnée par tenant**, jamais une KB « MSP » globale.

### 5.3 A3 — Éditeur SaaS, extension d'une équipe support existante

> C'est l'archétype **le plus léger en encadrement** et **le plus délicat en gouvernance**.
> Chemin par défaut : **M1** — référent mutualisé, technique chez l'éditeur.

```
Éditeur SaaS avec support déjà en production
 ├─ Existe-t-il un lead support / Head of Support disponible ≥ 2 h/semaine ?
 │   ├─ NON → D1=4 → on n'est plus en A3 mais proche de A4. Réévaluer (§5.4)
 │   └─ OUI ─┐
 ├─ Macros + KB produit à jour ?
 │   ├─ NON → D2=2 ou 4. Prérequis : un chantier KB avant J1, porté par l'éditeur
 │   └─ OUI ─┐
 ├─ ⚠️ VERROU PRODUIT — un référent produit côté éditeur est-il engagé
 │   sur ~4 h/semaine pendant 4 semaines (sandbox + Q/R + validation) ?
 │   ├─ NON → 🔴 décaler le J1. Sans ça, l'agent apprend le produit sur des vrais tickets
 │   └─ OUI ─┐
 ├─ ⚠️ VERROU TRAÇABILITÉ — les tickets traités par nous sont-ils identifiables
 │   (groupe/tag dédié dans Zendesk/Intercom/Front) ?
 │   ├─ NON → 🔴 blocage : sans traçabilité, notre SLA n'est pas mesurable donc pas opposable,
 │   │        et l'avoir de 20 % devient indéfendable dans les deux sens
 │   └─ OUI ─┐
 ├─ Répartition de la file :
 │   ├─ par PLAGE HORAIRE + catégories listées → ✅ recommandé
 │   ├─ par CATÉGORIE de ticket              → ✅ acceptable
 │   └─ « les tickets faciles »              → ❌ refuser : périmètre non mesurable,
 │                                              démotivant, et invisible dans le reporting
 └─ Positions → grille §3.3
```

**Le point de gouvernance propre à A3 — « co-pilotage cadré ».** L'éditeur a déjà des
managers et l'habitude de piloter ses agents. La ligne, appliquée de `GOUVERNANCE §2` :

| Situation quotidienne | Verdict | Pourquoi |
|---|---|---|
| L'agent lit et écrit dans le canal Slack support commun | ✅ | matière de travail |
| Le lead client repriorise un ticket dans l'outil | ✅ | autorité fonctionnelle, elle porte sur le **travail** |
| L'agent participe au daily support (écoute, pose des questions) | ✅ **si** c'est un point d'information | c'est du contexte produit |
| Le lead client assigne au daily les tâches de la journée d'un agent nommé | ❌ | c'est du **commandement** — passe par le référent |
| Le lead client fait un « 1-to-1 » ou un feedback de performance à l'agent | ❌ | autorité disciplinaire = Salverys |
| Le lead client demande le remplacement d'un agent | ⚠️ recevable comme **demande**, tranchée par Salverys | on tient le SLA, on choisit les moyens |

**Test simple à donner au référent** : *une instruction qui porte sur **un ticket** est
légitime ; une instruction qui porte sur **une personne** ou **une journée** remonte au
référent.*

**Le vrai risque projet sur A3 n'est pas la gouvernance, c'est le produit.** Un agent N1
sur un SaaS métier atteint l'autonomie en 3 à 6 semaines, pas en 1. Conséquences à cadrer :
- **Ramp-up annoncé** : ~40 % de productivité en S1-S2, ~70 % en S3-S4, plein régime à S6.
- **L'engagement SLA ne court pas** pendant la montée en charge — il s'active à la bascule en régime (Phase 4), comme prévu au contrat art. 6.
- Le dire **avant** la signature. Un éditeur qui découvre le ramp-up en S2 croit avoir acheté un mauvais prestataire.

### 5.4 A4 — Éditeur SaaS, création de la fonction support

**Chemin par défaut : M2, souvent M3.** On ne fournit pas de la capacité, on **construit un
service**. Trois différences structurantes :

1. **On porte le référentiel.** Catégories, matrice de priorités, macros, KB v0, arbre
   d'escalade : c'est un livrable Salverys, pas un prérequis client. Il est **cadré** et
   **daté**, sinon il n'a pas de fin.
2. **Le GTM est le direct, pas la MB** (l'éditeur ne revend pas) → grille `PRICING §3`
   colonne **« En direct »** (1 900-2 400 €/ETP support N1), **mois pilote −50 %**, mise en
   service offerte, **pas de dépôt d'activation** (§3.a ne s'applique qu'en MB).
3. **L'escalade N2 n'existe pas encore.** Verrou de cadrage : **qui, chez l'éditeur, répond
   à un ticket que le N1 ne sait pas traiter, et sous quel délai ?** Sans réponse nominative,
   🔴 NO-GO — on vendrait un service dont on ne maîtrise pas la sortie.

### 5.5 M1 / M2 — branche médicale (version courte)

L'arbre s'applique, avec trois substitutions et deux spécificités.

| | Substitution |
|---|---|
| Référent | **référent médical**, pas IT |
| Grille QA | variante **MÉDICAL** de `PROCESS-QA-DOUBLE-ECOUTE.md §2` (KO = exactitude de saisie + secret médical) |
| Unité de volume | positions **ou** créneaux (`PRICING §1.b` : tarification à l'appel par créneau en MB télésec) |

**Télésecrétariat MB (M1)** — le partenaire nous confie ses créneaux non rentables :
- D4 = nombre de **cabinets** servis derrière le télésec → monte vite → intensité moyenne quasi systématique → **M1 minimum**.
- D5 : le créneau **soir 20h-22h Paris** vendu par `PRICING §1.a` correspond à **22h-minuit à Tana** en hiver → c'est du travail de nuit, pas de la soirée. Voir §7, éventualité E5.
- Verrou : **prix d'achat cible qualifié dès le 1er échange** (leçon Callmed, `EVALUATION-STRATEGIQUE-2026-06.md §1.4`).

**Médical direct (M2, chaîne ou cabinet de groupe)** :
- D1 = 4 par nature (aucun cabinet n'a de « N2 ») → intensité au moins moyenne, **M1 minimum** même à 2 positions.
- Multi-sites → D4 = 2 ou 4, une **fiche par site** (praticiens, motifs, urgences, renvois).
- KPI engagé : **décroché ≥ 90 %**, avoir 20 % (`PRICING §7`).

---

## 6. Étage 5 — Call flows opérationnels par archétype

> Gabarits à **instancier par compte** dans `FICHE-COMPTE-CALL-FLOW.md`. Ce qui est écrit
> ici est la structure ; les valeurs entre `[...]` sont figées au cadrage.

### 6.1 A1 — ESN / infogéreur (helpdesk IT N1, MB rang 2)

```
1. ENTRÉE      ticket dans l'ITSM de l'ESN, file [nom] · ou appel routé du SVI de l'ESN
2. PRISE EN    accusé + statut « en cours » sous [SLA prise en charge]
   CHARGE      ⏱ le chrono du SLA démarre ici — c'est ce qui sera facturé/mesuré
3. QUALIF      catégorie + priorité selon la MATRICE DE L'ESN (jamais la nôtre)
4. PÉRIMÈTRE   liste blanche N1 figée en Annexe : [MDP, comptes, VPN, impression, poste, O365…]
               ├─ dans la liste  → étape 5
               └─ hors liste     → étape 7 IMMÉDIATEMENT. Aucune tentative hors périmètre.
5. DIAGNOSTIC  KB de l'ESN uniquement. Chaque action tracée dans le ticket.
6. ISSUE       ├─ résolu     → confirmation utilisateur → clôture + note de résolution
               └─ non résolu à [T minutes] → étape 7
7. ESCALADE    N2 DE L'ESN, file [nom]. Jamais un N2 Salverys. Passation écrite :
   MÉTIER      symptôme, périmètre testé, ce qui a été écarté, criticité.
8. ESCALADE    doute process · réclamation · suspicion RGPD · incident majeur
   EXPLOITATION → RÉFÉRENT SALVERYS sous [délai]. Le référent parle au delivery manager.
               ❌ L'agent ne parle jamais au client final de l'ESN (contrat art. 10).
9. CONTINUITÉ  incident côté Salverys (coupure, panne poste) → kit d'autonomie, puis hub
               de repli. Le référent informe le donneur d'ordre sous [délai] — PCA
               (`DOSSIER-AVANT-VENTE/01-PLAN-CONTINUITE.md`).
```

### 6.2 A2 — MSP (multi-tenant)

Identique à 6.1, **plus trois étapes en tête** — et l'ordre n'est pas négociable :

```
0.a IDENTIFICATION DU TENANT   avant toute lecture de procédure et toute action.
                               Source de vérité : [PSA / IT-Glue / fiche tenant]
0.b DROIT À AGIR               le demandeur figure-t-il dans les contacts autorisés
                               du tenant ? Sinon → refus poli + notification au MSP.
0.c COUVERTURE CONTRACTUELLE   la demande entre-t-elle dans le contrat DE CE TENANT
                               (périmètre, heures, exclusions) ? Sinon → étape 7.
```

- **Critère KO de la grille QA du compte** : une action engagée sans identification de tenant validée = fiche **rouge**, quel que soit le score.
- **Hors heures / astreinte** (si vendue) : arbre d'appel d'urgence **par tenant**, jamais générique.

### 6.3 A3 — Éditeur SaaS, extension d'équipe existante

```
1. ENTRÉE      vue [nom] du helpdesk de l'éditeur · attribution par [plage horaire | catégorie]
               🏷 tag/groupe [nom] appliqué systématiquement — c'est la preuve du SLA
2. PRISE EN    1re réponse sous [SLA 1re réponse] · macro d'accusé [nom]
   CHARGE
3. QUALIF      catégories de l'éditeur · détection « bug produit » vs « usage »
4. PÉRIMÈTRE   N1 = [usage, paramétrage, compte/facturation, how-to, incidents connus]
               ├─ dans le périmètre → étape 5
               └─ hors → étape 6
5. TRAITEMENT  KB + macros de l'éditeur. Réponse sous la marque de l'éditeur.
6. ESCALADE    ├─ bug produit → file [nom] AVEC template de reproduction obligatoire :
   MÉTIER      │  version, environnement, étapes, attendu/obtenu, capture, impact client
               ├─ demande commerciale / churn → file [nom], jamais traitée en N1
               └─ N2 support interne de l'éditeur sous [T]
7. ESCALADE    priorisation contradictoire · instruction adressée à la PERSONNE et non
   EXPLOITATION au ticket · réclamation → RÉFÉRENT SALVERYS (§5.3, test « ticket vs personne »)
8. RITUELS     daily de l'éditeur : présence en écoute ✅ · réception d'ordres ❌
```

### 6.4 A4 — Éditeur SaaS, création de fonction

Même squelette que 6.3, **mais chaque `[...]` est un livrable Salverys à produire en Phase 1**,
et deux étapes de plus :

```
0. BUILD (Phase 1)  catégories · matrice de priorités · macros v0 · KB v0 · arbre d'escalade
                    → validés par [sponsor éditeur], datés, versionnés
6.b BOUCLE KB       tout ticket non couvert par la KB → fiche KB rédigée sous 48 h.
                    C'est le livrable qui fait la valeur du compte, pas le ticket lui-même.
```

---

## 7. Éventualités à trancher au cadrage (elles arrivent toutes)

| # | Situation | Réponse |
|---|---|---|
| **E1** | *« Un référent, c'est une couche inutile — on a déjà un delivery manager. »* | Ne pas argumenter juridiquement. « Votre delivery manager donne les règles, c'est normal et c'est lui le patron du périmètre. Le référent, c'est celui qui répond de l'engagement de service — sans lui, vous n'avez plus d'engagement opposable, vous avez des intérimaires. Et il ne vous est pas facturé. » |
| **E2** | Le client final veut **choisir les agents** (CV nominatifs, entretiens) | **CV anonymisés** (`DOSSIER-AVANT-VENTE/04-CV-ANONYMISES.md`). Visio de lancement collective ✅. Entretien de sélection individuel ❌ — marqueur de mise à disposition (art. 10 bis) |
| **E3** | **Reprise d'un prestataire sortant** (A3-R) | Trois conditions : transfert de KB écrit et daté · recouvrement ≥ 2 semaines avec le sortant · **engagement de service suspendu** jusqu'à la fin du recouvrement. Sans les trois, on hérite d'un SLA intenable |
| **E4** | Le partenaire veut **une position partagée entre deux de ses clients finaux** | ✅ possible mais alors **ce n'est plus un ETP dédié** : bascule sur la tarification **à l'heure** ou **à l'interaction** (`PRICING §3`). Ne jamais vendre un ETP dédié partagé — c'est invendable en avant-vente et infacturable en litige |
| **E5** | **Astreinte / nuit / 24-7 demandé** | Tana = **UTC+3** → Paris **+2 h en hiver**, **+1 h en été**. Le 7h-9h Paris est notre créneau en or (matinée à Tana). Mais **20h Paris = 22h Tana**, et 22h Paris = **minuit** à Tana. Au-delà de 19h-20h Paris, ce n'est plus de l'amplitude, c'est du travail de nuit : prime, fatigue, turnover — en contradiction directe avec le « zéro turnover » (`CLAUDE.md`). **Refus par défaut avant M12** ; au-delà, validation direction + surcoût + rotation écrite. ⚠️ Vaut aussi pour l'add-on médical « Soirée étendue 20h-22h » (`PRICING §1.a`) : à staffer comme de la nuit |
| **E6** | Deux **donneurs d'ordre concurrents** sur le même territoire | L'**exclusivité territoire/segment 12 mois** (`PRICING §3.b`) est à coût nul aujourd'hui — mais elle bloque le 2e deal. La tracer dans `tools/deals/*.json` **avant** de la concéder, et vérifier le registre avant chaque nouvelle concession |
| **E7** | Le partenaire demande **notre grille QA interne** | Non. Il reçoit `DOSSIER-AVANT-VENTE/03-DISPOSITIF-QA-CLIENT.md` + le reporting. La grille est un outil de coaching interne ; la remettre la transforme en outil de contrôle sur nos agents (`PROCESS-QA` en-tête) |
| **E8** | Le partenaire veut **deux comptes qui démarrent la même semaine** | Impossible sur un même référent (plafond ≤ 3 positions en onboarding simultané, §3.2). Séquencer et **l'annoncer au cadrage**, pas après |
| **E9** | Le client demande un **SLA plus strict que celui qu'on a chiffré** | Le SLA n'est pas un curseur commercial : il détermine le staffing. Un SLA divisé par deux ne se donne pas, il se **repricé** ou il se refuse. Renvoyer à `DOSSIER-AVANT-VENTE/02-ENGAGEMENT-SLA.md` |
| **E10** | Le compte tourne bien, le partenaire veut **passer de 3 à 8 positions en un mois** | Refuser le calendrier, pas le volume. 8 positions = M3 + recrutement + ≤ 3 onboardings simultanés → **3 vagues, ~8 semaines**. Proposer un calendrier écrit plutôt qu'un « oui » qu'on ne tiendra pas |

---

## 8. Vocabulaire — rappel

| Terme | Où l'employer |
|---|---|
| **« manager IT » / « manager de niche »** | ce document, scripts d'appel, copy commerciale |
| **« référent d'exploitation »** | **contrat et DPA uniquement** — c'est le mot qui décrit un pilotage de prestation, pas une hiérarchie salariale |

Ne pas mélanger les deux registres dans un même document remis au client (`GOUVERNANCE §7`).

---

## 9. À revoir

- Les charges horaires de §3.2 (3 h/position/semaine en régime, 8 h en onboarding) sont des
  **estimations à calibrer sur les 2 premiers comptes réels**. Elles pilotent tous les
  plafonds : les mesurer dès le premier compte et corriger ici.
- Le plafond de 12 % du CA (§3.4) est un arbitrage de marge, pas une contrainte comptable —
  à revoir avec `FINANCE-PREVISIONNEL.md` quand le point mort sera atteint.
- La règle E5 (refus du 24/7 avant M12) est à réévaluer dès qu'un vivier de rotation existe.
