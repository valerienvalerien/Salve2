# Baromètre de l'externalisation du N1 — protocole d'entretiens

> **Créé le 2026-08-28.** Répond à une question de direction : *comment obtenir un échange
> avec une ESN qui a déjà un sous-traitant et qui en est satisfaite — donc qui n'a aucune
> raison de me répondre ?*
>
> **La réponse tient en un retournement : on n'appelle pas pour vendre, on appelle pour
> mesurer. Et on rend la mesure.**
>
> Ce protocole sert aussi, et peut-être surtout, à combler le trou de données qui bloque
> le chiffrage (§2). Scripts d'appel : `SCRIPTS-APPEL.md` §4.

---

## 1. Le problème posé

En prospectant des ESN/MSP sur le helpdesk N1 en marque blanche, on tombe sur quatre cas.
Ils correspondent au champ **`Externalisation N1 en place`** de la base Airtable — à ceci
près que la satisfaction (cas 1 vs cas 2) ne se sait **jamais** avant le téléphone.

| Cas | Situation | Ce qu'on en fait |
|---|---|---|
| **1** | A un sous-traitant, **satisfait**, ne veut pas changer | **Entretien d'apprentissage** → il donne le standard à égaler, et un rappel daté à l'échéance |
| **2** | A un sous-traitant, **mécontent** | **Cible n°1** — jeu de déplacement (`SCRIPTS-APPEL.md` §4) |
| **3** | N'a jamais externalisé — on serait le premier | Vente classique… **si on sait se positionner en prix** (§2) |
| **4** | Fermé au principe même | Une question, pas un entretien (§6) |

**Les cas 2 et 3 se vendent. Les cas 1 et 4 s'apprennent.** Et c'est le cas 1 qui porte le
plus d'information : quelqu'un dont le montage fonctionne sait exactement pourquoi il
fonctionne — c'est-à-dire ce qu'il faudra tenir pour gagner les cas 2 et 3.

---

## 2. Pourquoi c'est urgent : le trou de données qui bloque le chiffrage

Sur le cas 3, la question qui revient — *« suis-je trop cher pour ce que je propose, ou pas
assez qualitatif pour mon prix ? »* — est **sans réponse aujourd'hui**, et ce n'est pas une
faiblesse d'analyse : la donnée n'existe pas dans le dépôt.

| Donnée | Disponible ? | Où |
|---|---|---|
| Coût complet d'un poste interne en France | ✅ 38-50 k€/an (support IT N1) | `PRICING.md` §5 |
| Notre rate card MB par palier | ✅ 1 350-2 000 €/ETP/mois | `PRICING.md` §3 |
| Corridor offshore **médical** à l'appel | ✅ 0,50-1 €/appel | `TELESEC-TARGETS.md` |
| **Ce qu'une ESN française paie réellement son sous-traitant N1, par ETP** | ❌ **inconnu** | — |
| **Ce qu'elle exige en échange** (SLA, reporting, langue, horaires) | ❌ **inconnu** | — |

Cette donnée n'est **ni publiée, ni achetable** : les contrats de sous-traitance MB sont
confidentiels par construction. **Elle ne s'obtient qu'en parlant à ceux qui la paient.**

C'est ce qui transforme les entretiens du cas 1 d'une curiosité en une **priorité** :
sans eux, tout chiffrage sur le cas 3 reste une hypothèse.

---

## 3. Le retournement : se présenter comme celui qui mesure

Un dirigeant satisfait de son prestataire n'a effectivement aucune raison de répondre à un
concurrent de ce prestataire. **Il en a plusieurs de répondre à quelqu'un qui fait une
étude et qui lui en rend les résultats.**

Ce qui fait décrocher, dans l'ordre d'efficacité :

1. **La réciprocité d'information.** Il donne 15 minutes, il reçoit un benchmark anonymisé
   du marché qu'il ne peut acheter nulle part : ce que paient les autres, ce qu'ils exigent,
   où ils se font avoir. Pour un dirigeant d'ESN, c'est un vrai actif.
