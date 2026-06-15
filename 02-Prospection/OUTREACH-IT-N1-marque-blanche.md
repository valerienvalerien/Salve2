# Séquence Cold Outreach — Helpdesk IT N1 en marque blanche
**Niche :** ESN / MSP France (50-300 personnes) — partenariat sous-traitance  
**Outil d'envoi :** Emelia (mail-merge CSV)  
**Date :** 2026-05-31  
**Source de vérité tarifaire :** PRICING.md §3 (grille marque blanche **interne — jamais de chiffre dans les emails**, le prix se donne en cadrage)

---

## Positionnement

Salverys ne propose **pas** de remplacer l'équipe helpdesk de l'ESN cible.  
Salverys propose d'en être la **soupape** : l'overflow, les créneaux 7h-9h du matin, les pics saisonniers — tout ce que l'ESN ne veut pas internaliser au coût France.

> Angle central : "Vous scalez — on absorbe ce que vous ne voulez pas recruter."

---

## Persona cible

**Décideur à approcher :**
- Fondateur / DG (structures < 100 personnes) — décide seul
- Directeur des Opérations / COO (structures 100-300) — owns le delivery
- Directeur Delivery / Head of Service Desk (grandes structures)

**Ne pas approcher :**
- Direction commerciale (acheteur final, pas décideur opérationnel)
- RH (mauvais sponsor — voit Salverys comme concurrent au recrutement)
- DSI client final (hors périmètre — c'est le client de notre cible, pas nous)

---

## Canaux (mêmes règles que master playbook)

- Zéro lien cliquable dans les emails 1-3
- Zéro emoji, zéro gras dans le corps
- < 100 mots par email (E5 < 75)
- CTA = question simple, jamais Calendly en cold
- LinkedIn DM d'abord si profil accessible (avant d'envoyer E1)
- WhatsApp uniquement après première réponse

**Cadence :** J1 / J3 / J7 / J14 / J21

---

## Variables Emelia (CSV)

| Variable | Contenu | Source |
|----------|---------|--------|
| `{{firstName}}` | Prénom du décideur | LinkedIn / site société |
| `{{esn_nom}}` | Nom de l'ESN/MSP cible | CRM |
| `{{ville}}` | Ville du siège | CRM |
| `{{trigger_recrutement}}` | Signal d'achat identifié (voir §Recherche) | Recherche 2-3 min par prospect |
| `{{nb_postes}}` | Nombre de postes helpdesk ouverts (si trouvé) | LinkedIn Jobs / Indeed |
| `{{signature}}` | Bloc signature Salverys | Pré-défini |
| `{{whatsapp}}` | Numéro WhatsApp pro Salverys | **⚠️ obligatoire — bloquer l'envoi de l'E4 tant que non renseigné** |

> **`{{trigger_recrutement}}` est obligatoire.** Sans déclencheur identifié, ne pas envoyer E1 — l'email devient générique et sera ignoré.

---

## Recherche du déclencheur (2-3 min par prospect)

**Déclencheurs à chercher, par ordre de priorité :**

1. **Offre d'emploi helpdesk/support N1 active** (LinkedIn, Indeed, leur site) — Qualité : **Chaud**  
   *Angle :* « J'ai vu que {{esn_nom}} cherche {{nb_postes}} technicien(s) helpdesk en ce moment. »

2. **Article de croissance / nouveau contrat client** (ChannelNews, Distributique, leur blog) — Qualité : **Chaud**  
   *Angle :* « Avec votre nouveau contrat [client/secteur], votre capacité de delivery N1 va être sollicitée. »

3. **Offre 24/7 ou astreinte affichée sur le site** — Qualité : **Tiède**  
   *Angle :* « Votre offre 24/7 implique une couverture matinale difficile à tenir en interne à coût France. »

4. **Expansion géographique récente** (nouveau site, nouvelle région) — Qualité : **Tiède**  
   *Angle :* « En ouvrant {{ville}}, vous avez doublé votre périmètre de support sans doubler vos effectifs. »

---

## Séquence 5 emails

### Email 1 — L'accroche (Jour 1)

**Objet A :** {{firstName}}, {{nb_postes}} poste(s) helpdesk ouvert(s) chez {{esn_nom}}
**Objet B :** overflow helpdesk IT pour {{esn_nom}} — une option francophone

---

Bonjour {{firstName}},

{{trigger_recrutement}}

Chez Salverys (Antananarivo), on opère du helpdesk IT N1 en marque blanche pour des ESN françaises — francophone natif, process ITIL, vos scripts et vos outils. UTC+3 : on couvre le 7h-9h du matin avant que vos équipes arrivent.

Pour un recrutement en CDI France, il faut 60 à 90 jours. Pour un pilote avec nous : 3 semaines.

Ça vaudrait 15 minutes cette semaine ?

{{signature}}

---

**CTA :** soft, question  
**Touchpoint LinkedIn :** DM le même jour si profil identifié

---

### Email 2 — La valeur (Jour 3)

**Objet A :** le vrai coût d'un technicien helpdesk en interne
**Objet B :** CDI support N1 vs marque blanche — le calcul

---

Bonjour {{firstName}},

Repère rapide : un technicien helpdesk N1 en CDI France, en coût complet (salaire + charges + formation + turnover), tourne autour de 36 à 44 k€/an équivalent temps plein. Et le recrutement prend 2 à 3 mois sur un marché tendu.

