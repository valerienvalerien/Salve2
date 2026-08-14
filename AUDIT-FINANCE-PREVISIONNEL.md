# AUDIT — `01-Strategie-Offre/FINANCE-PREVISIONNEL.md` (v2)

> Audit de cohérence interne, de reproductibilité des chiffres et d'alignement avec
> `PRICING.md`, `tresorerie-salverys.html`, `tools/deal-build.mjs`,
> `03-Cibles-Prospects/IDEAL-CUSTOMER-PROFILE.md` et `EVALUATION-STRATEGIQUE-2026-06.md`.
>
> Date : 2026-08-14 · Statut : **constats — aucun arbitrage tranché**. Le document audité
> n'a pas été modifié.

---

## 0. Verdict en une page

| # | Bloc | Gravité | Constat central |
|---|---|---|---|
| **A** | Point mort calculé sur une base fausse | 🔴 **critique** | §2 range les fees agents (5 200 €) dans les « charges **fixes** » alors qu'ils sont le poste le plus variable du modèle. Le point mort qui en découle (« ~7 ETP ») est **le point mort du palier tarifaire le plus bas**, pas celui de l'entreprise : il vaut **4 à 7 ETP selon le prix**. |
| **B** | Capital dimensionné sur le scénario médian | 🔴 **critique** | 50-60 k€ recommandés = creux **médian** + 30 %. Or le scénario **prudent** — celui que le document lui-même flague ⚠️ — creuse à **~79 k€ et n'a pas encore touché son plancher à M18**. Le capital est calibré sur le seul scénario où il n'est pas critique. |
| **C** | Les 3 scénarios de §5 ne sont pas reproductibles | 🔴 **critique** | Recalculés avec les hypothèses de la même colonne : CA M12 médian **17 300 €** (annoncé 13 000), ambitieux **~39 000 €** avec **24 agents** (annoncé 24 000 € / 16-18). Le prudent affiche un effectif de 8 qui contredit sa propre règle anti-banc. |
| **D** | Délai signature → 1re facture absent de la trajectoire | 🟠 majeur | Le document chiffre 5-7 semaines (§5, repris par `PRICING.md §3.c`) mais fait facturer chaque ETP le mois de son placement. Décalage systématique de ~1,5 mois sur tout le CA. |
| **E** | Ligne kits d'autonomie vide depuis le 2026-08-11 | 🟠 majeur | §4 et §6 sont publiés **comme si le capex valait 0**. Et « 10 kits » contredit le démarrage à 4 agents + 2 managers. |
| **F** | Postes de coût absents du modèle | 🟠 majeur | Fiscalité, change EUR→MGA, comptabilité, RC pro, onboarding 1 600 €/deal MB, remise « clients fondateurs », hébergement HDS en direct, conseil juridique. Le « divers 10 % » (950 €) ne les couvre pas. |
| **G** | Aucune indexation des fees | 🟠 majeur | 650 € figés 24 mois pendant que l'inflation locale court. Le « 4,5× le marché » est **le seul pilier** de l'hypothèse zéro turnover, et il s'érode sans ligne budgétaire. |
| **H** | §7 risque 4 se contredit avec §3 | 🟠 majeur | « la marge à 65-80 % absorbe les variations de change » — §3 donne **48-59 %** sur les offres MB, qui sont la priorité GTM. |
| **I** | Le simulateur cité comme aligné ne l'est pas | 🟠 majeur | `tresorerie-salverys.html` tourne à **450 €/freelance** (v1), sans direction ni hub, avec un capital plafonné à **10 k€**. §6 le présente comme « aligné sur ce modèle v2 ». |
| **J** | Marges §3 = marges à saturation | 🟡 mineur | Capacité agent incohérente (4 forfaits vs 1 800 appels vs 6 cabinets dans le simulateur) et amorçage ignoré (le 1er cabinet mobilise 2 freelances). |
| **K** | Tarif télésec MB périmé | 🟡 mineur | §3 utilise le plat « 0,90-1,40 € » que `PRICING.md §1.b` déclare **remplacé** par une grille par créneau. |
| **L** | Démonstration « fin de la remise MB » asymétrique | 🟡 mineur | L'onboarding 1 600 € est compté dans le cas « avant » et oublié dans le cas « après » (+3 150 € affiché vs **+1 550 €** réel). |
| **M** | Divergences de gouvernance documentaire | 🟡 mineur | `PRICING.md` déclare ce fichier « plus une source » tout en le citant **8 fois** ; l'ICP annonce un point mort de 5 ETP contre 7 ici ; `EVALUATION-STRATEGIQUE §3.3` tourne encore sur le coût v1 (400-450 €). |

