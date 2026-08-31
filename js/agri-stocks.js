/* Agridetails — Agri & Food Stocks watchlist (NSE India).
   Financials (price, 52w high/low, market cap, P/E) and news/achievement
   items compiled from public NSE/BSE market data and financial press —
   NOT a live feed. NSE India charges for real-time data APIs; small free
   sites cannot legally re-stream that, so this is a periodically-refreshed
   snapshot (updated by a daily automation) sourced from Moneycontrol,
   Screener.in, LiveMint, Economic Times, INDmoney, Bajaj Finserv, ScanX,
   ETMoney, Zerodha, Devyara, ICICI Direct, Kalkine Media, Dhan, Google
   Finance, CNBC TV18, Business Today, Tickertape, Groww, company press
   releases and sector trade press (Autocar Professional, AgroSpectrum
   India), Aug 2026. For real-time quotes, always check nseindia.com. */
const AGRI_STOCKS = {
  asOf: '2026-08-31',
  groups: [
    {
      key: 'food',
      en: 'Food & FMCG', ta: 'உணவு & FMCG', hi: 'खाद्य व FMCG',
      stocks: [
        {
          symbol: 'ITC', name: 'ITC Ltd', price: 266.00, change: -1.12,
          high52w: 427.00, low52w: 264.80, marketCap: '₹3,33,292 Cr', pe: '17.7',
          news: [
            { headline: 'Q4 FY26 results: revenue +17% YoY, ₹8/share dividend announced', detail: 'Profit rose 5% YoY to ₹5,469.74 crore; cigarettes and FMCG segments led revenue growth.', date: '21 May 2026', source: 'https://www.livemint.com/market/stock-market-news/itc-q4-results-2026-live-itc-q4-earnings-itc-share-price-itc-cigarette-fmcg-itc-profit-itc-dividend-21-may-2026-11779337323964.html' },
            { headline: 'Hit 52-week low on new cigarette tax hike', detail: 'Stock touched its 52-week low as markets priced in a steep new cigarette tax hike effective February 2026.', date: '3 Jun 2026', source: 'https://www.indmoney.com/stocks/itc-ltd-share-price' }
          ]
        },
        {
          symbol: 'NESTLEIND', name: 'Nestle India', price: 1449.00, change: -0.17,
          high52w: 1553.00, low52w: 1145.00, marketCap: '₹2,80,500 Cr', pe: '75.0',
          news: [
            { headline: 'Q1 FY27: net profit surges 48% YoY to ₹975 crore, shares jump ~4%', detail: 'Revenue up 25% to ₹6,378 crore; all four product groups (Maggi, KitKat, Nescafe, Milk) posted double-digit growth.', date: '22 Jul 2026', source: 'https://www.livemint.com/market/market-stats/nestle-india-q1-results-s0003095' },
            { headline: 'Maggi x Uniqlo merchandise collab; Nescafe RTD scaling fast', detail: 'Limited-edition Maggi bowl and apparel tie-up with Uniqlo, alongside rapid growth in ready-to-drink Nescafe coffee.', date: 'Jul 2026', source: 'https://scanx.trade/company/nestle-india-ltd' }
          ]
        },
        {
          symbol: 'BRITANNIA', name: 'Britannia Industries', price: 5298.00, change: -0.23,
          high52w: 6337.00, low52w: 5035.00, marketCap: '₹1,29,500 Cr', pe: '50.0',
          news: [
            { headline: 'Q1 FY27 profit +14% YoY to ₹593 crore; shares jump ~5%, Nomura reiterates Buy', detail: 'Nomura maintained a "Buy" rating with a ₹6,500 target price following the strong quarterly results.', date: 'Aug 2026', source: 'https://www.moneycontrol.com/india/stockpricequote/food-processing/britanniaindustries/BI' },
            { headline: 'Premium biscuit portfolio driving growth', detail: 'Premium product salience up 310 basis points; biscuit and adjacent categories remain core growth engines.', date: '2026', source: 'https://www.screener.in/company/BRITANNIA/' }
          ]
        },
        {
          symbol: 'DABUR', name: 'Dabur India', price: 385.00, change: -0.26,
          high52w: 577.00, low52w: 381.00, marketCap: '₹68,200 Cr', pe: '47.0',
          news: [
            { headline: 'Q1 FY27 profit +15% YoY to ₹591 crore — third straight quarter of double-digit growth', detail: 'Revenue up 10.6% to ₹3,764 crore; new launches Siens and Cheers cited as growth drivers.', date: '29 Jul 2026', source: 'https://www.dabur.com/press-releases/Dabur-Q1-2026-27-Net-Profit-Surges' },
            { headline: 'Launches Odonil Car Fragrance, entering car-fragrance category', detail: 'New product extension of the popular Odonil air-freshener brand into the automotive segment.', date: '31 Jul 2026', source: 'https://www.dabur.com' }
          ]
        },
        {
          symbol: 'MARICO', name: 'Marico Ltd', price: 823.35, change: -0.14,
          high52w: 889.10, low52w: 680.30, marketCap: '₹1,07,058 Cr', pe: '61.1',
          news: [
            { headline: 'Q1 FY27 PAT +25% YoY to ₹630 crore — highest in 28 quarters', detail: 'Revenue up 23% to ₹3,957 crore; acquired a 75% stake in Vietnamese skincare company Skinetiq.', date: '8 Aug 2026', source: 'https://www.thehindubusinessline.com' },
            { headline: 'D2C acquisition strategy tops ₹1,100 crore ARR', detail: 'Portfolio of acquired digital-first brands — Beardo, Just Herbs, Plix, Cosmix, 4700BC — now a meaningful growth contributor.', date: '16 Jul 2026', source: 'https://www.thehindubusinessline.com' }
          ]
        },
        {
          symbol: 'TATACONSUM', name: 'Tata Consumer Products', price: 1045.00, change: -0.38,
          high52w: 1282.70, low52w: 1007.20, marketCap: '₹1,05,500 Cr', pe: '66.0',
          news: [
            { headline: 'FY26 revenue crosses ₹20,000 crore milestone, profit +20% to ₹1,547 crore', detail: 'Revenue grew 15% YoY as the company targets over 20% long-term EBITDA margin.', date: '2026', source: 'https://economictimes.indiatimes.com' },
            { headline: 'Growth businesses now over 30% of India portfolio, growing 24-25%/year', detail: "Capital Foods (Ching's), Organic India and NourishCo brands are outpacing the legacy tea and salt business.", date: '2026', source: 'https://www.livemint.com' }
          ]
        },
        {
          symbol: 'VBL', name: 'Varun Beverages', price: 414.00, change: -1.14,
          high52w: 555.80, low52w: 381.00, marketCap: '₹1,40,000 Cr', pe: '42.5',
          news: [
            { headline: 'Q2 CY2026 revenue +20.4% YoY to ₹8,451 crore, declares 2nd interim dividend', detail: 'PAT rose 15% to ₹1,521 crore; board declared a second interim dividend of ₹0.50/share.', date: '28 Jul 2026', source: 'https://insights.dsij.in/dsijarticledetail/ravi-jaipuria-led-beverage-giant-reports-20-revenue-growth-board-declares-interim-dividend-and-extends-pepsico-pact-58634' },
            { headline: 'Extends exclusive PepsiCo India bottling agreement to April 2049', detail: 'Long-term security for its core bottling business alongside new plant construction in Kenya and integration of the Twizza (South Africa) acquisition.', date: '28 Jul 2026', source: 'https://www.investing.com/news/company-news/varun-beverages-q2-2026-slides-20-revenue-growth-amid-expansion-93CH-4815961' }
          ]
        },
        {
          symbol: 'KRBL', name: 'KRBL Ltd (Rice)', price: 428.65, change: -2.06,
          high52w: 495.00, low52w: 274.65, marketCap: '₹9,811 Cr', pe: '15.1',
          news: [
            { headline: 'Q1 FY27 net profit surges 73% YoY to ₹261 crore, EBITDA margin nearly doubles', detail: 'Margin expanded to 23.8% from 13.9% even as revenue dipped 5.6% on lower Middle East exports.', date: '13-17 Aug 2026', source: 'https://tradebrains.in/krbl-q1-fy27-results-net-profit-jumps-73-2-yoy-to-260-74-cr' },
            { headline: 'Wins Global Leading Brand Award in London; India Gate wins Global Iconic Brand Award', detail: "Recognition at the Global Brand & Leadership Conclave 2026, House of Lords, reinforcing KRBL's position as the world's largest basmati rice exporter.", date: '5 Jun 2026', source: 'https://www.bignewsnetwork.com/news/279172693/krbl-ltd-wins-two-prestigious-awards-at-global-brand-leadership-conclave-2026-in-london' },
            { headline: 'Launches "India Gate Classic – Biryani Kit" and "India Gate Whole Flakes"', detail: 'New masala/regional rice product lines expanding beyond core basmati exports into the consumer packaged foods space.', date: '4 Jul 2026', source: 'https://tradebrains.in' }
          ]
        }
      ]
    },
    {
      key: 'agri',
      en: 'Agri Inputs & Seeds', ta: 'வேளாண் உள்ளீடு & விதைகள்', hi: 'कृषि इनपुट व बीज',
      stocks: [
        {
          symbol: 'COROMANDEL', name: 'Coromandel International', price: 1903.00, change: -0.45,
          high52w: 2499.00, low52w: 1706.50, marketCap: '₹56,100 Cr', pe: '30.7',
          news: [
            { headline: 'Commissioned major sulphuric + phosphoric acid plant at Kakinada', detail: 'New 2,000 TPD sulphuric acid and 650 TPD phosphoric acid plant (₹1,100 crore) came online in Q4 FY26; a 7.5 lakh TPA NPK granulation unit ("Train H") is targeted for Q4 FY27.', date: 'FY26', source: 'https://www.screener.in/company/COROMANDEL/' },
            { headline: 'Acquired controlling 53.13% stake in NACL Industries for ₹820 crore', detail: "Expands Coromandel's presence in the crop-protection and agrochemicals space through the NACL acquisition.", date: 'Aug 2025', source: 'https://www.screener.in/company/COROMANDEL/' },
            { headline: 'Q1 FY27 net profit fell 26% YoY to ₹382 crore despite 15% revenue growth', detail: 'Revenue rose to ₹8,215 crore but elevated raw-material costs pressured margins.', date: '23 Jul 2026', source: 'https://www.thehindu.com/business/Industry/coromandel-international-q1-net-falls-26-despite-higher-revenue' }
          ]
        },
        {
          symbol: 'RALLIS', name: 'Rallis India', price: 265.91, change: 1.22,
          high52w: 385.90, low52w: 215.50, marketCap: '₹5,200 Cr', pe: '24.7',
          news: [
            { headline: 'Q1 FY27 profit rises 32% YoY on margin improvement', detail: "Broad-based growth across the Tata Group agri-input company's crop protection and seeds businesses.", date: 'Jul 2026', source: 'https://www.cnbctv18.com/market/rallis-india-q1-profit-rises-32-pc' },
            { headline: 'Launches Balwan and Prodim Ultra herbicides', detail: '3-4 new crop protection and nutrition products launched in Q1 FY27, strengthening the herbicide portfolio.', date: 'Jul 2026', source: 'https://www.investing.com/news/company-news/rallis-india-q1-fy27-slides-profit-jumps-31-on-margin-gains' },
            { headline: 'Seed business revenue grows 38% YoY to ₹305 crore', detail: "Seeds emerging as a fast-growing segment within the company's broader agri-input portfolio.", date: 'Jul 2026', source: 'https://www.investing.com/news/company-news/rallis-india-q1-fy27-slides-profit-jumps-31-on-margin-gains' }
          ]
        },
        {
          symbol: 'KSCL', name: 'Kaveri Seed Company', price: 772.30, change: -2.01,
          high52w: 1526.90, low52w: 705.10, marketCap: '₹3,973 Cr', pe: '13.6',
          news: [
            { headline: 'Q1 FY27: revenue ₹815 crore, PAT ₹271.3 crore, exports up 4x YoY', detail: 'Strong quarter for the hybrid seed maker (maize, cotton, paddy, vegetables), driven by a sharp jump in export volumes.', date: '13 Aug 2026', source: 'https://www.screener.in/company/KSCL/consolidated/' },
            { headline: 'Board fixes AGM for 29 September 2026', detail: 'Board approved Q1 FY27 results and reappointed MD/whole-time directors alongside setting the annual general meeting date.', date: 'Aug 2026', source: 'https://www.screener.in/company/KSCL/consolidated/' }
          ]
        },
        {
          symbol: 'GSFC', name: 'Gujarat State Fertilizers', price: 157.97, change: -0.75,
          high52w: 220.59, low52w: 138.83, marketCap: '₹6,295 Cr', pe: '9.1',
          news: [
            { headline: 'Commissioned 198 KTPA sulphuric acid (SA-V) plant', detail: 'New plant came online 7 January 2026; company achieved its highest fertilizer production in 5 years for Q3 and 9M FY26.', date: 'Jan 2026', source: 'https://www.investywise.com/gujarat-state-fertilizers-chemicals-limited-q3-fy-25-26-financial-results-capex-update' },
            { headline: 'Q3 FY26 revenue ₹2,941 crore, net profit ₹158 crore, up 18% YoY', detail: 'Steady profit growth alongside record fertilizer output for the quarter.', date: 'Feb 2026', source: 'https://www.business-standard.com/companies/quarterly-results/gujarat-state-fertilizers-chemicals-ltd' }
          ]
        },
        {
          symbol: 'IPL', name: 'India Pesticides', price: 137.79, change: -1.91,
          high52w: 245.84, low52w: 125.00, marketCap: '₹1,618 Cr', pe: '13.2',
          news: [
            { headline: 'Wins EU Technical Equivalence approval for a fungicide product', detail: 'Could add ₹30-40 crore in annual revenue once EU sales begin from November 2026 — a meaningful export market opening.', date: 'Aug 2026', source: 'https://scanx.trade/stock-market-news/companies/india-pesticides-q1-results-revenue-falls-9-2-yoy-256-crore' },
            { headline: 'Hamirpur capacity expansion progressing — 2 of 10 blocks operational', detail: 'Expected to add ₹50-60 crore revenue this fiscal year, with long-term potential of ~₹1,000 crore over 3-4 years.', date: 'Aug 2026', source: 'https://alphastreet.com/india/india-pesticides-ltd-ipl-q1-2027-earnings-call-transcript' },
            { headline: 'Q1 FY27 revenue fell 9.2% YoY to ₹256 crore on weak monsoon demand', detail: 'Key herbicide Pretilachlor saw soft domestic demand amid erratic monsoon; PAT fell to ₹23 crore from ₹35 crore.', date: '2 Aug 2026', source: 'https://scanx.trade/stock-market-news/companies/india-pesticides-q1-results-revenue-falls-9-2-yoy-256-crore' }
          ]
        }
      ]
    },
    {
      key: 'equip',
      en: 'Farm Equipment', ta: 'விவசாய இயந்திரங்கள்', hi: 'कृषि उपकरण',
      stocks: [
        {
          symbol: 'ESCORTS', name: 'Escorts Kubota', price: 3015.50, change: 1.40,
          high52w: 4180.00, low52w: 2700.00, marketCap: '₹33,700 Cr', pe: '23.7',
          news: [
            { headline: '₹2,000 crore greenfield plant breaks ground in Uttar Pradesh', detail: "New 154-acre manufacturing campus in YEIDA (Jewar), part of a larger ₹5,000 crore multi-phase investment. Phase 1 adds capacity for 60,000 tractors/year and 15,000 construction equipment units/year — one of Kubota Group's largest global facilities.", date: '19 Aug 2026', source: 'https://economictimes.indiatimes.com/industry/auto/lcv-hcv/escorts-kubota-announces-rs-2000-cr-investment-on-new-plant-in-up' },
            { headline: 'Q1 FY27: best-ever quarter, revenue +28.3% YoY to ₹3,208 crore', detail: 'Standalone normalized net profit up 26% YoY to ₹387.3 crore; tractor volumes up 20.5% to 36,862 units.', date: '3 Aug 2026', source: 'https://www.business-standard.com/companies/quarterly-results/escorts-kubota-q1fy27' },
            { headline: 'Goal: top-3 Indian tractor maker by 2030', detail: 'Kubota Corporation leadership targets moving Escorts Kubota from #4 (behind Mahindra, TAFE, Sonalika) to top-3, backed by the Jewar expansion and new product launches — positioning India as a global export hub.', date: '19 Aug 2026', source: 'https://economictimes.indiatimes.com/industry/auto/lcv-hcv/escorts-kubota-eyes-top-3-tractor-spot-in-india-by-2030' },
            { headline: 'July 2026 tractor sales up 22% YoY to 8,731 units', detail: 'Domestic sales surged 23.7% YoY to 8,194 units, continuing a strong FY27 volume trend.', date: '1 Aug 2026', source: 'https://www.sahi.com/news/escorts-kubota-hikes-tractor-prices-in-august-2026-following-22-july-sales-surge-90-PE1_CORPO' },
            { headline: 'Hiked tractor prices across all brands', detail: 'Model-, brand- and region-specific price increases across the full tractor range, filed via BSE/NSE disclosure, aimed at offsetting input cost inflation.', date: '11 Aug 2026', source: 'https://tractorsdekho.com/tractor-news/escorts-kubota-announces-tractor-price-hike-across-all-brands-from-august-2026-1486.html' }
          ]
        }
      ]
    }
  ]
};
