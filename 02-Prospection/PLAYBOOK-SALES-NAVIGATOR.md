# Playbook de prospection Salverys — mode solo

> **Créé le 2026-08-28**, réécrit le jour même après trois décisions de direction :
> **(1)** ordre des niches IT inversé — **Helpdesk IT N1 ESN/MSP passe n°1**, Support N1 SaaS n°2 ;
> **(2)** **fin du poste de développement commercial le 2026-08-27** — le fondateur prospecte seul ;
> **(3)** **Emelia non souscrit et volontairement reporté** — pas d'envoi automatisé.
>
> Remplace le « parcours d'apprentissage en 10 étapes » audité dans
> `AUDIT-PARCOURS-SALES-NAVIGATOR.md`. Point de départ réel : **75 comptes MB France déjà
> qualifiés, 0 contacté, 42 sans décideur nommé.**
>
> Source de vérité opérationnelle : **base Airtable « Prospection Salverys »**.
> Prix : `PRICING.md`. Cibles : `IDEAL-CUSTOMER-PROFILE.md`. Textes email :
> `OUTREACH-IT-N1-marque-blanche.md`. Scripts d'appel : `SCRIPTS-APPEL.md`.

---

## 0. À faire d'abord — clôture du poste commercial

Le contrat a pris fin le 2026-08-27. Avant toute reprise de prospection, fermer proprement :

- [ ] **Révoquer les accès** : Airtable (base Vivier **et** base Prospection), Google
      Workspace, page LinkedIn entreprise (rôle administrateur), OneDrive / dossiers
      partagés, tout accès au site ou à l'hébergement.
- [ ] **Boîte mail sur un domaine cold** : si une adresse `prenom@salverys-bpo.fr` ou
      `@salverys-groupe.fr` était à son nom, **arrêter de l'utiliser comme expéditeur**.
      ⚠️ Décision à prendre : c'est une boîte **chauffée**, donc un actif. Soit on la garde
      active en redirection sans jamais l'utiliser en prospection, soit on la ferme et on
      accepte de perdre sa réputation. Ne pas prospecter sous l'identité d'une personne
      partie — c'est un signal de spam et une faute vis-à-vis d'elle.
- [ ] **Confirmer par écrit** que l'engagement de confidentialité survit à la fin du
      contrat (`07-Recrutement-Vivier/NDA-CONSULTANT-VIV0010-Randrianasinoro.md`).
- [ ] **Récupérer les travaux en cours** (listes, notes, comptes contactés) et les verser
      dans Airtable — s'il existe des échanges entamés avec des prospects, ils doivent
      apparaître dans la base, sinon on rappellera à froid quelqu'un qui a déjà été contacté.
- [ ] **Vivier** : la fiche VIV-0010 est passée en « clôturé — ne pas relancer ».

---

## 1. La contrainte qui commande tout le reste

**Une personne, non rémunérée, qui porte aussi le juridique, le recrutement,
l'infrastructure et la future delivery.** Le budget réaliste de prospection est de
**2 heures par jour ouvré, soit ~10 h/semaine**. Tout plan qui suppose davantage est faux.

Deux conséquences, et elles vont dans des directions opposées :

**La bonne nouvelle — il n'y a plus d'horloge.** Sans salaire à payer et sans Emelia, le
burn est tombé à **~65 €/mois** (`FINANCE-PREVISIONNEL.md` §2.b) et le point mort à
**1-2 ETP placés** au lieu de 2-6 (§4). Concrètement : **un seul contrat marque blanche de
2 positions met la structure à l'équilibre.** On n'est plus obligé de courir.

**La mauvaise — le volume est mort.** L'entonnoir calculé pour une commerciale à temps
plein (210 comptes travaillés) demanderait 6 mois en solo. **Donc on change de levier : on
ne joue plus le volume, on joue le taux de transformation.** Moins de comptes, préparés à
fond, attaqués par téléphone, dirigeant à dirigeant.

C'est possible **parce que** le point mort a baissé : viser 1 contrat au lieu de 3 change
complètement le dimensionnement.

### L'entonnoir réaliste en solo

| Étage | Hypothèse | Volume |
|---|---|---|
| Comptes travaillés en profondeur | 8-10/semaine sur 12 semaines | **~45** |
| Conversations décideur | 55 % *(décideur nommé + préparation forte + structures où le dirigeant décide)* | **~25** |
| Rendez-vous de découverte | 35 % | **~9** |
| Propositions | 50 % | **~4** |
| **Contrats MB signés** | 35 % | **1 à 2** |

