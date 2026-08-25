/* Plaquette commerciale Salverys — Poste dédié vs Équipe managée
   Chiffres : PRICING.md §3.d / §3.e / §3.f (base helpdesk IT 2 500 €/ETP). */
const pptx = new (require('pptxgenjs'))();
pptx.layout = 'LAYOUT_WIDE'; // 13.3 x 7.5
pptx.author = 'Salverys';
pptx.company = 'Salverys';
pptx.title = 'Poste dédié ou Équipe managée';

const NAVY = '0E3D4E', BLUE = '1A5F7A', CORAL = 'E06B52', TINT = 'FDEEE9';
const GREY = '6E7A82', LIGHT = 'F4F6F7', WHITE = 'FFFFFF', LINE = 'DCE3E6';
const HEAD = 'Cambria', BODY = 'Calibri';

const W = 13.3, M = 0.7;
const shadow = () => ({ type: 'outer', color: '0E3D4E', opacity: 0.1, blur: 12, offset: 3, angle: 90 });

/* Puce ronde corail = motif répété sur toute la plaquette. */
function bullet(s, x, y, n) {
  s.addShape(pptx.ShapeType.ellipse, { x, y, w: 0.2, h: 0.2, fill: { color: CORAL } });
  if (n) s.addText(String(n), { x, y, w: 0.2, h: 0.2, align: 'center', valign: 'middle', fontSize: 10, bold: true, color: WHITE, fontFace: BODY, margin: 0 });
}

function title(s, kicker, text, dark) {
  s.addText(kicker.toUpperCase(), { x: M, y: 0.42, w: 11.9, h: 0.28, fontSize: 12, bold: true, charSpacing: 2,
    color: CORAL, fontFace: BODY, margin: 0 });
  s.addText(text, { x: M, y: 0.76, w: 11.9, h: 0.62, fontSize: 32, bold: true,
    color: dark ? WHITE : NAVY, fontFace: HEAD, margin: 0 });
}

/* ---------- 1. Couverture ---------- */
let s = pptx.addSlide();
s.background = { color: NAVY };
s.addShape(pptx.ShapeType.ellipse, { x: 9.4, y: -1.5, w: 6, h: 6, fill: { color: BLUE, transparency: 55 } });
s.addShape(pptx.ShapeType.ellipse, { x: 11.2, y: 4.4, w: 3.4, h: 3.4, fill: { color: CORAL, transparency: 75 } });
s.addText('SALVERYS · HELPDESK IT N1 & SUPPORT APPLICATIF', { x: M, y: 1.35, w: 9, h: 0.3,
  fontSize: 12, bold: true, charSpacing: 2, color: CORAL, fontFace: BODY, margin: 0 });
s.addText('Poste dédié ou Équipe managée ?', { x: M, y: 1.8, w: 10.6, h: 0.85,
  fontSize: 44, bold: true, color: WHITE, fontFace: HEAD, margin: 0 });
s.addText('Le vrai coût de la continuité de service', { x: M, y: 2.75, w: 9.6, h: 0.55,
  fontSize: 24, color: 'BFD0D8', fontFace: HEAD, italic: true, margin: 0 });
s.addText('Le choix entre nos deux forfaits ne se joue pas sur le nombre de tickets.\nIl se joue sur les heures où on vous sollicite — et sur ce qui doit se passer quand quelqu\'un manque.',
  { x: M, y: 3.6, w: 8.6, h: 1.0, fontSize: 15, color: 'D8E2E7', fontFace: BODY, lineSpacing: 24, margin: 0 });
s.addShape(pptx.ShapeType.roundRect, { x: M, y: 5.35, w: 5.7, h: 0.62, rectRadius: 0.31, fill: { color: CORAL } });
s.addText('Support francophone · Antananarivo → France', { x: M, y: 5.35, w: 5.7, h: 0.62,
  align: 'center', valign: 'middle', fontSize: 13, bold: true, color: WHITE, fontFace: BODY, margin: 0 });
s.addNotes("Plaquette d'aide au choix entre le forfait Poste dédié et le forfait Équipe managée. À utiliser en rendez-vous quand le prospect hésite entre les deux, ou quand il demande l'Équipe managée alors que son besoin ne le justifie pas.");

