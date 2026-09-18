#!/usr/bin/env python3
"""Vérifie que PROJECTION-FINANCES-SALVERYS.xlsx calcule comme tools/finance-model.mjs.

Un classeur Excel qui recalcule sans erreur n'est pas pour autant juste : une plage
décalée d'une ligne produit un fichier propre et faux. Ce script compare, mois par mois,
les cellules du classeur au moteur JavaScript qui alimente les pages HTML.

    python3 tools/export-xlsx.py
    python3 <skill>/scripts/recalc.py PROJECTION-FINANCES-SALVERYS.xlsx 360
    python3 tools/verify-xlsx.py

Sort en erreur au premier écart supérieur à un centime.
"""
import json
import subprocess
import sys
from pathlib import Path

from openpyxl import load_workbook

ROOT = Path(__file__).resolve().parent.parent
FICHIER = ROOT / "PROJECTION-FINANCES-SALVERYS.xlsx"
TOLERANCE = 0.01


def moteur():
    js = """
import('./tools/finance-model.mjs').then(async M => {
  const { SCENARIOS } = await import('./tools/finance-scenarios.mjs');
  const deals = SCENARIOS.median;
  const rows = M.projectCash(deals, 24);
  const s = M.summarize(rows);
  process.stdout.write(JSON.stringify({
    cash: rows.map(r => r.cash),
    agents: rows.map(r => r.agents),
    managers: rows.map(r => r.managers),
    invoiced: rows.map(r => r.invoiced),
    receipt: rows.map(r => r.receipt),
    deposit: rows.map(r => r.deposit),
    trough: s.trough, troughMonth: s.troughMonth,
    monthlyResult: M.contributions(deals).monthlyResult,
    agent: M.monthlyAgentCost(), manager: M.monthlyManagerCost(),
  }));
});
"""
    out = subprocess.run(["node", "-e", js], cwd=ROOT, capture_output=True, text=True, check=True)
    return json.loads(out.stdout)


def main():
    if not FICHIER.exists():
        sys.exit(f"✗ {FICHIER.name} absent. Lancer d'abord tools/export-xlsx.py.")

    attendu = moteur()
    wb = load_workbook(FICHIER, data_only=True)
    flux, synth, contrib, hyp = wb["Flux"], wb["Synthèse"], wb["Contribution"], wb["Hypothèses"]

    ecarts = []

    def compare(nom, obtenu, attendu_):
        if obtenu is None:
            ecarts.append(f"{nom} : cellule vide — le classeur n'a pas été recalculé")
        elif abs(float(obtenu) - float(attendu_)) > TOLERANCE:
            ecarts.append(f"{nom} : classeur {float(obtenu):,.2f} ≠ moteur {float(attendu_):,.2f}")

    compare("Coût d'un agent", hyp["B14"].value, attendu["agent"])
    compare("Coût d'un manager", hyp["B15"].value, attendu["manager"])

    colonnes = [("B", "agents"), ("C", "managers"), ("D", "deposit"),
                ("F", "invoiced"), ("G", "receipt"), ("L", "cash")]
    for i in range(24):
        r = 6 + i
        for col, cle in colonnes:
            compare(f"Flux!{col}{r} (M{i + 1}, {cle})", flux[f"{col}{r}"].value, attendu[cle][i])

    compare("Synthèse : creux", synth["B6"].value, attendu["trough"])
    compare("Synthèse : mois du creux", synth["B7"].value, attendu["troughMonth"])
    compare("Synthèse : trésorerie M24", synth["B9"].value, attendu["cash"][-1])
    compare("Contribution : résultat mensuel", contrib["E20"].value, attendu["monthlyResult"])
    compare("Synthèse : résultat mensuel", synth["B10"].value, attendu["monthlyResult"])

    if ecarts:
        print(f"✗ {len(ecarts)} écart(s) entre le classeur et le moteur :")
        for e in ecarts[:25]:
            print("  ·", e)
        if len(ecarts) > 25:
            print(f"  … et {len(ecarts) - 25} autres")
        sys.exit(1)

    print(f"✓ Classeur conforme au moteur : {24 * len(colonnes) + 7} cellules comparées, "
          f"aucun écart au-delà de {TOLERANCE} €.")


if __name__ == "__main__":
    main()
