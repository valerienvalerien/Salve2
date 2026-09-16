# AUDIT — `01-Strategie-Offre/FINANCE-PREVISIONNEL.md`

> ⚠️ **Périmé sur les montants depuis le 2026-08-28.** Cet audit a été fait sur la v3, qui
> intégrait une salariée au développement commercial. Le poste a pris fin le 2026-08-27 :
> le socle fixe passe de **2 114 € à ~920 €**, le burn de **~755 € à ~65 €/mois** et le
> point mort de **2-6 ETP à 1-2 ETP**. Les **constats de méthode** de cet audit restent
> valables ; **tous les montants cités ci-dessous sont ceux de la v3** — se référer à
> `FINANCE-PREVISIONNEL.md` (v3.1) pour les chiffres à jour.
>
> Audit de cohérence interne, de reproductibilité des chiffres et d'alignement avec
> `PRICING.md`, `tresorerie-salverys.html`, `tools/deal-build.mjs`,
> `03-Cibles-Prospects/IDEAL-CUSTOMER-PROFILE.md` et `EVALUATION-STRATEGIQUE-2026-06.md`.
>
> **Constats initiaux** : 2026-08-14, sur la **v2** (100 % freelances).
> **Recalcul** : 2026-08-14, sur la **v3** (100 % salariés — décision direction du même jour).
> Statut : **13 constats sur 13 traités**, dont **1 partiel** (M — propagation ICP et
> `EVALUATION-STRATEGIQUE`). Les blocs **A** et **B** ont été **entièrement recalculés** sur
> le modèle salarié ; les autres portent leur statut dans le tableau ci-dessous.

---

## 0. Verdict en une page

| # | Bloc | Gravité | Constat central (v2) | Statut |
|---|---|---|---|---|
| **A** | Point mort calculé sur une base fausse | 🔴 **critique** | §2 rangeait les fees agents (5 200 €) dans les « charges **fixes** » alors qu'ils sont le poste le plus variable. Le point mort qui en découlait (« ~7 ETP ») était celui du **palier tarifaire le plus bas**, pas celui de l'entreprise. | ✅ **corrigé — recalculé §A** : point mort **2 à 6 ETP** (v3 §2/§4), paliers MB refondus en 1-4 / 5-8 / 9+ (`PRICING.md §3`) |
| **B** | Capital dimensionné sur le scénario médian | 🔴 **critique** | 50-60 k€ = creux **médian** + 30 %. Le scénario **prudent**, flagué ⚠️ par le document lui-même, creusait à **~79 k€** sans plancher à M18. | ✅ **corrigé — recalculé §B** : besoin **~25-30 k€, quasi indépendant du scénario** (v3 §6) |
| **C** | Les 3 scénarios de §5 ne sont pas reproductibles | 🔴 **critique** | CA M12 médian **17 300 €** recalculé (annoncé 13 000) ; ambitieux **~39 000 €** avec **24 agents** (annoncé 24 000 € / 16-18). | ✅ **corrigé** — v3 §5 régénéré par modèle, effectifs **calculés** et non asserés |
| **D** | Délai signature → 1ʳᵉ facture absent de la trajectoire | 🟠 majeur | 5-7 semaines chiffrées en §5, mais chaque ETP facturé le mois de son placement. | ✅ **corrigé** — v3 §5 : salaire à **M+1**, facture à **M+2** ; idem dans `tresorerie-salverys.html` v6 |
| **E** | Ligne kits d'autonomie vide | 🟠 majeur | §4 et §6 publiés **comme si le capex valait 0** ; « 10 kits » contredisait le démarrage à 6 personnes. | ✅ **sans objet** — kits et hub **sortis des charges** (v3 §2.c) ; le kit reste dû à l'agent, **réputé couvert par le salaire** ⚠️ à inscrire au PCA et au contrat de travail |
| **F** | Postes de coût absents du modèle | 🟠 majeur | Fiscalité, change EUR→MGA, comptabilité, RC pro, onboarding MB, HDS direct, conseil juridique — non budgétés. | ✅ **tracé** — v3 **§8 « Postes à chiffrer »** · ⏳ chiffrage réel encore ouvert |
| **G** | Aucune indexation des rémunérations | 🟠 majeur | 650 € figés 24 mois. Le « 4,5× le marché » est le **seul** pilier du zéro turnover. | ✅ **corrigé** — v3 §7.7 : provision de revalorisation **5-8 %/an** |
| **H** | §7 risque change se contredisait avec §3 | 🟠 majeur | « marge 65-80 % » alors que §3 donnait **48-59 %** sur les offres MB prioritaires. | ✅ **corrigé** — v3 §7.6 : fourchette réelle **43-73 %**, sens du risque de change explicité |
| **I** | Le simulateur cité comme aligné ne l'était pas | 🟠 majeur | 450 €/freelance, ni direction ni hub, capital plafonné à **10 k€**. | ✅ **corrigé** — `tresorerie-salverys.html` **v6** : coût employeur 736 €, commercial, imprévus, décalage embauche/facturation, capital jusqu'à 60 k€ |
| **J** | Marges §3 = marges à saturation | 🟡 mineur | Capacité agent incohérente (4 forfaits vs 1 800 appels vs 6 cabinets) et amorçage ignoré. | ✅ **corrigé** — encadré explicite en v3 §3 ; ratio du simulateur ramené à **4 cabinets/agent** |
| **K** | Tarif télésec MB périmé | 🟡 mineur | §3 utilisait le plat « 0,90-1,40 € » remplacé par une grille **par créneau** (`PRICING.md §1.b`). | ✅ **corrigé** — v3 §3 : marges séparées **jour (53-61 %)** et **soir/samedi (65-70 %)** |
| **L** | Démonstration « fin de la remise MB » asymétrique | 🟡 mineur | Onboarding 1 600 € compté « avant », oublié « après » : **+3 150 €** affiché contre **+1 550 €** réel. | ✅ **corrigé** — v3 §6 affiche **+1 550 €** |
| **M** | Divergences de gouvernance documentaire | 🟡 mineur | `PRICING.md` déclarait ce fichier « plus une source » en le citant **8 fois** ; ICP à 5 ETP contre 7 ; `EVALUATION-STRATEGIQUE §3.3` sur le coût v1 (400-450 €). | ⏳ **partiel** — `PRICING.md` corrigé (le fichier **redevient une source**) · **reste à propager** : ICP et `EVALUATION-STRATEGIQUE §3.3` |

