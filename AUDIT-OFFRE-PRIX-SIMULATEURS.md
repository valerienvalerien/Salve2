# AUDIT — Offre, prix & simulateurs

> Audit de cohérence entre **`PRICING.md`** (source de vérité) et les 3 simulateurs
> publics (`simulateur-salverys.html`, `simulateur-informatique.html`,
> `simulateur-helpdesk-it.html` + le moteur commun `assets/site.js`).
>
> Date : 2026-08-13 · Statut : **arbitré et appliqué, sauf le bloc C** (benchmark & claim
> −40 à −60 %), en attente de la décision sur les hypothèses de salaire.

---

## 0. Verdict en une page

| Bloc | Gravité | Constat central | Statut |
|---|---|---|---|
| **A. Coefficients de couverture horaire** | 🔴 **critique** | Le 24·7 est vendu **+45 %** alors qu'il demande **×3,7 de présence**. Un devis 24·7 sort **à perte** et n'est **pas livrable**. | ✅ **corrigé** — modèle ETP + astreinte/24·7 sur devis (`PRICING.md §3.c`) |
| **B. Tier Priority à 1-2 agents** | 🔴 **critique** | Le simulateur affiche publiquement **« Économie : −24 % »** et **« Économie annuelle : −10 800 € »**. On vend plus cher que d'embaucher en France. | ✅ **corrigé** — badge « résilience » sous 3 agents, offre inchangée (`PRICING.md §3`) |
| **C. Claim « −40 à −60 % » vs simulateur** | 🔴 **critique** | Les pages promettent −40 à −60 % ; le badge du simulateur calcule **−32 %** (helpdesk) et **−38 %** (SaaS). La page se contredit elle-même à 30 cm d'écart. | ⏳ **ouvert** — cf. §I.3 ci-dessous |
| **D. Badge médical −87 %** | 🟠 majeur | Hors doctrine `PRICING.md` (claim public = −40 à −60 %) et non crédible : compare un forfait 250 appels à une secrétaire à temps plein. | ✅ **corrigé** — recadrage coût/jour ouvré (`PRICING.md §1`) |
| **E. Noms des offres** | 🟠 majeur | 3 systèmes de nommage différents, **absents de `PRICING.md`**, mélange FR/EN sur une marque qui vend « français langue maternelle ». | ✅ **corrigé** — Débordement / Poste dédié / Centre de services (`PRICING.md §3.c`) |
| **F. Axes d'offre divergents entre les 2 simulateurs IT** | 🟠 majeur | Le SaaS a « Langue », le Helpdesk a « Périmètre N2 ». Deux produits frères, deux définitions d'offre. | ✅ **corrigé** — socle commun (langue + périmètre N2 des deux côtés) + bloc recommandation ajouté au helpdesk |
| **G. Valeurs statiques périmées** | 🟡 mineur | Les valeurs en dur du HTML ne correspondent plus au calcul JS (badge 45 % affiché, 32 % calculé…). Visible ~200 ms au chargement + dans les tableaux comparatifs. | ✅ **corrigé** — sauf les seuils `vol()` (cf. §I.8) |
| **H. Promesses de délai** | 🟠 majeur | « Lancé en 10 jours » / « Onboarding 5 jours » vs `FINANCE-PREVISIONNEL.md` : **recrutement 2-4 sem. + formation 2-3 sem.** | ✅ **corrigé** — « opérationnel en 3 à 4 semaines » |

---

## A. 🔴 Coefficients de couverture horaire — le plus grave

`assets/site.js` applique un **pourcentage de majoration** là où il faut un **multiplicateur
de présence**. L'amplitude horaire n'est pas une option de confort : elle impose des **têtes
supplémentaires**. Le simulateur confond les deux.

Base implicite « Bureau » ≈ 45 h/semaine de fenêtre couverte par 1 agent à 35 h.

