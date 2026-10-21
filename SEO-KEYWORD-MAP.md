# PrintRescue SEO keyword map and content plan

## Important measurement note

The phrases below are **intent-based priorities**, not a claim that a phrase is currently trending or has a specific monthly search volume. Search volume and trend direction vary by country, device and date. Validate them in Google Trends, Google Ads Keyword Planner, and—after launch—Google Search Console before committing to a publishing calendar. Do not create a `meta keywords` tag: Google does not use it for ranking. Place terms naturally in useful page copy, titles, descriptions, headings and descriptive internal links.

## Page-to-keyword mapping

| Page | Primary topic | Secondary intent phrases to incorporate naturally |
|---|---|---|
| `index.html` | printer setup and troubleshooting help | Printer Service, printer not printing, printer offline, wireless printer setup |
| `services.html` | Printer Service topics | printer setup and installation, driver help, Wi-Fi printing, print quality, scanning basics |
| `printer-setup.html` | new printer setup | connect printer to computer, add printer on Windows, wireless printer setup, print a test page |
| `driver-support.html` | printer driver compatibility | printer driver installation, official printer driver download, printer software setup, Windows/macOS compatibility |
| `wireless-support.html` | printer not connecting to Wi-Fi | connect printer to Wi-Fi, wireless printer offline, printer not detected on network, router password changed |
| `troubleshooting.html` | printer offline or not printing | printer offline fix, stuck print queue, printer paper jam, printer printing blank pages, faded prints, scanner not working |
| `faq.html` | Printer Service questions | printer Wi-Fi FAQs, driver questions, offline messages, device detection, faded or streaky pages |
| `guides.html` | printer guides and troubleshooting | printer setup checklist, driver checklist, print quality guide, Wi-Fi troubleshooting guide |
| `about.html` | independent printer guidance | independent Printer Service information, safe setup guidance, official driver sources |
| `contact.html` | Printer Service request | printer model and error details, contact Printer Service, troubleshooting request |
| `support-plans.html` | support plan options | printer setup support option, software guidance, connectivity troubleshooting option |

## Keyword priorities by search intent

### Priority 1 — strong problem or task intent

- printer not printing
- printer offline fix
- printer not connecting to Wi-Fi
- connect printer to Wi-Fi
- printer driver installation
- new printer setup
- printer not detected by computer
- printer paper jam

### Priority 2 — specific symptoms and follow-up tasks

- printer printing blank pages
- printer faded or streaky prints
- printer queue stuck or paused
- scanner not working with printer
- printer keeps disconnecting from Wi-Fi
- printer driver incompatible with operating system
- print from phone to wireless printer

### Priority 3 — evergreen guides and decision support

- how to set up a wireless printer
- how to find the exact printer model
- how to safely download printer drivers
- USB vs Wi-Fi printer connection
- how to print a test page
- what to check before replacing ink or toner

Do not repeat these as a block of keywords on every page. Each URL has one main purpose. Use a phrase only when it accurately describes visible content and the help the site actually provides.

## Content roadmap (create these as individual, genuinely helpful guide pages)

1. **Printer Offline on Windows: Safe Checks Before Reinstalling** — distinguish queue state, device selection, connection and recent network changes.
2. **Printer Won't Connect to Wi-Fi: Model-Neutral Checklist** — explain SSID, password changes, guest networks and 2.4/5 GHz compatibility without claiming all models behave alike.
3. **How to Find Your Exact Printer Model and Operating System** — photos/diagrams, locations of model labels, Windows/macOS version checks.
4. **How to Download Printer Drivers Safely** — navigate to official manufacturer websites, confirm model/OS, avoid bundled driver-updater installers.
5. **Printer Prints Blank Pages: What to Check First** — paper, settings, ink/toner indicators, test patterns and model-specific maintenance guidance.
6. **Printer Prints Faded or Streaky Pages** — paper/quality settings, consumable checks and safe official maintenance instructions.
7. **USB vs Wi-Fi vs Ethernet: Choosing a Printer Connection** — explain supported options by device/model.
8. **Printer Scans but Won't Print (or Prints but Won't Scan)** — separate printing and scanning software paths.

Each guide should answer a distinct problem, include original step-by-step advice, note where model steps differ, cite official manufacturer documentation and link to only one or two relevant PrintRescue pages. Avoid thin, mass-produced pages targeting every brand/model unless the content is genuinely specific and verified.

## Technical SEO now in the project

- Unique title and meta description for every HTML page.
- Relative canonical links, Open Graph and Twitter card metadata, with page-relevant preview images.
- `index,follow` robots instructions and descriptive H1s/page titles.
- Organization schema on the homepage, WebPage schema for site pages, and FAQPage schema based only on visible FAQ text.
- Intrinsic image dimensions and async decoding to help layout stability.
- Internal links between related setup, driver, Wi-Fi, troubleshooting, guide and FAQ pages.
- Official manufacturer driver/support links on `driver-support.html`.
- `robots.txt` and a domain-aware SEO generation script for final absolute canonicals, social URLs, structured-data URLs and `sitemap.xml`.

## Launch tasks still requiring the live domain

1. Open `seo-tools/generate-seo.mjs` and use the command with the real production URL, e.g. `node seo-tools/generate-seo.mjs https://www.example.com`. Replace the example with the actual domain (no trailing slash is needed).
2. Deploy the generated `sitemap.xml` and `robots.txt` at the site root.
3. Add and verify the exact domain property in Google Search Console and Bing Webmaster Tools, then submit `/sitemap.xml`.
4. Inspect important URLs, ensure pages return HTTP 200, HTTPS works, images load, no accidental `noindex` or robots block exists, and canonical URLs match the actual deployed paths.
5. Use Google Search Console queries and landing-page reports after data accumulates. Use Trends/Keyword Planner to validate target-market wording and seasonal demand.
6. Confirm the support-plan prices are real before marketing them; no invented phone numbers, addresses, reviews or service claims should be added for SEO.


## Official guidance

- [Google Search Central: title links](https://developers.google.com/search/docs/appearance/title-link)
- [Google Search Central: meta descriptions and snippets](https://developers.google.com/search/docs/appearance/snippet)
- [Google Search Central: supported meta tags (including unsupported meta-keywords)](https://developers.google.com/search/docs/crawling-indexing/special-tags)
- [Google Search Central: spam policies and link schemes](https://developers.google.com/search/docs/essentials/spam-policies)
- [Google Search Console URL Inspection and indexing requests](https://support.google.com/webmasters/answer/9012289)
