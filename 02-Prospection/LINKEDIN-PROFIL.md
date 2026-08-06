# LinkedIn — profil fondateur Salverys

> Source de vérité tarifaire : `PRICING.md`. Toute reformulation de la section
> « Côté coût » doit s'y aligner (−40 à −60 % vs **coût complet** d'un ETP interne).

---

## 1. Bannière

Décisions actées et rendus : `banniere-linkedin-salverys.html`
(exports 1584 × 396 dans `exports/`).

- **Headline** — version B : « Vos clients entendent votre marque, pas la nôtre. »
  (version C alternative : « Votre support N1 applicatif, tenu par une équipe dédiée. »)
- **Surtitre** : `BPO FRANCOPHONE · MARQUE BLANCHE`
- **Sous-ligne** : `Support applicatif N1 · Helpdesk IT · Télésecrétariat médical`
- **Labels** : `Français natif` · `Fuseaux horaires CA & FR` · *(3ᵉ label à trancher)*

---

## 2. Titre de profil (220 car. max)

> ⚠️ Le titre suit le nom **partout** : recherche, commentaires, invitations, messages.
> C'est le texte le plus vu du profil après le nom, et il est **indexé** par la recherche
> LinkedIn. Dans un fil de commentaires, seuls les **~60 premiers caractères** s'affichent :
> tout ce qui compte doit tenir devant.

**Retenu (148 car.)**

```
Support applicatif N1, Helpdesk IT & télésecrétariat médical en marque blanche | Équipe francophone dédiée · France & Canada | Fondateur de Salverys
```

**Variantes**

| # | Titre | Car. | Quand la préférer |
|---|---|---|---|
| B | `Vos clients entendent votre marque, pas la nôtre \| Support N1, Helpdesk IT & télésecrétariat médical en marque blanche \| Fondateur de Salverys` | 142 | Cohérence maximale avec la bannière. Se remarque dans un fil, mais un inconnu ne sait pas ce que tu vends avant la 2ᵉ moitié |
| C | `Support N1 en marque blanche pour éditeurs SaaS, ESN & MSP \| Helpdesk IT · Télésecrétariat médical \| Équipe francophone, France & Canada \| Salverys` | 147 | Si l'IT devient exclusif — nomme l'audience, au prix du médical |
| D | `Fondateur de Salverys — support applicatif N1, helpdesk IT & télésecrétariat médical en marque blanche` | 102 | Registre sobre. Laisse 118 caractères de référencement inutilisés |

**À ne pas faire** : ouvrir par « Fondateur & CEO » (personne ne cherche ça), la formule
« J'aide les X à Y » (vue partout, elle date le profil), et les drapeaux 🇲🇬🇫🇷🇨🇦 —
illisibles à cette taille et ils placent l'objection offshore avant l'argument.

---

## 2 bis. Slogan de page entreprise (120 car. max)

> Support applicatif N1, Helpdesk IT & télésecrétariat médical en marque blanche —
> équipe francophone dédiée, −40 à −60 % vs interne.

---

## 3. Section « À propos » (2 600 car. max)

> ⚠️ LinkedIn ne montre que **~265 caractères** avant « …voir plus ».
> Les trois premières lignes doivent donc porter à elles seules : le problème,
> la promesse, et la marque blanche.

```
Vos tickets N1 augmentent plus vite que votre équipe support.

Nous prenons le relais — sous votre marque, à votre nom. Pour vos clients, rien
ne change.

Salverys est un centre de support francophone basé à Antananarivo. Nous
travaillons en marque blanche pour des éditeurs SaaS, des ESN et MSP, et des
plateformes de télésecrétariat médical, en France et au Canada.

Ce que nous prenons en charge :

— Support applicatif SaaS N1 : gestion de comptes, paramétrages, incidents
simples, qualification avant escalade.
— Helpdesk IT N1 : prise d'appels, ticketing, escalade N2 documentée, pour les
MSP et les DSI internes.
— Télésecrétariat médical : accueil patient, prise de rendez-vous, filtrage des
urgences.

Comment ça se passe.

Nous travaillons sur vos outils, pas les nôtres : votre outil de ticketing,
votre logiciel de rendez-vous, vos procédures. Chaque position est tenue par un
agent nommé, francophone natif, formé sur votre produit avant la première prise
d'appel. Un rapport chiffré chaque semaine, et l'accès permanent aux
enregistrements : le contrôle qualité reste chez vous.

Nos horaires sont ceux de la France — Antananarivo est à une heure de Paris. Les
plages canadiennes sont couvertes par une équipe de soirée dédiée.

Le coût. Regardez ce que vous coûte réellement un poste en France : salaire
chargé, recrutement, encadrement, absences, locaux. Une position chez nous,
c'est 40 à 60 % de moins.

Les données. Elles restent chez vous : nous travaillons dans vos systèmes, nous
n'en hébergeons aucune copie. Le cadre de confidentialité est signé avant le
premier accès, et nous fournissons les pièces dont vous avez besoin pour vos
propres obligations — RGPD en France, Loi 25 au Québec.

Nous démarrons petit, exprès. Une position, un mois, des indicateurs définis
avec vous avant de commencer. Si les chiffres ne suivent pas, vous arrêtez.

Écrivez-moi votre volume mensuel et les plages à couvrir. Je vous renvoie un
chiffrage et un délai de démarrage.
```

---

## 4. Claims à valider avant publication

| Claim | Statut | À vérifier |
|---|---|---|
| −40 à −60 % vs coût complet interne | ✅ | Documenté `PRICING.md §5` comme fourchette publique défendable |
| « Le cadre de confidentialité est signé avant le premier accès » | ⚠️ | Formulation volontairement non technique (décision 2026-08-05). Le détail — sous-traitance art. 28 RGPD, clauses contractuelles types pour le transfert hors UE, NDA individuel, accès nominatifs et tracés — reste **l'argument à sortir à l'oral** face à un DPO ou un acheteur médical, et doit être en place dans le contrat |
| NDA individuel par agent | ⚠️ | `MODELE-NDA-CONFIDENTIALITE.md` existe, mais 6 des 7 pièces du pack agent restent à créer : `05-Process-Delivery/PACK-CONFORMITE-AGENT.md` |
| « nous fournissons les pièces… Loi 25 au Québec » | ❌ | Le pack ÉFVP n'existe pas encore. Ne pas publier cette phrase avant de l'avoir monté (`PACK-CONFORMITE-AGENT.md §5`) |
| Chiffrage + délai de démarrage en retour | ⚠️ | Suppose une grille prête à dégainer (`PRICING.md`) et un délai de démarrage arbitré |
| Équipe de soirée pour le Canada | ⚠️ | 7 à 9 h d'écart avec Montréal : suppose un planning de soirée/nuit |
| Infrastructure redondante (fibre, onduleurs) | ❌ | **Retiré.** Séquence `CLAUDE.md` : Prospection → Équipe → **Infrastructure**. À réintroduire une fois en place. |
| « Stricte conformité RGPD / Loi 25 » | ❌ | **Retiré.** Madagascar est un pays tiers sans décision d'adéquation : formulation indéfendable en l'état. |
