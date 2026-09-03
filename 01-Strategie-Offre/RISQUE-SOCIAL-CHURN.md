# Risque social & churn client — que faire d'un agent quand le contrat s'arrête

> **Statut** : note de cadrage interne, 2026-09-03. **Ce n'est pas un avis juridique.**
> Les numéros d'articles autres que l'art. 53 sont à confirmer sur le texte officiel avant
> toute rédaction de contrat. Budget déjà prévu pour ça : ~500 € de conseil social local
> (`FINANCE-PREVISIONNEL.md §7.4`). Cette note sert à arriver chez le conseil avec des
> questions fermées, pas à s'en passer.

## 0. Correction préalable : le code applicable a changé

Le repo (`FINANCE-PREVISIONNEL.md §7.1`) parle de « droit du travail malgache » sans
référence. La référence utile n'est plus la **loi 2003-044** mais la **loi n° 2024-014 du
14 août 2024 portant Code du travail**, qui l'abroge et la remplace (395 articles,
11 titres). Toute clause recopiée d'un modèle antérieur à août 2024 est à revérifier.

Textes officiels :
- Assemblée nationale : `assemblee-nationale.mg/loi-n-2024-014-code-de-travail-doc/`
- CNaPS (PDF intégral) : `cnaps.mg` → « Les codes sur les activités de la CNaPS »

---

## 1. Réponse courte

| Question posée | Réponse |
|---|---|
| Peut-on arrêter un CDI à 7-8 mois si le client churne ? | Oui, en **licenciement pour motif économique**, avec procédure. Le coût est plus faible qu'on ne le croit (**~1,6-1,8 mois de coût employeur**), le risque est **procédural**, pas financier. |
| Comment ne pas payer l'intercontrat ? | Le dispositif prévu par le code s'appelle le **chômage technique** (suspension). Plafonné à 6 mois, il coûte **~1 mois de salaire**, et on garde l'agent. |
| Des CDD à répétition ? | **Non.** Trois verrous légaux le ferment, et **le CDD est plus rigide que le CDI** en cas de churn : rupture anticipée = tous les salaires restant à courir. |

**Le vrai levier n'est pas dans le contrat de travail, il est dans le contrat client** :
préavis client ≥ préavis salarié + délai de replacement, et volume ferme facturable.

---

## 2. Scénario churn au mois 7-8 : le chiffrage réel

Base : agent salarié, brut 3 250 000 Ar (650 €), **coût employeur ~736 €/mois** (`CLAUDE.md`).

| Poste | À 7-8 mois d'ancienneté | Montant |
|---|---|---|
| Préavis | 8 j (ouvrier) · **1 mois (employé)** · 3 mois (cadre) — selon catégorie et ancienneté | **~736 €** |
| Indemnité de licenciement | 10 jours de salaire **par année complète de service**, plafond 6 mois → à 7-8 mois, **aucune année complète** | **0 €** |
| Congés payés non pris | 2,5 j ouvrables/mois acquis, à solder | ~400-570 € |
| Dommages-intérêts pour licenciement abusif | **Seulement si la procédure ou le motif ne tiennent pas** — fixés par le tribunal | 0 € … beaucoup |
| **Total maîtrisé** | | **~1 150-1 300 €** ≈ **1,6-1,8 mois de coût employeur** |

**Ce que ça dit** : la sortie coûte moins de deux mois d'intercontrat. Le calcul
« je ne veux pas payer l'intercontrat » économise 736 €/mois mais dépense ~1 200 €
immédiatement **et détruit l'actif** (agent formé sur le SI du client, recrutement et
montée en compétence à refaire). **Licencier n'est rentable qu'au-delà de ~2 mois
d'intercontrat sans perspective de replacement.**

⚠️ **La correction à porter dans `FINANCE-PREVISIONNEL.md §7.1`** : la provision est
calée « à partir de 6 mois d'ancienneté » sur l'**indemnité de licenciement**. Or
l'indemnité est nulle avant 1 an. Le coût de sortie réel dans la fenêtre 0-12 mois est
**le préavis + le solde de congés**. La provision doit être ouverte **dès l'embauche**,
pas à 6 mois.

### La procédure économique est le vrai coût

Pour un licenciement économique, la loi 2024-014 impose une séquence :
1. consultation du comité d'entreprise et/ou des délégués du personnel sur la mesure
   projetée, avec communication des motifs, de la situation financière, du plan de
   redressement, de la liste des postes touchés par catégorie, de la priorité de
   réembauchage ;
2. procès-verbal de réunion **affiché** dans l'entreprise ;
3. avis des représentants **dans les 20 jours** ;
4. **saisine de l'inspecteur du travail**, PV de consultation joint ;
5. **critères d'ordre** des licenciements et **priorité de réembauchage**.

Sauter une étape ne rend pas le licenciement gratuit : ça le rend **abusif**, avec
dommages-intérêts fixés par le tribunal. C'est là qu'est le risque, pas dans le barème.

