/* Agridetails — full crop catalog: Vegetables & Fruits (EN / தமிழ் / हिंदी)
   Names supplied by site owner. Base prices are sample wholesale levels
   (₹ per quintal); live mode replaces them with AGMARKNET data. */
const CROP_CATALOG = {
  vegetables: [
    { en: 'Potato',            ta: 'உருளைக்கிழங்கு',        hi: 'आलू',              base: 1500 },
    { en: 'Onion',             ta: 'வெங்காயம்',             hi: 'प्याज़',            base: 1450 },
    { en: 'Tomato',            ta: 'தக்காளி',               hi: 'टमाटर',            base: 1200 },
    { en: 'Brinjal',           ta: 'கத்தரிக்காய்',          hi: 'बैंगन',            base: 1500 },
    { en: "Lady's Finger",     ta: 'வெண்டைக்காய்',         hi: 'भिंडी',            base: 2000 },
    { en: 'Cauliflower',       ta: 'காலிஃபிளவர்',           hi: 'फूलगोभी',          base: 1600 },
    { en: 'Cabbage',           ta: 'முட்டைகோஸ்',           hi: 'पत्तागोभी',        base: 900 },
    { en: 'Carrot',            ta: 'கேரட்',                hi: 'गाजर',             base: 2000 },
    { en: 'Beetroot',          ta: 'பீட்ரூட்',              hi: 'चुकंदर',           base: 1400 },
    { en: 'Radish',            ta: 'முள்ளங்கி',             hi: 'मूली',             base: 800 },
    { en: 'Spinach',           ta: 'கீரை',                 hi: 'पालक',             base: 1200 },
    { en: 'Fenugreek Leaves',  ta: 'வெந்தயக் கீரை',        hi: 'मेथी',             base: 1500 },
    { en: 'Green Peas',        ta: 'பச்சைப் பட்டாணி',       hi: 'हरी मटर',          base: 3500 },
    { en: 'Green Beans',       ta: 'பீன்ஸ்',               hi: 'हरी फलियाँ',       base: 2800 },
    { en: 'Cluster Beans',     ta: 'கொத்தவரங்காய்',        hi: 'ग्वार फली',        base: 2400 },
    { en: 'Capsicum',          ta: 'குடைமிளகாய்',          hi: 'शिमला मिर्च',      base: 2500 },
    { en: 'Green Chilli',      ta: 'பச்சை மிளகாய்',        hi: 'हरी मिर्च',        base: 4000 },
    { en: 'Cucumber',          ta: 'வெள்ளரிக்காய்',        hi: 'खीरा',             base: 1200 },
    { en: 'Bottle Gourd',      ta: 'சுரைக்காய்',           hi: 'लौकी',             base: 1000 },
    { en: 'Bitter Gourd',      ta: 'பாகற்காய்',            hi: 'करेला',            base: 1800 },
    { en: 'Ridge Gourd',       ta: 'பீர்க்கங்காய்',        hi: 'तुरई',             base: 1400 },
    { en: 'Snake Gourd',       ta: 'புடலங்காய்',           hi: 'चिचिंडा',          base: 1300 },
    { en: 'Ivy Gourd',         ta: 'கோவைக்காய்',           hi: 'कुंदरू',           base: 2000 },
    { en: 'Pumpkin',           ta: 'பூசணிக்காய்',          hi: 'कद्दू',            base: 900 },
    { en: 'Drumstick',         ta: 'முருங்கைக்காய்',       hi: 'सहजन',             base: 3000 },
    { en: 'Sweet Potato',      ta: 'சர்க்கரைவள்ளிக்கிழங்கு', hi: 'शकरकंद',           base: 1400 },
    { en: 'Yam',               ta: 'சேனைக்கிழங்கு',        hi: 'सूरन',             base: 1800 },
    { en: 'Colocasia',         ta: 'சேப்பங்கிழங்கு',        hi: 'अरबी',             base: 1600 },
    { en: 'Garlic',            ta: 'பூண்டு',               hi: 'लहसुन',            base: 6500 },
    { en: 'Ginger',            ta: 'இஞ்சி',                hi: 'अदरक',             base: 5500 },
    { en: 'Sweet Corn',        ta: 'சோளம்',                hi: 'मक्का',            base: 1800 },
    { en: 'Broccoli',          ta: 'ப்ரோக்கோலி',           hi: 'ब्रोकोली',         base: 3500 },
    { en: 'Mushroom',          ta: 'காளான்',               hi: 'मशरूम',            base: 9000 },
    { en: 'Lotus Stem',        ta: 'தாமரைத் தண்டு',        hi: 'कमल ककड़ी',        base: 4000 },
    { en: 'Raw Banana',        ta: 'வாழைக்காய்',           hi: 'कच्चा केला',       base: 1200 },
    { en: 'Plantain Flower',   ta: 'வாழைப்பூ',             hi: 'केले का फूल',      base: 2500 },
    { en: 'Chow Chow',         ta: 'சௌ சௌ',                hi: 'चौ-चौ',            base: 1300 },
    { en: 'Coriander Leaves',  ta: 'கொத்தமல்லி',           hi: 'धनिया',            base: 3000 },
    { en: 'Mint Leaves',       ta: 'புதினா',               hi: 'पुदीना',           base: 2600 }
  ],

  fruits: [
    { en: 'Mango',           ta: 'மாம்பழம்',          hi: 'आम',            base: 5000 },
    { en: 'Banana',          ta: 'வாழைப்பழம்',        hi: 'केला',          base: 1500 },
    { en: 'Apple',           ta: 'ஆப்பிள்',           hi: 'सेब',           base: 12000 },
    { en: 'Orange',          ta: 'ஆரஞ்சு',            hi: 'संतरा',         base: 5000 },
    { en: 'Sweet Lime',      ta: 'சாத்துக்குடி',       hi: 'मौसंबी',        base: 3000 },
    { en: 'Lemon',           ta: 'எலுமிச்சை',         hi: 'नींबू',         base: 3500 },
    { en: 'Grapes',          ta: 'திராட்சை',          hi: 'अंगूर',         base: 4500 },
    { en: 'Pomegranate',     ta: 'மாதுளை',            hi: 'अनार',          base: 7000 },
    { en: 'Guava',           ta: 'கொய்யாப்பழம்',      hi: 'अमरूद',         base: 2200 },
    { en: 'Papaya',          ta: 'பப்பாளி',           hi: 'पपीता',         base: 1500 },
    { en: 'Watermelon',      ta: 'தர்பூசணி',          hi: 'तरबूज़',        base: 800 },
    { en: 'Muskmelon',       ta: 'முலாம்பழம்',        hi: 'खरबूजा',        base: 1200 },
    { en: 'Pineapple',       ta: 'அன்னாசிப்பழம்',     hi: 'अनानास',        base: 2000 },
    { en: 'Jackfruit',       ta: 'பலாப்பழம்',         hi: 'कटहल',          base: 2000 },
    { en: 'Coconut',         ta: 'தேங்காய்',          hi: 'नारियल',        base: 2500 },
    { en: 'Chikoo',          ta: 'சப்போட்டா',         hi: 'चीकू',          base: 2500 },
    { en: 'Custard Apple',   ta: 'சீத்தாப்பழம்',      hi: 'शरीफा',         base: 4000 },
    { en: 'Litchi',          ta: 'லிச்சி',            hi: 'लीची',          base: 6000 },
    { en: 'Amla',            ta: 'நெல்லிக்காய்',      hi: 'आंवला',         base: 2500 },
    { en: 'Jamun',           ta: 'நாவல் பழம்',        hi: 'जामुन',         base: 3500 },
    { en: 'Ber',             ta: 'இலந்தைப்பழம்',      hi: 'बेर',           base: 2000 },
    { en: 'Fig',             ta: 'அத்திப்பழம்',       hi: 'अंजीर',         base: 8000 },
    { en: 'Peach',           ta: 'பீச்',              hi: 'आड़ू',          base: 5000 },
    { en: 'Pear',            ta: 'பேரிக்காய்',        hi: 'नाशपाती',       base: 6000 },
    { en: 'Plum',            ta: 'பிளம்',             hi: 'आलूबुखारा',     base: 4500 },
    { en: 'Apricot',         ta: 'சர்க்கரை பாதாம்பழம்', hi: 'खुबानी',       base: 7000 },
    { en: 'Strawberry',      ta: 'ஸ்ட்ராபெர்ரி',      hi: 'स्ट्रॉबेरी',    base: 10000 },
    { en: 'Kiwi',            ta: 'கிவி',              hi: 'कीवी',          base: 11000 },
    { en: 'Avocado',         ta: 'வெண்ணெய் பழம்',     hi: 'एवोकाडो',       base: 9000 },
    { en: 'Dragon Fruit',    ta: 'டிராகன் பழம்',      hi: 'ड्रैगन फ्रूट',  base: 8000 },
    { en: 'Passion Fruit',   ta: 'பாசிப்பழம்',        hi: 'पैशन फ्रूट',    base: 6000 },
    { en: 'Rambutan',        ta: 'ரம்புட்டான்',       hi: 'रामबूटान',      base: 9000 },
    { en: 'Mulberry',        ta: 'முசுக்கட்டை பழம்',  hi: 'शहतूत',         base: 4000 },
    { en: 'Bael',            ta: 'வில்வப்பழம்',       hi: 'बेल',           base: 1500 },
    { en: 'Kokum',           ta: 'கொக்கம்',           hi: 'कोकम',          base: 5000 },
    { en: 'Persimmon',       ta: 'பெர்சிம்மன்',       hi: 'जापानी फल',     base: 7000 },
    { en: 'Cherry',          ta: 'செர்ரி',            hi: 'चेरी',          base: 9000 },
    { en: 'Phalsa',          ta: 'பில்சா',            hi: 'फालसा',         base: 4000 }
  ],

  /* Grains & commercial crops (existing site data, Hindi added) */
  grains: [
    { en: 'Rice',          ta: 'நெல் / அரிசி',  hi: 'चावल',           min: 2200, modal: 2600, max: 3100 },
    { en: 'Maize',         ta: 'மக்காச்சோளம்',   hi: 'मक्का',          min: 1900, modal: 2100, max: 2300 },
    { en: 'Groundnut',     ta: 'நிலக்கடலை',     hi: 'मूंगफली',        min: 4800, modal: 5400, max: 6000 },
    { en: 'Black Gram',    ta: 'உளுத்தம்பருப்பு', hi: 'उड़द दाल',       min: 6000, modal: 6800, max: 7400 },
    { en: 'Green Gram',    ta: 'பாசிப்பயறு',     hi: 'मूंग दाल',       min: 6200, modal: 7000, max: 7600 },
    { en: 'Cumbu (Bajra)', ta: 'கம்பு',          hi: 'बाजरा',          min: 1800, modal: 2100, max: 2400 },
    { en: 'Chilli (Dry)',  ta: 'மிளகாய் வத்தல்', hi: 'सूखी लाल मिर्च', min: 9000, modal: 11000, max: 13000 },
    { en: 'Turmeric',      ta: 'மஞ்சள்',         hi: 'हल्दी',          min: 8000, modal: 9500, max: 11000 }
  ]
};