| Option du simulateur | Fenêtre à couvrir | Multiplicateur **réel** de présence | Coefficient **appliqué** | Écart |
|---|---|---|---|---|
| Bureau | ~45 h/sem | ×1,00 *(base)* | **1,00** | référence |
| Étendu (8h-20h) | 60 h/sem | ×1,33 | **1,15** | **−16 %** |
| Astreinte soir + WE | ~90 h/sem | ×2,00 | **1,28** | **−56 %** |
| **24·7** | 168 h/sem | **×3,73** | **1,45** | **−157 %** |

**Conséquences concrètes**

1. **Incohérence interne visible par le prospect** : le simulateur affiche simultanément
   « 1 agent », « 152 h/mois » et « couverture 24·7 ». 152 h/mois ne couvrent pas
   730 h/mois. Un acheteur d'ESN le voit en 10 secondes.
2. **Devis à perte** : 1 agent, 35 h, dédié, 24·7 → estimation **3 444 – 3 806 €/mois**.
   Le coût agent seul d'une vraie couverture 24·7 (≈ 4,8 ETP × 700 € de coût marginal,
   `FINANCE-PREVISIONNEL.md §2`) = **~3 360 €**, hors encadrement, hors majorations de nuit.
   Marge ≈ **0 à négative**, contre un plancher doctrinal de coût + 20 % (`PRICING.md §3`).
3. **Promesse non livrable** : à 4-8 agents au démarrage, un seul contrat 24·7 consomme
   toute la capacité. La niche IT n°1 se vend sur la **fiabilité** — s'engager sur du 24·7
   non tenable est le pire départ possible.
4. Le **même défaut est appliqué au benchmark France** via `FR_PEN = 1.35`
   (`frCost = frBench × schedule^1,35`) : une équipe interne 24·7 y coûte 6 110 €/mois,
   alors qu'elle demande ~4,8 ETP soit **~17 800 €/mois**. Deux erreurs qui se compensent
   partiellement — le % d'économie affiché n'a donc **aucune assise**.

> `FR_PEN = 1.35` est un exposant magique : aucune trace dans `PRICING.md`, aucune
> justification dans le code. Il pilote pourtant tout le discours « économie ».

---

## B. 🔴 Tier Priority à 1-2 agents — le simulateur affiche une économie négative

La formule `priorityMult(n) = 1,10 + 0,90/n` est **économiquement correcte** et documentée
(`PRICING.md §3`, `ARGUMENTS-APPEL-priority.md`). Le problème n'est pas la formule, c'est
son **rendu public** aux petits effectifs.

| n agents | ×base | Estimation SaaS | Badge affiché | Estimation Helpdesk | Badge affiché |
|---|---|---|---|---|---|
| **1** | ×2,00 | 4 600 € | **« Économie : −24 % »** | 5 000 € | **« Économie : −35 % »** |
| **2** | ×1,55 | 7 130 € | « Économie : 4 % » | 7 750 € | **« Économie : −5 % »** |
| 3 | ×1,40 | 9 177 € | 17 % | 9 975 € | 10 % |
| 6 | ×1,25 | 15 525 € | 30 % | 16 875 € | 24 % |
| 10 | ×1,19 | 24 633 € | 33 % | 26 775 € | 28 % |

Un prospect qui clique « Priority » — le tier haut de gamme, donc **le plus désirable** —
lit littéralement : *« Économie annuelle estimée : −10 800 € »*, en vert, dans l'encart
`accent`. La page vend elle-même l'idée qu'il vaut mieux embaucher en France.

`PRICING.md §3` l'admet d'ailleurs noir sur blanc : *« Priority bascule moins cher à partir
de ~4 agents garantis »*. **Le simulateur expose donc publiquement une zone où l'offre perd
son propre argumentaire**, sans le garde-fou correspondant.

---

## C. 🔴 Le claim « −40 à −60 % » est contredit par le simulateur, sur la même page

**Configuration par défaut** (1 agent, 35 h, dédié, ticket/email, bureau) :

