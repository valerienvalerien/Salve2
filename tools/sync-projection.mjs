/** Recopie tools/finance-model.mjs dans projection-finances-salverys.html.
 *
 * La page doit fonctionner en double-clic (protocole file://), où un import de module
 * externe est bloqué par le navigateur. Le moteur y est donc embarqué, mais il n'est
 * écrit qu'à un seul endroit : ce script l'injecte, et finance-model.test.mjs échoue
 * si la copie dérive de la source.
 *
 * Usage : node tools/sync-projection.mjs
 */
import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const here = dirname(fileURLToPath(import.meta.url));

/** Pages qui embarquent le moteur. Toute page ajoutée ici est vérifiée par le test. */
export const PAGES = ['projection-finances-salverys.html', 'grille-negociation-salverys.html'];

export const START = '// === MODELE FINANCIER : copie synchronisee de tools/finance-model.mjs ===';
export const END = '// === FIN MODELE FINANCIER ===';

const model = readFileSync(join(here, 'finance-model.mjs'), 'utf8').trim();
let touchees = 0;

for (const nom of PAGES) {
  const chemin = join(here, '..', nom);
  const page = readFileSync(chemin, 'utf8');
  const i = page.indexOf(START), j = page.indexOf(END);
  if (i < 0 || j < i) throw new Error(`Marqueurs du moteur introuvables dans ${nom}.`);
  const next = page.slice(0, i + START.length) + '\n' + model + '\n' + page.slice(j);
  if (next === page) continue;
  writeFileSync(chemin, next);
  console.log(`${nom} : moteur synchronisé.`);
  touchees++;
}

if (!touchees) console.log('Pages déjà synchronisées.');
