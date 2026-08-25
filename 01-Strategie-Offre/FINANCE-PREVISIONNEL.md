# FINANCE-PREVISIONNEL.md — Salverys (v3, refait le 2026-08-14)

> **Modèle acté par la direction (2026-08-14)** : bascule du 100 % freelance vers une
> **équipe 100 % salariée**. Salaire **brut** d'un agent : **3 250 000 Ar/mois (650 €)**,
> **charges patronales en sus** (CNaPS/OSTIE, §1). **Un seul fondateur**, **sans
> rémunération** au lancement. **Aucun plafond d'effectif** : la structure se dimensionne
> sur les contrats signés. **Effectif à ce jour : 1 salariée** (Vololona, développement
> commercial). GTM prioritaire inchangé : **marque blanche d'abord** sur les 3 niches
> (cf. `CLAUDE.md`). Simulateur : `tresorerie-salverys.html`.
> Taux : ~5 000 Ar ≈ 1 €.
>
> *v2 (100 % freelances, 8 agents + 2 managers, direction rémunérée, hub de repli, kits
> d'autonomie) remplacée. Les écarts de la v2 relevés dans `AUDIT-FINANCE-PREVISIONNEL.md`
> sont traités ici : ventilation fixe/variable (§2), point mort par palier tarifaire (§4),
> délai signature → facture intégré aux trajectoires (§5), besoin de financement par
> scénario (§6).*

---

## 1. Équipe salariée & politique de rémunération

| Rôle | Brut mensuel | Statut |
|---|---|---|
| Agent productif (facturable) | **3 250 000 Ar (650 €)** | CDI |
| Manager métier (1 médical, 1 IT) | **3 250 000 Ar (650 €)** | CDI, non facturable |
| Développement commercial (Vololona) | fixe ~500 € + variable, **OTE 1 000 €** | CDI — `remuneration-vololoniaina.html` |
| Direction | **0 €** | fondateur unique, non rémunéré au lancement |

**Lecture marché** : le salaire moyen d'un agent de call center à Tana est ~700 000 Ar ;
les profils expérimentés plafonnent à 900 000 Ar-2 M Ar. À 3 250 000 Ar **de brut**,
Salverys paie **~4,5 fois le marché** — bien au-delà des tout meilleurs profils
commissionnés. L'agent n'a **aucune** offre concurrente équivalente (Intelcia & co.
recrutent à 600-800 k Ar). Hypothèse **zéro turnover crédible** à ce niveau.

### 1.a Charges patronales (CNaPS / OSTIE)

| Cotisation | Taux employeur | Assiette |
|---|---|---|
| **CNaPS** (retraite, prestations familiales, risques professionnels) | **13 %** | brut, **plafonné à 8 × SME** |
| **OSTIE** (santé au travail) | **5 %** | brut, **plafonné à 8 × SME** |
| **Total employeur** | **18 %** | dans la limite du plafond |

Avec un **SME à 300 000 Ar** (fév. 2026, cf. `EVALUATION-STRATEGIQUE-2026-06.md`), le
plafond de cotisation est **8 × 300 000 = 2 400 000 Ar**.

> ⚠️ **Effet de plafond — c'est la caractéristique structurante du modèle.** Le brut de
> 3 250 000 Ar dépasse le plafond. Les charges patronales ne sont donc **pas** 18 % du
> salaire, mais **18 % de 2 400 000 Ar = 432 000 Ar ≈ 86 €**, quel que soit le brut
> au-delà du plafond. **Taux effectif : 13,3 %** sur un agent. Au-dessus de 2,4 M Ar de
> brut, la charge patronale est un **forfait de ~86 €/tête**.

| | Brut | Charges patronales | **Coût employeur** |
|---|---|---|---|
| Agent / manager | 3 250 000 Ar (650 €) | 432 000 Ar (86 €) | **3 682 000 Ar ≈ 736 €** |
| Vololona (fixe seul) | ~2 500 000 Ar (500 €) | 432 000 Ar (86 €) | **≈ 586 €** |
| Vololona (à l'OTE) | 5 000 000 Ar (1 000 €) | 432 000 Ar (86 €) | **≈ 1 086 €** |

- **Retenues salariales** (CNaPS 1 % + OSTIE 1 % + IRSA progressive) : à la charge du
  salarié, **sans impact sur le coût employeur**. Elles réduisent le net perçu — à
  vérifier lors du chiffrage d'une offre d'embauche, l'argument « 4,5× le marché » se
  compare en brut.
- **Congés payés** : 2,5 jours ouvrables/mois (30 j/an). Payés dans le salaire mensuel,
  donc **sans surcoût de paie** — mais avec un **coût de capacité** (§7).
- ⚠️ **Chiffres à confirmer avec un conseil social local** avant la première embauche :
  taux, assiette et surtout **niveau exact du plafond** conditionnent tout le modèle
  (un plafond relevé fait passer le coût agent de 736 € à ~767 €).

### 1.b Conformité — ce qui change avec le salariat

Les DPA individuels signés par chaque intervenant (ancien montage freelance) n'ont plus
lieu d'être : les engagements RGPD passent désormais par la **clause de confidentialité du
contrat de travail** + le **DPA Salverys ↔ client** (art. 28), Salverys restant
sous-traitant. **À répercuter dans `CONFORMITE-HDS-RGPD.md`.**

---

## 2. Structure de coûts mensuelle

Plus de plafond d'effectif et plus de tableau à 10 têtes : la structure se **dimensionne
sur les contrats**. Trois blocs — coût unitaire, structure actuelle, règle de montée.

### 2.a Coût unitaire par tête

| Poste | Coût employeur | + quote-part imprévus (10 %) |
|---|---|---|
| **Agent placé** (736 € + VoIP ~30 €) | **766 €** | **~843 €** |
| **Manager métier** | 736 € | ~810 € |
| **Vololona** — fixe seul / à l'OTE | 586 € / 1 086 € | ~645 € / ~1 195 € |

### 2.b Charges de structure — situation au 2026-08-14

| Poste | Détail | €/mois |
|---|---|---|
| Vololona | fixe seul, pas encore de variable déclenché | 586 |
| SaaS socle | Emelia ~40 € · M365 + GWS ~20 € · OVH ~1 € · HubSpot Free 0 € · **+ facturation, à souscrire (§8)** | ~100 |
| Divers / imprévus (10 %) | | ~69 |
| **Total — burn actuel** | ~712 € sans outil de facturation, ~755 € avec | **≈ 710-755 €/mois** |

### 2.c Règle de montée

| Déclencheur | Effet sur les charges |
|---|---|
| 1ᵉʳ contrat signé (quel que soit le métier) | + **manager métier** (810 €) · Vololona passe vers l'OTE (+550 €) |
| Chaque position ferme signée | + **843 €/mois**, à compter de **l'embauche**, soit ~1 mois **avant** la 1ʳᵉ facture |
| 2ᵉ métier activé | + **1 manager métier** (810 €) |
| Au-delà de **8 agents par manager** | + **1 manager** (810 €) |

**Socle fixe résultant** — c'est ce qui porte le point mort (§4) :

| Configuration | Vololona | Manager(s) | SaaS | Imprévus | **Fixe** |
|---|---|---|---|---|---|
| **1 métier actif** (IT seul — priorité n°1) | 1 086 € | 736 € | 100 € | 192 € | **≈ 2 114 €** |
| **2 métiers actifs** (IT + médical) | 1 086 € | 1 472 € | 100 € | 266 € | **≈ 2 924 €** |

> **Ce qui a disparu de la v2** : rémunération de la direction (−1 400 €), hub de repli et
> énergie (−500 €), indemnité de connexion domicile (−150 €), kits d'autonomie (capex).
> **La continuité de service reste promise** (`04-Closing/DOSSIER-AVANT-VENTE/01-PLAN-CONTINUITE.md`,
> risque R1 délestage) : le kit d'autonomie de l'agent est **réputé couvert par le salaire**,
> qui est à 4,5× le marché local précisément pour absorber énergie et connexion domicile.
> ⚠️ **Cette contrepartie doit être écrite noir sur blanc dans le PCA et dans le contrat de
> travail** — sinon une promesse remise aux partenaires en avant-vente n'a plus de
> financement identifiable.

- **Coût marginal d'un agent supplémentaire : ~766 €/mois** (843 € imprévus compris).
- vs modèle freelance v2 (~700 €/agent) : **+66 €/agent/mois**, soit +9 %. Le surcoût des
  charges patronales est **très inférieur** à ce que laisserait attendre un taux de 18 %,
  grâce au plafonnement (§1.a).
- **Le vrai basculement n'est pas le coût unitaire, c'est la rigidité** : un salarié ne se
  « désactive » pas au contrat perdu (§7).

---

## 3. Rentabilité par offre — vérification au coût salarié

Base : **coût direct d'un ETP placé = 766 €** (salaire chargé 736 € + VoIP 30 €).

| Offre | Prix | Coût direct | Marge brute |
|---|---|---|---|
| Télésec MB — **créneau jour** (0,90-1,10 €, `PRICING.md §1.b`) — ~1 800 appels ⇒ 1 620-1 980 € | 1 620-1 980 € | 766 € | **~53-61 %** |
| Télésec MB — **créneau soir/samedi** (1,20-1,40 €) ⇒ 2 160-2 520 € | 2 160-2 520 € | 766 € | **~65-70 %** |
| Support N1 SaaS — MB (paliers 9+ → 1-4) | 1 350-1 700 €/ETP | 766 € | **~43-55 %** |
| Helpdesk IT N1 — MB (paliers 9+ → 1-4) | 1 550-2 000 €/ETP | 766 € | **~51-62 %** |
| Médical direct (Confort, ~4 forfaits/agent) | 2 360 €/agent | 766 € | **~68 %** |
| Support/Helpdesk direct | 1 900-2 800 €/ETP | 766 € | **~60-73 %** |

**Verdict** : la rentabilité tient partout, mais **le palier 9+ Support (1 350 €) tombe à
43 % de marge brute** — c'est le point bas absolu de la grille, et il n'est accordé que
contre 9 positions fermes (`PRICING.md §3`), ce qui le rend largement bénéficiaire en
valeur absolue (cf. §4). **Nouveau plancher absolu : coût direct + 20 % = 766 × 1,2 ≈
920 €/ETP** (remplace les 840 € du modèle freelance ; codé en dur dans
`tools/deal-build.mjs`).

> ⚠️ **Ces marges sont des marges à saturation** : elles supposent l'agent rempli. Pendant
> la montée en charge, un agent qui sert un seul cabinet médical (590 €) est **en marge
> négative**. Les 3 à 6 premiers mois d'un métier ne ressemblent à aucune ligne de ce
> tableau.

---

## 4. Seuil de rentabilité — par palier tarifaire

Le point mort n'est pas un chiffre unique : il dépend du **prix du palier vendu**.

**Point mort = fixe ÷ (prix ETP − 843 €)**, où 843 € est le coût variable d'un agent
placé, imprévus compris (§2.a).

| Palier (`PRICING.md §3`) | Prix ETP | Contribution | **1 métier actif** (fixe 2 114 €) | **2 métiers** (fixe 2 924 €) |
|---|---|---|---|---|
| Helpdesk 1-4 ETP | 2 000 € | 1 157 € | **2 ETP** | 3 ETP |
| Helpdesk 5-8 ETP | 1 750 € | 907 € | **3 ETP** | 4 ETP |
| Support 1-4 ETP | 1 700 € | 857 € | **3 ETP** | 4 ETP |
| Helpdesk 9+ ETP | 1 550 € | 707 € | **3 ETP** | 5 ETP |
| Support 5-8 ETP | 1 500 € | 657 € | **4 ETP** | 5 ETP |
| Support 9+ ETP | 1 350 € | 507 € | **5 ETP** | 6 ETP |

**Point mort réel : 2 à 6 ETP placés**, soit **4 000 à 8 100 € de CA mensuel** selon le
mix et le nombre de métiers activés. C'est l'effet direct de la suppression de la
rémunération de direction, du hub et de la double manager au démarrage : le socle fixe
passe de ~3 830 € (v2) à **2 114 €**.

**Deux lectures commerciales immédiates :**

1. **Un seul deal de 3-4 positions au tarif standard (palier 1-4) fait atteindre le point
   mort.** C'est le message à tenir en prospection MB — plus besoin d'un donneur d'ordre
   à 7 positions.
2. **La nouvelle structure de paliers sécurise le bas de grille.** Le prix plancher
   (1 350 €) n'est plus accordé à 5 positions mais à **9**. Au coût salarié, 5 positions à
   1 350 € dégageraient **+421 €/mois** — soit +6 %, une marge de manœuvre nulle : une
   absence non couverte ou un mois de sous-consommation suffit à la faire basculer. À 9
   positions, le même tarif dégage **+2 450 €/mois**. Détail et comparaison des bases de
   coûts : `AUDIT-FINANCE-PREVISIONNEL.md §A`.

---

## 5. Trajectoire 12 mois — 3 scénarios (MB-first)

**Hypothèses communes** : prospection dès M1 (séquences prêtes) · **délai signature →
1ʳᵉ facture intégré** : recrutement 2-4 sem. + formation 2-3 sem. ⇒ l'agent est **payé à
partir de M+1** et **facturé à partir de M+2** · encaissement à 30 j · dépôt d'activation
MB encaissé à la signature (900 €/position, imputé 300 €/position sur 3 factures,
`PRICING.md §3.a`) · offre de lancement −50 % le 1ᵉʳ mois **en direct** uniquement ·
1 manager par métier actif, +1 au-delà de 8 agents.

| | Prudent | Médian | Ambitieux |
|---|---|---|---|
| Placements ETP MB | +1/trimestre dès M4 | +1/mois dès M4 | +2/mois dès M3 |
| Prix ETP MB retenu | 1 700 € (palier 1-4) | 1 600 € (mix 1-4 / 5-8) | 1 500 € (palier 5-8) |
| Direct (médical) | 0 la 1ʳᵉ année | +1 client/mois dès M6 | +2/mois dès M5 |
| **CA mensuel M12** | **5 100 €** | **13 900 €** | **30 500 €** |
| **Charges mensuelles M12** | 4 640 € | 11 350 € | 22 270 € |
| **Point mort (CA ≥ charges)** | **M12** | **M10** | **M8** |
| **Creux de trésorerie** | −18,0 k€ (M15) | −23,0 k€ (M11) | −22,5 k€ (M10) |
| Effectif M12 | 3 agents + 1 manager + 1 | 10 agents + 2 managers + 1 | 22 agents + 3 managers + 1 |

**Les trois scénarios passent le point mort dans l'année.** C'est le changement majeur vs
la v2, où le scénario prudent ne l'atteignait pas avant M+18 : un socle fixe divisé par
~1,8 et une direction non rémunérée déplacent le point mort de 6 mois.

⚠️ **La contrainte n'est plus la trésorerie, c'est le recrutement.** Le scénario ambitieux
exige d'embaucher et former **~2 agents/mois pendant 10 mois** (22 agents à M12), avec un
seul manager pour 8 agents. `PRICING.md §3.e` fixe le seuil pratique à **un remplacement
long à la fois par métier** : au-delà, la supervision se dégrade et la qualité avec elle.
C'est là qu'il faut mettre le garde-fou, pas sur le cash.

---

## 6. Trésorerie & BFR

- Encaissement à 30 j ⇒ BFR ≈ 1 mois de CA en permanence dehors, **plus** ~1 mois de
  salaires payés avant la première facture de chaque position.
- **Besoin de financement, par scénario** (creux + coussin 30 %) :

  | Scénario | Creux max | Mois du creux | **Capital recommandé** |
  |---|---|---|---|
  | Prudent | −18,0 k€ | M15 | **~23 k€** |
  | Médian | −23,0 k€ | M11 | **~30 k€** |
  | Ambitieux | −22,5 k€ | M10 | **~29 k€** |

  > **Le besoin de financement est quasi indépendant du scénario : ~25-30 k€.** Croître
  > plus vite fait rentrer le CA plus tôt, mais fait aussi payer plus de salaires avant
  > facturation — les deux effets se compensent presque exactement. **Recommandation ferme :
  > provisionner 30 k€**, ce qui couvre les trois trajectoires. (v2 : 50-60 k€, et
  > insuffisant dans le scénario prudent.)

- **Le creux ne se creuse plus en cas de lenteur commerciale.** En v2, un démarrage lent
  brûlait ~6 900 €/mois d'équipe payée sans contrat. Ici le burn de départ est de
  **755 €/mois** tant qu'aucun contrat n'est signé : le coût de l'attente est devenu
  marginal. C'est l'effet principal de la bascule.
- Leviers anti-creux (inchangés, tous actés) :
  - ✅ **Dépôt d'activation MB** — **900 €/position, plafond 2 700 €**, encaissé **à la
    signature**, déduit des 3 premières factures (300 €/position/mois), `PRICING.md §3.a`.
    Effet trésorerie : encaissement **à J0 au lieu de J+30**, et **coût d'onboarding
    couvert (~1 600 €)** si le partenaire s'arrête. Le dépôt tombe désormais **~2 mois
    avant** la première facture (§5), ce qui le rend encore plus utile qu'en v2.
  - ✅ **Fin de la remise de lancement en MB** (`PRICING.md §3.b`) : le mois pilote à −50 %
    coûtait **~2 625 €** sur un deal de 3 positions, pour un onboarding réel de ~1 600 €, et
    sortait le mois d'entrée à **≈ −1 075 €**. Supprimée, ce mois d'entrée ressort à
    **≈ +1 550 €** (5 250 € encaissés − 3 × 766 € de salaires chargés − 1 600 € d'onboarding).
    **Conservée en direct** (`PRICING.md §7`).
  - ✅ **Tarif conditionné à un volume ferme facturable** sur **tous** les paliers
    (`PRICING.md §3`) : supprime le risque de banc payé, désormais bien plus coûteux
    qu'en freelance (§7).
  - Prélèvement SEPA dès le 1er mois ; part variable de Vololona indexée sur les contrats
    encaissés, pas signés.
- Simulation interactive : `tresorerie-salverys.html`.

---

## 7. Risques financiers spécifiques au modèle salarié

1. 🔴 **Rigidité de l'effectif — le risque n°1, et il est nouveau.** En freelance, un agent
   non staffé se désactivait. Un salarié ne se désactive pas : il faut un motif, un
   **préavis** et une **indemnité de licenciement** (droit du travail malgache). Un contrat
   perdu ne coûte plus 766 €/mois pendant qu'on cherche à le remplacer — il coûte cela
   **plus** le coût de sortie. **Mitigation** : n'embaucher qu'**après** signature d'un
   volume ferme facturable (§2.c), utiliser la **période d'essai** comme fenêtre
   d'ajustement, et provisionner les indemnités dès 6 mois d'ancienneté.
2. **Coût de capacité des absences** : 5 semaines de congés + ~3 % de maladie ≈ **13 %**
   d'absence (`PRICING.md §3.e`). Un salarié est payé 12 mois et produit ~10,4 mois. La
   doctrine de continuité fait porter ce remplacement par le **manager métier**, déjà
   financé et non facturable — donc **pas de surcoût direct**, mais un **plafond** :
   à 13 % d'absence, 8 agents génèrent ~1 ETP d'absence à couvrir, soit tout le temps
   disponible d'un manager. **Au-delà de ~8 agents par métier, prévoir un agent volant
   (+766 €/mois)** plutôt que de dégrader la supervision.
3. **Concentration donneurs d'ordre** : en MB, 1-2 contrats peuvent porter 60-80 % du CA.
   Aggravé par le point 1 — perdre un donneur d'ordre en salariat coûte plus cher qu'en
   freelance. Exiger préavis 60-90 j, viser 3+ donneurs d'ordre dès M9.
4. **Droit du travail & paie** : déclarations CNaPS/OSTIE mensuelles, IRSA, registre du
   personnel, médecine du travail. Provisionner un **conseil social local** (~500 €
   one-shot pour le cadrage des contrats) + une **prestation de paie** récurrente.
5. **Plafond de cotisation** : tout le modèle repose sur un plafond CNaPS/OSTIE à
   8 × SME = 2,4 M Ar (§1.a). **Une revalorisation du SME renchérit mécaniquement chaque
   tête** — +100 000 Ar de SME = +14 400 Ar de charges/agent/mois. À surveiller au budget.
6. **Change Ar/€ et inflation locale** : salaires en ariary, revenus en euros. Le risque
   réel est une **appréciation de l'ariary**, qui renchérit la masse salariale en euros ;
   une dépréciation, elle, l'allège. Marges de couverture réelles : **43 % (palier 9+
   Support)** à **73 % (direct)** — et non 65-80 % comme l'annonçait la v2. Le palier
   Support 9+ est celui qui absorbe le moins.
7. **Absence d'indexation** : le brut de 3 250 000 Ar est figé alors que l'inflation locale
   court. Le « 4,5× le marché » est le **seul** appui de l'hypothèse zéro turnover
   (§1) — prévoir une **revalorisation annuelle de 5-8 %** de la masse salariale au budget,
   sinon l'hypothèse n'est vraie que la première année.
8. **Avoirs qualité** (engagement décroché/SLA 20 %, max 1/12) : au pire ~1,7 % du CA
   annuel d'un contrat — négligeable.

---

## 8. Postes à chiffrer (non encore budgétés)

Reste du périmètre non couvert par la ligne « divers/imprévus » et à intégrer dès que les
montants sont connus :

| Poste | Nature | Statut |
|---|---|---|
| Impôt sur les revenus (entité malgache) | **20 %** du résultat en droit commun · minimum de perception ~0,5 % du CA | à chiffrer — arbitrage régime franc : `ZONE-FRANCHE.md` |
| Prestation de paie / expert-comptable | récurrent | à chiffrer |
| Frais de change et transfert EUR→MGA (Wise Business) | ~0,5-1 % de la masse transférée | ~10-30 €/mois aujourd'hui |
| Assurance RC professionnelle | récurrent — **souvent exigée en appel d'offres MB** | à chiffrer |
| Conseil social local (cadrage des contrats de travail) | ~500 € one-shot | §7.4 |
| Onboarding d'un deal MB | **~1 600 €** par deal (`AUDIT-ESPACE-CLIENT.md §9.2`) | variable, couvert par le dépôt §3.a |
| Remise « clients fondateurs » | ~1 660 € pour 5 logos (`PRICING.md §7`) | variable |
| Hébergement HDS en **direct** | 100-500 €/mois (`PRICING.md §10`) | déclenché au 1ᵉʳ client médical direct |
| Provision indemnités de licenciement | à partir de 6 mois d'ancienneté | §7.1 |

---

*v2 (100 % freelances, 3 250 000 Ar de fee, 8 agents + 2 managers, direction rémunérée,
hub de repli, kits d'autonomie) remplacée le 2026-08-14 par décision direction : équipe
100 % salariée, brut 3 250 000 Ar + charges patronales, fondateur unique non rémunéré,
effectif dimensionné sur les contrats. Sources coûts locaux : lagazette-madagascar.com,
lexpress.mg, newsmada.com — cf. `EVALUATION-STRATEGIQUE-2026-06.md`. Taux et plafonds
CNaPS/OSTIE à confirmer avec un conseil social local (§1.a).*

*Régime fiscal : ce prévisionnel est établi **hors régime d'entreprise franche**. L'arbitrage sur l'agrément EDBM (loi n° 2007-037) et son déclencheur sont traités dans `ZONE-FRANCHE.md` — décision au 2026-08-25 : **rester en droit commun**, ne rien recalculer en anticipant l'agrément.*
