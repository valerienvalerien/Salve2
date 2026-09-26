# Chiffrage sur tickets réels — lead magnet ESN / MSP

> **Créé le 2026-09-26.** Lead magnet de type « une étape parmi d'autres » (méthode Hormozi) :
> on offre gratuitement **la première étape du devis** — mesurer le lot de tickets
> transférable — sur les vrais tickets du prospect. Le devis, le cadrage et le pilote suivent.
>
> Cible : **top 10 ESN / MSP** de la base Airtable uniquement (niche n°1, MB-only).
> Porte d'entrée en libre-service : `diagnostic-n1.html` (calculateur sur ses propres chiffres).
> Ce document-ci est l'étape suivante, faite à la main par le fondateur.

---

## 1. Le risque à éviter : l'audit condescendant

L'interlocuteur est un **donneur d'ordre** (ESN, MSP), pas un client final. Il vend
lui-même du support, souvent de l'audit. Lui proposer d'« auditer » son helpdesk revient à lui
dire qu'on connaît son métier mieux que lui : c'est vexant, et c'est faux.

**Le retournement : on ne juge pas son travail, on chiffre notre devis sur ses données.**

| On ne dit jamais | On dit |
|---|---|
| audit, diagnostic de votre helpdesk | chiffrage, dimensionnement |
| vos N2 perdent du temps / font du N1 | le N1 qui remonte au N2 faute de capacité |
| optimiser votre organisation | mesurer le lot que vous pourriez nous confier |
| on va vous montrer | vous connaissez votre N1 mieux que moi |
| erreurs, problèmes, inefficacités | volumes, horaires, motifs |

Deux phrases à garder en tête :
- **Le N1 traité par un N2 n'est pas une faute, c'est une contrainte de capacité** — la même
  que celle que Salverys vend (CLAUDE.md : « douleur capacitaire »).
- **Le livrable sert son devis, pas notre leçon** : il en ressort un périmètre de démarrage
  chiffré sur ses chiffres, au lieu de nos hypothèses. C'est ce qu'un acheteur sérieux exige
  de toute façon.

---

## 2. Quand le proposer

| Situation (champ Airtable `Externalisation N1 en place`) | Proposer le chiffrage ? |
|---|---|
| Cas 2 — sous-traitant actuel, mécontent | **Oui** — c'est la base de comparaison qu'il n'a pas |
| Cas 3 — n'a jamais externalisé | **Oui** — c'est l'offre principale de ce document |
| Cas 1 — satisfait de son sous-traitant | Non → entretien du Baromètre (`BAROMETRE-EXTERNALISATION-N1.md`) |
| Cas 4 — fermé au principe | Non |

Moment : **fin de l'appel de qualification**, ou en réponse à un prospect qui a rempli le
calculateur du site. Jamais dans le premier email à froid (trop d'effort demandé à quelqu'un
qui ne nous connaît pas).

**Capacité fondateur : 2 chiffrages en cours maximum.** Au-delà, on date le suivant.

---

## 3. Ce qu'on demande au prospect

**Un export CSV d'un mois complet de tickets** de son outil (GLPI, Jira SM, Zendesk,
Freshservice, ConnectWise…). Pas d'échantillon choisi par lui : un mois entier, qu'il obtient
en un filtre et un clic.

Colonnes utiles — **et seulement celles-là** :

