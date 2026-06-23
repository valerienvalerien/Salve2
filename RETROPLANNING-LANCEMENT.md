# RÉTROPLANNING — Lancement commercial Salverys

> Établi le **2026-06-23**. Horizon **6 semaines (jalon) / 2 mois (cible)**.
> Construit à rebours d'un **J0** et **en fonction de ce qu'il reste réellement à faire** (pas du
> travail déjà produit, qui est largement bouclé — voir §2).
> Respecte la séquence directrice **Prospection → Équipe → Infrastructure** et le **GTM marque
> blanche d'abord** (`CLAUDE.md`).

---

## 1. La cible (J0) et le jalon

- **J0 — semaine du 17 août 2026 (≈ 8 semaines) : machine commerciale en régime.**
  Cold mailing en volume sur les 3 niches MB, vivier pré-qualifié prêt à activer, premiers RDV
  donneurs d'ordre transformés en négociations, **cadre juridique prêt à signer et à délivrer
  un 1er contrat marque blanche**.
- **Jalon 6 semaines — semaine du 4 août : rampe lancée.**
  Cold en volume parti, premiers RDV pris avec des donneurs d'ordre, vivier qualifié, site live.

Pourquoi cette borne et pas « 3 mois » : le seul élément réellement incompressible est la
**délivrabilité email** (warmup `salverys-bpo.fr` jusqu'au 15/07 + ~2 semaines de chauffe Emelia
sur de nouvelles boîtes). Tout le reste peut se mener **en parallèle** sur 6-8 semaines. Au-delà,
on ne gagne pas en préparation, on perd en élan.

---

## 2. Ce qui est DÉJÀ fait (ne pas refaire)

Stratégie & offre, pricing (source de vérité), séquences cold (médical, télésec MB, IT N1 MB),
scripts d'appel, objections (dont anti-low-cost), one-pagers, CRM (180 leads seedés), modèles
**contrat / devis / DPA-RGPD / onboarding**, process **QA double-écoute** + reporting client,
conformité HDS/RGPD, prévisionnel v2 + trésorerie, site + simulateurs, chartes, espaces
client/candidat, outils de vivier (mini-test, scripts screening, guides Airtable/Notion).

→ **Le chantier n'est plus de produire des documents. Il est de les mettre en production.**

## 3. Ce qu'il RESTE à faire (les vrais trous)