**1 à 2 contrats = le point mort.** C'est l'objectif du trimestre, il est atteignable seul,
et il ne l'était pas avec l'ancien socle de charges.

> Le taux de 55 % en conversation décideur n'est pas celui d'une campagne de masse : il
> suppose qu'on n'attaque **que** des comptes dont le décideur est nommé, dont le signal est
> daté, et qu'on appelle 3 fois sur des créneaux différents. Si on retombe à 35 %, il faut
> 70 comptes au lieu de 45 — soit 5 semaines de plus. C'est le prix de la dispersion.

---

## 2. Où l'ordre des niches change quelque chose

Décision du 2026-08-28 : **Helpdesk IT N1 ESN/MSP n°1**, Support N1 SaaS n°2, médical n°3.

Ce que ça change dans l'exécution :

- **La vague 1 est 100 % ESN/MSP.** Sur 45 comptes visés, la base en contient 58 — il y a
  de quoi faire sans jamais toucher aux éditeurs.
- **Les MSP régionaux de 11-50 personnes redeviennent des cibles rentables.** Avec un point
  mort à 1-2 ETP, un contrat de 2 positions suffit. Ces structures ont un dirigeant
  accessible qui décide seul : c'est le profil le plus court à closer pour un fondateur seul.
- **Les éditeurs SaaS passent en vague 2**, sauf les 2-3 déjà mûrs (Axonaut, Sellsy).
- **Le médical MB (Callmed, Thelem, Vocallz) reste en réserve** : 3 comptes, très bien
  qualifiés, à sortir si la vague 1 cale.

### La vague 1 est déjà constituée dans Airtable (champ `Vague`)

**20 comptes ESN/MSP**, choisis sur trois critères — décideur nommé ou trouvable, structure
où le dirigeant décide, signal exploitable :

| # | Compte | Score | Pourquoi dans la vague 1 |
|---|---|---|---|
| 1 | **NowServiceDesk** | 80 | Vend déjà du service desk en marque blanche — leur proposer d'être la couche humaine derrière |
| 2 | **Metaline IT** | 78 | 75+ offres helpdesk actives, DG Ops nommé avec email, aucune filiale offshore |
| 3 | **Kincy** | 75 | 65 pers., Président nommé, déjà à l'aise avec le travail distant (Papeete) |
| 4 | **Infodis / Tenexa** | 74 | DG arrivé en février = fenêtre d'écoute, 18 offres helpdesk, « made in France » sans offshore |
| 5 | **Apixit** | 72 | Décideur support identifié (pas le Président), centre 24/7, recrute un SDM |
| 6 | **Oxxodata** | 71 | Micro-structure qui vend déjà du helpdesk MB : décision en un appel |
| 7 | **Izencia** | 68 | Même métier que nous (mise à disposition de techniciens) — comprend l'offre en 30 secondes |
| 8 | **Actual Systèmes** | 68 | Vend du MSP en marque blanche aux ESN : 1 deal = tout leur portefeuille |
| 9 | **ReeVo France** | 65 | Stratégie 100 % indirecte, 20-25 partenaires MSP visés |
| 10 | **Quodagis** | 62 | Cœur de métier = service desk, centre nearshore assumé, Président nommé |
| 11 | **ComputerLand** | 58 | MSP PME 30 ans, structure < 100 → le dirigeant décide |
| 12 | **Infiny Link** | 58 | 24/7 affiché avec un effectif PME, deux cofondateurs nommés |
| 13 | **IT Partner** | 56 | Président nommé, 3 000 postes gérés, LinkedIn-first |
| 14 | **Partner Proximity** | 55 | Vend du helpdesk MB aux ESN — profil partenaire |
| 15 | **Naitways** | 50 | Cofondateurs nommés, PE au capital ⚠️ cadrer le discours souveraineté |
| 16 | **Quietic** | 48 | MSP régional, dirigeant seul décideur, cycle court |
| 17 | **CLEV'IT** | 48 | Modèle **co-managé** = celui où un N1 externe s'insère sans friction |
| 18 | **Itak-IT** | 42 | Dirigeant nommé, forfait 29,90 €/poste qui sature vite |
| 19 | **Value IT** | 42 | Dirigeant nommé, 5 implantations = support étiré |
| 20 | **Next2i** | 40 | Président nommé, 24/7 affiché avec 50 personnes seulement |

