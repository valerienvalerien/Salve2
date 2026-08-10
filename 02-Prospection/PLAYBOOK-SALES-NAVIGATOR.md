# PLAYBOOK Sales Navigator — France · Belgique · Canada

> **Créé le :** 2026-08-10 · **Cadrage :** MB-first (décision 2026-06-10) · **Priorité niches :**
> 1) Support N1 SaaS · 2) Helpdesk IT ESN/MSP · 3) Télésecrétariat médical (cf. `CLAUDE.md`,
> `03-Cibles-Prospects/IDEAL-CUSTOMER-PROFILE.md`).
> **Complète** `PROMPT-RECHERCHE-PROSPECTS-IT-Canada.md` (recherche web) — ici, c'est la
> construction de listes **nominatives** dans Sales Navigator, jusqu'à l'import CRM/Emelia.

---

## 0. Point de départ : ce qui est possible, ce qui ne l'est pas

**Je ne peux pas être connecté à Sales Navigator.** LinkedIn n'ouvre pas d'API de prospection
à des outils tiers, et aucun connecteur LinkedIn n'est disponible côté assistant. Toute
tentative de m'y « brancher » passerait par un scraping non autorisé → **restriction du compte
LinkedIn** (c'est le compte qui sert aussi de vitrine, cf. `LINKEDIN-PROFIL-SALVERYS.md`).

**Le partage de travail qui fonctionne :**

| Étape | Qui |
|---|---|
| Réglages, recherches, filtres, listes, alertes | **Toi**, dans Sales Navigator (ce document = le mode d'emploi) |
| Export CSV des listes | **Toi**, extension Emelia (§9) |
| Nettoyage, dédoublonnage, scoring, identification du bon décideur, rédaction des accroches, injection CRM | **Moi**, à partir du CSV déposé dans le repo (`exports/`) |

> Concrètement : tu me déposes le CSV, je te rends une liste scorée, priorisée, avec le
> décideur cible par ligne et le déclencheur d'accroche — prête pour `OUTREACH-IT-N1-marque-blanche.md`.

---

## 1. Réglage du compte (une fois, 15 min)

1. **Sales Preferences** (Paramètres → Préférences de vente) : régions = France, Belgique,
   Canada ; tailles = 11-50 / 51-200 / 201-500 ; secteurs = IT Services and IT Consulting,
   Software Development. Ça alimente les recommandations automatiques — mal réglé, elles sont
   inutilisables.
2. **Profil visible** : garde la visibilité publique **activée**. Les vues de profil des
   prospects sont un signal d'intérêt exploitable (spotlight *Viewed your profile*). Le mode
   privé casse ça.
3. **Ne pas synchroniser un CRM** pour l'instant : le CRM maison (`CRM_Salverys.html`) est en
   localStorage, il n'y a rien à synchroniser. Le passage par CSV suffit.
4. **InMails** : le plan Core en donne ~50/mois. C'est une **ressource rare** — à réserver
   aux comptes score ≥ 4/5 (§10), jamais en volume.
5. **Invitations** : plafond LinkedIn ≈ 100-200/semaine tous comptes confondus. Ne jamais
   saturer : au-delà, taux d'acceptation en chute et risque de restriction.

---

## 2. La méthode : **comptes d'abord, décideurs ensuite**

L'erreur classique est de partir en *Lead search* (« Head of Support, France ») : on récupère
2 500 personnes dont 80 % travaillent dans des boîtes hors cible, et on brûle la liste.

**Le bon ordre, toujours :**

```
1. Account search (filtres entreprise + signaux)      → 60-150 comptes
2. Tri manuel du compte (site web, 30 s/compte)       → 30-60 comptes retenus
3. Sauvegarde dans une Account List nommée
4. Lead search FILTRÉE SUR CETTE LISTE (Account list = X) → 1 à 3 décideurs / compte
5. Sauvegarde en Lead List + export
```

Une liste de 40 comptes bien qualifiés × 2 décideurs = **80 leads exploitables**, très
au-dessus de 2 500 leads bruts en valeur réelle. Le point mort est à ~5 ETP
(`FINANCE-PREVISIONNEL.md §4`) : il faut 2-3 donneurs d'ordre, pas 2 500 contacts.

**Nommage des listes** (à respecter, ça évite le chaos au bout de 3 semaines) :
`[PAYS]-[SEGMENT]-[MOIS]` → `FR-SAAS-2026-08`, `BE-ESN-2026-08`, `CA-TELESEC-2026-09`.

---

## 3. Les 9 recherches d'entreprises à sauvegarder

3 segments × 3 pays. **Sauvegarde chaque recherche** (bouton *Save search*) : Sales Navigator
te notifie ensuite des **nouvelles entreprises qui entrent dans les critères** — c'est le
principal intérêt de l'abonnement.

### 3.a Segment A — Éditeurs SaaS (support applicatif N1) — **priorité n°1**

| Filtre Account | Valeur |
|---|---|
| Industry | `Software Development` + `Technology, Information and Internet` |
| Company headcount | `51-200` puis `201-500` (deux recherches distinctes) |
| Company HQ location | France / Belgique(§6) / Canada(§6) |
| **Department headcount growth** | `Customer Success and Support` → **+10 % et plus** |
| **Job opportunities** | `Hiring on LinkedIn` |
| Company type | `Privately Held`, `Public Company`, `Partnership` |

> Le combo **croissance du département support + recrutement actif** = la boîte a un problème
> de capacité N1 *maintenant*. C'est exactement l'angle marque blanche (`IDEAL-CUSTOMER-PROFILE.md §1.a`).

**Exclure d'emblée :** headcount < 30 (pas de N1 structuré), > 1 000 (appel d'offres, cycle
trop long — sauf groupe multi-éditeurs type Septeo/Orisha, à traiter à part).

### 3.b Segment B — ESN / MSP / infogérance (helpdesk IT N1)

| Filtre Account | Valeur |
|---|---|
| Industry | `IT Services and IT Consulting` |
| Company headcount | `51-200` (cœur de cible) puis `201-500` |
| Company HQ location | France / Belgique / Canada |
| Keywords | booléen §5.a (infogérance, services managés, helpdesk…) |
| Job opportunities | `Hiring on LinkedIn` |
| Recent activities | `Senior leadership changes` (90 j) + `Funding events` (12 mois) |

> `ESN-TARGETS.md` fixe la fourchette 50-300 personnes, **sans filiale offshore propre**.
> Le filtre offshore n'existe pas dans Sales Navigator → contrôle manuel obligatoire (§8).

### 3.c Segment C — Télésecrétariats médicaux (niche médicale, n°2)

Sales Navigator est **faible sur ce segment** : ces sociétés (10-80 personnes) sont mal
classées sectoriellement et beaucoup de gérants n'ont pas de page entreprise à jour.

| Filtre Account | Valeur |
|---|---|
| Industry | `Outsourcing and Offshoring Consulting` + `Hospitals and Health Care` + `Business Consulting and Services` |
| Company headcount | `11-50` et `51-200` |
| Keywords | booléen §5.b (télésecrétariat, permanence téléphonique…) |

**Complément indispensable** : sourcing hors Sales Navigator (Google, Pages Jaunes,
annuaires de télésecrétariat), puis on retrouve la société dans Sales Navigator pour
identifier le gérant. `TELESEC-TARGETS.md` a été construit comme ça — Sales Navigator sert
ici à **trouver le décideur**, pas à trouver l'entreprise.

---

## 4. Passer aux décideurs (Lead search)

Une fois la liste de comptes propre : nouvelle **Lead search**, filtre
`Account lists` = ta liste. Puis :

| Segment | Filtres Lead | Règle de ciblage (`ESN-TARGETS.md`) |
|---|---|---|
| **A — SaaS** | Function = `Support` / `Customer Success and Support` · Seniority = `Director`, `VP`, `Owner` · titres §5.c | Head of Support / Customer Care / COO. **Pas le CEO** au-dessus de 50 personnes |
| **B — ESN/MSP** | Titres §5.d · Seniority = `Director`, `VP`, `CXO`, `Owner` | < 100 pers → fondateur/DG · 100-600 → **DG Ops / Directeur Delivery / Resp. Centre de Services** · jamais commercial ni RH |
| **C — Télésec** | Seniority = `Owner`, `Partner`, `CXO` · titres §5.e | 2-30 agents → **le gérant lui-même** · 100+ → DG Ops / Directeur de plateau |

**Deux spotlights à activer en priorité (colonne de droite) :**
- `Changed jobs` (90 derniers jours) → un nouveau Directeur des Opérations réévalue toujours
  ses prestataires dans ses 100 premiers jours. **Meilleur déclencheur du playbook.**
- `Posted on LinkedIn` (30 j) → donne une accroche personnalisée gratuite (E1 sans déclencheur
  est interdit par `OUTREACH-IT-N1-marque-blanche.md`).

**Plafond : 3 personnes maximum par compte.** Au-delà, on ressemble à du spam interne et le
premier contact qui reçoit un mail prévient les autres.

---

## 5. Booléens prêts à copier

> Champ *Keywords* des Account searches, et *Current job title* des Lead searches.
> Les guillemets et les MAJUSCULES des opérateurs sont obligatoires.

**5.a — ESN / MSP (mots-clés entreprise, FR)**
```
("infogérance" OR "services managés" OR "centre de services" OR "helpdesk" OR "support utilisateurs" OR "service desk" OR "TMA") NOT ("cybersécurité uniquement" OR "recrutement")
```

**5.b — Télésecrétariat médical (mots-clés entreprise)**
```
("télésecrétariat" OR "télésecrétaire" OR "permanence téléphonique" OR "secrétariat médical externalisé" OR "accueil téléphonique médical" OR "prise de rendez-vous médicaux")
```

**5.c — Décideurs support SaaS (titres)**
```
("Head of Support" OR "Directeur Support" OR "Responsable Support" OR "Head of Customer Care" OR "Directeur Relation Client" OR "Customer Support Manager" OR "Head of Customer Success" OR "VP Customer Experience" OR "COO" OR "Directeur des Opérations")
```

**5.d — Décideurs ESN / MSP (titres)**
```
("Directeur des Opérations" OR "Director of Operations" OR "Directeur Delivery" OR "Service Delivery Manager" OR "Responsable Centre de Services" OR "Directeur Services Managés" OR "Head of Managed Services" OR "COO" OR "Directeur Général") NOT ("Commercial" OR "Sales" OR "Ressources Humaines" OR "RH" OR "Recrutement" OR "Marketing")
```

**5.e — Décideurs télésecrétariat (titres)**
```
("Gérant" OR "Gérante" OR "Président" OR "Présidente" OR "Fondateur" OR "Fondatrice" OR "Directeur Général" OR "Directrice Générale" OR "Directeur de plateau" OR "Responsable de plateau" OR "CEO" OR "Owner")
```

> **Piège FR/BE :** beaucoup de dirigeants français mettent un titre anglais, et l'inverse.
> Toujours mettre les deux langues dans le booléen — c'est la première cause de liste maigre.

---

## 6. Géographies exactes à sélectionner

| Marché | À saisir dans *Geography* | Priorité |
|---|---|---|
| **France** | `France` — si > 2 500 résultats, découper : `Île-de-France`, `Auvergne-Rhône-Alpes`, `Occitanie`, `Hauts-de-France`, `Provence-Alpes-Côte d'Azur`, `Nouvelle-Aquitaine` | Marché principal |
| **Belgique** | `Brussels Region` (Bruxelles-Capitale) + `Wallonia` / `Walloon Region`. Villes utiles : Liège, Namur, Charleroi, Louvain-la-Neuve, Mons | Francophone uniquement |
| **Canada** | `Greater Montreal Metropolitan Area` → `Quebec, Canada` → `New Brunswick, Canada` → `Ottawa, Ontario` (bilingue) | Test QC → NB |

**⚠️ Belgique — trois points de vigilance (nouveau marché, non couvert par l'ICP actuel) :**
1. **Ne pas prendre `Belgium` en bloc.** La Flandre est néerlandophone : le support y est
   attendu en NL/EN, ce que nous ne savons pas fournir. Critère ICP n°1 : *clientèle finale
   francophone*. Wallonie + Bruxelles uniquement.
2. **Bruxelles est trilingue** (FR/NL/EN) : vérifier la langue du site et des offres d'emploi
   support avant de retenir un compte.
3. Le tissu ESN belge est plus petit qu'en France : **compte sur 15-30 comptes qualifiés**,
   pas 100. C'est un marché de complément, pas un second marché principal — l'ICP
   (`IDEAL-CUSTOMER-PROFILE.md`) devra être mis à jour si la direction confirme l'ouverture BE.

**Canada :** `PROMPT-RECHERCHE-PROSPECTS-IT-Canada.md` reste la source de cadrage marché
(QC → NB → reste francophone/bilingue). Et voir §12 : la **loi anti-pourriel canadienne
change la façon de prendre contact**.

---

## 7. Signaux d'achat : ce qui fait vraiment gagner du temps

C'est là que l'abonnement se rentabilise, pas dans le volume de contacts.

| Signal Sales Navigator | Où | Ce qu'on en fait |
|---|---|---|
| **Hiring on LinkedIn** (postes support/helpdesk ouverts) | Account filter | Déclencheur E1 le plus fort : « vous recrutez 3 techniciens N1 depuis 2 mois… » |
| **Department headcount growth — Support** | Account filter | La charge N1 grimpe plus vite que l'équipe |
| **Senior leadership changes** (90 j) | Account filter | Nouveau COO/DG Ops = fenêtre de réévaluation des prestataires |
| **Funding events** (12 mois) | Account filter | Budget disponible, pression de croissance |
| **Changed jobs** | Lead spotlight | Le décideur vient d'arriver → il cherche des quick wins |
| **Viewed your profile** | Lead spotlight | Chaud. Contact sous 48 h |

**Alertes à activer** : sur chaque *Account List* enregistrée. Sales Navigator pousse alors
les changements (recrutement, direction, actualités) dans l'onglet Alerts. **Revue le lundi
matin, 20 min** — c'est ce flux qui alimente les déclencheurs des séquences cold.

---

## 8. Exclusions (à appliquer manuellement, aucun filtre ne les couvre)

Contrôle en 30 secondes par compte, sur son site :

- ❌ **Filiale offshore déjà en place** (Tunis, Casablanca, Maurice, Madagascar, Inde,
  Roumanie) → disqualifié (`ESN-TARGETS.md`). Chercher « nos implantations », « nos centres ».
- ❌ **Concurrent BPO offshore** déguisé en prospect (Serenity Center, Nosycom, Procontact…
  cf. `TELESEC-TARGETS.md`).
- ❌ **Pur low-cost** dont le prix de vente public est sous notre plancher (télésec à
  0,50 €/appel — cas Callmed). À qualifier dès le 1er échange, pas après 4 relances.
- ❌ **> 1 000 personnes** avec appel d'offres obligatoire → cycle > 12 mois.
- ❌ **Clientèle finale non francophone**.
- ❌ Cabinet/structure isolée à volume négligeable.

---

## 9. Sortir les données : Sales Navigator → Emelia → CRM

**Sales Navigator n'exporte pas en CSV.** Règle SaaS-first (`CLAUDE.md`) : **pas d'outil
supplémentaire à acheter** — **Emelia**, déjà notre outil d'envoi, fournit une extension
Chrome qui exporte une recherche Sales Navigator, enrichit les emails et alimente
directement les campagnes. Pas d'Evaboot (~139 $/mois avec Sales Nav), pas de Phantombuster,
pas de Clay tant qu'Emelia suffit.

**Chaîne retenue :**
```
Recherche Sales Nav → bouton "Export with Emelia" → dashboard Emelia
   → "Find Emails" (enrichissement) → export CSV
   → dépôt dans exports/ du repo → je nettoie, score et génère le JSON CRM
   → campagne Emelia (domaines chauffés uniquement, cf. SETUP-COLD-MAILING.md)
```

**Limites techniques à connaître :**
- **2 500 leads max par recherche** (100 pages) et **1 000 comptes max** (40 pages). Au-delà,
  découper par headcount, secteur ou région (§6). Une recherche qui dépasse ces plafonds est
  de toute façon trop large pour nos volumes.
- Ne scrape pas 2 000 profils dans la journée : **200-300/jour maximum**, sinon restriction
  du compte LinkedIn.
- L'enrichissement email n'est **jamais fiable à 100 %** : un email « deviné » (`prenom.nom@`)
  non vérifié part au bounce → réputation de domaine dégradée (`SETUP-COLD-MAILING.md §7`).
  **Ne jamais envoyer sur des emails non vérifiés** ; les catch-all vont dans un lot à part.

**Mapping CSV → CRM** (`CRM_Salverys.html`, structure des leads existants) :

| Colonne export | Champ CRM |
|---|---|
| Company | `nom` / `structure` |
| — | `niche` : `support-n1` \| `helpdesk-it-esn` \| `telesec` |
| Email (vérifié) | `email` |
| Full name + Title | `decideur.nom` / `decideur.titre` |
| Profile URL | `decideur.linkedin` |
| Signal (§7) | `decideur.signauxAchat` |
| Score (§10) | `score` |
| Reste (ville, effectif, angle) | `notes`, préfixées `MB` pour la marque blanche |

---

## 10. Scoring — les 6 questions de l'ICP, appliquées à la liste

Reprendre les 6 questions de `IDEAL-CUSTOMER-PROFILE.md` (« Comment juger vite ») et scorer
chaque compte **avant** tout envoi :

| Score | Décision |
|---|---|
| 6/6 | Prioritaire — approche personnalisée, InMail autorisé |
| 4-5 | Bonne piste — séquence cold standard |
| 2-3 | En réserve, seulement si le pipe est vide |
| 0-1 | Supprimé de la liste (ne pas « garder au cas où ») |

Une liste de 40 comptes 6/6 vaut mieux que 400 comptes moyens : **le coût d'un mauvais lead
n'est pas nul** — il consomme du quota de domaine chauffé et de la réputation.

---

## 11. Cadence hebdomadaire (2 h/semaine, tenable)

| Jour | Tâche | Durée |
|---|---|---|
| Lundi | Revue des **alertes** Sales Navigator (recrutements, changements de direction) → déclencheurs de la semaine | 20 min |
| Lundi | Qualification manuelle de 15-20 nouveaux comptes (§8) | 40 min |
| Mardi | Lead search sur les comptes retenus → 2 décideurs/compte, sauvegarde en Lead List | 30 min |
| Mercredi | Export Emelia + enrichissement + dépôt du CSV dans `exports/` | 20 min |
| Jeudi | Injection CRM + lancement de la séquence sur les emails vérifiés | — |

**Rythme cible : 15-20 comptes qualifiés/semaine**, soit ~60-80/mois sur les 3 pays. Suffisant :
il faut 2-3 signatures marque blanche pour atteindre le point mort.

---

## 12. Conformité (à lire avant le premier envoi)

**France & Belgique — RGPD.** La prospection B2B par email est possible sur la base de
l'**intérêt légitime**, à trois conditions : le message est **en rapport avec la fonction**
de la personne, l'**opt-out** est présent et fonctionnel dès le premier message, et
l'**origine des données** est indiquable sur demande. Une adresse `prenom.nom@societe.fr`
reste une **donnée personnelle**. Cadre déjà posé dans `01-Strategie-Offre/CONFORMITE-HDS-RGPD.md`.

**Canada — LCAP/CASL : c'est plus strict, et ça change la méthode.** Tout message électronique
commercial vers le Canada exige un consentement **exprès** ou **tacite**. Le consentement
tacite le plus utilisable ici est celui de l'**adresse publiée bien en vue** (site de
l'entreprise, page contact) **sans mention de refus de sollicitation**, et à condition que le
message soit **pertinent au rôle** de la personne. Conséquences opérationnelles :

- ✅ Emailer un contact dont l'adresse est **publiée sur le site** de sa société → recevable.
- ❌ Emailer une adresse **devinée/enrichie** jamais publiée → hors du consentement tacite.
- ✅ Au Canada, privilégier **connexion LinkedIn + conversation** avant tout mail commercial.
- Obligatoire dans chaque message : **identification complète** (nom, adresse postale, moyen
  de contact) + **désabonnement traité sous 10 jours ouvrés**. **Conserver la preuve du
  consentement 3 ans.** Sanctions jusqu'à 10 M$ CAD.

> Pratique : au Canada, l'enrichissement Emelia sert à **vérifier** une adresse publiée, pas à
> en fabriquer une. Faire valider la mention légale des mails CA avant la 1re campagne.

---

## 13. Les 7 erreurs à ne pas commettre

1. Partir en Lead search sans avoir qualifié les comptes (§2).
2. Viser le **Président d'une structure > 100 personnes** en premier contact — l'erreur n°1
   documentée dans `ESN-TARGETS.md`.
3. Contacter 5 personnes de la même société la même semaine.
4. Envoyer sur des emails enrichis non vérifiés → bounces → domaine brûlé.
5. Envoyer **avant la fin de la chauffe** des domaines (`SETUP-COLD-MAILING.md §7`).
6. Séquence E1 **sans déclencheur** — interdit par `OUTREACH-IT-N1-marque-blanche.md`.
7. Prendre `Belgium` en bloc et se retrouver avec des prospects flamands (§6).

---

## Ce que je fais dès que tu me donnes un export

Dépose le CSV dans `exports/` (ou colle-le en conversation) et je rends :
- la liste **dédoublonnée** contre les 220 leads déjà en CRM et contre `ESN-TARGETS.md` /
  `SAAS-SUPPORT-TARGETS.md` / `TELESEC-TARGETS.md` (éviter de recontacter un compte déjà traité) ;
- le **scoring 6 questions** par compte avec la décision ;
- le **bon décideur** par compte selon la règle de taille ;
- le **déclencheur d'accroche** par ligne ;
- le **JSON prêt à coller** dans le CRM et le CSV formaté pour Emelia.
