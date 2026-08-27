/* Agridetails — Agri & Food Stocks watchlist (NSE India).
   Snapshot compiled from public NSE/BSE market reports, Aug 20-27 2026
   (see agri-stocks.js header for source list). This is a periodic snapshot,
   NOT a live feed — for real-time quotes, NSE India charges for market data
   APIs; this panel gives farmers/traders a quick directional read on
   agri-input, seed, and food-processing companies without needing a
   trading account.

   Sources: univest.in Nifty FMCG closing bell (26 Aug 2026), livemint.com
   stock pages (Kaveri Seed 27 Aug, Coromandel 20 Aug), KRBL rise report
   (26 Aug), coindataflow.com NSE agri-inputs sector, indmoney.com Escorts
   Kubota (25-26 Aug), tickjournal.com Nifty FMCG constituents. */
const AGRI_STOCKS = {
  asOf: '2026-08-27',
  groups: [
    {
      key: 'food',
      en: 'Food & FMCG', ta: 'உணவு & FMCG', hi: 'खाद्य व FMCG',
      stocks: [
        { symbol: 'ITC',        name: 'ITC Ltd',                price: 270.25,  change: -0.42 },
        { symbol: 'NESTLEIND',  name: 'Nestle India',           price: 1451.50, change: -1.86 },
        { symbol: 'BRITANNIA',  name: 'Britannia Industries',   price: 5310.00, change: -1.35 },
        { symbol: 'DABUR',      name: 'Dabur India',            price: 410.00,  change: -0.97 },
        { symbol: 'MARICO',     name: 'Marico Ltd',             price: 833.00,  change: -1.71 },
        { symbol: 'TATACONSUM', name: 'Tata Consumer Products', price: 1047.10, change: -1.26 },
        { symbol: 'VBL',        name: 'Varun Beverages',        price: 421.25,  change: -3.82 },
        { symbol: 'KRBL',       name: 'KRBL Ltd (Rice)',        price: 445.65,  change: 5.28 }
      ]
    },
    {
      key: 'agri',
      en: 'Agri Inputs & Seeds', ta: 'வேளாண் உள்ளீடு & விதைகள்', hi: 'कृषि इनपुट व बीज',
      stocks: [
        { symbol: 'COROMANDEL', name: 'Coromandel International', price: 2001.00, change: -1.85 },
        { symbol: 'RALLIS',     name: 'Rallis India',             price: 230.15,  change: -2.95 },
        { symbol: 'KSCL',       name: 'Kaveri Seed Company',      price: 780.85,  change: -0.67 },
        { symbol: 'GSFC',       name: 'Gujarat State Fertilizers',price: 160.87,  change: -0.70 },
        { symbol: 'IPL',        name: 'India Pesticides',         price: 155.20,  change: -1.36 }
      ]
    },
    {
      key: 'equip',
      en: 'Farm Equipment', ta: 'விவசாய இயந்திரங்கள்', hi: 'कृषि उपकरण',
      stocks: [
        { symbol: 'ESCORTS',    name: 'Escorts Kubota',           price: 3064.80, change: 0.66 }
      ]
    }
  ]
};
