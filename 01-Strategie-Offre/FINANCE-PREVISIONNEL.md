# FINANCE-PREVISIONNEL.md — Salverys (v3.2, mis à jour le 2026-09-02)

> 🔵 **Mise à jour du 2026-09-02 — nouvelle politique salariale (décision direction).**
> Le brut unique de 3 250 000 Ar est remplacé par une **bande 2 500 000 → 3 250 000 Ar,
> entrée à 2 500 000 Ar (500 €)**. Motif : dégager la marge qui financera le **bloc
> d'infrastructure de site** (loyer, double FAI, groupe électrogène) qui apparaîtra avec
> l'équipe et n'est aujourd'hui budgété nulle part (§8). Effets répercutés dans tout le
> document :
> - **Coût employeur : 736 € → 586 €** ; **coût direct d'un ETP placé : 766 € → 616 €**
>   (§1.a, §2.a). Les charges patronales ne bougent pas (86 €, plafond atteint dès 2,4 M Ar).
> - **Socle fixe (1 métier actif) : 920 € → ~755 €** (§2.c).
> - **Point mort : 1 ETP placé** sur tous les paliers sauf Support 9+ (§4).
> - **Marges brutes : 43-73 % → 54-78 %** (§3).
> - **Plancher tarifaire maintenu à 920 €** — c'est une **digue commerciale**, pas une
>   fonction du coût (§3). La baisse de salaire finance l'infrastructure, elle ne finance
>   pas une baisse de prix.
> - ⚠️ **Ce que ça coûte : l'argument anti-turnover passe de ~4,5× à ~3,5× le marché
>   local** (§1). C'est le seul appui de l'hypothèse zéro turnover — voir §7.7.
> - ⚠️ **Effectif = 0 : l'économie est nulle aujourd'hui.** Elle ne se matérialise qu'à
>   ~150 €/tête/mois, donc à partir des premières embauches (§8).
>
> 🔴 **Mise à jour du 2026-08-28 — le poste de développement commercial a pris fin le
> 2026-08-27. Effectif : 0 salarié.** Effets chiffrés, répercutés dans tout le document :
> - **Burn avant premier contrat : ~710-755 € → ~65 €/mois** (§2.b). Sans salaire ni
>   Emelia (non souscrit), il ne reste que les abonnements outils. ⚠️ **Chiffre corrigé
>   en fin de journée à ~110-155 €/mois** : il omettait l'abonnement **Sales Navigator**,
>   actif et non budgété — voir l'encadré rouge du §2.b. L'ordre de grandeur ne change pas
>   la conclusion, mais Sales Navigator est le premier poste de dépense de la structure.
> - **Socle fixe après le 1er contrat : 2 114 € → ~920 €** (1 métier actif) (§2.c)
>   — *ramené à ~755 € par la décision du 2026-09-02*.
> - **Point mort : 2-6 ETP → 1-2 ETP placés** (§4), soit **~2 000 à 3 400 €** de CA mensuel
>   — *ramené à 1-2 ETP / ~1 350 à 2 000 € par la décision du 2026-09-02*.
> - **Conséquence commerciale : un seul contrat MB de 2 positions passe le point mort.**
> - **Conséquence de pilotage : il n'y a plus d'horloge de trésorerie.** La contrainte
>   n'est plus le cash, c'est le **temps d'une seule personne** (§7).
> ⚠️ Les **trajectoires 12 mois (§5)** n'ont pas été recalculées : elles supposaient une
> prospection à temps plein. Elles sont désormais **optimistes sur le rythme de signature**
> et doivent être relues comme telles (voir l'avertissement en tête de §5).
>
> **Modèle acté par la direction (2026-08-14)** : bascule du 100 % freelance vers une
> **équipe 100 % salariée**. Salaire **brut** d'un agent : **à partir de 2 500 000 Ar/mois
> (500 €)**, bande jusqu'à 3 250 000 Ar (révisé le 2026-09-02),
> **charges patronales en sus** (CNaPS/OSTIE, §1). **Un seul fondateur**, **sans
> rémunération** au lancement. **Aucun plafond d'effectif** : la structure se dimensionne
> sur les contrats signés. GTM prioritaire inchangé : **marque blanche d'abord**
> (cf. `CLAUDE.md`). Simulateur : `tresorerie-salverys.html` — ⚠️ **son curseur
> « Commercial » doit être mis à 0** tant qu'il n'y a pas de recrutement commercial.
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
| Agent productif (facturable) | **à partir de 2 500 000 Ar (500 €)** — bande jusqu'à 3 250 000 Ar | CDI |
| Référent d'exploitation (1 médical, 1 IT) | **à partir de 2 500 000 Ar (500 €)** — bande jusqu'à 3 250 000 Ar | CDI, non facturable |
| ~~Développement commercial~~ | ~~fixe ~500 € + variable, OTE 1 000 €~~ | **Poste terminé le 2026-08-27 — non pourvu.** Grille conservée pour un futur recrutement : `remuneration-vololoniaina.html` |
| Direction | **0 €** | fondateur unique, non rémunéré au lancement |

**Lecture marché** : le salaire moyen d'un agent de call center à Tana est ~700 000 Ar ;
les profils expérimentés plafonnent à 900 000 Ar-2 M Ar. À **2 500 000 Ar de brut à
l'entrée**, Salverys paie **~3,5 fois le marché** — toujours au-dessus des meilleurs
profils expérimentés du secteur, et au-dessus de ce que recrutent Intelcia & co.
(600-800 k Ar). En haut de bande (3 250 000 Ar), on reste à **~4,5×**.

> **Décision direction du 2026-09-02 — passage d'une grille unique à une bande.**
> L'entrée descend de 3 250 000 à **2 500 000 Ar** pour dégager la marge qui financera le
> bloc d'infrastructure de site (loyer, double FAI, groupe électrogène — §8), absent du
> budget actuel. Trois choses à garder en tête :
> - **Le moment est le bon** : effectif = 0. On ne baisse le salaire de personne, on fixe
>   une grille d'embauche. Une baisse appliquée à une équipe en place aurait coûté
>   exactement ce qu'on cherche à protéger.
> - **La progression dans la bande est bon marché** : le plafond de cotisation étant déjà
>   atteint à 2,4 M Ar (§1.a), **chaque tranche de 250 000 Ar au-dessus de l'entrée coûte
>   50 €/mois et zéro charge patronale supplémentaire**. La bande est donc un levier de
>   fidélisation quasiment sans friction — à utiliser à l'ancienneté ou à la prise de
>   responsabilité, pas à l'embauche.
> - **Le prix payé est l'argument** : ~3,5× au lieu de ~4,5×. C'est le seul appui de
>   l'hypothèse zéro turnover (§7.7), et il est désormais moins large. Toute la
>   communication publique doit être réalignée sur **3,5×** — un chiffre qu'on ne peut pas
>   annoncer haut puis servir bas.

### 1.a Charges patronales (CNaPS / OSTIE)

| Cotisation | Taux employeur | Assiette |
|---|---|---|
| **CNaPS** (retraite, prestations familiales, risques professionnels) | **13 %** | brut, **plafonné à 8 × SME** |
| **OSTIE** (santé au travail) | **5 %** | brut, **plafonné à 8 × SME** |
| **Total employeur** | **18 %** | dans la limite du plafond |

Avec un **SME à 300 000 Ar** (fév. 2026, cf. `EVALUATION-STRATEGIQUE-2026-06.md`), le
plafond de cotisation est **8 × 300 000 = 2 400 000 Ar**.

> ⚠️ **Effet de plafond — c'est la caractéristique structurante du modèle.** Toute la bande
> salariale (2 500 000 → 3 250 000 Ar) **dépasse le plafond**. Les charges patronales ne
> sont donc **pas** 18 % du salaire, mais **18 % de 2 400 000 Ar = 432 000 Ar ≈ 86 €**,
> quel que soit le brut au-delà du plafond. **Taux effectif : 17,3 %** à l'entrée de bande,
> 13,3 % en haut de bande. Au-dessus de 2,4 M Ar de brut, la charge patronale est un
> **forfait de ~86 €/tête**.
>
> **Corollaire de la décision du 2026-09-02** : descendre l'entrée de 3 250 000 à
> 2 500 000 Ar économise **150 €/tête/mois de brut et 0 € de charges** — l'intégralité de
> la baisse est un gain net. Descendre **sous** 2 400 000 Ar commencerait en revanche à
> réduire aussi les cotisations : c'est le seuil au-delà duquel le raisonnement change.
> **On ne descend pas sous 2,4 M Ar** — l'écart avec le marché n'y survivrait pas.

| | Brut | Charges patronales | **Coût employeur** |
|---|---|---|---|
| Agent / référent — **entrée de bande** | 2 500 000 Ar (500 €) | 432 000 Ar (86 €) | **2 932 000 Ar ≈ 586 €** |
| Agent / référent — **haut de bande** | 3 250 000 Ar (650 €) | 432 000 Ar (86 €) | **3 682 000 Ar ≈ 736 €** |
| Vololona (fixe seul) | ~2 500 000 Ar (500 €) | 432 000 Ar (86 €) | **≈ 586 €** |
| Vololona (à l'OTE) | 5 000 000 Ar (1 000 €) | 432 000 Ar (86 €) | **≈ 1 086 €** |

- **Retenues salariales** (CNaPS 1 % + OSTIE 1 % + IRSA progressive) : à la charge du
  salarié, **sans impact sur le coût employeur**. Elles réduisent le net perçu — à
  vérifier lors du chiffrage d'une offre d'embauche, l'argument « ~3,5× le marché » se
  compare en brut.
- **Congés payés** : 2,5 jours ouvrables/mois (30 j/an). Payés dans le salaire mensuel,
  donc **sans surcoût de paie** — mais avec un **coût de capacité** (§7).
- ⚠️ **Chiffres à confirmer avec un conseil social local** avant la première embauche :
  taux, assiette et surtout **niveau exact du plafond** conditionnent tout le modèle
  (un plafond relevé fait passer le coût agent d'entrée de bande de 586 € à ~617 €).

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
| **Agent placé** (586 € + VoIP ~30 €) | **616 €** | **~678 €** |
| **Référent d'exploitation** | 586 € | ~645 € |
| *(rappel — haut de bande : agent 766 € · référent 736 €)* | | *~843 € · ~810 €* |
| *Développement commercial (poste non pourvu depuis le 2026-08-27)* | *586 € / 1 086 € à l'OTE* | *~645 € / ~1 195 €* |

### 2.b Charges de structure — situation au 2026-08-28

| Poste | Détail | €/mois |
|---|---|---|
| Salaires | **aucun** — 0 salarié, fondateur non rémunéré | **0** |
| **LinkedIn Sales Navigator** | 🔴 **abonnement actif, jamais budgété jusqu'au 2026-08-28.** Ordre de 80-100 € en mensuel, moins en annuel — **à relever sur la facture** | **~80-100** |
| Google Workspace (cold) | ~6 €/boîte · 2 domaines × 1-2 boîtes — **nombre exact de boîtes à confirmer** | ~12-24 |
| Microsoft 365 (`salverys.fr`) | 1 boîte, Business Basic/Standard | ~6-12 |
| Noms de domaine | `salverys.fr` + `salverys-bpo.fr` + `salverys-groupe.fr`, ~10-15 €/an chacun | ~3 |
| Airtable · Netlify | offres gratuites, suffisantes à ce stade | 0 |
| *Emelia* | *~40 € — **non souscrit**, reporté (décision 2026-08-28, cf. `CLAUDE.md`)* | *0* |
| *Frais de change Wise* | *~0,5-1 % de la masse transférée — **nul tant qu'il n'y a pas de salaire à verser*** | *0* |
| Divers / imprévus (10 %) | | ~10-14 |
| **Total — burn actuel** | | **≈ 110-155 €/mois** |

> 🔴 **Correction du 2026-08-28, en fin de journée.** Le chiffre de **~65 €/mois** publié
> plus haut dans ce document **omettait l'abonnement Sales Navigator**, qui est actif et
> qui est aujourd'hui — et de loin — **le premier poste de dépense de l'entreprise** : à lui
> seul, il pèse plus que tout le reste réuni. La ligne « SaaS socle ~20 € » sous-estimait
> par ailleurs GWS (facturé **par boîte**, pas par domaine).
>
> **Ce que ça ne change pas :** l'ordre de grandeur reste dérisoire face à un point mort à
> 1-2 ETP, et la conclusion tient — il n'y a pas d'horloge de trésorerie.
> **Ce que ça change :** Sales Navigator devient le seul arbitrage de dépense qui mérite
> d'être posé. Il ne se justifie que s'il est **réellement utilisé** (alertes quotidiennes,
> résolution des 42 décideurs manquants — `PLAYBOOK-SALES-NAVIGATOR.md` §11 et §13).
> Un mois sans s'en servir coûte plus cher que tout le reste de la structure.
>
> **À faire :** relever les trois factures réelles (Sales Navigator, GWS, M365) et
> remplacer les fourchettes ci-dessus par les montants exacts.

> **Ce que ça change vraiment.** À ~110-155 €/mois, **le temps ne coûte presque plus rien**. L'urgence
> commerciale n'est plus financière : elle est stratégique (occuper le terrain, apprendre
> vite). Toute décision qui achète du temps contre du cash — souscrire un outil, sous-traiter
> — doit désormais se justifier par un gain de **temps fondateur**, pas par un gain de burn.

### 2.c Règle de montée

| Déclencheur | Effet sur les charges |
|---|---|
| 1ᵉʳ contrat signé (quel que soit le métier) | + **référent d'exploitation** (645 €) |
| Chaque position ferme signée | + **678 €/mois**, à compter de **l'embauche**, soit ~1 mois **avant** la 1ʳᵉ facture |
| 2ᵉ métier activé | + **1 référent d'exploitation** (645 €) |
| Au-delà de **8 agents par référent** | + **1 référent** (645 €) |
| **Ouverture d'un site** (plateau physique) | + **bloc infrastructure à chiffrer** : loyer, double FAI, groupe électrogène (§8) |
| Recrutement d'un commercial (non planifié) | + **645 € au fixe seul**, jusqu'à **~1 195 € à l'OTE** |

**Socle fixe résultant** — c'est ce qui porte le point mort (§4) :

| Configuration | Commercial | Référent(s) | SaaS | Imprévus | **Fixe** |
|---|---|---|---|---|---|
| **1 métier actif** (IT seul — priorité n°1) | 0 € | 586 € | 100 € | 69 € | **≈ 755 €** |
| **2 métiers actifs** (IT + médical) | 0 € | 1 172 € | 100 € | 127 € | **≈ 1 399 €** |
| *(rappel — bande haute, 1 métier)* | *0 €* | *736 €* | *100 €* | *84 €* | *≈ 920 €* |
| *(rappel v3, avec un commercial à l'OTE — 1 métier)* | *1 086 €* | *736 €* | *100 €* | *192 €* | *≈ 2 114 €* |

> **Ce qui a disparu de la v2** : rémunération de la direction (−1 400 €), hub de repli et
> énergie (−500 €), indemnité de connexion domicile (−150 €), kits d'autonomie (capex).
> **La continuité de service reste promise** (`04-Closing/DOSSIER-AVANT-VENTE/01-PLAN-CONTINUITE.md`,
> risque R1 délestage) : le kit d'autonomie de l'agent est **réputé couvert par le salaire**,
> qui était à 4,5× le marché local précisément pour absorber énergie et connexion domicile.
> ⚠️ **Cette contrepartie doit être écrite noir sur blanc dans le PCA et dans le contrat de
> travail** — sinon une promesse remise aux partenaires en avant-vente n'a plus de
> financement identifiable.
>
> 🔵 **Ce que la décision du 2026-09-02 change ici — et c'est le point le plus important.**
> À ~3,5× le marché, l'argument « le kit est couvert par le salaire » devient plus fragile :
> on a retiré 150 €/mois à l'agent tout en lui laissant la charge de son énergie et de sa
> connexion. **Les deux décisions ne tiennent que prises ensemble** : la baisse de salaire
> finance un **site** avec groupe électrogène et double FAI, c'est-à-dire que Salverys
> reprend à sa charge la continuité qu'elle faisait porter au domicile de l'agent. Si le
> site ne se fait pas, la baisse de salaire n'a plus de contrepartie et la promesse de
> continuité n'a plus de financement du tout. **À trancher explicitement au moment du
> chiffrage du bloc infra (§8), pas après les premières embauches.**

- **Coût marginal d'un agent supplémentaire : ~616 €/mois** (678 € imprévus compris) à
  l'entrée de bande ; 766 € / 843 € en haut de bande.
- vs modèle freelance v2 (~700 €/agent) : **−84 €/agent/mois** à l'entrée de bande. Le
  salariat coûtait +66 €/agent tant que le brut était à 3 250 000 Ar ; à 2 500 000 Ar il
  coûte **moins cher que le freelance**, charges patronales comprises — grâce au
  plafonnement des cotisations (§1.a).
- **Le vrai basculement n'est pas le coût unitaire, c'est la rigidité** : un salarié ne se
  « désactive » pas au contrat perdu (§7).

---

## 3. Rentabilité par offre — vérification au coût salarié

Base : **coût direct d'un ETP placé = 616 €** (salaire chargé 586 € + VoIP 30 €), entrée de
bande. En haut de bande (766 €), les marges ci-dessous perdent 6 à 9 points.

| Offre | Prix | Coût direct | Marge brute |
|---|---|---|---|
| Télésec MB — **créneau jour** (0,90-1,10 €, `PRICING.md §1.b`) — ~1 800 appels ⇒ 1 620-1 980 € | 1 620-1 980 € | 616 € | **~62-69 %** |
| Télésec MB — **créneau soir/samedi** (1,20-1,40 €) ⇒ 2 160-2 520 € | 2 160-2 520 € | 616 € | **~71-76 %** |
| Support N1 SaaS — MB (paliers 9+ → 1-4) | 1 350-1 700 €/ETP | 616 € | **~54-64 %** |
| Helpdesk IT N1 — MB (paliers 9+ → 1-4) | 1 550-2 000 €/ETP | 616 € | **~60-69 %** |
| Médical direct (Confort, ~4 forfaits/agent) | 2 360 €/agent | 616 € | **~74 %** |
| Support/Helpdesk direct | 1 900-2 800 €/ETP | 616 € | **~68-78 %** |

**Verdict** : la rentabilité tient partout, et **le point bas de la grille — palier 9+
Support (1 350 €) — remonte de 43 % à 54 % de marge brute**. C'est le gain direct de la
décision du 2026-09-02 : ~+11 points sur tout le bas de grille, soit précisément la marge
destinée au bloc infrastructure (§8).

> 🔒 **Plancher tarifaire : maintenu à 920 €/ETP.** Le plancher mécanique tombe à
> 616 × 1,2 ≈ **740 €**, mais **on ne le descend pas**, pour trois raisons :
> 1. Le plancher n'est pas un coût, c'est une **digue de négociation**. Le publier plus bas
>    revient à s'autoriser à vendre plus bas — or l'objectif de la baisse de salaire est de
>    **financer l'infrastructure, pas de baisser les prix**.
> 2. La bande salariale monte à 3 250 000 Ar : un agent confirmé effectivement staffé sur un
>    compte exigeant coûte bien 766 €, et 920 € reste son plancher légitime.
> 3. Aucune ligne de la rate card n'est sous 1 350 € : à 920 €, le plancher ne bride aucune
>    affaire réelle. Le baisser n'achèterait rien et ouvrirait une brèche.
>
> Valeur codée en dur dans `tools/deal-build.mjs` (`PLANCHER_ETP = 920`), inchangée. La
> **marge de sécurité** du plancher passe en revanche de +20 % à **+49 %** sur le coût
> d'entrée de bande.

> ⚠️ **Ces marges sont des marges à saturation** : elles supposent l'agent rempli. Pendant
> la montée en charge, un agent qui sert un seul cabinet médical (590 €) est **en marge
> négative**. Les 3 à 6 premiers mois d'un métier ne ressemblent à aucune ligne de ce
> tableau.

---

## 4. Seuil de rentabilité — par palier tarifaire

Le point mort n'est pas un chiffre unique : il dépend du **prix du palier vendu**.

**Point mort = fixe ÷ (prix ETP − 678 €)**, où 678 € est le coût variable d'un agent
placé, imprévus compris (§2.a, entrée de bande).

| Palier (`PRICING.md §3`) | Prix ETP | Contribution | **1 métier actif** (fixe 755 €) | **2 métiers** (fixe 1 399 €) |
|---|---|---|---|---|
| Helpdesk 1-4 ETP | 2 000 € | 1 322 € | **1 ETP** | 2 ETP |
| Helpdesk 5-8 ETP | 1 750 € | 1 072 € | **1 ETP** | 2 ETP |
| Support 1-4 ETP | 1 700 € | 1 022 € | **1 ETP** | 2 ETP |
| Helpdesk 9+ ETP | 1 550 € | 872 € | **1 ETP** | 2 ETP |
| Support 5-8 ETP | 1 500 € | 822 € | **1 ETP** | 2 ETP |
| Support 9+ ETP | 1 350 € | 672 € | **2 ETP** | 3 ETP |

**Point mort réel : 1 ETP placé sur tous les paliers sauf Support 9+** (1 métier actif),
soit **~1 350 à 2 000 € de CA mensuel** ; 2 à 3 ETP si les deux métiers tournent. Le socle
fixe est passé de ~3 830 € (v2, modèle freelance) à 2 114 € (v3), puis à 920 € à la fin du
poste commercial, puis à **755 €** avec la bande salariale du 2026-09-02.

> ⚠️ **Ce point mort ne tient pas compte du bloc infrastructure** (loyer, double FAI, groupe
> électrogène — §8), non chiffré à ce jour. Il est du **fixe pur** : chaque tranche de
> 1 000 €/mois d'infra ajoute ~1 ETP au point mort sur les paliers hauts et ~1,5 ETP sur le
> bas de grille. **C'est le chiffrage le plus urgent du document** — sans lui, le point mort
> affiché ici est structurellement optimiste dès l'ouverture d'un site.

**Trois lectures commerciales immédiates :**

1. **Une seule position au palier standard passe le point mort**, quel que soit le métier
   (2 positions seulement sur le palier Support 9+). C'est le message à tenir en
   prospection MB : on n'a plus besoin d'un donneur d'ordre à 3-4 positions pour être à
   l'équilibre, ce qui **ouvre les MSP régionaux de 11-50 personnes** (contrats de 1-2 ETP)
   comme cibles rentables à part entière, et non plus comme lots de consolation.
2. **Corollaire à ne pas oublier :** le point mort baisse parce qu'il n'y a plus personne
   pour vendre. On a échangé du coût fixe contre de la capacité commerciale — le risque a
   changé de nature, il n'a pas disparu (§7).
3. **La règle des 9 positions change de justification.** Elle reposait sur le point mort :
   au coût salarié de la v3 (fixe 2 114 €), 5 positions à 1 350 € ne dégageaient que
   **+421 €/mois**. Ce n'est plus vrai — à la bande du 2026-09-02, les mêmes 5 positions
   dégagent **+2 605 €/mois**, et 9 positions **+5 293 €/mois**. **Le seuil de 9 reste, mais
   il ne tient plus par le point mort : il tient par la logique de volume ferme**
   (`PRICING.md §3`) — un prix de volume s'achète avec du volume engagé, sinon Salverys
   porte le risque de sous-consommation du partenaire et le coût de sortie du banc (§7.1).
   ⚠️ Ne plus utiliser l'argument « 5 positions à 1 350 € sortent sous le point mort » : il
   est périmé. Comparaison des bases de coûts : `AUDIT-FINANCE-PREVISIONNEL.md §A`.

---

## 5. Trajectoire 12 mois — 3 scénarios (MB-first)

> ⚠️ **À relire avec le correctif du 2026-08-28.** Ces trois scénarios ont été construits
> avec **une commerciale à temps plein**. Depuis le 2026-08-27, la prospection repose sur le
> fondateur seul, qui porte aussi le juridique, le recrutement, l'infra et la delivery.
> **Les rythmes de placement ci-dessous sont donc optimistes** — le scénario médian
> (+1 ETP/mois dès M4) suppose une cadence commerciale qui n'existe plus.
> Les **charges** et le **point mort**, eux, sont désormais plus favorables (§2.b, §4) :
> le creux de trésorerie se creuse moins vite. À recalculer quand deux mois d'activité
> réelle en solo auront donné un vrai taux de transformation.

**Hypothèses communes** : prospection dès M1 (séquences prêtes) · **délai signature →
1ʳᵉ facture intégré** : recrutement 2-4 sem. + formation 2-3 sem. ⇒ l'agent est **payé à
partir de M+1** et **facturé à partir de M+2** · encaissement à 30 j · dépôt d'activation
MB encaissé à la signature (900 €/position, imputé 300 €/position sur 3 factures,
`PRICING.md §3.a`) · offre de lancement −50 % le 1ᵉʳ mois **en direct** uniquement ·
1 référent d'exploitation par métier actif, +1 au-delà de 8 agents.

| | Prudent | Médian | Ambitieux |
|---|---|---|---|
| Placements ETP MB | +1/trimestre dès M4 | +1/mois dès M4 | +2/mois dès M3 |
| Prix ETP MB retenu | 1 700 € (palier 1-4) | 1 600 € (mix 1-4 / 5-8) | 1 500 € (palier 5-8) |
| Direct (médical) | 0 la 1ʳᵉ année | +1 client/mois dès M6 | +2/mois dès M5 |
| **CA mensuel M12** | **5 100 €** | **13 900 €** | **30 500 €** |
| **Charges mensuelles M12** — *bande 2026-09-02* | **~3 970 €** | **~9 370 €** | **~18 150 €** |
| *(charges M12 à l'ancien brut de 3 250 000 Ar)* | *4 640 €* | *11 350 €* | *22 270 €* |
| **Point mort (CA ≥ charges)** | **M12** | **M10** | **M8** |
| **Creux de trésorerie** | −18,0 k€ (M15) | −23,0 k€ (M11) | −22,5 k€ (M10) |
| Effectif M12 | 3 agents + 1 référent + 1 | 10 agents + 2 référents + 1 | 22 agents + 3 référents + 1 |

> 🔵 **Lecture des lignes « point mort » et « creux » après le 2026-09-02.** Seule la ligne
> de charges a été recalculée ; les mois de point mort et les creux de trésorerie sont
> laissés à leur valeur d'origine et sont donc **conservateurs** — ils supposent 150 €/tête/
> mois de plus qu'aujourd'hui. Ordre de grandeur du gain, à confirmer dans
> `tresorerie-salverys.html` : ~150 € × têtes-mois cumulées jusqu'au creux, soit ~5,5 k€
> (prudent) à ~8 k€ (médian) ⇒ **creux ramené vers −12 à −15 k€ et capital recommandé vers
> ~20 k€** au lieu de 30 k€. **Ce gain est à réserver au bloc infrastructure (§8)**, pas à
> consommer comme un matelas supplémentaire.

**Les trois scénarios passent le point mort dans l'année.** C'est le changement majeur vs
la v2, où le scénario prudent ne l'atteignait pas avant M+18 : un socle fixe divisé par
~1,8 et une direction non rémunérée déplacent le point mort de 6 mois.

⚠️ **La contrainte n'est plus la trésorerie, c'est le recrutement.** Le scénario ambitieux
exige d'embaucher et former **~2 agents/mois pendant 10 mois** (22 agents à M12), avec un
seul référent pour 8 agents. `PRICING.md §3.e` fixe le seuil pratique à **un remplacement
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

  > 🔵 **Valeurs calculées au brut de 3 250 000 Ar — conservatrices depuis le 2026-09-02.**
  > Ordre de grandeur après la bande salariale : creux vers **−12 à −16 k€**, capital
  > recommandé vers **~20 k€**. ⚠️ Ces valeurs ne comprennent **pas** le bloc infrastructure
  > (§8), qui consommera précisément ce gain. Recalcul propre à faire dans
  > `tresorerie-salverys.html` une fois le loyer, le double FAI et le groupe électrogène
  > chiffrés.

  > **Le besoin de financement est quasi indépendant du scénario : ~25-30 k€.** Croître
  > plus vite fait rentrer le CA plus tôt, mais fait aussi payer plus de salaires avant
  > facturation — les deux effets se compensent presque exactement. **Recommandation ferme :
  > provisionner 30 k€**, ce qui couvre les trois trajectoires. (v2 : 50-60 k€, et
  > insuffisant dans le scénario prudent.)

- **Le creux ne se creuse plus en cas de lenteur commerciale.** En v2, un démarrage lent
  brûlait ~6 900 €/mois d'équipe payée sans contrat. Ici le burn de départ est de
  **~110-155 €/mois** tant qu'aucun contrat n'est signé (§2.b : aucun salarié, donc aucun
  référent embauché — le socle de 755 € ne démarre qu'à la 1ʳᵉ signature) : le coût de
  l'attente est devenu
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
    **≈ +1 800 €** (5 250 € encaissés − 3 × 616 € de salaires chargés − 1 600 € d'onboarding).
    *(≈ +1 550 € au brut de 3 250 000 Ar.)*
    **Conservée en direct** (`PRICING.md §7`).
  - ✅ **Tarif conditionné à un volume ferme facturable** sur **tous** les paliers
    (`PRICING.md §3`) : supprime le risque de banc payé, désormais bien plus coûteux
    qu'en freelance (§7).
  - Prélèvement SEPA dès le 1er mois ; part variable de Vololona indexée sur les contrats
    encaissés, pas signés.
- Simulation interactive : `tresorerie-salverys.html`.

---

## 7. Risques financiers spécifiques au modèle salarié

> 🔴 **Risque n°0, ajouté le 2026-08-28 — capacité commerciale nulle en propre.**
> Depuis la fin du poste de développement commercial, **la totalité de la prospection repose
> sur le fondateur**, qui porte déjà le juridique, le recrutement, l'infrastructure et la
> future delivery. Ce n'est pas un risque de coût — le burn tombe à ~110-155 €/mois (§2.b) — c'est
> un **risque de calendrier** : chaque semaine sans contact décideur repousse le premier
> contrat, et donc l'embauche du premier référent d'exploitation, et donc la delivery.
> **Ce qui rend ce risque tenable :** avec ~110-155 €/mois de burn, on peut absorber un
> allongement de plusieurs mois sans mettre la structure en danger. **Ce qui le rend
> dangereux :** au premier contrat signé, le fondateur devra basculer sur l'onboarding et la
> delivery — et la prospection s'arrêtera net, créant un trou de pipeline juste après la
> première signature. **Mitigation à décider avant le 1er contrat, pas après** : soit le
> premier référent d'exploitation recruté prend une part de la relation client, soit un commercial
> est ré-embauché sur le variable dès que le CA le finance (le poste coûte 645 € au fixe
> seul, soit moins d'un ETP placé).

1. 🔴 **Rigidité de l'effectif — le risque n°1 du modèle salarié.** En freelance, un agent
   non staffé se désactivait. Un salarié ne se désactive pas : il faut un motif, un
   **préavis** et une **indemnité de licenciement** (droit du travail malgache). Un contrat
   perdu ne coûte plus 616 €/mois pendant qu'on cherche à le remplacer — il coûte cela
   **plus** le coût de sortie. **Mitigation** : n'embaucher qu'**après** signature d'un
   volume ferme facturable (§2.c), utiliser la **période d'essai** comme fenêtre
   d'ajustement, et provisionner les indemnités dès 6 mois d'ancienneté.
2. **Coût de capacité des absences** : 5 semaines de congés + ~3 % de maladie ≈ **13 %**
   d'absence (`PRICING.md §3.e`). Un salarié est payé 12 mois et produit ~10,4 mois. La
   doctrine de continuité fait porter ce remplacement par le **référent d'exploitation**, déjà
   financé et non facturable — donc **pas de surcoût direct**, mais un **plafond** :
   à 13 % d'absence, 8 agents génèrent ~1 ETP d'absence à couvrir, soit tout le temps
   disponible d'un référent. **Au-delà de ~8 agents par métier, prévoir un agent volant
   (+616 €/mois)** plutôt que de dégrader la supervision.
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
   une dépréciation, elle, l'allège. Marges de couverture réelles : **54 % (palier 9+
   Support)** à **78 % (direct)** — et non 65-80 % comme l'annonçait la v2. Le palier
   Support 9+ est celui qui absorbe le moins.
7. 🔴 **Absence d'indexation — risque aggravé le 2026-09-02.** L'entrée de bande à
   2 500 000 Ar est figée alors que l'inflation locale court, et l'écart au marché est
   passé de ~4,5× à **~3,5×** : le **seul** appui de l'hypothèse zéro turnover (§1) est
   désormais plus étroit, avec une concurrence (Intelcia & co., 600-800 k Ar) qui, elle,
   revalorise. Deux garde-fous à tenir : (a) **revalorisation annuelle de 5-8 %** de la
   masse salariale au budget ; (b) **utiliser la bande** — la progression vers
   3 250 000 Ar coûte 50 €/mois par tranche de 250 000 Ar et **aucune charge
   supplémentaire** (§1.a), c'est le levier de rétention le moins cher dont dispose la
   structure. Si le bloc infrastructure (§8) absorbe tout le gain **et** qu'aucune
   progression n'est servie, l'hypothèse zéro turnover ne tient plus au-delà de la
   première année.
8. **Avoirs qualité** (engagement décroché/SLA 20 %, max 1/12) : au pire ~1,7 % du CA
   annuel d'un contrat — négligeable.

---

## 8. Postes à chiffrer (non encore budgétés)

Reste du périmètre non couvert par la ligne « divers/imprévus » et à intégrer dès que les
montants sont connus :

| Poste | Nature | Statut |
|---|---|---|
| Impôt sur les sociétés (entité malgache) | % du résultat | à chiffrer |
| Prestation de paie / expert-comptable | récurrent | à chiffrer |
| Frais de change et transfert EUR→MGA (Wise Business) | ~0,5-1 % de la masse transférée | ~10-30 €/mois aujourd'hui |
| Assurance RC professionnelle | récurrent — **souvent exigée en appel d'offres MB** | à chiffrer |
| Conseil social local (cadrage des contrats de travail) | ~500 € one-shot | §7.4 |
| Onboarding d'un deal MB | **~1 600 €** par deal (`AUDIT-ESPACE-CLIENT.md §9.2`) | variable, couvert par le dépôt §3.a |
| Remise « clients fondateurs » | ~1 660 € pour 5 logos (`PRICING.md §7`) | variable |
| Hébergement HDS en **direct** | 100-500 €/mois (`PRICING.md §10`) | déclenché au 1ᵉʳ client médical direct |
| Provision indemnités de licenciement | à partir de 6 mois d'ancienneté | §7.1 |
| **Loyer du plateau** | récurrent — déclenché à l'ouverture du site | 🔴 **à chiffrer** |
| **Double FAI** (lien principal + secours, opérateurs distincts) | récurrent | 🔴 **à chiffrer** |
| **Groupe électrogène** (achat/location + carburant + entretien) | capex + récurrent | 🔴 **à chiffrer** |
| Onduleurs, mobilier, postes de travail | capex | 🔴 **à chiffrer** |

### 8.a Le bloc infrastructure de site — ce que finance la bande salariale

C'est le motif explicite de la décision du 2026-09-02 (§1). Les quatre lignes ci-dessus
forment un **bloc de charges fixes** qui n'existe nulle part ailleurs dans ce document et
qui apparaîtra avec l'équipe.

**L'équation à tenir** : l'économie de la bande salariale est de **150 €/tête/mois**.

| Effectif | Économie mensuelle | Ce qu'elle doit couvrir |
|---|---|---|
| 1 référent seul | 150 € | rien encore — pas de site |
| 4 agents + 1 référent | **750 €** | loyer d'un petit plateau + FAI |
| 8 agents + 1 référent | **1 350 €** | loyer + double FAI + carburant du groupe |
| 16 agents + 2 référents | **2 700 €** | le bloc complet, amortissement du groupe inclus |

**Trois choses à ne pas perdre de vue :**

1. **L'économie arrive avec les têtes, l'infrastructure aussi** — mais pas au même rythme.
   Le loyer et le groupe électrogène sont **payés en entier dès le premier jour**, alors que
   l'économie est proportionnelle à l'effectif. **Le bloc infra est donc en déficit tant que
   l'équipe est petite** : à 4 agents, 750 € d'économie face à un plateau qui en coûte
   probablement plus. Conséquence directe : **n'ouvrir le site qu'avec un effectif qui le
   porte**, ou travailler à domicile jusque-là.
2. **Tant que l'équipe travaille à domicile, l'économie n'a pas d'emploi** — et elle a été
   prise sur l'agent qui, lui, continue de payer son énergie et sa connexion (§2.c). Cette
   période doit être **courte et assumée**, pas subie.
3. **Chiffrer avant d'embaucher.** Ces quatre lignes conditionnent le point mort (§4) et le
   besoin de financement (§6). Tant qu'elles sont vides, les deux sont optimistes.

---

*v2 (100 % freelances, 3 250 000 Ar de fee, 8 agents + 2 managers, direction rémunérée,
hub de repli, kits d'autonomie) remplacée le 2026-08-14 par décision direction : équipe
100 % salariée, brut 3 250 000 Ar + charges patronales, fondateur unique non rémunéré,
effectif dimensionné sur les contrats. Sources coûts locaux : lagazette-madagascar.com,
lexpress.mg, newsmada.com — cf. `EVALUATION-STRATEGIQUE-2026-06.md`. Taux et plafonds
CNaPS/OSTIE à confirmer avec un conseil social local (§1.a).*
