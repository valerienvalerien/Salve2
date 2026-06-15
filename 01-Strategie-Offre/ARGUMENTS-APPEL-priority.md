# Arguments d'appel — Offre **Priority** (Helpdesk IT N1)

> Anti-sèche pour les appels de qualification / closing sur le tier **Priority**
> (ex-« Premium ITIL+ »). Source de vérité tarifaire : `PRICING.md` §3.
> Modèle chiffré implémenté dans `assets/site.js` (`priorityMult`).

## 1. Positionnement — ne jamais vendre « un dédié en mieux »

« Premium » = vague et générique. **Priority = service critique.** On ne vend pas
un confort, on vend une **garantie de continuité**. Le mot impose une contrainte
forte (capacité réservée), justifie naturellement le prix, et implique un **ordre
de traitement réel**.

> Phrase d'ancrage : *« Dédié, c'est un agent à vous. Priority, c'est la garantie
> qu'il n'y a jamais de trou — même quand votre agent est absent, malade ou en
> formation. C'est un cran au-dessus : du service critique. »*

## 2. Les 5 garanties Priority

1. **Capacité réservée, non mutualisée** — votre capacité ne sert personne d'autre.
2. **Traitement prioritaire systématique** — en cas de pic simultané, vos tickets
   passent **devant** ceux des clients mutualisés. Un ordre de passage réel, pas un
   SLA théorique.
3. **Redondance intégrée (backup permanent)** — un agent de secours réservé prend
   le relais immédiatement. Zéro interruption.
4. **Supervision renforcée** — pilotage rapproché, KPI surveillés en continu.
5. **Tolérance zéro rupture de service.**

## 3. La mécanique du prix — pourquoi ce n'est pas un surcoût plat

Le backup permanent **coûte cher en solo, et de moins en moins cher à mesure que
l'équipe grandit** (le backup réservé s'amortit sur plus d'agents) :

| Nombre d'agents | 1 | 2 | 3 | 4 | 6 | 10 |
|---|---|---|---|---|---|----|
| Surcoût Priority vs Dédié | ×2,0 | ×1,55 | ×1,40 | ×1,33 | ×1,25 | ×1,19 |

> *« À un seul agent, Priority c'est quasi le prix de deux — parce qu'un vrai backup
> permanent pour une personne seule, c'est une deuxième personne. Mais dès que vous
> montez en équipe, ce backup se mutualise : à 6 agents vous n'êtes plus qu'à +25 %,
> à 10 quasiment +19 %. Plus vous grandissez, plus la sécurité devient quasi
> gratuite. »*

## 4. L'argument massue — à garantie égale

Pour **garantir** une capacité productive sans rupture, le Dédié vous oblige à
**payer un agent de backup en plus** (≈ 1 pour 3). Priority l'inclut. À garantie
égale, **`g` agents Priority ≡ `g + ⌈g/3⌉` Dédiés** :

| Garantir… | en Dédié | en Priority |
|---|---|---|
| 2 productifs | 3 têtes | 2 agents |
| 6 productifs | 8 têtes | 6 agents |

Sur le **coût** : Priority bascule **moins cher dès ~4 agents garantis** (le backup
mutualisé s'amortit). En dessous (1-3 agents), le prix est proche — mais l'avantage
est ailleurs, et il est décisif :

- **Faisabilité** : à 1-2 agents, se sur-assurer en dédié = embaucher un backup à
  temps plein (×2). Personne ne « demi-embauche » un backup. Priority le rend possible.
- **Zéro planning** : le backup, c'est **nous** qui le gérons (congés, maladie,
  turnover) — pas votre problème.

> *« La vraie question n'est pas "combien coûte un agent" mais "combien coûte le fait
> de ne JAMAIS être à découvert". En dédié, ce backup c'est un temps plein que vous
> payez et gérez. En Priority, on le mutualise et on le pilote pour vous — et à partir
> de 4 agents, c'est même moins cher. »*

## 5. Objection « c'est plus cher »

**Réponse :** *« Plus cher que quoi ? Si vous voulez la même garantie zéro-rupture
en dédié, il faut payer un agent de backup à 100 % — ça, c'est ×2, et il faut le
recruter et le gérer. Nous, on réserve ce backup mutualisé et on vous le facture
amorti : à partir de 4 agents c'est carrément moins cher, et en dessous vous ne
payez pas pour du confort mais pour ne jamais avoir de trou — sans aucun planning à
gérer. »*

## 6. Quand pousser Priority

- Périmètre **critique** (production, clients finaux exposés, secteur réglementé).
- Client qui **ne peut pas se permettre une rupture** (image, SLA contractuel aval).
- Volume ≥ 3-4 agents : le surcoût devient marginal, l'argument est imparable.
- À l'inverse, en solo non critique : proposer **Dédié** et garder Priority pour
  plus tard (le surcoût ×2 en solo se défend mal hors contexte vraiment critique).

## 7. Phrases prêtes à dire

- *« Dédié = un agent à vous. Priority = la garantie qu'il n'y a jamais de trou. »*
- *« Le traitement prioritaire, c'est un ordre de passage réel : vos tickets devant les autres. »*
- *« Plus votre équipe grandit, plus la sécurité Priority devient quasi gratuite. »*
- *« 2 Priority vous coûtent moins que 3 dédiés, et c'est nous qui gérons le backup. »*
- *« Vous ne payez pas du premium, vous payez du zéro-rupture. »*