2. **La reconnaissance d'expertise.** Il a réussi un montage que beaucoup ratent. Personne
   ne le lui a jamais demandé. Et il ne peut pas en parler à ses concurrents directs —
   nous ne le sommes pas.
3. **La brièveté tenue.** 15 minutes annoncées, 15 minutes réelles. C'est un engagement,
   pas une formule.
4. **L'absence de vente, dite et respectée.** Voir §5 — c'est la condition de tout le reste.

> **Ce n'est pas une ruse de vente.** Le baromètre est réellement produit, réellement
> envoyé. Si on ne le fait pas, on a menti — et le milieu des ESN françaises est petit.

---

## 4. Le protocole

### Cible et volume
**12 à 15 entretiens** sur des ESN/MSP françaises de 20 à 300 personnes. En dessous de 10,
la synthèse n'a pas de valeur d'échange ; au-delà de 15, le rendement marginal chute et le
temps manque.

Puiser dans les 58 ESN/MSP de la base — **y compris les comptes classés NURTURE**, qui
n'ont pas de signal d'achat mais peuvent parfaitement avoir un avis. C'est même leur seul
usage utile à ce stade.

### La demande de contact
LinkedIn de préférence (le sujet est trop spécifique pour un standard), sinon email.
**Court, daté, sans pièce jointe, sans lien.**

> Objet : *Question rapide — sous-traitance du N1*
>
> Bonjour {{prénom}},
>
> Je monte une étude sur la façon dont les ESN françaises organisent leur helpdesk N1 :
> internalisé, sous-traité, mixte — et ce que ça donne en pratique.
>
> {{société}} fait partie des structures dont le montage m'intéresse. Auriez-vous
> **15 minutes** pour répondre à quatre questions ? Je ne vends rien sur cet échange —
> **je vous envoie la synthèse anonymisée** quand elle sera terminée.
>
> {{signature}}

**Ce qui compte dans ce texte :** « quatre questions » (borné), « 15 minutes » (petit),
« je ne vends rien » (explicite), « je vous envoie la synthèse » (contrepartie concrète).

### L'entretien — quatre questions, dans cet ordre

1. **« Comment vous êtes organisés sur le N1 aujourd'hui — interne, sous-traité, les deux ? »**
   *Ouvre sans juger. Situe le cas 1/2/3 en une réponse.*
2. **« Qu'est-ce qui vous a décidé à externaliser — ou à ne pas le faire ? »**
   *Le déclencheur réel. C'est ce qu'il faudra savoir reproduire dans une accroche.*
3. **« Qu'est-ce qui marche bien chez votre prestataire ? »**
   → *puis seulement* : **« Et s'il y avait une chose à corriger demain ? »**
   *Le standard à égaler, puis la faille. Jamais l'inverse : demander d'abord ce qui cloche
   met le dirigeant en position de justifier son choix, et il se ferme.*
4. **« Sur ce type de prestation, on est sur quelle base tarifaire, en gros ? »**
   *La question difficile — en dernier, quand la conversation est installée.*

**Si le prix bloque**, ne pas insister. Proposer une fourchette à valider :
*« Disons entre 900 et 1 500 € par ETP et par mois, on est dans le vrai ? »* Un simple
« c'est plus bas » est déjà une donnée exploitable.

### La question bonus, si le courant passe
> **« Si vous deviez en changer un jour, ce serait pour quelle raison ? »**

C'est la question la plus rentable de l'entretien. Elle fait dire à un compte satisfait ce
qui le ferait bouger — donc l'accroche exacte à ressortir dans dix-huit mois, ou à utiliser
sur les autres comptes du même profil.

### Ce qu'on consigne
Dans Airtable, champ **`Prestataire actuel & échéance`** :
prestataire · nombre d'ETP · depuis quand · ce qui marche · ce qui cloche · fourchette de
prix · **date d'échéance ou de préavis** · le déclencheur d'un changement.