/* ---------- 2. Deux promesses différentes ---------- */
s = pptx.addSlide();
title(s, 'Le point de départ', 'Ce ne sont pas deux tailles du même service');
s.addText("Beaucoup d'acheteurs lisent nos forfaits comme une échelle : un peu plus d'agents, un peu plus cher. C'est faux. Les deux forfaits achètent deux promesses distinctes.",
  { x: M, y: 1.6, w: 11.9, h: 0.5, fontSize: 15, color: GREY, fontFace: BODY, margin: 0 });

const promises = [
  { t: 'Poste dédié', sub: 'Vous achetez des personnes',
    b: ['Un agent 100 % à vous, 35 ou 40 h/semaine, sur une plage classique.', 'Il connaît votre parc, vos procédures, vos utilisateurs récurrents.', "Une absence isolée est reprise par le manager métier : le service continue, le délai de traitement s'allonge."],
    foot: 'La contrepartie : passé 18h ou le week-end, personne ne répond avant le lendemain matin.', c: BLUE },
  { t: 'Équipe managée', sub: 'Vous achetez une plage horaire',
    b: ['4 agents minimum en rotation sur 6h-20h, 3×8 ou 24·7, plus un superviseur dédié.', "L'équipe est dimensionnée pour que la plage tienne, pas pour qu'une personne soit là.", 'Un absent fait baisser la capacité d\'environ 25 % — il ne ferme jamais la plage.'],
    foot: "La contrepartie : la rotation se paie, même les heures où personne ne manque.", c: CORAL },
];
promises.forEach((p, i) => {
  const x = M + i * 6.15;
  s.addShape(pptx.ShapeType.roundRect, { x, y: 2.2, w: 5.75, h: 4.55, rectRadius: 0.14,
    fill: { color: WHITE }, line: { color: LINE, width: 1 }, shadow: shadow() });
  s.addShape(pptx.ShapeType.roundRect, { x: x + 0.35, y: 2.5, w: 2.5, h: 0.42, rectRadius: 0.21, fill: { color: p.c } });
  s.addText(p.t, { x: x + 0.35, y: 2.5, w: 2.5, h: 0.42, align: 'center', valign: 'middle',
    fontSize: 13, bold: true, color: WHITE, fontFace: BODY, margin: 0 });
  s.addText(p.sub, { x: x + 0.35, y: 3.08, w: 5.05, h: 0.35, fontSize: 19, bold: true, color: NAVY, fontFace: HEAD, margin: 0 });
  p.b.forEach((line, j) => {
    const y = 3.6 + j * 0.72;
    bullet(s, x + 0.38, y + 0.06);
    s.addText(line, { x: x + 0.72, y, w: 4.7, h: 0.68, fontSize: 13, color: '32424C', fontFace: BODY, lineSpacing: 17, margin: 0, valign: 'top' });
  });
  s.addText(p.foot, { x: x + 0.35, y: 5.98, w: 5.05, h: 0.55, fontSize: 12, italic: true, color: GREY, fontFace: BODY, lineSpacing: 15, margin: 0 });
});
s.addNotes("Message clé : ce n'est pas une échelle de taille, ce sont deux promesses. Si le prospect ne retient qu'une chose, c'est celle-là.");

