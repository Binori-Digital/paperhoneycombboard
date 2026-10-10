// Registry of all Story posts. To publish a new day: create a
// post-NN-topic.ts file and add it to the imports below.

import type { Post } from './types';
import { post as p01 } from './post-01-ispm15';
import { post as p02 } from './post-02-ppwr';
import { post as p03 } from './post-03-tare-weight';
import { post as p04 } from './post-04-timber';
import { post as p05 } from './post-05-handling';
import { post as p06 } from './post-06-humidity';
import { post as p07 } from './post-07-dimensional-weight';
import { post as p08 } from './post-08-automation';
import { post as p09 } from './post-09-electronics';
import { post as p10 } from './post-10-furniture';
import { post as p11 } from './post-11-global-buyers';
import { post as p12 } from './post-12-industrial';
import { post as p13 } from './post-13-art-craft';
import { post as p14 } from './post-14-decorations';
import { post as p15 } from './post-15-exhibition';
import { post as p16 } from './post-16-printing';
import { post as p17 } from './post-17-layer-pads';
import { post as p18 } from './post-18-model-making';
import { post as p19 } from './post-19-retail-displays';
import { post as p20 } from './post-20-roadshow';
import { post as p21 } from './post-21-pos-displays';
import { post as p22 } from './post-22-dunnage-void-fill';
import { post as p23 } from './post-23-school-art';
import { post as p24 } from './post-24-giant-letters';
import { post as p25 } from './post-25-stand-furniture';
import { post as p26 } from './post-26-printed-boxes';
import { post as p27 } from './post-27-plastic-pallet';
import { post as p28 } from './post-28-stage-sets';
import { post as p29 } from './post-29-party-backdrops';
import { post as p30 } from './post-30-gallery-walls';
import { post as p31 } from './post-31-display-trays';
import { post as p32 } from './post-32-automotive-parts';
import { post as p33 } from './post-33-cosplay-props';
import { post as p34 } from './post-34-wedding-signage';
import { post as p35 } from './post-35-pop-up-shop';
import { post as p36 } from './post-36-print-finish';
import { post as p37 } from './post-37-ecommerce-parcels';
import { post as p38 } from './post-38-cutting-joining';
import { post as p39 } from './post-39-produce-decor';
import { post as p40 } from './post-40-property-expo';
import { post as p41 } from './post-41-pallet-displays';
import { post as p42 } from './post-42-lcl-sea-freight';

/** Every post in the repo, newest first — including ones queued for a future date. */
export const allPosts: Post[] = [
  p01, p02, p03, p04, p05, p06, p07, p08, p09, p10, p11, p12, p13, p14, p15, p16,
  p17, p18, p19, p20, p21, p22, p23, p24, p25, p26, p27, p28,
  p29, p30, p31, p32, p33, p34, p35,
  p36, p37, p38, p39, p40, p41, p42,
].sort((a, b) => b.date.localeCompare(a.date));

/**
 * Today's date in Malaysia (YYYY-MM-DD). A post whose `date` is later than this
 * stays in the queue and is not built, so the daily rebuild publishes exactly
 * one new topic per day. Set STORY_PUBLISH_ALL=1 to build the queue too
 * (used by scripts/verify-stories.mjs to check queued posts before they go live).
 */
export const TODAY_MY = new Date().toLocaleDateString('en-CA', { timeZone: 'Asia/Kuala_Lumpur' });
const publishAll = typeof process !== 'undefined' && process.env?.STORY_PUBLISH_ALL === '1';

/** Posts that are live today, newest first. */
export const posts: Post[] = publishAll ? allPosts : allPosts.filter((p) => p.date <= TODAY_MY);

/** Posts waiting for their publish date. */
export const queuedPosts: Post[] = allPosts.filter((p) => p.date > TODAY_MY);

export const bySlug = (slug: string): Post | undefined =>
  posts.find((p) => p.slug === slug);

/** Rough reading time from the localized body text. */
export function readingMinutes(post: Post, locale: keyof Post['i18n']): number {
  const b = post.i18n[locale] ?? post.i18n.en;
  const text = [
    ...b.intro,
    ...b.sections.flatMap((s) => [s.h, ...s.p]),
    ...b.takeaways,
    ...b.faq.flatMap((f) => [f.q, f.a]),
  ].join(' ');
  // CJK counts characters, latin counts words
  const cjk = (text.match(/[぀-ヿ一-鿿가-힯]/g) || []).length;
  const words = text.split(/\s+/).filter(Boolean).length;
  const minutes = cjk > 200 ? cjk / 450 : words / 220;
  return Math.max(2, Math.round(minutes));
}
