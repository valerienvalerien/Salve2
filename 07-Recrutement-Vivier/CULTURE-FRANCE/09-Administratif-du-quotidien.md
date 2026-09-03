# Séance 9 — L'administratif du quotidien français

**Durée** : 45 min + 15 min · **Objectif** : décoder ce qu'un utilisateur mentionne en
passant. **Séance particulièrement utile au télésecrétariat médical**, où les patients
parlent naturellement de la Sécu, de la mutuelle et de leur médecin traitant.

> ⚠️ **On ne conseille jamais** sur ces sujets. On comprend, on note ce qui est utile au
> dossier, on ne se substitue à aucun organisme. En médical, s'ajoute le **secret médical**
> (critère KO de la grille QA) : on ne collecte que ce qui est nécessaire.

---

## 1. Santé — le vocabulaire qui revient tous les jours

| Terme | Ce que c'est |
|---|---|
| **La Sécu** (Sécurité sociale) | Assurance maladie de base, remboursement partiel |
| **Carte Vitale** | Carte à puce qui justifie les droits ; « je n'ai pas ma carte Vitale » = pas de télétransmission |
| **Ameli** | Le service en ligne de l'Assurance Maladie |
| **La mutuelle** | Complémentaire santé qui couvre ce que la Sécu ne rembourse pas |
| **Médecin traitant** | Le médecin déclaré ; **passer par lui conditionne le remboursement** — d'où les demandes de RDV « chez mon médecin traitant » |
| **Ordonnance** | Prescription |
| **Tiers payant** | Le patient ne fait pas l'avance des frais |
| **Doctolib / Maiia** | Plateformes de prise de rendez-vous — outils métier du télésecrétariat |
| **CPAM** | Caisse primaire d'assurance maladie (la Sécu locale) |

**En télésecrétariat** : « je voudrais un rendez-vous avec le docteur, c'est pour un
renouvellement d'ordonnance » est une demande **courante et non urgente** ; « j'ai une
douleur dans la poitrine » **n'est pas une prise de RDV**, c'est une urgence à orienter
selon la consigne du cabinet. Le tri est dans le script du compte.

## 2. Les numéros d'urgence à connaître

**15** SAMU (urgence médicale) · **17** Police · **18** Pompiers · **112** urgence
européenne · **114** urgence par SMS (personnes sourdes).

> La conduite à tenir face à une urgence est **définie par le cabinet client**, jamais
> improvisée. La séance apprend à **reconnaître** l'urgence, pas à la traiter.

## 3. Argent et administration

| Terme | Ce que c'est |
|---|---|
| **RIB / IBAN** | Coordonnées bancaires. **Un agent ne les demande jamais spontanément** |
| **Prélèvement à la source** | L'impôt retenu directement sur le salaire |
| **Les impôts** | L'administration fiscale (impots.gouv.fr) |
| **CAF** | Allocations familiales |
| **France Travail** | Service public de l'emploi (ex-Pôle emploi) |
| **URSSAF** | Recouvrement des cotisations sociales |
| **La Poste / Colissimo / Chronopost** | Courrier et colis |

## 4. La règle de prudence — à graver

- ❌ **Jamais** demander un mot de passe, un code de carte bancaire, un IBAN complet, un
  numéro de sécurité sociale « pour vérifier ».
- ✅ On demande **uniquement** ce que le script du compte prévoit, et on l'explique :
  *« Pour retrouver votre dossier, pouvez-vous me donner votre nom et votre date de
  naissance ? »*
- ✅ Si l'utilisateur propose spontanément des données inutiles : **on ne les note pas**
  (minimisation RGPD, et critère KO « secret médical / RGPD » en QA).

---

## Mise en situation (15 min)

1. *« Je voudrais un rendez-vous, mais je n'ai plus ma carte Vitale, ça pose problème ? »*
   → l'agent répond dans le périmètre du script, sans conseiller sur le remboursement.
2. *« Mon médecin traitant est en vacances, je peux voir un autre médecin ? »* → que
   collecte-t-on, que renvoie-t-on au cabinet ?
3. Un patient donne son numéro de sécurité sociale sans qu'on l'ait demandé. Que fait
   l'agent ?

## Quiz

1. Quelle différence entre la Sécu et la mutuelle ?
2. Quel numéro pour une urgence médicale ?
3. Que veut dire « médecin traitant » ?
4. Un utilisateur propose son mot de passe : que répond l'agent ?
5. Quelle information ne collecte-t-on jamais « pour vérifier » ?

<details><summary>Corrigé</summary>

1. La Sécu rembourse une base, la mutuelle complète. 2. **15** (ou 112). 3. Le médecin
déclaré, dont le parcours conditionne le remboursement. 4. Qu'on ne le demande jamais et
qu'il ne doit le communiquer à personne. 5. Mot de passe, code bancaire, IBAN complet,
numéro de sécurité sociale hors script.
</details>

## À retenir

> **Comprendre pour bien orienter, jamais pour conseiller.** Et une seule ligne rouge, qui
> vaut aussi bien en médical qu'en IT : **on ne demande jamais une donnée que le script ne
> prévoit pas.**
