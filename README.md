# Astivio — Site vitrine AEO/GEO pour ostéopathes

Site construit avec **Astro 4** + **Tailwind CSS**, optimisé AEO/GEO à la lettre.

---

## 1. Lancer le projet en local

```bash
# Installer les dépendances
npm install

# Démarrer le serveur de développement (http://localhost:4321)
npm run dev

# Construire pour la production
npm run build

# Prévisualiser le build de production
npm run preview
```

**Prérequis** : Node.js ≥ 18.

---

## 2. Structure du projet

```
astivio/
├── public/
│   ├── robots.txt          → Crawlers IA autorisés (GPTBot, ClaudeBot, PerplexityBot…)
│   ├── llms.txt            → Guide de découverte pour les LLM (standard émergent)
│   └── favicon.svg         → Logo SVG Astivio
│
├── src/
│   ├── layouts/
│   │   └── BaseLayout.astro        → Layout global (meta, JSON-LD, Nav, Footer)
│   │
│   ├── components/
│   │   ├── Nav.astro               → Navigation responsive avec menu mobile
│   │   ├── Footer.astro            → Pied de page
│   │   ├── FAQ.astro               → FAQ réutilisable + Schema FAQPage
│   │   ├── CTABlock.astro          → Bloc d'appel à l'action
│   │   ├── PricingCard.astro       → Carte de tarification
│   │   └── BlogCard.astro          → Carte d'aperçu d'article
│   │
│   ├── data/
│   │   ├── faq.ts                  → Questions FAQ (général, tarifs, méthode)
│   │   ├── offres.ts               → Contenu des 3 formules
│   │   └── schema.ts               → Générateurs de données structurées JSON-LD
│   │
│   ├── pages/
│   │   ├── index.astro             → Accueil
│   │   ├── offres.astro            → Offres & Tarifs
│   │   ├── methode.astro           → Méthode AEO/GEO
│   │   ├── etudes-de-cas.astro     → Études de cas / Réalisations
│   │   ├── a-propos.astro          → À propos (Schema Person)
│   │   ├── contact.astro           → Contact & Prise de RDV
│   │   ├── 404.astro               → Page d'erreur
│   │   └── blog/
│   │       ├── index.astro
│   │       ├── pourquoi-les-osteophates-perdent-des-clients-face-a-ia.astro
│   │       ├── etre-cite-par-chatgpt-en-2026.astro
│   │       └── aeo-geo-seo-guide-complet.astro
│   │
│   └── styles/
│       └── global.css              → Variables, composants Tailwind
│
├── astro.config.mjs
├── tailwind.config.mjs
└── package.json
```

---

## 3. Modifier le contenu

### Textes de la page d'accueil
→ [src/pages/index.astro](src/pages/index.astro)

Les sections sont commentées dans le fichier. Recherchez les blocs :
- `<!-- HERO -->` pour le titre principal et le sous-titre
- `<!-- BLOC PROBLÈME -->` pour la section narrative
- `<!-- RÉSULTATS -->` pour les témoignages

### Questions FAQ
→ [src/data/faq.ts](src/data/faq.ts)

Modifiez les tableaux `faqGeneral`, `faqTarifs`, `faqMethode`.
⚠️ Chaque modification est automatiquement répercutée dans les JSON-LD Schema FAQPage.

### Formules et tarifs
→ [src/data/offres.ts](src/data/offres.ts)

Modifiez l'objet `offres` pour changer prix, features, descriptions.

---

## 4. Remplacer les placeholders

| Placeholder | Fichier(s) | Remplacement |
|---|---|---|
| `[Prénom Nom]` | `src/pages/a-propos.astro`, `src/data/schema.ts`, tous les articles blog | Votre prénom et nom |
| `[LIEN_CALENDLY]` | `src/pages/contact.astro` | URL Calendly ou Cal.com |
| `[Ville]` | `src/pages/etudes-de-cas.astro`, articles blog | Villes des clients |
| `[Photo à ajouter]` | `src/pages/a-propos.astro` | Remplacer le div placeholder par `<img>` |
| `contact@astivio.fr` | `src/components/Footer.astro`, `src/pages/contact.astro` | Votre email |
| Témoignages `[Texte à ajouter]` | `src/pages/index.astro`, `src/pages/etudes-de-cas.astro` | Témoignages réels |