Puis `Prochaine action` = **« envoi de la synthèse »**, datée. Et si une échéance de contrat
est connue : un second rappel, **deux mois avant**.

---

## 5. La règle qui rend tout ça possible — et sa contrepartie

**Sur un entretien de baromètre, on ne vend pas. Jamais. Pas même à la fin, pas même
« puisqu'on en parle ».**

Ce n'est pas une posture morale, c'est de l'arithmétique : un pitch glissé en fin
d'entretien rapporte au mieux un rendez-vous mou, et coûte le compte, la synthèse, la
recommandation et la réputation — dans un milieu où les dirigeants d'ESN se connaissent.

**La vente arrive plus tard, et par un autre chemin :**

| Quand | Quoi |
|---|---|
| Fin d'entretien | *« Je vous envoie la synthèse dans quelques semaines. »* Rien d'autre |
| À l'envoi de la synthèse | Un vrai second contact, légitime, où c'est **lui** qui a la dette d'attention |
| Deux mois avant son échéance | *« Vous m'aviez dit que le contrat courait jusqu'à {{mois}}. Vous voulez une comparaison sous la main ? »* |

Le rappel pré-échéance est la vraie sortie du cas 1. Il ne se joue pas aujourd'hui — il se
joue au moment exact où la question se pose pour lui.

---

## 6. Le cas 4, en une question

Un prospect fermé au principe de l'externalisation ne mérite pas un entretien, mais il
mérite **une** question, posée au moment où il refuse :

> « Très bien, je ne vais pas insister. Juste par curiosité : c'est une question de
> confidentialité, de qualité, ou vous avez déjà essayé et ça s'est mal passé ? »

Trois réponses possibles, trois enseignements différents — et c'est gratuit.
À consigner dans les notes du compte, puis `Priorité` = EXCLU.

---

## 7. Ce que le baromètre produit, au-delà des réponses

C'est là que l'effort se rentabilise. Un document de 4 à 6 pages, anonymisé, devient :

- **la réponse au cas 3** — enfin des fourchettes de prix réelles pour se positionner ;
- **un prétexte de contact légitime** sur tous les comptes de la base, y compris ceux qu'on
  n'a jamais réussi à joindre : *« j'ai fait une étude sur votre marché, je vous l'envoie »* ;
- **un actif d'autorité** pour un fondateur sans référence client — on n'est plus le
  énième prestataire qui appelle, on est celui qui a mesuré le marché ;
- **la matière pour le branding du dirigeant**, chantier T6 du rétroplanning jamais démarré :
  un donneur d'ordre IT google le fondateur avant de lui confier sa relation client.

> ⚠️ **La limite à énoncer dans le document lui-même** : 12-15 entretiens ne font pas un
> échantillon statistique. On écrit « ce que disent 14 dirigeants d'ESN », jamais « le
> marché français ». Un chiffre présenté pour plus qu'il ne vaut se retourne au premier
> interlocuteur qui connaît vraiment le sujet.

---

## 8. Où ça s'insère dans le plan

Le baromètre **ne remplace pas** la prospection de la vague 1 — il s'y superpose, sur les
mêmes appels. La différence tient au premier tri : selon la réponse à la question 1, on
bascule vers l'entretien (cas 1) ou vers la vente (cas 2, 3).

**Coût réel :** ~15 min par entretien + ~3 h de synthèse. Sur les 10 h/semaine du plan solo
(`PLAYBOOK-SALES-NAVIGATOR.md` §12), compter **2 à 3 semaines** en parallèle des appels.

**Le moment est favorable, et il ne durera pas :** avec un burn à ~110-155 €/mois
(`FINANCE-PREVISIONNEL.md` §2.b), il n'y a pas d'urgence de trésorerie à signer vite. C'est
exactement la fenêtre où investir trois semaines à comprendre le marché coûte peu et
rapporte longtemps. Après le premier contrat, ce temps n'existera plus.
