# RÉTROPLANNING — Lancement commercial Salverys

> ## ⛔ CADUC AU 2026-08-28 — document d'archive
>
> Ce rétroplanning n'est plus exécutable. Trois de ses hypothèses fondatrices sont tombées :
>
> | Hypothèse du plan | Réalité au 2026-08-28 |
> |---|---|
> | J0 (1er contrat MB) = semaine du 17 août | **Dépassé.** Aucune campagne cold n'est partie. |
> | Un business dev [BD] exécute la moitié des tâches | **Poste terminé le 2026-08-27.** Le fondateur est seul. |
> | Emelia souscrit dès S0 (chemin critique T1) | **Jamais souscrit** — et volontairement reporté (`CLAUDE.md`). |
>
> **Ce qui reste valable et ne doit pas être refait** : le §2 « ce qui est DÉJÀ fait »
> (stratégie, pricing, séquences, scripts, closing, delivery, conformité) et l'ordre
> directeur **Prospection → Équipe → Infrastructure**.
>
> **Le plan en vigueur est `02-Prospection/PLAYBOOK-SALES-NAVIGATOR.md`** (mode solo,
> téléphone d'abord, 20 comptes travaillés en profondeur). Le simulateur
> `retroplanning-salverys.html` porte les mêmes hypothèses caduques (rôles 👤/💼,
> NDA, chauffe Emelia) et n'est plus à jour.
>
> ---
>
> Établi le **2026-06-23**, mis à jour le **2026-06-24** (synchro `main` : niches IT-first,
> 2 domaines cold en place, vivier réel à 14, NDA Vololona prête, ajout chantier branding).
> Horizon **6 semaines (jalon) / 2 mois (cible)**.
> Construit à rebours d'un **J0** et **en fonction de ce qu'il reste réellement à faire**.
> Respecte la séquence directrice **Prospection → Équipe → Infrastructure** et le **GTM marque
> blanche d'abord** (`CLAUDE.md`). Entité juridique : **VJUS** (nom commercial Salverys),
> gérant **Valérien Rakotosalama**.

> **Priorité des niches (décision direction 2026-06-22) — IT-first :**
> **1) Support applicatif N1 éditeurs SaaS FR · 2) Helpdesk IT N1 · 3) Télésecrétariat médical**
> · (relation client = futur non déterminé). Le cold, le site et la prospection démarrent **IT**.

---

## 1. La cible (J0) et le jalon

- **J0 — semaine du 17 août 2026 (≈ 8 semaines) : machine commerciale en régime.**
  Cold mailing en volume **IT-first** sur les niches MB, vivier consolidé prêt à activer, premiers
  RDV donneurs d'ordre transformés en négociations, **cadre juridique prêt à signer et à délivrer
  un 1er contrat marque blanche**.
- **Jalon 6 semaines — semaine du 4 août : rampe lancée.**
  Cold en volume parti, premiers RDV pris avec des donneurs d'ordre (ESN/MSP, éditeurs SaaS),
  vivier qualifié, site live, présence LinkedIn gérant + Salverys active.

Pourquoi cette borne et pas « 3 mois » : le seul élément réellement incompressible est la
**délivrabilité email** (warmup `salverys-bpo.fr` jusqu'au 15/07 + souscription Emelia et ~2 semaines
de chauffe des boîtes dans Emelia). Tout le reste se mène **en parallèle** sur 6-8 semaines.

---

## 2. Ce qui est DÉJÀ fait (ne pas refaire)

- **Stratégie & offre, pricing** (source de vérité), séquences cold (IT N1 MB, télésec MB, médical),
  scripts d'appel, objections (dont anti-low-cost), one-pagers, CRM (180 leads seedés).
- **Closing** : modèles contrat / devis / **DPA-RGPD** / onboarding ; **NDA Vololona prête à signer**
  + modèle NDA réutilisable (entité VJUS).
- **Delivery** : process QA double-écoute + reporting client ; conformité HDS/RGPD.
- **Finance** : prévisionnel v2 + trésorerie ; **simulateur de rémunération BD** (OTE ~1000 €, 4 modèles).
- **Infra cold** : **2 domaines déjà en place** sur GWS (`salverys-bpo.fr`, `salverys-groupe.fr`).
- **Vivier** : **14 candidats** dans Airtable (`Vivier Salverys`), dont des A (VIV-0007 « Ialy »,
  VIV-0012 « Iavo », VIV-0010 Vololona) et plusieurs profils **IT N1 / Support SaaS** (VIV-0011,
  VIV-0013, VIV-0014) — cohérent avec l'IT-first.