### Intégrer Calendly
Dans [src/pages/contact.astro](src/pages/contact.astro), remplacez le bloc placeholder :

```html
<!-- Remplacer le div "Prise de rendez-vous" par : -->
<div
  class="calendly-inline-widget"
  data-url="https://calendly.com/VOTRE-NOM/audit-aeo-geo"
  style="min-width:320px;height:700px;"
></div>
<script src="https://assets.calendly.com/assets/external/widget.js" async></script>
```

### Ajouter votre photo (page À propos)
Dans [src/pages/a-propos.astro](src/pages/a-propos.astro), remplacez le bloc `div.aspect-square` par :

```html
<img
  src="/images/fondateur.jpg"
  alt="[Prénom Nom], fondateur d'Astivio"
  width="400"
  height="400"
  class="rounded-2xl w-full object-cover"
/>
```

Et placez votre photo dans `public/images/fondateur.jpg`.

---

## 5. Ajouter des études de cas
→ [src/pages/etudes-de-cas.astro](src/pages/etudes-de-cas.astro)

Modifiez le tableau `cas` en remplaçant les placeholders `[...]` par les vraies données.
Chaque cas suit la structure : `contexte`, `probleme`, `interventions[]`, `resultats[]`, `citation`.

---

## 6. Ajouter un article de blog

1. Créez `src/pages/blog/votre-slug.astro`
2. Copiez la structure d'un article existant (ex. `aeo-geo-seo-guide-complet.astro`)
3. Mettez à jour `src/pages/blog/index.astro` pour ajouter la carte dans la liste

Chaque article doit inclure :
- [ ] `getBlogPostingSchema()` dans les données structurées
- [ ] `getBreadcrumbSchema()` pour le fil d'Ariane
- [ ] Un bloc TL;DR extractible
- [ ] Les métadonnées auteur + dates (signaux E-E-A-T)
- [ ] Une FAQ en fin d'article avec `withSchema={true}`

---

## 7. Personnaliser la palette de couleurs

→ [tailwind.config.mjs](tailwind.config.mjs)

La couleur primaire est `brand-600: '#1E3A5F'`. Pour changer :
1. Modifiez l'échelle `brand` dans `tailwind.config.mjs`
2. L'accent émeraude est `emerald-500` (Tailwind natif) — changeable via `accentColor` dans la config

---

## 8. Déployer sur Vercel

```bash
# Option 1 : CLI Vercel
npm install -g vercel
vercel --prod

# Option 2 : Via GitHub
# Push sur votre repo GitHub, puis connectez-le à Vercel (vercel.com/import)
# Configuration automatique détectée pour Astro
```

**Variables d'environnement** : aucune variable requise pour le déploiement de base.

### Déployer sur Netlify
```bash
# Build command : npm run build
# Publish directory : dist
```

---

## 9. Vérifications post-déploiement

Une fois en ligne sur votre domaine `astivio.fr` :

- [ ] [Google Rich Results Test](https://search.google.com/test/rich-results) → vérifier les JSON-LD
- [ ] [Google PageSpeed Insights](https://pagespeed.web.dev/) → Lighthouse > 95
- [ ] Soumettre le sitemap dans [Google Search Console](https://search.google.com/search-console)
- [ ] Vérifier `https://astivio.fr/robots.txt` → accessible
- [ ] Vérifier `https://astivio.fr/llms.txt` → accessible
- [ ] Vérifier `https://astivio.fr/sitemap-index.xml` → généré
- [ ] Tester la navigation mobile sur iPhone et Android

---

## 10. Mise à jour des données Schema.org

Les données structurées sont centralisées dans [src/data/schema.ts](src/data/schema.ts).

Pensez à mettre à jour le `founderSchema` avec les vraies informations du fondateur dès que disponibles — c'est un signal E-E-A-T majeur pour le GEO.

---

*Projet Astivio — Site construit avec Astro 4 + Tailwind CSS.*
*Toutes les optimisations AEO/GEO sont documentées dans [OPTIMISATIONS-GEO.md](OPTIMISATIONS-GEO.md).*
