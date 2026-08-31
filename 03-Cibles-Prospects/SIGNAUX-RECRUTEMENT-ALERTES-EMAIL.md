# Signaux de recrutement — dépouillement des alertes emploi (mars → août 2026)

**Généré le :** 2026-08-31
**Source :** boîte `valerienrk@gmail.com`, 6 derniers mois
**Objectif :** évaluer si les offres d'emploi reçues en alerte constituent une source de prospects
marque blanche, et en extraire les comptes réellement qualifiés.

---

## 1. Réponse courte

**Oui, mais seulement sur ~15 % du volume.** Le reste est du bruit ou des prospects « direct »
(hors MB-first). Et à l'intérieur des 15 %, il faut encore trier : une partie des offres porte sur
du **support de proximité VIP sur site**, donc **non délocalisable** à Tana.

Ce qui est réellement exploitable :

| Ce qu'on cherche | Signal | Verdict |
|---|---|---|
| ESN/MSP qui poste une **mission N1/N2 en freelance** | Elle a une position facturable qu'elle n'arrive pas à staffer | **Le meilleur signal d'achat de la niche n°1.** C'est exactement l'offre Salverys : position ferme facturable, sans risque de requalification pour elle |
| ESN/MSP qui poste un **service desk / helpdesk à distance** en CDI | Besoin capacitaire structurel | Bon signal, cycle plus long |
| ESN/MSP qui poste du **support de proximité VIP / on-site** | Mission chez le client final, sur site | **À écarter** — non délocalisable |
| Éditeur SaaS qui poste du **support applicatif N1** | Niche n°2 | Bon signal |
| Entreprise finale qui poste un technicien support interne | Prospect **direct**, pas MB | Deuxième temps (cf. GTM) |
| BPO offshore / employeurs Madagascar | Concurrents ou employeurs locaux | Veille salariale uniquement |

