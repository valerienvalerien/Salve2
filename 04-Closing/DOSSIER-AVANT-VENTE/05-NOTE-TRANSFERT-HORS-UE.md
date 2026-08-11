# NOTE — Traitement des données et transfert hors UE

> **SPÉCIMEN** — pièce 5 du dossier avant-vente. Note de synthèse destinée au juriste ou au
> DPO du client final. Elle **résume** et ne remplace pas le **DPA**
> (`04-Closing/MODELE-DPA-RGPD.md`), qui est la source de vérité et prévaut en cas de
> divergence.

---

## 1. Qui est quoi dans la chaîne

| Acteur | Qualification RGPD |
|---|---|
| Le client final | **Responsable de traitement** |
| Le partenaire (ESN, infogéreur, éditeur, télésecrétariat) | **Sous-traitant** (art. 28) |
| **Salverys** | **Sous-traitant ultérieur** du partenaire (art. 28 §2 et §4) |

Salverys n'est **pas hébergeur** et ne détermine aucune finalité : elle traite sur
instruction documentée du partenaire, lui-même sur instruction du client final.

## 2. Le point qui compte : aucune donnée n'est stockée chez Salverys

C'est l'élément structurant de toute la conformité, et il précède la discussion sur le
transfert :

- Les agents travaillent **dans les outils du client**, par **accès distant en navigateur**,
  sur des **comptes nominatifs**.
- **Aucune copie locale**, aucun export, aucun stockage sur les postes ni sur des serveurs
  Salverys.
- Aucun enregistrement d'appel côté médical.

La surface d'exposition est donc un **accès**, pas un **stock**. Un accès se révoque en
quelques minutes ; un stock se réclame, s'audite et se restitue. C'est une différence de
nature, pas de degré.

## 3. Le transfert hors UE, traité de front

Madagascar est un **pays tiers** au sens du RGPD et ne bénéficie pas d'une décision
d'adéquation. L'accès aux données depuis Antananarivo constitue donc un **transfert** au sens
du chapitre V.

**Encadrement en place :**

- **Clauses contractuelles types** (CCT/SCC) de la Commission européenne, module
  sous-traitant → sous-traitant ultérieur, annexées au DPA.
- **Mesures complémentaires** documentées, au sens de la jurisprudence *Schrems II* :
  minimisation des données accessibles, **accès distant sans copie locale**, chiffrement des
  canaux, **comptes nominatifs** et journalisation côté client, révocation immédiate à la
  sortie d'un agent.
- **Analyse d'impact du transfert** (TIA) disponible sur demande.

**À dire au juriste plutôt qu'à éluder :** c'est ici que se joue la discussion, pas sur le
principe de la sous-traitance. Un client qui impose contractuellement une localisation
UE/EEE stricte est un cas à traiter en amont — mieux vaut le savoir au cadrage qu'après la
signature.

## 4. Sous-traitance ultérieure : information et opposition

Le recours à Salverys relève de l'**art. 28 §2**. Deux régimes possibles selon le contrat
qui lie le partenaire à son client final :

| Régime prévu au contrat du partenaire | Ce que le partenaire doit faire |
|---|---|
| **Autorisation générale écrite** | Informer préalablement du recours à Salverys, laisser courir le délai convenu, accueillir un éventuel **droit d'opposition motivé** |
| **Autorisation spécifique préalable** | Obtenir un **accord écrit** avant tout démarrage — souvent par avenant |

Côté Salverys, le DPA prévoit une **autorisation générale** du partenaire, assortie d'une
**information préalable de tout ajout ou remplacement** avec un préavis de **5 jours ouvrés**
et un **droit d'opposition motivé**.

> **La marque blanche porte sur la marque, pas sur la chaîne.** L'utilisateur final voit la
> marque du client ; le client final, lui, **sait contractuellement** qu'il y a un
> sous-traitant ultérieur. C'est une obligation, pas une option — et c'est aussi ce qui
> protège le partenaire : une chaîne déclarée ne peut pas lui être reprochée plus tard.

## 5. Le reste du dispositif

- **Engagements de confidentialité et secret professionnel** signés par chaque intervenant
  (secret médical côté santé).
- **Registre des traitements** tenu côté Salverys pour les traitements effectués pour le
  compte du partenaire.
- **Assistance au responsable de traitement** : exercice des droits, notification de
  violation dans les délais du DPA, coopération en cas de contrôle.
- **Droit d'audit** du partenaire dans les conditions du DPA.
- **Fin de contrat** : suppression des accès et restitution/effacement selon le DPA — sans
  objet pour les données, puisqu'aucune n'est stockée (§2).

## 6. Secteur santé

Si des données de santé sont concernées, se reporter à `01-Strategie-Offre/CONFORMITE-HDS-RGPD.md` :
l'**hébergement** reste chez le client ou son hébergeur certifié HDS. Salverys **accède** sans
héberger — aucune brique HDS n'est à sa charge, ce qui doit être dit explicitement, car c'est
la première objection d'un DPO du secteur.

---

*Note de synthèse remise au titre de l'art. 10 bis. En cas de divergence, le DPA prévaut
(art. 11 du contrat de prestation).*
