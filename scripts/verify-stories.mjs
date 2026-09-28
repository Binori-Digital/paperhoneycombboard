#!/usr/bin/env node
// Verifies the Story queue and the built site before a deploy.
//
//   STORY_PUBLISH_ALL=1 npm run build && node scripts/verify-stories.mjs
//
// Checks the post source files (every post has en/ms/zh, valid date, unique
// slug, registered in index.ts, related slugs exist, image is a live Unsplash
// URL, titles/descriptions within search-snippet limits) and the dist/ output
// (no dead internal links, no mojibake, every post built in every language it
// carries). Exits 1 with a list of problems so CI and the daily task stop
// before deploying something broken.

import { readdirSync, readFileSync, existsSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';

const root = process.cwd();
const storiesDir = join(root, 'src', 'content', 'stories');
const dist = join(root, 'dist');
const problems = [];
const warn = [];

// ---------- source checks ----------
const files = readdirSync(storiesDir).filter((f) => /^post-\d+-.+\.ts$/.test(f) && !/-extra\.ts$/.test(f));
const indexSrc = readFileSync(join(storiesDir, 'index.ts'), 'utf8');
const posts = [];

for (const f of files) {
  const src = readFileSync(join(storiesDir, f), 'utf8');
  const slug = src.match(/^\s*slug: '([^']+)'/m)?.[1];
  const date = src.match(/^\s*date: '([^']+)'/m)?.[1];
  const image = src.match(/^\s*image: '([^']+)'/m)?.[1];
  const related = [...src.matchAll(/related: \[([^\]]*)\]/g)].flatMap((m) => [...m[1].matchAll(/'([^']+)'/g)].map((x) => x[1]));
  const locales = [...src.matchAll(/^    (en|ms|zh|ja|ko|th|es|fr): \{/gm)].map((m) => m[1]);
  const titles = [...src.matchAll(/^      title: '([^']+)'/gm)].map((m) => m[1]);
  const descs = [...src.matchAll(/^      description: '([^']+)'/gm)].map((m) => m[1]);

  if (!slug) problems.push(`${f}: no slug`);
  if (!date || !/^\d{4}-\d{2}-\d{2}$/.test(date)) problems.push(`${f}: date must be YYYY-MM-DD (got ${date})`);
  if (!image || !image.startsWith('https://images.unsplash.com/photo-')) problems.push(`${f}: image must be an images.unsplash.com photo URL`);
  for (const l of ['en', 'ms', 'zh']) if (!locales.includes(l)) problems.push(`${f}: missing required language "${l}"`);
  if (!indexSrc.includes(`'./${f.replace(/\.ts$/, '')}'`)) problems.push(`${f}: not imported in index.ts`);
  titles.forEach((t, i) => {
    const cjk = /[\u3040-\u30ff\u4e00-\u9fff\uac00-\ud7af]/.test(t);
    if (!cjk && t.length > 80) warn.push(`${f}: title #${i + 1} is ${t.length} chars (aim 55-70): ${t.slice(0, 50)}…`);
    if (cjk && t.length > 40) warn.push(`${f}: CJK title #${i + 1} is ${t.length} chars (aim ≤32)`);
  });
  descs.forEach((d, i) => {
    const cjk = /[\u3040-\u30ff\u4e00-\u9fff\uac00-\ud7af]/.test(d);
    if (!cjk && d.length > 220) warn.push(`${f}: description #${i + 1} is ${d.length} chars (aim 150-200)`);
    if (cjk && d.length > 90) warn.push(`${f}: CJK description #${i + 1} is ${d.length} chars (aim ≤80)`);
  });
  if (/Ã|â€|\uFFFD/.test(src)) problems.push(`${f}: contains mojibake (UTF-8 damage)`);
  posts.push({ f, slug, date, image, related, locales });
}

const slugs = new Map();
for (const p of posts) {
  if (slugs.has(p.slug)) problems.push(`${p.f}: duplicate slug "${p.slug}" (also in ${slugs.get(p.slug)})`);
  slugs.set(p.slug, p.f);
}
for (const p of posts) for (const r of p.related) if (!slugs.has(r)) problems.push(`${p.f}: related slug "${r}" does not exist`);

// Same image used twice is allowed but flagged: relevance per post matters.
const imgUse = new Map();
for (const p of posts) { const id = p.image?.match(/photo-[0-9a-z-]+/)?.[0]; if (id) imgUse.set(id, [...(imgUse.get(id) || []), p.f]); }
for (const [id, fs] of imgUse) if (fs.length > 1) warn.push(`image ${id} reused by ${fs.join(', ')}`);

// Queue depth: how many days of posts are dated after today (Malaysia)
const today = new Date().toLocaleDateString('en-CA', { timeZone: 'Asia/Kuala_Lumpur' });
const queued = posts.filter((p) => p.date > today).map((p) => p.date).sort();
const latest = posts.map((p) => p.date).sort().at(-1);
console.log(`Today (MY): ${today}. Latest post date: ${latest}. Queued for future days: ${queued.length}${queued.length ? ` (${queued[0]} → ${queued.at(-1)})` : ''}.`);
if (queued.length < 3) warn.push(`queue is short: only ${queued.length} future-dated post(s); add more so the daily publish does not run dry`);

// Live image check (HEAD). Skipped with STORY_SKIP_IMAGE_CHECK=1.
if (process.env.STORY_SKIP_IMAGE_CHECK !== '1') {
  for (const p of posts) {
    if (!p.image) continue;
    try {
      const r = await fetch(p.image, { method: 'HEAD', redirect: 'follow' });
      if (!r.ok) problems.push(`${p.f}: image returned HTTP ${r.status}`);
    } catch (e) {
      warn.push(`${p.f}: image check failed (${e.message})`);
    }
  }
}

// ---------- dist checks ----------
if (!existsSync(dist)) {
  problems.push('dist/ not found — run the build first');
} else {
  const html = [];
  const all = new Set();
  const walk = (d) => {
    for (const n of readdirSync(d)) {
      const p = join(d, n);
      if (statSync(p).isDirectory()) walk(p);
      else {
        const rel = '/' + relative(dist, p).split('\\').join('/');
        all.add(rel);
        if (rel.endsWith('/index.html')) all.add(rel.slice(0, -'index.html'.length));
        if (n.endsWith('.html')) html.push(p);
      }
    }
  };
  walk(dist);

  const dead = new Map();
  for (const file of html) {
    const t = readFileSync(file, 'utf8');
    if (/Ã|â€|\uFFFD/.test(t)) problems.push(`${relative(dist, file)}: mojibake in built page`);
    for (const m of t.matchAll(/href="(\/[^"#?]*)/g)) {
      const h = m[1];
      if (!all.has(h) && !all.has(h.replace(/\/?$/, '/'))) dead.set(h, relative(dist, file));
    }
  }
  for (const [h, from] of dead) problems.push(`dead internal link ${h} (from ${from})`);

  const publishAll = process.env.STORY_PUBLISH_ALL === '1';
  for (const p of posts) {
    if (!publishAll && p.date > today) continue;
    for (const l of p.locales) {
      const path = l === 'en' ? `/story/${p.slug}/` : `/${l}/story/${p.slug}/`;
      if (!all.has(path)) problems.push(`${p.f}: expected built page ${path}`);
    }
  }
  console.log(`Checked ${html.length} built pages, ${posts.length} posts.`);
}

for (const w of warn) console.log(`WARN  ${w}`);
for (const p of problems) console.log(`FAIL  ${p}`);
if (problems.length) {
  console.log(`\n${problems.length} problem(s). Not safe to deploy.`);
  process.exit(1);
}
console.log(`\nOK — ${warn.length} warning(s), no blocking problems.`);
