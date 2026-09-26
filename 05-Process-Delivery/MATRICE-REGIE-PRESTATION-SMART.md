# MATRICE-REGIE-PRESTATION-SMART.md — Régie, zone grise, prestation : les 3 formulations

> Process **interne**. Sert à rédiger les engagements (devis, annexe de cadrage, art. 6 du
> `MODELE-CONTRAT-PRESTATION.md`) de façon à ce qu'ils **prouvent la prestation de services**
> au lieu de décrire une mise à disposition de personnel.
> Complète `GOUVERNANCE-CHAINE-COMMANDEMENT.md` (qui encadre qui) et l'**art. 8 bis** du
> contrat (la clause). Ici : **comment on écrit les objectifs**.
>
> ⚠️ Support opérationnel, **pas un avis juridique**. Cadre visé : prêt de main-d'œuvre à but
> lucratif (art. L.8241-1 C. trav. FR) et marchandage (L.8231-1). Validation conseil FR + MG
> avant le premier contrat cadre.
>
> Modèle d'équipe **100 % salarié** (CDI, `CLAUDE.md` 2026-08-14) : le risque de
> requalification *freelance → salarié* a disparu. Le risque restant est **vis-à-vis du
> client** : que le contrat se lise comme de la fourniture de personnel.

---

## 1. La règle de lecture, en une ligne

> **Ce n'est pas le nombre de têtes qui fait la prestation, c'est le SUJET de l'engagement.**
> Si l'objectif porte sur *une personne* → régie. S'il porte sur *un flux de travail* →
> prestation. Tout le reste (moyens, autorité, remède) découle de là.

| Marqueur | 🟠 Régie / mise à disposition | 🟠🟡 Zone intermédiaire | 🟢 Prestation / BPO |
|---|---|---|---|
| **Sujet de l'objectif** | la personne (« l'agent », un prénom) | la position dédiée | **le service** (le flux de tickets/appels) |
| **Unité de mesure** | productivité individuelle (tickets/j, temps de présence) | KPI de service, mais lus tête par tête | **KPI de service agrégés** sur le volume présenté |
| **Charge du jour** | priorisée par le client, à l'agent | priorisée par le client, via le référent | **priorités = périmètre figé au cadrage**, arbitrage intra-jour Salverys |
| **Choix des têtes** | CV nominatifs, entretien de sélection | CV anonymisés mais « son » agent identifié | **Salverys seule** (art. 8 bis), profils anonymisés |
| **Moyens** (poste, licences, outillage, formation) | souvent client | mixte | **Salverys** (sauf outils métier du client, listés au cadrage) |
| **Absence** | trou dans le service, ou remplaçant facturé | remplaçant à négocier | **couverte, incluse dans le prix** (`PRICING.md §3.e`) |
| **Facturation** | **temps passé**, timesheet visée par le client | forfait ETP/position | **forfait par position/périmètre**, adossé à un SLA |
| **Remède si raté** | aucun (c'est le temps qui est vendu) | discussion commerciale | **avoir 20 % automatique**, plafonné 1 mois/12 (`PRICING.md §7`) |
| **Encadrement qualité** | client (ou personne) | double : client + Salverys | **Salverys** — grille QA, double écoute, plan d'action, restitué en reporting |
| **Preuve en cas de contrôle** | un planning et des heures | un planning et un KPI | **un périmètre, un SLA, un remède, un reporting signé** |

---

## 2. 🟠 Régie — formulations à ne jamais signer

Ce sont des objectifs **SMART parfaitement valides** : le problème n'est pas leur qualité,
c'est qu'ils décrivent le travail d'une personne, pas un service.

| Niche | Objectif SMART tel qu'un client le propose | S — porte sur | M — mesure | A/R — pourquoi c'est tenable… et disqualifiant | T |
|---|---|---|---|---|---|
| Télésec MB | « **Mirana** traite **≥ 45 appels/jour** sur son poste, du lundi au vendredi 8h-18h, planning validé par le cabinet le vendredi pour la semaine suivante » | une personne nommée | compteur individuel d'appels + **pointage** | tenable, mais le client fixe l'horaire et la charge d'un agent → subordination directe | hebdo |
| Support N1 SaaS | « Chaque technicien affecté clôture **≥ 32 tickets/jour** avec **≤ 5 % de réouvertures**, revue individuelle mensuelle avec notre Head of Support » | chaque tête | productivité par tête + **entretien individuel client** | la revue individuelle est un acte d'évaluation = pouvoir disciplinaire de fait | mensuel |
| Helpdesk IT N1 | « Les **3 techniciens** sont connectés à notre ITSM **9h-18h**, congés soumis à validation de notre delivery manager, facturation au **temps passé** (timesheet visée) » | des postes de travail | heures de connexion | 3 marqueurs cumulés : horaires, validation des congés, facturation au temps | mensuel |

**Pourquoi 🟠** : on vend des **heures d'une personne identifiée**, sous les ordres du client.
Aucun résultat n'est engagé — donc aucun remède n'existe, donc il n'y a rien à exécuter
contre Salverys : c'est la signature économique de la mise à disposition.

---

## 3. 🟠🟡 Zone intermédiaire — ressource dédiée + SLA de service

C'est la forme **naturelle du modèle « ETP par position »** (`PRICING.md §3`, modèle de
tarification n°1). Elle n'est pas illégitime — c'est ce qu'on vend — mais elle est
**instable** : elle bascule 🟢 ou 🟠 selon 4 détails de rédaction (§6).

