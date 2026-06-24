// faq.ts — Questions FAQ centralisées
// AEO/GEO : chaque question est formulée exactement comme un patient
// (ou un confrère) la poserait à une IA. Les réponses sont courtes,
// directes et auto-suffisantes (sens préservé hors contexte).

export interface FAQItem {
  question: string;
  answer:   string;
}

// ── FAQ page d'accueil — questions générales AEO/GEO ─────────────────
export const faqGeneral: FAQItem[] = [
  {
    question: "Qu'est-ce que l'AEO/GEO et pourquoi mon cabinet d'ostéopathie en a besoin ?",
    answer:
      "L'AEO (Answer Engine Optimization) et le GEO (Generative Engine Optimization) sont des techniques qui optimisent votre visibilité dans les réponses des moteurs IA comme ChatGPT, Perplexity ou les AI Overviews de Google. En 2026, une part croissante des patients cherche un ostéopathe directement via ces interfaces IA plutôt que via une recherche Google classique. Sans optimisation AEO/GEO, votre cabinet est absent de ces recommandations, même si votre site web est bien référencé en SEO traditionnel.",
  },
  {
    question: "Comment ChatGPT décide-t-il quel ostéopathe recommander ?",
    answer:
      "ChatGPT et les autres LLM s'appuient sur plusieurs signaux pour recommander un professionnel : la richesse et la crédibilité du contenu en ligne (site web structuré, articles de blog, FAQ), les données structurées Schema.org, la réputation sur des plateformes tierces (Google Business Profile, Doctolib, Pages Jaunes), le volume et la qualité des avis patients, et les mentions dans des sources faisant autorité. Astivio optimise l'ensemble de ces signaux pour votre cabinet.",
  },
  {
    question: "Quelle est la différence entre le SEO classique et l'AEO/GEO ?",
    answer:
      "Le SEO classique vise à positionner votre site en haut des résultats de recherche Google pour qu'un internaute clique dessus. L'AEO/GEO vise à ce que les moteurs IA (ChatGPT, Perplexity, Gemini) vous citent directement dans leur réponse, sans que l'utilisateur ait besoin de cliquer. L'objectif n'est pas le clic, c'est la recommandation. Astivio associe les deux approches car les fondations SEO restent nécessaires pour alimenter les IA.",
  },
  {
    question: "En combien de temps voit-on des résultats sur les moteurs IA ?",
    answer:
      "Les premiers résultats observables (apparition dans les réponses Perplexity, mises à jour des AI Overviews Google) interviennent généralement entre 30 et 90 jours après l'implémentation des optimisations. ChatGPT et Claude ont des cycles d'entraînement moins fréquents : comptez 3 à 6 mois pour une présence significative. Astivio monitore votre visibilité IA chaque mois et ajuste la stratégie en continu.",
  },
  {
    question: "Pouvez-vous garantir que mon cabinet sera recommandé par ChatGPT ?",
    answer:
      "Non — et méfiez-vous de toute agence qui prétend le contraire. Aucun prestataire ne peut garantir un placement dans les réponses d'un LLM, car les algorithmes sont propriétaires et évoluent constamment. Ce qu'Astivio garantit, c'est l'optimisation de tous les facteurs de probabilité identifiés : signaux de crédibilité, structuration du contenu, réputation en ligne, données structurées. C'est l'approche honnête et durable.",
  },
  {
    question: "Quels moteurs IA visez-vous concrètement ?",
    answer:
      "Astivio optimise votre visibilité sur : ChatGPT (OpenAI), les AI Overviews de Google (Gemini), Perplexity AI, Microsoft Copilot (Bing), et Claude (Anthropic). Ces cinq interfaces représentent aujourd'hui l'essentiel du trafic IA des internautes français à la recherche d'un professionnel de santé.",
  },
  {
    question: "Mon cabinet peut-il bénéficier de l'AEO/GEO si je n'ai pas de site web ?",
    answer:
      "Un site web optimisé est la fondation indispensable de toute stratégie AEO/GEO — c'est la principale source d'information que les IA indexent sur votre cabinet. Si vous n'en avez pas, Astivio peut vous accompagner dans la création d'un site vitrine AEO/GEO-ready avant de lancer l'optimisation. En attendant, nous pouvons travailler sur vos profils tiers (Google Business Profile, Doctolib).",
  },
  {
    question: "Astivio travaille-t-il avec d'autres professionnels de santé que les ostéopathes ?",
    answer:
      "Astivio est actuellement focalisée exclusivement sur les ostéopathes. Cette spécialisation nous permet de maîtriser les requêtes spécifiques des patients en ostéopathie, les plateformes de référence du secteur (Doctolib, OstéoFrance, etc.) et les contraintes déontologiques de la profession. Nous prévoyons d'étendre notre expertise à d'autres paramédicaux libéraux en 2027.",
  },
];

