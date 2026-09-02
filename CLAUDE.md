# CLAUDE.md — slvrs

## Contexte activité

BPO basé à Antananarivo (Madagascar) ciblant des clients **français et canadiens**.
Structure volontairement resserrée, en démarrage.

> ⚠️ **Interdit (garde-fou)** : tout argument fondé sur le parcours de la direction —
> « direction expérimentée », « a piloté des équipes de 1 000+ », « repart de zéro
> avec 10 personnes ». Ce n'est ni vérifiable ni vendeur.
> **Mettre en avant à la place** : process documentés, cadrage qualité (script, double
> écoute, reporting), pilote mesuré, SLA chiffré.

### Niches cibles (par priorité)
> ⚠️ **Ordre révisé (décision direction 2026-08-28) : le helpdesk IT N1 pour ESN/MSP passe
> n°1, le support applicatif N1 pour éditeurs SaaS passe n°2.** Motif : cycle d'achat plus
> court, douleur capacitaire plus vive (volumes de tickets récurrents + astreintes), et
> base de cibles 4× plus fournie (58 ESN/MSP qualifiées contre 15 éditeurs, dont plusieurs
> notés « forte capacité à internaliser »). L'IT reste devant le médical (décision 2026-06-22).
> Détail du raisonnement : `02-Prospection/AUDIT-PARCOURS-SALES-NAVIGATOR.md` §6.
1. **Helpdesk IT N1 distant pour ESN / MSP** (priorité absolue — IT)
2. **Support applicatif N1 pour éditeurs SaaS français** (IT)
3. Télésecrétariat médical
4. *Relation client de toutes sortes* — dans un futur non déterminé

### Séquence de développement (toujours dans cet ordre)
**Prospection → Équipe → Infrastructure**

### Stratégie GTM (décision direction, 2026-06-10)
**Objectif prioritaire : démarrer en MARQUE BLANCHE sur les 3 niches** (sous-traitance
de donneurs d'ordre : télésecrétariats médicaux FR, éditeurs/prestataires support,
ESN/MSP). Le direct (client final) vient en 2e temps. Toute priorisation de prospection,
de copy ou de chiffrage doit refléter ce MB-first.

### Modèle d'équipe (décision direction, 2026-08-14 — remplace le modèle freelance)
Équipe **100 % salariée** (CDI). Salaire **brut** d'un agent et d'un référent
d'exploitation : **à partir de 2 500 000 Ar/mois** (500 € — ~3,5× le marché local), **bande
jusqu'à 3 250 000 Ar** (~4,5×), **charges patronales CNaPS/OSTIE en sus** (~86 €/tête,
plafonnées à 8 × SME et donc **forfaitaires sur toute la bande**) ⇒ **coût employeur
~586 €/agent** à l'entrée. Objectif : **zéro turnover**.

> ⚠️ **Révision du 2026-09-02** : la grille unique à 3 250 000 Ar est remplacée par cette
> bande. Motif — dégager la marge (~150 €/tête/mois) qui financera le **bloc infrastructure
> de site** (loyer, double FAI, groupe électrogène), aujourd'hui non budgété
> (`FINANCE-PREVISIONNEL.md §8.a`). Trois règles qui en découlent :
> - **Aucun prix ne bouge** et le **plancher tarifaire reste à 920 €/ETP** : la baisse
>   finance l'infrastructure, elle n'ouvre pas de marge de négociation.
> - **L'argument public passe à « ~3,5× le marché local »** — plus jamais 4,5× dans une
>   copy, un simulateur ou un espace client.
> - **La progression dans la bande est le levier de rétention** : +250 000 Ar = 50 €/mois
>   et **zéro charge supplémentaire** (plafond déjà atteint).

- **Aucun plafond d'effectif** : on embauche sur **positions fermes facturables**, pas sur
  une cible d'équipe. Ne jamais opposer une limite de capacité à un prospect.
- **Effectif à ce jour : 0 salarié.** Le poste de développement commercial a pris fin le
  **2026-08-27**. **Le fondateur est seul et assure lui-même la prospection** — toute
  planification (cadence, volumes, objectifs) doit partir de cette contrainte et non d'une
  équipe commerciale. Conséquence financière : le burn avant premier contrat tombe à
  **~110-155 €/mois** (Sales Navigator inclus) et le point mort à **1 ETP placé** sur tous
  les paliers sauf Support 9+ (`FINANCE-PREVISIONNEL.md` §2.b/§4).