| Niche | Objectif SMART tel qu'on l'écrit aujourd'hui | S — porte sur | M — mesure | A/R — ce qui la rend fragile | T |
|---|---|---|---|---|---|
| Télésec MB | « La **position dédiée** au cabinet assure **≥ 90 % des appels présentés décrochés** sur 8h-20h » | une position (≈ une tête) | taux de décroché du compte | KPI de service ✅ — mais mesuré sur une seule tête, le client voit *qui* rate | mois civil |
| Support N1 SaaS | « L'**ETP dédié** délivre une **première réponse < 30 min ouvrées sur ≥ 90 %** des tickets P2/P3 du périmètre » | un ETP | FRT agrégée sur le compte | ✅ si le backlog est arbitré par Salverys ; 🟠 si le client repriorise la file dans la journée | mois civil |
| Helpdesk IT N1 | « La position dédiée **prend en charge ≥ 90 %** des incidents dans le délai cible (P1 : 15 min · P2 : 1 h) sur 9h-18h » | une position | taux de prise en charge dans le délai | ✅ sur le papier ; bascule 🟠 dès que le client valide les plannings ou nomme l'agent | mois civil |

**Pourquoi 🟠🟡** : le **résultat** est engagé (bon signe), mais il repose sur **une seule
tête connue du client**. Dans les faits, le client raisonne « mon agent », pas « mon
service » — et un contrôle lira l'exécution, pas la clause.

---

## 4. 🟢 Prestation / BPO — la formulation cible

Trois changements, toujours les mêmes : **le sujet devient le flux**, **le dimensionnement
devient un moyen (donc secret)**, **le manqué a un prix**.

| Niche | Objectif SMART opposable | S — porte sur | M — mesure | A/R — ce qui le rend tenable | T |
|---|---|---|---|---|---|
| Télésec MB | « Sur le périmètre de l'Annexe A (appels patients des cabinets confiés, 8h-20h), **≥ 90 % des appels présentés sont décrochés** par mois civil, dans la limite du volume du forfait. **Manqué ⇒ avoir de 20 %** sur la facture suivante, automatique, max 1 mois/12. Salverys détermine seule l'effectif affecté et couvre les absences » | le flux d'appels du périmètre | appels présentés / décrochés, **hors** indispo client et hors dépassement de forfait | l'effectif est un **moyen** : Salverys peut mettre 1 ou 3 têtes, le seuil ne bouge pas | à compter du **1er mois plein en régime** ; mesure publiée mais non opposable pendant la transition |
| Support N1 SaaS | « **≥ 90 % des tickets N1 du périmètre** reçoivent une première réponse **< 30 min ouvrées**, sur les plages 8h-20h. **Manqué ⇒ avoir de 20 %** (mêmes conditions). Taux de résolution N1, réouvertures et délai de résolution de bout en bout sont **reportés chaque semaine, non engagés**. Grille QA et double écoute pilotées par Salverys, restituées au reporting mensuel » | la file de tickets N1 | FRT agrégé ; résolution N1 **avec ses contre-indicateurs** (`INDICATEURS-APPARIES.md`) | Salverys arbitre la file selon les règles de priorisation **figées au cadrage**, pas selon les demandes du jour | mensuel, à compter du 1er mois plein |
| Helpdesk IT N1 | « **≥ 90 % des incidents** du périmètre ITIL défini en Annexe B sont **pris en charge dans le délai cible** (P1 : 15 min · P2 : 1 h · P3 : 4 h ouvrées) sur la plage 6h-20h en présence continue. Salverys fournit postes, supervision et plan de continuité ; l'affectation, le planning et la discipline relèvent de Salverys seule. **Manqué ⇒ avoir de 20 %** (mêmes conditions) » | le flux d'incidents | taux de prise en charge par priorité | la plage 6h-20h se tient à **~2 ETP/position** — c'est notre problème de dimensionnement, pas une ligne du contrat | mensuel, à compter du 1er mois plein |

