# Fiche — Chauffer une boîte cold mailing **manuellement**

> Contexte : domaine `salverys-bpo.fr` créé le 2026-06-02, adresse
> `valerien@salverys-bpo.fr`, SPF/DKIM/DMARC OK (mail-tester 10/10).
> Réputation = **zéro** → Gmail met en spam tant qu'on n'a pas construit
> d'historique. Cette fiche couvre **le contenu** des mails de chauffe.

---

## ⚠️ À retenir avant tout

Le 10/10 mail-tester valide la **config technique**, pas la **réputation**.
La réputation se construit avec **un seul signal dominant : les RÉPONSES**.

> Donnée clé : le taux de réponse pendant la chauffe est le **meilleur
> prédicteur** de la délivrabilité long terme. En dessous de 20 % de réponses
> → −17 % de placement en boîte de réception sur les 30 premiers jours.
> **Cible : 30–35 % de réponses** sur tes mails de chauffe.

Donc : un mail de chauffe sans réponse ne sert quasiment à rien. Mieux vaut
**5 mails/jour qui reçoivent une vraie réponse** que 50 dans le vide.

---

## Le mythe vs la réalité (tes questions)

| Technique | Verdict | Pourquoi |
|---|---|---|
| **Fautes d'orthographe volontaires** | ❌ **NON** | Mythe nuisible. Un test a fait chuter la délivrabilité à **72 %** avec une seule faute (« emplementation »). Ça dégrade l'engagement (lecteur méfiant) → mauvaise réputation. |
| **Lorem ipsum** | ❌ **JAMAIS** | Contenu non-unique = signature de spam. Un template en lorem ipsum a échoué à **4 filtres anti-spam** ; le même avec du vrai texte n'échouait qu'à 1. Les scanners cherchent les patterns réutilisés par les spammeurs. |
| **Photos / images** | ❌ pendant la chauffe | Images + HTML stylé = signal « blast marketing ». Reste en **texte brut** (plain text). Vise **≥ 80 % de texte**, idéalement **0 image** les 2 premières semaines. |
| **Liens** | ⚠️ minimum | **0 lien** semaines 1–2. Puis **1 lien max** à partir de la semaine 3. Pas de pixel de tracking au début (désactive le tracking d'ouverture). |
| **S'inscrire à des newsletters** | ✅ **Utile (secondaire)** | Bon point — mais pas pour la raison qu'on croit. Ça **remplit la boîte de vrais mails légitimes**, rend le compte « vivant/humain », et te donne du contenu à ouvrir/cliquer (comportement humain). Ce n'est PAS un moteur de réputation à l'envoi. À faire en parallèle, avec des expéditeurs sérieux. |
| **Taille du mail** | ✅ court & naturel | Un mail de chauffe doit ressembler à un **vrai mail perso** : 2–5 phrases, conversationnel. (Les vrais cold emails plus tard : **50–125 mots**.) |
| **Ratio texte** | ✅ ~100 % texte | Texte brut, pas de template HTML, pas de signature lourde avec logos/bannières au début. |

---

## Ce qui construit VRAIMENT la réputation (les vrais leviers)

1. **Les réponses** → demande explicitement une réponse (une question simple).
2. **Les fils de discussion** (aller-retour), pas un mail isolé. 2–3 échanges
   dans le même thread > 1 mail one-shot.
3. **Les actions du destinataire** : « Pas spam » / déplacer vers Réception /
   marquer comme important / mettre en favori. Brieffe tes contacts de
   confiance là-dessus.
4. **Le contenu UNIQUE** à chaque envoi (c'est l'inverse exact du lorem ipsum).
5. **La montée en volume progressive** (voir planning).
6. **Texte brut, 0 image, 0–1 lien, pas de tracking** au démarrage.
7. **Google Postmaster Tools** branché dès aujourd'hui pour voir ta réputation
   comme Google la voit (postmaster.google.com).

---

## Planning de montée en charge (6 semaines)

| Semaine | Volume/jour | Contenu | Objectif |
|---|---|---|---|
| **1–2** | 5–10 mails | Texte brut, 0 lien, 0 image, perso | ≥ 30 % de réponses + « Pas spam » si besoin |
| **3–4** | 20–30 mails | Texte brut, 1 lien max possible | Maintenir l'engagement, ouvrir des fils |
| **5–6** | ~50 mails | Mix perso + 1ers cold emails réels | Démarrer le vrai cold mailing en volume |

- Plafond de sécurité ensuite : **50–100 mails/jour/boîte** max.
- **1 à 3 destinataires max par mail** — jamais de gros CC/CCI (= signal spam).
- **Garde la chauffe active en parallèle** même après le lancement des
  campagnes : si tu coupes, la réputation redescend.

---

## Modèle de mail de chauffe (à varier à chaque fois)

> Texte brut. Objet court et humain (pas de MAJUSCULES, pas de « !!! »,
> pas de mots type « gratuit / promo / urgent »).

**Objet :** `Petite question` / `Dispo cette semaine ?` / `Retour sur X`

```
Salut [Prénom],

J'avance sur le lancement de Salverys, je voulais ton avis rapide :
tu penses que [question simple ouverte] ?

Dis-moi, ça m'aide vraiment.

Valérien
```

**Règles de variation :**
- Change l'objet, l'accroche et la question à **chaque** envoi (contenu unique).
- Pose **toujours une question** → ça force la réponse.
- Signature simple : juste « Valérien » au début ; ajoute une signature texte
  légère (nom + fonction) à partir de la semaine 3.
- **Réponds toi-même** dans les fils pour créer des allers-retours.

---

## Checklist quotidienne (chauffe manuelle)

- [ ] 5–10 mails (S1–2) à des contacts de confiance, 1–3 destinataires max
- [ ] Chaque mail : texte brut, contenu unique, une question
- [ ] Demander aux contacts : ouvrir, **répondre**, sortir des spams si besoin
- [ ] Répondre soi-même aux réponses (entretenir 2–3 échanges)
- [ ] Ouvrir/cliquer quelques newsletters reçues (compte « vivant »)
- [ ] Vérifier Google Postmaster Tools (réputation, spam rate)

**Garde-fous :** taux de spam < 0,1 %, taux de rebond < 2 %.

---

### Sources
- [Maildeck — Cold Email Warm-Up, data 1M+ inboxes (2026)](https://maildeck.co/blog/cold-email-warm-up-what-actually-works-2026)
- [Amplemarket — Email deliverability guide 2026](https://www.amplemarket.com/blog/email-deliverability-guide-2026)
- [Reply.io — Email Warm-Up 2026](https://reply.io/warm-up-email/)
- [Suped — How intentional typos impact deliverability](https://www.suped.com/knowledge/email-deliverability/sender-reputation/how-do-intentional-typos-impact-email-deliverability)
- [Email on Acid — Lorem Ipsum and Spam Testing](https://www.emailonacid.com/blog/article/email-development/lorem-ipsum-and-spam-testing/)
- [Instantly — Email Warmup Guide](https://instantly.ai/blog/email-warmup-guide/)
- [MailReach — Gmail Warmup 2026](https://www.mailreach.co/blog/gmail-warmup)