**Écartés du plan** (champ `Vague` = *Hors plan*) : **Nowteam** (même groupe que
NowServiceDesk — une seule approche groupe), **ES Protect** (média, pas prestataire),
**Alteo** (agence web, requalifié), **Edeal IT** (3-5 personnes réelles).

**Volontairement en vague 2 malgré un bon score** : Cyllene, Constellation, Ozitem,
Helpline — structures de 250 à 2 500 personnes où il faut d'abord trouver le Directeur
Delivery, puis convaincre un sponsor. Excellents comptes, **mauvais premiers comptes pour
un fondateur seul** (§6).

---

## 3. À quoi sert Sales Navigator ici

Pas à fabriquer des listes — elles existent. À trois choses :

1. **Résoudre les décideurs manquants** (42 comptes). Sans nom, ni email ni appel ne partent.
2. **Poser des alertes sur les comptes qualifiés.** Une offre d'emploi « technicien support
   N1 » publiée par une des 75 cibles = un déclencheur factuel, daté, utilisable le jour même.
   **C'est le meilleur usage de l'abonnement en solo** : l'outil travaille pendant que le
   fondateur fait autre chose.
3. **Compléter la liste** — chantier de fond, jamais prioritaire sur (1) et (2).

**Règle : on ne cherche pas de nouveaux comptes tant que les comptes ESN/MSP existants
n'ont pas tous un décideur nommé.**

---

## 4. Le système d'information

| Contenu | Où |
|---|---|
| Comptes, contacts, statuts, prochaines actions | **Airtable « Prospection Salverys »** |
| Sauvegarde froide | `exports/PROSPECTION-comptes-MB-France.csv` (git) |
| Intelligence marché, angles | `03-Cibles-Prospects/*.md` |
| Envoi email | **Manuel**, boîtes GWS (voir §8) — Emelia reporté |

> ⚠️ Les CRM HTML (`CRM_Salverys*.html`) sont **hors production** : stockage `localStorage`,
> non partagé, non sauvegardé — 60 comptes y ont déjà été perdus (`AUDIT` §1).

**Table Comptes** (75) : `Compte · Segment · Effectif · Ville · Site web · LinkedIn société ·
Score · Priorité · Type de signal · Signal · Offshore existant · Statut compte ·
Propriétaire · Prochaine action · Date prochaine action · Téléphone standard · Email société ·
ID CRM · Source · Notes`

**Table Contacts** (41) : `Nom · Compte · Fonction · Rôle · LinkedIn · Email · Confiance
email · Téléphone · Type de numéro · Source coordonnées · Statut · Tentatives d'appel ·
Dernier contact · Résultat · Prochaine action · Date prochaine action`

**Règle d'or : jamais un contact sans compte.**

### Les 5 vues à créer (5 minutes)

| Vue | Table | Filtre | Sert à |
|---|---|---|---|
| **🎯 Aujourd'hui** | Comptes | `Date prochaine action` ≤ aujourd'hui | La seule vue ouverte le matin |
| **🔍 Décideur à identifier** | Comptes | `Statut` = Décideur à identifier, trié par Score ↓ | La file Sales Navigator |
| **📞 À rappeler** | Contacts | `Statut` = Appelé — pas joint ET `Tentatives` < 3 | La session d'appels |
| **⛔ Exclus** | Comptes | `Priorité` = EXCLU OU `Offshore` = Oui | Ne jamais y revenir par erreur |
| **📊 Pipeline** | Comptes | Groupé par `Statut compte` | La revue du vendredi |

En solo, **la vue « Aujourd'hui » est le poste de pilotage**. Si une action n'a pas de date,
elle n'existe pas — il n'y a plus personne pour se la rappeler mutuellement.

---

## 5. Les recherches Sales Navigator à créer

### Recherche A — ESN / MSP France, signal RH *(la principale, niche n°1)*

**Type : Comptes**

| Filtre | Valeur |
|---|---|
| Secteur | Services et conseil en informatique *(IT Services and IT Consulting)* |
| Effectif | 51-200 · 201-500 |
| Siège social | France |
| Postes à pourvoir | **Recrute sur LinkedIn** *(Hiring on LinkedIn)* |
| Croissance de l'effectif du département | Assistance / Support ≥ 10 % |

