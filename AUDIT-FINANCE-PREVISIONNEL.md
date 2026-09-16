# Audit du prévisionnel financier — 2026-09-16

Le prévisionnel actif est `01-Strategie-Offre/FINANCE-PREVISIONNEL.md`, calculé par `tools/finance-model.mjs`. L'ancien audit, lié à l'ancien modèle, est conservé dans `99-Archives/AUDIT-FINANCE-PREVISIONNEL-REGISTRE-INTERNE-2026-09-15.md`.

## Corrections effectuées

| Sujet | Erreur ou ambiguïté corrigée | État actuel |
|---|---|---|
| Canal | Le direct médical et le poste commercial figuraient encore dans la trésorerie après leur retrait de la stratégie active | Scénarios MB uniquement, fondateur seul au départ |
| Rentabilité | L'ancien commentaire donnait +421 € pour 5 positions à 1 350 € et +2 450 € à 9, sans suivre les coûts actualisés ni le second manager | Calcul par contrat et par métier ; à 5 support au tarif réel 1 500 €, environ +2 407 €/mois avant coûts manquants ; à 9 support 1 350 €, 2 managers et environ +2 875 € |
| Seuil de 920 € | Présenté comme un plancher suffisant | Garde-fou de négociation seulement ; 1 support à 1 700 € est déficitaire de ~83 €/mois dans le cas isolé illustratif |
| Dépôt | Parfois lu comme couverture définitive de l'onboarding | Avance de cash créditée intégralement sur trois factures, distincte du coût d'onboarding |
| Besoin de capital | 25–30 k€ issu de scénarios caducs | Retiré ; creux calculé selon dates de signature explicites et solde de départ 0 € |
| Coûts réglementaires et marché | Taux, plafond, salaires de référence et comparatifs français cités sans validation actuelle | Paramètres de simulation, à vérifier auprès des organismes et sur pièces |

## Limites qui restent à lever

Les factures d'abonnement, bulletins de paie, paramètres CNaPS/organisme de santé, coûts de recrutement/onboarding, licences, assurance, comptabilité, frais de change, taxes, indemnités de rupture, solde bancaire et dettes ne sont pas fournis. Les prévisions ne sont donc pas des comptes et ne peuvent soutenir une décision de financement. Le modèle A mutualisé et la télésecrétariat MB à l'appel sont hors projection jusqu'à mesure de leur capacité requise.

Pour valider un deal, rapprocher le devis de `PRICING.md`, saisir son nombre de positions et ses dates réelles dans le simulateur, puis tester les retards d'encaissement et les coûts supplémentaires. Conserver le registre d'hypothèses et sa date de vérification avec chaque version présentée à un partenaire ou financeur.
