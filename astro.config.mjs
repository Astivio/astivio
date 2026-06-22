// astro.config.mjs
// AEO/GEO : output:'static' génère du HTML pur indexable par les crawlers IA
// (GPTBot, ClaudeBot, PerplexityBot) sans nécessiter l'exécution de JavaScript.
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // URL canonique — utilisée par @astrojs/sitemap et les balises OG
  site: 'https://astivio.fr',
  integrations: [
    tailwind(),
    // Génère /sitemap-index.xml automatiquement au build.
    // Ce sitemap est référencé dans robots.txt pour les crawlers IA.
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
    }),
  ],
  output: 'static',
});
