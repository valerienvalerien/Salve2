# Playbook Cold Outreach Salverys — séquences par niche

Ce document est la **source unique** des séquences cold mail Salverys. Les
campagnes sont exécutées dans **Emelia**. Le CRM (`CRM_Salverys.html`) sert au
pipeline post-réponse, aux décideurs vérifiés et aux scripts d'appel — pas à
l'envoi des séquences.

**Outil d'envoi :** Emelia (mail-merge CSV)
**Date :** 2026-06-02
**Niches couvertes (ordre CLAUDE.md) :**
1. **Télésecrétariat médical** — priorité absolue (séquence détaillée ci-dessous)
2. **Support N1 — Éditeurs SaaS FR** — priorité 2 (séquence détaillée ci-dessous)
2. **Helpdesk IT N1 — ESN & MSP** — priorité 2 (séquence dédiée : `OUTREACH-IT-N1-marque-blanche.md`)
3. **Bailleurs sociaux & grandes structures** — priorité 3 (séquence détaillée ci-dessous)

---

## Canaux & CTA — principes communs

À appliquer à toute séquence cold mail, quelle que soit la niche.

### CTA soft, jamais de lien de réservation en cold

Chaque email finit par **une question oui/non**. Jamais de bouton « réserve un
call ». Le clic sur un lien Calendly en cold tourne autour de 0,3 à 1 % — la
réponse à une question simple est plusieurs fois supérieure.

### Délivrabilité : zéro lien dans les emails 1 à 3

Les liens trackés dans les premiers emails à froid signalent « mailing de masse »
aux filtres anti-spam et plombent la délivrabilité.

- **Emails 1, 2, 3 :** aucun lien. Pas de Calendly, pas de WhatsApp, pas de
  site, pas d'image. Le **domaine du site** apparaît uniquement en signature
  (texte brut, ex. `salverys.fr`).
- **Emails 4, 5 :** le numéro WhatsApp peut apparaître **en texte brut** (pas de
  lien `wa.me`), idem pour le site.
- **Toujours :** pas d'emoji ni de gras dans le corps. Texte brut intégral.

### WhatsApp = canal de bascule APRÈS la première réponse

WhatsApp n'apparaît jamais comme un **lien cliquable** en cold (`wa.me/...`
dégrade la délivrabilité). Le pivot se fait dès qu'un prospect répond :

> « Pour simplifier, on peut continuer par WhatsApp ? +33 6 48 91 84 50 »

Côté CRM, mettre le statut du lead à `contacté` puis `rdv` selon l'issue, et
passer le canal sur `WhatsApp`.

### Live chat du site = preuve de réactivité

Le live chat opéré par Salverys sur son propre site est une **démonstration en
direct** du service de télésecrétariat. Il se mentionne **verbalement** dans
l'email 3 (« vous pouvez tester notre réactivité en direct sur notre site »)
sans l'URL — l'URL ne paraît qu'en signature.

### Cadence et A/B testing

5 emails sur 21 jours : **J1 / J3 / J7 / J14 / J21**. Deux variantes d'objet
(A/B) par email. < 100 mots (E5 < 75). Une seule idée par email.

---

## Variables Emelia (CSV)

Communes à toutes les niches sauf mention contraire.

| Variable | Contenu | Source |
|---|---|---|
| `{{firstName}}` | Prénom du contact | Décideur vérifié dans le CRM |
| `{{structure}}` | Nom du cabinet / chaîne / éditeur | CRM |
| `{{ville_dept}}` | Ville ou département | CRM (`notes` ou `structure`) |
| `{{accroche_perso}}` | La phrase de personnalisation déclencheur | **Obligatoire** — 30 s de recherche par prospect |
| `{{signature}}` | Bloc signature Salverys | Pré-défini |
| `{{outil_ticketing}}` *(SaaS uniquement)* | Zendesk / Intercom / Freshdesk | Page « carrières » du poste support |
| `{{secteur}}` *(SaaS uniquement)* | Verticale du SaaS | Site éditeur |

> Sans `{{accroche_perso}}` rempli, l'email 1 devient générique. **Ne pas
> lancer la campagne** avec cette colonne vide.

---

# 1. Télésecrétariat médical (priorité ICP)

**Segment cible**
- **Priorité 1 :** chaînes / réseaux multi-sites (3+ centres) — dentaire,
  ophtalmo, radiologie, kiné, ostéo.
- **Priorité 2 :** cabinets de groupe (4+ praticiens) avec secrétariat saturé.

**Persona principal**
- Chaînes : **directrice/directeur d'exploitation**, responsable opérationnel
  des centres, responsable accueil/secrétariat groupe.
- Cabinets de groupe : praticien associé qui gère l'administratif (gérant,
  cogérant) — pas le DG/fondateur.

**Décideur secondaire (escalade) :** fondateur / DG / président.

**Hors cible (à ne pas démarcher)**
- Praticien solo en libéral (volume trop faible, autogestion + Doctolib).
- Cabinet déjà équipé d'un BPO interne dédié (cas Dentego/Adental — angle
  débordement seulement).
- CHU / hôpital public (marchés publics).

