# PRICING.md — Grille tarifaire & modèle d'offre Salverys

> **Source unique de vérité prix.** Tout chiffre tarifaire dans les emails, le CRM,
> les simulateurs et le site doit être aligné sur ce fichier. En cas de divergence,
> **ce fichier fait foi.**
>
> Dernière révision : 2026-06-22 (**priorité niches revue : IT n°1, médical n°2, relation
> client de toutes sortes en futur non déterminé — labels §1/§3/§4 et récap §8**) ·
> précédente 2026-06-12 (rate card partenaire MB §3, télésec MB par créneau §1.b,
> add-ons amplitude + mise en service §1, pilote IT harmonisé) · précédente 2026-06-06
> (ajout §7 « engagement de décroché ») · base 2026-05-30
> Rapport de réflexion détaillé : `RAPPORT-PRIX.html`

---

## 0. Principes

- **Affichage des prix — règle à 3 paliers** (grille de décision détaillée en §9) :
  - **Médical standard** → **public**, grille ferme + simulateur (350/590/950).
  - **Support N1 & Helpdesk IT en direct** → **estimation publique sans prix ferme** : simulateur en
    **fourchette** + « devis sous 24 h » (capture lead). Pas de tarif ETP exact affiché.
  - **Toute marque blanche** (médical, support, helpdesk) → **jamais publique** : le prix de gros est
    l'input de marge du revendeur. Bailleurs → interne (§4).
- **Forfait, pas à l'appel** côté client (prévisibilité). Le « à l'appel » ne sert
  qu'en référence interne de coût.
- **-40 %** = claim public **conservateur et défendable** (cf. §5). L'économie réelle
  vs un ETP interne plein est supérieure, mais on annonce -40 % pour rester crédible.
- **Marque blanche systématique** : l'équipe répond sous le nom du client. Deux
  go-to-market chiffrés : **en direct** (client final) ou **en marque blanche** comme
  sous-traitant d'un acteur déjà établi (ESN, prestataire BPO) — qui prend une marge de
  **~25-35 %**, donc on capte moins par unité mais avec un coût d'acquisition ~nul.