/* ---------- 3. Restez au Poste dédié si… ---------- */
s = pptx.addSlide();
s.background = { color: LIGHT };
title(s, 'Cas n°1', 'Restez au Poste dédié si…');
const dedie = [
  ['Vos utilisateurs sont là de 9h à 18h', "Pas après : c'est déjà la totalité de votre trafic. Payer une rotation nocturne pour zéro appel après 18h ne rembourse jamais son surcoût."],
  ['Un ticket du soir attend le lendemain', "Nuit ou week-end sans réponse : le ticket part à l'ouverture, sans pénalité ni client qui décroche."],
  ['Vous couvrez 1 à 3 positions', "Sous 4 agents, une rotation ne peut de toute façon pas tourner : le sujet Équipe managée ne se pose même pas."],
  ['Une absence glisse le traitement', "de quelques heures dans la journée, pas d'un jour : le manager métier reprend, le ticket part juste un peu plus tard."],
  ['Vous cherchez le prix au plus juste', "sur une plage classique : c'est le forfait qui porte l'écart de −40 à −60 % face à un poste interne en France."],
];
dedie.forEach((d, i) => {
  const col = i % 2, row = Math.floor(i / 2);
  const x = M + col * 6.15, y = 1.75 + row * 1.52;
  s.addShape(pptx.ShapeType.roundRect, { x, y, w: 5.75, h: 1.34, rectRadius: 0.12, fill: { color: WHITE }, line: { color: LINE, width: 1 } });
  bullet(s, x + 0.3, y + 0.26, i + 1);
  s.addText(d[0], { x: x + 0.65, y: y + 0.16, w: 4.9, h: 0.32, fontSize: 14, bold: true, color: NAVY, fontFace: BODY, margin: 0 });
  s.addText(d[1], { x: x + 0.65, y: y + 0.55, w: 4.9, h: 0.68, fontSize: 11.5, color: GREY, fontFace: BODY, lineSpacing: 14, margin: 0 });
});
s.addShape(pptx.ShapeType.roundRect, { x: M + 6.15, y: 4.79, w: 5.75, h: 1.34, rectRadius: 0.12, fill: { color: NAVY } });
s.addText('9 500 €', { x: M + 6.42, y: 4.94, w: 2.2, h: 0.55, fontSize: 30, bold: true, color: WHITE, fontFace: HEAD, margin: 0 });
s.addText("par mois pour 4 agents sur 9h–18h, soit 1 425 € de moins que le même effectif en Équipe managée.",
  { x: M + 8.65, y: 4.95, w: 3.1, h: 0.95, fontSize: 11, color: 'C6D5DC', fontFace: BODY, lineSpacing: 13.5, margin: 0 });
s.addText("Dans ces cinq cas, monter à l'Équipe managée revient à payer une garantie dont vos horaires n'ont pas l'usage — et nous vous le dirons.",
  { x: M, y: 6.45, w: 11.9, h: 0.4, fontSize: 12, italic: true, color: GREY, fontFace: BODY, margin: 0 });
s.addNotes("À utiliser quand le prospect demande spontanément l'Équipe managée : lui montrer qu'il paierait une garantie dont son besoin n'a pas l'usage.");

/* ---------- 4. Passez à l'Équipe managée si… ---------- */
s = pptx.addSlide();
s.background = { color: LIGHT };
title(s, 'Cas n°2', "Passez à l'Équipe managée si…");
const nonstop = [
  ['Des demandes arrivent après 18h', "le week-end ou la nuit. Hors 9h–18h, un poste dédié ne répond pas : il faut quelqu'un en poste, physiquement, sur ces heures-là."],
  ['Vendredi 19h ne peut pas attendre lundi 9h', "62 heures de silence, ce n'est pas un délai : c'est une rupture. Un ticket dédié attend l'ouverture ; un ticket en Équipe managée est pris en charge dans l'heure."],
  ['Chaque heure sans réponse coûte cher', "Pénalité de SLA, escalade client, appel d'offres à défendre : dès qu'une heure se facture, la rotation devient l'option économique."],
  ['Votre couverture dépasse 45 h/semaine', "6h-20h, 3×8 ou 24·7 : au-delà d'une journée de travail, il faut des équipes qui se relaient, pas des agents qui s'épuisent."],
  ['Vous ouvrez 4 positions ou plus', "C'est le plancher physique de la rotation : 4 × 35 h = 140 h/semaine pour 70 h d'amplitude. En dessous, elle ne tourne pas."],
];
nonstop.forEach((d, i) => {
  const col = i % 2, row = Math.floor(i / 2);
  const x = M + col * 6.15, y = 1.75 + row * 1.52;
  s.addShape(pptx.ShapeType.roundRect, { x, y, w: 5.75, h: 1.34, rectRadius: 0.12, fill: { color: WHITE }, line: { color: LINE, width: 1 } });
  bullet(s, x + 0.3, y + 0.26, i + 1);
  s.addText(d[0], { x: x + 0.65, y: y + 0.16, w: 4.9, h: 0.32, fontSize: 14, bold: true, color: NAVY, fontFace: BODY, margin: 0 });
  s.addText(d[1], { x: x + 0.65, y: y + 0.55, w: 4.9, h: 0.68, fontSize: 11.5, color: GREY, fontFace: BODY, lineSpacing: 14, margin: 0 });
});
s.addShape(pptx.ShapeType.roundRect, { x: M + 6.15, y: 4.79, w: 5.75, h: 1.34, rectRadius: 0.12, fill: { color: CORAL } });
s.addText('−1 739 €', { x: M + 6.42, y: 4.94, w: 2.3, h: 0.55, fontSize: 30, bold: true, color: WHITE, fontFace: HEAD, margin: 0 });
s.addText("par mois face au Poste dédié sur-staffé, dès lors que la plage à tenir est 8h-20h.",
  { x: M + 8.75, y: 5.0, w: 3.0, h: 0.9, fontSize: 11, color: 'FCE4DE', fontFace: BODY, lineSpacing: 13.5, margin: 0 });
