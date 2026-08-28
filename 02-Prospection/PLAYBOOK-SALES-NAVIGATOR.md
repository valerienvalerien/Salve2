# Playbook Sales Navigator — Salverys

> **Créé le 2026-08-28.** Remplace le « parcours d'apprentissage en 10 étapes » audité dans
> `AUDIT-PARCOURS-SALES-NAVIGATOR.md`. Écrit pour être exécuté par **Vololona (BD)** avec
> le fondateur en appui, à partir de l'état réel de la base : **75 comptes MB France déjà
> qualifiés, 0 contacté, 42 sans décideur nommé.**
>
> Source de vérité opérationnelle : **base Airtable « Prospection Salverys »**.
> Source de vérité tarifaire : `PRICING.md`. Cibles et personas : `IDEAL-CUSTOMER-PROFILE.md`.
> Séquences email : `OUTREACH-IT-N1-marque-blanche.md`. Scripts d'appel : `SCRIPTS-APPEL.md`.

---

## 1. Recadrage : à quoi sert vraiment Sales Navigator ici

L'erreur classique est de l'utiliser comme un annuaire pour fabriquer des listes.
Pour Salverys, **la liste existe déjà**. Sales Navigator sert à trois choses, dans cet ordre :

1. **Résoudre les décideurs manquants.** 42 comptes portent la mention « décideur à
   identifier ». C'est le blocage n°1 : sans nom, ni l'email ni l'appel ne partent.
2. **Poser des alertes sur les comptes déjà qualifiés.** Une offre d'emploi « technicien
   support N1 » publiée par une des 75 cibles = un déclencheur factuel, daté, exploitable
   le jour même dans `{{trigger_recrutement}}`. C'est le meilleur usage de l'abonnement.
3. **Compléter la liste** jusqu'à ~210 comptes (calcul du tunnel, `AUDIT` §4) — chantier de
   fond, en parallèle, jamais prioritaire sur (1) et (2).

**Règle : on ne cherche pas de nouveaux comptes tant que les 75 existants n'ont pas tous
un décideur nommé et un statut à jour.**

---

## 2. Le système d'information

### 2.1 Où vivent les données

| Contenu | Où | Pourquoi |
|---|---|---|
| Comptes, contacts, statuts, prochaines actions | **Airtable « Prospection Salverys »** | Partagé, sauvegardé, relationnel, exportable |
| Sauvegarde froide du fichier comptes | `exports/PROSPECTION-comptes-MB-France.csv` (dépôt git) | Ne dépend d'aucun navigateur |
| Séquences email, envois, relances | **Emelia** | Outil retenu (`CLAUDE.md`) |
| Intelligence marché, angles, fiches prospects | `03-Cibles-Prospects/*.md` | Le raisonnement, pas la donnée |

> ⚠️ **Les CRM HTML (`CRM_Salverys*.html`) sortent du circuit de production.** Ils stockent
> en `localStorage` : non partagés, non sauvegardés, et **60 comptes y ont déjà été perdus**
> (cf. `AUDIT` §1). Les conserver comme archive, ne plus y saisir.

### 2.2 Structure Airtable

**Table Comptes** (75 lignes) — l'unité de prospection.
`Compte · Segment · Effectif · Ville · Site web · LinkedIn société · Score · Priorité ·
Type de signal · Signal · Offshore existant · Statut compte · Propriétaire ·
Prochaine action · Date prochaine action · Téléphone standard · Email société · ID CRM ·
Source · Notes`

**Table Contacts** (41 lignes) — les personnes, rattachées à un compte.
`Nom · Compte · Fonction · Rôle · LinkedIn · Email · Confiance email · Téléphone ·
Type de numéro · Source coordonnées · Statut · Tentatives d'appel · Dernier contact ·
Résultat · Prochaine action · Date prochaine action`

**Règle d'or : jamais un contact sans compte.** C'est le point juste du plan audité et il
est structurellement imposé par le champ lié.