---

## A. 🔴 Le point mort était calculé sur une base fausse — **recalculé sur la v3**

### Le constat d'origine (v2)

§2 titrait son total **« Total charges fixes ≈ 10 050 € »**. Ce total contenait
**5 200 € de fees agents** — le poste que tout le reste du document décrivait comme
*variable*. §4 divisait ensuite ce total par un prix ETP : **10 100 / 1 500 ≈ 7 ETP**.
Division sans signification économique : elle supposait qu'on paie 8 agents **quel que
soit** le nombre d'ETP placés.

### Recalcul sur le modèle salarié (v3)

Ventilation à partir de `FINANCE-PREVISIONNEL.md §2` :

| Nature | Postes | Montant |
|---|---|---|
| **Variable par agent placé** | salaire chargé 736 € (brut 650 € + charges plafonnées 86 €) + VoIP 30 € (+ ~10 % imprévus) | **~843 €/ETP** |
| **Fixe — 1 métier actif** | Vololona à l'OTE 1 086 € + 1 manager 736 € + SaaS 100 € (+ ~10 %) | **~2 114 €** |
| **Fixe — 2 métiers actifs** | idem + 1 manager 736 € | **~2 924 €** |

Point mort = fixe ÷ (prix ETP − 843), aux **nouveaux paliers** (`PRICING.md §3`) :

| Palier | Prix ETP | Contribution | **1 métier** | **2 métiers** |
|---|---|---|---|---|
| Helpdesk 1-4 ETP | 2 000 € | 1 157 € | **2 ETP** | 3 ETP |
| Helpdesk 5-8 ETP | 1 750 € | 907 € | **3 ETP** | 4 ETP |
| Support 1-4 ETP | 1 700 € | 857 € | **3 ETP** | 4 ETP |
| Helpdesk 9+ ETP | 1 550 € | 707 € | **3 ETP** | 5 ETP |
| Support 5-8 ETP | 1 500 € | 657 € | **4 ETP** | 5 ETP |
| Support 9+ ETP | 1 350 € | 507 € | **5 ETP** | 6 ETP |

**Point mort : 2 à 6 ETP** (contre « 7 » affiché en v2, et 4 à 7 après recalcul du modèle
freelance). Trois causes cumulées, par ordre d'impact :

