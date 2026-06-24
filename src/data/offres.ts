// offres.ts — Données des formules Astivio

export interface Offre {
  id:          string;
  name:        string;
  tagline:     string;
  note?:       string;
  price:       string;
  priceDetail: string;
  period:      string;
  highlighted: boolean;
  features:    string[];
  notIncluded: string[];
  cta:         string;
  ctaHref:     string;
}

export const offres: Offre[] = [
  {
    id:          'audit',
    name:        'Audit AEO/GEO',
    tagline:     'Diagnostic & plan d\'action',
    price:       '390',
    priceDetail: '',
    period:      'ponctuel',
    highlighted: false,
    features: [
      'Audit complet de votre visibilité sur ChatGPT, Perplexity, Gemini',
      'Analyse de vos données structurées actuelles',
      'Benchmark par rapport à 3 confrères concurrents',
      'Audit de réputation en ligne (Google, Doctolib, avis)',
      'Plan d\'action AEO/GEO priorisé (20-30 actions)',
      'Rapport PDF détaillé + présentation visio 60 min',
      'Accès illimité aux questions pendant 14 jours post-audit',
    ],
    notIncluded: [
      'Implémentation des optimisations',
      'Rédaction de contenu',
      'Suivi mensuel',
    ],
    cta:     'Réserver l\'audit',
    ctaHref: '/contact',
  },
  {
    id:          'optimisation',
    name:        'Optimisation complète',
    tagline:     'La formule qui change la donne',
    price:       '790',
    priceDetail: '+ 149 €/mois',
    period:      'setup + mensuel',
    highlighted: true,
    features: [
      'Tout l\'Audit AEO/GEO inclus',
      'Implémentation de toutes les données structurées Schema.org',
      'Rédaction de 5 pages de contenu AEO/GEO-optimisé',
      'Optimisation de votre Google Business Profile',
      'Création / optimisation Doctolib & plateformes paramédicales',
      'FAQ structurée calibrée sur les vraies questions patients IA',
      'Monitoring mensuel des citations IA (requêtes standardisées)',
      'Rapport de visibilité mensuel',
      'Ajustements continus inclus',
      'Support email prioritaire',
      'Accès prioritaire à la création de votre site web si vous n\'en avez pas encore',
    ],
    notIncluded: [],
    cta:     'Choisir cette formule',
    ctaHref: '/contact',
  },
  {
    id:          'pilotage',
    name:        'Pilotage continu',
    tagline:     'Dominant sur tous les moteurs IA',
    note:        'Accessible après l\'Optimisation complète',
    price:       '349',
    priceDetail: '',
    period:      'par mois',
    highlighted: false,
    features: [
      'Tout l\'Optimisation complète inclus',
      'Production mensuelle de 2 articles de blog AEO/GEO',
      'Monitoring hebdomadaire des citations (20+ requêtes tests)',
      'Veille concurrentielle IA mensuelle',
      'Optimisation des avis patients et stratégie de réputation',
      'Campagne de relations presse digitales (citations tierces)',
      'Réunion stratégique mensuelle 45 min',
      'Rapport exécutif mensuel avec recommandations',
      'Accès prioritaire aux nouvelles fonctionnalités Astivio',
      'Référent dédié — réponse sous 4h ouvrées',
    ],
    notIncluded: [],
    cta:     'Nous contacter',
    ctaHref: '/contact',
  },
];

// Comparatif features pour le tableau de la page Offres
export const compareFeatures = [
  { feature: 'Audit de visibilité IA',               audit: true,  opti: true,  pilotage: true  },
  { feature: 'Plan d\'action priorisé',              audit: true,  opti: true,  pilotage: true  },
  { feature: 'Implémentation Schema.org',            audit: false, opti: true,  pilotage: true  },
  { feature: 'Rédaction de contenu AEO/GEO',        audit: false, opti: '5 pages', pilotage: 'Illimité' },
  { feature: 'Optimisation Google Business Profile', audit: false, opti: true,  pilotage: true  },
  { feature: 'Monitoring mensuel',                   audit: false, opti: true,  pilotage: 'Hebdomadaire' },
  { feature: 'Articles de blog mensuels',            audit: false, opti: false, pilotage: '2/mois' },
  { feature: 'Stratégie de réputation patients',     audit: false, opti: false, pilotage: true  },
  { feature: 'Relations presse digitales',           audit: false, opti: false, pilotage: true  },
  { feature: 'Référent dédié',                       audit: false, opti: false, pilotage: true  },
];
