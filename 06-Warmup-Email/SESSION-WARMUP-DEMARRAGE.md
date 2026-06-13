# Session — Démarrage du warm-up Salverys

> Fichier d'intro pour reprendre là où on s'est arrêtés.
> Date de démarrage : **2026-06-03**
> Fin prévue du warm-up (phase 1) : **2026-07-15**

---

## Contexte

BPO Salverys (salverys-bpo.fr), basé à Antananarivo, ciblant des clients
français. Priorité absolue : **télésecrétariat médical**.
Adresse d'envoi : **valerien@salverys-bpo.fr** (Google Workspace).

---

## Ce qui est déjà fait (ne pas refaire)

- [x] Domaine `salverys-bpo.fr` créé et payé (GWS)
- [x] Adresse `valerien@salverys-bpo.fr` active
- [x] **SPF** configuré dans Squarespace DNS (`@` → `v=spf1 include:_spf.google.com ~all`)
- [x] **DKIM** actif — enregistrement `google._domainkey` dans Squarespace + "Lancer l'authentification" cliqué dans GWS Admin
- [x] **DMARC** configuré (`_dmarc` → `v=DMARC1; p=none; rua=mailto:valerien@salverys-bpo.fr`)
- [x] **mail-tester.com : 10/10** — configuration technique validée
- [x] **Google Postmaster Tools** branché et vérifié sur `salverys-bpo.fr`
- [x] Nom d'affichage corrigé dans GWS Admin (était "Inès Loïs", maintenant "Valérien Rakotosalama") + à vérifier aussi dans Gmail → Paramètres → Comptes → "Envoyer en tant que"

---

## Problème actuel

Emails envoyés depuis `valerien@salverys-bpo.fr` tombent **directement en spam** chez Gmail.
Raison : domaine tout neuf, réputation = zéro. DNS parfait ≠ réputation.
Solution : **warm-up manuel sur 6 semaines**.

---

## Planning warm-up (démarré le 2026-06-03)

| Semaine | Dates | Volume/jour | Objectif |
|---|---|---|---|
| **S1** | 03–09 juin | 5–10 mails | Premiers fils, ≥ 30 % de réponses |
| **S2** | 10–16 juin | 5–10 mails | Consolider, entretenir les fils |
| **S3** | 17–23 juin | 20–30 mails | Augmenter, 1 lien max possible |
| **S4** | 24–30 juin | 20–30 mails | Maintenir l'engagement |
| **S5** | 01–07 juil. | ~50 mails | Mix perso + 1ers cold emails |
| **S6** | 08–15 juil. | ~50 mails | Cold mailing réel en volume |

---

## Règles de contenu (résumé opérationnel)

- **Texte brut uniquement** — 0 HTML, 0 image, 0 template
- **0 lien** semaines 1–2 → 1 lien max à partir de S3
- **2–5 phrases** par mail, ton naturel/perso
- **Contenu unique** à chaque envoi (jamais copier-coller identique)
- **1 question** par mail → force la réponse
- **1 destinataire par mail** (jamais de CC en masse)
- Signature : juste "Valérien" S1–S2, puis nom + fonction à partir de S3

> Le seul vrai levier de réputation = **les RÉPONSES**.
> Cible : 30–35 % de taux de réponse pendant la chauffe.
> En dessous de 20 % → −17 % de placement en boîte de réception.

Voir la fiche complète avec les mythes démontés (fautes volontaires, lorem ipsum) :
→ **`WARMUP-MANUEL.md`**

---

## Modèles de mails de chauffe S1–S2 (à varier)

Chaque mail doit être légèrement différent. Voici 5 bases à adapter :

**Mail 1**
```
Objet : Petite question

Salut [Prénom],

Je lance officiellement Salverys cette semaine, une structure BPO
basée à Mada. Tu penses que le principal frein des cabinets médicaux
français pour externaliser leur secrétariat, c'est quoi ?

Curieux d'avoir ton avis.

Valérien
```

**Mail 2**
```
Objet : Ton avis rapide

Salut [Prénom],

Je démarre Salverys — on fait du télésecrétariat médical depuis Madagascar.
Si tu devais pitcher ça en une phrase à un médecin généraliste, tu dirais quoi ?

Valérien
```

**Mail 3**
```
Objet : Question pour toi

Salut [Prénom],

Je bosse sur la prospection de Salverys en ce moment. Toi qui connais
le milieu médical / les pros français — tu penses que l'argument
"40 % moins cher qu'un secrétariat en France" ça parle, ou c'est pas
le bon angle ?

Valérien
```

**Mail 4**
```
Objet : Feedback ?

Salut [Prénom],

Je prépare mes premiers emails de prospection pour Salverys.
Tu aurais 2 minutes pour me dire si ce pitch te parle :
"Un secrétariat médical disponible, en français, à -40 % du coût habituel."

Trop court ? Trop vague ?

Valérien
```

**Mail 5**
```
Objet : Dispo cette semaine ?

Salut [Prénom],

On avance bien sur Salverys. Je cherche des gens à qui parler
de la stratégie commerciale — tu aurais 15 min dans la semaine
pour un appel rapide ?

Valérien
```

---

## Checklist quotidienne S1–S2

- [ ] 5–10 mails envoyés (1 destinataire chacun, texte brut)
- [ ] Chaque mail : objet et contenu différents des précédents
- [ ] Demander aux contacts : ouvrir + répondre + sortir des spams si besoin
- [ ] Répondre soi-même à chaque réponse reçue (entretenir les fils)
- [ ] Ouvrir/cliquer 2–3 newsletters reçues sur la boîte (compte "vivant")
- [ ] Consulter Google Postmaster Tools (postmaster.google.com) — réputation + spam rate

**Garde-fous :** spam rate < 0,1 % · bounce rate < 2 %

---

## Ce qui vient après le warm-up (semaine 5–6)

Première campagne cold email → **cabinets médicaux** (niche priorité 1).
Séquences prêtes dans `OUTREACH-cabinets-medicaux.md`.
Volume de départ : 20–30 cold emails/jour, augmentation progressive.

---

## Fichiers clés du projet

| Fichier | Contenu |
|---|---|
| `WARMUP-MANUEL.md` | Fiche complète warm-up : mythes, leviers, règles de contenu |
| `OUTREACH-cabinets-medicaux.md` | Séquence cold email niche médicale |
| `OUTREACH-SEQUENCE.md` | Séquence générique |
| `PRICING.md` | Source de vérité tarifaire (fait foi sur tous les autres fichiers) |
| `CRM_Salverys.html` | CRM local (180 leads, clés localStorage préfixées `salverys_`) |
