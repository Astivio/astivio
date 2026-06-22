# OPTIMISATIONS AEO/GEO — Astivio

Ce document recense **chaque optimisation AEO/GEO implémentée** sur ce site,
avec l'explication du pourquoi. Il sert à la fois de documentation technique
et de support commercial pour expliquer la méthode aux clients ostéopathes.

---

## 1. HTML sémantique strict

**Fichier(s) concerné(s)** : tous les fichiers `.astro`

**Ce qui est implémenté** :
- Un seul `<h1>` par page (règle absolue de hiérarchie AEO)
- Hiérarchie logique `h1 > h2 > h3` sans sauts de niveau
- Balises sémantiques HTML5 : `<main>`, `<article>`, `<section>`, `<nav>`, `<header>`, `<footer>`, `<aside>`
- `<time datetime="...">` pour les dates (lisible par les crawlers)
- `<figure>` et `<figcaption>` pour les images (non encore présentes dans les placeholders)
- `aria-labelledby` sur les sections sans titre visible

**Pourquoi c'est important** :
Les crawlers IA lisent le HTML comme du texte structuré. Une hiérarchie de titres
cohérente aide le LLM à comprendre l'architecture informationnelle d'une page —
et donc à en extraire les informations pertinentes avec précision.
Un H1 unique par page signale clairement le sujet principal de la page.

---

## 2. Données structurées Schema.org (JSON-LD)

**Fichier(s) concerné(s)** :
- `src/data/schema.ts` (générateurs centralisés)
- `src/layouts/BaseLayout.astro` (injection sur toutes les pages)
- `src/components/FAQ.astro` (Schema FAQPage)
- Pages blog (Schema BlogPosting)

**Types implémentés** :

| Schema | Pages | Objectif |
|---|---|---|
| `Organization` + `ProfessionalService` | Toutes | Identité de l'agence, type de service |
| `Person` | À propos | Fondateur, crédentials, expertise |
| `FAQPage` | Accueil, Offres, Méthode, articles blog | Extraction Q/R par les LLM |
| `BreadcrumbList` | Toutes les pages internes | Structure de navigation |
| `BlogPosting` | Articles blog | Indexation des articles avec auteur et dates |

**Pourquoi c'est important** :
Le JSON-LD est la méthode recommandée par Google et le format compris nativement
par les crawlers IA. Il permet aux LLM de comprendre le TYPE d'entité qu'ils
indexent, pas juste le texte brut. Un `ProfessionalService` schema décrit
explicitement ce qu'est Astivio, ses services, et sa zone géographique —
rendant cette information extractible dans les réponses IA.

---

## 3. Sections FAQ structurées

**Fichier(s) concerné(s)** :
- `src/data/faq.ts` (questions centralisées)
- `src/components/FAQ.astro` (composant réutilisable)

**Ce qui est implémenté** :
- 8 questions générales AEO/GEO sur la page d'accueil
- 4 questions tarifaires sur la page Offres
- 2 questions sur la méthode
- 3 FAQ par article de blog
- Toutes les questions formulées comme un humain les poserait à une IA
- Réponses courtes, directes, auto-suffisantes (sens préservé hors contexte)
- Schema FAQPage JSON-LD injecté sur chaque occurrence
- Implémentation `<details>/<summary>` : contenu présent dans le DOM même avant interaction

**Pourquoi c'est important** :
Les sections FAQ sont le type de contenu le plus souvent extrait et cité
par les LLM. Une paire Q/R bien formulée est la forme idéale de l'information
pour un LLM : une question correspond exactement à ce que l'utilisateur pourrait
demander, et la réponse est déjà structurée pour être utilisée directement.
L'implémentation `<details>` garantit que le contenu est dans le HTML source
même sans JavaScript — essentiel car de nombreux crawlers IA n'exécutent pas JS.

---

## 4. Blocs TL;DR (résumés extractibles)

**Fichier(s) concerné(s)** : toutes les pages de contenu long

**Ce qui est implémenté** :
- Bloc TL;DR en début de chaque page et article
- Formulé en phrases auto-suffisantes (3-5 points)
- Stylistiquement distinct (bordure émeraude, fond brand-50)
- Classe CSS `.tldr` réutilisable (définie dans `global.css`)

**Pourquoi c'est important** :
Quand un LLM accède à une page longue, il en extrait souvent le début ou
les passages les plus denses en information. Un TL;DR bien positionné
augmente considérablement la probabilité que l'essence du contenu soit
capturée et citée correctement. C'est aussi un excellent signal UX
pour les visiteurs humains.

---

## 5. Signaux E-E-A-T (Expérience, Expertise, Autorité, Fiabilité)

**Fichier(s) concerné(s)** :
- `src/pages/a-propos.astro` (profil fondateur)
- `src/pages/blog/*.astro` (auteur + dates sur chaque article)
- `src/data/schema.ts` (Schema Person, Organization)

