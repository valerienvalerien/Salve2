# CLAUDE.md — slvrs

## Contexte activité

BPO basé à Antananarivo (Madagascar) ciblant des clients **français**.
Direction expérimentée qui repart de zéro avec une équipe de **10 personnes**.

> ⚠️ **Claim interdit (décision 2026-06-12)** : « direction issue d'une structure de
> 1 000 collaborateurs » était une consigne de persona initiale, **pas la réalité**.
> Ne plus jamais l'utiliser dans aucun livrable, email, page ou support. Mettre en
> avant à la place : process documentés, cadrage qualité (script, double écoute,
> reporting), pilote mesuré.

### Niches cibles (par priorité)
1. **Télésecrétariat médical** (priorité absolue)
2. Support applicatif N1 pour éditeurs SaaS français
3. Helpdesk IT N1 distant

### Séquence de développement (toujours dans cet ordre)
**Prospection → Équipe → Infrastructure**

### Stratégie GTM (décision direction, 2026-06-10)
**Objectif prioritaire : démarrer en MARQUE BLANCHE sur les 3 niches** (sous-traitance
de donneurs d'ordre : télésecrétariats médicaux FR, éditeurs/prestataires support,
ESN/MSP). Le direct (client final) vient en 2e temps. Toute priorisation de prospection,
de copy ou de chiffrage doit refléter ce MB-first.

### Modèle d'équipe (décision direction, 2026-06-10)
Démarrage **100 % freelances**, payés **1,8-2 M Ar/mois chacun** (~2,5× le marché local),
y compris les **2 managers** (1 médical, 1 IT). Objectif : **zéro turnover**. Démarrage à
4 agents + 2 managers, montée à 8+ au rythme des contrats. Rentabilité vérifiée :
`01-Strategie-Offre/FINANCE-PREVISIONNEL.md` (v2).

### Avantage compétitif
- Fuseau horaire compatible avec la France
- Français langue maternelle
- Coût ~40 % inférieur à un prestataire hexagonal

## Marque

**Nom commercial retenu : Salverys** (temporaire mais à utiliser partout pour
l'instant). Remplace les anciens noms **Nesvalo** et **Vinlo**, qui ne doivent
plus apparaître dans aucun livrable, séquence, CRM ou support client.

> Note technique : depuis le 2026-05-29, les clés `localStorage` du CRM
> (`CRM_Salverys.html`) sont préfixées `salverys_`. L'ancien stockage `vinlo_`/
> `nesvalo_` a été abandonné ; les CRM ouverts après cette date repartent du
> seed (180 leads + décideurs vérifiés sont définis dans le code).

## Outils retenus
- **Cold mailing : Emelia** (outil de prospection email retenu)

## Source de vérité tarifaire

Tous les prix, grilles, benchmarks et conditions (essai/offre de lancement) sont
définis dans **`PRICING.md`** — c'est la **source unique de vérité**. Toute copy
(emails `OUTREACH-*`, CRM, simulateurs, `index.html`) doit s'aligner dessus ; en cas
de divergence, `PRICING.md` fait foi. Réflexion détaillée : `RAPPORT-PRIX.html`.

Rappels clés : priorités niches = **1) médical · 2) Support N1 SaaS & Helpdesk IT ·
3) Bailleurs** ; offre de lancement = **1er mois à -50 %** (et non plus essai gratuit) ;
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