→ **« ESN-MSP FR 50-500 · signal RH »**

### Recherche B — MSP régionaux 11-50 *(promue : cibles rentables depuis la baisse du point mort)*

Même secteur, **effectif 11-50**, siège France, **hors Île-de-France** (Lyon, Nantes, Lille,
Bordeaux, Rennes, Strasbourg, Aix-Marseille, Toulouse). Pas de filtre recrutement : à cette
taille ils ne publient pas. Le signal se lit sur leur site (24/7 affiché, astreinte, support
illimité forfaitaire).

→ **« MSP régionaux FR 11-50 »** — dirigeant accessible, décision rapide, 1-2 ETP suffisent
désormais à être rentable.

### Recherche C — Décideurs dans mes comptes *(la plus utile au quotidien)*

**Type : Prospects (Leads)**, lancée **depuis la liste de comptes**, jamais dans le vide.

| Filtre | Valeur |
|---|---|
| Liste de comptes | *Comptes Salverys MB* |
| Fonction | Assistance · Opérations · Service client |
| Niveau hiérarchique | Propriétaire · CXO · Vice-président · Directeur · Manager |
| Mots-clés intitulé | `"Directeur Delivery" OR "Directeur des opérations" OR "Responsable centre de services" OR "Service Delivery Manager" OR "Responsable support" OR "Head of Support" OR "Responsable relation client"` |

**Filtre bonus une fois sur deux :** *A changé de poste au cours des 90 derniers jours* —
la meilleure fenêtre d'écoute qui existe (cas Tenexa / Eric Forestier, DG depuis février).

### Recherche D — Éditeurs SaaS *(niche n°2, vague 2)*

Secteur **Développement de logiciels**, effectif 51-200 / 201-500, France, recrute sur
LinkedIn. Puis filtrer à la main : ne garder que ceux dont les offres portent sur
*support client, chargé de support, customer care*. Un éditeur qui recrute 12 devs et zéro
support n'a pas notre douleur.

### Recherche E — Télésecrétariats médicaux *(niche n°3, réserve)*

France · 11-50 / 51-200 · mot-clé `télésecrétariat OR "permanence téléphonique" OR
"secrétariat médical"`.

---

## 6. La règle du bon interlocuteur

| Taille du compte | Premier contact | Le patron devient… |
|---|---|---|
| 2-20 personnes | **Fondateur / Président** | …le contact, il fait tout |
| 20-100 personnes | **Fondateur / DG** | …le contact, proche des opérations |
| 100-600 personnes | **Directeur Delivery · DG Ops · Resp. Centre de Services** | …**un sponsor**, jamais le premier contact |
| 600+ personnes | **Directeur Delivery · COO** | …hors sujet, trop loin du helpdesk |

> **En solo, ce tableau devient un critère de priorisation, pas seulement de ciblage.**
> Un compte de 20-100 personnes où le dirigeant décide seul coûte 3 appels ; un compte de
> 450 personnes où il faut d'abord trouver le Directeur Delivery, puis convaincre le
> sponsor, coûte 3 mois. **Traiter les petites structures d'abord** — Cyllene, Constellation,
> Septeo et Helpline restent en base, mais après.

---

## 7. L'externalisation déjà en place : quatre cas, pas un filtre

> ⚠️ **Corrigé le 2026-08-28.** Ce paragraphe traitait auparavant tout offshore existant
> comme disqualifiant. C'était faux, et le dépôt le savait déjà : `TELESEC-TARGETS.md`
> pose depuis juin la bonne doctrine — *« si la réponse est oui, l'angle est la qualité et
> la redondance, pas la découverte »*. Elle n'avait simplement jamais été portée sur l'IT.

**Un prospect qui externalise déjà son N1 n'est pas un prospect perdu : c'est le mieux
qualifié de la base.** Le make-or-buy est tranché, la ligne budgétaire existe, la peur de
l'offshore est passée, et il sait exactement ce qui ne va pas chez son prestataire actuel.
Le travail n'est plus de convaincre d'externaliser — il est de **prendre la place**.

Ce qui compte, c'est de distinguer **qui** opère aujourd'hui :