> **À faire trancher** : en dessous du seuil de mise en place des délégués du personnel
> (effectif prévu : 1 à 8 agents pendant longtemps), que reste-t-il d'obligatoire ?
> La saisine de l'inspecteur, très probablement, oui. La consultation, sans objet s'il n'y
> a pas de représentants. **Question n°3 pour le conseil social.**

---

## 3. Le chômage technique : le dispositif fait exactement pour l'intercontrat

**Définition** (loi 2024-014) : toute **interruption collective** du travail résultant de
causes **conjoncturelles, techniques, économiques ou accidentelles**. La perte d'un
donneur d'ordre entre a priori dans les causes économiques conjoncturelles.

| Paramètre | Règle |
|---|---|
| Déclaration | **préalable à l'inspection du travail** territorialement compétente (sauf force majeure) |
| Durée maximale | **6 mois** (prolongation exceptionnelle possible par arrêté ministériel en crise nationale) |
| Coût pour l'employeur | **indemnité de suspension**, alignée sur le montant du préavis et **plafonnée à ~1 mois de salaire** |
| Droit du salarié | il peut **rompre le contrat sans préavis après 3 mois** de chômage technique |
| Au terme des 6 mois | contrat réputé rompu → il faut solder préavis + indemnité de licenciement |

**Traduction opérationnelle** : un intercontrat de 2 mois coûte **~736 € une fois**, pas
1 472 €. Pour le même prix qu'un licenciement en préavis, **on garde l'agent formé**. Le
chômage technique est donc le réflexe par défaut sur un trou de charge < 3 mois ; le
licenciement économique ne se justifie que si le replacement n'a aucune perspective.

**Deux limites à respecter** :
- Le texte parle d'interruption **collective**. Le dispositif est fait pour un service ou
  une équipe, pas pour parquer un individu pendant qu'on staffe les autres. Sur une
  équipe de 2-3 agents dédiés au compte perdu, l'assiette collective existe.
- **Au-delà de 3 mois, l'agent part quand il veut, sans préavis.** Le chômage technique
  n'est pas un parking : c'est une fenêtre de 3 mois utile, pas de 6.

> **Questions n°1 et n°2 pour le conseil social** (voir §6).

---

## 4. Les CDD à répétition : à écarter, et pas pour des raisons morales

### a) Verrou n°1 — l'objet est interdit
Le CDD ne peut pas couvrir une **tâche de nature permanente**. Un helpdesk IT N1 récurrent
sous contrat cadre reconduit 12 mois **est** une activité permanente. Le CDD est alors
irrégulier dès la signature et **réputé conclu pour une durée indéterminée**. On paie le
coût du CDI sans en avoir la sécurité juridique.

### b) Verrou n°2 — le carrousel est explicitement fermé
- CDD : **2 ans maximum**, renouvelable **deux fois**, **6 ans** tous renouvellements
  compris.
- Un CDD d'au moins 6 mois est **transformé de plein droit en CDI après deux
  renouvellements**.
- **La réembauche du même travailleur au même poste dans un délai de 3 mois est assimilée
  à un renouvellement.** Le législateur a anticipé exactement la manœuvre.

### c) Verrou n°3 — le CDD est PLUS rigide que le CDI, pas moins
C'est le point décisif et le plus contre-intuitif. Un CDD **ne peut pas être rompu par
anticipation**, sauf faute lourde, force majeure ou cas prévu au contrat. Et les
**difficultés économiques ne sont pas un cas de force majeure**. Une rupture anticipée
hors ces cas donne au salarié des dommages-intérêts **égaux aux salaires et avantages
qu'il aurait perçus jusqu'au terme**.

