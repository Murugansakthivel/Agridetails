/* Agridetails Crop Doctor — pest & disease knowledge base.
   Sources: TNAU Agritech Portal crop protection recommendations,
   CIBRC registered pesticide formulations. Verify doses against the
   current TNAU crop guides before relying on them in the field. */
const ADVISORY_KB = [
  {
    id: 'tomato_late_blight',
    crops: ['Tomato', 'Potato'],
    en: { name: 'Late Blight', ta_name: 'தாமத இலைக்கருகல் (லேட் பிளைட்)' },
    keywords: ['water soaked spots', 'dark spots', 'white mold', 'leaves curling', 'black patches', 'கறுப்பு புள்ளி', 'நீர் நனைந்த', 'வெள்ளை பூச்சண்மை'],
    symptoms: {
      en: ['Water-soaked dark spots on leaves with pale yellow border', 'White fuzzy mold on leaf underside in humid weather', 'Stems show brown-black streaks', 'Spreads fast in cool, humid, cloudy weather'],
      ta: ['இலைகளில் நீர் நனைந்த அடர் புள்ளிகள், வெளிர் மஞ்சள் எல்லையுடன்', 'ஈரப்பதமான காலநிலையில் இலை அடிப்பகுதியில் வெள்ளை பஞ்சு போன்ற பூச்சண்மை', 'தண்டுகளில் பழுப்பு-கருப்பு கோடுகள்', 'குளிர், ஈரப்பதமான, மேகமூட்டமான காலநிலையில் வேகமாக பரவும்']
    },
    pesticides: [
      { en: 'Mancozeb 75% WP',        ta: 'மேன்கோசெப் 75% WP',        dose: '600–700 g/acre',  wait: '7 days' },
      { en: 'Cymoxanil + Mancozeb',   ta: 'சைமோக்ஸானில் + மேன்கோசெப்', dose: '300 g/acre',      wait: '7 days' },
      { en: 'Metalaxyl + Mancozeb',   ta: 'மெட்டாலக்சைல் + மேன்கோசெப்', dose: '250 g/acre',      wait: '14 days' }
    ],
    prevention: {
      en: ['Use disease-free certified seed', 'Avoid overhead watering; drip irrigation preferred', 'Wide spacing for airflow', 'Remove and burn infected plants early'],
      ta: ['நோய்வாய்ப்படாத சான்றளிக்கப்பட்ட விதைகளை பயன்படுத்துங்கள்', 'மேலிருந்து நீர் பாய்ச்சுவதை தவிர்த்து சொட்டு நீர் பாசனம் சிறந்தது', 'காற்றோட்டத்திற்கு அதிக இடைவெளியுடன் நடவு', 'நோய் தாக்கிய செடிகளை முற்றாக அகற்றி எரியுங்கள்']
    }
  },
  {
    id: 'tomato_leaf_curl',
    crops: ['Tomato', 'Chilli'],
    en: { name: 'Leaf Curl Virus (vector: whitefly)', ta_name: 'இலை சுருக்கு வைரஸ் (வெள்ளை ஈ மூலம் பரவும்)' },
    keywords: ['curling leaves', 'curled leaves', 'yellow leaves', 'leaf rolling', 'whitefly', 'stunted growth', 'இலை சுருக்கம்', 'மஞ்சள் இலை'],
    symptoms: {
      en: ['Upward curling and puckering of young leaves', 'Leaves become small, thick and leathery', 'Yellowing leaf margins', 'Plant stays stunted, flowers drop'],
      ta: ['இளம் இலைகள் மேல்நோக்கி சுருண்டு திரிகின்றன', 'இலைகள் சிறியதாக, தடிமனாக மாறும்', 'இலை ஓரங்கள் மஞ்சளாக மாறும்', 'செடி குட்டையாக இருக்கும், பூக்கள் உதிர்ந்துவிடும்']
    },
    pesticides: [
      { en: 'Imidacloprid 17.8% SL',  ta: 'இமிடாக்ளோப்ரிட் 17.8% SL',  dose: '60 ml/acre',      wait: '5 days' },
      { en: 'Thiamethoxam 25% WG',    ta: 'தியாமெத்தாக்சாம் 25% WG',    dose: '40 g/acre',       wait: '3 days' },
      { en: 'Yellow sticky traps',    ta: 'மஞ்சள் பசை பொறிகள்',          dose: '10 traps/acre',   wait: '—' }
    ],
    prevention: {
      en: ['Control whitefly early — it spreads the virus', 'Cover nursery beds with 40-mesh insect net', 'Remove weed hosts around the field', 'Uproot and destroy infected plants — no cure once infected'],
      ta: ['வைரஸ் பரப்பும் வெள்ளை ஈவை ஆரம்பத்திலேயே கட்டுப்படுத்துங்கள்', 'நர்சரி படுக்கைகளை 40-மெஷ் பாம் வலையால் மூடுங்கள்', 'வயல் சுற்றிலும் களைகளை அகற்றுங்கள்', 'நோய் தாக்கிய செடிகளை பிடுங்கி அழியுங்கள் — ஒருமுறை தாக்கினால் சிகிச்சை இல்லை']
    }
  },
  {
    id: 'rice_blast',
    crops: ['Rice', 'Paddy'],
    en: { name: 'Blast Disease', ta_name: 'நெற்கதிர் / இலை கருக்கட்டு நோய் (பிளாஸ்ட்)' },
    keywords: ['eye shaped spots', 'diamond spots', 'node blackening', 'neck blast', 'panicle dying', 'கதிர் கருகல்', 'இலை கருக்கட்டு'],
    symptoms: {
      en: ['Eye-shaped / diamond-shaped spots with grey centre on leaves', 'Neck of panicle turns black — "neck blast"', 'Panicles break or fill poorly', 'Worse with heavy nitrogen and cloudy weather'],
      ta: ['இலைகளில் கண் வடிவ / வைர வடிவ புள்ளிகள், நடுவில் சாம்பல் நிறம்', 'கதிரின் கழுத்து கருப்பாக மாறும் — "கதிர் நுனி கருக்கட்டு"', 'கதிர்கள் உடைந்து அல்லது முழுமையாக நிரப்பப்படாமல் இருக்கும்', 'அதிக யூரியா மற்றும் மேகமூட்டமான காலநிலையில் அதிகரிக்கும்']
    },
    pesticides: [
      { en: 'Tricyclazole 75% WP',     ta: 'ட்ரைசைக்ளாசோல் 75% WP',     dose: '200 g/acre',      wait: '21 days' },
      { en: 'Carbendazim + Mancozeb',  ta: 'கார்பென்டாசிம் + மேன்கோசெப்', dose: '300 g/acre',      wait: '14 days' },
      { en: 'Edifenphos 50% EC',       ta: 'எடிஃபென்பாஸ் 50% EC',        dose: '200 ml/acre',     wait: '14 days' }
    ],
    prevention: {
      en: ['Do not exceed recommended nitrogen dose', 'Maintain 2–3 cm standing water during tillering', 'Choose blast-tolerant varieties for your region', 'Treat seed before sowing'],
      ta: ['பரிந்துரைக்கப்பட்ட யூரியா அளவை மீற வேண்டாம்', 'முளைக்கும் போது 2–3 செ.மீ நிரந்தர நீரை பராமரிக்கவும்', 'உங்கள் பகுதிக்கு ஏற்ற நோய் எதிர்ப்பு ரகங்களை தேர்வு செய்யுங்கள்', 'விதைப்பதற்கு முன் விதை சிகிச்சை செய்யுங்கள்']
    }
  },
  {
    id: 'brinjal_shoot_fruit_borer',
    crops: ['Brinjal', 'Tomato', 'Chilli'],
    en: { name: 'Shoot & Fruit Borer', ta_name: 'தண்டு & கனி துளைப்பான் புழு' },
    keywords: ['holes in fruit', 'bored fruit', 'wilting shoots', 'drooping shoot tips', 'caterpillar inside fruit', 'கனியில் துளை', 'துளையிட்ட காய்'],
    symptoms: {
      en: ['Small round holes on fruits with frass (insect waste) nearby', 'Dried, drooping shoot tips', 'Caterpillar found inside bored fruit', 'Fruits rot and drop early'],
      ta: ['கனிகளில் சிறிய வட்ட துளைகள், அருகில் புழு கழிவு', 'தண்டு நுனிகள் காய்ந்து தொங்கும்', 'துளையிட்ட கனிக்குள் புழு இருக்கும்', 'கனிகள் அழுகி சீக்கிரம் உதிரும்']
    },
    pesticides: [
      { en: 'Emamectin Benzoate 5% SG', ta: 'எமாமெக்டின் பென்சோயேட் 5% SG', dose: '80 g/acre',     wait: '3 days' },
      { en: 'Spinosad 45% SC',           ta: 'ஸ்பினோசாட் 45% SC',             dose: '42 ml/acre',    wait: '3 days' },
      { en: 'Pheromone traps',           ta: 'பெரோமோன் பொறிகள்',               dose: '5 traps/acre',  wait: '—' }
    ],
    prevention: {
      en: ['Install pheromone traps from flowering stage', 'Collect and destroy bored fruits weekly', 'Avoid ratoon cropping in the same field', 'Encourage birds — install perches'],
      ta: ['பூ வரும் கட்டத்திலிருந்து பெரோமோன் பொறிகளை அமையுங்கள்', 'வாரம் ஒருமுறை துளையிட்ட கனிகளை சேகரித்து அழியுங்கள்', 'அதே வயலில் தொடர் பயிர் தவிர்க்கவும்', 'பறவைகள் வர தூண்டு கோல்கள் அமையுங்கள்']
    }
  },
  {
    id: 'onion_purple_blotch',
    crops: ['Onion', 'Garlic'],
    en: { name: 'Purple Blotch', ta_name: 'ஊதா புள்ளி நோய் (பர்பிள் ப்ளாட்ச்)' },
    keywords: ['purple spots', 'sunken lesions', 'white spots turning purple', 'leaf tip dieback', 'ஊதா புள்ளி', 'வெள்ளை புள்ளி'],
    symptoms: {
      en: ['Small white sunken spots that turn purple with yellow ring', 'Leaf tips dry back progressively', 'Bulbs stay small if leaves die early', 'Common in warm humid spells'],
      ta: ['சிறிய வெள்ளை புள்ளிகள் ஊதா நிறமாக மஞ்சள் வளையத்துடன் மாறும்', 'இலை நுனிகள் படிப்படியாக காய்ந்து செல்லும்', 'இலைகள் சீக்கிரம் இறந்தால் பல்பு சிறியதாக இருக்கும்', 'வெப்பமான ஈரப்பதமான காலநிலையில் அதிகம்']
    },
    pesticides: [
      { en: 'Mancozeb 75% WP',            ta: 'மேன்கோசெப் 75% WP',              dose: '600 g/acre',   wait: '7 days' },
      { en: 'Hexaconazole 5% EC',         ta: 'ஹெக்ஸாகோனசோல் 5% EC',            dose: '200 ml/acre',  wait: '7 days' },
      { en: 'Difenoconazole 25% EC',      ta: 'டைஃபெனோகொனசோல் 25% EC',         dose: '100 ml/acre',  wait: '7 days' }
    ],
    prevention: {
      en: ['Rotate with non-allium crops for 3 years', 'Avoid waterlogging; raised beds help', 'Do not leave onion debris in field after harvest'],
      ta: ['3 வருடம் வெங்காயம் அல்லாத பயிருடன் மாற்று பயிரிடுங்கள்', 'நீர் தேங்காமல் பார்த்துக்கொள்ளுங்கள்; உயர்ந்த படுக்கைகள் நல்லது', 'அறுவடைக்குப் பிறகு வயலில் வெங்காயக் கழிவுகளை விடாதீர்கள்']
    }
  },
  {
    id: 'cotton_whitefly_general',
    crops: ['Cotton', 'Beans', "Lady's Finger", 'Cucumber'],
    en: { name: 'Sucking Pest Complex (whitefly / aphid / jassid)', ta_name: 'சுருக்கும் பூச்சி தொகுப்பு (வெள்ளை ஈ / அசுவுணி / தத்தும்பூச்சி)' },
    keywords: ['sticky honeydew', 'sooty mould', 'tiny white insects', 'yellow mottling', 'aphids on underside', 'வெள்ளை ஈ', 'பசை போன்ற'],
    symptoms: {
      en: ['Tiny white insects fly up when plant is disturbed', 'Sticky honeydew on upper leaves, later black sooty mould', 'Yellow mottling / hopper burn on edges', 'Ants moving on plants (they farm aphids)'],
      ta: ['செடியை தொட்டால் சிறிய வெண்மையான பூச்சிகள் பறக்கும்', 'மேல் இலைகளில் பசை போன்ற திரவம், பின் கருப்பு பூஞ்சை', 'இலை ஓரங்களில் மஞ்சள் புள்ளிகள்', 'எறும்புகள் செடிகளில் அலையும் (அவை அசுவுணியை பாதுகாக்கும்)']
    },
    pesticides: [
      { en: 'Imidacloprid 17.8% SL',   ta: 'இமிடாக்ளோப்ரிட் 17.8% SL',   dose: '60 ml/acre',   wait: '5 days' },
      { en: 'Diafenthiuron 50% WP',    ta: 'டயஃபென்தியூரான் 50% WP',    dose: '200 g/acre',   wait: '10 days' },
      { en: 'Neem oil 1500 ppm',       ta: 'வேப்பெண்ணெய் 1500 ppm',       dose: '500 ml/acre',  wait: '—' }
    ],
    prevention: {
      en: ['Spray neem oil preventively every 10 days', 'Avoid excess nitrogen fertilizer', 'Install yellow sticky traps at canopy level', 'Conserve ladybird beetles — natural predators'],
      ta: ['10 நாளுக்கு ஒருமுறை தடுப்பு நடவடிக்கையாக வேப்பெண்ணெய் தெளிக்கவும்', 'அதிக யூரியா தவிர்க்கவும்', 'மஞ்சள் பசை பொறிகளை செடி உயரத்தில் அமையுங்கள்', 'கண்வண்டு வண்டுகளை பாதுகாக்கவும் — இயற்கை எதிரிகள்']
    }
  },
  {
    id: 'wheat_rust',
    crops: ['Wheat'],
    en: { name: 'Rust Disease', ta_name: 'துரு நோய் (ரஸ்ட்)' },
    keywords: ['orange powder spots', 'yellow stripes', 'rust pustules', 'brown powder', 'துரு புள்ளி', 'ஆரஞ்சு பொடி'],
    symptoms: {
      en: ['Orange-brown powdery pustules in rows on leaves (brown rust)', 'Yellow stripes parallel to veins (yellow rust)', 'Powder rubs off on fingers', 'Spreads in cool cloudy spells'],
      ta: ['இலைகளில் வரிசையாக ஆரஞ்சு-பழுப்பு பொடி கொப்பளங்கள் (பிரௌன் ரஸ்ட்)', 'நரம்புகளுக்கு இணையாக மஞ்சள் கோடுகள் (மஞ்சள் ரஸ்ட்)', 'பொடி விரல்களில் தேயும்', 'குளிர் மேகமூட்டமான காலத்தில் பரவும்']
    },
    pesticides: [
      { en: 'Propiconazole 25% EC', ta: 'ப்ரொபிகொனசோல் 25% EC', dose: '200 ml/acre', wait: '14 days' },
      { en: 'Tebuconazole 25.9% EC', ta: 'டெபுகொனசோல் 25.9% EC', dose: '200 ml/acre', wait: '21 days' }
    ],
    prevention: {
      en: ['Choose rust-resistant varieties each season', 'Scout fields weekly during tillering–jointing', 'Balanced nitrogen — excess favors rust'],
      ta: ['ஒவ்வொரு பருவத்திலும் துரு எதிர்ப்பு ரகங்களை தேர்வு செய்யுங்கள்', 'முளைப்பு–மண் கட்டத்தில் வாரம் ஒருமுறை வயலை கண்காணியுங்கள்', 'சீரான யூரியா — அதிகம் துருவை ஊக்குவிக்கும்']
    }
  },
  {
    id: 'banana_sigatoka',
    crops: ['Banana'],
    en: { name: 'Sigatoka Leaf Spot', ta_name: 'சிகடோகா இலை புள்ளி நோய்' },
    keywords: ['yellow streaks on leaves', 'black streaks banana', 'drying leaf margin', 'premature fruit ripening', 'வாழை இலை புள்ளி', 'கருப்பு கோடுகள்'],
    symptoms: {
      en: ['Pale yellow streaks on leaves turn dark brown-black with yellow halo', 'Large areas of leaf die back', 'Fruits mature prematurely and unevenly', 'Worst in wet season'],
      ta: ['வெளிர் மஞ்சள் கோடுகள் அடர் பழுப்பு-கருப்பாக மஞ்சள் வளையத்துடன் மாறும்', 'இலையின் பெரிய பகுதி காய்ந்து போகும்', 'கனிகள் சீக்கிரம் சீரற்ற முறையில் முதிரும்', 'மழைக்காலத்தில் அதிகம்']
    },
    pesticides: [
      { en: 'Mancozeb 75% WP',        ta: 'மேன்கோசெப் 75% WP',         dose: '800 g/acre spray', wait: '14 days' },
      { en: 'Carbendazim 50% WP',     ta: 'கார்பென்டாசிம் 50% WP',      dose: '200 g/acre',       wait: '14 days' },
      { en: 'Mineral/coco oil adjuvant', ta: 'தேக்கெண்ணெய் அடுக்கு',     dose: 'as sticker',       wait: '—' }
    ],
    prevention: {
      en: ['Keep 6–8 healthy leaves per plant', 'Trim and remove heavily spotted leaves', 'Good drainage and weed control', 'Proper plant density for airflow'],
      ta: ['ஒரு செடிக்கு 6–8 ஆரோக்கியமான இலைகளை பராமரிக்கவும்', 'அதிக புள்ளிகள் உள்ள இலைகளை வெட்டி அகற்றவும்', 'நல்ல வடிகால் மற்றும் களை கட்டுப்பாடு', 'காற்றோட்டத்திற்கு சரியான இடைவெளியில் நடவு']
    }
  },
  {
    id: 'groundnut_tikka',
    crops: ['Groundnut'],
    en: { name: 'Tikka Leaf Spot', ta_name: 'டிக்கா இலை புள்ளி நோய்' },
    keywords: ['dark circular spots groundnut', 'yellow halo spots', 'defoliation bottom leaves', 'நிலக்கடலை புள்ளி', 'வட்ட புள்ளி'],
    symptoms: {
      en: ['Dark circular spots with bright yellow halo on leaves', 'Lower leaves drop first, defoliation moves upward', 'Spots may join and kill whole leaflets', 'Appears 4–6 weeks after sowing'],
      ta: ['இலைகளில் பிரகாசமான மஞ்சள் வளையத்துடன் அடர் வட்ட புள்ளிகள்', 'கீழ் இலைகள் முதலில் உதிரும், மேல்நோக்கி பரவும்', 'புள்ளிகள் இணைந்து முழு இலையையும் காய்ச்சும்', 'விதைத்த 4–6 வாரங்களில் தோன்றும்']
    },
    pesticides: [
      { en: 'Chlorothalonil 75% WP',  ta: 'குளோரோதலோனில் 75% WP',   dose: '400 g/acre', wait: '14 days' },
      { en: 'Carbendazim + Mancozeb', ta: 'கார்பென்டாசிம் + மேன்கோசெப்', dose: '300 g/acre', wait: '14 days' }
    ],
    prevention: {
      en: ['Deep summer ploughing to bury debris', 'Crop rotation with cereals', 'Timely harvest — do not delay past maturity'],
      ta: ['கோடையில் ஆழமான உழவு செய்து கழிவுகளை புதையுங்கள்', 'தானிய பயிருடன் மாற்று பயிரிடுங்கள்', 'முதிர்ச்சிக்குப் பிறகு அறுவடையை தாமதிக்க வேண்டாம்']
    },
    source: 'TNAU / CIBRC standard extension recommendations'
  },
  {
    id: 'maize_fall_armyworm',
    crops: ['Maize'],
    en: { name: 'Fall Armyworm', ta_name: 'மக்காச்சோளம் இராணுவப் புழு (ஃபால் ஆர்மிவர்ம்)' },
    keywords: ['ragged holes', 'whorl feeding', 'sawdust like frass', 'moist feeding holes', 'window pane leaves', 'armyworm', 'மக்காச்சோளம் புழு', 'கண்ணி இலை'],
    symptoms: {
      en: ['Ragged, irregular holes on whorl leaves', 'Sawdust-like moist frass visible in the whorl', '"Window-pane" patches where leaf tissue is scraped', 'Serious damage in 15–40 day old crop'],
      ta: ['கண்ணி இலைகளில் ஒழுங்கற்ற துளைகள்', 'கண்ணியில் வண்ணப்பட்டை போன்ற ஈர புழு கழிவு', 'இலை திசு கீறப்பட்ட "ஜன்னல் வடிவ" பகுதிகள்', '15–40 நாள் வயது பயிரில் அதிக சேதம்']
    },
    pesticides: [
      { en: 'Chlorantraniliprole 18.5% SC', ta: 'குளோரான்ட்ரானிலிப்ரோல் 18.5% SC', dose: '0.4 ml/litre, whorl-directed', wait: '14 days' },
      { en: 'Emamectin Benzoate 5% SG',     ta: 'எமாமெக்டின் பென்சோயேட் 5% SG',     dose: '0.4 g/litre, whorl-directed',   wait: '14 days' },
      { en: 'Flubendiamide 480% SC',        ta: 'ஃப்ளூபென்டியமைடு 480% SC',          dose: '0.5 ml/litre',                  wait: '14 days' }
    ],
    prevention: {
      en: ['Whorl-directed spraying hits the larva better than blanket spray', 'Set up pheromone traps @ 10–15/acre for early warning', 'Spray in evening when larvae feed actively', 'Do not repeat the same insecticide group'],
      ta: ['கண்ணிப் பகுதியில் நேரடியாக மருந்து தெளித்தால் நன்றாக கட்டுப்படும்', '10–15 பெரோமோன் பொறிகள்/ஏக்கர் அமைத்து ஆரம்ப எச்சரிக்கை பெறுங்கள்', 'மாலை நேரத்தில் புழு உணவு உட்கொள்ளும் நேரத்தில் தெளியுங்கள்', 'அதே மருந்து குழுவை மீண்டும் பயன்படுத்த வேண்டாம்']
    },
    source: 'TNAU CPPS Technologies (tnau.ac.in) — FAW schedule verified Aug 2026'
  },
  {
    id: 'rice_bph',
    crops: ['Rice', 'Paddy'],
    en: { name: 'Brown Plant Hopper (BPH)', ta_name: 'நெல் பழுப்பு மரப்புழு (BPH)' },
    keywords: ['hopper burn', 'brown insects at base', 'drying circular patches', 'sooty mould at base', 'plants yellow near water level', 'மரப்புழு', 'கரையான பாதிப்பு'],
    symptoms: {
      en: ['Brownish-black insects crowded at stem base near water line', 'Circular dried patches — "hopper burn"', 'Sticky honeydew and black sooty mould near base', 'Field looks scorched in patches, spreads outward'],
      ta: ['தண்டு அடிப்பகுதி நீர் மட்டத்தில் பழுப்பு-கருப்பு பூச்சிகள் கூட்டமாக', 'வட்டமாக காய்ந்த பகுதிகள் — "ஹாப்பர் பர்ன்"', 'அடிப்பகுதியில் பசை திரவம், கருப்பு பூஞ்சை', 'வயல் பட்டை பட்டையாக காய்ந்து வெளிநோக்கி பரவும்']
    },
    pesticides: [
      { en: 'Buprofezin 25% SC',       ta: 'ப்யூப்ரோஃபெசின் 25% SC',        dose: '320 ml/acre',           wait: '14 days' },
      { en: 'Imidacloprid 17.8% SL',   ta: 'இமிடாக்ளோப்ரிட் 17.8% SL',        dose: '40–50 ml/acre',         wait: '7 days' },
      { en: 'Azadirachtin 0.03%',      ta: 'அசாடிராக்டின் 0.03%',             dose: '400 ml/acre',           wait: '—' }
    ],
    prevention: {
      en: ['Drain field water first, then spray at the plant base', 'Alternate wetting and drying instead of continuous flooding', 'Wider spacing (30 cm rogue spacing) reduces build-up', 'Do not exceed recommended nitrogen'],
      ta: ['முதலில் வயல் நீரை வடிகட்டி, பின் செடி அடிப்பகுதியில் தெளியுங்கள்', 'தொடர் நீர்ப்பாசனம் இல்லாமல் ஈரம்-உலர் முறையில் நீர் நிர்வகியுங்கள்', '30 செ.மீ இடைவெளி நடவு பூச்சி அதிகரிப்பை குறைக்கும்', 'பரிந்துரைக்கப்பட்ட யூரியா அளவை மீறாதீர்கள்']
    },
    source: 'TNAU Agritech Portal rice pest guide (agritech.tnau.ac.in) — doses verbatim'
  },
  {
    id: 'rice_stem_borer',
    crops: ['Rice', 'Paddy'],
    en: { name: 'Yellow Stem Borer', ta_name: 'நெல் மஞ்சள் தண்டு துளைப்பான்' },
    keywords: ['dead hearts', 'white ear heads', 'dried central tiller', 'hollow stem', 'stem tunneling', 'செதில் இதழ்', 'வெண்மையான கதிர்'],
    symptoms: {
      en: ['Young plants: central shoot dries — "dead heart" (pulls out easily)', 'After flowering: empty white ear-heads ("white ear")', 'Hollow stems with caterpillar frass inside', 'Damage appears in scattered clumps across field'],
      ta: ['இளம் செடிகளில் நடு முளை காய்ந்து "செதில் இதழ்" (எளிதாக இழுத்து விடும்)', 'பூக்கும் பின் வெறுமையான வெண்ணிற கதிர்கள் ("வெண் கதிர்")', 'தண்டு உள்ளே காலியாக, புழு கழிவு', 'வயலில் இடம்பிடித்த கொத்து கொத்தாக பாதிப்பு']
    },
    pesticides: [
      { en: 'Flubendiamide 20% WG',       ta: 'ஃப்ளூபென்டியமைடு 20% WG',        dose: '50 g/acre',    wait: '14 days' },
      { en: 'Cartap Hydrochloride 50% SP', ta: 'கார்டாப் ஹைட்ரோகுளோரைடு 50% SP', dose: '400 g/acre',   wait: '14 days' },
      { en: 'Chlorantraniliprole 0.4% GR', ta: 'குளோரான்ட்ரானிலிப்ரோல் 0.4% GR', dose: '4 kg/acre broadcast', wait: '14 days' }
    ],
    prevention: {
      en: ['Clip seedling tips before transplanting to remove egg masses', 'Collect and destroy egg masses on leaves weekly', 'Harvest close to ground and plough stubbles early', 'Avoid continuous light trapping near light sources only'],
      ta: ['நடவுக்கு முன் நாற்று நுனிகளை வெட்டி முட்டை கூடுகளை அகற்றுங்கள்', 'வாரம் ஒருமுறை இலை முட்டை கூடுகளை சேகரித்து அழியுங்கள்', 'நில மட்டத்திற்கு அருகில் அறுவடை செய்து கட்டைகளை சீக்கிரம் உழவுங்கள்']
    },
    source: 'TNAU Pest Forecast Report, Nov 2024 (agritech.tnau.ac.in PDF)'
  },
  {
    id: 'chilli_thrips',
    crops: ['Chilli'],
    en: { name: 'Thrips (leaf curl complex)', ta_name: 'மிளகாய் தத்தும்பூச்சி (இலை சுருக்கம்)' },
    keywords: ['chilli leaf curl', 'silvery streaks', 'curled brittle leaves', 'tiny pale insects buds', 'flower drop chilli', 'மிளகாய் இலை சுருக்கம்', 'வெள்ளி கோடுகள்'],
    symptoms: {
      en: ['Leaves curl upward, become small, brittle and leathery', 'Silvery shiny streaks on leaf surface', 'Tiny pale-yellow insects inside flowers and buds', 'Heavy flower and fruit drop'],
      ta: ['இலைகள் மேல்நோக்கி சுருண்டு, சிறியதாக, உடையக்கூடியதாக மாறும்', 'இலை மேல் வெள்ளி போன்ற பளபளப்பான கோடுகள்', 'பூக்கள், மொட்டுகளில் சிறிய வெளிர் மஞ்சள் பூச்சிகள்', 'பூ & காய் அதிகம் உதிர்தல்']
    },
    pesticides: [
      { en: 'Spinosad 45% SC',   ta: 'ஸ்பினோசாட் 45% SC',    dose: '42 ml/acre',  wait: '3 days' },
      { en: 'Fipronil 5% SC',    ta: 'ஃபிப்ரோனில் 5% SC',     dose: '400 ml/acre', wait: '7 days' },
      { en: 'Blue sticky traps', ta: 'நீல பசை பொறிகள்',       dose: '10 traps/acre', wait: '—' }
    ],
    prevention: {
      en: ['Blue sticky traps attract thrips better than yellow ones', 'Keep nursery covered with fine mesh netting', 'Avoid growing chilli next to old chilli fields', 'Conserve predatory mites by avoiding broad-spectrum sprays'],
      ta: ['நீல பசை பொறிகள் தத்தும்பூச்சியை நன்றாக ஈர்க்கும்', 'நர்சரியை நுண்கண வலையால் மூடுங்கள்', 'பழைய மிளகாய் வயல் அருகில் புதிய நடவை தவிர்க்கவும்', 'அகன்ற அளவிலான மருந்துகளை தவிர்த்து இயற்கை எதிரிகளை பாதுகாக்கவும்']
    },
    source: 'TNAU chilli IPDM capsule / agritech.tnau.ac.in — verify current season dose'
  }
];