| Simulateur | Base ETP direct | Benchmark FR retenu | Estimation | **Économie calculée** | **Claim affiché au-dessus** |
|---|---|---|---|---|---|
| Support N1 SaaS | 2 300 € | 3 700 € | 2 185 – 2 415 € | **−38 %** | « −40 à −60 % » |
| Helpdesk IT N1 | 2 500 € | 3 700 € | 2 375 – 2 625 € | **−32 %** | « −40 à −60 % » |

Le hero du helpdesk écrit même en toutes lettres *« 40 à 60 % moins cher qu'un poste en
interne »* ; deux blocs plus bas, le badge du simulateur dit **32 %**.

**Origine arithmétique** — c'est une incohérence de `PRICING.md` lui-même, pas seulement du code :

- `PRICING.md §3/§5` fixe le coût complet support IT N1 à **38-50 k€/an ⇒ 3 200-4 200 €/mois**,
  et l'objectif à **−40 à −60 %**. Cible cohérente = **1 280 – 2 520 €/mois**.
- Mais la **grille direct §3** fixe : Support N1 SaaS **1 900-2 400 €** · Helpdesk IT N1 **2 200-2 800 €**.
- Au **milieu de fourchette** (3 700 €), il faudrait facturer **≤ 2 220 €** pour tenir −40 %.
  Le helpdesk direct démarre à **2 200 €** et médiane **2 500 €** ⇒ **le claim ne tient pas**.

**Seuils de bascule** (à prix inchangés) :

| Segment | Prix direct médian | Benchmark nécessaire pour tenir −40 % |
|---|---|---|
| Support N1 SaaS | 2 300 € | **3 833 €/mois** (46 k€/an) |
| Helpdesk IT N1 | 2 500 € | **4 167 €/mois** (50 k€/an) |

Autrement dit : le claim −40 % ne tient que si l'on compare au **haut** de la fourchette
`PRICING.md` (50 k€/an — la valeur « ESN Île-de-France » que §3 mentionne déjà), pas à sa
médiane. **Trois issues possibles, toutes légitimes — c'est un arbitrage direction** (voir §I).

---

## D. 🟠 Simulateur médical : badge « −87 % »

`site.js` compare le forfait au bas de fourchette d'une secrétaire interne
(`INTERNAL_SECRETARY = 2750`) : (2 750 − 350) / 2 750 = **−87 %**.

- **Hors doctrine** : `PRICING.md §0/§5` fixe le claim public à **−40 à −60 %**, et explique
  précisément pourquoi on annonce le **plancher −40 %** : parce que le client compare
  souvent à un **mi-temps** ou à un **appoint**.
- **Non crédible** : on met en regard un forfait **250 appels/mois** et une secrétaire
  **temps plein** qui fait aussi l'accueil physique, le tiers payant, la facturation.
  Un −87 % déclenche « ce n'est pas le même produit », pas « quelle affaire ».
- **Le bon angle existe déjà dans `PRICING.md §1`** et n'est pas exploité au bon endroit :
  **16 €/jour ouvré**, *« 2 à 3 RDV récupérés paient le forfait »*. C'est le recadrage
  anti-objection prix le plus fort du dossier — il est relégué en petite stat pendant que
  le −87 % occupe le badge.