- **Un seul fondateur, non rémunéré** au lancement.
- Le **hub de repli** et la ligne **kits d'autonomie** sont sortis des charges : le kit
  reste dû à l'agent, son coût est réputé couvert par le salaire. ⚠️ À 3,5× du marché, cet
  argument ne tient que si la baisse de salaire finance effectivement un **site** qui
  reprend la continuité (groupe électrogène, double FAI) — à trancher avant la 1ʳᵉ embauche.
- Rentabilité, point mort et trésorerie : `01-Strategie-Offre/FINANCE-PREVISIONNEL.md` (v3).
  Audit de ce prévisionnel : `AUDIT-FINANCE-PREVISIONNEL.md`.

> ⚠️ Le vocabulaire « freelance », « fee », « prestataire » ne s'applique plus à l'équipe.
> Le risque de requalification disparaît ; il est remplacé par la **rigidité de l'effectif**
> (préavis + indemnité de licenciement), couverte par la clause de **volume ferme
> facturable** sur tous les paliers (`PRICING.md §3`).

### Avantage compétitif
- Fuseau horaire compatible avec la France
- Français langue maternelle
- Coût **40 à 60 % inférieur** au coût complet d'un poste interne / prestataire hexagonal
  (benchmark différencié par métier dans `PRICING.md §3/§5` : télésec 33-42 k€/an · support IT N1 38-50 k€/an)

## Marque

**Nom commercial retenu : Salverys** 

> Note technique : depuis le 2026-05-29, les clés `localStorage` du CRM
> (`CRM_Salverys.html`) sont préfixées `salverys_`. L'ancien stockage `vinlo_`/
> `nesvalo_` a été abandonné ; les CRM ouverts après cette date repartent du
> seed (180 leads + décideurs vérifiés sont définis dans le code).

## Outils retenus
- **Base de prospection : Airtable** (« Prospection Salverys » — comptes + contacts liés).
  Les CRM HTML (`CRM_Salverys*.html`) sont **hors production** depuis le 2026-08-28
  (stockage `localStorage` : non partagé, non sauvegardé, pertes constatées).
- **Cold mailing : Emelia** — outil retenu, **abonnement NON souscrit et volontairement
  reporté (décision 2026-08-28)**. Motif : l'outil sert le volume, or la contrainte est le
  temps du fondateur seul ; il impose 3-4 semaines de chauffe et un coût fixe avant le
  premier envoi. **En attendant, la prospection est téléphone + LinkedIn d'abord**, avec
  un envoi email **manuel** depuis les boîtes GWS existantes (10-20/jour max).
  Souscrire Emelia quand l'une de ces deux conditions est remplie : un 2e opérateur
  commercial existe, ou le besoin dépasse durablement 20 emails/jour.
  Cadre complet : `02-Prospection/PLAYBOOK-SALES-NAVIGATOR.md`.

## Source de vérité tarifaire

Tous les prix, grilles, benchmarks et conditions (essai/offre de lancement) sont
définis dans **`PRICING.md`** — c'est la **source unique de vérité**. Toute copy
(emails `OUTREACH-*`, CRM, simulateurs, `index.html`) doit s'aligner dessus ; en cas
de divergence, `PRICING.md` fait foi. Réflexion détaillée : `RAPPORT-PRIX.html`.

Rappels clés : priorités niches = **1) Helpdesk IT N1 ESN/MSP · 2) Support N1 SaaS ·
3) médical · 4) relation client de toutes sortes (futur non déterminé)** ; offre de lancement
= **1er mois à -50 %** (et non plus essai gratuit) ;
modèles de tarification = **ETP par position > à l'heure > à l'interaction**.

## Règle d'arbitrage : SaaS-first avant tout code maison

Avant de proposer d'implémenter une fonctionnalité dans le CRM ou dans un
projet, se poser systématiquement :

- **Est-ce qu'un SaaS résout déjà ça mieux et plus vite ?**
- **Le coût de maintenance du code maison vaut-il l'économie sur l'abonnement ?**

Si un outil externe est clairement supérieur : **le dire en premier**, avant de
proposer une implémentation technique. Cela vaut en priorité pour :
- l'**analytics**,
- les **solutions de paiement**,
- la **facturation**,
- le **tracking email**.

Le réflexe par défaut est d'acheter, pas de construire. Le code maison se
justifie seulement quand aucun SaaS ne couvre le besoin, ou quand le coût/la
dépendance du SaaS dépasse clairement le coût de maintenance.

## Style de travail attendu
- Toujours répondre en **français**.
- Être **direct et opérationnel**.
- Partir des niches, canaux et stratégies déjà définis ci-dessus.
