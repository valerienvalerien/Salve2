# Audit — parcours de prospection Sales Navigator proposé

> **Date : 2026-08-28** · Audit d'un plan de prospection externe (parcours d'apprentissage
> Sales Navigator en 10 étapes + fichier Excel 2 onglets + démarrage mono-segment).
> Verdict global : **la méthode est saine, le point de départ est faux.**
> Le plan corrigé est dans `PLAYBOOK-SALES-NAVIGATOR.md`.

---

## 1. Le constat qui change tout

Le plan proposé démarre à l'étape « construire une première liste de 50 comptes ».
**Cette étape est déjà faite — trois fois.** Voici l'état réel, mesuré dans le dépôt le
2026-08-28 :

| Fait mesuré | Chiffre | Source |
|---|---|---|
| Leads dans le CRM (seed committé) | **195** | `CRM_Salverys.html` / `CRM_Salverys_Unifie.html` |
| Leads au statut « nouveau » | **195 / 195** | idem |
| Leads **contactés** | **0** | idem |
| Comptes MB France (IT + télésec donneurs d'ordre) après dédoublonnage des exports | **75** | `exports/` fusionnés |
| Parmi eux, **décideur nommé** | **~24** | idem |
| Parmi eux, « décideur à identifier » | **~42** | idem |
| Cabinets médicaux en direct dans le CRM | **150 / 195 (77 %)** | niche `telemed` |

**Le goulot n'est pas le ciblage. C'est l'exécution.** 195 lignes, zéro appel, zéro email
parti. Repartir sur « identifier 50 comptes ICP » ferait perdre 2 à 3 semaines à reproduire
un actif qui existe déjà, sans lever le vrai blocage.

### Trois anomalies découvertes en auditant

1. **Le CRM n'est pas une source de vérité — il perd des données.**
   `ESN-TARGETS.md` et `SAAS-SUPPORT-TARGETS.md` affirment « ✅ intégré au CRM le 2026-07-13,
   leads `l196` à `l249` ». **Ces 60 comptes ne sont pas dans les fichiers CRM committés**
   (le seed s'arrête à `l195`). Ils n'existent que dans le `localStorage` d'un navigateur et
   dans les CSV d'`exports/`. Concrètement : un vidage de cache, un autre poste, ou Vololona
   qui ouvre le CRM chez elle → **les 60 comptes IT prioritaires n'existent plus.**
   *(Les données ont été récupérées depuis `exports/` — voir §5.)*

2. **Les libellés de niche mélangent deux marchés.** Dans le CRM, la niche
   `support-n1` / « Support applicatif N1 » contient à la fois les éditeurs SaaS
   (`l209`-`l220`, priorité n°1) **et** la Croix-Rouge, les Restos du Cœur, Emmaüs,
   Action Logement, la CAF, France Travail (`l151`-`l180`) — c'est-à-dire la **niche n°3
   « relation client de toutes sortes », officiellement repoussée à un futur non déterminé**
   (décision direction 2026-06-22). 30 lignes de la base sont sur une niche qu'on ne
   prospecte pas.

3. **Le rétroplanning est dépassé.** `RETROPLANNING-LANCEMENT.md` fixait J0 (1er contrat MB
   signé) à la semaine du 17 août 2026. On est le 28 août. Rien n'indique dans le dépôt
   qu'une campagne cold soit partie. Le plan proposé ne mentionne ni Emelia, ni la chauffe
   des domaines, ni les séquences déjà écrites — il ignore le chemin critique identifié
   il y a deux mois.

---

## 2. Ce qui est juste dans le plan proposé — à garder

| Point | Verdict | Commentaire |
|---|---|---|
| **Le compte est l'unité de prospection, la personne s'y rattache** | ✅ **Juste et important** | C'est exactement ce qui manque au CRM actuel : il n'a **aucun champ décideur structuré** (`id, nom, structure, niche, canal, statut, dateContact, email, tel, score, notes`). Tous les noms de décideurs sont noyés dans le champ `notes` en texte libre — donc infiltrables, non triables, non exportables vers Emelia. |
| **Commencer par un seul segment** | ✅ **Juste** | Cohérent avec le GTM MB-first et avec la taille de l'équipe (1 salariée + le fondateur). |
| **L'objectif initial n'est pas « des RDV » mais un volume d'activité mesurable** | ✅ **Juste** | Mais à chiffrer à rebours du point mort, pas au doigt mouillé (§4). |
| **Sales Navigator ne donne pas les numéros — il faut une étape d'enrichissement** | ✅ **Juste** | Avec une réserve majeure sur l'outil proposé (§3.4). |
| **ESN/MSP plutôt que les éditeurs SaaS pour démarrer** | ✅ **Juste — et déjà confirmé par le terrain** | L'argument (les éditeurs < 50 font faire le N1 par les devs ou le CS) est bon. Et il est corroboré par la base : **58 ESN/MSP qualifiées avec signaux vs 15 éditeurs**, dont plusieurs (Pennylane, Skello, Septeo) explicitement notés « forte capacité à internaliser » ou « cycle long ». ⚠️ **Mais c'est une décision de direction**, pas un arbitrage d'exécution : l'ordre officiel des niches (2026-06-22) place le support N1 SaaS en n°1 et le helpdesk ESN/MSP en n°2. Voir §6. |

---

## 3. Ce qui est faux ou dangereux — à corriger

### 3.1 ❌ « Construire une première liste de comptes » n'est pas la première étape

Elle est faite. La bonne première étape est : **résoudre les 42 comptes « décideur à
identifier » et déclencher les premiers appels sur les 24 comptes déjà nominatifs.**
C'est précisément ce que Sales Navigator sait faire le mieux — et ce n'est pas pour ça
que le plan proposé l'utilise.

### 3.2 ❌ « Pas de CRM, Excel suffit » — mauvais diagnostic, et risqué ici

La critique implicite (« le CRM actuel ne fait pas le job ») est **juste**. La conclusion
(« donc Excel ») est **fausse**, pour trois raisons :

- **Le CRM maison n'est pas un CRM.** C'est un fichier HTML qui stocke tout dans le
  `localStorage` du navigateur : non partagé entre le fondateur et Vololona, non sauvegardé,
  perdu au vidage du cache. La preuve est faite (§1, anomalie 1) : **60 comptes ont déjà
  disparu du dépôt.**
- **Excel a exactement les mêmes défauts**, plus quelques-uns : fichier local ou pièce
  jointe qui se duplique, aucune relation compte ↔ contact (les deux onglets ne sont reliés
  par rien), pas de vue partagée, pas d'historique, pas de filtre « à rappeler aujourd'hui ».
  Sur 2 personnes qui travaillent les mêmes comptes, ça casse en trois semaines.
- **Le dépôt contient déjà la règle d'arbitrage et la réponse.** `CLAUDE.md` : « le réflexe
  par défaut est d'acheter, pas de construire ». Et **Airtable est déjà en place** dans
  l'entreprise (base « Vivier Salverys », 14 candidats, utilisée depuis juin). Coût marginal
  d'une base de prospection : **zéro**.

→ **Décision appliquée : Airtable.** Base « Prospection Salverys » créée le 2026-08-28,
2 tables liées, 75 comptes + 41 contacts déjà chargés (§5).

### 3.3 ❌ Le parcours en 10 étapes est un programme de formation, pas un plan de vente

Les étapes 1 à 4 (« comprendre l'outil », « définir les ICP », « créer les recherches »,
« construire les listes ») sont déjà couvertes par `IDEAL-CUSTOMER-PROFILE.md`,
`ESN-TARGETS.md`, `SAAS-SUPPORT-TARGETS.md`, `TELESEC-TARGETS.md`. On entre au **niveau 5**
(identifier les décideurs) et on va directement au **9** (prospecter). Le playbook réécrit
part de là.

### 3.4 ❌ Kaspr : à écarter par défaut — sanction CNIL de 240 000 €

Le plan cite « Kaspr, Lusha ou Datagma » sans distinction. Or **la CNIL a sanctionné Kaspr
d'une amende de 240 000 € le 5 décembre 2024** pour avoir aspiré les coordonnées de profils
LinkedIn dont la visibilité avait été restreinte par leurs titulaires, et lui a enjoint de
cesser cette collecte et de supprimer les données concernées.

Pour Salverys, ce n'est pas un détail de conformité, c'est un **risque commercial direct** :
on vend à des donneurs d'ordre (dont du médical) un argumentaire fondé sur la rigueur RGPD
(`CONFORMITE-HDS-RGPD.md`, DPA, art. 28/46). Se faire répondre en rendez-vous « vous avez eu
mon portable comment ? » détruit l'argument avant même de l'avoir déroulé.

**Correction :** voir la pile d'enrichissement du playbook (§ Enrichissement) — email par
Dropcontact (français, ne revend pas de base), téléphone par **le standard de l'entreprise**,
qui répond dans 100 % des structures de 20-150 personnes visées. Et **31 comptes de la base
ont déjà un numéro de standard**, pour zéro appel passé : le numéro direct n'est pas le
goulot d'étranglement.

### 3.5 ❌ « 50 comptes, 100-150 contacts » est sous-dimensionné

Le calcul à rebours du point mort (§4) donne **~210 comptes travaillés** pour 3 contrats MB.
50 comptes, c'est le volume d'une semaine et demie de travail, pas d'un objectif trimestriel.

### 3.6 ⚠️ Trois angles morts

- **Emelia et la délivrabilité** ne sont pas mentionnés. C'est pourtant le chemin critique
  identifié depuis juin (`RETROPLANNING-LANCEMENT.md` T1) : deux domaines chauffés, séquences
  écrites, mais campagne jamais lancée. Un plan de prospection qui ignore le canal email de
  l'entreprise n'est pas un plan.
- **Qui exécute ?** Le plan est écrit au « tu ». L'entreprise a **1 salariée** (Vololona,
  développement commercial) et **1 fondateur non rémunéré**. Chaque étape doit être assignée,
  sinon tout retombe sur le fondateur qui a déjà l'infra, le juridique et le recrutement.
- **Le filtre disqualifiant propre à Salverys est absent :** une ESN qui a déjà une filiale
  à Tunis, Casablanca, Maurice ou Bangalore est une porte fermée (`ESN-TARGETS.md`
  §disqualification), tout comme un discours « souveraineté / 100 % France » frontal.
  Sales Navigator sait justement le détecter (répartition des effectifs par pays) — c'est
  intégré au playbook.

### 3.7 ⚠️ Le scoring HOT / WARM / NURTURE est un 3e système qui s'empile

Il existe déjà : (a) les scores /100 du CRM, (b) la grille des 7 questions de
`IDEAL-CUSTOMER-PROFILE.md`. En ajouter un troisième non relié crée trois vérités.
Le playbook les **réconcilie** : la grille des 7 questions reste le juge, le score /100
devient la note, HOT/WARM/NURTURE devient l'étiquette d'action qui en découle.

---

## 4. Le chiffrage qui manquait

**À rebours du point mort** (`FINANCE-PREVISIONNEL.md` §4 : **2 à 6 ETP placés selon le
palier**, soit 4 000 à 8 100 € de CA mensuel ; un contrat MB place 2 à 5 ETP) :

| Étage du tunnel | Taux retenu (hypothèse) | Volume nécessaire |
|---|---|---|
| Contrats MB signés | — | **3** (2 suffisent au point mort, 3 donne de la marge) |
| Propositions envoyées | 30 % → signature | **10** |
| RDV de découverte | 45 % → proposition | **22** |
| Conversations décideur | 30 % → RDV | **74** |
| Comptes réellement travaillés | 35 % → conversation | **~210** |

**Conséquence : il manque ~135 comptes** (75 en base aujourd'hui). La construction de liste
n'est donc pas inutile — elle est **le chantier de fond parallèle**, pas le point de départ.
On travaille les 75 existants pendant qu'on complète la liste.

> Ces taux sont des **hypothèses de départ, pas des mesures**. Les trois premières semaines
> servent à les remplacer par les vrais chiffres. Les seuils d'alerte sont dans le playbook.

---

## 5. Ce qui a été mis en place le 2026-08-28

- **Base Airtable « Prospection Salverys »** (workspace existant), 2 tables liées :
  - **Comptes** — 75 comptes MB France chargés (58 ESN/MSP · 15 éditeurs SaaS/support ·
    3 télésec MB donneurs d'ordre), avec segment, effectif (tranches alignées sur les
    filtres Sales Navigator), score, priorité, type de signal, **champ « Offshore existant »**
    (le filtre disqualifiant), statut, propriétaire, prochaine action + date, ID CRM d'origine.
  - **Contacts** — 41 décideurs et sponsors déjà connus, rattachés à leur compte, avec rôle
    (Décideur / Sponsor / Introducteur), confiance de l'email, type de numéro et
    **source des coordonnées** (traçabilité RGPD art. 14).
- **Sauvegarde dans le dépôt** : `exports/PROSPECTION-comptes-MB-France.csv` — les 75 comptes
  avec leurs notes complètes, réimportables. Plus de dépendance au `localStorage`.
- **Playbook opérationnel** : `PLAYBOOK-SALES-NAVIGATOR.md` — recherches Sales Navigator
  prêtes à copier, mécanique d'alertes, grille de score, cadence hebdomadaire, KPI.

---

## 6. La seule décision qui reste à prendre (direction)

**Faut-il inverser l'ordre des niches IT ?**

L'ordre officiel (2026-06-22) est : 1) Support N1 éditeurs SaaS · 2) Helpdesk IT ESN/MSP.
Le terrain et l'analyse auditée disent l'inverse : les ESN/MSP achètent plus vite, la base
en contient 4 fois plus, et plusieurs éditeurs cibles sont notés « capacité à internaliser ».

Deux options propres :

- **(A) Inverser officiellement** : ESN/MSP devient la niche n°1, éditeurs SaaS n°2. Il faut
  alors mettre à jour `CLAUDE.md`, `IDEAL-CUSTOMER-PROFILE.md` et `RETROPLANNING-LANCEMENT.md`.
- **(B) Garder l'ordre, changer la séquence d'attaque** : le support N1 SaaS reste la niche
  stratégique n°1, mais **on démarre l'exécution sur les ESN/MSP** parce que le cycle y est
  plus court et que la matière est prête. Aucun document à changer.

**Recommandation : (B).** Elle ne coûte rien, elle est réversible, et elle ne fige pas une
décision de positionnement sur la base de 6 semaines d'exécution qui n'ont pas encore eu lieu.
Le playbook est écrit dans cette hypothèse.
