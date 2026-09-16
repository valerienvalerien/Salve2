/** Scénarios de travail, à remplacer par le pipeline signé ; aucune probabilité assignée. */
export const SCENARIOS = Object.freeze({
  attente: [],
  prudent: [{ signedMonth: 4, metier: 'helpdesk', positions: 1 }],
  median: [{ signedMonth: 4, metier: 'helpdesk', positions: 2 }, { signedMonth: 9, metier: 'support', positions: 2 }],
  expansion: [{ signedMonth: 3, metier: 'helpdesk', positions: 3 }, { signedMonth: 7, metier: 'support', positions: 3 }, { signedMonth: 10, metier: 'helpdesk', positions: 3 }],
});
