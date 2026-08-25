# Agridetails.com

Free mobile-first portal for Tamil Nadu farmers: **daily vegetable & grain mandi prices**, **simple agri news** (Tamil/English), and a **Crop Doctor** — photo-based pest & disease advisory with recommended pesticides.

Pure static site — no build step, no backend. Host anywhere (Cloudflare Pages, Vercel, GitHub Pages).

## Pages
- `index.html` — home with today's key prices
- `prices.html` — full price table with crop/market filters + 7-day trends
- `news.html` — agri news summaries with source links
- `advisory.html` — Crop Doctor: upload photo → symptom match → pesticide recommendations

## Enabling LIVE prices
The site ships with realistic demo data (`js/prices-data.js`). To go live:

1. Register free at [data.gov.in](https://data.gov.in) and get an API key.
2. Subscribe to the resource *"Current Daily Price of Various Commodities from Various Markets (Mandi)"*.
3. Paste the key into `js/config.js` → `DATA_GOV_API_KEY`.

Prices will then load live from AGMARKNET for Tamil Nadu markets.

## Crop Doctor knowledge base
`js/advisory-kb.js` holds bilingual (EN/தமிழ்) disease profiles with symptoms, registered pesticide options, doses, pre-harvest waiting periods, and prevention. Sources: TNAU Agritech Portal crop guides and CIBRC registered formulations. **Verify doses against current TNAU guides before field use.**

## Language toggle
Every page has a த/EN toggle; choice persists in `localStorage`. All UI strings live in `js/i18n.js`.

## Dev preview
Open `index.html` directly in a browser, or serve:
```bash
python -m http.server 8080
```

## Disclaimer
Prices are indicative from government market feeds. Pesticide advice is compiled from public extension sources — always confirm with your local Krishi Vigyan Kendra before large-scale spraying.
