# Agridetails.com — Project Audit

_Audit date: 7 Sep 2026. Repo: `Murugansakthivel/Agridetails` (public), live at
https://murugansakthivel.github.io/Agridetails/. Static site, no build step,
push to `main` auto-deploys via `.github/workflows/deploy.yml`
(actions/deploy-pages)._

This document is a factual snapshot of what exists in the repository today —
file names, line counts, and behavior as read from the code — not a wishlist.
No user/traffic/revenue numbers are claimed anywhere here; none can be
verified from this repo (no analytics, no accounts).

---

## 1. Pages

| Page | File | Purpose |
|---|---|---|
| Home | `index.html` (217 lines) | Landing page: hero, live-price ticker/marquee, feature highlights, CTA into Prices/Crop Doctor |
| Prices | `prices.html` (119 lines) | Market/commodity mandi prices — filterable table + 7-day trend bars |
| News | `news.html` (76 lines) | Curated agri news summaries (hand-authored array in `js/app.js`, not a feed) |
| Climate | `climate.html` (84 lines) | Climate/weather news for TN with day-wise history browsing |
| Dams | `dams.html` (84 lines) | Tamil Nadu dam details: fill level, storage, inflow/outflow |
| Fertilizer | `fertilizer.html` (90 lines) | TN fertilizer dealer directory with live stock by district |
| Stocks | `stocks.html` (86 lines) | Agri/food NSE stock watchlist with per-stock detail view |
| Advisory | `advisory.html` (136 lines) | "Crop Doctor" — photo + symptom text → rule-based pest/disease match against a static KB |

No `crop-doctor.html` exists in the repo as of this audit. Per the task
context, a separate concurrent effort is adding it as a new rule-based mock
"AI" Crop Doctor prototype (tomato/chili/paddy/banana/cotton) — see
`IMPLEMENTATION_PLAN.md` §6 for how that maps onto the future real AI
architecture. The **existing** `advisory.html` already performs the same
kind of client-side keyword matching against `js/advisory-kb.js` — 8 disease
profiles, EN/TA only — so any future `crop-doctor.html` should be evaluated
against consolidating with this page and knowledge base rather than
duplicating it outright.

## 2. Components / scripts (`js/`)

