// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.paperhoneycombboard.com',
  trailingSlash: 'always',
  integrations: [
    sitemap({
      changefreq: 'weekly',
      lastmod: new Date(),
      priority: 0.7,
    }),
  ],
  output: 'static',
  // Force scripts into external files — the site's CSP (script-src 'self')
  // blocks inline <script> blocks, which Astro otherwise emits for small scripts
  vite: {
    build: { assetsInlineLimit: 0 },
  },
});