---

## Recherche de personnalisation (à remplir dans `{{accroche_perso}}`)

Quatre déclencheurs à chercher (30 s par prospect, prioriser le n°1).

1. **Avis Google « injoignable »** — Qualité : Hot
   *Angle :* « Plusieurs avis récents de patients de {{structure}} signalent
   qu'ils n'arrivent pas à joindre votre secrétariat. »
2. **Offre d'emploi « secrétaire médicale » récente** (Indeed, France Travail,
   site cabinet) — Qualité : Hot
   *Angle :* « J'ai vu que {{structure}} cherche une secrétaire médicale depuis
   quelques semaines. »
3. **Multi-sites / nouvelle ouverture** — Qualité : Warm
   *Angle :* « Avec {{X}} centres ouverts, gérer la centralisation des appels
   patients devient un sujet. »
4. **Désert médical** (zones rurales, Creuse / Ariège / Lot / Cantal…)
   — Qualité : Warm
   *Angle :* « Dans {{ville_dept}}, la pression sur les médecins libéraux ne
   laisse plus le temps de gérer le téléphone. »

**Angle d'ouverture préféré :** déclencheur entreprise (avis ou offre d'emploi).
**Angle secondaire (relances) :** coût d'une secrétaire interne, qualité de
l'accueil, image de la structure.

---

## Séquence 5 emails

### Email 1 — L'accroche (Jour 1)

**Objet A :** {{firstName}}, vos appels patients sonnent dans le vide ?
**Objet B :** secrétariat pour {{structure}}

---

Bonjour {{firstName}},

{{accroche_perso}}

Beaucoup de cabinets en {{ville_dept}} perdent des patients faute de pouvoir décrocher pendant les consultations — et un patient qui n'a pas pu être rappelé prend le suivant qui répond.

Chez Salverys, on opère une équipe française d'origine, formée à Doctolib / Maiia / Médistory, qui prend vos appels sous le nom de {{structure}} : prise de RDV directe dans votre agenda, transfert d'urgence si vous êtes demandé. À environ -40 % du coût d'une secrétaire interne, sans charge RH.

Ça vaudrait un échange de 15 min cette semaine ?

{{signature}}

---

**CTA :** soft, question
**Touchpoint complémentaire (Jour 5) :** **appel téléphonique court** (utiliser
le script `CALL_SCRIPTS.telemed.opening` dans le CRM). LinkedIn optionnel pour
les chaînes multi-sites (le décideur opérationnel y est).

#### Variantes A/B
**Ligne d'ouverture A (déclencheur perso) :** `{{accroche_perso}}`
**Ligne d'ouverture B (sectorielle) :** « En cabinet de groupe, 3 à 5 appels
patients par jour finissent en répondeur — c'est rarement la faute du
secrétariat, c'est un problème de capacité. »

---

### Email 2 — La valeur (Jour 3)

**Objet A :** le vrai coût d'une secrétaire à plein temps
**Objet B :** 60 jours pour recruter, vs…

---

Bonjour {{firstName}},

Un repère qui revient chez les cabinets qu'on accompagne : une secrétaire médicale en interne, en coût complet (salaire + charges + congés + formation au logiciel + turnover), tourne autour de 33 à 40 k€ par an équivalent temps plein. Et le recrutement prend 60 à 90 jours, avec un turnover régulier à refaire.

Pas de demande aujourd'hui — juste un repère utile si vous arbitrez entre interne et externe pour {{structure}} sur 2026.

{{signature}}

---

**CTA :** zéro (apport de valeur pur)
**Touchpoint complémentaire :** aucun à ce stade — laisser respirer.

#### Variantes A/B
**Ligne d'ouverture A :** « Un repère qui revient chez les cabinets qu'on accompagne… »
**Ligne d'ouverture B :** « Petit chiffre qui surprend souvent les praticiens associés… »

---

### Email 3 — Le cadrage honnête + preuve réactivité (Jour 7)

**Objet A :** comment on prendrait vos appels
**Objet B :** testez notre réactivité en direct
**Objet C :** ≥ 90 % d'appels décrochés, sinon on vous crédite

---

Bonjour {{firstName}},

Salverys démarre — donc plutôt qu'un faux cas client, je préfère vous décrire ce que ça donnerait pour {{structure}}.

Votre standard est basculé vers nous selon vos horaires. On répond sous votre nom, on prend les RDV directement dans votre Doctolib (ou Maiia / Médistory), on filtre les urgences et on transfère si vous êtes demandé. Vous gardez la main sur les agendas.

Avant tout échange, vous pouvez tester notre réactivité : un chat en direct est ouvert sur notre site (en signature). Posez une question, vous verrez le délai.

15 min cette semaine ?

{{signature}}

---

**CTA :** soft, question
**Touchpoint complémentaire (Jour 12) :** **2e tentative d'appel** si pas de
réponse (script `CALL_SCRIPTS.telemed.qualif`).

#### Variantes A/B
**Ligne d'ouverture A :** « Salverys démarre — donc plutôt que de vous sortir un cas client… »
**Ligne d'ouverture B :** « Une question revient souvent à ce stade : comment ça se passe concrètement ? »

