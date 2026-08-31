/* Agridetails — Agri & Food Stocks watchlist (NSE India).
   Financials (price, 52w high/low, market cap, P/E) and news/achievement
   items compiled from public NSE/BSE market data and financial press —
   NOT a live feed. NSE India charges for real-time data APIs; small free
   sites cannot legally re-stream that, so this is a periodically-refreshed
   snapshot (updated by a daily automation) sourced from Moneycontrol,
   Screener.in, LiveMint, Economic Times, INDmoney, Bajaj Finserv, ScanX,
   ETMoney, Zerodha, Devyara, ICICI Direct, company press releases and
   sector trade press (Autocar Professional, AgroSpectrum India), Aug 2026.
   For real-time quotes, always check nseindia.com directly. */
const AGRI_STOCKS = {
  asOf: '2026-08-31',
  groups: [
    {
      key: 'food',
      en: 'Food & FMCG', ta: 'உணவு & FMCG', hi: 'खाद्य व FMCG',
      stocks: [
        {
          symbol: 'ITC', name: 'ITC Ltd', price: 269.10, change: -0.43,
          high52w: 427.00, low52w: 265.00, marketCap: '₹3,37,239 Cr', pe: '17.0',
          news: [
            { headline: 'Q4 FY26 results: revenue +17% YoY, ₹8/share dividend announced', detail: 'Profit from operations rose even as consolidated PAT growth moderated; cigarettes and FMCG segments led revenue growth.', date: 'May 2026', source: 'https://www.sahi.com/blogs/itc-q4-2026-results' },
            { headline: 'Trading near 52-week low, well off ₹427 high', detail: 'Stock down over a third from its 52-week high of ₹427, reflecting broader FMCG sector pressure through mid-2026.', date: 'Aug 2026', source: 'https://www.moneycontrol.com/india/stockpricequote/diversified/itc/ITC' }
          ]
        },
        {
          symbol: 'NESTLEIND', name: 'Nestle India', price: 1451.50, change: -1.86,
          high52w: 1498.10, low52w: 1084.70, marketCap: '₹2,75,845 Cr', pe: '80.4',
          news: [
            { headline: 'Q1 results: net profit surges 48% YoY to ₹975 crore', detail: 'Revenue rose 25% YoY, one of the strongest quarters in recent years for the FMCG major.', date: 'Jul 2026', source: 'https://www.livemint.com/market/market-stats/nestle-india-q1-results-s0003095' },
            { headline: 'Richest valuation among major FMCG peers', detail: 'P/E near 80x reflects premium market positioning versus sector average, making it among the priciest large-cap FMCG stocks.', date: 'Aug 2026', source: 'https://scanx.trade/company/nestle-india-ltd' }
          ]
        },
        {
          symbol: 'BRITANNIA', name: 'Britannia Industries', price: 5310.00, change: -1.35,
          high52w: 6337.00, low52w: 5035.00, marketCap: '₹1,28,455 Cr', pe: '48.6',
          news: [
            { headline: 'Q1 FY27 net profit rises 14% to ₹591 crore', detail: 'Revenue up 8.2% YoY with EBITDA margin expansion, continuing a run of double-digit profit growth.', date: 'Jul 2026', source: 'https://www.kotakneo.com/news/stocks/britannia-industries-q1-fy-2026-27-results-net-profit-rises/' },
            { headline: 'Premium biscuit portfolio driving growth', detail: 'Premium product salience up 310 basis points; biscuit and adjacent categories remain core growth engines.', date: '2026', source: 'https://www.screener.in/company/BRITANNIA/' }
          ]
        },
        {
          symbol: 'DABUR', name: 'Dabur India', price: 410.00, change: -0.97,
          high52w: 577.00, low52w: 392.00, marketCap: '₹70,027 Cr', pe: '45.2',
          news: [
            { headline: 'Q1 profit rises 15% to ₹591 crore — third straight quarter of double-digit growth', detail: 'Consolidated revenue up 10.6%, helped by price increases, cost control and broad-based FMCG portfolio growth.', date: 'Jul 2026', source: 'https://economictimes.indiatimes.com/markets/stocks/earnings/dabur-q1-results-profit-rises-15-to-rs-591-crore-revenue-up-11/printarticle/132711242.cms' },
            { headline: 'Trading well below 52-week high of ₹577', detail: 'Stock currently near its 52-week low band amid a broader FMCG sector correction.', date: 'Aug 2026', source: 'https://www.screener.in/company/DABUR/' }
          ]
        },
        {
          symbol: 'MARICO', name: 'Marico Ltd', price: 833.00, change: -1.71,
          high52w: 889.10, low52w: 690.30, marketCap: '₹1,08,156 Cr', pe: '66.8',
          news: [
            { headline: 'Enters ₹10,000-crore shampoo market with Parachute Advansed Protein Shampoo', detail: 'Launched an 8-variant protein shampoo range, expanding beyond hair oils into broader hair-care as part of its innovation-led growth strategy.', date: 'May 2026', source: 'https://www.storyboard18.com/brand-marketing/marico-enters-indias-rs-10000-crore-shampoo-market-with-parachute-advansed-protein-shampoo-99244.htm' },
            { headline: 'Down 6% from 52-week high, up 21% from 52-week low', detail: 'Stock trading mid-range for the year, reflecting steady rather than explosive momentum.', date: 'Aug 2026', source: 'https://www.indmoney.com/stocks/marico-ltd-share-price' }
          ]
        },
        {
          symbol: 'TATACONSUM', name: 'Tata Consumer Products', price: 1047.10, change: -1.26,
          high52w: 1225.00, low52w: 950.00, marketCap: '₹1,04,700 Cr', pe: '45.1',
          news: [
            { headline: 'Expanding food services and pharmacy channels nationwide in FY26', detail: 'Building on Capital Foods and Organic India acquisitions, leveraging green tea, low-sodium salt and mineral water lines for distribution growth.', date: '2026', source: 'https://www.businessoffood.in/tata-consumer-products-to-expand-food-services-and-pharmacy-channels-nationwide-in-fy26/' },
            { headline: 'Targeting 17% EBITDA margin in 3 years via distribution overhaul', detail: 'Revenue rose 15% to ₹20,290 crore in FY26 as the company restructures its general trade and quick-commerce distribution model.', date: '2026', source: 'https://www.bajajfinserv.in/investments/tataconsum-share-price' }
          ]
        },
        {
          symbol: 'VBL', name: 'Varun Beverages', price: 421.25, change: -3.82,
          high52w: 543.95, low52w: 381.00, marketCap: '₹1,72,994 Cr', pe: '53.1',
          news: [
            { headline: 'Extends exclusive PepsiCo India bottling agreement to 2049', detail: 'Board also declared an interim dividend (25% of face value) alongside 20% Q2 CY2026 revenue growth and international expansion.', date: '28 Jul 2026', source: 'https://insights.dsij.in/dsijarticledetail/ravi-jaipuria-led-beverage-giant-reports-20-revenue-growth-board-declares-interim-dividend-and-extends-pepsico-pact-58634' },
            { headline: 'Building new production plant in Kenya; integrating Twizza (South Africa)', detail: 'Continuing an aggressive international expansion strategy across Africa alongside its core India/South Asia beverage business.', date: '2026', source: 'https://scanx.trade/company/varun-beverages-ltd' }
          ]
        },
        {
          symbol: 'KRBL', name: 'KRBL Ltd (Rice)', price: 445.65, change: 5.28,
          high52w: 495.00, low52w: 274.65, marketCap: '₹10,046 Cr', pe: '12.8',
          news: [
            { headline: 'Q1 FY27 net profit jumps 73% YoY to ₹260.74 crore', detail: 'Sharp profitability improvement on better cost and margin management, even as revenue stayed roughly flat YoY.', date: 'Jul 2026', source: 'https://www.etmoney.com/stocks/krbl-ltd/676' },
            { headline: 'Wins two awards at Global Brand & Leadership Conclave, London', detail: "Recognition for its basmati rice brand on the international stage, reinforcing its position as world's largest basmati exporter.", date: '5 Jun 2026', source: 'https://www.bignewsnetwork.com/news/279172693/krbl-ltd-wins-two-prestigious-awards-at-global-brand-leadership-conclave-2026-in-london' }
          ]
        }
      ]
    },
    {
      key: 'agri',
      en: 'Agri Inputs & Seeds', ta: 'வேளாண் உள்ளீடு & விதைகள்', hi: 'कृषि इनपुट व बीज',
      stocks: [
        {
          symbol: 'COROMANDEL', name: 'Coromandel International', price: 1913.70, change: -1.85,
          high52w: 2499.00, low52w: 1706.50, marketCap: '₹56,891 Cr', pe: '31.7',
          news: [
            { headline: 'Posts FY26 results, sustains growth momentum', detail: "One of India's leading agri-solutions providers reported full-year results for the year ended March 31, 2026, continuing to strengthen its leadership across fertilizer and crop-protection segments.", date: '7 May 2026', source: 'https://coromandel.biz/press-release/coromandel-international-limited-posts-fy26-results-sustains-growth-momentum' },
            { headline: 'Trading 23% below 52-week high of ₹2,499', detail: 'Stock has corrected significantly from its yearly peak amid sector-wide fertilizer stock pressure.', date: 'Aug 2026', source: 'https://www.indmoney.com/stocks/coromandel-international-ltd-share-price' }
          ]
        },
        {
          symbol: 'RALLIS', name: 'Rallis India', price: 230.15, change: -2.95,
          high52w: 385.70, low52w: 207.53, marketCap: '₹4,127 Cr', pe: '19.1',
          news: [
            { headline: 'Launches ALSTOR and FIPLAM, expands crop protection portfolio', detail: "Two new insecticides strengthen the Tata Group agri-input company's pest-control product line for Indian farmers.", date: '27 Feb 2026', source: 'https://agrospectrumindia.com/news/24/33532/rallis-india-launches-alstor-and-fiplam-expands-crop-protection-portfolio.html' },
            { headline: 'Q1 FY27: revenue +7%, EBITDA and PAT grow 23% and 31% YoY', detail: 'Strong margin improvement in the Soil & Plant Health segment despite modest topline growth.', date: '20 Jul 2026', source: 'https://www.bajajfinserv.in/investments/rallis-share-price' }
          ]
        },
        {
          symbol: 'KSCL', name: 'Kaveri Seed Company', price: 780.85, change: -0.67,
          high52w: 1225.00, low52w: 705.10, marketCap: '₹4,047 Cr', pe: '16.2',
          news: [
            { headline: 'Announces audited financial results for FY 2025-26', detail: 'Hybrid seed maker (maize, cotton, paddy, vegetables) reported its full-year audited numbers to the board.', date: '26 May 2026', source: 'https://www.investywise.com/kaveri-seed-company-reports-audited-financial-results/' },
            { headline: 'Trading well off 52-week high of ₹1,225', detail: 'Stock down over a third from its yearly peak, though still up modestly over the last 5 trading days.', date: 'Aug 2026', source: 'https://www.screener.in/company/KSCL/consolidated/' }
          ]
        },
        {
          symbol: 'GSFC', name: 'Gujarat State Fertilizers', price: 169.08, change: -0.70,
          high52w: 220.59, low52w: 138.83, marketCap: '₹6,945 Cr', pe: '10.1',
          news: [
            { headline: 'Q1 FY27 sales of ₹3,581 crore, PAT ₹161 crore', detail: 'Board approved unaudited Q1 results and reappointed cost auditors; results call held 13 August 2026.', date: 'Aug 2026', source: 'https://www.screener.in/company/GSFC/consolidated' },
            { headline: 'Lowest P/E among major listed fertilizer peers', detail: 'At roughly 10x earnings, GSFC trades cheaper than most agri-input peers, reflecting a value-stock profile in the sector.', date: 'Aug 2026', source: 'https://www.bajajfinserv.in/investments/gsfc-share-price' }
          ]
        },
        {
          symbol: 'IPL', name: 'India Pesticides', price: 155.20, change: -1.36,
          high52w: 245.84, low52w: 125.00, marketCap: '₹1,771 Cr', pe: '16.7',
          news: [
            { headline: 'Declares ₹0.75/share dividend alongside Q1 FY27 results', detail: 'Reported quarterly net profit growth alongside the payout announcement.', date: '24 Aug 2026', source: 'https://www.moneycontrol.com/markets/financials/quarterly-results/indiapesticides-IP10/' },
            { headline: 'Trading below 3-year average P/E of 26.7x', detail: 'Current valuation of ~16.7x suggests the stock is not expensive versus its own historical range or technical/agrochemical peers.', date: 'Aug 2026', source: 'https://zerodha.com/markets/stocks/NSE/IPL/' }
          ]
        }
      ]
    },
    {
      key: 'equip',
      en: 'Farm Equipment', ta: 'விவசாய இயந்திரங்கள்', hi: 'कृषि उपकरण',
      stocks: [
        {
          symbol: 'ESCORTS', name: 'Escorts Kubota', price: 3064.80, change: 0.66,
          high52w: 4180.00, low52w: 2710.10, marketCap: '₹36,410 Cr', pe: '27.9',
          news: [
            { headline: 'Ends FY26 with 6.6% tractor growth, 24.6% jump in construction equipment sales', detail: 'Sold 12,119 tractors in March 2026 alone as the Faridabad-based manufacturer closed the fiscal year on a strong note.', date: 'Mar 2026', source: 'https://autocarpro.in/news/escorts-kubota-ends-fy26-with-66-tractor-growth-and-246-jump-in-construction-equipment-sales-in-march-2026-131902' },
            { headline: 'April 2026 sales surge 24.4% to 10,857 units', detail: 'Growth supported by good farm sentiment, adequate reservoir levels, improved rural liquidity following the GST cut, and steady underlying tractor demand.', date: 'Apr 2026', source: 'https://autocarpro.in/news/escorts-kubota-ends-fy26-with-66-tractor-growth-and-246-jump-in-construction-equipment-sales-in-march-2026-131902' },
            { headline: 'Hiked tractor prices across all brands in August 2026', detail: 'Price revision applied across the full Escorts Kubota tractor range; quantum and effective date vary by model and geography.', date: 'Aug 2026', source: 'https://devyara.com/en-us/nse/escorts' }
          ]
        }
      ]
    }
  ]
};
