// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.paperhoneycombboard.com',
  trailingSlash: 'always',
  integrations: [
    sitemap({
      filter: (page) =>
        !page.includes('/privacy/') && !page.includes('/terms/'),
    }),
  ],
  output: 'static',
});