| Colonne | Pourquoi |
|---|---|
| Titre / objet | Classer le motif |
| Catégorie | Classer plus vite, quand elle existe |
| Date et heure de création | Répartition horaire (ouvré, tôt, soir, samedi) |
| Groupe ou niveau qui a résolu | Savoir si un N2 a traité un N1 |
| Temps passé (si l'outil le trace) | Heures réelles, au lieu d'une moyenne supposée |

**Anonymisation, à faire par lui avant envoi** : retirer noms, emails, téléphones des
utilisateurs, et noms de ses clients finaux (remplacer par « Client A, B… » s'il veut garder
la distinction). Pas de description longue : le titre suffit.

**Confidentialité** : ce sont les tickets de *ses* clients. Proposer de signer **son** accord
de confidentialité avant l'envoi — un donneur d'ordre en a toujours un. Le dépôt ne contient
pas de NDA prospect (`MODELE-NDA-CONFIDENTIALITE.md` est un modèle *salarié*, inadapté ici).

**Repli s'il ne peut rien exporter** : lui demander seulement des comptages par catégorie et
par niveau de résolution sur un mois. Le chiffrage est moins fin, la démarche reste la même.

---

## 4. Le tri — 100 tickets, tirés au hasard

**Pourquoi 100 plutôt que 50** : l'export ne coûte pas plus au prospect, et la précision
gagne nettement. Sur une part mesurée autour de 50 %, la marge d'erreur (95 %) est de
**± 14 points sur 50 tickets, ± 10 points sur 100**. En dessous de 100, le résultat
annoncé tient mal face à un DSI qui connaît ses chiffres.

**Tirés au hasard sur le mois, pas les 100 derniers** (les derniers jours ne représentent
pas le mois). Dans le tableur : colonne `=ALEA()`, tri, on garde les 100 premières lignes.

**Les horaires se comptent sur le mois entier**, pas sur l'échantillon : c'est un simple
comptage par tranche, sans lecture ticket par ticket.

### Grille (une ligne par ticket, dans un tableur)

| Colonne | Valeurs |
|---|---|
| `Motif` | texte court : mot de passe, accès, droits, poste, messagerie, imprimante, logiciel métier… |
| `Transférable N1` | **Oui** (résoluble par procédure écrite, sans droit d'administration étendu) · **Non** (diagnostic, infrastructure, changement) · **Ambigu** |
| `Résolu par` | N1 · N2 · N3 (depuis l'export) |
| `Tranche horaire` | ouvré · tôt (avant 9 h) · soir (après 18 h) · samedi / férié |

**`Ambigu` n'est jamais compté comme transférable.** Il est affiché à part dans la
restitution : c'est honnête, et c'est la liste des questions à poser au cadrage.

**Temps : 1 h 30 à 2 h** pour 100 tickets, restitution comprise.

---

## 5. La restitution — une page, un appel de 15 minutes

Contenu, dans cet ordre :

1. **Part transférable au N1** : « 38 % des tickets (fourchette ± 10 points), dont X %
   aujourd'hui résolus par un N2 ou un N3 ».
2. **Les 5 motifs les plus fréquents** parmi les transférables, avec leur volume mensuel
   extrapolé.
3. **Répartition horaire** du mois : ouvré / tôt / soir / samedi.
4. **Heures N2 concernées** par mois, calculées avec *son* temps passé (export) ou *sa*
   durée moyenne (celle qu'il a saisie dans le calculateur). En heures et en coût
   salarial seulement : **pas de « chiffre d'affaires perdu »**. En régie au temps passé,
   ces heures sont facturées au client au tarif N2 — ce n'est pas une perte pour lui, et
   l'affirmer le ferait décrocher (décision 2026-09-26, ligne TJM retirée du calculateur).
5. **Les tickets ambigus**, listés : les questions du cadrage.
6. **Périmètre de démarrage proposé** : un lot de 200 à 400 tickets, ou ses créneaux tôt /
   soir, et le modèle qui colle (A — débordement mutualisé, B — poste dédié, `PRICING.md`).

**Ce que la restitution ne contient jamais** : un prix (il se donne au cadrage, sous NDA),
une comparaison avec un coût en France, un jugement sur l'organisation.

### 5.b Au rendez-vous de cadrage (sous NDA) : comparer au coût d'un N1 chez lui

C'est ici, et **seulement ici**, qu'on met le prix Salverys en face d'un coût français.
Jamais sur le site (le calculateur public reste sans prix : `PRICING.md`, en-tête) ni dans la
restitution écrite, qui peut circuler.

**La valeur de comparaison est celle du prospect, pas la nôtre.** On lui demande :
*« Combien vous coûte un technicien N1 chez vous, salaire et charges compris, par mois ? »*
On compare ensuite **son** chiffre au prix du devis (`PRICING.md` §1) — ce qui en fait une
comparaison **datée et propre au compte**, la seule que CLAUDE.md autorise.

Formulation type, une fois son chiffre obtenu :
> « Une position dédiée chez nous, c'est 35 h par semaine formées à votre périmètre, pour
> [prix du devis] par mois. Vous m'avez dit qu'un N1 vous coûte [son chiffre] chargé. »

Ne pas ajouter de pourcentage d'économie : il le calcule lui-même, et c'est plus convaincant.

**Repère interne si le prospect n'a pas de chiffre** — à ne **jamais** citer comme valeur de
calcul, ni écrire dans un devis ou sur le site. Recherche du 2026-09-26, chiffres lus dans
des résumés de moteur de recherche, **non vérifiés à la source** (pages bloquées depuis
l'environnement de travail) :

| Donnée | Ordre de grandeur | Source |
|---|---|---|
| Brut annuel technicien helpdesk **N1** | ~22 750 € (fourchette ~22 100 – 25 300 €) | Glassdoor, mai 2026 |
| Brut annuel technicien helpdesk (tous niveaux) | médiane ~33 400 € | Journal du Net, 2026 |
| Charges patronales 2026 | ~40-45 % avant réduction ; ~30 % autour de 2 200 € brut/mois avec la RGDU | PayFit, Keobiz, CCI Paris IdF |
| **Coût employeur estimé** | **~30 000 à 45 000 €/an**, soit ~2 500 à 3 700 €/mois — hors poste de travail, encadrement et turnover | calcul à partir des lignes ci-dessus |

À re-vérifier sur les pages sources avant tout usage en rendez-vous :
[Glassdoor N1](https://www.glassdoor.fr/Salaires/technicien-helpdesk-n1-salaire-SRCH_KO0,22.htm) ·
[Journal du Net](https://www.journaldunet.com/business/salaire/technicien-helpdesk/salaire-01105) ·
[PayFit charges 2026](https://payfit.com/fr/fiches-pratiques/charges-patronales/) ·
[CCI Paris IdF](https://www.entreprises.cci-paris-idf.fr/fiches-pratiques/les-charges-sociales-au-1er-janvier-2026)

**Jalon à nommer** (CLAUDE.md) : première prise de tickets visée **vers six semaines** après
signature, sous réserve du recrutement, de la formation et des accès ; autonomie visée
2,5 à 3,5 mois. Jamais le mot « opérationnel ».

---

## 6. Les mots pour le proposer

### Au téléphone (fin de qualification)

> « Vous connaissez votre N1 bien mieux que moi, je ne vais pas vous expliquer votre
> helpdesk. En revanche, si je dois un jour vous chiffrer quelque chose, je préfère partir de
> vos chiffres que de mes hypothèses. Ce que je vous propose : vous m'envoyez l'export d'un
> mois de tickets, anonymisé, je prends 100 tickets au hasard et je vous rends une page —
> quelle part serait transférable, à quelles heures elle arrive, et ce que serait un premier
> lot. C'est gratuit, ça vous prend un export, et vous en faites ce que vous voulez, même
> sans nous. »

**Objection — « Vous voulez auditer mon helpdesk ? »**
> « Non : je ne regarde ni vos process ni vos équipes, seulement des volumes, des motifs et
> des horaires. C'est la première étape de n'importe quel devis sérieux ; je la fais avant,
> gratuitement, pour que vous puissiez juger sur vos chiffres. »

**Objection — « Ce sont les tickets de mes clients, je ne peux pas les sortir. »**
> « Je comprends. Je signe votre accord de confidentialité avant tout envoi, et il me suffit
> du titre, de l'heure et du niveau de résolution — sans nom ni client. Et si ce n'est
> toujours pas possible, des comptages par catégorie sur un mois suffisent pour une première
> estimation. »

### Par email (après une première réponse, ou après le calculateur)

> Objet : vos chiffres, pas les miens
>
> Bonjour {prenom},
>
> Pour vous chiffrer quoi que ce soit de sérieux, je préfère partir de vos tickets que de
> mes hypothèses.
>
> Si vous m'envoyez l'export anonymisé d'un mois (titre, heure, niveau de résolution
> suffisent), je tire 100 tickets au hasard et je vous rends une page sous 5 jours ouvrés :
> la part transférable au N1, ses horaires d'arrivée, et le premier lot qu'on pourrait
> prendre. Je signe votre accord de confidentialité avant l'envoi.
>
> C'est gratuit, et le résultat vous reste, que l'on travaille ensemble ou non.
>
> {signature}

(< 100 mots, sans lien ni gras — règles de `OUTREACH-IT-N1-marque-blanche.md`.)

---

## 7. Suivi

Dans Airtable (base « Prospection Salverys », table `Comptes`), noter la date d'envoi de
l'export et la date de restitution dans les notes du compte. **Ne pas créer de colonne**
tant que le lead magnet n'a pas tourné sur 3 comptes : on mesurera d'abord s'il convertit
en rendez-vous de cadrage.