| Cause | Effet sur le fixe mensuel |
|---|---|
| Direction non rémunérée (fondateur unique) | **−1 400 €** |
| Suppression du hub de repli + énergie | **−500 €** |
| Un seul manager tant qu'un seul métier est actif | **−736 €** |
| Suppression de l'indemnité de connexion | **−150 €** |
| *Contre-effet* : charges patronales sur chaque tête | *+86 €/tête* |

### Ce que la correction change côté vente — **le trou est refermé**

L'argument de `PRICING.md §3` (« le palier le plus bas est conçu pour qu'un seul donneur
d'ordre l'atteigne ») était **faux côté Support** dans l'ancienne grille 1 / 3 / 5+ :

| Deal | Base de coûts | CA | Coût total | Résultat |
|---|---|---|---|---|
| 5 positions Support à 1 350 € *(ancienne grille 5+)* | **v2 freelance** — fixe 3 830 € + 765 €/ETP | 6 750 € | 7 655 € | **−905 €/mois** ❌ |
| 5 positions Support à 1 350 € *(ancienne grille 5+)* | **v3 salarié** — fixe 2 114 € + 843 €/ETP | 6 750 € | 6 329 € | +421 €/mois ⚠️ |
| **9 positions Support à 1 350 €** *(nouvelle grille 9+)* | v3 salarié | 12 150 € | 9 701 € | **+2 449 €/mois** ✅ |
| **4 positions Support à 1 700 €** *(nouvelle grille 1-4)* | v3 salarié | 6 800 € | 5 486 € | **+1 314 €/mois** ✅ |

Les deux corrections agissent séparément, et il faut les distinguer :

1. **L'allègement de la structure fait l'essentiel du travail.** Le même deal de 5
   positions à 1 350 € passe de **−905 €** à **+421 €** par le seul changement de base de
   coûts, sans toucher au prix.
2. **Mais +421 €/mois, c'est +6 % — une marge de manœuvre nulle.** Une absence non couverte,
   un mois de sous-consommation, et le deal repasse en négatif. La refonte en
   **1-4 / 5-8 / 9+** (2026-08-14) adosse le prix plancher à **9** positions au lieu de 5 :
   le même tarif dégage alors **+2 449 €/mois**. **Le prix le plus bas de la grille n'est
   plus adossé à une marge fragile.**

### Divergence 5 vs 7 ETP — résolue