| Cas | Ce que ça veut dire | Ce qu'on fait |
|---|---|---|
| **Sous-traitant tiers** *(un BPO comme nous)* | Acheteur formé, budget existant, coût de sortie = un préavis | 🟢 **Cible n°1.** Jeu de déplacement : qualité, SLA, continuité, RGPD. Le prix n'est plus l'argument, il est le point d'entrée |
| **Aucune — 100 % interne** | Le besoin n'est peut-être pas conscientisé | 🔵 Pitch de découverte classique : capacité sans CapEx, coût vs recrutement France |
| **Filiale propre (captive)** | Ils ont investi capex, effectifs et management dans leur propre plateau | 🟠 **Cycle long, pas porte fermée.** Nous remplacer signifierait licencier leurs salariés, souvent devant celui qui a monté la filiale. Ne pas prioriser — **mais appeler quand même** : personne ne connaît mieux le coût réel d'un plateau |
| **Vend déjà en marque blanche** | Oxxodata, NowServiceDesk, Actual Systèmes, Partner Proximity, NeoOne | 🟣 **Partenaire, pas cible.** On ne leur vend pas de la sous-traitance : on leur propose d'être la couche humaine derrière leur offre |

**Comment le voir en 30 secondes sur Sales Navigator :** fiche du compte →
**Informations sur l'entreprise** → **Répartition des effectifs par région / pays**.
Chercher Tunisie, Maroc, Maurice, Sénégal, Madagascar, Inde, Roumanie, Portugal, et les
entités liées (« Groupe X Tunisie »). ⚠️ Attention : cela ne détecte que la **filiale
propre**. Un sous-traitant tiers est invisible sur LinkedIn — **il ne se découvre qu'au
téléphone**, ce qui est une raison de plus d'appeler avant de trancher.

Renseigner **Externalisation N1 en place** et, dès qu'on sait quelque chose,
**Prestataire actuel & échéance**. La date de fin ou de préavis du contrat est **le seul
vrai déclencheur** d'un deal de déplacement : sans elle, on ne sait pas si on prépare un
closing à 2 mois ou à 14.

**Signal jumeau :** un discours frontal « 100 % français / souveraineté numérique »
(Naitways, Groupe Asten) n'est pas éliminatoire mais impose de préparer la réponse RGPD
art. 46 **avant** l'appel.

> **Ce qui reste vraiment disqualifiant**, et c'est une liste courte : la clientèle finale
> non francophone, le donneur d'ordre pur low-cost dont le prix de vente passe sous notre
> plancher, et l'appel d'offres public récemment attribué. Un prestataire déjà en place
> n'en fait pas partie.

### Le compte satisfait de son prestataire : on apprend, on ne force pas

Le cas le plus fréquent parmi ceux qui externalisent déjà. Il ne se vend pas aujourd'hui —
**il se mesure**, et il donne trois choses qu'on n'a nulle part ailleurs : le standard de
qualité à égaler, la fourchette de prix réelle du marché, et la raison qui le ferait
changer un jour.

C'est aussi le seul moyen de combler le trou de données qui empêche de se positionner face
à un prospect qui n'a jamais externalisé : **ce qu'une ESN française paie réellement son
sous-traitant N1 n'est ni publié ni achetable.** Protocole complet, message de prise de
contact et questions : **`BAROMETRE-EXTERNALISATION-N1.md`**.

La sortie d'un compte satisfait n'est jamais une relance : c'est un **rappel daté deux mois
avant l'échéance de son contrat**, à poser dans `Prochaine action`.

---

## 8. L'email sans Emelia

**Décision 2026-08-28 : abonnement Emelia reporté.** Raisons :

- L'outil sert le **volume** ; la contrainte est le **temps du fondateur**. Or les séquences
  exigent un déclencheur factuel recherché par prospect (2-3 min) : le volume personnalisé
  réellement produisible seul est de **10-20 emails/jour**, pas 200.
- Souscrire coûterait **3-4 semaines** (abonnement + configuration des domaines + chauffe
  intégrée) avant le premier envoi, plus un abonnement mensuel — pour une capacité dont on
  n'a pas l'usage.
- Le canal qui convertit le mieux sur des structures de 20-150 personnes est **le téléphone**,
  et **31 comptes ont déjà un numéro de standard en base**, pour zéro appel passé.

**Souscrire Emelia dès que l'une de ces conditions est vraie :** un deuxième opérateur
commercial existe, ou le besoin dépasse durablement 20 emails/jour.

### En attendant : envoi manuel depuis les boîtes GWS

