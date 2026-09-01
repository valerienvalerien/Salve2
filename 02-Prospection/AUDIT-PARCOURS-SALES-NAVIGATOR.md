# Audit — parcours de prospection Sales Navigator proposé

> **Date : 2026-08-28** · Audit d'un plan de prospection externe (parcours d'apprentissage
> Sales Navigator en 10 étapes + fichier Excel 2 onglets + démarrage mono-segment).
> Verdict global : **la méthode est saine, le point de départ est faux.**
> Le plan corrigé est dans `PLAYBOOK-SALES-NAVIGATOR.md`.
>
> **Révisé le même jour** après trois décisions de direction : inversion des niches IT
> (option A, §6), **fin du poste de développement commercial** au 2026-08-27, et **report
> de la souscription Emelia**. Les sections §3.6, §4 et §6-7 portent ces effets ; le reste
> de l'audit (constats sur la base, le CRM, Kaspr) est inchangé et reste valable.

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

- **Le canal email et la délivrabilité** ne sont pas mentionnés. C'était le chemin critique
  identifié depuis juin (`RETROPLANNING-LANCEMENT.md` T1) : deux domaines chauffés, séquences
  écrites, mais campagne jamais lancée.
  ⚠️ **Résolu autrement le 2026-08-28 : Emelia n'a jamais été souscrit et le sera plus tard.**
  Avec un seul opérateur, l'outil sert une capacité (200 envois/jour) dont on n'a pas
  l'usage — le volume réellement personnalisable seul est de 10-20 emails/jour, envoyables
  à la main depuis les boîtes GWS. La prospection passe **téléphone d'abord**.
  ⚠️ Point de vigilance créé par ce choix : la chauffe s'est arrêtée mi-juillet, **une
  re-chauffe de 2 semaines est nécessaire** avant tout envoi (`PLAYBOOK` §8).
- **Qui exécute ?** Le plan est écrit au « tu » sans jamais nommer d'exécutant.
  ⚠️ **Depuis le 2026-08-27, la réponse est : le fondateur, seul** (fin du poste de
  développement commercial). Il porte déjà l'infra, le juridique, le recrutement et la
  future delivery. **C'est la contrainte n°1 du plan corrigé** — tout dimensionnement en
  découle (§4).
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

> 🔴 **Révisé le 2026-08-28** après la fin du poste de développement commercial. Le calcul
> initial (ci-dessous en encadré) supposait une commerciale à temps plein. Les deux
> paramètres ont bougé **en sens inverse** : la capacité s'effondre, mais l'objectif aussi.

**Le point mort a été divisé par trois.** Sans salaire commercial et sans Emelia, le socle
fixe passe de 2 114 € à **~920 €** et le point mort de 2-6 ETP à **1-2 ETP placés**
(`FINANCE-PREVISIONNEL.md` §2.b et §4). **Un seul contrat MB de 2 positions met la structure
à l'équilibre** — contre 3 contrats visés auparavant.