### 2.3 Les 6 vues à créer (5 minutes, dans Airtable)

| Vue | Table | Filtre | Sert à |
|---|---|---|---|
| **🎯 À travailler cette semaine** | Comptes | `Date prochaine action` ≤ aujourd'hui + 7 | La to-do du lundi |
| **🔍 Décideur à identifier** | Comptes | `Statut compte` = Décideur à identifier | La file Sales Navigator |
| **🔥 HOT prêts à séquencer** | Comptes | `Priorité` = HOT ET `Statut` = Prêt à séquencer | Ce qui part dans Emelia |
| **📞 À rappeler** | Contacts | `Statut` = Appelé — pas joint ET `Tentatives` < 5 | La session d'appels |
| **⛔ Exclus / disqualifiés** | Comptes | `Priorité` = EXCLU OU `Offshore` = Oui | Ne jamais y revenir par erreur |
| **📊 Pipeline** | Comptes | Groupé par `Statut compte` | La revue du vendredi |

---

## 3. Les 5 recherches Sales Navigator à créer

À créer une fois, à sauvegarder, à ne plus refaire. Les libellés ci-dessous sont ceux de
l'interface française ; l'anglais est indiqué quand il diffère.

### Recherche A — ESN / MSP France, signal RH (la principale)

**Type : Comptes**

| Filtre | Valeur |
|---|---|
| Secteur | Services et conseil en informatique *(IT Services and IT Consulting)* |
| Effectif de l'entreprise | 51-200 · 201-500 |
| Siège social | France |
| Postes à pourvoir | **Recrute sur LinkedIn** *(Hiring on LinkedIn)* |
| Croissance de l'effectif du département | Assistance / Support ≥ 10 % |

→ Sauvegarder sous **« ESN-MSP FR 50-500 · signal RH »**. C'est la recherche qui produit
les meilleurs comptes : la taille est bonne, la douleur est datée et publique.

### Recherche B — MSP régionaux, sous les radars

**Type : Comptes** · même secteur, **effectif 11-50**, siège France, **hors Île-de-France**
(Lyon, Nantes, Lille, Bordeaux, Rennes, Strasbourg, Aix-Marseille, Toulouse).
Pas de filtre recrutement : à cette taille, ils ne publient pas d'offres. Le signal se lit
sur leur site (offre 24/7, astreinte, support illimité forfaitaire).

→ **« MSP régionaux FR 11-50 »**. Cycle court, dirigeant accessible, volume par contrat plus
faible. Complète A.

### Recherche C — Éditeurs SaaS français avec douleur support

**Type : Comptes**

| Filtre | Valeur |
|---|---|
| Secteur | Développement de logiciels *(Software Development)* |
| Effectif | 51-200 · 201-500 |
| Siège social | France |
| Postes à pourvoir | Recrute sur LinkedIn |

Puis, sur chaque fiche, ouvrir **Offres d'emploi** et ne garder que ceux qui recrutent
sur les intitulés : *support client, chargé de support, technicien support, customer care,
service client*. Un éditeur qui recrute 12 devs et zéro support n'a pas notre douleur.

→ **« Éditeurs SaaS FR · recrute support »**.

### Recherche D — Les décideurs dans mes comptes (la plus utile)

**Type : Prospects (Leads)** — se lance **depuis une liste de comptes**, pas dans le vide.

| Filtre | Valeur |
|---|---|
| Liste de comptes | *Comptes Salverys MB* (créée en §4) |
| Fonction | Assistance · Opérations · Service client *(Support · Operations · Customer Success)* |
| Niveau hiérarchique | Propriétaire · CXO · Vice-président · Directeur · Manager |
| Mots-clés dans l'intitulé | `"Directeur Delivery" OR "Directeur des opérations" OR "Responsable centre de services" OR "Service Delivery Manager" OR "Head of Support" OR "Responsable support" OR "Responsable relation client" OR "Customer Care"` |