---

## A. 🔴 Le point mort est calculé sur une base fausse

### Le problème

§2 titre son total **« Total charges fixes ≈ 10 050 € »**. Ce total contient
**5 200 € de fees agents** — le poste que tout le reste du document décrit comme
*variable* : « démarrer avec un noyau réduit » (§3), « n'activer les suivants qu'au
contrat signé » (§5), « le modèle 100 % freelance est élastique » (`PRICING.md §3`).

§4 divise ensuite ce total par un prix ETP : **10 100 / 1 500 ≈ 7 ETP**. C'est une division
qui n'a pas de sens économique : elle suppose qu'on paie 8 agents **quel que soit** le
nombre d'ETP placés, ce qui est exactement le scénario que le document dit vouloir éviter.

### Le calcul juste

Ventilation à partir des mêmes chiffres de §2 :

| Nature | Postes | Montant |
|---|---|---|
| **Variable par agent** | fee 650 € + connectivité 15 € + VoIP 30 € (+ ~10 % divers) | **~765 €/agent** |
| **Fixe de structure** | 2 managers 1 300 € + direction 1 400 € + hub 500 € + SaaS hors VoIP ~250 € + connectivité managers 30 € (+ ~10 % divers) | **~3 830 €/mois** |

Point mort = 3 830 / (prix ETP − 765), soit, palier par palier de la rate card
(`PRICING.md §3`) :

| Palier | Prix ETP | Contribution | **ETP au point mort** |
|---|---|---|---|
| Helpdesk 1 ETP | 2 000 € | 1 235 € | **3,1 → 4** |
| Helpdesk 3 ETP | 1 750 € | 985 € | **3,9 → 4** |
| Support 1 ETP | 1 700 € | 935 € | **4,1 → 5** |
| Helpdesk 5+ | 1 550 € | 785 € | **4,9 → 5** |
| Support 3 ETP | 1 500 € | 735 € | **5,2 → 6** |
| **Support 5+** | **1 350 €** | **585 €** | **6,6 → 7** |

**Le « ~7 ETP » de §4 n'est pas le point mort de l'entreprise : c'est celui du palier
5+ Support à 1 350 €**, le prix le plus bas de toute la grille. Selon le mix réel, le
point mort est entre **4 et 7 ETP**, soit un CA de **6 800 à 9 500 €** — et non 10 100 €.

### Conséquence directe sur `PRICING.md`

`PRICING.md §3` justifie le palier 5+ ainsi : *« Aligné sur le point mort
(`FINANCE §4` : ~7 ETP placés) : le palier 5+ est conçu pour qu'un seul donneur d'ordre
type Metaline/Thelem puisse l'atteindre. »*

**L'argument est faux côté Support et vrai de justesse côté Helpdesk :**

| Deal | CA mensuel | Coût total | Résultat |
|---|---|---|---|
| 5 positions Support 5+ @ 1 350 € | 6 750 € | 7 655 € | **−905 €/mois** |
| 5 positions Helpdesk 5+ @ 1 550 € | 7 750 € | 7 655 € | +95 €/mois |

Un contrat de 5 positions Support N1 au palier 5+ **ne fait pas atteindre le point mort** :
il faut **7 positions** à ce prix. C'est un chiffre à corriger avant qu'il ne serve
d'argument en négociation.

