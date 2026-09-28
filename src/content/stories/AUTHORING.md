# Story post authoring rules

The Story blog at www.paperhoneycombboard.com/story/ publishes **one topic per day** in
**three languages: English, Bahasa Malaysia and Simplified Chinese**. Each topic lives in one
file, `post-NN-short-name.ts`, with all three languages inside it. Posts are date-gated: a post
whose `date` is in the future stays in the queue and goes live automatically on that day when the
site rebuilds. Anyone or anything writing posts (a person, a scheduled agent) must follow this
file exactly. Accuracy matters more than volume: this is a real manufacturer's website.

## What the blog is about

Use of paper honeycomb board (and honeycomb pallets, boxes, crates, panels), its benefits and its
cost saving, in these industries, **rotating in this order, one per day**:

1. Industrial packaging and export (pallets, crates, layer pads, dunnage, machinery, automotive, electronics, furniture, white goods)
2. Art and craft (sculpture, model making, schools, studios, cosplay and props, theatre)
3. Decorations (events, weddings, retail visual merchandising, window displays, seasonal and festive displays, photo walls, giant letters)
4. Exhibition (trade show stands, roadshows, mall activations, museum and gallery displays, pop-up shops)
5. Printing (rigid print substrate, signage, point-of-sale displays, standees, FSDUs, packaging print, laminated graphics)

Before choosing an angle, list the existing files in `src/content/stories/` and read their
`slug` lines so the new post covers a **fresh angle** — never a rewrite of an existing one.

## Facts you may state (verified)

- Wooden export pallet ~25kg; honeycomb pallet ~5kg; **up to 80% lighter**; ~20kg saved per pallet
- Air freight ~US$4.50/kg (~RM20/kg) → ~US$90 (~RM400) per pallet position saved. 250 pallets/month ≈ RM100,000/month. Always say "at a typical rate" and "illustrative"
- Engineered honeycomb compression strength ~12kN
- Paper honeycomb is **exempt from ISPM-15** (no heat treatment, fumigation, IPPC stamp or certificate)
- 100% recyclable in ordinary paper/cardboard recycling; mono-material kraft paper
- 24,000+ USDA wood packaging interceptions in 2025; 47 countries restrict methyl bromide; EU PPWR is in force
- Sheet thickness range 10mm to 50mm; sheet size up to 2.4m x 1.2m; made in Balakong, Selangor, Malaysia by Quinocycle Sdn Bhd (brand phb)
- Contact: WhatsApp +6016-891 6381, sales@quinocycle.com

## Facts you must never state

- Standard honeycomb is **not waterproof** and **not ESD-safe**. Say coated/laminated builds handle humidity; wet duty suits plastic or treated plywood.
- No customer names, testimonials, quotes, case studies presented as real, awards, certifications, or market-share claims. A scenario is fine when labelled **"illustrative"**.
- No delivery-time promises (same-day, next-day, "our trucks"), no lead times, no unit prices.
- No claims about competitors. No invented statistics. If a number is not in the verified list, do not use it.

## File structure

Copy the shape of `post-16-printing.ts`. Required top-level fields: `slug`, `date`, `image`,
`related` (exactly 2 existing slugs from other posts, preferably one from the same industry and one
from another), `i18n` with `en`, `ms`, `zh`. Do **not** add `ja`/`ko`/`th`/`es`/`fr`.

Per language (`PostBody`):