**La capacité, elle, est tombée à ~10 h/semaine** (fondateur seul, qui porte aussi le
juridique, le recrutement et l'infra). À 45 minutes par compte correctement travaillé :
**8-10 comptes par semaine**, pas 20.

**Conséquence : on change de levier — le taux de transformation remplace le volume.**

| Étage du tunnel | Taux retenu (hypothèse) | Volume |
|---|---|---|
| Comptes travaillés en profondeur | 8-10/semaine sur 12 semaines | **~45** |
| Conversations décideur | 55 % *(décideur nommé + préparation forte + dirigeant qui décide seul)* | **~25** |
| RDV de découverte | 35 % | **~9** |
| Propositions | 50 % | **~4** |
| **Contrats MB signés** | 35 % | **1 à 2 = le point mort** |

**La construction de liste n'est plus le chantier de fond : elle est inutile à court terme.**
La base contient 58 ESN/MSP qualifiées pour 45 comptes à travailler — il y a de la matière
pour 12 semaines sans chercher un seul compte nouveau.

> <details><summary><b>Calcul initial (périmé) — pour mémoire</b></summary>
>
> Avec une commerciale à temps plein et un point mort à 2-6 ETP : 3 contrats → 10
> propositions → 22 RDV → 74 conversations → **~210 comptes travaillés**, soit ~135 comptes
> à ajouter à la base. Ce dimensionnement redeviendra le bon le jour où un commercial sera
> ré-embauché.
> </details>

> Ces taux sont des **hypothèses de départ, pas des mesures**. Les trois premières semaines
> servent à les remplacer par les vrais chiffres. Les seuils d'alerte sont dans le playbook.

---

## 5. Ce qui a été mis en place le 2026-08-28

- **Base Airtable « Prospection Salverys »** (workspace existant), 2 tables liées :
  - **Comptes** — 75 comptes MB France chargés (58 ESN/MSP · 15 éditeurs SaaS/support ·
    3 télésec MB donneurs d'ordre), avec segment, effectif (tranches alignées sur les
    filtres Sales Navigator), score, priorité, type de signal, **champ « Externalisation N1
    en place »**, statut, propriétaire, prochaine action + date, ID CRM d'origine.
    *(Ce champ s'appelait d'abord « Offshore existant » et traitait tout offshore comme
    disqualifiant — corrigé le jour même, voir §8.)*
  - **Contacts** — 41 décideurs et sponsors déjà connus, rattachés à leur compte, avec rôle
    (Décideur / Sponsor / Introducteur), confiance de l'email, type de numéro et
    **source des coordonnées** (traçabilité RGPD art. 14).
- **Sauvegarde dans le dépôt** : `exports/PROSPECTION-comptes-MB-France.csv` — les 75 comptes
  avec leurs notes complètes, réimportables. Plus de dépendance au `localStorage`.
- **Playbook opérationnel** : `PLAYBOOK-SALES-NAVIGATOR.md` — recherches Sales Navigator
  prêtes à copier, mécanique d'alertes, grille de score, cadence hebdomadaire, KPI.

---

## 6. Décision prise — inversion officielle des niches IT (2026-08-28)

**La direction a retenu l'option (A) : inversion officielle.**
**1) Helpdesk IT N1 ESN/MSP · 2) Support applicatif N1 éditeurs SaaS · 3) Télésecrétariat
médical · 4) relation client (futur non déterminé).**

Motifs retenus : cycle d'achat plus court, douleur capacitaire plus vive (tickets récurrents
+ astreintes contractuelles), et matière disponible sans commune mesure — **58 ESN/MSP
qualifiées contre 15 éditeurs**, dont plusieurs notés « forte capacité à internaliser »
(Pennylane, Skello) ou « cycle long » (Septeo, Orisha).

**Documents mis à jour en conséquence :** `CLAUDE.md` (niches + rappels clés),
`IDEAL-CUSTOMER-PROFILE.md` (§1.a / §1.b permutés), `OUTREACH-SEQUENCE.md` (ordre de
lancement), `BRANDING-Salverys.md` (architecture de marque), `MENTIONS-LEGALES.md`
(ordre des activités), `PLAYBOOK-SALES-NAVIGATOR.md` (vague 1 = 100 % ESN/MSP).

**Effet de bord favorable, à ne pas manquer :** le point mort étant retombé à 1-2 ETP (§4),
les **MSP régionaux de 11-50 personnes** deviennent des cibles rentables à part entière —
un contrat de 2 positions suffit. Ce sont aussi les structures où le dirigeant décide seul,
donc les plus courtes à closer pour un fondateur seul. Une recherche Sales Navigator leur
est dédiée (`PLAYBOOK` §5, recherche B).

---

## 7. Ce qui a changé le 2026-08-28 (récapitulatif)

| Décision | Effet principal | Documents touchés |
|---|---|---|
| **Inversion des niches IT** (option A) | Vague 1 de prospection = 100 % ESN/MSP | `CLAUDE.md`, ICP, OUTREACH-SEQUENCE, BRANDING, MENTIONS-LEGALES, PLAYBOOK |
| **Fin du poste de développement commercial** (27/08) | Burn 755 € → **65 €/mois** · point mort 2-6 ETP → **1-2 ETP** · capacité 20 → **8-10 comptes/semaine** | `CLAUDE.md`, FINANCE-PREVISIONNEL (v3.1), AUDIT-FINANCE, VIVIER-EXPORT, RETROPLANNING (caduc), PLAYBOOK, fiches HTML |
| **Emelia non souscrit, reporté** | Prospection **téléphone d'abord**, email manuel 10-20/j, re-chauffe des boîtes GWS nécessaire | `CLAUDE.md`, OUTREACH-SEQUENCE, PLAYBOOK §8 |