Chez Salverys, un ETP N1 dédié en marque blanche revient à une fraction de ce coût complet — assez pour préserver votre marge de revente. Pas de charges, pas de turnover, pilote activable en 3 semaines. Chiffrage exact en 15 min selon volume et amplitude.

Pas de demande — juste un repère utile pour {{esn_nom}} si vous arbitrez capacité vs recrutement sur 2026.

{{signature}}

---

**CTA :** zéro (apport de valeur pur)

---

### Email 3 — La preuve concrète (Jour 7)

**Objet A :** comment on opère sous votre marque
**Objet B :** le 7h-9h du matin — qui répond chez {{esn_nom}} ?

---

Bonjour {{firstName}},

Concrètement : vos scripts, vos outils ITSM (ServiceNow, Jira SM, Freshservice — selon votre stack), vos SLA. Nos agents répondent sous l'identité {{esn_nom}}. Votre client final ne voit pas Salverys.

Le créneau qui casse le plus souvent : 7h-9h du matin, avant que vos équipes Paris arrivent. À UTC+3 (Madagascar), c'est 9h-11h pour nous — pleine heure de bureau, sans supplément nuit ni astreinte.

Les process ITIL, le reporting, les escalades — tout est documenté avant le premier ticket.

Vous pouvez tester notre réactivité directement sur salverys.fr

{{signature}}

---

**CTA :** soft, mention site sans lien

---

### Email 4 — Pivot + offre pilote (Jour 14)

**Objet A :** {{firstName}}, une proposition concrète pour {{esn_nom}}
**Objet B :** un mois pilote à −50 % — sans engagement
**Objet C :** on s'engage sur vos SLA, sinon on vous crédite

---

Bonjour {{firstName}},

Je reviens avec quelque chose de concret plutôt qu'une relance.

Proposition : un **mois pilote à −50 %, sans engagement**, sur un périmètre N1 défini ensemble (200 à 400 tickets), avec KPIs partagés dès J1 (FCR, CSAT, AHT). Et une fois en régime, on s'engage sur le SLA : non tenu sur un mois, 20 % d'avoir le mois suivant — et vous pouvez arrêter sans frais de sortie.

C'est la seule façon de vérifier si ça vaut l'intégration dans votre delivery — sans engager de budget significatif.

On peut en parler par WhatsApp si c'est plus simple : {{whatsapp}}

{{signature}}

---

**CTA :** WhatsApp en texte brut + proposition pilote

---

### Email 5 — Breakup doux (Jour 21)

**Objet A :** je ferme le dossier {{esn_nom}} ?
**Objet B :** dernier message, {{firstName}}

---

Bonjour {{firstName}},

Je ne vais pas insister davantage — si le timing n'est pas bon pour {{esn_nom}}, c'est ok.

Une question simple pour clore : le sujet "overflow helpdesk N1" est-il dans vos priorités 2026, ou hors scope pour l'instant ?

Votre réponse (même courte) m'aidera à savoir si je reste utile ou si je reviens dans 6 mois.

{{signature}}

---

**CTA :** question binaire sur le timing

---

## Objections préparées

**"On a déjà un prestataire helpdesk"**
> "C'est bien d'avoir un partenaire stable. La question n'est pas de le remplacer — c'est de savoir qui absorbe quand il est saturé : les pics de décembre, les pannes imprévues à 7h du matin, les congés d'été. C'est exactement le créneau qu'on couvre."

**"Nos clients n'accepteraient pas de l'offshore"**
> "C'est de la marque blanche totale : ils ne voient que votre marque. Nos agents sont francophones natifs, formés sur vos scripts, sans accent identifiable. Ce qu'on absorbe, c'est le N1 répétitif — exactement là où le risque qualité est le plus faible."

**"Vous êtes trop petits / pas assez de références"**
> "C'est pour ça qu'on propose un mois pilote à −50 %, sans engagement, sur un périmètre restreint. Vous n'avez pas besoin de nous croire sur parole — vous avez besoin de KPIs réels sur vos propres tickets. Et on adosse un avoir de 20 % si les SLA ne sont pas tenus en régime : on met notre argent sur le résultat. Notre direction a géré des équipes de 1 000+ personnes : les process qualité existent, même si l'équipe actuelle est plus petite."

**"On gère ça en interne, on n'externalise pas"**
> "Vous recrutez {{nb_postes}} postes helpdesk en ce moment — ce qui suggère que l'interne est sous tension. La question n'est pas 'externaliser ou pas', c'est 'comment scalez-vous la capacité N1 sans attendre 3 mois de recrutement par CDI ?'"

---

## Intégration CRM

Niche à utiliser dans `CRM_Salverys.html` : `helpdesk-it-esn`

Statuts de progression :
- `new` → lead identifié, pas encore contacté
- `contacté` → E1 envoyé
- `réponse` → réponse reçue (positive ou négative)
- `rdv` → appel découverte planifié
- `pilote` → mois pilote (−50 %) en cours
- `client` → contrat signé

---

*Séquence alignée avec PRICING.md §3 (tarif marque blanche : interne — **rate card
partenaire 1/3/5+ ETP remise au cadrage sous NDA**, jamais en cold email). Pilote
harmonisé 2026-06-12 : 1er mois à −50 %, 200-400 tickets, sans engagement.*  
*Format identique au master playbook OUTREACH-SEQUENCE.md*