> Note : on remplacera ce cadrage par un vrai cas client dès qu'un premier
> cabinet pilote sera signé. Ne jamais inventer une référence.

---

### Email 4 — L'angle marque blanche + pilote (Jour 14)

**Objet A :** vos patients ne verront pas la différence
**Objet B :** 1er mois à -50 %, sans engagement

---

Bonjour {{firstName}},

Jusqu'ici je vous ai parlé fonctionnement et coût. L'autre sujet pour {{structure}}, c'est l'image perçue par vos patients.

Notre modèle est marque blanche : équipe française d'origine, sous votre nom, vos process, votre ton. Le patient pense parler à votre secrétariat.

Pour limiter le risque, deux garde-fous : un 1er mois à -50 %, sans engagement, sur un périmètre réduit (un site, certains créneaux) ; et une fois en régime, on s'engage sur le décroché — sous 90 % d'appels pris sur un mois, 20 % d'avoir le mois suivant. Vous jugez la qualité avant d'élargir, et on met notre argent sur le résultat.

Si l'email n'est pas le plus simple, on peut aussi en parler par WhatsApp au +33 6 48 91 84 50.

Ouvert à en parler ?

{{signature}}

---

**CTA :** soft, question + canal optionnel (WhatsApp en texte brut)
**Touchpoint complémentaire :** aucun.