**Filtre bonus à activer une fois sur deux :** *A changé de poste au cours des 90 derniers
jours*. Un décideur qui vient d'arriver réexamine ses prestataires — c'est la meilleure
fenêtre d'écoute qui existe (cas Tenexa / Eric Forestier, DG depuis février 2026).

### Recherche E — Télésecrétariats médicaux (donneurs d'ordre MB)

**Type : Comptes** · Siège France · Effectif 11-50 / 51-200 · mot-clé société :
`télésecrétariat OR "permanence téléphonique" OR "secrétariat médical"`.
Niche n°2 — à lancer quand A et B tournent.

---

## 4. La règle du bon interlocuteur (à appliquer avant de sauvegarder un lead)

Reprise de `ESN-TARGETS.md` — **c'est l'erreur qui coûte le plus cher** :

| Taille du compte | Premier contact | Le patron devient… |
|---|---|---|
| 2-20 personnes | **Fondateur / Président** | …le contact, il fait tout |
| 20-100 personnes | **Fondateur / DG** | …le contact, proche des opérations |
| 100-600 personnes | **Directeur Delivery · DG Ops · Resp. Centre de Services** | …**un sponsor**, jamais le premier contact |
| 600+ personnes | **Directeur Delivery · COO** | …hors sujet, trop loin du helpdesk |

Dans la base, c'est déjà encodé : Nicolas Servage (Apixit) et Olivier Poelaert (Cyllene)
sont marqués **Sponsor** avec la mention « ne pas approcher en premier ».

---

## 5. Le filtre disqualifiant Salverys : l'offshore existant

Une ESN qui a déjà une filiale à Tunis, Casablanca, Port-Louis, Dakar ou Bangalore n'achètera
pas. Sales Navigator permet de le voir en 30 secondes :

> Fiche du compte → onglet **Informations sur l'entreprise** → **Répartition des effectifs
> par région / pays**. Chercher Tunisie, Maroc, Maurice, Sénégal, Madagascar, Inde, Roumanie,
> Portugal. Vérifier aussi les **entités liées** (« Groupe X Tunisie »).

Renseigner le champ **Offshore existant** : `Non détecté` / `À vérifier` / `Oui — disqualifié`.
Aujourd'hui, seuls 4 comptes sont en « Non détecté » (vérification déjà faite : Metaline,
Tenexa, Cyllene, Infodis) — **71 restent à vérifier**. C'est 30 secondes par compte et ça
évite des séquences envoyées dans le vide.

**Signal jumeau à surveiller :** un discours frontal « 100 % français / souveraineté
numérique » (Naitways, Groupe Asten, M-KIS) n'est pas éliminatoire mais impose de préparer
la réponse RGPD art. 46 / localisation des données **avant** l'appel.

---

## 6. Résoudre un « décideur à identifier » — procédure en 6 minutes

À faire par lot de 10 comptes, pas un par un.