s.addText("Un seul de ces cinq critères suffit à justifier l'Équipe managée, dès lors qu'il touche les heures — sauf le plancher de 4 positions, qui, lui, est non négociable.",
  { x: M, y: 6.45, w: 11.9, h: 0.4, fontSize: 12, italic: true, color: GREY, fontFace: BODY, margin: 0 });
s.addNotes("Le 4e critère est le verrou : sous 4 positions, on ne vend pas l'Équipe managée, même si le client le demande. Ce n'est pas un choix commercial, c'est une contrainte de staffing.");

/* ---------- 5. Le chiffre qui tranche (graphe natif) ---------- */
s = pptx.addSlide();
title(s, 'La bascule', "Les heures décident, pas le volume");
s.addText("À effectif identique — 4 agents — le forfait le moins cher change selon les heures à couvrir, de 9h–18h à 8h–20h. C'est le seul arbitrage qui compte.",
  { x: M, y: 1.6, w: 11.9, h: 0.4, fontSize: 15, color: GREY, fontFace: BODY, margin: 0 });

s.addChart(pptx.ChartType.bar, [
  { name: 'Poste dédié', labels: ['Heures de bureau\n(~45 h/semaine)', 'Amplitude 8h-20h\n(60 h/semaine)'], values: [9500, 12664] },
  { name: 'Équipe managée', labels: ['Heures de bureau\n(~45 h/semaine)', 'Amplitude 8h-20h\n(60 h/semaine)'], values: [10925, 10925] },
], {
  x: M, y: 2.15, w: 7.5, h: 4.3,
  barDir: 'col', barGapWidthPct: 60,
  chartColors: ['9AA7B0', CORAL],
  showTitle: true, title: 'Coût mensuel estimé pour 4 agents (€)', titleFontSize: 13, titleColor: NAVY, titleFontFace: BODY,
  showValue: true, dataLabelPosition: 'outEnd', dataLabelFormatCode: '#,##0 "€"',
  dataLabelFontSize: 11, dataLabelFontFace: BODY, dataLabelColor: '32424C',
  showLegend: true, legendPos: 'b', legendFontSize: 11, legendColor: NAVY, legendFontFace: BODY,
  catAxisLabelColor: NAVY, catAxisLabelFontSize: 11, catAxisLabelFontFace: BODY,
  valAxisLabelColor: GREY, valAxisLabelFontSize: 10, valAxisLabelFontFace: BODY,
  valAxisMinVal: 0, valAxisMaxVal: 15000, valGridLine: { color: 'E8EDEF', size: 1 }, catGridLine: { style: 'none' },
});