### Ce qui explique la divergence 5 vs 7 ETP

`03-Cibles-Prospects/IDEAL-CUSTOMER-PROFILE.md:27` annonce « ~5 ETP », `FINANCE §4` et
`PRICING.md §3` annoncent 7. `AUDIT-ESPACE-CLIENT.md §9.1` a tranché « 7 » le 2026-08-03.
Les deux chiffres répondent en réalité à **deux questions différentes** : 7 = « à effectif
cible de 8 agents payés, combien faut-il en placer ? » · 5 = « en dimensionnant l'équipe
sur les contrats, combien faut-il d'ETP ? ». La deuxième question est celle que pose la
doctrine retenue en §5. L'arbitrage a figé un chiffre sans trancher le cadre.

**Recommandation** : réécrire §2 en deux blocs (fixe de structure / variable par agent),
remplacer le point mort unique de §4 par le tableau par palier ci-dessus, et propager
dans `PRICING.md §3` et l'ICP.

---

## B. 🔴 Le capital de départ est dimensionné sur le mauvais scénario

§6 : *« Creux maximal (médian, démarrage à 4 agents) : ~35-45 k€ vers M+7-8. Capital de
départ recommandé : 50-60 k€ (creux + coussin 30 %). »*

Modélisation des hypothèses de §5 (structure fixe 3 830 €, variable 765 €/agent,
encaissement à 30 j, dépôt d'activation §3.a inclus, remise −50 % appliquée au médical
direct) :

| Scénario | Creux max | Mois du creux | Trésorerie à M18 |
|---|---|---|---|
| **Médian** | **−40,2 k€** | M9 | −5 k€, en remontée depuis M10 |
| **Prudent** | **−78,9 k€** | **pas encore atteint à M18** | −80 k€, toujours en baisse |

Deux constats :

1. Le creux médian (**40 k€ en M9**) valide l'ordre de grandeur de §6, mais **décale le
   creux de 1 à 2 mois** (M9, pas M+7-8) — le point bas arrive après le début des
   encaissements, pas avant.
2. **Le scénario prudent double la mise.** Le document le signale déjà (« ne passe pas le
   point mort la 1re année ⚠️ ») mais n'en tire aucune conséquence sur le capital. Or
   c'est précisément le scénario où le capital est la variable de survie. À
   +1 ETP/trimestre, le point mort tombe vers **M+18**, pas M+14-16 : 5 ETP sont
   nécessaires à 1 500 € (§A), atteints au 5ᵉ trimestre.

**Recommandation** : afficher le besoin de financement **par scénario** (médian ~55 k€ /
prudent ~90-100 k€) et rendre explicite l'arbitrage : soit on lève pour le prudent, soit
on définit un **point de coupe** — un seuil de CA à une date donnée en dessous duquel on
réduit la structure. Aujourd'hui le document n'a ni l'un ni l'autre.

---

## C. 🔴 Les trois scénarios de §5 ne sont pas reproductibles

Recalcul à partir des hypothèses de chaque colonne (prix ETP MB 1 500 €, forfait médical
Confort 590 €, 4 forfaits/agent comme en §3) :

| | Prudent | Médian | Ambitieux |
|---|---|---|---|
| ETP MB placés à M12 (règle de la colonne) | 3 | 9 | **20** |
| Clients médicaux directs à M12 | 0 | 7 | 16 |
| **CA M12 recalculé** | **4 500 €** | **17 335 €** | **~39 400 €** |
| CA M12 **annoncé** | 4 800 € ✅ | **13 000 €** ❌ | **24 000 €** ❌ |
| Effectif nécessaire | 4 + 2 | 11 + 2 ✅ | **24 + 3** |
| Effectif **annoncé** | **8** ❌ | 11-12 ✅ | **16-18** ❌ |

