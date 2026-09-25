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

/** Newest first. */
export const posts: Post[] = [
  p01, p02, p03, p04, p05, p06, p07, p08, p09, p10, p11, p12, p13, p14, p15, p16,
].sort(
  (a, b) => b.date.localeCompare(a.date),
);

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
