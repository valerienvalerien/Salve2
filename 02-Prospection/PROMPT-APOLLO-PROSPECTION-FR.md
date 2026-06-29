# Apollo.io — Recherche de clients (France) · marque-blanche-first, IT n°1

> Mise à jour 2026-06-29 | Aligné sur `CLAUDE.md` + `03-Cibles-Prospects/IDEAL-CUSTOMER-PROFILE.md`.
> **GTM marque-blanche-first**, **priorité IT (Support N1 SaaS + Helpdesk IT) > médical > relation client**.

## À lire avant tout : Apollo ne marche pas « au prompt »

Apollo.io est une **base de données B2B**, pas une IA générative. La recherche fiable et
reproductible se fait avec des **filtres** (poste, localisation, effectif, secteur, mots-clés,
signaux). La barre « langage naturel » (Apollo AI) ne fait que **traduire ta phrase en filtres** —
elle se trompe souvent sur l'effectif et le secteur. **Donc :**

1. Utilise la **config de filtres** ci-dessous (méthode principale, fiable).
2. Le **prompt langage naturel** est fourni en secours / point de départ, à corriger ensuite à la main.

Règle d'or Apollo : on filtre d'abord les **entreprises** (People search → onglet Companies pour
valider la cible), puis on filtre les **personnes** (les bons décideurs). Vise **toujours le
propriétaire opérationnel** (Head of Support, Directeur Delivery), **jamais** le commercial ni les RH.

---

## 🎯 Recherche 1 — Éditeurs SaaS / prestataires support (IT n°1, marque blanche)

**Objectif :** trouver des Head of Support / Customer Care / COO qui n'arrivent plus à staffer leur N1.

### Filtres Apollo (People search)
- **Person → Job titles** (inclure) :
  `Head of Support`, `Responsable Support`, `Customer Support Manager`, `Directeur Support`,
  `Head of Customer Care`, `Responsable Relation Client`, `Customer Success Director`, `COO`,
  `Directeur des Opérations`, `VP Customer Experience`
  - *(structures < 50 pers. seulement :* ajouter `CEO`, `Fondateur`, `CTO`*)*
- **Person → Location** : `France`
- **Company → Employees** : `11-50`, `51-200`, `201-500` (cocher les 3)
- **Company → Industry / Keywords** :
  `SaaS`, `Software`, `Computer Software`, `Information Technology & Services`, `Internet`
- **Company → Company keywords** (champ Keywords) :
  `logiciel`, `SaaS`, `plateforme`, `application métier`, `éditeur`
