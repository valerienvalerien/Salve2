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
3. Télésecrétariat médical — **par les télésecrétariats FR qui sous-traitent**, pas par les
   cabinets en direct (gel du direct, 2026-09-07)
4. *Relation client de toutes sortes* — dans un futur non déterminé

### Séquence de développement (toujours dans cet ordre)
**Prospection → Équipe → Infrastructure**

### Stratégie GTM — **marque blanche uniquement** (décision 2026-06-10, **direct gelé le 2026-09-07**)
**Tout l'effort commercial va à la MARQUE BLANCHE** sur les 3 niches (sous-traitance de
donneurs d'ordre : ESN/MSP, éditeurs et prestataires de support, télésecrétariats médicaux
FR). Toute priorisation de prospection, de copy ou de chiffrage doit refléter ce **MB-only**.

> ⚠️ **Le direct (client final) est GELÉ depuis le 2026-09-07.** Il n'était déjà plus qu'« en
> 2e temps » depuis le 2026-06-10 ; il passe désormais à **zéro ressource**. Motif : à un
> fondateur seul, le temps commercial est la ressource rare — et un contrat MB vaut
> plusieurs clients finaux pour le même effort de prospection (point mort à **1-2 positions
> placées**, atteignable sur un seul deal partenaire).
>
> **Ce que le gel veut dire au quotidien** :
> - **Aucune prospection sortante en direct** — pas de séquence, pas d'appel, pas de liste.
> - **Aucun nouveau chantier en direct** — ni copy, ni simulateur, ni page, ni offre.
> - **L'entrant se sert quand même** : un cabinet ou une PME qui arrive seul se traite
>   normalement, au tarif en vigueur. Le gel supprime l'investissement, pas le chiffre
>   d'affaires offert.
> - **Ne jamais dire à un prospect que Salverys « ne fait pas de direct »** — c'est une
>   décision d'allocation interne, pas une restriction d'offre.
>
> Portée exacte, conséquences sur le catalogue et **conditions de dégel** : `PRICING.md` §0.a.

### Modèle d'équipe (décision direction, 2026-08-14 — remplace le modèle freelance)
Équipe **100 % salariée** (CDI). Salaire **brut** d'un agent et d'un manager :
**3 250 000 Ar/mois** (650 € — ~4,5× le marché local), **charges patronales CNaPS/OSTIE en
sus** (~86 €/tête, plafonnées à 8 × SME) ⇒ **coût employeur ~736 €/agent**. Objectif :
**zéro turnover**.

- **Aucun plafond d'effectif** : on embauche sur **positions fermes facturables**, pas sur
  une cible d'équipe. Ne jamais opposer une limite de capacité à un prospect.
- **Effectif à ce jour : 0 salarié.** Le poste de développement commercial a pris fin le
  **2026-08-27**. **Le fondateur est seul et assure lui-même la prospection** — toute
  planification (cadence, volumes, objectifs) doit partir de cette contrainte et non d'une
  équipe commerciale. Conséquence financière : le burn avant premier contrat tombe à
  **~110-155 €/mois** (Sales Navigator inclus) et le point mort à **1-2 ETP placés** (`FINANCE-PREVISIONNEL.md` §2.b/§4).
- **Un seul fondateur, non rémunéré** au lancement.
- Le **hub de repli** et la ligne **kits d'autonomie** sont sortis des charges : le kit
  reste dû à l'agent, son coût est réputé couvert par le salaire.
- Rentabilité, point mort et trésorerie : `01-Strategie-Offre/FINANCE-PREVISIONNEL.md` (v3).
  Audit de ce prévisionnel : `AUDIT-FINANCE-PREVISIONNEL.md`.

> ⚠️ Le vocabulaire « freelance », « fee », « prestataire » ne s'applique plus à l'équipe.
> Le risque de requalification disparaît ; il est remplacé par la **rigidité de l'effectif**
> (préavis + indemnité de licenciement), couverte par la clause de **volume ferme
> facturable** sur tous les paliers (`PRICING.md §3`).

### Avantage compétitif
- Fuseau horaire compatible avec la France
- Français langue maternelle
- Coût **jusqu'à 50 % inférieur** au coût complet d'un poste interne / prestataire hexagonal
  (benchmark différencié par métier dans `PRICING.md §3/§5` : télésec 33-42 k€/an · support IT N1 38-50 k€/an)
  > ⚠️ **Révisé le 2026-09-07 — remplace « 40 à 60 % ».** Le plafond −60 % n'était atteignable
  > dans aucun scénario et le simulateur de la page qui l'affichait mesurait −32/−38 %.
  > **Ne jamais réécrire ce claim en fourchette basse-haute** : `PRICING.md §5.b`.
- **Délai d'activation — toujours nommer le jalon** (`PRICING.md §5.a`) : *première prise de
  tickets sur vos outils* = **3-4 sem. en direct, ~6 sem. en marque blanche**, contre **2 à
  3 mois** pour une prise de poste en France (processus + préavis Syntec) ; *position
  pleinement autonome* = **6-8 sem.** contre **4 à 6 mois**.
  > ⚠️ **Le mot « opérationnel » est proscrit** pour désigner la première prise de tickets :
  > il promet l'autonomie complète en livrant la première connexion. C'est ce glissement,
  > pas le chiffre, qui rendait la promesse attaquable.

## Marque

**Nom commercial retenu : Salverys** 

> Note technique : depuis le 2026-05-29, les clés `localStorage` du CRM
> (`CRM_Salverys.html`) sont préfixées `salverys_`. L'ancien stockage `vinlo_`/
> `nesvalo_` a été abandonné ; les CRM ouverts après cette date repartent du
> seed (180 leads + décideurs vérifiés sont définis dans le code).

## Outils retenus
- **Base de prospection : Airtable** — **une seule base**, « Prospection Salverys »,
  4 tables liées : `Comptes` · `Contacts` · `Appels` (journal, une ligne par appel composé) ·
  `Objections` (réponses testées). La base « Prospection Salverys IT » a été fusionnée dedans
  le 2026-09-02 et doit être supprimée. **Ne jamais créer une 2e base de prospection** : c'est
  la duplication qu'on reproche à Excel, transposée dans Airtable.
  Audit des colonnes du 2026-09-03 : `02-Prospection/PLAYBOOK-SALES-NAVIGATOR.md` §4.
  **Une valeur d'attente (« À qualifier », « À vérifier ») dans une colonne vaut pire
  que du vide** : elle simule un remplissage et interdit de filtrer ce qui reste à faire.
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
3) médical · 4) relation client de toutes sortes (futur non déterminé)** ;
mécanique d'entrée = **dépôt d'activation imputable + 3 contreparties de risque** (marque
blanche, §3.a/§3.b) — l'offre « 1er mois à −50 % » est **direct uniquement, donc dormante**
depuis le gel du 2026-09-07 (§0.a) ;
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
