# LinkedIn — Profil & Page Salverys (version verrouillée)

> Version retenue. Toute copy LinkedIn (profil fondateur, page entreprise, posts)
> s'aligne sur ce fichier. Prix et conditions : `PRICING.md` fait foi.

---

## 1. Titre de profil (headline LinkedIn — fondateur)

```
Fondateur Salverys | Support applicatif N1, Helpdesk IT & Télésecrétariat Médical en marque blanche | Équipes francophones dédiées sans rotation
```

---

## 2. Page entreprise — texte retenu

### Headline

**Augmentez votre capacité de support. Toujours sous votre marque.**

### Sous-titre

Nous prenons le relais à votre nom. Pour vos clients, rien ne change.

### Présentation

Salverys est un centre de support francophone basé à Antananarivo. Nous travaillons
en marque blanche pour des éditeurs SaaS, ESN, et plateformes de télésecrétariat
médical, en France, en Belgique et au Canada.

### Nos métiers

- **Support Applicatif SaaS - N1** : gestion de comptes, paramétrages, résolution
  d'incidents simples et qualification avant escalade.
- **Helpdesk IT - N1** : prise d'appels, ticketing, escalade N2 documentée, pour les
  MSP, ESN et les DSI.
- **Télésecrétariat médical** : accueil patient, prise de rendez-vous et filtrage
  des urgences.

### Comment ça se passe

Nous travaillons sur vos outils, pas les nôtres : votre outil de ticketing, votre
logiciel de rendez-vous, vos procédures. Chaque position est tenue par un agent
francophone natif, formé sur votre produit avant la première prise d'appel. Un
rapport chiffré chaque semaine, et l'accès aux enregistrements : le contrôle qualité
reste chez vous.

**Les horaires.** Antananarivo est à une heure de Paris. Les plages canadiennes sont
couvertes par une équipe de soirée dédiée.

**Le coût.** Regardez ce que vous coûte réellement un poste en France : salaire
chargé, recrutement, encadrement, absences, locaux. Une position chez nous, c'est
40 à 60 % de moins.

**Les données.** Elles restent chez vous : nous travaillons dans vos systèmes, nous
n'en hébergeons aucune copie. Le cadre de confidentialité est signé avant le premier
accès, et nous fournissons les pièces dont vous avez besoin pour vos propres
obligations.

### Pilote

Nous démarrons petit, exprès. Une position, un mois, des indicateurs définis avec
vous avant de commencer. Si les chiffres ne suivent pas, vous arrêtez.
Zéro engagement de durée.

### Appel à l'action

Écrivez-moi en une ligne ce que vous cherchez à sous-traiter. Si c'est hors de ma
portée, je vous le dirai tout de suite.
Sinon, vous aurez une fourchette et une date de démarrage sous 24 h.

---

## 3. Bannière LinkedIn

**Headline reprise sur la bannière** : « Augmentez votre capacité de support.
Toujours sous votre marque. »

Format : 1584 × 396 px (profil personnel). Zone bas-gauche (≈ 380 px) laissée vide,
masquée par la photo de profil.

Couleurs charte (`charte-graphique-salverys.html`) :

| Rôle | Hex |
|---|---|
| Navy primaire | `#2E3B4E` |
| Navy profond | `#222C3B` |
| Vert sauge (accent) | `#6F8770` |
| Vert sauge clair | `#C5D2C5` |
| Crème | `#F6F2EA` |
| Or | `#B89968` |

Typographie : titres en serif (Georgia / Lora), texte courant en Inter.

### Fichiers livrés (`assets/linkedin/`)

Trois fichiers retenus (décision 2026-08-06) — les autres déclinaisons ont été
écartées.

| Fichier | Composition | Logo | Format |
|---|---|---|---|
| `banniere-A-diagonale-logo.png` | Navy + panneau crème en diagonale | Couleur, dans le panneau | 1584 × 396 |
| `banniere-D-signature.png` | Navy plein, logo en signature au-dessus du titre | Blanc | 1584 × 396 |
| `banniere-page-entreprise.png` | Couverture de page entreprise (composition A) | Couleur | 1128 × 191 |

Ligne métiers affichée sur les trois :
**SUPPORT APPLICATIF · HELPDESK IT · TÉLÉSECRÉTARIAT MÉDICAL**

Les `.html` du même dossier sont les sources : polices Lora et Inter **et logo
Salverys** embarqués en base64, aucune dépendance réseau. Pour modifier un texte ou
une couleur, éditer le HTML puis re-capturer à l'échelle 2 et redimensionner à la
taille cible.

Logos utilisés : `assets/logo-salverys.svg` (fond clair) et
`assets/logo-salverys-blanc.svg` (fond sombre).