- **Company → Location (HQ)** : `France`
- **Signaux d'achat (onglet Signals / Filters avancés)** :
  - ✅ **Hiring** → poste contenant `Support`, `Customer`, `Helpdesk`, `Technicien`
  - ✅ **Job postings active** (l'entreprise recrute actuellement = douleur de staffing)
  - ✅ **Recent funding** (levée < 18 mois = croissance des tickets)
- **Person → Email status** : `Verified` uniquement (évite de cramer la délivrabilité Emelia)

### Décideurs à viser
Head of Support / Customer Care / COO. **Pas le CEO** sauf entreprise < 50 personnes.

---

## 🎯 Recherche 2 — ESN / MSP / infogérance (Helpdesk IT N1, marque blanche)

**Objectif :** trouver des fondateurs/Directeurs Delivery d'ESN-MSP avec des postes helpdesk ouverts.

### Filtres Apollo
- **Person → Job titles** :
  `Directeur Delivery`, `Directeur des Opérations`, `Responsable Service Desk`,
  `Responsable Centre de Services`, `Service Delivery Manager`, `Directeur de Production`,
  `Head of Managed Services`, `COO`
  - *(ESN < 100 pers. :* ajouter `Fondateur`, `Dirigeant`, `Gérant`, `Président`*)*
  - ❌ **Exclure** (Person → exclude titles) : `Commercial`, `Sales`, `Business Developer`, `RH`, `Recruteur`
- **Person → Location** : `France`
- **Company → Employees** : `51-200`, `201-500` (cœur de cible ESN/MSP)
- **Company → Industry / Keywords** :
  `Information Technology & Services`, `IT Services`, `Managed Services`, `Computer & Network Security`
- **Company → Company keywords** :
  `ESN`, `infogérance`, `MSP`, `services managés`, `helpdesk`, `support utilisateur`, `24/7`, `TMA`
- **Signaux d'achat** :
  - ✅ **Hiring** → `Technicien support`, `Technicien helpdesk`, `Support N1`, `Hotline`
  - ✅ Mention `24/7` / `astreinte` dans la fiche (besoin de couverture horaire = angle Tana UTC+3)

### Décideurs à viser
Fondateur/DG (< 100 pers.) · Directeur des Opérations / Directeur Delivery (au-delà).
**Jamais** la direction commerciale ni les RH.

---

## 🎯 Recherche 3 — Télésecrétariats médicaux français (médical n°2, marque blanche)

**Objectif :** dirigeants de télésecrétariats FR qui ont la clientèle médecins mais pas la capacité offshore.

### Filtres Apollo
- **Person → Job titles** : `Fondateur`, `Dirigeant`, `Gérant`, `Président`, `Directeur Général`, `CEO`
- **Person → Location** : `France`
- **Company → Employees** : `1-10`, `11-50` (structures où le dirigeant décide seul)
- **Company → Company keywords** :
  `télésecrétariat`, `secrétariat médical`, `permanence téléphonique`, `accueil téléphonique médical`,
  `gestion d'appels`, `secrétariat à distance`
- **Company → Industry** : `Outsourcing/Offshoring`, `Hospital & Health Care`, `Telecommunications`

> ⚠️ **Qualifier le prix d'achat cible dès le 1er échange** (cas Callmed : vend dès 0,50 €/appel).
> Cf. `EVALUATION-STRATEGIQUE-2026-06.md §1.4`. Ne viser que les créneaux que leur plateau ne couvre pas.

### Décideurs à viser
Le **fondateur/dirigeant** (structures < 50 personnes).

---

## 🤖 Prompt langage naturel (barre Apollo AI) — secours, à corriger après

> Colle-le dans la recherche en langage naturel d'Apollo, puis **vérifie/ajuste les filtres
> générés** (Apollo se trompe souvent sur l'effectif et le secteur). Un prompt = une niche.

**Pour la Recherche 1 (SaaS support) :**
```
Head of Support, Customer Support Managers and COOs at French software/SaaS companies
with 11 to 500 employees, headquartered in France, that are currently hiring support or
customer care roles. Only contacts with verified emails.
```

**Pour la Recherche 2 (ESN/MSP) :**
```
Operations Directors, Service Delivery Managers and founders at French IT services,
managed services and infogérance companies (ESN/MSP) with 51 to 500 employees in France
that are hiring helpdesk or support technicians. Exclude sales and HR titles. Verified emails only.
```

**Pour la Recherche 3 (télésecrétariat médical) :**
```
Founders and CEOs of French medical telesecretary / call-answering companies
("télésecrétariat médical", "permanence téléphonique") with 1 to 50 employees in France.
Verified emails only.
```

---

## ✅ Checklist avant export

- [ ] **Email status = Verified** coché (protège la délivrabilité de la séquence Emelia).
- [ ] Titres commerciaux / RH **exclus** (Recherche 2 surtout).
- [ ] Cible = **propriétaire opérationnel**, pas le « nom facile » (cf. point de vigilance ICP).
- [ ] Au moins **1 signal d'achat** par ligne quand c'est possible (hiring, levée, 24/7…).
- [ ] Export → import CRM (`CRM_Salverys.html`) puis branchement séquence :
  - IT MB → `02-Prospection/OUTREACH-IT-N1-marque-blanche.md`
  - Télésec MB → `02-Prospection/OUTREACH-telesec-marque-blanche.md`

## ⚠️ Garde-fous

- **Aucun claim faux.** Jamais « direction issue d'une structure de 1 000 collaborateurs ».
  Mettre en avant : francophone natif, fuseau FR, coût ~40 % inférieur, process documentés
  (script, double écoute, reporting), pilote mesuré.
- Données santé (Recherche 3) : sources publiques/pro uniquement, cadre RGPD art. 28 prêt
  dès le 1er rendez-vous (`01-Strategie-Offre/CONFORMITE-HDS-RGPD.md`).
- Prix : `PRICING.md` fait foi.
