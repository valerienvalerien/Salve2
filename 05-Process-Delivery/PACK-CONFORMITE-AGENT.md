# PACK-CONFORMITE-AGENT.md — ce que chaque agent signe et remplit

> ⚠️ **Document de travail interne, pas un conseil juridique.** À faire relire par un
> avocat / DPO avant le premier contrat médical ou québécois.
>
> Cadre **client** déjà établi : `04-Closing/MODELE-DPA-RGPD.md` (Salverys sous-traitant
> art. 28, zéro stockage, CCT, sous-traitants ultérieurs) et
> `01-Strategie-Offre/CONFORMITE-HDS-RGPD.md`. Le présent document traite du **maillon
> manquant** : ce qui descend jusqu'à l'agent freelance.

---

## 1. Qui est quoi

La conformité ne se « possède » pas, elle se **cascade**. Trois configurations :

| Configuration | Responsable de traitement | Sous-traitant | Sous-traitant ultérieur |
|---|---|---|---|
| Éditeur SaaS en direct | l'éditeur | **Salverys** | l'agent freelance |
| Cabinet / médecin en direct | le médecin | **Salverys** | l'agent freelance |
| **Marque blanche** (télésec FR) | le médecin | le télésecrétariat | **Salverys**, puis l'agent |

En marque blanche tu es **sous-traitant ultérieur** : ton donneur d'ordre doit avoir
l'autorisation de son propre client pour te faire intervenir, et te répercuter les mêmes
obligations. C'est à vérifier **avant** de signer, pas après.

Conséquence directe : **Salverys n'est jamais responsable de traitement** sur les données
d'un client. Elle ne l'est que sur ses propres données (prospects B2B du CRM, candidats du
vivier).

---

## 2. Ce que fait le client / ce que fait Salverys

| Obligation | Qui la porte | Ce que Salverys fournit |
|---|---|---|
| Base légale, information des personnes | **Client** | rien |
| Analyse d'impact (AIPD) si requise | **Client** | les éléments de description du traitement |
| Hébergement HDS des données de santé (FR) | **Client** | rien — Salverys n'héberge pas (art. 4 du DPA) |
| Clauses contractuelles types (transfert hors UE) | **Client** les impose, Salverys les **signe** comme importateur | signature + mesures complémentaires |
| Analyse d'impact du transfert (TIA) | **Client** | description du cadre malgache, des accès, des mesures |
| ÉFVP (Québec, Loi 25) | **Client** | le pack de réponse (cf. §5) |
| Confidentialité des personnes qui accèdent | **Salverys** | le pack du §3 |
| Registre de sous-traitance (art. 30.2) | **Salverys** | tenu en interne |
| Notification de violation | **Salverys → Client** sans délai | procédure d'incident |

---

## 3. Le pack agent — 7 pièces

À faire signer **avant la première ouverture d'accès**, jamais après.

| # | Pièce | Ce qu'elle couvre | Statut |
|---|---|---|---|
| 1 | **Engagement de confidentialité (NDA)** | secrets d'affaires Salverys + données personnelles | ✅ `MODELE-NDA-CONFIDENTIALITE.md` — ⚠️ **art. 7 à corriger** (cf. §6) |
| 2 | **DPA freelance** (Salverys → agent) | l'agent comme sous-traitant ultérieur : instructions documentées, zéro copie locale, notification d'incident, restitution, interdiction de re-sous-traiter | ❌ **à créer** — annoncé à l'art. 6 du DPA client, modèle inexistant |
| 3 | **Engagement de secret professionnel** | positions médicales uniquement — art. 226-13 du code pénal, sans limite de durée | ❌ à créer |
| 4 | **Charte du poste de travail** | les **gestes** : session verrouillée, MFA, aucune capture d'écran, aucun export, aucun cloud personnel, pas de notes papier emportées, pas de téléphone personnel à portée pendant un appel patient, pas de travail en lieu partagé, réseau domestique sécurisé | ❌ à créer — **la pièce la plus manquante** |
| 5 | **Attestation de formation** | RGPD + secret professionnel, datée et signée, **renouvelée chaque année** | ❌ à créer |
| 6 | **Fiche d'habilitation nominative** | par client et par outil : compte, profil, date d'ouverture, date de révocation | ❌ à créer |
| 7 | **Attestation de fin de mission** | accès révoqués, aucune copie conservée | ❌ à créer |