- Site + simulateurs (re-thémés IT/médical), chartes, espaces client/candidat, **fiche onboarding
  Vololona**.

→ **Le chantier n'est plus de produire des documents. Il est de les mettre en production.**

## 3. Ce qu'il RESTE à faire (les vrais trous, corrigés)

| # | Trou | Pourquoi c'est bloquant | Chantier |
|---|---|---|---|
| T1 | **Emelia pas souscrit** ; le 2e domaine (`salverys-groupe.fr`) **pas renseigné dans Emelia** ; boîtes pas chauffées dans Emelia | Sans délivrabilité, la prospection MB n'existe pas. **Chemin critique.** | Prospection |
| T2 | **Pas de liste MB nettoyée** par niche **IT d'abord** (éditeurs SaaS, ESN/MSP) | On ne lance pas une séquence sans cibles qualifiées | Prospection |
| T3 | **Vivier à consolider** (relancer les ⚠️, fiabiliser les notes) et **2 managers à verrouiller** (1 IT, 1 médical) | « Embauche au rythme des contrats » suppose un vivier prêt à activer | Équipe |
| T4 | **Cadre juridique** : VJUS OK ; **faire signer la NDA Vololona**, relecture conseil local (clause pénale/anti-requalification), relecture contrat/DPA | Sans contrat signable validé, impossible de closer | Closing |
| T5 | **Site/domaine marque** : `index.html` re-thémé prêt ; **déploiement + `salverys.fr` (M365)** à confirmer | Le prospect (et le donneur d'ordre) qui clique doit atterrir sur un vrai site | Site |
| T6 | **Branding gérant + marque Salverys** quasi inexistant en ligne | Un donneur d'ordre IT (ESN/éditeur) **google le fondateur avant de sous-traiter** | Branding |
| T7 | **Infra physique** (groupe électrogène, kits d'autonomie agents, postes) non engagée | À cadrer maintenant, à **déclencher au 1er contrat** (séquence) | Infra |

---

## 4. Le rétroplanning (5 chantiers en parallèle)

Légende rôles : **[D]** Direction (Valérien, gérant) · **[BD]** Business dev (Vololona) · **[D+BD]** à deux.

### Semaine 0 — 23-29 juin (en cours)
- **Closing/Pilotage** : **faire signer la NDA à Vololona** (prête, VJUS) ; cadrer **périmètre +
  objectifs chiffrés** (ex. nb RDV donneurs d'ordre/sem.) ; accès CRM. **Elle prépare sa propre
  analyse** (livrée en fin de S0). [D+BD]
- **Prospection** : **souscrire l'abonnement Emelia** ; **renseigner les 2 domaines** (`salverys-bpo.fr`
  + `salverys-groupe.fr`) dans Emelia ; lancer **sa chauffe intégrée**, plafond bas. [D]
- **Branding** : optimiser le **profil LinkedIn du gérant** + créer/optimiser la **page Salverys**
  (ligne de positionnement : process documentés, qualité, IT-first). [D]

### Semaine 1 — 30 juin-6 juil
- **Pilotage** : **intégrer l'analyse de Vololona** au plan (livrée en fin de S0). [D+BD]
- **Prospection** : warmup `salverys-bpo.fr` (S5, ~50 mails) ; chauffe Emelia des boîtes qui monte. [D]
- **Prospection** : **liste MB niche 1 (éditeurs SaaS FR — support N1)** à partir de `03-Cibles-Prospects/`
  (ESN-TARGETS, analyses prospects) → nettoyée, dédoublonnée, dans le CRM. [BD]
- **Équipe** : **relancer les candidats vivier ⚠️** (VIV-0007/0008/0010-013…) ; **verrouiller les
  2 managers** (priorité **manager IT**, niche n°1 — délai le plus long). [D]
- **Site** : **déployer le site (Netlify)** + vérifier `salverys.fr` opérationnel sur M365. [D]
- **Branding** : démarrer une **cadence de posts** (fondateur, angle IT/qualité). [D+BD]

### Semaine 2 — 7-13 juil
- **Prospection** : **liste MB niche 2 (ESN/MSP — helpdesk IT N1)** ; médical en n°3. [BD]
- **Équipe** : **mini-tests** aux candidats clés (`MINI-TEST-Qualification`), fiabiliser notes A/B. [D+BD]
- **Closing** : **relecture conseil local** (NDA déjà signée → contrat de prestation + DPA) ;
  confirmer mentions légales en ligne (VJUS). [D]
- **Branding** : **social selling** — connexions ciblées avec décideurs ESN/éditeurs (canal chaud
  parallèle au cold). [BD]

### Semaine 3 — 14-20 juil  ⟵ **fin warmup manuel (15/07)**
- **Prospection** : **1re campagne cold réelle → niche 1 IT (éditeurs SaaS, support N1 MB)** (20-30/j) ;
  boîtes Emelia (2 domaines) en fin de chauffe. [D+BD]
- **Prospection** : **séquences chargées dans Emelia** (IT-N1-MB, puis télésec-MB). [BD]
- **Équipe** : **2 managers quasi-fermés** (IT prioritaire) + 1ers agents IT identifiés. [D]

### Semaine 4 — 21-27 juil
- **Prospection** : **volume multi-boîtes** (4 adresses chauffées, 2 domaines) sur **niches IT 1+2** ;
  premiers RDV donneurs d'ordre ; **relances** activées. [D+BD]
- **Équipe** : **vivier pré-qualifié** = 2 managers + ~4 agents (IT en tête) prêts à activer. [D+BD]
- **Closing** : **répéter le pitch donneur d'ordre IT** + objections avant les RDV. [BD]

### Semaine 5 — 28 juil-3 août
- **Prospection** : **3 niches MB en campagne** (IT 1+2, médical), cadence stabilisée ; pipeline CRM. [BD]
- **Closing** : **1ers RDV → propositions/devis** envoyés à des donneurs d'ordre IT. [D+BD]
- **Infra** : **cadrer (devis, pas déployer)** groupe électrogène + onduleurs + **kits d'autonomie agents** + postes. Le devis des kits alimente la ligne capex du prévisionnel (`FINANCE-PREVISIONNEL.md §2`). [D]

### Semaine 6 — 4-10 août  ⟵ **JALON « rampe lancée »**
- Cold en volume IT-first, **premiers RDV transformés en négociations**, vivier prêt, site live,
  présence LinkedIn active. **Revue de pipeline** : donneurs d'ordre en négociation vs point mort
  (2-3 contrats) ? [D+BD]

### Semaines 7-8 — 11-23 août  ⟵ **CIBLE J0 : 1er contrat MB**
- **Closing** : **signer le 1er contrat marque blanche** (IT en priorité). [D+BD]
- **Équipe → Infra** : **activer le manager IT + agents** ; **déclencher l'infra** (l'infra suit le contrat). [D]
- **Delivery** : **onboarding client** + QA double-écoute dès le 1er jour de prod. [D+BD]

---

## 5. Chemin critique & risques

1. **Délivrabilité (T1)** — *le* goulot. **Souscrire Emelia + renseigner les 2 domaines** dès **S0**,
   chauffe avant tout envoi (un envoi prématuré = spam, déjà vécu sur `salverys-bpo.fr`).
2. **Managers (T3)** — délai le plus long ; **verrouiller le manager IT** (niche n°1) **dès S1**.
3. **Cadre juridique (T4)** — NDA Vololona à signer en S0 ; contrat/DPA relus **avant S5** (1ers devis).
4. **Listes propres (T2)** — bounces = blacklistage. Nettoyer **avant** chaque mise en séquence.
5. **Branding fondateur (T6)** — pas un « nice-to-have » en MB IT : un donneur d'ordre vérifie le
   gérant en ligne avant de confier sa relation client. À démarrer **dès S0**, effet cumulatif.
6. **Dépendance business dev** — intégrer l'analyse de Vololona, **sans bloquer** le chemin critique
   (Emelia, chauffe, manager IT) dessus.

---

## 6. Résumé en une ligne par semaine

| Sem. | Dates | Cap de la semaine |
|---|---|---|
| S0 | 23-29 juin | NDA Vololona signée · **souscrire Emelia + 2 domaines** · LinkedIn gérant/Salverys |
| S1 | 30 juin-6 juil | Liste MB éditeurs SaaS · **verrouiller manager IT** · site live · 1ers posts |
| S2 | 7-13 juil | Liste MB ESN/MSP · mini-tests · relecture juridique · social selling |
| S3 | 14-20 juil | **1re campagne cold réelle (IT n°1)** · managers quasi-fermés |
| S4 | 21-27 juil | Volume multi-boîtes (IT 1+2) · vivier pré-qualifié · 1ers RDV |
| S5 | 28 juil-3 août | 3 niches en campagne · 1ers devis · infra cadrée |
| S6 | 4-10 août | **Jalon : rampe lancée**, négociations en cours |
| S7-8 | 11-23 août | **Cible : 1er contrat MB signé → activation équipe IT + infra** |