- ⚠️ **Re-chauffe préalable obligatoire.** La chauffe manuelle s'est arrêtée mi-juillet ; une
  boîte chauffée puis laissée inactive perd sa réputation. **Deux semaines à 5-10 mails/jour**
  (dont des échanges réels avec réponses) avant de monter à 15-20. Procédure :
  `06-Warmup-Email/WARMUP-MANUEL.md`.
- **Texte brut, zéro lien, zéro image, < 100 mots.** Les textes de
  `OUTREACH-IT-N1-marque-blanche.md` s'utilisent tels quels — seul le mode d'envoi change.
- **Vérifier l'adresse avant d'envoyer.** Sans outil, un bounce n'est pas rattrapé
  automatiquement : ne jamais envoyer à une adresse devinée depuis la boîte principale.
  Les emails « à vérifier » de la base (Vocallz, Libeo, Sarbacane, Thelem) sont des
  hypothèses de pattern, pas des adresses confirmées.
- **Les relances vivent dans Airtable**, pas dans l'outil : `Prochaine action` + date sur
  chaque contact. C'est le seul filet de sécurité quand personne ne suit le pipeline à votre place.

---

## 9. Enrichissement des coordonnées — la pile conforme

Sales Navigator ne donne ni email ni numéro. **Kaspr est à écarter** : la CNIL l'a
sanctionné de **240 000 €** le 5 décembre 2024 pour aspiration de coordonnées LinkedIn à
visibilité restreinte, avec injonction de cesser et de supprimer. Vendre de la conformité
RGPD avec des données de cette provenance est intenable en rendez-vous.

| Besoin | Méthode |
|---|---|
| **Téléphone** | **Le standard**, déjà en base sur 31 comptes, + `pappers.fr` / `annuaire-entreprises`. Sur 20-150 personnes, le standard répond et passe. Script de passage du barrage : `SCRIPTS-APPEL.md` |
| **Email nominatif** | **Dropcontact** (français, RGPD-by-design, ne revend pas de base) si un outil devient nécessaire — sinon, pattern du domaine vérifié à la main |
| Mobile direct | Lusha ou Cognism, jamais Kaspr — et renseigner `Source coordonnées` |

**Deux obligations :** mention d'information RGPD (art. 14) dans la signature, et
possibilité de s'opposer. Le champ `Source coordonnées` existe pour pouvoir répondre à
« vous avez eu mon numéro comment ? ».

---

## 10. Priorité : un seul système

- **La grille des 7 questions de `IDEAL-CUSTOMER-PROFILE.md` reste le juge** — dont la Q7
  (sous-traitance autorisée, art. 28 §2, et clause de localisation UE/EEE), à poser au
  premier échange.
- **Le score /100 reste la note.**
- **La priorité est l'étiquette d'action :**

| Priorité | Condition | Traitement en solo |
|---|---|---|
| **HOT** | Score ≥ 70 **ou** signal de moins de 30 jours | Dans la vague en cours, appel sous 5 jours |
| **WARM** | Score 55-69, signal tiède | Vague suivante |
| **NURTURE** | Score < 55 ou aucun signal | **Ne pas travailler.** Alerte Sales Navigator posée, on attend le signal |
| **EXCLU** | Clientèle non francophone · hors cible après requalification · prix plancher impossible | Ne jamais recontacter |

> En solo, **NURTURE veut vraiment dire « ne rien faire »**. C'est le seul moyen de tenir
> 45 comptes bien travaillés au lieu de 150 mal travaillés.

---

## 11. Les alertes : l'outil qui travaille à votre place

1. Créer la liste de comptes **« Comptes Salverys MB »** et y sauvegarder les 75 comptes.
2. Vérifier que les alertes sont actives : **offres d'emploi · croissance d'effectif ·
   actualités · changements de dirigeants**.
3. **Rituel de 10 minutes, tous les matins.** Chaque alerte pertinente devient en une minute :
   `Signal` + `Type de signal` mis à jour, priorité recalculée (souvent NURTURE → HOT),
   `Prochaine action` datée du jour.

C'est ce qui transforme une base statique en flux de travail quotidien — et c'est ce que
le plan audité ne prévoyait nulle part.

---

## 12. La semaine type d'un fondateur seul

**Budget : 2 h/jour ouvré, soit ~10 h/semaine.** Horaires en heure française
(Tana = France +1 h en été, +2 h en hiver).