// ── FAQ page Offres — questions tarifaires ────────────────────────────
export const faqTarifs: FAQItem[] = [
  {
    question: "Par quelle formule commencer pour un cabinet d'ostéopathie qui démarre ?",
    answer:
      "L'Audit AEO/GEO (390 €) est le point d'entrée recommandé. Il permet d'obtenir un diagnostic précis de votre visibilité actuelle sur les moteurs IA et un plan d'action priorisé, sans engagement. La majorité de nos clients passent ensuite à la formule Optimisation complète (790 € + 149 €/mois) pour implémenter le plan.",
  },
  {
    question: "La formule Optimisation complète inclut-elle la création de contenu ?",
    answer:
      "Oui. La formule Optimisation complète inclut la rédaction de contenu AEO/GEO-optimisé (FAQ structurée, pages de services, biographie professionnelle), l'implémentation des données structurées Schema.org, l'optimisation de votre Google Business Profile et un premier suivi de visibilité à 30 et 90 jours.",
  },
  {
    question: "Quelle est la durée d'engagement pour le Pilotage continu ?",
    answer:
      "Le Pilotage continu est un abonnement mensuel sans engagement de durée minimum au-delà des 3 premiers mois. Nous recommandons une durée minimale de 6 mois pour observer des tendances significatives sur les LLM à cycle d'entraînement long (ChatGPT, Claude).",
  },
  {
    question: "Y a-t-il des coûts cachés en plus des tarifs affichés ?",
    answer:
      "Non. Les tarifs affichés sont tout compris (hors éventuelles souscriptions tierces que vous choisiriez : Doctolib Premium, logiciel de prise de RDV, etc.). Astivio ne pratique pas de frais de setup ni de commission sur les outils recommandés.",
  },
];

// ── FAQ page Méthode ──────────────────────────────────────────────────
export const faqMethode: FAQItem[] = [
  {
    question: "Qu'est-ce qui différencie la méthode Astivio des autres agences SEO ?",
    answer:
      "La méthode Astivio est construite exclusivement pour les moteurs IA, pas pour Google Search. Nous ne cherchons pas à placer votre site en position 1 des résultats Google (même si ça peut arriver en bonus) — nous cherchons à faire en sorte que ChatGPT, Perplexity et Gemini vous recommandent nommément quand un patient leur demande un ostéopathe. C'est un objectif fondamentalement différent qui requiert des techniques différentes.",
  },
  {
    question: "Comment mesurez-vous concrètement la visibilité sur les moteurs IA ?",
    answer:
      "Nous utilisons une combinaison de requêtes de test standardisées (ex. : « Quel ostéopathe consulter à [ville] ? », « Recommande-moi un ostéopathe pour douleur lombaire »), de monitoring de mentions sur les principales plateformes IA, et d'analyse des données structurées indexées. Chaque rapport mensuel inclut un score de présence IA, le détail des requêtes testées et les mentions obtenues.",
  },
];