| field | rule |
|---|---|
| `title` | EN 55–70 chars, BM ≤ 80, ZH ≤ 32 chars. Contains the main long-tail keyword. No clickbait |
| `description` | EN/BM 150–200 chars, ZH ≤ 80. States the answer, not a teaser |
| `excerpt` | one or two sentences, the hook shown on the index card |
| `intro` | 2 paragraphs. The first paragraph answers the question the title asks (AEO) |
| `sections` | 4 sections, each `h` (a question or a plain-language claim) + 1–2 paragraphs `p`. One section must be honest limits ("where it is the wrong choice") |
| `takeaways` | exactly 5, each one sentence, each stands alone (AI-extractable) |
| `faq` | exactly 3, questions people actually type; answers 40–70 words that stand alone without the article |
| `ctaTitle`, `ctaText`, `ctaPrimary`, `ctaSecondary` | primary = the enquiry action (sample kit / quote / review); secondary = a product page label. Links are added by the template |
| `imageAlt` | literal description of the photo, in that language |
| `tags` | 4–5 long-tail phrases in that language (e.g. "honeycomb board exhibition stand", "papan honeycomb reruai pameran", "蜂窝纸板 展台") |
| labels | copy exactly: EN `Continue reading` / `Key takeaways` / `Frequently asked questions` / `min read`; BM `Teruskan membaca` / `Intipati penting` / `Soalan lazim` / `minit bacaan`; ZH `继续阅读` / `要点速览` / `常见问题` / `分钟阅读` |

`slug`: lowercase, hyphenated, contains the keyword, 4–8 words, unique.
`date`: the day **after the latest existing post date** (YYYY-MM-DD). One post per date, no gaps.

## Language quality

- **BM**: standard Bahasa Malaysia (Dewan Bahasa spelling): "kualiti" not "kualitas", "peratus", "kos", "pembungkusan", "tambang". Technical words that have no common BM form may stay in English (honeycomb, foam, ISPM-15, POS, ESG).
- **ZH**: Simplified Chinese, full-width punctuation (，。：—), no stray English words except product/standard names (ISPM-15, ESG, POS, PE, UV, phb, WhatsApp). Read every sentence back; earlier drafts have leaked words from other languages.
- Same substance in all three languages; not a word-for-word translation but the same facts, numbers and structure.
- No em-dash spam in EN; a spaced en-dash or a comma is fine.

## Image

- One Unsplash photo per post, URL form `https://images.unsplash.com/photo-<id>?w=1600&q=75`.
- **Pick from the library first**: `src/content/stories/image-library.json` lists photos that a person has already opened, looked at and approved, each with an `alt` description and `tags`. Choose an entry whose tags match the post's subject and whose `id` is **not yet used** by any post (`grep -h "image:" src/content/stories/post-*.ts`). Write its `alt` into `imageAlt` (translated for BM and ZH). This works without network access.
- Only if no unused library entry fits, and only where Unsplash is reachable: find candidates on `https://unsplash.com/s/photos/<topic>` (image `src` attributes contain `photo-<id>`), download at `?w=360&q=55` (must return 200) and **look at it**. It must show the subject of the post (a warehouse, a studio, a stand, a press…), not an abstract or unrelated scene, with no prominent third-party logos or close-up faces. Then add it to the library with an honest `alt` and tags.
- Never reuse an image already used by another post. If the library runs dry and Unsplash is blocked, say so in your report rather than reusing.
- Keeping the library stocked: whenever fewer than 7 unused entries remain, whoever has Unsplash access (the daily local task does) adds at least 7 new viewed entries covering all five industries.

## SEO / AEO / AIO / GEO checklist

- Main keyword in `slug`, `title`, first paragraph of `intro`, one `h`, and `description`.
- Add the Malaysia angle where natural (Balakong, Selangor, Klang Valley, "Malaysia") for local search; export angle (ISPM-15, freight) for global search.
- FAQ questions are real search queries ("Is honeycomb board strong enough for…?", "Where to buy… in Malaysia?").
- Every fact in the verified list above may be cited with its number; nothing else.
- The template already emits BlogPosting, FAQPage and BreadcrumbList schema and hreflang for the three languages.

## Register and verify

1. Import the new file in `src/content/stories/index.ts` and append it to the `allPosts` array.
2. Run:
   ```
   npm ci
   STORY_PUBLISH_ALL=1 npm run build
   node scripts/verify-stories.mjs
   ```
   The verify script must end with `OK`. Fix every `FAIL`; read every `WARN`.
3. Commit with a message like `Story: <topic> (YYYY-MM-DD) in EN/BM/ZH` and push to `master`.
   The daily workflow publishes each post on its date. Do not run a deploy yourself.