| Quand | Durée | Quoi |
|---|---|---|
| Tous les matins | 10 min | Revue des alertes Sales Navigator (§11) + vue « Aujourd'hui » |
| **Mardi, mercredi, jeudi — 8h30-9h30 (FR)** | 3 h/sem | **Session d'appels n°1** — avant les réunions, le dirigeant décroche |
| **Mardi, jeudi — 17h30-18h30 (FR)** | 2 h/sem | **Session d'appels n°2** — après le rush, deuxième créneau de décroché |
| Lundi | 2 h | Résolution de décideurs + typage de l'externalisation, par lot de 10 (§13) |
| Lundi + mercredi | 1 h | Emails manuels (10-20/jour max, texte brut) |
| Tous les jours | 15 min | Invitations LinkedIn ciblées avec note courte — **10/jour**, jamais de pitch |
| **Vendredi 16h** | 30 min | **Revue de pipeline** : que disent les taux réels ? |

**Objectif hebdomadaire : 8-10 comptes réellement travaillés.**
Un compte « travaillé » = décideur nommé + externalisation typée + signal daté + 1 email envoyé
+ au moins 1 appel tenté + tout consigné dans Airtable. **~45 minutes par compte.**

> **La règle qui protège le plan :** si une semaine ne permet pas 10 h de prospection,
> on réduit le nombre de comptes, **jamais la profondeur de préparation**. Un compte
> survolé est un compte perdu, et en solo on n'a pas de seconde chance dessus.

---

## 13. Résoudre un « décideur à identifier » — 6 minutes, par lot de 10

1. **(1 min)** Ouvrir la fiche compte dans Sales Navigator. Vérifier l'effectif réel et
   la présence d'une filiale propre (§7). Corriger `Effectif` dans Airtable si l'estimation était fausse (fréquent :
   Edeal IT annoncé 20-50, réel 3-5).
2. **(2 min)** Recherche C restreinte à ce compte. Appliquer la règle du §6. Prendre
   **2 personnes** : un décideur, un sponsor ou introducteur.
3. **(1 min)** Créer les contacts dans Airtable, liés au compte, `Statut = Identifié`.
4. **(1 min)** Chercher le déclencheur : onglet **Offres d'emploi** + **Actualités** de la
   fiche. Remplir `Signal` et `Type de signal`.
5. **(1 min)** Passer en `Prêt à séquencer` **seulement si** : décideur nommé **+** signal
   factuel **+** externalisation typée. Sinon le compte reste `À qualifier`.

> **Sans signal, pas de premier email.** Règle déjà posée dans
> `OUTREACH-IT-N1-marque-blanche.md` : `{{trigger_recrutement}}` est obligatoire.

---

## 14. La séquence multicanale en solo (5 touches, 3 appels)

Version resserrée de la séquence à 5 emails — elle est faite pour être tenue à la main.

```
J0   LinkedIn : invitation + note de 2 lignes (aucun pitch)
J1   Email manuel n°1 — déclencheur factuel, < 100 mots, texte brut, zéro lien
J2   Appel n°1 — 8h30-9h30 (FR), script CALL_SCRIPTS.helpdesk-n1
J5   Appel n°2 — 17h30-18h30 (FR), créneau différent
J7   Email manuel n°2 — l'angle coût (astreinte interne vs N1 marque blanche)
J10  Appel n°3 — dernier
J15  Email manuel n°3 — rupture douce, laisse la porte ouverte
```

- **3 tentatives d'appel maximum**, sur des créneaux différents. Au-delà : contact en
  `Parti / NPAI` ou compte en NURTURE avec alerte posée.
- **WhatsApp uniquement après une première réponse.**
- **Jamais de prix en cold** — la rate card MB est confidentielle (`PRICING.md` §3).
- **Ce qu'on dit du point mort : rien.** Qu'un contrat de 2 positions nous mette à
  l'équilibre est une information interne. En face, on vend un palier, pas un besoin.

---

## 15. KPI et seuils d'alerte

Relevés le vendredi, sur la vue Pipeline.