- **Prudent** : le CA tient, mais **l'effectif de 8 est incompatible avec la colonne
  elle-même**. 3 ETP placés + 2 managers = 5 personnes utiles ; les 3 agents restants sont
  au banc à ~765 €/mois, soit **~27 k€ brûlés sur l'année** — exactement ce que la
  « protection (1) » du paragraphe suivant prétend interdire. C'est aussi ce qui fait
  passer le creux prudent de ~79 k€ à **plus de 105 k€** si la ligne est prise au mot.
- **Médian** : la colonne est **sous-estimée de ~33 %** sur le CA M12. Ce n'est pas
  prudent, c'est illisible — on ne sait pas quelle hypothèse produit 13 000 €.
- **Ambitieux** : la colonne est **arithmétiquement impossible**. +2 ETP/mois dès M3
  donne 20 ETP à M12, qui exigent 20 agents ; l'effectif annoncé en plafonne 16-18. Soit
  le rythme est faux, soit l'effectif l'est.

**Recommandation** : les scénarios doivent être générés, pas écrits à la main. Le
simulateur existe (`tresorerie-salverys.html`) — après remise à niveau (§I), c'est lui
qui doit produire ce tableau, avec une ligne **charges** à côté de la ligne CA (elle
manque aujourd'hui, ce qui rend tout point mort invérifiable à la lecture).

---

## D. 🟠 Le délai signature → première facture n'est pas dans la trajectoire

§5 pose l'hypothèse : *« recrutement freelance ≈ 2-4 semaines, formation 2-3 semaines »*,
que `PRICING.md §3` traduit en **« ~5 à 7 semaines entre la signature et la première
facture »** et `PRICING.md §3.c` en promesse commerciale **« opérationnel en 3 à 4
semaines »** (déjà un écart entre les deux, à trancher côté `PRICING.md`).

Mais la trajectoire fait facturer chaque ETP **le mois même de son placement**. Avec le
décalage réel, tout le CA glisse de ~1,5 mois et le creux se creuse d'autant. Sur le
médian, cela repousse le point bas vers M10-M11 et ajoute ~5 k€ au creux.

---

## E. 🟠 La ligne kits d'autonomie est vide — deux chiffres publiés reposent dessus

L'encadré de §2 est explicite et honnête : le capex sort **avant la première facture
client**, au moment le plus tendu. Mais tant que la ligne est vide :

- le **point mort de §4** est publié comme si l'amortissement valait 0 ;
- le **capital recommandé de §6** ne contient pas le capex ;
- `RETROPLANNING-LANCEMENT.md:110` attend ce devis pour alimenter la ligne — la boucle
  n'est pas fermée.

Second point : l'encadré chiffre **10 kits**, alors que §5 fait démarrer à **4 agents +
2 managers**. À l'entrée il en faut **6**, les 4 autres arrivant au contrat. Écrit ainsi,
le capex de lancement est surévalué d'environ 40 % — dans le sens prudent, mais c'est une
incohérence de plus avec la doctrine « montée au contrat ».

---

## F. 🟠 Postes de coût absents du modèle

Le modèle est un **compte de charges d'exploitation partiel**, pas un prévisionnel : il
n'a **ni ligne de résultat, ni ligne fiscale, ni ligne bancaire**. Manquent :

| Poste | Ordre de grandeur | Source |
|---|---|---|
| Impôt sur les sociétés (entité malgache) | % du résultat | absent du corpus |
| Frais de change / transfert EUR→MGA (Wise Business) | ~0,5-1 % de la masse transférée, soit **40-70 €/mois** | `tresorerie-salverys.html` (bloc outils) |
| Comptabilité / expert-comptable | non chiffré | `MENTIONS-LEGALES.md` (VJUS) |
| Assurance RC professionnelle | non chiffré — **souvent exigée en appel d'offres MB**, alors même que §3.b de `PRICING.md` promet un appui avant-vente sur ce type de pièces | absent |
| Conseil juridique local (requalification freelance) | **~500 € one-shot**, cité en §7 risque 3 | **cité, jamais budgété en §2** |
| Onboarding d'un deal MB | **~1 600 €** par deal (socle 400 € + 400 €/position) | `AUDIT-ESPACE-CLIENT.md §9.2` |
| Remise « clients fondateurs » | **~1 660 €** pour 5 logos | `PRICING.md §7` |
| Hébergement HDS en **direct** | **100-500 €/mois**, « à absorber dans le forfait » | `PRICING.md §10` |

La ligne « Divers / imprévus ~10 % » (950 €) est censée absorber tout cela. Elle ne le
peut pas : les trois derniers postes sont **proportionnels au rythme commercial**, donc
ils explosent exactement dans les scénarios où le CA monte vite.

*(Note de calcul : 10 % de 9 100 € = 910 €, pas 950 € — soit 10,4 %. Et §2 totalise
10 050 € quand §4 repart de 10 100 €. Sans effet matériel, mais un lecteur qui vérifie
s'arrête là.)*

---

## G. 🟠 Aucune indexation des fees, alors que tout le modèle repose dessus

L'hypothèse **zéro turnover** — qui porte à elle seule l'absence de coût de recrutement,
de coût de remplacement et de perte de productivité dans tout le modèle — a un seul
appui : **3 250 000 Ar = ~4,5× le marché local**.

Or le fee est figé en ariary sur toute la trajectoire (12 à 24 mois), sans ligne
d'inflation ni clause d'indexation. Avec une inflation locale à deux chiffres, le
multiple réel s'érode chaque année, et l'argument de rétention avec lui. Le document ne
mentionne l'inflation qu'une fois — en §7 risque 4 — pour la **classer sans suite**.

**Recommandation** : soit une ligne d'indexation annuelle explicite dans les charges
(≈ +5-8 %/an sur la masse freelance), soit un engagement écrit de revalorisation dans le
contrat de prestation, à budgéter. Sinon, l'hypothèse zéro turnover n'est vraie que la
première année.

---

## H. 🟠 §7 risque 4 contredit §3

> « Change Ar/€ et inflation locale : […] la marge à **65-80 %** absorbe largement les
> variations historiques. »

§3 du même document donne **48-59 %** sur le Support N1 MB et **55-65 %** sur le Helpdesk
MB — c'est-à-dire sur la **priorité GTM n°1**. La fourchette 65-80 % est celle du direct
et du médical, explicitement rangés en 2ᵉ temps par `CLAUDE.md`. Le risque de change est
donc évalué contre le mix qu'on ne vend pas en premier.

Accessoirement, le sens du risque n'est pas posé : une **appréciation** de l'ariary
renchérit les fees en euros ; une dépréciation les allège. C'est le premier cas qui
mérite la ligne, et il n'est pas nommé.

---

## I. 🟠 Le simulateur cité en §6 n'est pas aligné sur la v2

§6 : *« Simulation interactive : `tresorerie-salverys.html` (paramètres par défaut
alignés sur ce modèle v2). »* Vérification dans le fichier (v5 du 2026-06-18) :

| Paramètre | Simulateur | `FINANCE §2` (v2) |
|---|---|---|
| Coût freelance | **450 €** (hint : « ~1,8-2 M Ar ») | **650 €** (3,25 M Ar) |
| Coût manager | **750 €** | 650 € |
| Rémunération direction | **absente** | 1 400 €/mois |
| Hub de repli + énergie | **absent** | 500 €/mois |
| Indemnité de connexion | **absente** | 150 €/mois |
| Divers / imprévus | **absent** | 950 €/mois |
| Capital initial | curseur **500 € → 10 000 €** | **50-60 k€ recommandés** |
| Ratio médical | 6 cabinets/freelance | 4 forfaits/agent (§3) |

Le coût agent y est **inférieur de 31 %** au modèle acté, et ~3 000 €/mois de charges de
structure sont absents. Le simulateur produit donc mécaniquement un point mort trop tôt
et un creux trop faible — et son curseur de capital **ne peut même pas représenter** le
capital que §6 recommande. En l'état, c'est un outil de la v1 présenté comme la
simulation de référence de la v2.

---

## J. 🟡 Les marges de §3 sont des marges à saturation

Trois hypothèses de capacité coexistent dans le corpus sans être réconciliées :

| Source | Capacité d'un agent |
|---|---|
| `FINANCE §3` — télésec MB | 1 800 appels/mois |
| `FINANCE §3` — médical direct | 4 forfaits Confort = **~2 000 appels/mois** |
| `tresorerie-salverys.html` | **6 cabinets**/freelance |

Et surtout, aucune n'intègre l'amorçage : le simulateur impose lui-même un **plancher
Erlang de 2 freelances dès le 1er cabinet**. Le premier client médical direct coûte donc
**~1 530 €** pour **590 €** de CA — marge brute **négative**, pas 70 %. Les marges de §3
sont vraies **une fois l'agent rempli** ; elles ne décrivent aucun des 6 à 9 premiers mois
de la trajectoire. Le document ne le dit nulle part.

Cela vaut aussi pour l'affirmation « chaque agent payé non staffé brûle ~700 €/mois » :
avec la ventilation de §A, c'est **~765 €**.

---

## K. 🟡 Le tarif télésec MB de §3 est périmé

§3 chiffre le télésec MB sur un tarif **à plat de 0,90-1,40 €/appel**. `PRICING.md §1.b`
indique explicitement : *« Remplace l'ancienne référence à plat “0,90-1,40 €”
(`FINANCE-PREVISIONNEL.md §3`) »* au profit d'une grille **par créneau** (jour
0,90-1,10 € · soir/samedi 1,20-1,40 € · pics +15-20 %).

Conséquence sur le calcul : 1 800 appels **de jour** ne rapportent pas 1 620-2 520 € mais
**1 620-1 980 €**, et la marge haute annoncée (72 %) n'est atteignable qu'avec une part
significative de créneaux soir/samedi. La fourchette de marge « 57-72 % » doit être
recalculée sur un mix de créneaux explicite.

---

## L. 🟡 La démonstration « fin de la remise MB » compte l'onboarding d'un seul côté

§6 : *« ce mois passe à l'équilibre positif (3 × 1 750 € encaissés contre 3 × 700 € de
fees) »* → +3 150 €.