**Le risque à surveiller n'est plus le cash, c'est le trou de pipeline après la première
signature** — quand le fondateur basculera sur la delivery et cessera de prospecter.
Mitigation à décider *avant* de signer : `FINANCE-PREVISIONNEL.md` §7 risque n°0 et
`PLAYBOOK-SALES-NAVIGATOR.md` §18.

---

## 8. Correction apportée après coup — l'offshore n'est pas un disqualifiant

**Signalé par la direction le 2026-08-28, après la mise en production de la base.**

Le champ Airtable `Offshore existant` classait « Oui » comme disqualifiant. C'était faux,
et l'erreur venait de deux endroits :

1. **La règle source était plus étroite que ce que j'en ai fait.** `ESN-TARGETS.md` (écrit
   le 2026-05-31, avant même la décision GTM marque-blanche-first) disait « pas de **filiale
   offshore propre** ». En encodant le champ sous le nom générique « offshore existant »,
   j'ai fait tomber dans le même panier la **filiale captive** et le **sous-traitant tiers**
   — deux situations opposées.
2. **Le dépôt portait déjà la bonne doctrine, mais sur une seule niche.**
   `TELESEC-TARGETS.md` dit depuis juin : *« Avez-vous déjà un partenaire offshore ? À quel
   prix d'achat ? Si la réponse est oui, l'angle est la qualité et la redondance, pas la
   découverte. »* Elle n'avait jamais été portée sur l'IT.

**Le raisonnement qui emporte la décision :** un donneur d'ordre qui sous-traite déjà son
N1 est, littéralement, la définition de la cible marque blanche. Le make-or-buy est tranché,
la ligne budgétaire existe, la peur de l'offshore est passée, et le coût de sortie de son
contrat actuel est un préavis — pas un plan social. **C'est le profil le mieux qualifié de
toute la base.** Et même quand la vente ne se fait pas, l'appel reste la seule source
d'intelligence de première main dont on dispose sur nos concurrents et sur le prix réel du
marché — ce qui, avec zéro client, vaut cher.

**Corrections appliquées :**

| Où | Quoi |
|---|---|
| Airtable | Champ `Offshore existant` remplacé par **`Externalisation N1 en place`** à 4 cas typés (sous-traitant tiers · aucune · filiale propre · vend déjà en MB), + champ **`Prestataire actuel & échéance`** |
| `SCRIPTS-APPEL.md` | Nouveau **§4 — Appel de déplacement** : les 5 questions, l'ordre à respecter, les 3 angles, le closing pré-échéance, le piège de l'ancrage prix |
| `PLAYBOOK-SALES-NAVIGATOR.md` §7 | « Filtre disqualifiant » → **4 cas, 4 traitements** |
| `ESN-TARGETS.md` | Règle source corrigée en tête et dans les critères |
| `IDEAL-CUSTOMER-PROFILE.md` | Ligne retirée de « à ne pas viser » ; question d'externalisation généralisée aux 3 niches |

**Ce qui reste vraiment disqualifiant**, après cette correction : clientèle finale non
francophone · donneur d'ordre dont le prix de vente passe sous notre plancher · appel
d'offres public récemment attribué. La liste est courte, et c'est normal.

> **Le point de vigilance créé par cette ouverture :** un prospect qui achète déjà en
> offshore connaît le prix du marché. L'argument « -40 à -60 % vs un poste interne en
> France » ne fonctionne pas sur lui, et s'aligner sur le corridor offshore constaté
> (0,50-1 €/appel côté médical) détruirait la marge. Sur ce profil, on vend la qualité,
> la redondance et le SLA — jamais le prix.
