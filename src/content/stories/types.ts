// Blog ("Story") post model. One file per topic, each holding all five
// language versions, so publishing a new day = adding one file.

export type Locale = 'en' | 'ms' | 'zh' | 'ja' | 'ko';

export interface PostBody {
  title: string;
  /** <title>/meta description — keep under ~160 chars */
  description: string;
  /** One-line deck shown under the H1 and on the index card */
  excerpt: string;
  /** Opening paragraphs before the first H2 */
  intro: string[];
  sections: { h: string; p: string[] }[];
  /** Scannable summary — strong signal for AI answer engines */
  takeaways: string[];
  faq: { q: string; a: string }[];
  ctaTitle: string;
  ctaText: string;
  ctaPrimary: string;
  ctaSecondary: string;
  imageAlt: string;
  imageCredit?: string;
  /** Long-tail keyword phrases this post targets */
  tags: string[];
  relatedLabel: string;
  takeawaysLabel: string;
  faqLabel: string;
  readLabel: string;
}

export interface Post {
  slug: string;
  /** ISO date — controls ordering and dateline */
  date: string;
  image: string;
  /** Slugs of related posts, for internal linking */
  related: string[];
  i18n: Record<Locale, PostBody>;
}

export const LOCALES: Locale[] = ['en', 'ms', 'zh', 'ja', 'ko'];

export const LOCALE_LANG: Record<Locale, string> = {
  en: 'en-MY', ms: 'ms-MY', zh: 'zh-MY', ja: 'ja', ko: 'ko',
};

/** URL prefix for a locale ('' for the default English). */
export const prefixFor = (locale: Locale) => (locale === 'en' ? '' : `/${locale}`);

/** Canonical path of a post in a given locale. */
export const postPath = (locale: Locale, slug: string) => `${prefixFor(locale)}/story/${slug}/`;

/** Canonical path of the story index in a given locale. */
export const storyPath = (locale: Locale) => `${prefixFor(locale)}/story/`;

export function formatDate(iso: string, locale: Locale): string {
  const d = new Date(iso + 'T00:00:00Z');
  const tags: Record<Locale, string> = {
    en: 'en-GB', ms: 'ms-MY', zh: 'zh-CN', ja: 'ja-JP', ko: 'ko-KR',
  };
  return d.toLocaleDateString(tags[locale], { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' });
}