Le calcul « avant » (repris de `AUDIT-ESPACE-CLIENT.md §9.2`) inclut pourtant les
**~1 600 € d'onboarding**. En les gardant des deux côtés :

| | Avant (−50 %) | Après (plein tarif) |
|---|---|---|
| Recette du mois | 2 625 € | 5 250 € |
| Fees agents | −2 100 € | −2 100 € |
| Onboarding | −1 600 € | **−1 600 €** |
| **Résultat** | **−1 075 €** | **+1 550 €** |

Le gain reste franc (+2 625 €), et la décision n'est pas remise en cause — mais le
chiffre affiché (+3 150 €) surévalue le résultat du mois d'entrée de **~100 %**.

---

## M. 🟡 Divergences de gouvernance documentaire

1. **`PRICING.md` (révision 2026-08-14)** déclare : *« ⚠️ `FINANCE-PREVISIONNEL.md`
   n'est plus une source : seul le tableau d'effectif est repris, en §3.e. »* Le même
   fichier le cite ensuite **8 fois** comme source active : plancher 840 € (§3), point
   mort ~7 ETP (§3), marge 48 % (§3), creux 35-45 k€ (§3), effectifs M12 (§3), délai
   5-7 semaines (§3 et §3.c), levier acompte (§3.a). La déclaration de dépriorisation
   n'est pas appliquée — et elle est probablement à annuler plutôt qu'à appliquer, vu le
   nombre de chiffres commerciaux qui en dépendent (dont le plancher codé en dur dans
   `tools/deal-build.mjs`).
