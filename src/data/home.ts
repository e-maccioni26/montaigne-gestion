export const secteurs = [
  'PARIS 8E', 'PARIS 2E', 'NEUILLY-SUR-SEINE', 'PARIS 17E',
  'PARIS 9E', 'BOULOGNE-BILLANCOURT', 'PARIS 16E', 'ASNIÈRES-SUR-SEINE',
]

export const annonces = [
  { type: 'Local professionnel', ville: 'Neuilly-sur-Seine', cp: '92200', prix: '12 000 €', img: '/images/local-pro-neuilly.jpg' },
  { type: 'Bureaux', ville: 'Neuilly-sur-Seine', cp: '92200', prix: '57 500 €', img: '/images/bureaux-neuilly.jpg' },
  { type: 'Bail commercial', ville: 'Paris 2e', cp: '75002', prix: '13 120 €', img: '/images/bail-paris02.jpg' },
]

export const etapes = [
  { icon: 'phone', titre: 'Premier échange', texte: 'Nous cernons votre besoin : surface, secteur, budget, calendrier.' },
  { icon: 'search', titre: 'Sélection et visites', texte: 'Nous vous présentons les locaux qui correspondent et organisons les visites.' },
  { icon: 'doc', titre: 'Négociation et dossier', texte: 'Nous négocions les conditions et préparons le bail ou la promesse.' },
  { icon: 'key', titre: 'Signature et clés', texte: 'Vous signez, vous emménagez. Nous restons joignables ensuite.' },
] as const

export const faq = [
  { q: 'Quels biens proposez-vous ?', a: 'Des bureaux, locaux commerciaux et professionnels, entrepôts, cessions de bail et parkings, à Paris et en proche banlieue.' },
  { q: 'Les loyers affichés sont-ils charges comprises ?', a: 'Oui, ils sont indiqués charges comprises (CC). Nos honoraires sont détaillés sur la page Honoraires.' },
  { q: 'Comment faire estimer mon local ?', a: "Remplissez le formulaire d'estimation gratuite ou appelez-nous. [DÉLAI DE RÉPONSE]" },
  { q: 'Je suis propriétaire, puis-je suivre mon bien en ligne ?', a: 'Oui, votre espace propriétaire est accessible depuis le pied de page du site.' },
]
