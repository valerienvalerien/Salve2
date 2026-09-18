#!/usr/bin/env python3
"""Exécute réellement les formules de PROJECTION-FINANCES-SALVERYS.xlsx et les compare au moteur.

tools/verify-xlsx.py ne compare que les valeurs MISES EN CACHE dans le fichier : elles
viennent du moteur, donc elles sont justes par construction et ne prouvent rien sur les
formules. Une plage décalée d'une ligne passerait cette vérification sans être vue, puis
donnerait un autre chiffre à la première ouverture dans Excel.

Ce script évalue les formules avec la bibliothèque `formulas`, sans Excel ni LibreOffice,
et compare le résultat au moteur JavaScript. C'est lui qui prouve que le classeur est juste.

    python3 tools/eval-xlsx.py
"""
import json
import subprocess
import sys
import warnings
from pathlib import Path

warnings.filterwarnings("ignore")

ROOT = Path(__file__).resolve().parent.parent
FICHIER = ROOT / "PROJECTION-FINANCES-SALVERYS.xlsx"
TOLERANCE = 0.01
NOM = FICHIER.stem.upper()


def moteur():
    js = """
import('./tools/finance-model.mjs').then(async M => {
  const { SCENARIOS } = await import('./tools/finance-scenarios.mjs');
  const deals = SCENARIOS.median;
  const rows = M.projectCash(deals, 24);
  process.stdout.write(JSON.stringify({
    rows, trough: M.summarize(rows).trough,
    monthlyResult: M.contributions(deals).monthlyResult,
    agent: M.monthlyAgentCost(), manager: M.monthlyManagerCost(),
  }));
});
"""
    out = subprocess.run(["node", "-e", js], cwd=ROOT, capture_output=True, text=True, check=True)
    return json.loads(out.stdout)


def main():
    import formulas

    attendu = moteur()
    print("Évaluation des formules (sans Excel ni LibreOffice)…")
    calcule = formulas.ExcelModel().loads(str(FICHIER)).finish().calculate()

    # Les clés de `formulas` ont la forme "'[FICHIER.XLSX]FEUILLE'!A1".
    index = {}
    for cle, val in calcule.items():
        if "]" in cle and "'!" in cle:
            feuille = cle.split("]", 1)[1].split("'!")[0].upper()
            index[(feuille, cle.split("'!")[1])] = val

    def lire(feuille, coord):
        v = index.get((feuille.upper(), coord))
        if v is None:
            return None
        try:
            v = v.value[0, 0]
        except Exception:
            pass
        try:
            return float(v)
        except (TypeError, ValueError):
            return None

    ecarts, compares = [], 0

    def compare(nom, feuille, coord, att):
        nonlocal compares
        obtenu = lire(feuille, coord)
        compares += 1
        if obtenu is None:
            ecarts.append(f"{nom} ({feuille}!{coord}) : la formule n'a pas pu être évaluée")
        elif abs(obtenu - float(att)) > TOLERANCE:
            ecarts.append(f"{nom} ({feuille}!{coord}) : formule {obtenu:,.2f} ≠ moteur {float(att):,.2f}")

    compare("Coût d'un agent", "HYPOTHÈSES", "B14", attendu["agent"])
    compare("Coût d'un manager", "HYPOTHÈSES", "B15", attendu["manager"])

    colonnes = [("B", "agents"), ("C", "managers"), ("D", "deposit"), ("E", "activation"),
                ("F", "invoiced"), ("G", "receipt"), ("K", "result"), ("L", "cash")]
    for i, rw in enumerate(attendu["rows"]):
        r = 6 + i
        for col, cle in colonnes:
            att = rw[cle]
            compare(f"M{i + 1} {cle}", "FLUX", f"{col}{r}", att)

    compare("Creux de trésorerie", "SYNTHÈSE", "B6", attendu["trough"])
    compare("Résultat mensuel", "CONTRIBUTION", "E20", attendu["monthlyResult"])
    compare("Résultat mensuel (synthèse)", "SYNTHÈSE", "B10", attendu["monthlyResult"])

    if ecarts:
        print(f"✗ {len(ecarts)} formule(s) sur {compares} ne donnent pas le résultat du moteur :")
        for e in ecarts[:25]:
            print("  ·", e)
        if len(ecarts) > 25:
            print(f"  … et {len(ecarts) - 25} autres")
        sys.exit(1)

    print(f"✓ {compares} formules évaluées et conformes au moteur, à moins de {TOLERANCE} € près.")


if __name__ == "__main__":
    main()