const reads = [
  ['De 9h à 18h, le dédié gagne', "La rotation et le superviseur de l'Équipe managée coûtent +15 % sans couvrir une minute de plus, tant que personne ne sollicite le support hors de ces heures. Le surcoût n'achète pas du temps : il achète une garantie."],
  ['Dès 8h-20h, la comparaison change', "Tenir 60 h/semaine avec 4 positions en simultané demande 5,3 têtes en dédié. L'Équipe managée couvre la même plage avec 4 agents — donc ~2,3 en ligne à la fois. Moins cher pour cette raison, pas par efficacité."],
];
reads.forEach((r, i) => {
  const y = 2.35 + i * 1.75;
  s.addShape(pptx.ShapeType.roundRect, { x: 8.5, y, w: 4.1, h: 1.55, rectRadius: 0.12, fill: { color: i ? TINT : LIGHT }, line: { color: i ? 'F3CFC5' : LINE, width: 1 } });
  s.addText(r[0], { x: 8.75, y: y + 0.17, w: 3.6, h: 0.5, fontSize: 13, bold: true, color: i ? CORAL : NAVY, fontFace: BODY, lineSpacing: 15, margin: 0 });
  s.addText(r[1], { x: 8.75, y: y + 0.68, w: 3.6, h: 0.75, fontSize: 10.5, color: '4A575F', fontFace: BODY, lineSpacing: 13, margin: 0 });
});
s.addText("Base helpdesk IT N1 (2 500 €/ETP, dégressif volume inclus). Support applicatif N1 SaaS : 8 740 € · 10 051 € · 11 650 €. Estimations indicatives — devis ferme sous 24 h.",
  { x: M, y: 6.62, w: 11.9, h: 0.45, fontSize: 10, italic: true, color: GREY, fontFace: BODY, margin: 0 });
s.addNotes("Chiffres issus du simulateur public (PRICING.md §3.f). L'Équipe managée à 4 agents (10 925 €) correspond au « à partir de 11 000 € » affiché sur le site.");

/* ---------- 6. Qui remplace qui ---------- */
s = pptx.addSlide();
title(s, 'La doctrine de continuité', "Ce qu'on promet quand quelqu'un manque");
s.addText("Aucun de nos forfaits ne vend un « agent de backup » en ligne d'option : le remplacement est le coût de l'engagement, il est dans le prix. Voici ce qu'il couvre, palier par palier.",
  { x: M, y: 1.6, w: 11.9, h: 0.5, fontSize: 15, color: GREY, fontFace: BODY, margin: 0 });

const rows = [
  ['Poste dédié', 'Le manager métier', 'Les absences ponctuelles sont reprises : congés isolés, arrêt court.', "Deux absences simultanées ni un arrêt long : on prévient et on ajuste le SLA au cadrage.", BLUE],
  ['Équipe managée', 'La rotation', "La plage reste tenue : 4 × 35 h couvrent 70 h d'amplitude, un absent en laisse 105.", "Le nombre d'agents en ligne à la fois : ~2,3 sur 8h-20h, et environ 25 % de moins pendant l'absence.", CORAL],
  ['Priority', 'Un backup nominatif réservé', "La capacité reste inchangée : zéro rupture, dès 1 agent.", "Option de niveau de service, cumulable avec le Poste dédié — pas un quatrième forfait.", '7A8B94'],
];
[['Forfait', M + 0.25, 1.45], ['Qui remplace', 2.65, 1.75], ["Ce qu'on promet", 4.6, 3.3], ["Ce qu'on ne promet pas", 8.1, 3.9]].forEach(([t, x, w]) => {
  s.addText(t.toUpperCase(), { x, y: 2.35, w, h: 0.3, fontSize: 10, bold: true, charSpacing: 1, color: GREY, fontFace: BODY, margin: 0 });
});
rows.forEach((r, i) => {
  const y = 2.75 + i * 1.32;
  s.addShape(pptx.ShapeType.roundRect, { x: M, y, w: 11.9, h: 1.18, rectRadius: 0.12,
    fill: { color: WHITE }, line: { color: LINE, width: 1 }, shadow: shadow() });
  s.addShape(pptx.ShapeType.roundRect, { x: M + 0.25, y: y + 0.38, w: 1.45, h: 0.42, rectRadius: 0.21, fill: { color: r[4] } });
  s.addText(r[0], { x: M + 0.25, y: y + 0.38, w: 1.45, h: 0.42, align: 'center', valign: 'middle', fontSize: 12, bold: true, color: WHITE, fontFace: BODY, margin: 0 });
  s.addText(r[1], { x: 2.65, y: y + 0.3, w: 1.75, h: 0.6, fontSize: 13, bold: true, color: NAVY, fontFace: BODY, lineSpacing: 15, margin: 0 });
  s.addText(r[2], { x: 4.6, y: y + 0.24, w: 3.3, h: 0.75, fontSize: 11.5, color: '32424C', fontFace: BODY, lineSpacing: 14, margin: 0 });
  s.addText(r[3], { x: 8.1, y: y + 0.24, w: 3.9, h: 0.75, fontSize: 11.5, color: GREY, fontFace: BODY, italic: true, lineSpacing: 14, margin: 0 });
});
s.addText("Le manager métier est déjà payé et supervise déjà votre compte : aucune tête supplémentaire à recruter, donc aucune ligne en plus sur votre facture.",
  { x: M, y: 6.72, w: 11.9, h: 0.4, fontSize: 11, italic: true, color: GREY, fontFace: BODY, margin: 0 });
