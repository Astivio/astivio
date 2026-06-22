// schema.ts — Données structurées Schema.org centralisées
// AEO/GEO : les données structurées JSON-LD sont le signal technique
// le plus important pour l'indexation par les LLM. Chaque type de
// schéma cible un type de compréhension différent par les moteurs IA.

import type { FAQItem } from './faq';

// ── Organisation — présent sur toutes les pages ───────────────────────
export const organizationSchema = {
  '@context':   'https://schema.org',
  '@type':      ['Organization', 'ProfessionalService'],
  name:          'Astivio',
  url:           'https://astivio.fr',
  logo:          'https://astivio.fr/favicon.svg',
  description:
    'Astivio est une agence française spécialisée en AEO et GEO pour les ostéopathes. Nous optimisons la visibilité des cabinets d\'ostéopathie sur les moteurs IA : ChatGPT, Google Gemini, Perplexity, Microsoft Copilot et Claude.',
  foundingDate:  '2024',
  areaServed:    'FR',
  serviceType:   ['AEO', 'GEO', 'SEO', 'Optimisation moteurs IA'],
  knowsAbout:    ['Ostéopathie', 'AEO', 'GEO', 'SEO', 'IA générative', 'ChatGPT', 'Perplexity'],
  contactPoint: {
    '@type':       'ContactPoint',
    contactType:   'customer service',
    email:         'contact@astivio.fr',
    availableLanguage: 'French',
  },
  sameAs: [
    'https://www.linkedin.com/company/astivio',
  ],
};

// ── Fil d'Ariane (Breadcrumb) — pages internes ───────────────────────
export function getBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    '@context':        'https://schema.org',
    '@type':           'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type':    'ListItem',
      position:   index + 1,
      name:       item.name,
      item:       item.url,
    })),
  };
}

// ── FAQ — sections de questions/réponses ──────────────────────────────
// Ce schéma permet aux LLM d'extraire directement les paires Q/R
// et de les citer dans leurs réponses.
export function getFAQSchema(items: FAQItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type':    'FAQPage',
    mainEntity: items.map((item) => ({
      '@type':          'Question',
      name:             item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text:    item.answer,
      },
    })),
  };
}

// ── Personne — page À propos, fondateur ──────────────────────────────
export const founderSchema = {
  '@context':   'https://schema.org',
  '@type':      'Person',
  name:          '[Prénom Nom]',
  jobTitle:      'Fondateur & Expert AEO/GEO',
  worksFor: {
    '@type': 'Organization',
    name:    'Astivio',
    url:     'https://astivio.fr',
  },
  description:
    'Fondateur d\'Astivio, spécialiste de la visibilité IA pour les professionnels de santé. Accompagne les ostéopathes dans leur transition vers l\'économie de la citation IA.',
  knowsAbout: ['AEO', 'GEO', 'SEO', 'IA générative', 'Ostéopathie', 'Marketing santé'],
  url:         'https://astivio.fr/a-propos',
};

// ── Article de blog ───────────────────────────────────────────────────
export function getBlogPostingSchema(post: {
  title:       string;
  description: string;
  url:         string;
  datePublished: string;
  dateModified:  string;
  image?:      string;
}) {
  return {
    '@context':      'https://schema.org',
    '@type':         'BlogPosting',
    headline:         post.title,
    description:      post.description,
    url:              post.url,
    datePublished:    post.datePublished,
    dateModified:     post.dateModified,
    image:            post.image ?? 'https://astivio.fr/og-default.png',
    author: {
      '@type': 'Person',
      name:    '[Prénom Nom]',
      url:     'https://astivio.fr/a-propos',
    },
    publisher: {
      '@type': 'Organization',
      name:    'Astivio',
      url:     'https://astivio.fr',
      logo: {
        '@type': 'ImageObject',
        url:     'https://astivio.fr/favicon.svg',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id':   post.url,
    },
  };
}