- **Modèles de tarification retenus (par ordre de préférence)** : **1) ETP par position ·
  2) à l'heure · 3) à l'interaction**. (Le forfait médical public est un packaging d'ETP.)
- **SaaS-first** : aucun encaissement maison. Outil de facturation à trancher (§6).

---

## 1. Médical — télésecrétariat (priorité 2) — **GRILLE PUBLIQUE**

Facturation au **forfait mensuel** selon le volume d'appels. Dépassement = bascule
au palier supérieur, **jamais de surfacturation à l'appel**.

| Forfait | Volume inclus | Prix mensuel |
|---|---|---|
| **Essentiel** | jusqu'à ~250 appels/mois | **350 €** |
| **Confort** | jusqu'à ~500 appels/mois | **590 €** |
| **Intensif** | jusqu'à ~900 appels/mois | **950 €** |
| **Sur-mesure** | > 900 appels/mois | sur devis |

- Couverture **8h-20h**, 5j/7 minimum (soir/week-end en option sur-mesure).
- Intégration **Doctolib / Maiia / Médistory / Cegedim**.
- **Prix fermes** (alignés marché FR 2025 : forfaits 300-900 €/mois temps plein — cf.
  §5). On retire la mention « indicatifs à valider ».
- **Offre de lancement** : voir §7 (1er mois à -50 %).
- **Recadrage ROI (à utiliser partout)** : 350 €/mois ≈ **16 €/jour ouvré** — moins d'une
  demi-consultation par jour ; **2 à 3 RDV récupérés** sur des appels manqués paient le
  forfait. C'est le recadrage anti-objection prix le moins cher qui existe.

### 1.a Options d'amplitude — add-ons nommés (décidé 2026-06-12)

L'amplitude étendue n'est plus diluée dans le « sur-mesure » : elle devient des **options
nommées et pricées**, cumulables avec n'importe quel forfait. Trois effets : panier moyen
en hausse, grille d'entrée intacte (le 350 € ne bouge pas), et un « give » de négociation
offrable sans toucher au prix du forfait.

| Option | Couverture ajoutée | Prix |
|---|---|---|
| **Samedi matin** | 8h-13h le samedi | **+90 €/mois** |
| **Soirée étendue** | 20h-22h en semaine | +120 €/mois |
| **Samedi complet** | 8h-18h le samedi | +150 €/mois |

- Créneaux mutualisés entre comptes → coût marginal faible, marge préservée.
- **Levier de closing** : « extension samedi matin offerte 3 mois » coûte ~270 € et peut
  débloquer une signature — toujours préférer **offrir une option** plutôt que remiser le
  forfait (le prix de référence reste intact).

### 1.b Médical — marque blanche télésec FR (revente) — **INTERNE, jamais public**

> Prix de gros pour les télésecrétariats français qui sous-traitent leur débordement
> (cible GTM n°1). Tarification **à l'appel traité, par créneau** (décidé 2026-06-12) :
> on vend précisément les créneaux que le partenaire ne peut pas rentabiliser en France —
> c'est là que sa douleur est maximale et notre prix peut monter. Un tarif à plat
> laisserait de la valeur sur la table.

| Créneau | Prix de gros / appel traité |
|---|---|
| Jour semaine (8h-20h) — débordement & pics | **0,90 - 1,10 €** |
| Soir (20h-22h) & samedi | **1,20 - 1,40 €** |
| Capacité réservée sur pics annoncés (rentrée, épidémies) | base créneau **+15-20 %** (engagement de volume) |

- Remplace l'ancienne référence à plat « 0,90-1,40 € » (`FINANCE-PREVISIONNEL.md §3`) :
  mêmes bornes, mais le haut de fourchette est **structuré** (créneaux pénibles) au lieu
  d'être négocié.
- **Plancher inchangé** : jamais sous coût chargé agent + ~20 %.
- Jamais de chiffre en cold email ; grille remise **au cadrage** uniquement.

### 1.c Mise en service — affichée, puis offerte (décidé 2026-06-12)

L'onboarding (2-3 semaines : intégration Doctolib/Maiia, formation aux consignes du
cabinet, paramétrage) était invisible et gratuit. Désormais **affiché à sa valeur sur
chaque devis** :

> **Mise en service : 490 € — offerte.**