| Indicateur | Cible solo | 🚨 Seuil d'alerte → ce que ça veut dire |
|---|---|---|
| Comptes travaillés / semaine | 8-10 | **< 5** deux semaines de suite → le budget de 2 h/jour n'est pas tenu, réviser le plan plutôt que de faire semblant |
| Comptes avec décideur nommé | > 80 % | **< 60 %** → trop peu de temps sur la recherche C |
| Champ « Prestataire actuel » rempli | > 70 % des conversations | **< 40 %** → on oublie de poser la question de qualification la plus rentable de l'appel (§7) |
| Joignabilité décideur (après 3 tentatives) | 50-60 % | **< 30 %** → mauvais créneaux, ou barrage standard non traité |
| Conversation → RDV | 35 % | **< 15 %** → l'accroche téléphonique est à revoir, pas la liste |
| Bounce sur les envois manuels | 0-1 % | **le moindre bounce répété** → arrêter, vérifier les adresses à la main |
| RDV obtenus | 9 sur 12 semaines | **0 après 6 semaines** → problème d'offre ou de ciblage, pas d'effort |

> Ces cibles sont des **hypothèses**. Après trois semaines, les remplacer par les taux
> réels : c'est cette mesure qui dira si le blocage est le ciblage, l'accès au décideur,
> l'accroche, l'offre ou le closing.

---

## 16. Les 3 premières semaines

### Semaine 1 — fermer le passé, ouvrir le téléphone
- [ ] **Checklist de clôture du poste commercial** (§0) — accès, boîte cold, NDA
- [ ] Créer les 5 vues Airtable (§4) — 5 min
- [ ] Créer les recherches A, B, C + la liste « Comptes Salverys MB », activer les alertes — 1 h
- [ ] Typer l'externalisation des **20 comptes de la vague 1** (§7) — 15 min · ⚠️ LinkedIn ne montre que la filiale propre : le sous-traitant tiers se découvre au téléphone
- [ ] Résoudre les décideurs de ces 20 comptes (§13) — 2 h
- [ ] **Passer les 10 premiers appels** sur les comptes déjà nominatifs : Metaline, Kincy,
      Izencia, Oxxodata, Tenexa, Apixit, NowServiceDesk, Quodagis, Infiny Link, Next2i
- [ ] Lancer la **re-chauffe des boîtes GWS** (§8) — 5-10 mails/jour

> **Les 10 appels sont l'objectif réel de la semaine. Tout le reste est de la préparation,
> et la préparation ne signe rien.**

### Semaine 2 — installer le rythme
- [ ] 8-10 comptes travaillés, dont les premiers MSP régionaux 11-50 (recherche B)
- [ ] Deux sessions d'appels par semaine tenues sans exception
- [ ] Premiers emails manuels une fois la re-chauffe à 2 semaines
- [ ] Premier relevé partiel des KPI

### Semaine 3 — mesurer avant d'accélérer
- [ ] Relevé complet des KPI (§15) → remplacer les hypothèses par les taux réels
- [ ] Corriger le maillon le plus faible **avant** d'ajouter du volume
- [ ] Décider si les éditeurs SaaS (vague 2) entrent en semaine 5 ou plus tard

---

## 17. Ce qu'il faut savoir de l'outil

- **Sales Navigator ne lève pas le plafond d'invitations LinkedIn** (~100/semaine sur un
  compte classique). 10 invitations ciblées par jour valent mieux que le volume.
- **Les InMails sont limités** (de l'ordre de 50/mois sur l'offre Core — à vérifier dans le
  compte). À garder pour les décideurs sans email trouvable.
- **Les effectifs affichés sont déclaratifs et souvent faux** pour les PME françaises.
  Croiser avec `pappers.fr` : la taille détermine l'interlocuteur (§6), une erreur ici fait
  perdre le compte.
- **Sales Navigator ne qualifie pas.** Il donne un nom et un signal. Le prix d'achat cible,
  le volume plaçable et la question RGPD art. 28 §2 se qualifient **au téléphone**.

---

## 18. Le point de bascule à anticiper

Au premier contrat signé, le fondateur devra basculer sur l'onboarding et la delivery —
**et la prospection s'arrêtera net.** C'est le trou de pipeline classique des structures à
une personne : on signe, on livre, et six semaines plus tard il n'y a plus rien derrière.

**À décider avant la première signature, pas après** (`FINANCE-PREVISIONNEL.md` §7, risque n°0) :
- soit le **premier manager métier recruté** prend une part de la relation client et libère
  du temps commercial,
- soit un **commercial est ré-embauché** dès que le CA le finance — le poste coûte 645 €/mois
  au fixe seul, soit **moins qu'un ETP placé**.

Le second contrat ne se vend pas pendant qu'on livre le premier si personne ne s'en occupe.