1. **(1 min)** Ouvrir la fiche du compte dans Sales Navigator. Vérifier l'effectif réel et
   l'offshore (§5). Corriger le champ `Effectif` dans Airtable si l'estimation était fausse
   (c'est fréquent : Edeal IT annoncé 20-50, réel 3-5).
2. **(2 min)** Lancer la recherche D restreinte à ce compte. Appliquer la règle du §4 selon
   la taille. Prendre **2 personnes** : un décideur, un sponsor ou introducteur.
3. **(1 min)** Créer les 2 contacts dans Airtable, liés au compte, avec `Rôle`, `Fonction`,
   `LinkedIn`, `Statut = Identifié`.
4. **(1 min)** Chercher le déclencheur : onglet **Offres d'emploi** de la fiche compte, et
   **Actualités récentes**. Remplir `Signal` + `Type de signal` dans Airtable.
5. **(1 min)** Passer le compte en `Prêt à séquencer` **si et seulement si** : décideur nommé
   **+** signal factuel **+** offshore vérifié. Sinon il reste `À qualifier`.

> **Sans signal, pas d'E1.** Règle déjà posée dans `OUTREACH-IT-N1-marque-blanche.md` :
> `{{trigger_recrutement}}` est obligatoire. Un email sans déclencheur est générique, donc
> ignoré, et il brûle un domaine chauffé pendant 4 semaines.

---

## 7. Enrichissement des coordonnées — la pile conforme

Sales Navigator ne donne ni email professionnel ni numéro. Le plan audité proposait
« Kaspr, Lusha ou Datagma ». **Kaspr est à écarter par défaut** : la CNIL l'a sanctionné de
**240 000 €** le 5 décembre 2024 pour aspiration de coordonnées LinkedIn à visibilité
restreinte, avec injonction de cesser et de supprimer. Vendre de la conformité RGPD à des
donneurs d'ordre médicaux avec des données sourcées chez un acteur sanctionné pour scraping
est intenable en rendez-vous.

**Ordre d'attaque recommandé :**

| Besoin | Outil / méthode | Pourquoi |
|---|---|---|
| **Email nominatif** | **Dropcontact** (français, RGPD-by-design : calcule et vérifie, ne revend pas de base de contacts) | S'intègre à Emelia ; c'est 90 % du besoin réel |
| Vérification avant envoi | Vérification intégrée Emelia | Un bounce > 3 % brûle le domaine |
| **Téléphone** | **Le standard de l'entreprise** (déjà en base sur 31 comptes) + `pappers.fr` / `annuaire-entreprises` | Sur des structures de 20-150 personnes, le standard répond et passe. Le script de passage du barrage est dans `SCRIPTS-APPEL.md` |
| Mobile direct (rare, si vraiment bloqué) | Lusha ou Cognism, jamais Kaspr | Renseigner `Source coordonnées` dans Airtable, systématiquement |

**Deux obligations non négociables**, déjà cohérentes avec ce qu'on vend :
- **Mention d'information (RGPD art. 14)** dans la signature des emails de prospection :
  qui traite, pourquoi, où on a trouvé l'adresse, comment s'y opposer.
- **Lien de désinscription Emelia activé** — déjà exigé par `OUTREACH-SEQUENCE.md` §Délivrabilité.

Le champ `Source coordonnées` de la table Contacts existe pour ça : si un prospect demande
« vous avez eu mon numéro comment ? », la réponse est dans la fiche.

---

## 8. Scoring : un seul système, pas trois

Trois grilles coexistaient (score /100 du CRM, 7 questions de l'ICP, HOT/WARM/NURTURE).
Elles sont maintenant articulées :

- **La grille des 7 questions de `IDEAL-CUSTOMER-PROFILE.md` reste le juge.** Notamment la
  Q7 (sous-traitance autorisée par les contrats du donneur d'ordre — RGPD art. 28 §2 — et
  clause de localisation UE/EEE), à poser dès le premier échange.
- **Le score /100 reste la note**, héritée du travail de qualification déjà fait.
- **La priorité est l'étiquette d'action**, et elle se recalcule ainsi :

| Priorité | Condition | Traitement |
|---|---|---|
| **HOT** | Score ≥ 70 **ou** signal daté de moins de 30 jours (recrutement N1 actif, levée, nouveau DG) | Appel en premier, séquence email en parallèle, sous 5 jours |
| **WARM** | Score 55-69, signal présent mais tiède (offre 24/7 affichée, croissance) | Séquence email, appel en relance J+7 |
| **NURTURE** | Score < 55 ou aucun signal | Ne pas séquencer. Alerte Sales Navigator posée, on attend le signal |
| **EXCLU** | Offshore existant · hors cible après requalification · prix plancher impossible | Ne jamais recontacter (ex. : ES Protect = média, pas prestataire) |

> **Un compte NURTURE n'est pas un compte mort : c'est un compte en attente de signal.**
> C'est exactement le rôle des alertes (§9).

---

## 9. Les alertes : le vrai retour sur investissement de l'abonnement

1. Créer une **liste de comptes** Sales Navigator nommée **« Comptes Salverys MB »**.
2. Y sauvegarder les 75 comptes de la base (par lots, depuis les recherches A/B/C/E).
3. Vérifier que les alertes sont actives sur la liste : **offres d'emploi publiées ·
   croissance de l'effectif · actualités · changements de dirigeants**.
4. **Rituel quotidien de 10 minutes** (Vololona, le matin) : ouvrir l'onglet Alertes.
   Chaque alerte pertinente devient, en une minute :
   - `Signal` + `Type de signal` mis à jour dans Airtable,
   - priorité recalculée (souvent NURTURE → HOT),
   - `Prochaine action` = « E1 + appel J+2 », datée du jour.

C'est ce mécanisme qui transforme une base statique de 75 lignes en flux de travail
quotidien — et c'est ce que le plan audité ne prévoyait nulle part.

---

## 10. La cadence hebdomadaire

**Hypothèse de charge :** Vololona à temps plein sur la prospection, le fondateur en appui
sur les comptes à fort enjeu (Helpline, Metaline, Constellation) et sur les rendez-vous.

| Quand | Qui | Quoi | Cible chiffrée |
|---|---|---|---|
| Lundi matin | BD | Vue « À travailler cette semaine » + résolution de décideurs (§6) | 10 comptes résolus |
| Mardi-jeudi 9h-11h | BD | Session d'appels (vue « À rappeler » + HOT du jour) | 20-25 tentatives/jour |
| Tous les jours 8h50 | BD | Revue des alertes Sales Navigator (§9) | 10 min |
| Mardi + jeudi après-midi | BD | Mise en séquence Emelia des comptes « Prêt à séquencer » | 20 contacts/semaine |
| Tous les jours | BD | Invitations LinkedIn ciblées (note courte, jamais de pitch) | 15-20/jour max |
| Vendredi 16h | BD + Direction | **Revue de pipeline** sur la vue Pipeline : que disent les taux réels ? | 30 min |

**Volume visé : 20 nouveaux comptes réellement travaillés par semaine.**
210 comptes ≈ 11 semaines de rythme tenu.

---

## 11. L'articulation des trois canaux

L'ordre compte. Il est déjà fixé par `OUTREACH-IT-N1-marque-blanche.md`, on ne le réinvente pas :

```
J0   LinkedIn : invitation + note courte (si le profil est accessible)
J1   E1 Emelia — déclencheur factuel, < 100 mots, zéro lien
J2   Appel n°1 (matin 9h-11h) — script CALL_SCRIPTS.helpdesk-n1
J3   E2 Emelia — la valeur
J5   Appel n°2 (autre créneau : 14h-16h)
J7   E3 Emelia — la preuve concrète
J10  Appel n°3
J14  E4 Emelia — pivot + offre pilote
J21  E5 Emelia — breakup doux
```

- **5 tentatives d'appel maximum** par contact, sur des créneaux différents. Au-delà, le
  contact passe en `Parti / NPAI` ou le compte retombe en NURTURE avec alerte posée.
- **WhatsApp seulement après une première réponse** (règle `OUTREACH-SEQUENCE.md`).
- **Jamais de prix en cold.** La rate card MB est confidentielle (`PRICING.md` §3).

---

## 12. Les KPI et leurs seuils d'alerte

À relever chaque vendredi, sur la vue Pipeline.

| Indicateur | Cible | 🚨 Seuil d'alerte → ce que ça veut dire |
|---|---|---|
| Comptes avec un signal identifié | > 50 % | **< 25 %** → le ciblage est trop large, resserrer les filtres §3 |
| Comptes avec décideur nommé | > 80 % | **< 60 %** → trop peu de temps passé sur la recherche D |
| Taux de joignabilité décideur (après 4 tentatives) | 35-45 % | **< 20 %** → mauvais créneaux d'appel, ou barrage standard non traité |
| Conversation → RDV | 30 % | **< 15 %** → l'accroche téléphonique est à revoir, pas la liste |
| Taux de bounce Emelia | < 3 % | **> 3 %** → **arrêter la campagne immédiatement**, nettoyer la liste (risque de blacklistage) |
| Taux de réponse positive email | 3-8 % | **< 2 %** sur 100 envois → le déclencheur n'est pas assez factuel |
| Comptes travaillés / semaine | 20 | **< 12** deux semaines de suite → la charge n'est pas tenable à une personne, arbitrer |

> **Les cibles ci-dessus sont des hypothèses de départ** (cf. `AUDIT` §4). Après trois
> semaines, on les remplace par les taux réels mesurés : c'est *cette* mesure qui dira si le
> problème est le ciblage, l'accès au décideur, l'accroche, l'offre ou le closing.

---

## 13. Les 3 premières semaines

### Semaine 1 — remettre la machine en état de marche
- [ ] Créer les 6 vues Airtable (§2.3) — 5 min
- [ ] Créer les recherches A, B, D et la liste de comptes « Comptes Salverys MB » (§3) — 1 h
- [ ] Y sauvegarder les 75 comptes, activer les alertes (§9) — 1 h
- [ ] Résoudre les décideurs des **20 comptes HOT + WARM les mieux notés** (§6) — 2 h
- [ ] Vérifier l'offshore sur ces 20 comptes (§5) — 15 min
- [ ] **Vérifier l'état d'Emelia** : abonnement actif ? domaines `salverys-bpo.fr` et
      `salverys-groupe.fr` renseignés ? boîtes chauffées ? *(chemin critique T1 du
      rétroplanning, jamais confirmé comme fait)*
- [ ] **Passer les 10 premiers appels** sur les comptes déjà nominatifs (Metaline, Kincy,
      Izencia, Oxxodata, Tenexa, Callmed, Vocallz, Thelem, Apixit, Sellsy)

> Ces 10 appels sont l'objectif réel de la semaine 1. Tout le reste est de la préparation.

### Semaine 2 — mettre la séquence en route
- [ ] Résoudre 20 décideurs de plus
- [ ] Charger la séquence IT-N1-MB dans Emelia, lancer sur les 20 comptes « Prêt à séquencer »
- [ ] 20-25 tentatives d'appel par jour
- [ ] Créer la recherche C (éditeurs SaaS) et commencer à compléter la liste

### Semaine 3 — mesurer et corriger
- [ ] Premier relevé complet des KPI (§12) → remplacer les hypothèses par les taux réels
- [ ] Corriger le maillon le plus faible **avant** d'augmenter le volume
- [ ] Décision direction sur l'ordre des niches (`AUDIT` §6)

---

## 14. Ce qu'il faut savoir de l'outil (limites)

- **Sales Navigator ne lève pas le plafond d'invitations LinkedIn.** Il reste de l'ordre de
  100 invitations par semaine sur un compte classique. Les invitations ciblées avec note
  valent mieux que le volume.
- **Les InMails sont limités** (de l'ordre de 50/mois sur l'offre Core — à vérifier dans le
  compte). Les garder pour les décideurs sans email trouvable, jamais en premier contact
  de masse.
- **Les effectifs affichés sont déclaratifs et souvent faux** pour les PME françaises.
  Croiser avec `pappers.fr` avant de classer un compte par taille — la taille détermine
  quel interlocuteur viser (§4), une erreur ici fait perdre le compte.
- **Sales Navigator ne remplace pas la qualification.** Il donne un nom et un signal.
  Le prix d'achat cible, le volume plaçable et la question RGPD art. 28 §2 se qualifient
  **au téléphone**, dès le premier échange.