| File | Lines | Role |
|---|---|---|
| `js/app.js` | 1,019 | Single router + all page logic. `DOMContentLoaded` checks for page-specific DOM ids (`homeTicker`, `priceTableBody`, `newsList`, `analyzeBtn`, `stocksGrid`, `climateList`, `damList`, `fertList`) and calls the matching `initFoo()`. Each `initFoo()` is a self-contained IIFE-style function owning its own state, render, and event wiring; pages re-render on a custom `agri:lang` event fired by `i18n.js` on language switch. |
| `js/i18n.js` | 512 | Three dictionary blocks (`I18N.en`, `I18N.ta`, `I18N.hi`) keyed by string id; `t(key)` in `app.js` falls back `currentLang() → en → key`. Also owns the `#langSwitch` button wiring and `body.ta-active`/`body.hi-active` font classes. |
| `js/config.js` | 19 | `window.AGRI_CONFIG` — `DATA_GOV_API_KEY` (empty by default → demo data), AGMARKNET `API_URL`, `TN_MARKETS`, `LIMIT`. Only config file in the repo; no environment-based config, no secrets management (this is intentional — it's a public key slot, not a secret). |
| `js/crops-catalog.js` | 195 | `CROP_CATALOG` — base wholesale prices (₹/quintal) per crop, EN/TA/HI names, sourced from Koyambedu market bulletins (Aug 2026) for ~31 crops; rest estimated. |
| `js/prices-data.js` | 40 | `PRICE_DATA` — small hardcoded demo price table (legacy/fallback; `crops-catalog.js` + `app.js`'s `buildCatalogRows`/`buildTrendSeries` — referenced but not shown in the excerpt read — are the live path used by `initPrices()`). |
| `js/advisory-kb.js` | 256 | `ADVISORY_KB` — 8 pest/disease entries (id, crops, EN/TA name, keywords, symptoms, pesticides w/ dose + pre-harvest wait, prevention). Sourced from TNAU Agritech Portal + CIBRC. |
| `js/dam-details.js` | 220 | `DAM_DETAILS` — TN-only dam dataset (name/river/state/district in 3 languages, fill %, levels, storage, inflow/outflow, source link, per-dam `dateAsOf`). Hand-authored/curated, not cron-generated. |
| `js/climate-news.js` | 156 | `CLIMATE_NEWS` — `{ asOf, history: [{date, items[]}, ...] }`, newest-first; day-wise history is preserved (see §4). |
| `js/agri-stocks.js` | 151 | `AGRI_STOCKS` — grouped NSE stock snapshot (price, % change, 52w high/low, market cap, P/E, news items) refreshed periodically. Explicitly documented in its header comment as **not** a live feed (NSE real-time data is paid; this is a periodic manual/automation snapshot). |
| `js/fertilizer-shops.js` | **10,996** | `FERTILIZER_SHOPS` — auto-generated daily by `scripts/update_fertilizer_shops.py`. Real dealer name/phone/stock(MT) per district/taluk scraped from the TN Dept. of Agriculture portal. File header explicitly says "Do not hand-edit... the daily job overwrites it." |
| `js/fertilizer-shops-overrides.js` | 20 | `FERTILIZER_SHOP_OVERRIDES = {}` — empty by default; keyed by shop `id`, holds hand-verified address/landmark/pesticide-stock that the government source doesn't publish. Never touched by the cron job. |

`js/app.js` implements distinct `init*` functions for each page:
`initHome`, `initPrices` (+ `getPrices`/`fetchLivePrices`/`demoAsRows` live/demo
fallback), `initStocksPage`, `initNews` (not shown above but present),
`initClimate`, `initDams`, `initFertilizer`, `initAdvisory`. All are wired
from one `DOMContentLoaded` block at the top of the file (lines 6–25) — a
simple, effective "poor man's router" with zero client-side routing library.

## 3. CSS design system (`css/style.css`, 512 lines)

Design tokens (in `:root`):
```
--green-900: #23451e   --green-700: #4c8c2b   --green-600: #63a83e
--green-100: #ecf5e3   --lime-soft: #dcecc9    --gold-600: #f2ae01
--gold-soft: #fdf3d7    --bg: #faf7ee            --card: #ffffff
--text: #273020         --muted: #70795f          --border: #e7e3d2
--red-700: #c0392b      --radius: 18px            --shadow: 0 10px 30px rgba(35,69,30,.08)
--font-display: 'Baloo 2', 'Noto Sans Tamil', 'Noto Sans Devanagari', sans-serif
```
Structural/reusable classes actually defined and used across pages:
- `.card` (generic bordered/shadowed panel — line 437) and page-specific
  card variants that reuse the same visual recipe: `.price-card`,
  `.feature-card`, `.trend-card`, `.result-card`, `.news-item`,
  `.stock-card`, `.dam-card` (via inline template), `.fert-card`.
- `.controls-bar` — the filter-row container used identically on Prices,
  Dams, Fertilizer pages.
- `.cat-tab` / `.cat-tabs` — pill-style category tab buttons (Prices page
  veg/fruit/grain filter).
- `.dam-loc-chip` — small location pill; **reused as-is** in
  `initFertilizer()`'s `renderCard()` for the district chip (`js/app.js`
  line 760), showing the CSS is already being shared across features
  without duplication.
- `.fin-grid` / `.fin-row` / `.fin-label` / `.fin-value` — a generic
  label/value grid pattern, used for both Stocks financials
  (`initStocksPage → renderDetail`) and Fertilizer stock/pesticide detail
  (`initFertilizer → renderDetail`). One CSS pattern, two unrelated
  features — a good reuse example.
- `.stock-detail-close` — close button for the Stocks detail panel; the
  same visual treatment is reused for `#fertDetailClose` in the Fertilizer
  page (same class, `js/app.js` line 798).

## 4. Data sources & automation

- `scripts/update_fertilizer_shops.py` (270 lines) — scrapes
  `tnagriculture.in/ARS/fert_stock_position` per-district, writes
  `js/fertilizer-shops.js`. Caches raw scrape progress in
  `scripts/.cache/fert_raw.json` so a network blip mid-run resumes rather
  than re-fetching completed districts (the cache file is gitignored —
  confirm via `.gitignore`).
- Referenced (per task context, not independently re-verified line-by-line
  here beyond what commit history shows) daily automation jobs:
  - **Stock price refresh — ~3am**: updates `js/agri-stocks.js` (commit
    history shows "Daily agri/food stock price refresh").
  - **Climate/news refresh — ~6am, with continuity**: updates
    `js/climate-news.js`, **prepending** to `history[]` rather than
    overwriting (commit `d5238e7`: "track day-wise history instead of
    overwriting... cron job updated to prepend, never overwrite").
  - **Fertilizer shop stock refresh — ~4am**: runs
    `update_fertilizer_shops.py`, regenerates `js/fertilizer-shops.js`
    (commit `5d9f70e`: "Fertilizer stock daily refresh: date bump").
- All three are described in code comments as **real scraped/sourced data**,
  never fabricated — each generated file carries a header disclaiming demo
  vs. live status (e.g. `agri-stocks.js`: "NOT a live feed... periodically-
  refreshed snapshot"; `fertilizer-shops.js`: "Real dealer names, phone
  numbers and live fertilizer stock"). `js/prices-data.js` and
  `js/crops-catalog.js` are explicitly labeled demo/estimated where actual
  sourcing isn't available.
- No GitHub Actions workflow for these cron jobs is present in
  `.github/workflows/` (only `deploy.yml` exists) — the daily
  price/climate/fertilizer refresh jobs are **not** running inside this
  repo's CI; they run externally (e.g. a scheduled agent/task elsewhere)
  and simply push the regenerated JS files as commits. This is a real gap:
  if that external scheduler stops, there is no repo-native fallback cron.

## 5. Broken / incomplete functionality

- **No backend/API** — 100% static HTML/CSS/vanilla JS; `fetchLivePrices()`
  in `app.js` calls `data.gov.in` directly from the browser only if an API
  key is set in `js/config.js` (empty by default, so the site runs on demo
  data for prices unless someone pastes a personal key in).
- **No database** — all "data" is committed JS files (`const X = {...}`)
  regenerated by scheduled scripts or hand-edited.
- **No authentication / user accounts** — there is no login anywhere in the
  codebase; every page is fully public and stateless except for
  `localStorage` language preference.
- **No farm profiles** — nothing tracks a specific farmer, field, or crop
  selection across sessions.
- **No AI/vision Crop Doctor yet** — `advisory.html`'s "Crop Doctor" is
  keyword/string matching (`text.includes(kw.toLowerCase())`) against a
  static 8-entry KB, not any ML/vision model. The photo upload
  (`dropZone`/`photoInput`) only sets an `<img>` preview
  (`URL.createObjectURL(file)`) — **the image itself is never analyzed**;
  diagnosis comes entirely from the free-text symptom box. This is
  effectively a text-only advisory tool wearing a photo-upload UI.
- **No push notifications** — nothing registers a service worker or push
  subscription (a `manifest.json` exists for PWA installability, but no
  `sw.js`/service worker file was found in the repo listing).
- **No admin dashboard** — no way to edit any dataset except by committing
  code (or, for fertilizer shops, editing `fertilizer-shops-overrides.js`
  by hand and pushing).
- **No monetization** — no ads, subscriptions, or paid tiers anywhere.

## 6. Reusable functionality (useful for future features)

- **Filter UI pattern** — `initDams()` and `initFertilizer()` in `app.js`
  both follow the same shape: populate a `<select>` from unique values in
  the dataset → `filtered()` predicate function → `render()` → a reset
  button that clears filter state and re-renders → re-run all of the above
  again on the `agri:lang` event. This pattern is copy-paste ready for any
  new filterable listing page (e.g. a future government-schemes or
  shops/partners directory).
- **i18n dictionary pattern** — flat `I18N.en/ta/hi` key→string maps, one
  `t(key)` accessor with `currentLang() → en → key` fallback, and a
  `document.addEventListener('agri:lang', rerenderFn)` convention so every
  page's render function is idempotent and safe to call again after a
  language switch. Well-proven across 8 pages; should be the template for
  any new page's i18n rather than inventing a new mechanism.
- **Manual-override-file pattern** —
  `js/fertilizer-shops.js` (auto-generated, never hand-edited) +
  `js/fertilizer-shops-overrides.js` (hand-edited, never auto-overwritten),
  joined at render time by `shopOverride(id) { return overrides[id] || {} }`.
  This is a clean, low-risk way to let humans add verified facts on top of
  scraped data without the cron job clobbering them, and it generalizes to
  any future dataset that mixes scraped + manually-verified fields (e.g.
  government-scheme details, dam operator contacts).
- **Auto-refresh cron pattern with date-stamped resumable scrape cache** —
  `scripts/update_fertilizer_shops.py`'s `scripts/.cache/fert_raw.json`
  resumable-cache approach, plus `climate-news.js`'s prepend-not-overwrite
  history array, are both good templates for any future scraper: cache raw
  fetch progress keyed by date, and treat generated data as an
  append/prepend log where historical continuity matters.

## 7. Technical debt

- **`js/fertilizer-shops.js` is ~11,000 lines of generated JSON-as-JS mixed
  into the same `js/` directory as hand-written logic.** It's pure data (no
  functions), but its sheer size (295 KB) means every page that loads it
  (`fertilizer.html`) ships the whole dataset regardless of which district
  the visitor actually wants. Splitting data from logic (e.g. per-district
  JSON files fetched on demand, or at minimum moving generated data into a
  `data/` directory distinct from `js/`) would shrink initial payload and
  make the generated-vs-hand-written boundary structurally obvious, not
  just commented.
- **No automated tests** — zero test files/framework anywhere in the repo;
  all verification is manual/visual.
- **No TypeScript** — all JS is untyped vanilla; `app.js` at 1,019 lines
  with 8+ `initFoo()` functions living in one file is starting to feel the
  lack of types/module boundaries (e.g. `typeof AGRI_STOCKS === 'undefined'`
  guards are the only "did this data file load" safety net).
- **No build/bundle step** — confirmed: no `package.json`, no bundler
  config found. This means no minification, no tree-shaking, no code
  splitting — `fertilizer-shops.js` ships uncompressed to every visitor of
  `fertilizer.html`, and `i18n.js` ships all three languages' full
  dictionaries to every page regardless of which language is active.
- **No CI beyond GitHub Pages deploy** — `.github/workflows/deploy.yml`
  only checks out and publishes; there is no lint step, no HTML validation,
  no broken-link check, no test run gating a push to `main`.
- **Single monolithic router file** — `js/app.js` mixes routing,
  rendering, WhatsApp-share URL building, and business logic for 8 pages in
  one 1,019-line IIFE. Fine at current scale; will need splitting
  (per-page JS files or ES modules) before another 3–4 pages are added.

## 8. Security concerns

- **No auth** means no user-specific data can be safely added yet (no
  session/token handling exists anywhere) — any future feature needing
  per-user state (farm profiles, saved crops, notification preferences)
  requires building real auth first, not bolting onto `localStorage`.
- **Static site, no server-side validation** — any future form (e.g. a
  contact form, shop-correction submission) would need either a third-party
  form backend or the planned .NET API; there is currently no way to
  validate or persist user-submitted input safely.
- **API key handling** — `js/config.js`'s `DATA_GOV_API_KEY` is a
  client-visible key by design (data.gov.in keys are meant to be public-ish
  rate-limited keys, not secrets), but this pattern must not be reused for
  any future provider that issues a true secret key (e.g. a paid weather or
  AI vision API) — those must live server-side once a backend exists.
- **External links** (`target="_blank"`) throughout use `rel="noopener"`
  correctly (verified in `initPrices`/`initStocksPage`/`initDams` render
  functions) — good existing practice to preserve.

## 9. Performance concerns

- **Large generated JS data files loaded unconditionally on their pages** —
  `fertilizer.html` always loads the full 295 KB / ~11,000-line
  `fertilizer-shops.js` even if the visitor only wants one district.
  Similarly `crops-catalog.js` (195 lines) loads fully for the Prices page.
- **No lazy loading** — no `<img loading="lazy">` audit was done here, and
  no dynamic `import()`/code-splitting is used anywhere; every page's
  script tags load synchronously.
- **No CDN beyond GitHub Pages' own** (GitHub Pages does serve through
  Fastly, but there's no additional CDN/edge-cache layer, no asset
  versioning/hashing for cache-busting beyond relying on Pages' defaults).
- **i18n payload duplication** — `i18n.js` ships EN+TA+HI dictionaries
  (512 lines) to every page even though only one language renders at a
  time; not currently a real problem at this file size, but will compound
  as more pages/strings are added without a build step to split it.

---
*Compiled by direct inspection of `js/app.js`, `js/i18n.js`, `js/config.js`,
`js/dam-details.js`, `js/climate-news.js`, `js/agri-stocks.js`,
`js/advisory-kb.js`, `js/crops-catalog.js`, `js/prices-data.js`,
`js/fertilizer-shops.js`, `js/fertilizer-shops-overrides.js`,
`scripts/update_fertilizer_shops.py`, `css/style.css`,
`.github/workflows/deploy.yml`, `README.md`, and `git log`.*