| Le client part au mois 4 | Coût de sortie de l'agent |
|---|---|
| Agent en **CDI** (8 mois d'ancienneté) | ~1 mois de préavis + congés ≈ **1 200 €** |
| Agent en **CDD de 12 mois** rompu au mois 4 | **8 mois de salaire** ≈ **5 900 €** |

**Le CDD ne transfère pas le risque de churn : il le multiplie par 5.**

### d) Verrou n°4 — le contexte de contrôle se durcit
La loi 2024-014 encadre **plus strictement** le recours aux contrats de prestation externes
destinés à couvrir une activité permanente, et prévoit des **sanctions** contre l'usage de
formes contractuelles servant à éviter le contrat de travail standard. Le sens de l'histoire
est l'inverse de celui recherché.

### e) La raison business, qui suffirait seule
Le modèle affiché est **CDI, 4,5× le marché local, objectif zéro turnover** (`CLAUDE.md`).
Ce qui se facture 1 700-2 000 €/ETP, c'est la continuité et la connaissance du SI client.
Un agent en CDD de 6 mois détruit précisément ce qu'on vend — et l'argument « équipe stable
en CDI » disparaît des scripts et des réponses aux appels d'offres des donneurs d'ordre.

---

## 5. Ce qui protège vraiment — 5 leviers, par ordre de rendement

### 1. Aligner le préavis client sur le préavis salarié + le délai de replacement
`MODELE-CONTRAT-PRESTATION.md` art. 3 prévoit **60 jours**. C'est suffisant pour un agent
« employé » (1 mois de préavis), **insuffisant pour un manager/cadre** (3 mois).
→ **Action : préavis 90 jours au-delà de 3 ETP placés, 60 jours en dessous.**

### 2. Volume ferme facturable — déjà en place, à ne jamais lâcher en négociation
`PRICING.md §3` : positions facturées, consommées ou non. **C'est la couverture principale
du risque décrit dans cette note.** Chaque fois qu'un prospect demande de sauter cette
clause, il demande de reprendre le risque de sortie sur nous : c'est exactement ce qui
justifie de retomber au prix du palier inférieur.

### 3. Clause d'affectation dans le contrat de travail — la clause manquante
À faire rédiger : *« Le travailleur est recruté pour le métier helpdesk IT N1.
L'affectation à un client déterminé ne constitue pas un élément essentiel du contrat ;
Salverys peut le réaffecter sur tout autre compte, site ou horaire relevant du même métier
et de la même catégorie. »*
Sans elle, réaffecter un agent d'un client à un autre s'analyse en **modification du
contrat**, qu'il peut refuser — et on retombe sur le licenciement. **C'est la clause qui
transforme un intercontrat en simple réaffectation.**

### 4. Période d'essai au maximum légal
Art. 53 loi 2024-014 : la durée de l'essai ne doit pas dépasser le temps nécessaire pour
apprécier l'aptitude professionnelle ; **le contrat d'engagement à l'essai ne peut excéder
six mois et n'est renouvelable qu'une seule fois**, et doit être **stipulé par écrit**.
→ La fenêtre d'ajustement est de **6 mois, pas 3**. Poser 3 mois par défaut, c'est se
priver de la moitié de sa protection. (Lecture prudente : 6 mois = plafond renouvellement
compris ; à confirmer — question n°1.)

**Coïncidence utile à exploiter** : `PRICING.md §3.b` offre au client une **sortie à
30 jours pendant les 3 premiers mois**. Si l'essai est porté à 6 mois, la fenêtre de
sortie du client est **entièrement couverte** par la fenêtre d'essai des agents. Le risque
résiduel ne commence qu'au mois 7 — exactement le scénario de cette note.

### 5. Provisionner la sortie dans le prix, dès l'embauche
1 mois de coût employeur par agent = **736 €**, lissé sur 12 mois = **~61 €/mois/agent**,
soit **~3,6 % d'un tarif ETP à 1 700 €**. C'est le coût d'assurance du modèle salarié.
Il est déjà absorbé par les marges de la grille (`PRICING.md §3`) — il faut juste
**l'isoler** au lieu de le découvrir le jour du churn.

**+ La règle qui prime sur toutes les autres, déjà actée** : n'embaucher qu'**après**
signature d'un volume ferme facturable (`FINANCE-PREVISIONNEL.md §2.c`). Le meilleur
traitement de l'intercontrat reste de ne pas le créer.

---

## 6. Les 5 questions à poser au conseil social local (~500 € budgétés)

1. **Essai** : pour un agent helpdesk IT N1, quelle catégorie professionnelle et quelle
   convention collective s'appliquent ? Durée d'essai maximale réellement opposable, et
   rédaction de la clause de renouvellement (les 6 mois de l'art. 53 sont-ils un plafond
   renouvellement compris ?).
2. **Chômage technique** : la perte d'un donneur d'ordre est-elle un motif recevable ? Le
   dispositif est-il utilisable pour une équipe de 2-3 agents (condition « collective ») ?
   Montant et base de calcul exacts de l'indemnité de suspension.
3. **Licenciement économique en TPE** : en l'absence de délégués du personnel (effectif
   sous le seuil), quelles étapes restent obligatoires, sous quels délais, et quelles
   pièces produire à l'inspection du travail ?
4. **Clause d'affectation** : validité et rédaction d'une clause de mobilité inter-clients
   permettant de réaffecter un agent sans son accord.
5. **Marque blanche** : le nouvel encadrement des contrats de prestation externes couvrant
   une activité permanente (loi 2024-014) crée-t-il un risque de requalification
   (prêt de main-d'œuvre / marchandage) dans notre modèle MB, où nos salariés travaillent
   pour le compte d'un donneur d'ordre sur son périmètre ? **Question à traiter en
   priorité : elle touche la stratégie GTM MB-first, pas seulement la sortie d'un agent.**

---

## 7. Décisions à porter dans les autres documents

| Document | Modification |
|---|---|
| `FINANCE-PREVISIONNEL.md §7.1` | Provision de sortie **dès l'embauche** (préavis + congés), pas à 6 mois ; référence **loi 2024-014** ; chiffrage ~1 200 €/agent |
| `MODELE-CONTRAT-PRESTATION.md` art. 3 | Préavis **90 jours au-delà de 3 ETP** |
| Contrat de travail type (à créer) | Essai **6 mois écrit** + **clause d'affectation inter-clients** |
| `PRICING.md §3` | Mentionner la provision de sortie (~4 % du tarif ETP) parmi les coûts couverts par le volume ferme |
