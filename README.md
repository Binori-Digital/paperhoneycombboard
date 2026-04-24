# HexaEco Paper Honeycomb Board — Website

Fast, static Astro website for **www.paperhoneycombboard.com** — an industrial paper honeycomb board manufacturer serving Malaysia, Singapore, and global export markets.

## Pages

| Route | Description |
|---|---|
| `/` | Home — Industry Solutions (hero, stats, calculator, FAQ) |
| `/eco-lab/` | The Eco-Lab — Creative Structural Panels |
| `/regional/` | Regional — Johor Bahru & Singapore Export Solutions |
| `/combat-zone/` | Combat Zone — Paper vs Wood vs Plastic comparison |
| `/contact/` | Contact / Sample Kit request form |

## Tech Stack

- **Framework:** Astro (static output)
- **Styles:** Plain CSS (no Tailwind, zero runtime overhead)
- **Hosting:** Cloudflare Pages
- **Domain:** www.paperhoneycombboard.com (Cloudflare DNS)

## SEO / AEO / GEO

- JSON-LD structured data: Organization, Product, FAQPage, LocalBusiness, BreadcrumbList
- Geo meta tags (geo.region, geo.placename, ICBM) targeting Johor Bahru / Malaysia
- Auto-generated sitemap via `@astrojs/sitemap`
- robots.txt with sitemap reference
- Canonical URLs on every page
- Open Graph + Twitter Card tags
- Speakable schema for voice search (AEO)

## Deploy to Cloudflare Pages

1. Go to **Cloudflare Dashboard → Pages → Create a project**
2. Connect to GitHub repo: `Binori-Digital/paperhoneycombboard`
3. Set build settings:
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
4. Add custom domain: `www.paperhoneycombboard.com`
5. Cloudflare will handle SSL automatically

## Local Development

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # production build → ./dist/
npm run preview    # preview built site
```
