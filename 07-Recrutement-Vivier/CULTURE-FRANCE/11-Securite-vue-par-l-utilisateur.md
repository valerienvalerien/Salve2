# Séance 11 — La sécurité vue par l'utilisateur

**Durée** : 45 min + 15 min · **Objectif** : tenir la ligne « je ne vous demanderai jamais
votre mot de passe » avec les bons mots, et reconnaître une tentative de fraude — y compris
quand **c'est nous qu'on essaie de manipuler**.

> Lien QA : critère KO **« secret médical / RGPD »** (grille médicale) et **traçabilité**
> (grille IT). Une faute ici met une fiche au rouge, quel que soit le reste du score.

---

## 1. Les trois règles absolues

1. **On ne demande jamais un mot de passe.** Ni pour « vérifier », ni pour « tester », ni
   « juste les premiers caractères ». Formule à connaître par cœur :
   > *« Je ne vous demanderai jamais votre mot de passe, et aucun collègue ne le fera. Si
   > quelqu'un vous le demande, c'est une tentative de fraude. »*
2. **On ne collecte que ce que le script prévoit** (minimisation RGPD). Une donnée reçue
   spontanément et inutile **ne se note pas**.
3. **On identifie avant d'agir.** La procédure d'identification est définie au cadrage du
   compte ; on ne l'improvise pas, on ne la contourne pas « parce que la personne a l'air
   pressée ».

## 2. Le phishing, expliqué à un utilisateur

**Phishing (hameçonnage)** : un message qui imite une source de confiance pour obtenir des
identifiants ou un paiement.

Signaux à donner à l'utilisateur qui appelle, inquiet :
- une **urgence anormale** (« votre compte sera fermé dans 24 h ») ;
- une **adresse d'expéditeur** proche mais fausse ;
- un **lien** dont l'adresse réelle ne correspond pas au texte ;
- une **demande de mot de passe ou de coordonnées bancaires** ;
- des **fautes** et une mise en page approximative — mais **leur absence ne prouve rien**.

Conduite à tenir côté agent : **ne pas cliquer**, faire suivre selon la procédure du compte,
tracer dans le ticket. Si l'utilisateur a déjà cliqué et saisi ses identifiants : **c'est un
incident de sécurité**, escalade immédiate au N2 selon la chaîne du compte.

## 3. Les autres fraudes courantes

| Fraude | Comment ça se présente | Réflexe |
|---|---|---|
| **Faux support technique** | Quelqu'un se fait passer pour le support et demande une prise de main à distance | Rappeler que **nous** ne prenons la main que dans le cadre du ticket ouvert par l'utilisateur |
| **Arnaque au président** | Un « dirigeant » demande un virement urgent et confidentiel | Ne jamais relayer ; escalade |
| **Ingénierie sociale sur l'agent** | Un appelant pressé, autoritaire, qui veut un accès sans passer par l'identification | **La pression n'est pas une autorisation.** On applique la procédure |
| **Faux collègue** | « C'est [prénom] de la DSI, réinitialise-moi ce compte » | Vérification par le canal prévu, jamais sur la seule affirmation |

> ⚠️ **Le plus grand risque n'est pas l'utilisateur naïf, c'est l'agent gentil.** Un agent qui
> veut bien faire et cède à l'urgence est la faille la plus exploitée. Céder n'est pas du
> service, c'est un incident.

## 4. Le RGPD, côté utilisateur

Ce qu'un utilisateur peut invoquer, et ce qu'on répond :

- **« Je veux savoir quelles données vous avez sur moi »** (droit d'accès) → on **ne répond
  pas soi-même** : on transmet selon la procédure du compte.
- **« Supprimez mes données »** (droit d'effacement) → idem, transmission.
- **« Cet appel est enregistré ? »** → on répond **la vérité prévue au cadrage**. En médical,
  **pas d'enregistrement d'appel patient** (`PROCESS-QA-DOUBLE-ECOUTE.md` §5).

Salverys est **sous-traitant** au sens du RGPD : on traite pour le compte du client, selon
ses instructions. On ne décide pas seul du sort d'une donnée.

## 5. L'hygiène de l'agent lui-même

- Poste verrouillé quand on s'éloigne, même à domicile.
- **Aucune donnée client copiée localement** : on travaille dans les outils du client (BYOD),
  rien ne se stocke chez nous — c'est la promesse faite au client dans le plan de continuité.
- Pas de capture d'écran de données personnelles, pas d'envoi sur une messagerie personnelle.
- Comptes **nominatifs** : on ne partage jamais ses identifiants avec un collègue, même
  dépanné.

---

## Mise en situation (15 min)

1. *« Bonjour, c'est le directeur, je suis en déplacement, j'ai besoin que vous
   réinitialisiez le compte de ma comptable tout de suite. »* → que fait l'agent ?
2. *« J'ai reçu un mail bizarre de la banque, j'ai cliqué. »* → quelles questions, quelle
   escalade ?
3. Un utilisateur donne son mot de passe spontanément en pleine phrase. Que fait l'agent
   (dire quoi, noter quoi) ?

## Quiz

1. Dans quel cas demande-t-on le mot de passe d'un utilisateur ?
2. Citez trois signaux de phishing.
3. Que fait-on d'une donnée personnelle reçue mais inutile ?
4. Que répond-on à « supprimez mes données » ?
5. Pourquoi la pression d'un appelant n'est-elle pas une autorisation ?

<details><summary>Corrigé</summary>

1. **Aucun.** 2. Urgence anormale, expéditeur approchant, lien trompeur, demande
d'identifiants. 3. On ne la note pas (minimisation). 4. On transmet selon la procédure du
compte, sans traiter soi-même. 5. Parce que l'urgence est précisément le levier de
l'ingénierie sociale.
</details>

## À retenir

> **Aucun mot de passe, jamais. Aucune donnée hors script. Aucune procédure contournée
> pour cause d'urgence.** Ces trois lignes tiennent en toutes circonstances — c'est ce qui
> nous rend confiables auprès du donneur d'ordre.