2. **`03-Cibles-Prospects/IDEAL-CUSTOMER-PROFILE.md:27`** : point mort « ~5 ETP » contre
   7 ici — voir §A, les deux chiffres sont défendables mais pas dans le même cadre.
3. **`EVALUATION-STRATEGIQUE-2026-06.md §3.3`** : coût complet d'un ETP « **~400-450 €** »
   et marges « 67-80 % / 80 %+ », en citant ce fichier comme source. Ce sont les valeurs
   du **modèle salarié v1, abandonné le 2026-06-10**. C'est le même type d'erreur que le
   plancher à 540 € corrigé le 2026-07-29 : un chiffre v1 encore en circulation qui rend
   toutes les offres « hors de danger de marge » et désamorce précisément l'alerte de §3
   sur les paliers MB à 48 %.

---

## N. Ce qui est solide

Pour être juste, l'essentiel de l'arithmétique de détail est correct et vérifié :

- toutes les marges brutes de §3 sont exactes au prix et coût donnés ;
- le total de §2 est correct (au 10 % près, cf. §F) ;
- la mécanique du dépôt d'activation (900 / 300 × 3 / plafond 2 700) est cohérente avec
  `PRICING.md §3.a` et `tools/deal-build.mjs` ;
- le chiffrage de la remise MB supprimée (2 625 € / −1 075 €) est exact ;
- le plafond d'avoirs qualité (20 % × 1/12 ≈ 1,7 % du CA annuel) est exact ;
- le coût marginal d'un agent (~700 €) est juste **hors quote-part de divers** ;
- l'ordre de grandeur du creux médian (35-45 k€) est confirmé par recalcul (40,2 k€) ;
- l'encadré de vigilance sur le statut freelance (requalification, DPA, disponibilité)
  identifie les bons risques.

