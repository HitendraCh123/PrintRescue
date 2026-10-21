#!/usr/bin/env node
 // Generate production absolute canonical URLs, OG URLs, robots.txt and sitemap.xml.
// Usage: node seo-tools/generate-seo.mjs https://www.your-real-domain.com
import fs from 'node:fs';
import path from 'node:path';
import {
  fileURLToPath
} from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(
  import.meta.url)), '..');
const input = process.argv[2];
if (!input) {
  console.error('Usage: node seo-tools/generate-seo.mjs https://www.your-real-domain.com');
  process.exit(1);
}
let parsed;
try {
  parsed = new URL(input);
} catch {
  console.error('Please provide a valid absolute https:// URL.');
  process.exit(1);
}
if (parsed.protocol !== 'https:') {
  console.error('Use the final HTTPS production URL (including any subfolder, if applicable).');
  process.exit(1);
}
const siteBase = parsed.href.replace(/\/+$/, '');
const files = fs.readdirSync(root).filter(f => f.endsWith('.html')).sort();
const today = new Date().toISOString().slice(0, 10);
const urls = [];

function absoluteFor(file) {
  const route = file === 'index.html' ? '/' : `/${file}`;
  return `${siteBase}${route}`;
}
for (const file of files) {
  const full = path.join(root, file);
  let html = fs.readFileSync(full, 'utf8');
  const pageUrl = absoluteFor(file);
  const canonicalTag = `<link rel="canonical" href="${pageUrl}">`;
  if (/<link\b[^>]*rel=["']canonical["'][^>]*>/i.test(html)) {
    html = html.replace(/<link\b[^>]*rel=["']canonical["'][^>]*>/i, canonicalTag);
  } else {
    html = html.replace(/<\/head>/i, `  ${canonicalTag}\n</head>`);
  }
  const ogUrlTag = `<meta property="og:url" content="${pageUrl}">`;
  if (/<meta\b[^>]*property=["']og:url["'][^>]*>/i.test(html)) {
    html = html.replace(/<meta\b[^>]*property=["']og:url["'][^>]*>/i, ogUrlTag);
  } else {
    html = html.replace(/<\/head>/i, `  ${ogUrlTag}\n</head>`);
  }
  html = html.replace(/<meta\b[^>]*>/gi, tag => {
    const isImageMeta = /(?:property|name)=["'](?:og:image|twitter:image)["']/i.test(tag);
    if (!isImageMeta) return tag;
    return tag.replace(/content=(["'])([^"']+)\1/i, (whole, quote, rawValue) => {
      const rel = rawValue.replace(/^\.\//, '').replace(/^\//, '');
      if (/^https?:\/\//i.test(rel)) return whole;
      return `content=${quote}${siteBase}/${rel}${quote}`;
    });
  });
  // Add URL and logo information to the existing organization schema, without inventing addresses or reviews.
  html = html.replace(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/gi, (tag, jsonText) => {
    try {
      const data = JSON.parse(jsonText);
      const walk = obj => {
        if (!obj || typeof obj !== 'object') return;
        const t = Array.isArray(obj['@type']) ? obj['@type'] : [obj['@type']];
        if (t.includes('Organization')) {
          obj.url = siteBase + '/';
          obj.logo = `${siteBase}/assets/printrescue-logo.svg`;
        }
        if (t.includes('WebPage')) obj.url = pageUrl;
        for (const value of Object.values(obj)) {
          if (Array.isArray(value)) value.forEach(walk);
          else if (value && typeof value === 'object') walk(value);
        }
      };
      walk(data);
      return `<script type="application/ld+json">${JSON.stringify(data)}</script>`;
    } catch {
      return tag;
    }
  });
  fs.writeFileSync(full, html, 'utf8');
  urls.push({
    url: pageUrl,
    file
  });
}
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.map(({url,file}) => ` < url > \n < loc > $ {
  url.replace(/&/g, '&amp;')
} < /loc>\n    <lastmod>${today}</lastmod > \n < /url>`).join('\n')}\n</urlset > \n `;
fs.writeFileSync(path.join(root, 'sitemap.xml'), sitemap, 'utf8');
fs.writeFileSync(path.join(root, 'robots.txt'), `
User - agent: * \nAllow: /\n\nSitemap: ${siteBase}/sitemap.xml\ n `, 'utf8');
console.log(`
Updated $ {
  urls.length
}
HTML pages and wrote sitemap.xml + robots.txt
for $ {
  siteBase
}
`);