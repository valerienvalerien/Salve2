#!/usr/bin/env node
/* =========================================================
   Rendu des vidéos de fond des landing pages Salverys.

   Chaque scène (scene-a.html, scene-b.html) est une fonction pure du temps :
   on la pilote image par image dans Chromium (Playwright), on capture chaque
   image et on l'envoie à ffmpeg. Résultat identique à l'aperçu navigateur.

   Usage :
     node tools/landing-video/render.mjs                  # tout : a et b, paysage + portrait
     node tools/landing-video/render.mjs a                # une scène
     node tools/landing-video/render.mjs a --stills 0,5,11 # images PNG de contrôle (dossier stills/)

   Prérequis : Playwright (global dans l'environnement de build) et un ffmpeg
   avec libx264 + libvpx-vp9. Chemin de ffmpeg : variable FFMPEG, sinon
   `python3 -c "import imageio_ffmpeg"`, sinon `ffmpeg` du PATH.

   Sorties dans assets/video/ :
     landing-<s>-16x9.mp4 / .webm   1920×1080 (desktop, tablette paysage)
     landing-<s>-9x16.mp4 / .webm    720×1280 (mobile portrait)
     landing-<s>-16x9.jpg / -9x16.jpg  image d'attente = première image de la boucle
   ========================================================= */
import { spawn, execFileSync } from 'node:child_process';
import { createRequire } from 'node:module';
import { mkdirSync, statSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const HERE = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(HERE, '../..');
const OUT = join(ROOT, 'assets/video');
const FPS = 30;

const require = createRequire(import.meta.url);
function loadPlaywright() {
  try { return require('playwright'); } catch {}
  const globalRoot = execFileSync('npm', ['root', '-g']).toString().trim();
  return require(join(globalRoot, 'playwright'));
}
function ffmpegPath() {
  if (process.env.FFMPEG) return process.env.FFMPEG;
  try { return execFileSync('python3', ['-c', 'import imageio_ffmpeg;print(imageio_ffmpeg.get_ffmpeg_exe())']).toString().trim(); } catch {}
  return 'ffmpeg';
}

const FORMATS = {
  '16x9': { orient: 'landscape', vw: 1920, vh: 1080, crf264: 27, crfvp9: 38 },
  '9x16': { orient: 'portrait', vw: 720, vh: 1280, crf264: 28, crfvp9: 40 },
};

function ffmpeg(args) {
  const p = spawn(ffmpegPath(), ['-hide_banner', '-loglevel', 'error', '-y', ...args], { stdio: ['pipe', 'inherit', 'inherit'] });
  const done = new Promise((ok, ko) => p.on('close', c => (c === 0 ? ok() : ko(new Error('ffmpeg ' + c)))));
  return { stdin: p.stdin, done };
}
const write = (stream, buf) => new Promise(ok => (stream.write(buf) ? ok() : stream.once('drain', ok)));

async function openScene(browser, scene, fmt) {
  const page = await browser.newPage({ viewport: { width: fmt.vw, height: fmt.vh }, deviceScaleFactor: 1 });
  const url = pathToFileURL(join(HERE, `scene-${scene}.html`)).href + `?render=1&orient=${fmt.orient}`;
  await page.goto(url);
  await page.evaluate(() => window.__scene.ready);
  await page.evaluate(() => Promise.all([...document.fonts].map(f => f.load())));
  return page;
}

async function renderScene(browser, scene, key) {
  const fmt = FORMATS[key];
  const page = await openScene(browser, scene, fmt);
  const L = await page.evaluate(() => window.__scene.duration);
  const n = Math.round(L * FPS);
  const base = join(OUT, `landing-${scene}-${key}`);
  const tmp = join(HERE, `.frames-${scene}-${key}.mkv`);

  // 1) Capture → intermédiaire quasi sans perte (une seule passe de capture, deux encodages).
  const inter = ffmpeg(['-f', 'image2pipe', '-framerate', String(FPS), '-c:v', 'mjpeg', '-i', '-',
    '-c:v', 'libx264', '-crf', '8', '-preset', 'ultrafast', '-pix_fmt', 'yuv444p', tmp]);
  for (let i = 0; i < n; i++) {
    await page.evaluate(t => window.__scene.renderAt(t), i / FPS);
    await write(inter.stdin, await page.screenshot({ type: 'jpeg', quality: 96 }));
    if (i % 60 === 0) process.stdout.write(`\r  ${scene} ${key} ${i}/${n}`);
  }
  inter.stdin.end();
  await inter.done;
  process.stdout.write(`\r  ${scene} ${key} ${n}/${n} capturées\n`);

  // Image d'attente = t = 0 (première image de la boucle : aucun saut au démarrage).
  await page.evaluate(() => window.__scene.renderAt(0));
  await page.screenshot({ type: 'jpeg', quality: 82, path: base + '.jpg' });
  await page.close();

  // 2) Encodages de diffusion. Pas de piste audio (lecture automatique muette).
  await ffmpeg(['-i', tmp, '-an', '-c:v', 'libx264', '-profile:v', 'high', '-preset', 'slow', '-crf', String(fmt.crf264),
    '-pix_fmt', 'yuv420p', '-movflags', '+faststart', '-g', String(FPS * 2), base + '.mp4']).done;
  await ffmpeg(['-i', tmp, '-an', '-c:v', 'libvpx-vp9', '-b:v', '0', '-crf', String(fmt.crfvp9), '-row-mt', '1',
    '-deadline', 'good', '-cpu-used', '2', '-pix_fmt', 'yuv420p', '-g', String(FPS * 2), base + '.webm']).done;
  execFileSync('rm', ['-f', tmp]);
  const kb = f => Math.round(statSync(f).size / 1024) + ' Ko';
  console.log(`  → ${base}.mp4 (${kb(base + '.mp4')}) · .webm (${kb(base + '.webm')}) · .jpg (${kb(base + '.jpg')})`);
}

async function stills(browser, scene, times) {
  const dir = join(HERE, 'stills');
  mkdirSync(dir, { recursive: true });
  for (const key of Object.keys(FORMATS)) {
    const page = await openScene(browser, scene, FORMATS[key]);
    for (const t of times) {
      await page.evaluate(x => window.__scene.renderAt(x), t);
      await page.screenshot({ path: join(dir, `${scene}-${key}-t${t}.png`) });
    }
    await page.close();
  }
  console.log(`  images de contrôle dans ${dir}`);
}

const args = process.argv.slice(2);
const scenes = args.filter(a => /^[ab]$/.test(a));
const si = args.indexOf('--stills');
const { chromium } = loadPlaywright();
const browser = await chromium.launch();
mkdirSync(OUT, { recursive: true });
try {
  for (const s of scenes.length ? scenes : ['a', 'b']) {
    if (si >= 0) await stills(browser, s, args[si + 1].split(',').map(Number));
    else for (const key of Object.keys(FORMATS)) await renderScene(browser, s, key);
  }
} finally {
  await browser.close();
}