L'audit ne porte pas sur la solidité des décisions — il porte sur le fait que **plusieurs
chiffres publiés ne se déduisent pas des hypothèses affichées**, et que trois d'entre eux
(point mort, capital, trajectoires) sont déjà repris ailleurs dans le corpus.

---

## O. Plan de correction proposé (par ordre d'impact)

| # | Action | Fichiers |
|---|---|---|
| 1 | Réécrire **§2 en fixe / variable** et remplacer le point mort unique de §4 par le tableau par palier tarifaire | `FINANCE §2`, `§4` |
| 2 | Corriger l'argument du palier 5+ (7 positions Support, 5 en Helpdesk) | `PRICING.md §3` |
| 3 | Aligner le point mort dans l'ICP sur le cadre retenu | `IDEAL-CUSTOMER-PROFILE.md` |
| 4 | Publier un **besoin de financement par scénario** + définir un point de coupe | `FINANCE §6` |
| 5 | Régénérer §5 depuis le simulateur, avec ligne charges et décalage de 1,5 mois | `FINANCE §5`, `tresorerie-salverys.html` |
| 6 | Remettre le simulateur aux paramètres v2 (650 €, direction, hub, divers, capital jusqu'à 100 k€) | `tresorerie-salverys.html` |
| 7 | Chiffrer les kits (6 à l'entrée, 4 au contrat) et fermer la boucle du rétroplanning | `FINANCE §2`, `RETROPLANNING-LANCEMENT.md` |
| 8 | Ajouter les postes manquants (fiscalité, change, compta, RC pro, onboarding/deal, HDS direct, juridique) | `FINANCE §2` |
| 9 | Ajouter une ligne d'indexation annuelle des fees | `FINANCE §1/§2` |
| 10 | Corriger §7 risque 4 (marge MB 48-59 %, sens du risque de change) | `FINANCE §7` |
| 11 | Recalculer le télésec MB sur la grille par créneau | `FINANCE §3` |
| 12 | Corriger le résultat du mois d'entrée MB (+1 550 €) | `FINANCE §6` |
| 13 | Purger les valeurs v1 résiduelles (coût 400-450 €, marges 67-80 %) | `EVALUATION-STRATEGIQUE-2026-06.md §3.3` |
| 14 | Trancher : `FINANCE` redevient une source de `PRICING.md`, ou les 8 citations sont remplacées | `PRICING.md` |