**Point critique de fraîcheur :** un signal d'embauche vaut 2 à 6 semaines. Les offres de mars-juin
sont périmées comme accroche (« j'ai vu que vous recrutiez ») — elles gardent seulement leur valeur
de **qualification de compte** (cette ESN a une activité helpdesk N1 et une tension récurrente).
Seules les offres d'août sont utilisables comme déclencheur d'un E1.

---

## 2. Verdict par source

| Source | Volume 6 mois | Valeur | Décision |
|---|---|---|---|
| **Glassdoor** (`noreply@glassdoor.com`) | ~200 mails, 1/jour | **La seule source à contenu.** Mais l'alerte a basculé : de mars à mi-mai elle sortait des offres de **téléprospection/commercial indépendant** (zéro valeur), de mi-mai à août des offres **Technicien support IT N1/N2 France** (valeur réelle) | Garder, **reparamétrer** (§5) |
| **LinkedIn** (`jobalerts-`, `jobs-listings@`) | ~50 mails | Alertes calibrées **« Spécialiste informatique (Madagascar) »** et **« Support Applicatif (Madagascar) »** → sortent des employeurs locaux (Concentrix, Foundever, Orange Business Tana, HaiRun, MaaSil, Offshore Value, Ingenosya, RAJABALI). **Aucune valeur prospect.** Quelques offres FR passent par accident | **Recréer les alertes sur la France**, pas Madagascar |
| **Intch** (`newcomers@email.intch.org`) | 34 mails | **Zéro.** Aucune offre nommée dans le corps, c'est une séquence promo poussant vers un abonnement payant (« 4 956 postes », « 273 recruteurs »). Nom d'entreprise : jamais | **Se désabonner** |
| **Welcome to the Jungle** | 6 mails | **Zéro.** Uniquement transactionnel (création de compte candidat, reset mot de passe, CGU). Aucune alerte emploi active | **Créer une vraie alerte** ou se désabonner |

> Glassdoor a fusionné avec Indeed (mail du 08/07/2026). Les deux profils sont désormais synchronisés
> — reparamétrer l'alerte côté Indeed vaut pour les deux.

---

## 3. Comptes qualifiés extraits

Aucun de ces comptes n'est déjà dans `exports/PROSPECTION-comptes-MB-France.csv` (75 comptes),
**sauf Metaline IT et Helpline** qui y figurent déjà — pour ceux-là le signal est un
**motif de relance**, pas une création.

Export prêt pour Airtable : `exports/SIGNAUX-RECRUTEMENT-nouveaux-comptes.csv`.

### 3.a — Priorité 1 : ESN / MSP, poste délocalisable (MB, niche n°1)

| Compte | Poste vu | Date | Pourquoi |
|---|---|---|---|
| **NEOMSYS** | Technicien Support Info N2/N2+ — **Freelance** | 30-31/08 | Signal frais + freelance = position non staffée |
| **sevenopportunity** | Support N1/N2 · helpdesk · proximité VIP N2 | 29/05, 09/06, 08/08, 19-22/08 | **Récurrent sur 3 mois** = tension structurelle, pas un pic |
| **Groupe Interway** | Pilote service Service Desk et Support de Proximité | 28/07 | Pilote de service desk = structure de delivery constituée |
| **Mallyance** | Technicien Helpdesk N2/N3 · Support N2/N3 | 17/06, 11/07 | Deux publications en 1 mois |
| **GAGNITECH** | Technicien helpdesk support — GLPI / ITSM | 27/06 | Outillage ITSM nommé = process en place |
| **Artemys** | Technicien support N1/N2 — **Freelance** | 08/07 | Freelance |
| **Hoxton Partners** | Technicien support N1/N2 — **Freelance** | 11/07 (+ relance 17/07) | Freelance, relancée |
| **emagine** | Technicien Support IT — **Freelance** | 21/07 | Freelance |
| **Teolia** | Analyste Support Applicatif / MCO — **Freelance** | 02/07 | Freelance, applicatif (recoupe niche n°2) |
| **explorer** | Consultant SIRH HR Access — Support Applicatif — **Freelance** | 24/06 | Freelance, applicatif spécialisé |
| **SystUp** | Technicien support informatique | 06/06, 29/06 | Deux publications |
| **Groupe DFM** | Technicien hotline niveau 3 | 23/05 | Hotline = à distance par nature |
| **HDB Solutions** | Technicien Support IT / Helpdesk | 07/03 | Ancien — qualification de compte seulement |
| **KATETEL** | Technicien Support Informatique & Télécom N2 | 14/04 | Ancien — qualification de compte seulement |
| **Excis Compliance** | Ingénieur support poste de travail & réseau L2 — « en interne » | 28/08 | Frais, mais L2 poste de travail → vérifier si on-site |
| **METALINE** ⚠️ déjà en base | Tech Support N1/N2 **bilingue FR/EN** | 29/07 | Fiche existante `PROSPECT-ANALYSIS-Metaline.md` → **motif de relance**, et le bilingue FR/EN est un point fort Salverys |

### 3.b — Priorité 2 : éditeurs SaaS / support applicatif (niche n°2)

| Compte | Poste vu | Date | Pourquoi |
|---|---|---|---|
| **SOFTWAY MEDICAL** | Technicien Support Client | 23/06 | **Meilleure cible du lot** : éditeur logiciel santé → croise les niches n°2 (support applicatif SaaS) et n°3 (médical) |
| **Fichorga** | Technicien helpdesk | 11/06 | Éditeur logiciels laboratoire / biomédical |
| **NSI** | Consultant Support Applicatif / Fonctionnel — assurance | 04/07 | Support applicatif métier |
| **ADEC SAS** | Technicien / Technicienne Support Logiciel | 26/07 | Support produit éditeur |
| **Infinite Hotel** | **Support applicatif Niveau 1** | 02/06 | Intitulé exactement égal à l'offre |

### 3.c — À écarter : offres sur site / proximité VIP (non délocalisables)

**Flexify** (N1/N2 VIP, republiée ~20 fois du 02/08 au 24/08), **TVM TECHNOLOGIES** (proximité VIP,
05/06), **HELPLINE France** (support proximité VIP, 03/07 — déjà en base l209), **Siconsulting**
(24/07, à vérifier), **Y&M Consulting** (18/06, à vérifier).

> La republication quotidienne d'une même offre (cas Flexify) **n'est pas** un signal de tension
> plus fort : c'est le mécanisme de rappel de l'alerte. Ne pas compter les doublons comme des
> signaux distincts.

### 3.d — Prospects direct, pas MB (2e temps du GTM)

Entreprises finales recrutant un technicien support interne : Ramsay Santé, Groupe OC Santé,
Institut Arthur Vernes, Fondation Santé Service (santé privée → recoupe la niche n°3), Free Pro,
Kontron, Prosol, The Kooples, Novelty, Coutot-Roehrig, Agrobiothers, De Particulier à Particulier,
L'Union Des Forgerons, Citroën, VINCI, Groupe Actual, axions informatique, Pleiade Sante RH,
Colombes Habitat Public, IAF, Collège Sévigné, Euro Tech Conseil France, Prevlink, Twyce.

**À exclure d'office** (marchés publics, souveraineté des données, cycle inatteignable à 0 salarié) :
Naval Group, Sécurité Sociale, CNCCFP, GHPSO, Centre Hospitalier Sud Francilien, Caisse de
Prévoyance et de Retraite des Notaires, Amentum.

### 3.e — Piste Canada (marginale mais notée)

**Convergence Networks** — « Service Desk Administrator 1 », 30/05. MSP nord-américain, service desk.
Cohérent avec la cible canadienne (`PROMPT-RECHERCHE-PROSPECTS-IT-Canada.md`). Une seule occurrence,
à qualifier avant d'investir.

### 3.f — À ne pas prospecter : concurrents et employeurs locaux

Concentrix, Foundever, Konecta, Orange Business (Tana), MaaSil Inc, Offshore Value, Aceolution,
Workster, TalentPop App, Wisecom, HaiRun Technology, Ingenosya, Publika Group, RAJABALI Group.
**Valeur réelle : veille salariale et concurrentielle** (ce que paie le marché local pour un
support N1 FR/EN), pas prospection.

---

## 4. Ce que ces alertes ne peuvent pas faire

Trois limites à avoir en tête avant d'investir du temps là-dedans :

1. **L'alerte est calibrée « candidat », pas « marché ».** Elle sort ~1 offre/jour, choisie pour
   ressembler au profil du destinataire. Ce n'est pas un balayage du marché, c'est un échantillon
   biaisé. On ne peut pas en déduire « il y a N ESN en tension en France ».
2. **Elle est en retard.** Le mail arrive après publication, parfois plusieurs semaines (offres
   « Publication le 27/02 » reçues le 28/05).
3. **Elle ne dit pas qui appeler.** Le nom de la société, pas le décideur. Le travail de
   `sales-contacts` / Sales Navigator reste entier — c'est là qu'est le coût réel, pas dans la
   détection.

---

## 5. Faire venir les offres à nous — plan par palier

Contrainte de cadrage : **fondateur seul, burn ~65 €/mois, 0 salarié.** Le goulot n'est pas de
trouver des comptes — il y en a déjà 75 en base non traités — c'est le **temps d'appel**. Tout
dispositif qui produit plus de comptes sans produire plus d'appels est un faux progrès.
Même raisonnement que la décision Emelia du 28/08.

### Palier 0 — corriger l'existant (gratuit, ~1 h, à faire cette semaine)

1. **Reparamétrer l'alerte Indeed/Glassdoor** sur des requêtes de veille et non de candidature :
   `"technicien support N1" OR "helpdesk" OR "service desk" OR "support applicatif niveau 1"`,
   France, tri par date. Créer **une alerte séparée filtrée sur contrat = freelance/mission** :
   c'est celle qui isole les ESN en tension, le meilleur signal du lot.
2. **Refaire les alertes LinkedIn sur la France.** Les deux alertes actives (« Spécialiste
   informatique (Madagascar) », « Support Applicatif (Madagascar) ») ne produisent que du bruit.
   LinkedIn a d'ailleurs demandé le 04/07 si elles devaient être conservées — répondre non.
3. **Se désabonner d'Intch** (aucun contenu) et créer une vraie alerte WTTJ ou s'en désabonner.
4. **Router toutes les alertes vers une adresse dédiée** (`veille@…` sur le domaine GWS existant)
   pour sortir la veille de la boîte perso et garder la boîte de prospection propre.

### Palier 1 — l'inversion qui compte vraiment (gratuit, gros ROI)

C'est ici que se trouve la réponse à « que les offres viennent à nous » :

5. **Se référencer côté offre de capacité, pas côté candidat.** Sur les plateformes de missions IT
   (Free-Work espace entreprise, Mindquest, Aravati), s'inscrire comme **société de prestation**.
   Quand une ESN publie une mission N1/N2, elle devient visible aux prestataires référencés — et
   c'est elle qui reçoit une proposition, au lieu qu'on la chasse.
6. **Répondre aux missions freelance N1/N2 en tant que Salverys**, avec un ETP salarié. C'est
   littéralement la marque blanche : l'ESN cherche une ressource pour une position facturable,
   on propose une position ferme sans risque de requalification pour elle. Argument direct,
   déclencheur naturel, pas de cold.
7. **Activer le filtre « recrute actuellement » de Sales Navigator sur les 58 ESN déjà listées.**
   Gratuit (l'abonnement existe), et bien supérieur à toute alerte générique : on est alerté quand
   *une cible déjà qualifiée* publie une offre N1. C'est le seul dispositif de détection à monter
   maintenant. Cf. `02-Prospection/PLAYBOOK-SALES-NAVIGATOR.md`.
8. **Alertes France Travail + Free-Work par email** (gratuites, sans code) sur les codes métier
   support/helpdesk. Couverture bien supérieure à Glassdoor sur le marché français.

### Palier 2 — inbound lent (à lancer, rendement différé)

9. **Publier une page « sous-traitance / partenaire MB » indexable** sur le site. Le
   `ONEPAGER-PARTENAIRE-MB.md` existe mais n'est pas une page web. Requêtes visées :
   « sous-traitance helpdesk N1 », « externaliser service desk niveau 1 », « débordement hotline ».
10. **Référencement dans les réseaux MSP/ESN FR** (Cinov Numérique, EuroCloud, clubs MSP) et les
    annuaires de prestataires nearshore. Crédibilité + inbound lent.

### Palier 3 — à n'ouvrir que si un 2e opérateur commercial arrive

11. **SaaS de hiring intent** (TheirStack, Predictleads) : ils font exactement ça — offres d'emploi
    transformées en signal d'achat, API, filtres pays/métier, export CSV. Quelques dizaines à
    ~100 €/mois. C'est la bonne réponse **le jour où quelqu'un peut traiter le flux**.
12. **Connecteur API France Travail v2 → Airtable** (gratuit côté API, coût = code + maintenance).
    Conformément à la règle SaaS-first du `CLAUDE.md` : ne pas le construire tant qu'un abonnement
    à ~100 €/mois couvre le besoin, et de toute façon **pas avant d'avoir un opérateur** pour
    exploiter le flux.

> **Condition de déclenchement du palier 3 — identique à celle d'Emelia :** un 2e opérateur
> commercial existe, ou la détection manuelle devient durablement le goulot (ce qui n'est pas le
> cas aujourd'hui : 75 comptes en base non traités).

---

## 6. Actions immédiates

- [ ] Importer `exports/SIGNAUX-RECRUTEMENT-nouveaux-comptes.csv` dans Airtable « Prospection Salverys »
- [ ] Appeler en priorité les 3 signaux d'août : **NEOMSYS**, **sevenopportunity**, **Excis Compliance**
- [ ] Relancer **METALINE** (fiche existante + offre bilingue FR/EN du 29/07 comme accroche)
- [ ] Qualifier **SOFTWAY MEDICAL** (niche 2 × niche 3) via `sales-contacts`
- [ ] Palier 0 en entier (1 h)
- [ ] Palier 1, points 5-7 — le seul vrai levier d'inbound à coût nul
