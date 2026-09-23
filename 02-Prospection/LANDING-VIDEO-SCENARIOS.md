# Landing pages vidéo — Helpdesk IT N1 (ESN / MSP) · deux scénarios A/B

> Créé le 2026-09-23. Cible : **Helpdesk IT N1 pour ESN / MSP** (niche n°1), **marque blanche
> uniquement**. Objectif unique des deux pages : obtenir une **demande de cadrage partenaire**
> (formulaire ou email).

| | Variante A — « Sous votre marque » | Variante B — « Le pic du lundi » |
|---|---|---|
| Page | `landing-helpdesk-it-a.html` | `landing-helpdesk-it-b.html` |
| Vidéo | `assets/video/landing-a-*` (18 s, boucle) | `assets/video/landing-b-*` (20 s, boucle) |
| Source de la vidéo | `tools/landing-video/scene-a.html` | `tools/landing-video/scene-b.html` |
| Douleur visée | « Si j'externalise, mon client le verra » | « Mon N1 déborde et mange mes N2 » |
| Titre | Le helpdesk N1 qui répond **à votre nom.** | Vos N2 sur vos projets. **Le N1, on le prend.** |
| Section 2 | Ce que voit votre client / ce que vous gardez | Le constat : pic du lundi, poste qui tourne, plages étendues |
| Champ `source` du formulaire | `landing-helpdesk-it-a` | `landing-helpdesk-it-b` |

Le reste des pages est identique (périmètre N1, démarrage, formats, engagement, FAQ, contact) :
seul l'angle change, pour que le test mesure l'angle et rien d'autre.

---

## Scénario A — « Sous votre marque » (18 s)

**Idée :** montrer que le prestataire est invisible. Le logo à l'écran est celui du partenaire
(« VOTRE LOGO », en pointillés), la signature est la sienne, l'escalade va à *son* N2.

| Temps | Plan | Ce que l'on doit comprendre |
|---|---|---|
| 0–0,9 s | Centre de services générique au logo « VOTRE LOGO », trois tickets déjà résolus | C'est *votre* outil |
| 0,9–8 s | Cinq tickets N1 arrivent (VPN, mot de passe AD, nouvel arrivant, serveur de fichiers, imprimante). Chacun passe **Nouveau → Pris en charge → Résolu**, signé « Support Votre ESN » | Le N1 est traité au fil de l'eau, sous votre nom |
| ≈ 9 s | Le ticket « serveur de fichiers » passe **Escaladé N2 — transmis à votre N2** | L'escalade reste chez vous |
| 9,2–15 s | Gros plan sur l'email envoyé au client final : `support@votre-esn.fr`, signature **« L'équipe support — Votre ESN »** surlignée. Pastille : *Votre marque · vos outils · votre ton* | Votre client ne voit que vous |
| 15–18 s | Retour à la file, fondu vers l'image de départ | Boucle sans coupure |

## Scénario B — « Le pic du lundi » (20 s)

**Idée :** le même lundi matin joué deux fois, sans puis avec relais N1. On ne montre jamais une
activation instantanée : le relais est en place dès le début de la seconde passe.

| Temps | Plan | Ce que l'on doit comprendre |
|---|---|---|
| 0–9,4 s | **« Lundi 8 h · sans relais N1 »**. Horloge de Paris 07:50 → 09:20. Les tickets s'empilent dans la file N1 (compteur jusqu'à ~20, en corail). Les trois projets N2 passent un à un **« En pause — N2 sur le N1 »**. La colonne *Relais N1* est vide, en pointillés | Le N1 qui déborde coûte vos projets |
| 9,4–10,4 s | Bascule : l'horloge se rembobine, la pastille devient **« Même lundi · relais N1 sous votre marque »** | Même matinée, autre organisation |
| 10,4–19,2 s | Mêmes arrivées. Chaque ticket part dans la colonne *Relais N1* (« Support · Votre ESN ») et se valide. La file reste à 2–4 tickets, les projets N2 restent **« En cours »** | Le pic est absorbé, vos N2 facturent |
| 19,2–20 s | Fondu vers l'image de départ | Boucle sans coupure |

---

## Garde-fous respectés (CLAUDE.md)

- **Aucune équipe filmée ni photo d'agents** : l'effectif est à 0 salarié. La vidéo est un motion
  design d'interface, sans visage.
- **Données fictives et signalées** : bandeau « Illustration · données fictives » dans l'image
  *et* sur la page. Compteurs et volumes sont des illustrations, jamais des résultats.
- **Aucun chiffre d'économie vs France**, aucun prix sur la page (la grille partenaire est remise
  au cadrage, sous NDA — `PRICING.md`).
- **Délai nommé par son jalon** : « première prise de tickets visée vers six semaines après
  signature, sous réserve des accès, du recrutement et de la formation ; autonomie visée à
  2,5–3,5 mois ». Le mot « opérationnel » n'apparaît pas.
- **Engagement de service** repris de `PRICING.md` §4 : ≥ 90 % dans le délai convenu, en régime,
  sinon avoir de 20 % (un mois sur douze au plus).
- **Pas d'argument sur le parcours de la direction**, **pas de plafond de capacité** opposé.
- **RGPD** : la FAQ ne prétend pas que Salverys est « invisible » juridiquement — elle précise le
  statut de sous-traitant ultérieur et le DPA fourni au cadrage.
- **MB-only** : les pages ne parlent qu'aux ESN / MSP. Aucune offre directe.

## Mesurer le test A/B (sans outil d'A/B)

Pas besoin d'outil dédié : **chaque canal pointe vers une URL**. Exemple : la moitié des
invitations LinkedIn / emails manuels du mois avec le lien A, l'autre moitié avec le lien B,
en ajoutant `?utm_source=linkedin&utm_campaign=helpdesk-n1` pour distinguer les canaux.

- **Conversion** = demande de cadrage reçue. Formspree la reçoit avec le champ `source`
  (`landing-helpdesk-it-a` ou `-b`) : c'est le compteur.
- **Trafic** : activer Plausible ou GA4 (SaaS-first, voir le commentaire dans le `<head>`).
  Sans analytics, on ne connaît que le numérateur, pas le taux.
- Volumes attendus faibles (fondateur seul, 10–20 emails/jour) : ne pas conclure avant
  **~100 visites par variante**. En dessous, lire les *réponses* qualitatives, pas les taux.
- Les pages sont en `noindex` : ce sont des pages de campagne, pas des pages SEO.

## Régénérer les vidéos

```bash
node tools/landing-video/render.mjs            # a + b, paysage 1920×1080 et portrait 720×1280
node tools/landing-video/render.mjs a --stills 0,9,13   # images de contrôle (non versionnées)
```

Pour prévisualiser une scène en boucle : ouvrir `tools/landing-video/scene-a.html` (ou `-b`) dans
un navigateur. `?t=12` fige l'image à 12 s, `?orient=portrait` force la version mobile.

Pour personnaliser pour un prospect précis (ex. une démo « au logo de l'ESN X ») : remplacer
« VOTRE LOGO » / « Votre ESN » dans la scène, puis relancer le rendu **dans un fichier séparé** —
ne jamais publier sur le site public une vidéo portant le nom d'un prospect.

Chaque vidéo pèse **0,4 à 1,3 Mo** ; la page charge WebM (VP9) puis MP4 (H.264) en repli, choisit
la version portrait sous un ratio 4:5, et **ne charge aucune vidéo** si le visiteur a demandé
moins d'animations ou active l'économie de données (l'image fixe reste affichée).