/* Deterministic pseudo-random from crop name so demo prices are stable */
function agriHash(s) {
  let h = 0;
  for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) | 0;
  return Math.abs(h);
}

/* Build the full demo price rows: every catalog crop gets a stable
   min/modal/max band and one of six Tamil Nadu markets. */
function buildCatalogRows() {
  const MKTS = ['Chennai (Koyambedu)', 'Coimbatore', 'Madurai', 'Salem', 'Erode', 'Vellore'];
  const rows = [];

  const push = (c, cat) => {
    const h = agriHash(c.en);
    const jitter = ((h % 11) - 5) * 1.2;                    // ±6% variation
    const modal = Math.round((c.base * (1 + jitter / 100)) / 10) * 10;
    rows.push({
      en: c.en, ta: c.ta, hi: c.hi, cat,
      market: MKTS[h % MKTS.length],
      min: Math.round(modal * 0.84 / 10) * 10,
      modal,
      max: Math.round(modal * 1.16 / 10) * 10
    });
  };

  CROP_CATALOG.vegetables.forEach(c => push(c, 'veg'));
  CROP_CATALOG.fruits.forEach(c => push(c, 'fruit'));
  CROP_CATALOG.grains.forEach(c => {
    const h = agriHash(c.en);
    rows.push({
      en: c.en, ta: c.ta, hi: c.hi, cat: 'grain',
      market: MKTS[h % MKTS.length],
      min: c.min, modal: c.modal, max: c.max
    });
  });

  return rows;
}
