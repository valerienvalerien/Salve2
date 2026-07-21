// Génère assets/img/carte-monde.svg (carte pointillée Antananarivo · Paris · Montréal).
// Usage : npm i dotted-map (dans un dossier temporaire contenant ce script), puis
//   node gen-carte-monde.mjs
import fs from 'fs';
import DottedMap from 'dotted-map';

const CITIES = {
  tana: { lat: -18.8792, lng: 47.5079, label: 'Antananarivo' },
  paris: { lat: 48.8566, lng: 2.3522, label: 'Paris' },
  montreal: { lat: 45.5017, lng: -73.5673, label: 'Montréal' },
};

const map = new DottedMap({
  height: 55,
  grid: 'diagonal',
  region: { lat: { min: -42, max: 66 }, lng: { min: -102, max: 72 } },
});

// Position exacte des villes via un pin marqueur (récupérée puis dessinée à part)
for (const [key, c] of Object.entries(CITIES)) {
  map.addPin({ lat: c.lat, lng: c.lng, data: key, svgOptions: { radius: 0.001 } });
}

const points = map.getPoints();
const pos = {};
for (const p of points) if (p.data) pos[p.data] = { x: p.x, y: p.y };

const base = map.getSVG({ radius: 0.22, color: '#5A6A82', shape: 'circle' });
let [vx, vy, vw, vh] = base.match(/viewBox="([^"]+)"/)[1].split(' ').map(Number);
const viewBox = `${vx - 3} ${vy - 2} ${vw + 6} ${vh + 5}`;
const dots = base.replace(/<svg[^>]*>/, '').replace('</svg>', '');

const arc = (a, b, lift) => {
  const mx = (a.x + b.x) / 2, my = (a.y + b.y) / 2 - lift;
  return `M ${a.x.toFixed(2)} ${a.y.toFixed(2)} Q ${mx.toFixed(2)} ${my.toFixed(2)} ${b.x.toFixed(2)} ${b.y.toFixed(2)}`;
};

const t = pos.tana, pa = pos.paris, mo = pos.montreal;
const label = (p, text, anchor, dx, dy) =>
  `<text x="${(p.x + dx).toFixed(2)}" y="${(p.y + dy).toFixed(2)}" text-anchor="${anchor}" class="wm-label">${text}</text>`;

const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${viewBox}" role="img" aria-label="Antananarivo relie Paris et Montréal">
<style>
.wm-label{font-family:Inter,-apple-system,'Segoe UI',sans-serif;font-size:2.4px;font-weight:700;fill:#EDF1F4;letter-spacing:.05px}
.wm-arc{fill:none;stroke:#C5D2C5;stroke-width:.42;stroke-linecap:round;stroke-dasharray:1.3 1.9;opacity:.85;animation:wm-dash 26s linear infinite}
.wm-halo{animation:wm-pulse 2.6s ease-out infinite;transform-box:fill-box;transform-origin:center}
@keyframes wm-dash{to{stroke-dashoffset:-160}}
@keyframes wm-pulse{0%{transform:scale(.5);opacity:.75}80%{transform:scale(2.1);opacity:0}100%{transform:scale(2.1);opacity:0}}
@media (prefers-reduced-motion: reduce){.wm-arc,.wm-halo{animation:none}.wm-halo{opacity:.25}}
</style>
${dots}
<path class="wm-arc" d="${arc(t, pa, 14)}"/>
<path class="wm-arc" d="${arc(t, mo, 26)}"/>
<circle class="wm-halo" cx="${pa.x}" cy="${pa.y}" r="1.5" fill="#C5D2C5"/>
<circle cx="${pa.x}" cy="${pa.y}" r="1" fill="#C5D2C5"/>
<circle class="wm-halo" cx="${mo.x}" cy="${mo.y}" r="1.5" fill="#C5D2C5"/>
<circle cx="${mo.x}" cy="${mo.y}" r="1" fill="#C5D2C5"/>
<circle class="wm-halo" cx="${t.x}" cy="${t.y}" r="1.9" fill="#D4B98A"/>
<circle cx="${t.x}" cy="${t.y}" r="1.25" fill="#D4B98A"/>
${label(pa, 'Paris', 'start', 2.1, -1.4)}
${label(mo, 'Montréal', 'middle', 0, -2.6)}
${label(t, 'Antananarivo', 'middle', 0, 4)}
</svg>`;

fs.writeFileSync('/home/user/Salve2/assets/img/carte-monde.svg', svg);
console.log('pins:', JSON.stringify(pos), 'taille:', (svg.length / 1024).toFixed(1) + ' Ko');