**Ce qui est implémenté** :
- Auteur identifié avec lien vers la page À propos sur chaque article
- Dates de publication ET de mise à jour sur chaque contenu
- Balises `<time datetime="ISO-8601">` pour les dates (lisibles par les crawlers)
- Crédentials du fondateur listés sur la page À propos
- Sources citées pour chaque statistique affirmée
- Note de transparence sur les limites des garanties (page Offres)
- Schema Person avec `knowsAbout`, `jobTitle`, `worksFor`

**Pourquoi c'est important** :
Google classe les contenus de santé dans la catégorie YMYL (Your Money Your Life)
qui requiert un niveau E-E-A-T élevé. Les LLM qui s'alimentent des crawls Google
utilisent ces signaux pour évaluer la crédibilité d'une source. Un praticien
non identifié, sans dates, sans sources a peu de chances d'être recommandé
sur des requêtes médicales par un LLM bien calibré.

---

## 6. Fichier llms.txt

**Fichier** : `public/llms.txt`

**Ce qui est implémenté** :
- Description de l'agence en langue naturelle structurée
- Liste des pages importantes avec URLs absolues
- Description des services, de la cible, du domaine d'expertise
- Note explicite à destination des LLM expliquant les optimisations du site
- Format Markdown (lisible par les LLM)

**Pourquoi c'est important** :
Le fichier `llms.txt` est un standard émergent (inspiré de `robots.txt`)
qui permet à un site de se décrire directement aux LLM, en leur indiquant
quelles pages sont les plus importantes et quel est l'objet du site.
Certains LLM avec accès web commencent à l'utiliser pour enrichir leur
compréhension d'un site avant de le citer. C'est un signal de premier mover
important à ce stade.

---

## 7. robots.txt — Crawlers IA autorisés

**Fichier** : `public/robots.txt`

**Ce qui est implémenté** :
- Autorisation explicite des crawlers IA : GPTBot, ChatGPT-User, ClaudeBot,
  Claude-Web, PerplexityBot, Google-Extended, CCBot, Applebot-Extended, Meta-ExternalAgent, cohere-ai
- Référence au sitemap XML et au llms.txt
- Commentaires expliquant le rôle de chaque crawler

**Pourquoi c'est important** :
Sans directive explicite, certains crawlers IA peuvent hésiter à indexer un site
ou l'exclure par précaution. En autorisant explicitement chacun, on envoie un signal
clair de coopération — et on évite tout blocage involontaire par une directive
mal configurée (ex. un `Disallow: *` trop large).

---

## 8. Sitemap XML

**Fichier(s) concerné(s)** : `astro.config.mjs` (intégration `@astrojs/sitemap`)

**Ce qui est implémenté** :
- Génération automatique de `/sitemap-index.xml` au build
- Toutes les pages publiques incluses automatiquement
- `changefreq: 'weekly'` et `priority: 0.7` pour les crawlers
- Référencé dans `robots.txt` et dans le `<head>` de chaque page

