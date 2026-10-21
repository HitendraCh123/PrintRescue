# PrintRescue — Multi-page Printer Service website

This project extends the uploaded PrintRescue home page into a multi-page website. The existing customized `style.css` and original home page layout were retained; additional page-specific styles were appended at the end of `style.css`.

## Pages
- `index.html` — homepage
- `about.html` — about and support approach
- `services.html` — services overview
- `printer-setup.html` — printer setup guide
- `driver-support.html` — driver and software guidance
- `wireless-support.html` — Wi-Fi and network support
- `troubleshooting.html` — offline, print-quality and common problems
- `guides.html` — searchable guide library with topic articles
- `faq.html` — frequently asked questions
- `support-plans.html` — illustrative support plan cards and billing toggle
- `contact.html` — Printer Service request form

## Run
Extract the ZIP and open `index.html`, or use VS Code Live Server. The pages use local images in `assets/`; Google Fonts needs an internet connection but system fallbacks remain available.

## Before publishing
- Replace `support@yourdomain.com` with your real support inbox.
- The contact form currently opens a prepared email through `mailto:`; connect EmailJS or a backend to receive submissions directly. The newsletter is a front-end demo.
- Sample pricing is illustrative and must be confirmed before publication. Do not publish placeholder pricing or promises accidentally.
- PrintRescue is presented as independent printer-support information and is not affiliated with printer manufacturers.


## SEO setup before launch

1. Confirm the real production domain and publish the full site over HTTPS.
2. From this folder, run `node seo-tools/generate-seo.mjs https://www.your-real-domain.com` (replace the example with your actual domain; include a subfolder in the URL if the site is deployed under one). This finalizes absolute canonical/social URLs and generates `sitemap.xml` and `robots.txt` for that domain.
3. Upload the regenerated files with all HTML and `assets/` files. Test a few URLs and the image previews after deployment.
4. Verify the domain in Google Search Console and Bing Webmaster Tools and submit `/sitemap.xml`.
5. Read `SEO-KEYWORD-MAP.md` for page-level targets and content roadmap, and `FREE-BACKLINK-PLAN.md` for legitimate link-building opportunities.

Keyword priorities are based on search intent and website relevance, not invented monthly-volume figures. Confirm commercial service claims, support-plan prices and real contact details before launch.
