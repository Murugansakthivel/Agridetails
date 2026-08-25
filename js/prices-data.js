/* Agridetails — price data.
   DEMO dataset: realistic Tamil Nadu price levels for illustration only.
   LIVE mode: when window.AGRI_CONFIG.DATA_GOV_API_KEY is set, app.js fetches
   the AGMARKNET "Current Daily Price" resource from data.gov.in instead. */
const PRICE_DATA = {
  updated: '2026-08-25',
  markets: ['Chennai (Koyambedu)', 'Coimbatore', 'Madurai', 'Salem', 'Erode', 'Vellore'],
  rows: [
    { crop: 'Tomato',        ta: 'தக்காளி',       market: 'Chennai (Koyambedu)', min: 800,  modal: 1200, max: 1600 },
    { crop: 'Tomato',        ta: 'தக்காளி',       market: 'Coimbatore',          min: 700,  modal: 1100, max: 1500 },
    { crop: 'Onion',         ta: 'வெங்காயம்',      market: 'Chennai (Koyambedu)', min: 1100, modal: 1450, max: 1800 },
    { crop: 'Onion',         ta: 'வெங்காயம்',      market: 'Madurai',             min: 1050, modal: 1400, max: 1750 },
    { crop: 'Potato',        ta: 'உருளைக்கிழங்கு', market: 'Chennai (Koyambedu)', min: 1200, modal: 1500, max: 1900 },
    { crop: 'Carrot',        ta: 'கேரட்',         market: 'Chennai (Koyambedu)', min: 1500, modal: 2000, max: 2500 },
    { crop: 'Cabbage',       ta: 'முட்டைகோஸ்',     market: 'Salem',               min: 600,  modal: 900,  max: 1200 },
    { crop: 'Beans',         ta: 'பீன்ஸ்',        market: 'Coimbatore',          min: 2200, modal: 2800, max: 3400 },
    { crop: 'Brinjal',       ta: 'கத்தரிக்காய்',   market: 'Madurai',             min: 1000, modal: 1500, max: 2000 },
    { crop: 'Lady\'s Finger',ta: 'வெண்டைக்காய்',  market: 'Salem',               min: 1500, modal: 2000, max: 2500 },
    { crop: 'Rice',          ta: 'நெல் / அரிசி',   market: 'Erode',               min: 2200, modal: 2600, max: 3000 },
    { crop: 'Rice',          ta: 'நெல் / அரிசி',   market: 'Chennai (Koyambedu)', min: 2300, modal: 2700, max: 3100 },
    { crop: 'Maize',         ta: 'மக்காச்சோளம்',    market: 'Erode',               min: 1900, modal: 2100, max: 2300 },
    { crop: 'Groundnut',     ta: 'நிலக்கடலை',      market: 'Vellore',             min: 4800, modal: 5400, max: 6000 },
    { crop: 'Black Gram',    ta: 'உளுத்தம்பருப்பு', market: 'Vellore',             min: 6000, modal: 6800, max: 7400 },
    { crop: 'Green Gram',    ta: 'பாசிப்பயறு',     market: 'Madurai',             min: 6200, modal: 7000, max: 7600 },
    { crop: 'Cumbu (Bajra)', ta: 'கம்பு',          market: 'Erode',               min: 1800, modal: 2100, max: 2400 },
    { crop: 'Chilli (Dry)',  ta: 'மிளகாய் வத்தல்', market: 'Vellore',             min: 9000, modal: 11000, max: 13000 },
    { crop: 'Turmeric',      ta: 'மஞ்சள்',         market: 'Erode',               min: 8000, modal: 9500, max: 11000 },
    { crop: 'Banana',        ta: 'வாழை',           market: 'Trichy',              min: 1000, modal: 1500, max: 2000 }
  ]
};

/* 7-day history for trend cards (demo). key = crop|market */
const PRICE_HISTORY = {
  'Tomato|Chennai (Koyambedu)':      [1350, 1320, 1280, 1260, 1240, 1220, 1200],
  'Onion|Chennai (Koyambedu)':       [1380, 1390, 1410, 1420, 1430, 1440, 1450],
  'Rice|Erode':                      [2550, 2560, 2570, 2580, 2590, 2595, 2600],
  'Carrot|Chennai (Koyambedu)':      [2150, 2120, 2090, 2060, 2040, 2020, 2000],
  'Brinjal|Madurai':                 [1420, 1430, 1450, 1460, 1470, 1490, 1500],
  'Groundnut|Vellore':               [5200, 5250, 5280, 5300, 5340, 5370, 5400]
};