**Pourquoi 🟢** : le client achète un **niveau de service sur un périmètre**, avec un
**remède chiffré**. Le nombre de têtes, leurs noms et leurs plannings deviennent des
**moyens internes** — ce qui est exactement la définition de la prestation.

---

## 5. Le même besoin, écrit aux trois niveaux (test de différenciation)

À faire passer à tout engagement avant signature : réécrire la ligne du client en colonne 3.

| Intention du client | 🟠 Ce qu'il écrit | 🟢 Ce qu'on signe |
|---|---|---|
| « Je veux que ce soit toujours la même personne » | « L'agent **Mirana** est affecté à temps plein à notre compte » | « **Une position dédiée** est affectée au périmètre ; la continuité de la connaissance métier est assurée par Salverys (agent référent + doublure formée, sans surcoût) » |
| « Je veux du rendement » | « **≥ 45 appels/agent/jour** » | « **≥ 90 % des appels présentés décrochés** sur les plages couvertes » |
| « Je veux pouvoir corriger un agent » | « Nous faisons un **point individuel mensuel** avec chaque technicien » | « **Session de calibrage conjointe mensuelle**, conduite **en présence du référent d'exploitation** ; les plans d'action individuels relèvent de Salverys » |
| « Je veux savoir qu'ils travaillent » | « **Pointage** et connexion à notre ITSM 9h-18h » | « **Reporting mensuel** : volumes, SLA, taux de résolution N1, top motifs, plan d'action QA » |
| « Je veux choisir qui travaille pour moi » | « Validation des **CV nominatifs** avant affectation » | « **Profils anonymisés** communiqués pour information (art. 10 bis) ; Salverys détermine l'affectation sous réserve de ses engagements de service » |
| « Je veux pouvoir virer quelqu'un » | « Nous pouvons demander le **retrait immédiat** d'un intervenant » | « Le Client signale tout écart au référent ; **Salverys décide des mesures** et reste tenue au SLA » |
| « Je veux payer ce que je consomme » | « Facturation au **temps passé**, timesheet visée » | « **Forfait par position ferme facturable** ; dépassement de volume = **bascule de palier**, pas pénalité » |
| « Je veux monter en charge cet hiver » | « Ajout de **2 personnes** en janvier » | « Extension du périmètre par **avenant** (volume et plage), dimensionnement à la main de Salverys » |

---

## 6. Les 4 détails qui font basculer 🟠🟡 → 🟢

Dans cet ordre d'importance :

1. **Le remède.** Un engagement sans remède n'est pas un engagement de service — c'est une
   promesse de moyens. L'avoir de 20 % (`PRICING.md §7`) est **la preuve la moins
   contestable** que Salverys vend un résultat.
2. **L'agrégation.** Le KPI se mesure sur **le volume présenté du périmètre**, jamais par
   tête. Le reporting ne contient **aucun nom**.
3. **L'autorité d'exploitation écrite ET vécue.** Art. 8 bis dans le contrat + canal unique
   au quotidien (`GOUVERNANCE §2`). Une clause démentie par les faits ne protège personne.
4. **Les moyens.** Poste de travail, supervision, QA, continuité, remplacement : côté
   Salverys, et **dit** dans l'annexe. Ce qui reste au client (accès ITSM, licences métier,
   téléphonie) est **listé limitativement** au cadrage.

## 7. Vocabulaire — devis, annexes, emails clients

| ❌ Ne jamais écrire | ✅ Écrire à la place |
|---|---|
| « mise à disposition », « ressource », « profil facturé » | « **prestation** », « **position** », « **périmètre couvert** » |
| « nos agents seront intégrés à votre équipe » | « nous **opérons** le N1 de votre périmètre » |
| « vous pilotez l'équipe » | « **vous pilotez le périmètre et les priorités ; nous encadrons les agents et tenons le SLA** » (`PRICING.md §3`, corollaire 2026-08-24) |
| « facturation au temps passé / jour-homme / TJM » | « **forfait mensuel par position ferme facturable** » |
| « nous remplacerons l'agent si vous n'êtes pas satisfait » | « nous tenons le SLA ; **nous choisissons les moyens** » |
| « planning validé par vos soins » | « plages de couverture **figées au cadrage** » |

> Rappel `GOUVERNANCE §4` : le refus ne se formule jamais comme un refus juridique.
> *« On passe par le référent, c'est ce qui vous garantit que l'engagement de service reste
> opposable. »*