| # | Trou | Pourquoi c'est bloquant | Chantier |
|---|---|---|---|
| T1 | **1 seul domaine cold**, warmup fini le 15/07 ; Emelia pas branché | Sans délivrabilité, la prospection MB n'existe pas. **Chemin critique.** | Prospection |
| T2 | **Pas de liste MB nettoyée** par niche (le CRM est seedé, pas ciblé donneurs d'ordre) | On ne peut pas lancer une séquence sans cibles qualifiées | Prospection |
| T3 | **Vivier vide** (outils prêts, 0 candidat qualifié), **2 managers** non identifiés | « Embauche au rythme des contrats » ≠ pas de vivier ; un manager = long délai | Équipe |
| T4 | **Cadre juridique à verrouiller** : entité, relecture contrat/DPA, **NDA business dev** | Sans entité + contrat signable, impossible de closer un donneur d'ordre | Closing |
| T5 | **Site/domaine marque** : `index.html` prêt mais déploiement + `salverys.fr` (M365) à confirmer | Le prospect qui clique doit atterrir sur un vrai site crédible | Site |
| T6 | **Business dev à cadrer** : périmètre, objectifs chiffrés, accès CRM, attendus livrables | Elle livre cette semaine ; éviter le flou de pilotage | Pilotage |
| T7 | **Infra délivrabilité physique** (groupe électrogène, double FAI, postes) non engagée | À cadrer maintenant, à **déclencher au 1er contrat** (séquence) | Infra |

---

## 4. Le rétroplanning (4 chantiers en parallèle)

Légende rôles : **[D]** Direction · **[BD]** Business dev · **[D+BD]** à deux.

### Semaine 0 — 23-29 juin (en cours)
- **Prospection** : continuer le warmup `salverys-bpo.fr` (S4, 20-30 mails/j). **Acheter les 2e/3e
  domaines cold** (`salverys-bpo.com`, `getsalverys.fr` ou `salverys-pro.fr`) + DNS Cloudflare. [D]
- **Closing/Pilotage** : **faire signer la NDA** à la business dev (elle le propose) ; cadrer son
  **périmètre + objectifs chiffrés** (ex. nb RDV donneurs d'ordre/sem.) ; lui donner accès au CRM. [D+BD]
- **Pilotage** : définir **ce qu'on attend de ses livrables** de fin de semaine, par écrit. [D]

### Semaine 1 — 30 juin-6 juil
- **Prospection** : créer les **boîtes GWS** (2/domaine) + SPF/DKIM/DMARC + mail-tester 10/10 +
  redirection vers `salverys.fr` ; **brancher Emelia** et **lancer SA chauffe** (plafond bas). [D]
- **Prospection** : démarrer la **liste MB niche 1** (télésecrétariats médicaux FR sous-traitants) à
  partir des analyses de `03-Cibles-Prospects/` → nettoyée, dédoublonnée, dans le CRM. [BD]
- **Équipe** : **ouvrir le sourcing vivier** (posts groupes FB, `07-Recrutement-Vivier`) — viser
  d'abord les **2 managers** (1 médical, 1 IT), délai le plus long. [D]
- **Site** : **déployer le site (Netlify)** + vérifier `salverys.fr` opérationnel sur M365. [D]

### Semaine 2 — 7-13 juil
- **Prospection** : warmup `salverys-bpo.fr` en phase finale (S5, ~50 mails, 1ers cold) ; chauffe
  Emelia des nouvelles boîtes qui monte. [D]
- **Prospection** : **listes MB niches 2 & 3** (éditeurs SaaS support N1 ; ESN/MSP helpdesk). [BD]
- **Équipe** : **mini-tests** aux 1ers candidats (`MINI-TEST-Qualification`), shortlist managers. [D+BD]
- **Closing** : **relecture juridique légère** du contrat de prestation + DPA ; valider l'entité
  (immatriculation, mentions légales en ligne). [D]

### Semaine 3 — 14-20 juil  ⟵ **fin warmup manuel (15/07)**
- **Prospection** : **1re campagne cold réelle** depuis `salverys-bpo.fr` → **niche 1 MB** (20-30/j).
  Les nouvelles boîtes Emelia finissent leur chauffe. [D+BD]
- **Prospection** : préparer les **séquences chargées dans Emelia** (telesec-MB, IT-N1-MB). [BD]
- **Équipe** : **entretiens managers** + 1ers agents ; viser **2 managers quasi-fermés**. [D]

### Semaine 4 — 21-27 juil
- **Prospection** : **passage en volume multi-boîtes** (les 4-6 adresses chauffées) sur **niches 1+2** ;
  premiers RDV donneurs d'ordre. **Relances** activées dans Emelia. [D+BD]
- **Équipe** : **vivier pré-qualifié** = 2 managers + ~4 agents prêts à activer (sans embauche ferme). [D+BD]
- **Closing** : **répéter le pitch donneur d'ordre** + objections (script anti-low-cost) avant les RDV. [BD]

### Semaine 5 — 28 juil-3 août
- **Prospection** : **3 niches MB en campagne**, cadence stabilisée ; pipeline qualifié dans le CRM. [BD]
- **Closing** : **1ers RDV → propositions/devis** envoyés à des donneurs d'ordre. [D+BD]
- **Infra** : **cadrer (devis, pas déployer)** groupe électrogène + onduleurs + double FAI + postes ;
  prêt à déclencher au 1er « oui ». [D]

### Semaine 6 — 4-10 août  ⟵ **JALON « rampe lancée »**
- Cold en volume sur les 3 niches, **premiers RDV transformés en négociations**, vivier prêt,
  site live, cadre juridique signable. **Revue de pipeline** : combien de donneurs d'ordre en
  négociation vs point mort (2-3 contrats) ? [D+BD]

### Semaines 7-8 — 11-23 août  ⟵ **CIBLE J0 : 1er contrat MB**
- **Closing** : **signer le 1er contrat marque blanche.** [D+BD]
- **Équipe → Infra** : **activer le manager + agents** de la niche concernée ; **déclencher l'infra**
  (séquence respectée : l'infra suit le contrat). [D]
- **Delivery** : lancer l'**onboarding client** + QA double-écoute dès le 1er jour de prod. [D+BD]

---

## 5. Chemin critique & risques

1. **Délivrabilité (T1)** — *le* goulot. Toute campagne avant fin de chauffe = spam (déjà arrivé
   sur `salverys-bpo.fr`). Mitigation : démarrer l'achat domaines + chauffe Emelia **dès S0-S1**,
   ne pas attendre.
2. **Managers (T3)** — délai de recrutement le plus long. Démarrer le sourcing **S1**, pas plus tard.
3. **Cadre juridique (T4)** — un contrat non relu/une entité non prête bloque le closing au pire
   moment. À verrouiller **avant S5** (1ers devis).
4. **Tentation d'envoyer trop tôt / sans liste propre (T2)** — bounces = blacklistage (récupération
   en semaines). Listes nettoyées **avant** chaque mise en séquence.
5. **Dépendance business dev** — attendre ses livrables (fin de semaine) pour caler le périmètre,
   mais **ne pas bloquer le chemin critique** (domaines, chauffe, vivier) dessus.

---

## 6. Résumé en une ligne par semaine

| Sem. | Dates | Cap de la semaine |
|---|---|---|
| S0 | 23-29 juin | NDA + cadrage BD · achat domaines cold |
| S1 | 30 juin-6 juil | Boîtes GWS + Emelia en chauffe · liste MB niche 1 · sourcing managers · site live |
| S2 | 7-13 juil | Listes MB niches 2-3 · mini-tests · relecture juridique |
| S3 | 14-20 juil | **1re campagne cold réelle (niche 1)** · entretiens managers |
| S4 | 21-27 juil | Volume multi-boîtes · vivier pré-qualifié · 1ers RDV |
| S5 | 28 juil-3 août | 3 niches en campagne · 1ers devis · infra cadrée |
| S6 | 4-10 août | **Jalon : rampe lancée**, négociations en cours |
| S7-8 | 11-23 août | **Cible : 1er contrat MB signé → activation équipe + infra** |
