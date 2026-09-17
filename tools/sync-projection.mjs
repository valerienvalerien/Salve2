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
const pagePath = join(here, '..', 'projection-finances-salverys.html');
const START = '// === MODELE FINANCIER : copie synchronisee de tools/finance-model.mjs ===';
const END = '// === FIN MODELE FINANCIER ===';

const model = readFileSync(join(here, 'finance-model.mjs'), 'utf8').trim();
const page = readFileSync(pagePath, 'utf8');
const i = page.indexOf(START), j = page.indexOf(END);
if (i < 0 || j < i) throw new Error('Marqueurs du moteur introuvables dans la page.');

const next = page.slice(0, i + START.length) + '\n' + model + '\n' + page.slice(j);
if (next === page) { console.log('Page déjà synchronisée.'); process.exit(0); }
writeFileSync(pagePath, next);
console.log('projection-finances-salverys.html : moteur synchronisé.');