**À noter aussi** : le contrôle « Intégration agenda » (Doctolib / Ubicentrex / Maiia /
Médistory / Autre) a **tous ses multiplicateurs à 1,0**. C'est un bouton qui ne fait rien.
Soit il qualifie (et il doit remonter dans le lead Formspree — ce n'est pas le cas), soit il
différencie le prix, soit il dégrade la confiance dans le simulateur.

---

## E. 🟠 Noms des offres — trois systèmes, aucun dans la source de vérité

### E.1 Les forfaits packagés

| Simulateur | Palier 1 | Palier 2 | Palier 3 |
|---|---|---|---|
| Médical | Essentiel | Confort | Intensif |
| Support N1 SaaS | Support **Starter** | Support **Pro** | **Centre N1 Scale** |
| Helpdesk IT | Helpdesk **Starter** | Helpdesk **Pro** | Helpdesk **Scale** |

1. **Aucun de ces noms n'existe dans `PRICING.md`.** La source unique de vérité définit les
   forfaits **médicaux** (Essentiel/Confort/Intensif) et les **grilles ETP** IT, mais pas les
   packages IT. Ils ont été créés côté site, sans arbitrage tracé.
2. **Trois systèmes cohabitent** : FR émotionnel (médical), anglais SaaS (IT). Sur une marque
   dont l'argument n°1 est **« français langue maternelle »**, vendre « Starter / Pro / Scale »
   à des ESN et DSI françaises envoie le signal inverse.
3. **Les deux simulateurs IT ne s'accordent même pas entre eux** : « Centre N1 Scale » d'un
   côté, « Helpdesk Scale » de l'autre. Deux produits frères, deux grammaires.
4. **Le moteur de recommandation est écrit en dur pour le SaaS** (« Support Starter » /
   « Support Pro » / « Centre N1 Scale ») et **le helpdesk n'a aucun bloc recommandation** :
   l'élément `#recommendation` est absent de `simulateur-helpdesk-it.html`. Le code cherche,
   ne trouve pas, passe. **Un des deux simulateurs IT ne recommande donc jamais rien.**
5. **« Sur-mesure » (médical)** est affiché avec **un prix calculé** au-delà de 900 appels
   (`950 + 95 €/100 appels`), alors que `PRICING.md §1` dit **« sur devis »**. Le garde-fou
   existe dans le code (`$('sim-disclaimer')`) mais **cible un id absent du HTML** — le
   disclaimer « Estimation » ne s'affiche donc **jamais**, la page continue d'annoncer
   « Montants fermes ».

### E.2 Les niveaux de service

`Mutualisé · Dédié · Priority` — deux mots français, un anglais. « Priority » est un choix
**acté** (`PRICING.md §3`, renommage de « Premium ITIL+ »), donc défendable ; mais il n'a
jamais été confronté à ses deux voisins.

Par ailleurs **« Mutualisé » n'est défini nulle part dans `PRICING.md`** — ni ce qu'il
recouvre, ni pourquoi **−15 %** (`data-multiplier="0.85"`). Or c'est le palier d'entrée :
il porte les forfaits « Starter » des deux simulateurs IT.

### E.3 Collision de vocabulaire

« **Dédié** » désigne à la fois un **niveau de service** (pill) et une **caractéristique de
forfait** (« 1 agent 100 % dédié » dans Support Pro / Helpdesk Pro, qui sont pourtant des
packages, pas des tiers). Le graphe comparatif parle lui de « Dédié vs Priority » — donc du
tier. Trois usages, un mot.

---

## F. 🟠 Deux simulateurs IT, deux définitions d'offre

| Axe | Support N1 SaaS | Helpdesk IT N1 |
|---|---|---|
| Nombre d'agents | ✅ 1-10 | ✅ 1-10 |
| Heures/semaine | ✅ 10-40 | ✅ 10-40 |
| Niveau de service | ✅ | ✅ |
| Canaux | ✅ | ✅ |
| **Langue (FR/EN/bilingue)** | ✅ ×1,0 / 1,12 / 1,22 | ❌ **absent** |
| **Périmètre N2** | ❌ **absent** | ✅ ×1,0 / 1,08 / 1,22 |
| Horaires | ✅ | ✅ |
| Bloc recommandation | ✅ | ❌ **absent** |

- Le SaaS **promet « escalade N2 cadrée »** dans son hero et ses 3 forfaits… mais ne
  permet pas de la paramétrer.
- Le helpdesk cible **ESN & infogéreurs**, dont une partie a des utilisateurs anglophones…
  mais ne propose aucune option de langue.
- Détail d'implémentation révélateur : le groupe « Périmètre N2 » du helpdesk porte
  `data-group="language"`. Le second simulateur est un **copier-coller relabellisé** du
  premier, pas une offre pensée.

---

## G. 🟡 Valeurs statiques périmées (correctifs sans arbitrage)

Les valeurs en dur du HTML ont été écrites pour une version antérieure du moteur
(`BAND = 0,10`, d'autres bases). Le JS les écrase au chargement, mais elles restent
**visibles pendant le premier rendu** et — surtout — **figées dans les tableaux comparatifs**,
que le JS ne touche jamais.

| Emplacement | Affiché | Calculé par `site.js` |
|---|---|---|
| Helpdesk — badge économie | **45 %** | **32 %** |
| Helpdesk — tarif horaire affiché | 11,7 € | **16,5 €** |
| Helpdesk — tarif horaire productif | 13,7 € | **19,4 €** |
| Helpdesk — économie annuelle | 17 100 € | **14 400 €** |
| Helpdesk — estimation par défaut | 2 250 – 2 750 € | **2 375 – 2 625 €** |
| SaaS — estimation par défaut | 2 070 – 2 530 € | **2 185 – 2 415 €** |
| SaaS — économie annuelle | 16 152 € | **16 800 €** |
| SaaS — badge économie | 37 % | **38 %** |
| **SaaS — tableau comparatif, ligne « Salverys »** | ≈ 1 900-2 300 € | 2 185 – 2 415 € |
| **Helpdesk — tableau comparatif, ligne « Salverys »** | ≈ 2 250-2 750 € | 2 375 – 2 625 € |
| **Helpdesk — forfait « Scale »** | 4 800 € | 2 agents dédiés = **5 000 €** |

Autres points de cohérence :

- **`BAND = ±5 %`** : `PRICING.md §9` classe le support/helpdesk direct en **« estimation
  sans prix ferme »**. Une fourchette à ±5 % (2 375 – 2 625 €) se lit comme un **prix ferme**,
  pas comme une estimation. Le disclaimer dit « estimation indicative », la largeur dit l'inverse.
- **`vol()` — remises de volume** : le simulateur applique **−5 % à 3 agents, −10 % à 6+**.
  La rate card partenaire (`PRICING.md §3`) est construite sur des paliers **1 / 3 / 5+**.
  Deux grilles de dégressivité, deux jeux de seuils, aucun lien documenté.
- **Contrôle « Intégration agenda » (médical)** : multiplicateurs tous à 1,0 (cf. §D).
- **Pills `Priority`** : portent `data-multiplier="1.25"`, valeur **morte** (surchargée par
  `priorityMult()`). Vestige de l'ancien tarif plat « Premium ×1,25 ».

---

## H. 🟠 Promesses de délai non tenables

| Page | Promesse affichée | Réalité `FINANCE-PREVISIONNEL.md §5` |
|---|---|---|
| CTA SaaS & Helpdesk | « Votre support N1, **lancé en 10 jours** » | recrutement **2-4 sem.** + formation **2-3 sem.** = **4-7 semaines** |
| Forfaits Starter (×2) | « **Onboarding 5 jours** » | idem |
| CTA médical | « opérationnel en **2 à 3 semaines** » | cohérent avec `PRICING.md §1.c` ✅ |

Le médical est aligné, l'IT ne l'est pas — et l'IT est la **priorité n°1**.
`PRICING.md §3` chiffre par ailleurs à **5-7 semaines** le délai signature → première facture
sur un deal 5 positions.

---

## I. Arbitrages — décisions du 2026-08-13

1. ✅ **Couverture horaire** — **modèle ETP calculé** (étendu ×1,33) **et** retrait de
   l'astreinte et du 24·7 du simulateur public (« sur devis »). Motif du retrait :
   **livrabilité**, pas marge — un contrat 24·7 = ~4,8 ETP, soit toute la capacité de la
   phase 1. `FR_PEN` supprimé au passage.
2. ✅ **Priority** — **pas de verrou** : l'offre reste sélectionnable et vendable à 1-2
   agents. C'est le **badge économie** qui disparaît sous 3 agents, remplacé par
   « Résilience de N postes internes ». L'argument juste à cette taille est la faisabilité.
3. ⏳ **Claim −40 à −60 %** — **ouvert.** Hypothèses de brut révisées (direction) :
   **30-36 k€** au lieu de 26-34 k€ ⇒ coût complet **44-53 k€/an (3 650-4 400 €/mois)**.
   Effet à prix inchangés : SaaS −37/−43/−48 %, helpdesk −31/−38/−43 % selon qu'on retient
   le bas, la médiane ou le haut. **Le plancher −40 % redevient tenable ; le plafond −60 %
   reste hors d'atteinte** (meilleur coin : −57 %) — il suppose la référence **ESN
   Île-de-France**, qui n'est pas un recrutement interne. Reste à trancher : valeur de
   benchmark retenue, et libellé du claim (**−40 à −55 %** vs poste interne ?).
   ⚠️ Vigilance libellé : 30-36 k€ décrit un **technicien confirmé**, pas un N1 débutant
   (marché FR ~24-28 k€ à l'entrée). Le libellé porte la défendabilité du chiffre.
   - **Séniorité comme bouton client — écarté à ce stade.** Comme sélecteur de *benchmark*,
     jamais : le prospect choisirait le chiffre qui le fait gagner. Comme **axe d'offre**
     (profil Salverys livré), c'est pertinent et le benchmark en découlerait mécaniquement —
     mais cela suppose d'abord une **grille de fees à deux niveaux** (`FINANCE-PREVISIONNEL.md`,
     aujourd'hui 3 250 000 Ar pour tous) et une capacité à staffer le profil. À rouvrir avec
     l'arbitrage n°3.
4. ✅ **Médical** — badge = **coût/jour ouvré** + « N RDV récupérés paient le forfait ».
5. ✅ **Noms d'offres** — trio FR métier pour l'IT : **Débordement / Poste dédié / Centre de
   services**. Médical inchangé. *Reste à faire : définir « Mutualisé » dans `PRICING.md`
   (son −15 % n'est toujours justifié nulle part).*
6. ✅ **Axes d'offre IT** — socle commun : **langue et périmètre N2 des deux côtés**, plus le
   bloc recommandation ajouté au helpdesk (il n'en avait aucun).
7. ✅ **Délais** — **« opérationnel en 3 à 4 semaines »** partout en IT.
8. ⏳ **Seuils `vol()`** — le simulateur dégresse à 3 et 6 agents, la rate card partenaire
   à 1 / 3 / 5+ (§3). Deux grilles, aucun lien documenté. Non tranché.
9. ⏳ **Médical « Sur-mesure »** — le simulateur affiche toujours un **prix calculé**
   (`950 + 95 €/100 appels`) là où §1 dit « sur devis ». Le disclaimer, lui, est réparé et
   s'affiche désormais correctement.

---

## J. Fichiers concernés

| Fichier | Rôle |
|---|---|
| `PRICING.md` | source de vérité — §1, §3, §5, §9 à reprendre |
| `assets/site.js` | moteur commun des 3 simulateurs (coefficients, `priorityMult`, `vol`, `FR_PEN`, `BAND`) |
| `simulateur-salverys.html` | médical — forfaits, badge, tableau comparatif |
| `simulateur-informatique.html` | Support N1 SaaS — `SIM_CONFIG`, forfaits, comparatif, CTA |
| `simulateur-helpdesk-it.html` | Helpdesk IT N1 — `SIM_CONFIG`, forfaits, comparatif, CTA |
| `index.html` | claims chiffrés (hero, FAQ, bloc « 40 à 60 % ») |
| `RAPPORT-PRIX.html` | rapport de réflexion à re-synchroniser après arbitrage |
| `ARGUMENTS-APPEL-priority.md` | argumentaire Priority, dépend de l'arbitrage n°2 |