**Pourquoi la charte du poste de travail (n° 4) est la plus importante :** c'est la seule
pièce qui décrit des **gestes** au lieu d'énoncer des principes. Un agent ne « viole » pas
le RGPD par intention — il prend une capture d'écran pour se souvenir d'un numéro, ou note
un nom de patient sur un carnet. Un engagement abstrait n'empêche ni l'un ni l'autre. Et
c'est aussi la pièce que tu montres en audit : elle prouve que la mesure est descendue
jusqu'au poste.

---

## 4. Les 3 registres que Salverys tient

| Registre | Base | Contenu |
|---|---|---|
| **Traitements en tant que sous-traitant** | art. 30.2 RGPD | par client : nature du traitement, catégories de données et de personnes, sous-traitants ultérieurs, transferts, mesures de sécurité |
| **Habilitations** | art. 32 — matérialise « accès nominatifs et tracés » | qui accède à quoi, chez quel client, depuis quand, révoqué quand |
| **Violations de données** | art. 33.5 | **obligatoire même sans notification** — toute violation, y compris celles jugées sans risque |

Un tableur suffit pour démarrer. L'absence de registre est ce que l'autorité de contrôle
constate en premier, parce que c'est ce qu'elle demande en premier.

---

## 5. Loi 25 (Québec) — ce que ça change

Ce n'est **pas** un RGPD canadien, et le mécanisme est différent.

- Il n'existe **aucun équivalent des clauses contractuelles types**. Le mécanisme est
  l'**ÉFVP** — évaluation des facteurs relatifs à la vie privée — que le client québécois
  doit mener **avant** toute communication de renseignements personnels hors Québec.
- L'ÉFVP examine la sensibilité des données, la finalité, les mesures de protection
  (y compris contractuelles) et le **cadre juridique du pays de destination**.
- La communication n'est possible que si l'évaluation conclut à une **protection adéquate**,
  et elle doit faire l'objet d'une **entente écrite** reflétant les résultats de l'ÉFVP.
- L'obligation pèse sur le **client**, pas sur Salverys. Mais sans les éléments de Salverys,
  il ne peut pas la mener — donc en pratique c'est toi qui débloques la vente.
- Hors Québec, le régime applicable est la **LPRPDE / PIPEDA** (fédéral) : transfert à un
  prestataire admis, sous réserve d'une protection comparable par contrat et de
  transparence envers les personnes.

**Ce que ça implique commercialement :** un « pack ÉFVP » pré-rempli est un **accélérateur
de vente**, pas une formalité. Le client québécois qui doit tout reconstituer lui-même
recule ; celui à qui tu envoies le dossier complet signe plus vite.

**Contenu du pack ÉFVP à préparer** — description du traitement · catégories de données ·
liste nominative des personnes qui accèdent · mesures techniques et organisationnelles ·
sous-traitants ultérieurs · durée de conservation (nulle côté Salverys) · procédure
d'incident et délai de notification · droit d'audit · cadre juridique malgache.

> Sur le cadre malgache : Madagascar dispose d'une loi de protection des données à
> caractère personnel et d'une autorité de contrôle. **Ne pas s'en servir comme argument
> principal** — l'effectivité de l'autorité est discutable et un DPO le sait. C'est un
> élément de contexte dans la TIA / l'ÉFVP, jamais une preuve d'adéquation. Ce qui porte,
> ce sont tes **mesures** : zéro copie locale, comptes nominatifs, MFA, accès révocables.

---

## 6. Écarts à corriger

1. **`MODELE-NDA-CONFIDENTIALITE.md`, art. 7** — fait respecter à l'agent « les instructions
   de la Société **en sa qualité de responsable de traitement** ». C'est juste pour les
   données internes Salverys, **faux pour les données d'un client**, où Salverys est
   sous-traitant. À scinder en deux alinéas.
2. **Pas de modèle de DPA freelance**, alors que l'art. 6 du DPA client s'engage auprès du
   client sur son existence. C'est le seul écart qui crée une **contradiction contractuelle**
   — à traiter en premier.
3. **Rien sur le Québec** dans le DPA client : l'art. 7 ne couvre que le transfert hors UE.
   Or la bio LinkedIn annonce un accompagnement Loi 25.
4. **Pièces 3 à 7 inexistantes** — tant qu'elles ne sont pas signées, la formule « accès
   nominatifs et tracés » n'est pas démontrable en audit.