#### Variantes A/B
**Ligne d'ouverture A (marque) :** « Jusqu'ici je vous ai parlé fonctionnement et coût. L'autre point, c'est l'image… »
**Ligne d'ouverture B (risque) :** « Une objection légitime : et si la qualité ne suit pas ? D'où notre approche : 1er mois à -50 %, sans engagement, plus un engagement de décroché en régime (sous 90 %, 20 % d'avoir). »

---

### Email 5 — Le breakup (Jour 21)

**Objet A :** je referme la boucle
**Objet B :** ce n'est peut-être pas le moment

---

Bonjour {{firstName}},

Je n'encombre pas davantage votre boîte. Le sujet — répondre à 100 % des appels patients sous votre nom, à -40 % du coût d'une secrétaire interne — sera là quand il deviendra prioritaire pour {{structure}}.

Si c'est le cas, répondez simplement à ce mail, ou écrivez-nous sur WhatsApp au +33 6 48 91 84 50.

Bonne continuation à vous et à l'équipe.

{{signature}}

---

**CTA :** porte ouverte, sans culpabilisation. WhatsApp en option (texte brut).
**(< 75 mots)**

#### Variantes A/B
**Ligne d'ouverture A :** « Je n'encombre pas davantage votre boîte. »
**Ligne d'ouverture B :** « Visiblement le timing n'est pas le bon — je comprends. »

---

## Récap touchpoints téléphone (médical)

| Jour | Action | Script CRM |
|---|---|---|
| 1 | Email 1 — accroche | — |
| 3 | Email 2 — valeur | — |
| 5 | Appel téléphonique court | `CALL_SCRIPTS.telemed.opening` |
| 7 | Email 3 — cadrage + live chat | — |
| 12 | 2e tentative d'appel | `CALL_SCRIPTS.telemed.qualif` |
| 14 | Email 4 — marque blanche | — |
| 21 | Email 5 — breakup | — |

LinkedIn (optionnel) : pour les chaînes multi-sites uniquement (Dentego, IK
Paris, Dentelia…), le décideur opérationnel y est. Pour les cabinets de groupe,
LinkedIn n'apporte rien.

---

## Traitement des réponses (toutes niches)

Dès qu'un prospect répond, basculer sur le **canal le plus simple pour lui** —
en pratique : WhatsApp ou appel rapide.

1. **Réponse positive ou question** :
   - CRM : passer le lead de `contacté` à `rdv` si un créneau est posé,
     sinon laisser `contacté` et mettre une note.
   - Canal : « Pour simplifier, on continue par WhatsApp ? +33 6 48 91 84 50 »
     ou proposer un appel de 15 min dans la foulée.
2. **Réponse négative / pas le moment** :
   - CRM : `perdu` avec note sur le motif (mauvais timing, déjà équipé, hors
     ICP). Si « pas le moment », planifier une tâche de relance à J+90 avec
     un nouvel angle (nouvelle ouverture, nouveau poste ouvert…).
3. **Out-of-office / pas le bon interlocuteur** :
   - CRM : mettre à jour le décideur dans la fiche lead. Recommencer la
     séquence pour le bon contact (en marquant que ce n'est plus un cold).

---

## Objections (médical)

Réutiliser les arbres `OBJECTIONS_TELEMED` du CRM (`CRM_Salverys.html`, section
COLD CALLING). Les 5 objections principales :

| Objection | Réponse courte |
|---|---|
| « Mes patients vont sentir que c'est externalisé » | Équipe française d'origine, sous votre nom, vos process. Patients entendent votre secrétariat — pas Salverys. |
| « C'est combien ? » | Forfait selon volume d'appels, à partir de ~350 €/mois. ~40 % moins cher qu'une secrétaire interne complète. |
| « Et les urgences ? » | Filtrage selon vos règles : transfert d'appel si vous êtes demandé, sinon RDV calé. Vous gardez la main. |
| « J'ai déjà une secrétaire » | Pas pour la remplacer — pour absorber le débordement (pics, congés, hors heures). |
| « Sécurité des données patients ? » | RGPD, accès tracé, engagement de confidentialité, dossier sécurité avant tout démarrage. |

---

# 2. Support N1 — Éditeurs SaaS FR (priorité 2)

> Pour le **Helpdesk IT N1 en marque blanche** (ESN, MSP, infogéreurs), voir
> le fichier dédié `OUTREACH-IT-N1-marque-blanche.md` — segment et angle
> différents (sous-traitance d'un acteur établi, pas vente directe).

**Segment cible :** éditeurs SaaS B2B français, 20-300 salariés, en croissance
**Persona :** Head of Support / Customer Support Manager / Head of Customer Care
**Décideur secondaire :** COO / Directeur des Opérations
**Framework :** Problème → Preuve → Ask

### Recherche de personnalisation (à remplir dans `{{accroche_perso}}`)

Trois déclencheurs à chercher (30 s par prospect, prioriser le n°1).

1. **Poste « Support N1 / Customer Care » ouvert depuis > 1 mois**
   (LinkedIn, Welcome to the Jungle, page carrières) — Qualité : Hot
   *Angle :* « J'ai vu que {{structure}} cherche un Customer Support Specialist
   depuis quelques semaines — j'imagine que les tickets s'empilent en attendant. »
2. **Avis clients sur les délais de réponse** (Trustpilot, G2, Capterra,
   ProductHunt) — Qualité : Warm
   *Angle :* « Plusieurs avis G2 récents sur {{structure}} mentionnent un délai
   de réponse support qui s'allonge. »
3. **Levée de fonds < 12 mois** (Maddyness, Eldorado) — Qualité : Warm
   *Angle :* « Avec la série {{X}} bouclée en {{mois}}, le scale-up du support
   client doit être un sujet ouvert chez {{structure}}. »

**Angle d'ouverture préféré :** déclencheur entreprise (poste ouvert ou avis).
**Variable spécifique :** `{{outil_ticketing}}` (Zendesk / Intercom / Freshdesk /
Crisp), trouvée sur la page carrières du poste support ou dans la stack publique
de l'éditeur.

---

## Séquence 5 emails (SaaS)

### Email 1 — L'accroche (Jour 1)

**Objet A :** {{firstName}}, vos tickets N1 s'empilent ?
**Objet B :** support {{secteur}} pour {{structure}}

---

Bonjour {{firstName}},

{{accroche_perso}}

Recruter un Customer Support Specialist FR en CDI prend 60 à 90 jours et 35-40 k€ chargés par an, pour un poste qui tourne ~18 mois. Pendant ce temps, les tickets N1 s'empilent et le NPS prend.

Chez Salverys, on opère une équipe française d'origine, formée à {{outil_ticketing}}, qui traite votre N1 sous le nom de {{structure}} : tickets, chat in-app, téléphone, escalade cadrée vers vos équipes produit. Environ 40 % de moins qu'une embauche équivalente en France — chiffrage précis sous 24 h selon votre volume.

Ça vaudrait un échange de 15 min cette semaine ?

{{signature}}

---

**CTA :** soft, question
**Touchpoint complémentaire (Jour 5) :** LinkedIn — visite de profil + invitation
sans note pour le persona Head of Support (l'éditeur SaaS y est actif).

#### Variantes A/B
**Ligne d'ouverture A (déclencheur perso) :** `{{accroche_perso}}`
**Ligne d'ouverture B (sectorielle) :** « 89 % des éditeurs SaaS FR déclarent
des difficultés de recrutement sur le support N1 — c'est devenu le goulot
d'étranglement n°1 de la croissance. »

---

### Email 2 — La valeur (Jour 3)

**Objet A :** le vrai coût d'un Customer Support en CDI
**Objet B :** 60 jours pour recruter, vs…

---

Bonjour {{firstName}},

Un repère qui revient chez les éditeurs SaaS qu'on accompagne : un Customer Support Specialist FR en interne, en coût complet (salaire chargé + onboarding produit 4-6 semaines + outils + turnover ~18 mois), tourne autour de 38-46 k€ par an équivalent temps plein. Et c'est 60 à 90 jours de recrutement, à refaire à chaque rotation.

Pas de demande aujourd'hui — juste un repère utile si {{structure}} arbitre entre internalisation et externalisation pour 2026.

{{signature}}

---

**CTA :** zéro (apport de valeur pur)
**Touchpoint complémentaire :** aucun à ce stade.

#### Variantes A/B
**Ligne d'ouverture A :** « Un repère qui revient chez les éditeurs SaaS qu'on accompagne… »
**Ligne d'ouverture B :** « Petit chiffre qui surprend souvent les Head of Support… »

---

### Email 3 — Le cadrage honnête + preuve réactivité (Jour 7)

**Objet A :** comment on prendrait vos tickets {{outil_ticketing}}
**Objet B :** testez notre réactivité en direct
**Objet C :** un SLA garanti par contrat — sinon on vous crédite

---

Bonjour {{firstName}},

Salverys démarre — donc plutôt qu'un faux cas client, je préfère vous décrire ce que ça donnerait pour {{structure}}.

Vos tickets {{outil_ticketing}} sont routés vers nos agents selon vos règles (priorité, langue, type de demande). On répond sous votre nom, avec votre macro et votre ton. Les questions hors périmètre N1 sont escaladées vers votre équipe produit avec un contexte propre — pas de ping-pong client.

Avant tout échange, vous pouvez tester notre réactivité : un live chat est ouvert sur notre site (en signature). Posez une question, vous verrez le délai.

Je vous montre comment en 15 min ?

{{signature}}

---

**CTA :** soft, question
**Touchpoint complémentaire (Jour 12) :** relance LinkedIn — message court
référant à l'email (« je vous ai écrit la semaine dernière sur le N1 SaaS, vu
le poste ouvert chez {{structure}} »).

#### Variantes A/B
**Ligne d'ouverture A :** « Salverys démarre — donc plutôt que de vous sortir un cas client… »
**Ligne d'ouverture B :** « Une question revient souvent à ce stade : comment ça se passe concrètement sur {{outil_ticketing}} ? »

> Note : remplacer ce cadrage par un vrai cas client dès qu'un premier éditeur
> pilote est signé. Ne jamais inventer une référence.

---

### Email 4 — L'angle marque blanche + pilote (Jour 14)

**Objet A :** vos utilisateurs ne verront pas la différence
**Objet B :** 1er mois à -50 %, sans engagement

---

Bonjour {{firstName}},

Jusqu'ici je vous ai parlé volume et coût. L'autre sujet pour {{structure}}, c'est l'expérience perçue par vos utilisateurs.

Notre modèle est marque blanche : équipe française d'origine, sous votre nom, vos macros, votre ton produit. L'utilisateur pense parler à votre équipe support.

Pour limiter le risque, deux garde-fous : un 1er mois à -50 %, sans engagement, sur un périmètre réduit (1 agent, certaines catégories de tickets) ; et une fois en régime, on s'engage sur le SLA de première réponse — non tenu sur un mois, 20 % d'avoir le mois suivant. Vous jugez la qualité avant d'élargir, et on met notre argent sur le résultat.

Si l'email n'est pas le plus simple, on peut aussi en parler par WhatsApp au +33 6 48 91 84 50.

Ouvert à en parler ?

{{signature}}

---

**CTA :** soft, question + canal optionnel (WhatsApp en texte brut)
**Touchpoint complémentaire :** aucun.

#### Variantes A/B
**Ligne d'ouverture A (marque) :** « Jusqu'ici je vous ai parlé volume et coût. L'autre point, c'est l'expérience perçue… »
**Ligne d'ouverture B (risque) :** « Une objection légitime : et si la qualité produit ne suit pas ? D'où notre approche : 1er mois à -50 %, sans engagement, plus un engagement sur le SLA de première réponse en régime (non tenu = 20 % d'avoir). »

---

### Email 5 — Le breakup (Jour 21)

**Objet A :** je referme la boucle
**Objet B :** ce n'est peut-être pas le moment

---

Bonjour {{firstName}},

Je n'encombre pas davantage votre boîte. Le sujet — un N1 français formé à {{outil_ticketing}}, sous votre marque, à -40 % d'un CDI interne — sera là quand il deviendra prioritaire pour {{structure}}.

Si c'est le cas, répondez simplement à ce mail, ou écrivez-nous sur WhatsApp au +33 6 48 91 84 50.

Bonne continuation à vous et à l'équipe.

{{signature}}

---

**CTA :** porte ouverte, sans culpabilisation. WhatsApp en option (texte brut).
**(< 75 mots)**

#### Variantes A/B
**Ligne d'ouverture A :** « Je n'encombre pas davantage votre boîte. »
**Ligne d'ouverture B :** « Visiblement le timing n'est pas le bon — je comprends. »

---

## Récap touchpoints (SaaS)

| Jour | Action | Notes |
|---|---|---|
| 1 | Email 1 — accroche | `{{accroche_perso}}` obligatoire |
| 3 | Email 2 — valeur (coût CDI + délai recrutement) | — |
| 5 | LinkedIn — visite + invitation sans note | Head of Support |
| 7 | Email 3 — cadrage + live chat | — |
| 12 | Relance LinkedIn courte | Référer à l'email |
| 14 | Email 4 — marque blanche + pilote | WhatsApp en option |
| 21 | Email 5 — breakup | Porte ouverte |

---

## Objections (SaaS)

| Objection | Réponse courte |
|---|---|
| « Nos users vont sentir que c'est externalisé » | Équipe française d'origine, sous votre nom, vos macros, vos process. Le user voit votre marque — Salverys n'apparaît jamais. |
| « C'est combien ? » | Selon configuration (volume, amplitude, canaux) — devis sous 24 h après un premier cadrage. Repère : environ -40 % d'un CDI N1 FR chargé (38-46 k€/an). |
| « Nos tickets sont trop techniques pour du N1 externalisé » | C'est exactement le périmètre cadré : N1 sur catégories simples, escalade automatique vers votre N2 sur le reste. Vous gardez la complexité. |
| « On a déjà un Customer Support Manager » | Pas pour le remplacer — pour absorber le N1 répétitif et lui rendre du temps sur la qualité, l'onboarding, la voice of customer. |
| « Et la formation à notre produit ? » | Onboarding 5-10 jours sur votre base de connaissance + macros. Backup agent inclus pour absorber le turnover de votre côté **et** du nôtre. |

---

# Bonnes pratiques d'envoi (Emelia)

- **Créneau optimal** : mardi-jeudi, 9 h-11 h. Éviter lundi matin et vendredi
  après-midi.
- **Volume** : démarrer à 10-20 envois/jour par boîte, monter progressivement à
  ~50.
- **Warm-up** : chauffer le domaine d'envoi 2-3 semaines avant (Emelia propose
  un warm-up intégré — l'activer).
- **Domaine** : utiliser un domaine d'envoi dédié (ex. `mail.salverys.fr`),
  pas le domaine principal.
- **Authentification** : SPF, DKIM, DMARC configurés. Tester via mail-tester.com
  avant lancement.
- **Format** : texte brut, sans image ni tracking pixel sur l'email 1
  (meilleure délivrabilité).
- **Désinscription** : inclure un lien de désinscription (conformité RGPD /
  CAN-SPAM).
- **Relance si aucune réponse aux 5 emails** : attendre 30 jours, repartir sur
  un nouvel angle ou un nouveau déclencheur (nouvelle ouverture de centre,
  nouveau poste ouvert).

---

# Prochaines étapes suggérées

- **Premier pilote signé (médical)** : remplacer le cadrage honnête de l'email 3
  par un vrai cas client (cabinet ou chaîne pilote, métriques avant / après).
- **Premier pilote signé (SaaS)** : idem, remplacer l'email 3 SaaS par un vrai
  cas éditeur (métriques sur volume tickets / délai première réponse / CSAT).
- **Helpdesk IT (ESN)** : séquence maintenue séparément dans
  `OUTREACH-IT-N1-marque-blanche.md` — pas de fusion prévue, segments distincts.

---

*Document maintenu en parallèle du pipeline Emelia. Toute modification doit
être répercutée dans le mail-merge avant le prochain envoi.*
# 3. Bailleurs sociaux & grandes structures (priorité 3)

**Segment cible**
- **Priorité 1 :** bailleurs sociaux (ESH) de 25 000 à 100 000 logements —
  Erilia, Plurial Novilia, ICF Habitat, Aiguillon, Domofrance, Vilogia.
- **Priorité 2 :** très grands bailleurs (>100 000 logements) — CDC Habitat,
  1001 Vies Habitat — sur **débordement uniquement** (CRC interne déjà
  structuré, angle = capacité d'appoint).
- **Priorité 3 :** grandes associations humanitaires avec relation donateurs
  structurée — Fondation Abbé Pierre (cible n°1 du segment).

**Persona principal — JAMAIS le DG**
- **Directeur(rice) de la Relation Client / des Clients** (ex. Brigitte Laurent
  chez CDC Habitat, Antoine Jeandet chez Erilia, Gaëlle Velay chez Vilogia).
- **Responsable du Centre de Relation Clients (CRC)** (ex. Olivier Sicard chez
  ICF Habitat La Sablière).
- Sur Fondation Abbé Pierre : **Directeur Développement Ressources et
  Donateurs** (Michel Raynaud).

**Décideur secondaire (escalade) :** Président du Directoire / DG.

**Hors cible — à NE PAS démarcher (NO-GO ICP)**
- **CNAF, France Travail, URSSAF, CAF départementales** : marchés publics
  obligatoires (BOAMP/UGAP), volumes nécessitant 100+ ETP. Hors capacité
  Salverys (10 agents).
- **CHU / hôpitaux publics** : marchés publics.
- **Bailleurs < 10 000 logements** : volume trop faible pour rentabiliser un
  débordement.
- **Collecteurs Action Logement sans parc locatif** (ex. Solendi déqualifié
  v5) : pas de CRC locataires.
- **Bailleurs avec contrat BPO récemment attribué** : attendre la fin du
  contrat (cycle 3-5 ans).

---

## Positionnement clé : **capacité d'appoint, pas remplacement**

Salverys (10 agents aujourd'hui) ne peut pas être le CRC principal d'un
bailleur de 50 000+ logements. Le positionnement est strictement
**débordement / heures hors bureau / pics saisonniers** :

- Rentrée scolaire (mutations, états des lieux entrants/sortants)
- Hiver (chaufferie, demandes de chauffage, gros entretien)
- Période de charges (avril–juin et octobre)
- Heures hors bureau (18h-21h, samedi)
- Crises ponctuelles (panne ascenseur sur 1 résidence, etc.)

Ce cadrage doit ressortir dès l'email 1. Sinon, le prospect répond « on est
déjà équipés » et la séquence s'arrête.

---

## Recherche de personnalisation (à remplir dans `{{accroche_perso}}`)

Cinq déclencheurs à chercher (30 s par prospect, prioriser le n°1).

1. **Nouvelle nomination Dir. Relation Client** (LinkedIn, Acteurs Publics,
   com officielle bailleur) — Qualité : Hot
   *Angle :* « J'ai vu votre nomination Dir. Relation Client chez
   {{structure}}. À la prise de poste, la question de la capacité du CRC
   se repose souvent. »
2. **Offre d'emploi « chargé de clientèle locataires » / « téléconseiller »
   ouverte > 1 mois** (Indeed, France Travail) — Qualité : Hot
   *Angle :* « J'ai vu que {{structure}} cherche des chargés de clientèle
   locataires depuis quelques semaines. »
3. **Recertification AFNOR Service Clients** (com officielle) — Qualité : Warm
   *Angle :* « Bravo pour la recertification AFNOR — c'est exactement le
   moment où la pression sur la disponibilité des conseillers se voit. »
4. **Crise / contentieux locataires dans la presse locale** — Qualité : Warm
   *Angle :* À adapter prudemment, ton empathique.
5. **Avis Google sur le standard** (« attente interminable », « personne ne
   répond ») — Qualité : Warm
   *Angle :* « Plusieurs locataires de {{structure}} signalent en avis Google
   un délai d'attente long sur le standard. »

**Angle d'ouverture préféré :** nomination ou offre d'emploi.
**Angle secondaire (relances) :** coût d'un téléconseiller interne, KPI
(taux de décroché, taux d'abandon, NPS), saisonnalité des pics.

---

## Séquence 5 emails

### Email 1 — L'accroche (Jour 1)

**Objet A :** {{firstName}}, débordement CRC chez {{structure}} ?
**Objet B :** capacité d'appoint pour {{structure}}

---

Bonjour {{firstName}},

{{accroche_perso}}

Sur un parc comme {{structure}}, les pics d'appels (rentrée, hiver, charges) génèrent de l'attente et des locataires qui raccrochent — sans que votre CRC en soit responsable, c'est un sujet de capacité.

Chez Salverys (équipe française d'origine, fuseau Paris, marque blanche), on opère du débordement pour les CRC bailleurs : on prend l'overflow et les heures hors bureau, sous votre nom, sur vos KPI. ~40 % moins cher qu'un téléconseiller en CDI, activable en quelques semaines.

Ça vaudrait un échange de 15 min cette semaine ?

{{signature}}

---

**CTA :** soft, question
**Touchpoint complémentaire (Jour 5) :** **appel téléphonique court** (script
`CALL_SCRIPTS.helpdesk-n1.opening` dans le CRM). LinkedIn recommandé en
parallèle (les Dir. Relation Client des grands bailleurs y sont actifs).

#### Variantes A/B
**Ligne d'ouverture A (déclencheur perso) :** `{{accroche_perso}}`
**Ligne d'ouverture B (sectorielle) :** « Pour un bailleur du calibre de
{{structure}}, les pics saisonniers de réclamations restent le sujet
opérationnel le plus difficile à dimensionner. »

---

### Email 2 — La valeur (Jour 3)

**Objet A :** le vrai coût d'un téléconseiller CDI
**Objet B :** pics d'appels : la math interne

---

Bonjour {{firstName}},

Un repère qui revient chez les Dir. Relation Client : un téléconseiller en CDI, en coût complet (salaire + charges + formation + management + turnover), tourne autour de 38 à 46 k€/an par ETP. Et le recrutement prend 60 à 90 jours, avec un turnover ~25 %/an sur les CRC.

Pour absorber un pic prévisible (rentrée, hiver, période de charges), embaucher ne tient pas — la capacité flexible externalisée si.

Pas de demande aujourd'hui — juste un repère utile pour le budget 2026 de {{structure}}.

{{signature}}

---

**CTA :** zéro (apport de valeur pur)
**Touchpoint complémentaire :** aucun à ce stade.

#### Variantes A/B
**Ligne d'ouverture A :** « Un repère qui revient chez les Dir. Relation Client… »
**Ligne d'ouverture B :** « Petit calcul qui surprend souvent au moment du budget… »

---

### Email 3 — Le cadrage honnête + preuve réactivité (Jour 7)

**Objet A :** comment on opérerait pour {{structure}}
**Objet B :** testez notre réactivité en direct

---

Bonjour {{firstName}},

Salverys démarre — donc plutôt qu'un cas client, je préfère vous décrire le déroulé pour {{structure}}.

Vos appels en dépassement sont routés vers nous selon vos règles (heures, seuils, motifs). On répond sous votre nom, on traite les réclamations standards directement (encaissement, état des charges, RDV gardien) et on remonte les cas complexes à votre CRC. Vous gardez la main sur les KPI et la QA.

Avant échange, vous pouvez tester notre réactivité : un chat en direct est ouvert sur notre site (en signature). Posez-y une question, vous verrez le délai.

15 min cette semaine ?

{{signature}}

---

**CTA :** soft, question
**Touchpoint complémentaire (Jour 12) :** 2e tentative d'appel
(`CALL_SCRIPTS.helpdesk-n1.qualif`). LinkedIn : commenter un post du prospect
ou de {{structure}} (rapport activité, événement USH).

#### Variantes A/B
**Ligne d'ouverture A :** « Salverys démarre — donc plutôt qu'un cas client… »
**Ligne d'ouverture B :** « Une question qui revient à ce stade : concrètement, ça donne quoi sur un parc comme le nôtre ? »

> Remplacer ce cadrage par un vrai cas client dès qu'un premier bailleur
> pilote sera signé. Ne jamais inventer une référence.

---

### Email 4 — L'angle marque blanche + pilote (Jour 14)

**Objet A :** votre marque, notre capacité
**Objet B :** pilote sur un pic d'appels

---

Bonjour {{firstName}},

Jusqu'ici je vous ai parlé fonctionnement et coût. Le point sensible pour {{structure}}, c'est ce que vos locataires perçoivent.

Notre modèle est marque blanche : équipe française d'origine, sous votre nom, vos scripts, votre ton. Un locataire pense parler à votre CRC.

Pour limiter le risque, on pilote sur un pic précis (rentrée, période de charges) avant d'élargir, avec un engagement sur le décroché : sous le seuil convenu sur un mois, 20 % d'avoir. Vous mesurez la qualité avant tout engagement, et on met notre argent sur le résultat.

Si l'email n'est pas le plus simple, on peut en parler par WhatsApp au +33 6 48 91 84 50.

Ouvert à en parler ?

{{signature}}

---

**CTA :** soft, question + WhatsApp en option (texte brut)
**Touchpoint complémentaire :** aucun.

#### Variantes A/B
**Ligne d'ouverture A (marque) :** « Le point sensible pour {{structure}},
c'est ce que vos locataires perçoivent. »
**Ligne d'ouverture B (risque) :** « Une objection légitime : et si la
qualité ne suit pas ? D'où notre approche par pilote sur un pic. »

---

### Email 5 — Le breakup (Jour 21)

**Objet A :** je referme la boucle
**Objet B :** ce n'est peut-être pas le moment

---

Bonjour {{firstName}},

Je n'encombre pas davantage votre boîte. Le sujet — absorber l'overflow CRC sur les pics, sous votre marque, à -40 % du coût téléconseiller — sera là quand il deviendra prioritaire pour {{structure}}.

Si c'est le cas, répondez à ce mail ou écrivez sur WhatsApp au +33 6 48 91 84 50.

Bonne continuation à vous et à l'équipe.

{{signature}}

---

**CTA :** porte ouverte, sans culpabilisation. WhatsApp en option (texte brut).
**(< 75 mots)**

#### Variantes A/B
**Ligne d'ouverture A :** « Je n'encombre pas davantage votre boîte. »
**Ligne d'ouverture B :** « Visiblement le timing n'est pas le bon — je comprends. »

---

## Récap touchpoints (bailleurs)

| Jour | Action | Script / canal |
|---|---|---|
| 1 | Email 1 — accroche | — |
| 3 | Email 2 — valeur | — |
| 5 | Appel téléphonique court | `CALL_SCRIPTS.helpdesk-n1.opening` |
| 7 | Email 3 — cadrage + live chat | — |
| 10 | LinkedIn : like / commentaire post du prospect ou {{structure}} | — |
| 12 | 2e tentative d'appel | `CALL_SCRIPTS.helpdesk-n1.qualif` |
| 14 | Email 4 — marque blanche | — |
| 21 | Email 5 — breakup | — |

LinkedIn est ici un canal **utile** (à l'inverse du médical) : les Dir.
Relation Client des grands bailleurs sont actifs sur la plateforme et leurs
nominations y sont annoncées.

---

## Objections (bailleurs)

| Objection | Réponse courte |
|---|---|
| « Vous êtes 10, on gère 92 000 logements » | On n'est pas votre CRC principal — on est votre capacité d'appoint sur les pics et le hors bureau. Sur 92 000 logements, ça représente quelques milliers d'appels/mois en débordement — c'est exactement notre format. |
| « Marchés publics obligatoires » | Pour les OPH et organismes publics, on cible la création de la relation et l'accompagnement sur le cahier des charges. On répond au prochain BOAMP. |
| « Confidentialité des données locataires » | RGPD, accès tracé dans votre SI, hébergement UE, dossier sécurité avant tout démarrage. Aucun stockage en local. |
| « On craint que la qualité ne suive pas » | Pilote sur 1 pic d'appels (rentrée ou charges), QA partagée, écoute en double, mesures hebdo — **et engagement de décroché** : sous le seuil convenu sur un mois, 20 % d'avoir. Vous arbitrez sur pièces, on met notre argent sur le résultat. |
| « On a déjà un BPO sur le débordement » | Voir si on est complémentaire (heures hors bureau, week-end, vagues imprévues). Sinon, on garde le contact pour la prochaine RFP. |
| « Modèle social — externaliser pose problème » | Marque blanche, les locataires n'ont pas conscience d'un changement. Équipe française d'origine, conditions de travail Salverys publiques sur demande. |

---