s.addNotes("Répond à l'objection « et si votre agent est malade ? ». Les trois promesses sont distinctes et toutes tenables — ne jamais promettre la capacité inchangée hors Priority.");

/* ---------- 7. Les deux erreurs de casting ---------- */
s = pptx.addSlide();
s.background = { color: LIGHT };
title(s, 'À éviter', 'Les deux façons de se tromper de forfait');
const errors = [
  { t: "Prendre l'Équipe managée « pour être tranquille »", c: BLUE,
    p: "Un support sollicité de 9h à 18h, 3 positions, aucun SLA opposable — et un forfait à rotation acheté par précaution.",
    r: "Vous payez +15 % pour une continuité que votre manager métier assure déjà, et vous diluez la connaissance de votre parc entre 4 agents au lieu de 3.",
    f: "Le bon réflexe : rester au Poste dédié, et n'ajouter Priority que si une rupture est réellement inacceptable." },
  { t: "Tenir une plage large avec des postes dédiés", c: CORAL,
    p: "Un engagement 8h-20h honoré en empilant des agents dédiés, sans rotation organisée ni superviseur.",
    r: "Il faut 5,3 têtes pour tenir 4 positions en simultané — et la plage tombe dès la première absence, précisément le jour où le SLA se joue.",
    f: "Le bon réflexe : passer à l'Équipe managée dès que la plage dépasse une journée de travail." },
];
errors.forEach((e, i) => {
  const x = M + i * 6.15;
  s.addShape(pptx.ShapeType.roundRect, { x, y: 1.7, w: 5.75, h: 4.9, rectRadius: 0.14,
    fill: { color: WHITE }, line: { color: LINE, width: 1 }, shadow: shadow() });
  s.addShape(pptx.ShapeType.ellipse, { x: x + 0.35, y: 2.0, w: 0.42, h: 0.42, fill: { color: e.c } });
  s.addText('!', { x: x + 0.35, y: 2.0, w: 0.42, h: 0.42, align: 'center', valign: 'middle', fontSize: 16, bold: true, color: WHITE, fontFace: BODY, margin: 0 });
  s.addText(e.t, { x: x + 0.95, y: 1.98, w: 4.5, h: 0.6, fontSize: 16, bold: true, color: NAVY, fontFace: HEAD, lineSpacing: 20, margin: 0 });
  [['Le cas', e.p], ['Ce que ça coûte', e.r]].forEach((blk, j) => {
    const y = 2.85 + j * 1.28;
    s.addText(blk[0].toUpperCase(), { x: x + 0.35, y, w: 5.05, h: 0.25, fontSize: 9.5, bold: true, charSpacing: 1, color: e.c, fontFace: BODY, margin: 0 });
    s.addText(blk[1], { x: x + 0.35, y: y + 0.28, w: 5.05, h: 0.9, fontSize: 12, color: '32424C', fontFace: BODY, lineSpacing: 15, margin: 0 });
  });
  s.addShape(pptx.ShapeType.roundRect, { x: x + 0.35, y: 5.45, w: 5.05, h: 0.95, rectRadius: 0.1, fill: { color: LIGHT } });
  s.addText(e.f, { x: x + 0.55, y: 5.55, w: 4.65, h: 0.75, fontSize: 11.5, bold: true, color: NAVY, fontFace: BODY, lineSpacing: 14, margin: 0 });
});
s.addNotes("Montrer qu'on sait dire non à une montée en gamme est ce qui rend crédible la recommandation inverse.");