- Matérialise la value stack (le client voit ce qu'il ne paie pas).
- Justifie le refus de l'essai gratuit (un onboarding a un coût réel).
- Crée un « give » de closing à coût nul.
- **Toujours offerte** (la facturer contredirait le « sans engagement ») : c'est un
  affichage de valeur, pas une ligne de revenu. Vaut aussi pour Support N1 / Helpdesk
  (afficher « cadrage & mise en place : offerts » sur les propositions).

---

## 2. Médical — pas de palier d'entrée bas (décision)

Un forfait « Starter » < 350 € a été écarté pour l'instant : marge trop fine vs coût
de setup, et risque de tirer le positionnement vers le bas. Les très petits cabinets
sont adressés par l'offre de lancement (-50 % le 1er mois) plutôt qu'un prix plancher.

---

## 3. Support N1 SaaS & Helpdesk IT (priorité 1) — **INTERNE**

> Ne pas publier. Deux GTM : **en direct** (client final) ou **en marque blanche**
> (sous-traitant d'un acteur établi). Modèle **ETP dédié** en marque blanche.

**Modèles de tarification retenus (par ordre de préférence)**
1. **ETP par position** (seat dédié) — modèle principal.
2. **À l'heure** — périmètres variables / débordement.
3. **À l'interaction** (par ticket) — volumes mesurables.

**Tarif ETP par position (référence interne, €/mois/ETP)**

| Segment | En direct | En marque blanche (sous-traitant)* |
|---|---|---|
| Support N1 SaaS | 1 900 - 2 400 € | 1 350 - 1 700 € |
| Helpdesk IT N1 (ITIL) | 2 200 - 2 800 € | 1 550 - 2 000 € |

\* Le donneur d'ordre établi prend ~25-35 % de marge : on capte moins par ETP, mais le
coût d'acquisition est ~nul et le volume est apporté. **Plancher absolu** : jamais sous
le coût chargé agent + ~20 % (cf. §7).

**Rate card partenaire MB — dégressif par engagement (décidé 2026-06-12)**

Remplace le « prix donné en cadrage » au cas par cas : un donneur d'ordre qui revend a
besoin de **visibilité** pour construire sa propre marge — le flou rallonge le cycle de
closing. Grille **confidentielle** (PDF remis au cadrage, sous NDA — jamais en email),
où le dégressif **achète du volume** au lieu d'être concédé en négociation :

| Engagement | Support N1 SaaS MB (€/mois/ETP) | Helpdesk IT N1 MB (€/mois/ETP) |
|---|---|---|
| 1 ETP | 1 700 € | 2 000 € |
| 3 ETP | 1 500 € | 1 750 € |
| 5+ ETP | 1 350 € | 1 550 € |

- Bornes identiques à la fourchette historique ci-dessus — on **structure** la fourchette,
  on ne baisse rien. Plancher inchangé (coût + ~20 % ≈ 540 €).
- Aligné sur le point mort (`FINANCE-PREVISIONNEL.md §4` : ~5 ETP placés) : le palier 5+
  est conçu pour qu'un seul donneur d'ordre type Metaline/Thelem puisse l'atteindre.
- **Canal de remise** : espaces partenaires protégés du site, **un par niche avec son
  propre mot de passe** (`espace-client-support.html` / `espace-client-helpdesk.html` /
  `espace-client-medical.html` pour la grille télésec §1.b — pages chiffrées, mot de
  passe donné au cadrage) ou impression « PDF de cadrage » depuis la page — procédure
  dans `ESPACE-CLIENT-CANDIDAT.md`.

- **À l'heure** : ~12-15 €/h (direct) · ~8-11 €/h (marque blanche).
- **À l'interaction** : ~2,5-4 €/ticket N1 (direct) · ~1,8-2,8 € (marque blanche).
- **Benchmark interne (coût à battre côté client)** : un CDI FR chargé = ~38-46 k€/an,
  soit **~3 200-3 800 €/mois** (cf. §5). Notre ETP **direct** vise **-40 % minimum**.
- **Durée de contrat (révisée)** : engagement initial **3 mois**, puis **12 mois
  renouvelable** ; 24-36 mois réservés aux grands comptes avec dégressif.
  ⚠️ La copy dit « contrats 12 à 36 mois » → reformuler en « dès 3 mois, puis 12 mois ».
- **Pilote (harmonisé 2026-06-12)** : **1er mois à −50 %**, périmètre N1 cadré
  (**200-400 tickets**), sans engagement — même mécanique que le médical (§7). Les
  anciennes formules « pilote 15 j (~80 tickets) » et « pilote 60 jours » sont
  **abandonnées partout** (copy alignée, cf. `OUTREACH-IT-N1-marque-blanche.md`).

### Tier « Priority » (ex-« Premium ITIL+ ») — service critique

Le niveau de service haut de gamme des simulateurs Support N1 / Helpdesk IT est
renommé **Priority** (remplace « Premium »/« Premium ITIL+ »). Ce n'est plus
« un dédié en mieux » mais un **service critique** : capacité **réservée non
mutualisée**, **traitement prioritaire systématique**, **redondance intégrée
(backup permanent)**, **supervision renforcée**, **tolérance zéro rupture**.

- **Tarification — multiplicateur dégressif** (le backup réservé s'amortit avec la taille) :

  ```
  priorityMult(n) = 1,10 + 0,90 / n      (n = nombre d'agents)
  ```
  | n | 1 | 2 | 3 | 4 | 6 | 10 |
  |---|---|---|---|---|---|----|
  | ×base | 2,00 | 1,55 | 1,40 | 1,33 | 1,25 | 1,19 |

  Un agent **seul** porte un backup quasi complet (~×2, zéro rupture même en solo) ;
  à 6+ agents le surcoût retombe vers ~×1,2 (≈ ancien plat ×1,25, d'où la continuité).
  Plancher **1,10** = priorité de traitement + supervision renforcée, jamais nul.

- **Équivalence résilience** (argument d'appel) : pour garantir `g` agents productifs
  **sans rupture**, le **Dédié** doit sur-staffer ≈ **1 backup pour 3** (`g + ⌈g/3⌉`
  têtes payées plein pot), alors que **Priority** inclut le backup. À garantie égale,
  **`g` Priority ≡ `g + ⌈g/3⌉` Dédiés** (ex. 2 Priority ≡ 3 Dédiés, 6 Priority ≡ 8 Dédiés).
  Sur le **coût**, Priority bascule **moins cher à partir de ~4 agents garantis** ;
  en dessous, l'avantage est ailleurs : backup **géré par nous** (zéro planning) et
  surtout **faisabilité** — à 1-2 agents, se sur-assurer en dédié revient à embaucher
  un backup à temps plein (×2), impossible à demi-doser.
- Source d'implémentation : `priorityMult()` dans `assets/site.js` ; arguments
  d'appel détaillés dans `ARGUMENTS-APPEL-priority.md`.

---

## 4. Bailleurs sociaux & grandes structures — relation client de toutes sortes (futur non déterminé) — **INTERNE**

> ⚠️ **Niche repoussée à un futur non déterminé (décision 2026-06-22)** : élargie à la
> « relation client de toutes sortes », elle n'est plus une priorité de prospection active.
> Grille conservée comme référence de chiffrage pour le jour où on l'activera.
> Ne pas publier. Positionnement = **capacité d'appoint** (débordement du CRC), pas
> remplacement. Toujours présenté en sur-devis. Deux GTM : direct ou marque blanche.

**Modèles de tarification retenus (même ordre de préférence)**
1. **ETP par position** (mutualisé sur les pics).
2. **À l'heure**.
3. **À l'interaction** (par appel traité).

**Références internes de chiffrage**

| Modèle | En direct | En marque blanche (sous-traitant)* |
|---|---|---|
| ETP / capacité réservée (€/mois) | 1 800 - 3 500 € | 1 300 - 2 500 € |
| À l'appel traité | 1,20 - 1,80 € | 0,90 - 1,40 € |

\* Marge donneur d'ordre ~25-35 %. **Plancher** : coût chargé agent + ~20 %.

- **Pilote** : sur **1 pic prévisible** (rentrée, hiver, période de charges), facturé
  au forfait selon l'enveloppe — **pas de pilote gratuit** (volumes trop lourds pour
  10 agents).
- **KPI engagés** : taux de décroché, taux d'abandon, délai moyen, NPS.

---

## 5. Benchmarks RH France (révisés & sourcés) — argumentaire coût

> Chiffres **révisés à la baisse** vs l'ancienne copy, pour rester **défendables**.
> Méthode : brut moyen marché × charges patronales (~+42 %) + poste de travail +
> formation + coût de turnover/recrutement amortis.

| Poste | Ancienne copy | **Nouveau repère** | Base de calcul |
|---|---|---|---|
| Secrétaire médicale (interne) | 35-45 k€/an | **33 à 40 k€/an** | ~1 925 €/brut/mois ⇒ ~32,8 k€ coût employeur + poste/formation/turnover |
| Téléconseiller CDI (CRC) | 48-55 k€/an | **38 à 46 k€/an** | ~21 900 €/brut/an ⇒ ~31 k€ coût employeur + encadrement + turnover ~25 %/an |

- Délai de recrutement conservé : **60 à 90 jours**.
- Turnover CRC conservé : **~25 %/an**.
- **Sources marché 2025** (à citer dans le rapport) : forfaits télésecrétariat FR
  300-900 €/mois ; salaires Indeed/Talent.com/HelloWork ; modèles BPO (per-seat/FTE,
  per-minute, per-ticket).

**Calcul du -40 % (défendable)** : un forfait Confort (590 €/mois ≈ 7,1 k€/an) face à
une secrétaire interne (~33-40 k€/an) représente une économie bien supérieure à 40 %.
On annonce **-40 %** parce que le client compare souvent à un **mi-temps** ou à un
**appoint**, pas à un ETP plein — c'est le scénario où -40 % est exact et incontestable.

---

## 6. Facturation / encaissement (SaaS-first) — **décision reportée**

Comparatif documenté dans `RAPPORT-PRIX.html`. Aucun outil figé à ce stade.

| Critère | Stripe Billing + SEPA | GoCardless | Pennylane |
|---|---|---|---|
| Abonnement récurrent | ✅ natif | ✅ natif | ⚠️ via module |
| Prélèvement SEPA B2B FR | ✅ | ✅ (spécialiste) | ✅ |
| CB / self-service | ✅ fort | ⚠️ limité | ⚠️ |
| Compta/facturation FR | ⚠️ à coupler | ❌ | ✅ intégré (expert-comptable) |
| Mise en route | rapide | rapide | moyenne |

Critère de choix : si priorité **encaissement récurrent automatisé** → Stripe ou
GoCardless ; si priorité **facturation + compta FR intégrée** → Pennylane + un PSP.

---

## 7. Offre de lancement — **1er mois à -50 %** (remplace l'essai gratuit)

**Décision : remplacer « essai 15 jours gratuit » par « 1er mois à -50 % ».**
Repli si friction commerciale trop forte en cold : « 7 jours offerts, périmètre limité »
(lève au passage l'incohérence 15j/7j).

**Pourquoi -50 % plutôt qu'un essai gratuit :**
1. **Couvre le mois d'acquisition** : le demi-tarif éponge en grande partie le coût de
   service + l'onboarding du premier mois, là où l'essai gratuit les laisse entièrement
   à perte.
2. **Protège la capacité rare** (agents + bande passante d'onboarding) — contrainte
   n°1 à 10 agents.
3. Garde un message **« sans risque »** fort (demi-tarif, sans engagement, résiliable).
4. **Filtre les non-sérieux** (engagement de paiement = signal d'intention) ⇒ meilleur
   taux de conversion qu'un essai 100 % gratuit.

### Engagement de décroché (réassurance en régime, décidée 2026-06-06)

Le mois pilote -50 % couvre la réassurance **« essayer sans risque »**. Une **seconde**
réassurance s'applique **une fois le service en régime** (intégration stabilisée), **sans
remboursement cash** :

- **Engagement** : viser **≥ 90 % d'appels patients décrochés** sur les plages couvertes
  (8h-20h), dans la limite du volume du forfait souscrit.
- **Remède si le seuil n'est pas atteint sur un mois civil** : **avoir de 20 %** sur la
  facture du mois suivant, **automatique** (le client n'a pas à le réclamer), **dans la
  limite d'un mois sur douze** (plafond annuel — protège la marge si creux saisonnier
  prolongé). **Pas de remboursement en cash** — un avoir protège la trésorerie et
  favorise la rétention.
- **Conditions de défense** (anti-abus / risque non maîtrisé) : mesuré sur les **appels
  présentés** pendant les plages couvertes ; **hors débordement** au-delà du forfait
  (un dépassement = bascule palier, pas une pénalité) ; **hors indisponibilités côté
  client** (ligne, logiciel, coupure). Périmètre et seuil **figés au cadrage**.
- **Pourquoi pas pendant le mois pilote** : durant l'onboarding (paramétrage, formation),
  le décroché n'est pas encore stabilisé — l'engagement ne court qu'à partir du **1er mois
  plein en régime**. Le pilote reste couvert par le « sans engagement ».
- **Seuil retenu : 90 %** (standard marché FR BPO médical, atteignable dès le mois 2 ;
  95 % écarté — trop ambitieux en phase de démarrage). Plafond du remède gelé à
  **20 % d'avoir, max 1 mois/12** quelle que soit l'ampleur du manqué.
- **Déclinaison par niche (même mécanique, KPI adapté, 20 % d'avoir, mêmes conditions)** :
  Support N1 SaaS → **SLA de première réponse** ; Helpdesk IT N1 → **SLA de prise en
  charge** ; Bailleurs (débordement) → **taux de décroché** sur le périmètre convenu ;
  télésec marque blanche → **taux de décroché**. Le seuil exact se fige au cadrage.

### Clients fondateurs — 5 premiers logos, tarif dégressif 3 mois (décidé 2026-06-08)

Mécanique d'amorçage inspirée du « give it away to get your first customers »
(Hormozi), **adaptée à un service à coût marginal réel** (agents payés) et à un
**contexte médical** où le gratuit peut signaler un manque de sérieux. On ne donne pas
gratuitement : on consent un **tarif de lancement renforcé contre des contreparties**.

- **Cible** : les **5 premiers cabinets** (badge « clients fondateurs »). S'applique aussi
  par niche (support N1, helpdesk) avec le KPI adapté.
- **Tarif dégressif sur 3 mois** (réf. Essentiel 350 €) :

  | Mois | Remise | Prix payé |
  |---|---|---|
  | 1 | −50 % | 175 € |
  | 2 | −30 % | 245 € |
  | 3 | −15 % | 297,50 € |
  | 4+ | plein tarif | 350 € |

  Dégressif **préféré au −50 % sec** : la montée en prix par paliers doux évite le saut
  175 €→350 € qui déclenche des résiliations ; au mois 4 le client est déjà habitué à ~297 €.
- **Coût d'acquisition** : ~**332 € de remise cumulée / fondateur** sur 3 mois, soit
  **~1 660 € pour 5 logos** + 5 témoignages + des référrals. CAC dérisoire pour amorcer
  la preuve sociale.
- **Engagement réciproque 3 mois** (≠ le « sans engagement » du mass-market, **inchangé**) :
  c'est un échange explicite, opt-in, avec contreparties — pas un lock-in caché.
- **Contreparties client** : **témoignage à 60 j** + **1 mise en relation** si satisfait.
- **Garantie décroché ≥ 90 %** incluse (équilibre l'engagement : donnant-donnant).
- **Bascule auto** en forfait standard **sans engagement** après les 3 mois.
- **Langage client** : « forfait » / « contrat de service », **jamais « abonnement »**
  (connotation télécom/grand public, dévalorise en médical). Le modèle reste de fait
  récurrent mensuel — on le pense « abonnement » en interne, on le dit « forfait » dehors.

**Garde-fou** : si le taux réponse→souscription en cold s'effondre vs l'essai gratuit,
basculer sur le repli « 7 jours offerts, périmètre limité ».

---

## 8. Récapitulatif des changements à propager

| Élément | Avant | Après |
|---|---|---|
| Essai | « 15 jours gratuit » / « 7 jours » (incohérent) | **« 1er mois à -50 % »** (repli : 7j offerts cadrés) |
| Amorçage | — | **Deal « clients fondateurs »** : 5 logos, dégressif −50/−30/−15 % sur 3 mois, engagement réciproque + témoignage 60 j + référral |
| Secrétaire médicale (benchmark) | 35-45 k€/an | **33-40 k€/an** |
| Téléconseiller CDI (benchmark) | 48-55 k€/an | **38-46 k€/an** |
| Grille médical | « indicatifs à valider » | **prix fermes** (350/590/950 + sur-devis) |
| Contrats helpdesk | « 12 à 36 mois » | **« dès 3 mois, puis 12 mois renouvelable »** |
| Grilles bailleurs / SaaS-helpdesk | éparses en email | **centralisées ici (interne)** |
| Priorités niches (→2026-06-12) | Bailleurs n°2, SaaS/Helpdesk n°3 | SaaS/Helpdesk n°2, Bailleurs n°3 |
| Priorités niches (2026-06-22) | médical n°1 · SaaS/Helpdesk n°2 · Bailleurs n°3 | **IT (Support N1 + Helpdesk) n°1 · médical n°2 · relation client de toutes sortes (futur non déterminé) n°3** |
| Modèles de tarification | implicites | **ETP/position > à l'heure > à l'interaction** |
| Go-to-market | direct uniquement | **direct + marque blanche (sous-traitance)** |
| Affichage public | « hybride » (médical public, reste interne) | **3 paliers (§9)** : médical public ferme · support/helpdesk **direct = estimation** · **toute MB jamais publique** |
| Simulateurs IT (helpdesk/informatique) | prix **ETP marque blanche** affiché publiquement (fuite de marge) | **estimation directe (fourchette)** + « devis sous 24 h », chiffres MB retirés |
| Pilote Support/Helpdesk (2026-06-12) | « 15 j (~80 tickets) » / « 60 jours » (incohérent) | **1er mois à −50 %, 200-400 tickets, sans engagement** |
| Prix MB Support/Helpdesk (2026-06-12) | fourchette donnée « en cadrage » au cas par cas | **rate card partenaire 1/3/5+ ETP** (confidentielle, NDA, §3) |
| Télésec MB à l'appel (2026-06-12) | tarif à plat 0,90-1,40 € | **par créneau** : jour 0,90-1,10 € · soir/samedi 1,20-1,40 € · pics réservés +15-20 % (§1.b) |
| Amplitude médical (2026-06-12) | diluée dans « sur-mesure » | **add-ons nommés** : samedi matin +90 € · soirée +120 € · samedi complet +150 € (§1.a) |
| Onboarding (2026-06-12) | invisible, gratuit | **« Mise en service : 490 € — offerte »** sur chaque devis (§1.c) |

---

## 9. Affichage public des prix — grille de décision (synthèse)

Système de points (8 critères pondérés, max 50). Détail et interprétation dans `RAPPORT-PRIX.html §9`.

| Segment | Score /50 | % | Décision |
|---|---|---|---|
| Médical — standard | 45,5 | 91 % | **Afficher** (grille ferme + simulateur) |
| Support N1 — standard (direct) | 31 | 62 % | **Estimation** sans prix ferme + capture lead |
| Helpdesk IT — standard (direct) | 29,5 | 59 % | **Estimation** sans prix ferme + capture lead |
| Médical — marque blanche | 22,5 | 45 % | **Jamais public** |
| Support N1 — marque blanche | 17,5 | 35 % | **Jamais public** |
| Helpdesk IT — marque blanche | 17,5 | 35 % | **Jamais public** |

**3 paliers** : ≥70 % = grille ferme publique · 50-69 % = estimation (fourchette) sans prix ferme +
« devis sous 24 h » · <50 % = jamais public. **Ligne de fracture = 2 axes** : direct vs marque blanche
(toute MB privée, conflit de marge) ET produit packagé vs ETP sur-mesure.

---

## 10. Modèle d'exécution & infra (freelance / BYOD, SaaS-first)

> Réflexe : **SaaS-first**, aucune infra télécom maison. Le modèle **freelances + équipes dédiées** est
> viable sous conditions. Détail (tableaux par domaine) dans `RAPPORT-PRIX.html §10`.

- **Infra transversale** : VoIP cloud (Aircall/Ringover/3CX, pas de standard physique) ; **double connexion
  par agent (fibre + 4G) + hub de repli avec onduleur/groupe électrogène** (point dur Tana) ; gouvernance d'accès (comptes nommés, MFA,
  **zéro download**) ; RGPD art. 28 (DPA, registre) ; WFM/Erlang ; QA/double écoute ; **backfill +1
  agent/compte** ; documentation écrite dès le client n°1.
- **BYOD freelance & santé** : viable façon **SECRETEL** — l'agent consulte des **SaaS HDS dans un
  navigateur** (Doctolib Pro → Ubicentrex) ; les données restent chez l'hébergeur HDS, jamais sur le
  poste ; Salverys est **sous-traitant (art. 28)**, pas hébergeur. Le VDI strict ne devient nécessaire que
  pour un **logiciel lourd installé** (ex. Médistory local).
- **Enregistrement des appels** : **disponible sur demande, zéro par défaut ; non facturé en add-on.**
  Hébergement HDS **selon la stack client** — HDS du donneur d'ordre en **marque blanche** (coût ~0) ;
  en **direct**, hébergeur HDS dédié (OVHcloud/Scaleway), **coût d'hébergement absorbé dans le forfait**
  (ordre de grandeur interne ~100-500 €/mois, **à absorber, pas un prix client**). Cadre conformité :
  `CONFORMITE-HDS-RGPD.md §2`.
- **Angle mort** : disponibilité garantie ≠ freelance pur → cadrer juridiquement + backfill.