**Pourquoi c'est important** :
Le sitemap est le document qui garantit que tous les crawlers (Google, Bing,
et par extension les LLM qui s'alimentent de leurs indexes) peuvent découvrir
toutes les pages du site. Sans sitemap, certaines pages peuvent ne jamais
être crawlées — et donc jamais indexées par les LLM.

---

## 9. Métadonnées complètes

**Fichier(s) concerné(s)** : `src/layouts/BaseLayout.astro`

**Ce qui est implémenté** :
- `<title>` optimisé par page avec format "Titre page | Astivio"
- `<meta name="description">` unique par page (150-160 caractères)
- `<link rel="canonical">` dynamique sur chaque page
- Open Graph complet : `og:title`, `og:description`, `og:image`, `og:url`, `og:locale`, `og:site_name`
- Twitter Cards : `twitter:card`, `twitter:title`, `twitter:description`, `twitter:image`
- `<link rel="sitemap">` dans le head

**Pourquoi c'est important** :
Les balises Open Graph sont utilisées par les aperçus de liens dans les LLM
qui affichent des citations avec preview (Perplexity, ChatGPT Search).
La balise canonical prévient l'indexation de contenu dupliqué — problème
fréquent avec les URLs avec/sans trailing slash ou avec paramètres UTM.

---

## 10. Performance (score Lighthouse > 95)

**Fichier(s) concerné(s)** : `tailwind.config.mjs`, `global.css`, `BaseLayout.astro`

**Ce qui est implémenté** :
- Astro génère du HTML statique sans JS superflu (zero-JS par défaut)
- Tailwind purge automatiquement le CSS inutilisé au build
- Fonts Google avec `display=swap` et `preconnect`
- `loading="lazy"` prévu pour les images (à appliquer aux `<img>` réelles)
- Animations légères via Tailwind (pas de bibliothèques externes)
- Pas de framework JS côté client pour le rendu de contenu

**Pourquoi c'est important** :
La vitesse de chargement est un facteur de classement Google (Core Web Vitals)
et un signal de qualité utilisé par les crawlers. Un site lent ou instable
est moins bien indexé, ce qui réduit sa présence dans les données d'entraînement
des LLM. Astro est le framework idéal pour ça : il génère du HTML pur
sans client-side rendering.

---

## 11. Accessibilité

**Fichier(s) concerné(s)** : tous les composants

**Ce qui est implémenté** :
- `aria-label` sur tous les éléments interactifs sans texte visible
- `aria-current="page"` sur le lien actif dans la navigation
- `aria-expanded` sur le bouton hamburger mobile
- `role="list"` sur les `<ul>` qui servent de listes de navigation
- `aria-hidden="true"` sur les éléments décoratifs (SVG, compteurs, etc.)
- `:focus-visible` personnalisé pour la navigation clavier
- Contrastes conformes WCAG AA (fond blanc + texte `slate-900`)
- Bouton hamburger accessible au clavier

**Pourquoi c'est important** :
L'accessibilité améliore le score Lighthouse, qui est un indicateur de qualité
pris en compte par les crawlers Google. Plus directement : un HTML accessible
est un HTML sémantiquement riche — ce qui bénéficie directement à la compréhension
par les LLM.

---

## 12. Contenu rédigé pour être cité

**Fichier(s) concerné(s)** : tous les articles de blog, toutes les pages de contenu

**Ce qui est implémenté** :
- Phrases auto-suffisantes : chaque affirmation importante garde son sens hors contexte
- Statistiques chiffrées et sourcées dans chaque article
- Définitions explicites en début de section (ex. "L'AEO (Answer Engine Optimization) est...")
- Exemples concrets illustrant chaque concept
- Conclusions synthétiques en fin d'article
- Vocabulaire non ambigu (pas de pronoms sans antécédent pour les passages clés)

**Pourquoi c'est important** :
Quand un LLM extrait une information d'une page pour l'inclure dans une réponse,
il la sort de son contexte. Une phrase comme « C'est très efficace » ne vaut rien
hors contexte. Une phrase comme « L'ostéopathie réduit les douleurs lombaires
chroniques de 30% selon une méta-analyse de 2023 (Spine Journal) » reste utile
et citée en toutes circonstances.

---

## Récapitulatif — Checklist pour vos clients

| Optimisation | Statut | Fichier |
|---|---|---|
| Un seul H1 par page | ✅ Implémenté | Toutes les pages |
| HTML sémantique (section, article, main…) | ✅ Implémenté | Tous les fichiers |
| Schema Organization | ✅ Implémenté | BaseLayout.astro |
| Schema ProfessionalService | ✅ Implémenté | schema.ts |
| Schema FAQPage | ✅ Implémenté | FAQ.astro + pages |
| Schema BreadcrumbList | ✅ Implémenté | Pages internes |
| Schema Person (fondateur) | ✅ Implémenté (à compléter) | a-propos.astro |
| Schema BlogPosting | ✅ Implémenté | Articles blog |
| Sections FAQ structurées | ✅ Implémenté | FAQ.astro + data/faq.ts |
| Blocs TL;DR extractibles | ✅ Implémenté | Pages + articles |
| Signaux E-E-A-T | ✅ Implémenté (à compléter) | a-propos.astro + articles |
| Auteur identifié sur chaque contenu | ✅ Implémenté (placeholder) | Articles blog |
| Dates publication + mise à jour | ✅ Implémenté | Articles blog |
| Sources citées | ✅ Implémenté | Articles blog |
| llms.txt | ✅ Implémenté | public/llms.txt |
| robots.txt avec crawlers IA | ✅ Implémenté | public/robots.txt |
| Sitemap XML | ✅ Auto-généré | astro.config.mjs |
| Balise canonical | ✅ Implémenté | BaseLayout.astro |
| Open Graph complet | ✅ Implémenté | BaseLayout.astro |
| Twitter Cards | ✅ Implémenté | BaseLayout.astro |
| Performance Lighthouse > 95 | ✅ Architecture optimisée | Astro statique |
| Accessibilité WCAG AA | ✅ Implémenté | Tous composants |
| Contenu auto-suffisant | ✅ Implémenté | Articles + pages |
| Phrases sourcées et chiffrées | ✅ Implémenté | Articles blog |

**À compléter par le client** :
- [ ] Remplacer `[Prénom Nom]` par les vraies informations du fondateur
- [ ] Ajouter la photo du fondateur (`public/images/fondateur.jpg`)
- [ ] Intégrer Calendly ou Cal.com sur la page Contact
- [ ] Compléter les études de cas avec les vrais résultats clients
- [ ] Remplacer les témoignages placeholder par des témoignages réels
- [ ] Mettre à jour `contact@astivio.fr` par l'email définitif
- [ ] Compléter `public/llms.txt` avec les vraies informations
- [ ] Vérifier le Schema `founderSchema` dans `src/data/schema.ts`

---

*Ce document est également un support commercial : il liste concrètement
ce qu'Astivio implémente pour ses clients, avec l'explication du pourquoi
pour chaque action. Utilisez-le pour démontrer la valeur de la méthode.*
