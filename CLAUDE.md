# CLAUDE.md — slvrs

## Contexte activité

BPO basé à Antananarivo (Madagascar) ciblant des clients **français et canadiens**.
Direction expérimentée qui repart de zéro avec une équipe de **10 personnes**.

>Mettre en avant à la place : process documentés, cadrage qualité (script, double écoute,
> reporting), pilote mesuré.

### Niches cibles (par priorité)
> ⚠️ **Priorité revue (décision direction 2026-06-22) : l'IT devient la priorité n°1**,
> avant le médical (qui passe n°2). 
1. **Support applicatif N1 pour éditeurs SaaS français** (priorité absolue — IT)
2. **Helpdesk IT N1 distant** (IT)
3. Télésecrétariat médical
4. *Relation client de toutes sortes* — dans un futur non déterminé

### Séquence de développement (toujours dans cet ordre)
**Prospection → Équipe → Infrastructure**

### Stratégie GTM (décision direction, 2026-06-10)
**Objectif prioritaire : démarrer en MARQUE BLANCHE sur les 3 niches** (sous-traitance
de donneurs d'ordre : télésecrétariats médicaux FR, éditeurs/prestataires support,
ESN/MSP). Le direct (client final) vient en 2e temps. Toute priorisation de prospection,
de copy ou de chiffrage doit refléter ce MB-first.

### Modèle d'équipe (décision direction, 2026-06-10)
Démarrage **100 % freelances**, payés **3 250 000 Ar/mois chacun** (650 € — ~4,5× le marché local),
y compris les **2 managers** (1 médical, 1 IT). Objectif : **zéro turnover**. Démarrage à
4 agents + 2 managers, montée à 8+ au rythme des contrats. Rentabilité vérifiée :
`01-Strategie-Offre/FINANCE-PREVISIONNEL.md` (v2).

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
- **Cold mailing : Emelia** (outil de prospection email retenu)

## Source de vérité tarifaire

Tous les prix, grilles, benchmarks et conditions (essai/offre de lancement) sont
définis dans **`PRICING.md`** — c'est la **source unique de vérité**. Toute copy
(emails `OUTREACH-*`, CRM, simulateurs, `index.html`) doit s'aligner dessus ; en cas
de divergence, `PRICING.md` fait foi. Réflexion détaillée : `RAPPORT-PRIX.html`.

Rappels clés : priorités niches = **1) Support N1 SaaS & Helpdesk IT (IT) · 2) médical ·
3) relation client de toutes sortes (futur non déterminé)** ; offre de lancement = **1er mois
à -50 %** (et non plus essai gratuit) ;
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