`IDEAL-CUSTOMER-PROFILE.md:27` annonçait « ~5 ETP », `FINANCE §4` et `PRICING.md §3`
« 7 ». Les deux chiffres répondaient à deux questions différentes (« à effectif cible
payé, combien placer ? » vs « en dimensionnant sur les contrats, combien d'ETP ? »).
La v3 tranche le cadre : **l'effectif se dimensionne sur les contrats**, il n'y a plus
d'effectif cible à saturer. ⏳ **Reste à propager** : l'ICP doit passer de « ~5 ETP » à
« 2 à 6 ETP selon le palier ; un deal de 3-4 positions au tarif standard suffit ».

---

## B. 🔴 Le capital était dimensionné sur le mauvais scénario — **recalculé sur la v3**

### Le constat d'origine (v2)

§6 recommandait **50-60 k€** = creux **médian** (−40,2 k€ recalculé) + 30 %. Or le
scénario **prudent** — celui que le document flaguait lui-même ⚠️ — creusait à
**−78,9 k€ sans avoir touché son plancher à M18**. Le capital était calibré sur le seul
scénario où il n'était pas la variable de survie.

### Recalcul sur le modèle salarié (v3)

Modélisation des hypothèses de `FINANCE §5` : fixe 755 € tant qu'aucun contrat n'est
signé, puis 2 114 € (1 métier) / 2 924 € (2 métiers) · variable 843 €/agent · **salaires
payés dès l'embauche, soit ~1 mois avant la 1ʳᵉ facture** · encaissement à 30 j · dépôt
d'activation encaissé à la signature · 1 manager par métier, +1 par tranche de 8 agents.

| Scénario | Creux max | Mois du creux | Point mort | **Capital (creux + 30 %)** |
|---|---|---|---|---|
| **Prudent** | **−18,0 k€** | M15 | M12 | ~23 k€ |
| **Médian** | **−23,0 k€** | M11 | M10 | ~30 k€ |
| **Ambitieux** | **−22,5 k€** | M10 | M8 | ~29 k€ |

**Trois résultats, dans l'ordre d'importance :**

1. **Le besoin de financement est désormais quasi indépendant du scénario : ~25-30 k€.**
   Croître plus vite fait rentrer le CA plus tôt, mais fait payer plus de salaires avant
   facturation — les deux effets se compensent presque exactement. Le défaut de méthode
   de la v2 (dimensionner sur un scénario) **disparaît de lui-même** : provisionner
   **30 k€** couvre les trois trajectoires. C'est la recommandation retenue en `FINANCE §6`.
2. **Le besoin est divisé par ~2** vs la v2 (50-60 k€ recommandés, 79 k€ réellement
   nécessaires dans le prudent). Cause principale : le burn d'attente passe de
   **~6 900 €/mois** (4 agents + 2 managers + direction payés avant le premier contrat) à
   **755 €/mois** (Vololona seule). **La lenteur commerciale ne coûte presque plus rien.**
3. **Les trois scénarios passent le point mort dans l'année**, y compris le prudent
   (M12 contre M+18 en v2). L'alerte ⚠️ de `FINANCE §5` v2 n'a plus lieu d'être.

### Le risque a changé de nature, il n'a pas disparu

La contrainte n'est plus le cash mais le **rythme de recrutement** : le scénario ambitieux
exige ~2 embauches/mois pendant 10 mois (22 agents à M12). Et la **rigidité salariale**
(§7.1 de `FINANCE`) fait qu'une erreur de dimensionnement ne se corrige plus en arrêtant
un contrat de prestation : elle coûte un préavis et une indemnité. **Le garde-fou doit se
déplacer du plan de trésorerie vers la clause de volume ferme facturable** — c'est fait
(`PRICING.md §3`, généralisée à tous les paliers le 2026-08-14).

---

## C. 🔴 Les trois scénarios de §5 n'étaient pas reproductibles

> ✅ **Corrigé en v3** : §5 est régénéré par modèle, avec une ligne **charges** à côté de la ligne CA et des **effectifs calculés**, plus assertés.

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

## D. 🟠 Le délai signature → première facture n'était pas dans la trajectoire

> ✅ **Corrigé en v3** : salaire payé dès l'embauche (**M+1**), facturation à **M+2**. Même décalage implémenté dans `tresorerie-salverys.html` v6.

§5 pose l'hypothèse : *« recrutement freelance ≈ 2-4 semaines, formation 2-3 semaines »*,
que `PRICING.md §3` traduit en **« ~5 à 7 semaines entre la signature et la première
facture »** et `PRICING.md §3.c` en promesse commerciale **« opérationnel en 3 à 4
semaines »** (déjà un écart entre les deux, à trancher côté `PRICING.md`).

Mais la trajectoire fait facturer chaque ETP **le mois même de son placement**. Avec le
décalage réel, tout le CA glisse de ~1,5 mois et le creux se creuse d'autant. Sur le
médian, cela repousse le point bas vers M10-M11 et ajoute ~5 k€ au creux.

---

## E. 🟠 La ligne kits d'autonomie était vide — deux chiffres publiés reposaient dessus

> ✅ **Sans objet en v3** : kits et hub **sortis des charges**. ⚠️ Le kit reste dû à l'agent et son coût est **réputé couvert par le salaire** — à inscrire au PCA et au contrat de travail (§O.4).

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

> ✅ **Tracé en v3** (§8 « Postes à chiffrer ») · ⏳ le chiffrage réel reste ouvert (§O.3). La liste ci-dessous a été reprise telle quelle dans le prévisionnel.

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

## G. 🟠 Aucune indexation des rémunérations, alors que tout le modèle repose dessus

> ✅ **Corrigé en v3 §7.7** : provision de revalorisation annuelle **5-8 %** de la masse salariale.

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

## H. 🟠 Le risque de change contredisait §3

> ✅ **Corrigé en v3 §7.6** : fourchette de marge réelle **43-73 %**, et sens du risque de change explicité (c'est l'**appréciation** de l'ariary qui coûte).

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

## I. 🟠 Le simulateur cité en §6 n'était pas aligné

> ✅ **Corrigé** — `tresorerie-salverys.html` **v6 du 2026-08-14** : coût employeur 736 €, ligne commerciale, imprévus en %, décalage embauche/facturation, plafond d'effectif levé, capital réglable jusqu'à 60 k€.

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

> ✅ **Corrigé en v3 §3** : l'encadré le dit explicitement. Le ratio du simulateur est ramené de 6 à **4 cabinets/agent**, aligné sur le prévisionnel.

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

## K. 🟡 Le tarif télésec MB de §3 était périmé

> ✅ **Corrigé en v3 §3** : marges séparées par créneau — **jour 53-61 %**, **soir/samedi 65-70 %**.

§3 chiffre le télésec MB sur un tarif **à plat de 0,90-1,40 €/appel**. `PRICING.md §1.b`
indique explicitement : *« Remplace l'ancienne référence à plat “0,90-1,40 €”
(`FINANCE-PREVISIONNEL.md §3`) »* au profit d'une grille **par créneau** (jour
0,90-1,10 € · soir/samedi 1,20-1,40 € · pics +15-20 %).

Conséquence sur le calcul : 1 800 appels **de jour** ne rapportent pas 1 620-2 520 € mais
**1 620-1 980 €**, et la marge haute annoncée (72 %) n'est atteignable qu'avec une part
significative de créneaux soir/samedi. La fourchette de marge « 57-72 % » doit être
recalculée sur un mix de créneaux explicite.

---

## L. 🟡 La démonstration « fin de la remise MB » comptait l'onboarding d'un seul côté

> ✅ **Corrigé en v3 §6** : le mois d'entrée est affiché à **+1 550 €**, onboarding inclus des deux côtés.

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

> ⏳ **Partiel** : `PRICING.md` est corrigé — il **redevient une source** et la mention contraire est annulée. **Reste à propager** : l'ICP et `EVALUATION-STRATEGIQUE §3.3` (§O.1 et §O.2).

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

## N. Ce qui était solide dans la v2

Pour être juste, l'essentiel de l'arithmétique de détail était correct et vérifié :
marges brutes de §3 exactes au prix et coût donnés, total de §2 correct, mécanique du
dépôt d'activation (900 / 300 × 3 / plafond 2 700) cohérente avec `PRICING.md §3.a` et
`tools/deal-build.mjs`, chiffrage de la remise MB supprimée (2 625 € / −1 075 €) exact,
plafond d'avoirs qualité (20 % × 1/12 ≈ 1,7 % du CA annuel) exact, ordre de grandeur du
creux médian (35-45 k€) confirmé par recalcul (40,2 k€).

L'audit ne portait pas sur la solidité des décisions — il portait sur le fait que
**plusieurs chiffres publiés ne se déduisaient pas des hypothèses affichées**, et que
trois d'entre eux (point mort, capital, trajectoires) étaient déjà repris ailleurs dans
le corpus.

---

## O. Reste à faire

Le plan de correction initial (14 actions) est **appliqué à 11 actions sur 14**. Résiduel :

| # | Action | Fichier | Bloc |
|---|---|---|---|
| 1 | Remplacer « point mort ~5 ETP » par « **2 à 6 ETP selon le palier** ; un deal de 3-4 positions au tarif standard suffit » | `03-Cibles-Prospects/IDEAL-CUSTOMER-PROFILE.md:27` | **M** |
| 2 | Purger les valeurs du modèle salarié **v1** encore en circulation : coût complet ETP « ~400-450 € », marges « 67-80 % / 80 %+ » — remplacer par **766 €** et **43-73 %** | `EVALUATION-STRATEGIQUE-2026-06.md §3.3` (et le récap §17) | **M** |
| 3 | Chiffrer réellement les postes listés : IS, paie/compta, change EUR→MGA, RC pro, provision indemnités | `FINANCE-PREVISIONNEL.md §8` | **F** |
| 4 | Inscrire la contrepartie **« kit d'autonomie couvert par le salaire »** dans le PCA et le contrat de travail — sinon la promesse R1 remise aux partenaires n'a plus de financement identifiable | `04-Closing/DOSSIER-AVANT-VENTE/01-PLAN-CONTINUITE.md`, contrats | **E** |
| 5 | Répercuter la fin des **DPA individuels** (remplacés par la clause de confidentialité du contrat de travail + le DPA Salverys ↔ client) | `01-Strategie-Offre/CONFORMITE-HDS-RGPD.md` | **v3 §1.b** |
| 6 | Confirmer **taux, assiette et plafond CNaPS/OSTIE** avec un conseil social local avant la première embauche — un plafond relevé fait passer le coût agent de 736 € à ~767 € et déplace tout le §4 | conseil externe | **v3 §1.a** |

> ⚠️ **Le point 6 est le seul qui puisse invalider des chiffres de la v3.** Tout le modèle
> repose sur un plafond de cotisation à 8 × SME = 2,4 M Ar, qui transforme les charges
> patronales en un **forfait de ~86 €/tête**. Cette hypothèse n'est sourcée par aucun
> document du corpus.