/* ---------- 8. Conclusion ---------- */
s = pptx.addSlide();
s.background = { color: NAVY };
s.addShape(pptx.ShapeType.ellipse, { x: -1.6, y: 4.2, w: 5.2, h: 5.2, fill: { color: BLUE, transparency: 60 } });
s.addShape(pptx.ShapeType.ellipse, { x: 11.6, y: -1.2, w: 3.6, h: 3.6, fill: { color: CORAL, transparency: 78 } });
s.addText('LA RÈGLE EN UNE PHRASE', { x: M, y: 1.0, w: 11.9, h: 0.3, fontSize: 12, bold: true, charSpacing: 2, color: CORAL, fontFace: BODY, margin: 0 });
s.addText("Comptez vos heures, pas vos tickets.", { x: M, y: 1.42, w: 11.9, h: 0.7,
  fontSize: 36, bold: true, color: WHITE, fontFace: HEAD, margin: 0 });
s.addText("Tant que vos demandes arrivent entre 9h et 18h, le Poste dédié les couvre au meilleur prix. Dès qu'elles arrivent après 18h, le week-end ou la nuit — et que vous avez 4 positions à ouvrir — l'Équipe managée les couvre pour moins cher que des postes dédiés empilés.",
  { x: M, y: 2.32, w: 10.4, h: 1.0, fontSize: 15, color: 'D8E2E7', fontFace: BODY, lineSpacing: 23, margin: 0 });

const steps = [
  ['1', 'Vous décrivez vos horaires', "Heures à couvrir, volume, SLA en vigueur, et ce qui se passe aujourd'hui quand un ticket arrive hors plage."],
  ['2', 'On chiffre les deux scénarios', "Poste dédié et Équipe managée côte à côte, sur vos chiffres — y compris quand la réponse est de rester au dédié."],
  ['3', 'Devis ferme sous 24 h', "Contrat dès 3 mois, 1er mois à −50 %, opérationnel en 3 à 4 semaines."],
];
steps.forEach((st, i) => {
  const x = M + i * 4.1;
  s.addShape(pptx.ShapeType.roundRect, { x, y: 3.85, w: 3.75, h: 1.85, rectRadius: 0.14, fill: { color: '154B60' } });
  s.addShape(pptx.ShapeType.ellipse, { x: x + 0.3, y: 4.1, w: 0.42, h: 0.42, fill: { color: CORAL } });
  s.addText(st[0], { x: x + 0.3, y: 4.1, w: 0.42, h: 0.42, align: 'center', valign: 'middle', fontSize: 13, bold: true, color: WHITE, fontFace: BODY, margin: 0 });
  s.addText(st[1], { x: x + 0.85, y: 4.12, w: 2.7, h: 0.4, fontSize: 13.5, bold: true, color: WHITE, fontFace: BODY, margin: 0 });
  s.addText(st[2], { x: x + 0.3, y: 4.68, w: 3.2, h: 0.85, fontSize: 10.5, color: 'BFD0D8', fontFace: BODY, lineSpacing: 13, margin: 0 });
});
s.addText('contact@salverys.fr', { x: M, y: 6.1, w: 5, h: 0.45, fontSize: 20, bold: true, color: CORAL, fontFace: HEAD, margin: 0 });
s.addText('Salverys — Helpdesk IT N1 & Support applicatif N1 · Antananarivo → France',
  { x: M, y: 6.6, w: 11.9, h: 0.3, fontSize: 11, color: '8FA8B4', fontFace: BODY, margin: 0 });
s.addNotes("Clore sur l'amplitude, jamais sur le prix : c'est le critère qui rend l'arbitrage évident et qui nous laisse recommander le forfait le moins cher sans perdre le deal.");

pptx.writeFile({ fileName: process.argv[2] });
