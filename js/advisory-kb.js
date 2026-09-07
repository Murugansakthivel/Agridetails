/* Agridetails Crop Doctor — pest & disease knowledge base.
   Sources: TNAU Agritech Portal crop protection recommendations,
   CIBRC registered pesticide formulations. Verify doses against the
   current TNAU crop guides before relying on them in the field.

   NOTE ON "AI": Crop Doctor on this site is a rule-based keyword
   matcher over this reference knowledge base — it is NOT a live
   computer-vision / machine-learning model, and it does not analyse
   the uploaded photo pixels. The "confidence" shown on the results
   page is an honest label for the keyword-match strength, not a
   trained AI's certainty score. This file/engine is a prototype
   decision-support tool, not a certified diagnosis. */
const ADVISORY_KB = [
  {
    id: 'tomato_late_blight',
    crops: ['Tomato', 'Potato'],
    en: { name: 'Late Blight', ta_name: 'தாமத இலைக்கருகல் (லேட் பிளைட்)' },
    keywords: ['water soaked spots', 'dark spots', 'white mold', 'leaves curling', 'black patches', 'கறுப்பு புள்ளி', 'நீர் நனைந்த', 'வெள்ளை பூச்சண்மை'],
    category: 'fungal', severity: 'severe',
    symptoms: {
      en: ['Water-soaked dark spots on leaves with pale yellow border', 'White fuzzy mold on leaf underside in humid weather', 'Stems show brown-black streaks', 'Spreads fast in cool, humid, cloudy weather'],
      ta: ['இலைகளில் நீர் நனைந்த அடர் புள்ளிகள், வெளிர் மஞ்சள் எல்லையுடன்', 'ஈரப்பதமான காலநிலையில் இலை அடிப்பகுதியில் வெள்ளை பஞ்சு போன்ற பூச்சண்மை', 'தண்டுகளில் பழுப்பு-கருப்பு கோடுகள்', 'குளிர், ஈரப்பதமான, மேகமூட்டமான காலநிலையில் வேகமாக பரவும்']
    },
    causes: {
      en: ['Cool (15–20°C), wet weather with prolonged leaf wetness', 'Overhead irrigation keeping foliage wet overnight', 'Dense planting reducing airflow'],
      ta: ['குளிர்ந்த (15–20°C) ஈரமான காலநிலை, இலைகள் நீண்ட நேரம் ஈரமாக இருத்தல்', 'மேலிருந்து நீர்ப் பாசனத்தால் இரவு முழுவதும் இலைகள் ஈரமாக இருத்தல்', 'அடர்த்தியான நடவு காற்றோட்டத்தை குறைக்கும்']
    },
    immediateActions: {
      en: ['Remove and isolate severely infected plants — highly contagious', 'Stop overhead watering immediately', 'Improve drainage around the field'],
      ta: ['கடுமையாக பாதிக்கப்பட்ட செடிகளை தனிமைப்படுத்தி அகற்றவும் — வேகமாக பரவும் நோய்', 'மேலிருந்து நீர் பாய்ச்சுவதை உடனே நிறுத்தவும்', 'வயலைச் சுற்றி வடிகாலை மேம்படுத்தவும்']
    },
    organicTreatment: [
      { method: { en: 'Copper-based fungicide spray', ta: 'காப்பர் அடிப்படையிலான பூஞ்சைக்கொல்லி தெளிப்பு' },
        why: { en: 'Broad-spectrum protectant traditionally used in organic systems', ta: 'இயற்கை முறையில் பயன்படுத்தப்படும் பரந்த-தர பாதுகாப்பு பொருள்' },
        how: { en: 'Mix per label rate; spray both leaf surfaces before expected rain if possible', ta: 'லேபிள் அளவின்படி கலந்து, மழைக்கு முன் இலையின் இரு பக்கமும் தெளிக்கவும்' },
        frequency: { en: 'Every 5–7 days during wet spells', ta: 'ஈரமான காலத்தில் ஒவ்வொரு 5–7 நாட்களுக்கும்' },
        precautions: { en: 'Do not overuse — copper can build up in soil; wear gloves and mask while spraying', ta: 'அளவுக்கு அதிகமாக பயன்படுத்த வேண்டாம் — மண்ணில் காப்பர் தேங்கும்; கையுறை, முகக்கவசம் அணியவும்' } }
    ],
    fertilizerGuidance: {
      en: ['Avoid excess nitrogen — promotes soft growth more prone to infection', 'Ensure adequate potassium for disease resistance'],
      ta: ['அதிக நைட்ரஜன் தவிர்க்கவும் — மென்மையான வளர்ச்சி நோய்க்கு எளிதில் ஆளாகும்', 'நோய் எதிர்ப்புக்கு போதிய பொட்டாசியம் அளிக்கவும்']
    },
    irrigationGuidance: {
      en: ['Switch to drip or furrow irrigation instead of overhead sprinkling', 'Water early morning so foliage dries by evening'],
      ta: ['மேலிருந்து தெளிப்பதற்கு பதிலாக சொட்டு / வாய்க்கால் பாசனத்தைப் பயன்படுத்தவும்', 'மாலைக்குள் இலைகள் உலரும்படி காலையில் நீர் பாய்ச்சவும்']
    },
    harvestGuidance: {
      en: 'Can destroy an entire crop within days in favourable weather — harvest maturing fruit early once an outbreak is spotted to salvage some yield.',
      ta: 'சாதகமான காலநிலையில் இந்நோய் சில நாட்களில் முழு பயிரையும் அழிக்கும் — வெடிப்பு தென்பட்டவுடன் முதிர்ந்த காய்களை சீக்கிரம் அறுவடை செய்யவும்.'
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
    category: 'viral', severity: 'severe',
    symptoms: {
      en: ['Upward curling and puckering of young leaves', 'Leaves become small, thick and leathery', 'Yellowing leaf margins', 'Plant stays stunted, flowers drop'],
      ta: ['இளம் இலைகள் மேல்நோக்கி சுருண்டு திரிகின்றன', 'இலைகள் சிறியதாக, தடிமனாக மாறும்', 'இலை ஓரங்கள் மஞ்சளாக மாறும்', 'செடி குட்டையாக இருக்கும், பூக்கள் உதிர்ந்துவிடும்']
    },
    causes: {
      en: ['Whitefly feeding transmits the virus persistently', 'Nearby infected weed or crop hosts', 'Hot dry weather favours whitefly buildup'],
      ta: ['வெள்ளை ஈ உணவு உண்ணுவதன் மூலம் வைரஸ் நிலையாக பரவும்', 'அருகிலுள்ள பாதிக்கப்பட்ட களை அல்லது பயிர் தாவரங்கள்', 'வெப்பமான வறண்ட காலநிலை வெள்ளை ஈ பெருகுவதற்கு ஏற்றது']
    },
    immediateActions: {
      en: ['Uproot and destroy severely infected plants — no cure once infected', 'Install yellow sticky traps to reduce whitefly numbers', 'Remove weed hosts around the field'],
      ta: ['கடுமையாக பாதிக்கப்பட்ட செடிகளை பிடுங்கி அழிக்கவும் — ஒருமுறை தாக்கினால் சிகிச்சை இல்லை', 'வெள்ளை ஈ எண்ணிக்கையை குறைக்க மஞ்சள் பசை பொறிகளை அமைக்கவும்', 'வயலைச் சுற்றி களைகளை அகற்றவும்']
    },
    organicTreatment: [
      { method: { en: 'Neem oil spray targeting whitefly', ta: 'வெள்ளை ஈயை குறிவைத்த வேப்பெண்ணெய் தெளிப்பு' },
        why: { en: 'Disrupts whitefly feeding and breeding, slowing further virus spread', ta: 'வெள்ளை ஈயின் உணவு உண்ணுதலையும் இனப்பெருக்கத்தையும் பாதிக்கும், மேலும் வைரஸ் பரவலை குறைக்கும்' },
        how: { en: 'Mix about 5 ml per litre of water; spray covering leaf undersides', ta: '1 லிட்டர் நீரில் 5 மி.லி கலந்து, இலை அடிப்பகுதி நனையும்படி தெளிக்கவும்' },
        frequency: { en: 'Every 7 days', ta: 'ஒவ்வொரு 7 நாட்களுக்கும்' },
        precautions: { en: 'Cannot cure already-infected plants — this only protects healthy ones from further whitefly attack', ta: 'ஏற்கனவே பாதிக்கப்பட்ட செடிகளை குணப்படுத்தாது — ஆரோக்கியமான செடிகளை மேலும் தாக்குதலிலிருந்து பாதுகாக்கும்' } }
    ],
    fertilizerGuidance: {
      en: ['Avoid excess nitrogen which produces soft growth attractive to whitefly', 'Balanced potassium supports plant resilience'],
      ta: ['அதிக நைட்ரஜன் தவிர்க்கவும் — மென்மையான வளர்ச்சி வெள்ளை ஈயை ஈர்க்கும்', 'சீரான பொட்டாசியம் தாங்கும் திறனை ஆதரிக்கும்']
    },
    irrigationGuidance: {
      en: ['Avoid moisture stress — weakened plants are more attractive to whitefly', 'Maintain consistent soil moisture'],
      ta: ['நீர்ப் பற்றாக்குறையை தவிர்க்கவும் — பலவீனமான செடிகள் வெள்ளை ஈயை அதிகம் ஈர்க்கும்', 'மண்ணில் சீரான ஈரப்பதத்தை பராமரிக்கவும்']
    },
    harvestGuidance: {
      en: 'Infected plants show reduced fruit set and stay stunted — expect lower yield from affected plants; unaffected plants can still be harvested normally.',
      ta: 'பாதிக்கப்பட்ட செடிகளில் காய் பிடிப்பு குறையும், குட்டையாக இருக்கும் — பாதிக்கப்பட்ட செடிகளில் விளைச்சல் குறையும்; பாதிக்கப்படாத செடிகளை வழக்கம் போல் அறுவடை செய்யலாம்.'
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
    category: 'fungal', severity: 'severe',
    symptoms: {
      en: ['Eye-shaped / diamond-shaped spots with grey centre on leaves', 'Neck of panicle turns black — "neck blast"', 'Panicles break or fill poorly', 'Worse with heavy nitrogen and cloudy weather'],
      ta: ['இலைகளில் கண் வடிவ / வைர வடிவ புள்ளிகள், நடுவில் சாம்பல் நிறம்', 'கதிரின் கழுத்து கருப்பாக மாறும் — "கதிர் நுனி கருக்கட்டு"', 'கதிர்கள் உடைந்து அல்லது முழுமையாக நிரப்பப்படாமல் இருக்கும்', 'அதிக யூரியா மற்றும் மேகமூட்டமான காலநிலையில் அதிகரிக்கும்']
    },
    causes: {
      en: ['Excess nitrogen fertilization', 'Cloudy, humid weather with heavy dew', 'Susceptible variety', 'Continuous rice cropping without rotation'],
      ta: ['அதிக நைட்ரஜன் உரம்', 'அதிக பனியுடன் மேகமூட்டமான, ஈரப்பதமான காலநிலை', 'நோய்க்கு எளிதில் ஆளாகும் ரகம்', 'மாற்று பயிர் இல்லாமல் தொடர் நெல் சாகுபடி']
    },
    immediateActions: {
      en: ['Avoid further nitrogen top-dressing until controlled', 'Drain excess standing water temporarily if feasible', 'Remove severely infected tillers'],
      ta: ['கட்டுப்படும் வரை மேலும் நைட்ரஜன் இடுவதை தவிர்க்கவும்', 'முடிந்தால் அதிக நிற்கும் நீரை தற்காலிகமாக வடிக்கவும்', 'கடுமையாக பாதிக்கப்பட்ட பதிர்களை அகற்றவும்']
    },
    organicTreatment: [
      { method: { en: 'Pseudomonas fluorescens-based biofungicide', ta: 'சூடோமோனாஸ் புளூரசன்ஸ் உயிரி பூஞ்சைக்கொல்லி' },
        why: { en: 'Biocontrol agent that suppresses the blast fungus', ta: 'பிளாஸ்ட் பூஞ்சையை அடக்கும் உயிரியல் கட்டுப்பாட்டு முகவர்' },
        how: { en: 'Seed treatment before sowing, plus a foliar spray at tillering and panicle initiation, per product label', ta: 'விதைப்பதற்கு முன் விதை சிகிச்சை, பின் பதிர் மற்றும் கதிர் தொடங்கும் நேரத்தில் இலை தெளிப்பு' },
        frequency: { en: 'At tillering and again at panicle initiation', ta: 'பதிர் நேரத்தில் மற்றும் கதிர் தொடங்கும் நேரத்தில் மீண்டும்' },
        precautions: { en: 'Do not mix with chemical fungicides on the same day', ta: 'அதே நாளில் இரசாயன பூஞ்சைக்கொல்லியுடன் கலக்க வேண்டாம்' } }
    ],
    fertilizerGuidance: {
      en: ['Split nitrogen doses instead of one heavy application', 'Do not exceed the recommended urea rate', 'Ensure potassium is adequate — improves resistance'],
      ta: ['ஒரே தடவை அதிக அளவு இடுவதற்கு பதிலாக நைட்ரஜனை பிரித்து இடவும்', 'பரிந்துரைக்கப்பட்ட யூரியா அளவை மீற வேண்டாம்', 'நோய் எதிர்ப்புக்கு போதிய பொட்டாசியம் அளிக்கவும்']
    },
    irrigationGuidance: {
      en: ['Maintain shallow standing water (2–3 cm) during tillering', 'Avoid both water stress and excess flooding'],
      ta: ['பதிர் நேரத்தில் 2–3 செ.மீ ஆழமான நிரந்தர நீரை பராமரிக்கவும்', 'நீர்ப் பற்றாக்குறை மற்றும் அதிக வெள்ளம் இரண்டையும் தவிர்க்கவும்']
    },
    harvestGuidance: {
      en: 'Neck blast can cause major yield loss and chaffy grain — assess panicle fill before finalising the harvest date; consider harvesting unaffected patches first.',
      ta: 'கதிர் நுனி கருக்கட்டு பெரும் விளைச்சல் இழப்பையும் வெற்று தானியத்தையும் ஏற்படுத்தும் — அறுவடை தேதியை முடிவு செய்யும் முன் கதிர் நிரப்பத்தை மதிப்பிடவும்.'
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
    category: 'pest', severity: 'moderate',
    symptoms: {
      en: ['Small round holes on fruits with frass (insect waste) nearby', 'Dried, drooping shoot tips', 'Caterpillar found inside bored fruit', 'Fruits rot and drop early'],
      ta: ['கனிகளில் சிறிய வட்ட துளைகள், அருகில் புழு கழிவு', 'தண்டு நுனிகள் காய்ந்து தொங்கும்', 'துளையிட்ட கனிக்குள் புழு இருக்கும்', 'கனிகள் அழுகி சீக்கிரம் உதிரும்']
    },
    causes: {
      en: ['Moth egg-laying on tender shoots and young fruit', 'Warm weather speeds larval development', 'Continuous cropping of the same family without rotation'],
      ta: ['மென்மையான தளிர்கள் மற்றும் இளம் காய்களில் அந்துப்பூச்சி முட்டையிடல்', 'வெப்பமான காலநிலை புழு வளர்ச்சியை துரிதப்படுத்தும்', 'மாற்று பயிர் இல்லாமல் அதே குடும்ப பயிரை தொடர்ந்து பயிரிடுதல்']
    },
    immediateActions: {
      en: ['Hand-pick and destroy wilted shoots and bored fruits', 'Install pheromone traps for monitoring', 'Avoid excess nitrogen which increases tender growth'],
      ta: ['வாடிய தளிர்கள் மற்றும் துளையிட்ட காய்களை கையால் பறித்து அழிக்கவும்', 'கண்காணிப்புக்கு பெரோமோன் பொறிகளை அமைக்கவும்', 'மென்மையான வளர்ச்சியை அதிகரிக்கும் அதிக நைட்ரஜனை தவிர்க்கவும்']
    },
    organicTreatment: [
      { method: { en: 'Pheromone traps + Bt (Bacillus thuringiensis) spray', ta: 'பெரோமோன் பொறிகள் + Bt உயிரி பூச்சிக்கொல்லி தெளிப்பு' },
        why: { en: 'Traps reduce mating success; Bt targets caterpillars specifically and is safe for beneficial insects', ta: 'பொறிகள் இனச்சேர்க்கையை குறைக்கும்; Bt புழுவை மட்டும் குறிவைக்கும், நன்மை பயக்கும் பூச்சிகளுக்கு பாதுகாப்பானது' },
        how: { en: 'Set 5 traps/acre at flowering; spray Bt per label onto shoots and young fruit in the evening', ta: 'பூக்கும் நேரத்தில் ஏக்கருக்கு 5 பொறிகள் அமைக்கவும்; மாலையில் தளிர் மற்றும் இளம் காய்களில் Bt தெளிக்கவும்' },
        frequency: { en: 'Traps checked weekly; Bt spray every 7–10 days', ta: 'பொறிகளை வாரம்தோறும் சரிபார்க்கவும்; Bt தெளிப்பு ஒவ்வொரு 7–10 நாட்களுக்கும்' },
        precautions: { en: 'Apply Bt in the evening — sunlight breaks it down quickly', ta: 'மாலையில் Bt பயன்படுத்தவும் — வெயில் அதை வேகமாக சிதைக்கும்' } }
    ],
    fertilizerGuidance: {
      en: ['Avoid excess nitrogen which attracts egg-laying moths to tender growth', 'Balanced potassium supports plant recovery'],
      ta: ['மென்மையான வளர்ச்சிக்கு முட்டையிடும் அந்துப்பூச்சியை ஈர்க்கும் அதிக நைட்ரஜனை தவிர்க்கவும்', 'சீரான பொட்டாசியம் செடி மீட்புக்கு உதவும்']
    },
    irrigationGuidance: {
      en: ['Maintain even soil moisture — stressed plants show more shoot wilting', 'Avoid waterlogging around roots'],
      ta: ['மண்ணில் சீரான ஈரப்பதத்தை பராமரிக்கவும் — அழுத்தமான செடிகளில் அதிக தளிர் வாடல் ஏற்படும்', 'வேர்களைச் சுற்றி நீர் தேங்குவதை தவிர்க்கவும்']
    },
    harvestGuidance: {
      en: 'Bored fruit is unmarketable — sort and discard damaged fruit at harvest and pick more frequently during high pest pressure to reduce losses.',
      ta: 'துளையிட்ட காய்களை விற்க முடியாது — அறுவடையின்போது சேதமான காய்களை பிரித்து அகற்றி, பூச்சி அதிகமாக இருக்கும் காலத்தில் அடிக்கடி பறிக்கவும்.'
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
    category: 'fungal', severity: 'moderate',
    symptoms: {
      en: ['Small white sunken spots that turn purple with yellow ring', 'Leaf tips dry back progressively', 'Bulbs stay small if leaves die early', 'Common in warm humid spells'],
      ta: ['சிறிய வெள்ளை புள்ளிகள் ஊதா நிறமாக மஞ்சள் வளையத்துடன் மாறும்', 'இலை நுனிகள் படிப்படியாக காய்ந்து செல்லும்', 'இலைகள் சீக்கிரம் இறந்தால் பல்பு சிறியதாக இருக்கும்', 'வெப்பமான ஈரப்பதமான காலநிலையில் அதிகம்']
    },
    causes: {
      en: ['Warm, humid weather with intermittent rain', 'Overhead irrigation keeping foliage wet', 'Injury from thrips feeding creating entry points'],
      ta: ['இடைவிட்ட மழையுடன் வெப்பமான, ஈரப்பதமான காலநிலை', 'மேலிருந்து நீர்ப் பாசனத்தால் இலைகள் ஈரமாக இருத்தல்', 'தத்தும்பூச்சி காயங்கள் நோய் நுழைவதற்கு வழி வகுக்கும்']
    },
    immediateActions: {
      en: ['Stop overhead watering', 'Remove and destroy severely blotched leaves', 'Control thrips which worsen the spread'],
      ta: ['மேலிருந்து நீர் பாய்ச்சுவதை நிறுத்தவும்', 'கடுமையாக பாதிக்கப்பட்ட இலைகளை அகற்றி அழிக்கவும்', 'பரவலை மோசமாக்கும் தத்தும்பூச்சியை கட்டுப்படுத்தவும்']
    },
    organicTreatment: [
      { method: { en: 'Copper-based fungicide spray', ta: 'காப்பர் அடிப்படையிலான பூஞ்சைக்கொல்லி தெளிப்பு' },
        why: { en: 'General protectant against fungal leaf blotches', ta: 'பூஞ்சை இலை புள்ளிகளுக்கு எதிரான பொது பாதுகாப்பு' },
        how: { en: 'Spray per label rate ahead of expected wet weather', ta: 'எதிர்பார்க்கப்படும் மழை காலத்திற்கு முன் லேபிள் அளவின்படி தெளிக்கவும்' },
        frequency: { en: 'Every 7 days in humid weather', ta: 'ஈரப்பதமான காலநிலையில் ஒவ்வொரு 7 நாட்களுக்கும்' },
        precautions: { en: 'Avoid repeated overuse; wear gloves and a mask', ta: 'மீண்டும் மீண்டும் அதிகம் பயன்படுத்த வேண்டாம்; கையுறை, முகக்கவசம் அணியவும்' } }
    ],
    fertilizerGuidance: {
      en: ['Balanced nitrogen and potassium — avoid excess nitrogen', 'Adequate potash strengthens leaf tissue'],
      ta: ['சீரான நைட்ரஜன் மற்றும் பொட்டாசியம் — அதிக நைட்ரஜன் தவிர்க்கவும்', 'போதிய பொட்டாஷ் இலை திசுவை வலுப்படுத்தும்']
    },
    irrigationGuidance: {
      en: ['Avoid overhead watering; use furrow or drip irrigation', 'Ensure raised beds so water does not pool'],
      ta: ['மேலிருந்து நீர்ப் பாசனத்தை தவிர்க்கவும்; வாய்க்கால் அல்லது சொட்டு பாசனத்தைப் பயன்படுத்தவும்', 'நீர் தேங்காமல் இருக்க உயர்ந்த படுக்கைகள் அமைக்கவும்']
    },
    harvestGuidance: {
      en: 'Early leaf death reduces bulb size and shortens storage life — harvest and cure bulbs promptly if the disease is advanced.',
      ta: 'இலைகள் சீக்கிரம் இறந்தால் பல்பு அளவு குறையும், சேமிப்பு காலம் குறையும் — நோய் அதிகரித்தால் பல்புகளை விரைவாக அறுவடை செய்யவும்.'
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
    category: 'pest', severity: 'moderate',
    symptoms: {
      en: ['Tiny white insects fly up when plant is disturbed', 'Sticky honeydew on upper leaves, later black sooty mould', 'Yellow mottling / hopper burn on edges', 'Ants moving on plants (they farm aphids)'],
      ta: ['செடியை தொட்டால் சிறிய வெண்மையான பூச்சிகள் பறக்கும்', 'மேல் இலைகளில் பசை போன்ற திரவம், பின் கருப்பு பூஞ்சை', 'இலை ஓரங்களில் மஞ்சள் புள்ளிகள்', 'எறும்புகள் செடிகளில் அலையும் (அவை அசுவுணியை பாதுகாக்கும்)']
    },
    causes: {
      en: ['Hot dry weather favours whitefly/aphid buildup', 'Weed hosts nearby harbouring pests', 'Excess nitrogen encouraging soft attractive growth'],
      ta: ['வெப்பமான வறண்ட காலநிலை பூச்சி பெருகுவதற்கு ஏற்றது', 'அருகிலுள்ள களை தாவரங்கள் பூச்சிகளை தாங்கும்', 'மென்மையான, ஈர்க்கும் வளர்ச்சியை ஊக்குவிக்கும் அதிக நைட்ரஜன்']
    },
    immediateActions: {
      en: ['Install yellow sticky traps', 'Remove weed hosts around the field', 'Conserve ladybird beetles by avoiding broad-spectrum sprays'],
      ta: ['மஞ்சள் பசை பொறிகளை அமைக்கவும்', 'வயலைச் சுற்றி களை தாவரங்களை அகற்றவும்', 'பரந்த-தர மருந்துகளை தவிர்த்து கண்வண்டு வண்டுகளை பாதுகாக்கவும்']
    },
    organicTreatment: [
      { method: { en: 'Neem oil 1500 ppm spray', ta: 'வேப்பெண்ணெய் 1500 ppm தெளிப்பு' },
        why: { en: 'Disrupts feeding and breeding of sucking pests, safer for natural predators', ta: 'சுருக்கும் பூச்சிகளின் உணவு உண்ணுதல், இனப்பெருக்கத்தை பாதிக்கும், இயற்கை எதிரிகளுக்கு பாதுகாப்பானது' },
        how: { en: 'Mix about 500 ml per acre in adequate water; spray covering leaf undersides', ta: 'ஏக்கருக்கு சுமார் 500 மி.லி போதிய நீரில் கலந்து, இலை அடிப்பகுதி நனையும்படி தெளிக்கவும்' },
        frequency: { en: 'Every 10 days preventively', ta: '10 நாளுக்கு ஒருமுறை தடுப்பு நடவடிக்கையாக' },
        precautions: { en: 'Spray in the evening to protect pollinators active during the day', ta: 'பகலில் செயல்படும் மகரந்தச் சேர்ப்பான் பூச்சிகளை பாதுகாக்க மாலையில் தெளிக்கவும்' } }
    ],
    fertilizerGuidance: {
      en: ['Avoid excess nitrogen fertilizer', 'Balanced potassium improves plant tolerance to sap-sucking pests'],
      ta: ['அதிக நைட்ரஜன் உரத்தை தவிர்க்கவும்', 'சீரான பொட்டாசியம் சுருக்கும் பூச்சிகளை தாங்கும் திறனை மேம்படுத்தும்']
    },
    irrigationGuidance: {
      en: ['Avoid moisture stress — weakened plants attract more pests', 'Maintain consistent soil moisture'],
      ta: ['நீர்ப் பற்றாக்குறையை தவிர்க்கவும் — பலவீனமான செடிகள் அதிக பூச்சிகளை ஈர்க்கும்', 'மண்ணில் சீரான ஈரப்பதத்தை பராமரிக்கவும்']
    },
    harvestGuidance: {
      en: 'Heavy sooty mould on lint/pods can reduce market grade — clean picking and prompt harvest during outbreaks helps preserve quality.',
      ta: 'பஞ்சு/காய்களில் அதிக கருப்பு பூஞ்சை சந்தை தரத்தை குறைக்கும் — தாக்குதல் காலத்தில் சுத்தமான, சீக்கிரமான அறுவடை தரத்தை பாதுகாக்க உதவும்.'
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
    category: 'fungal', severity: 'moderate',
    symptoms: {
      en: ['Orange-brown powdery pustules in rows on leaves (brown rust)', 'Yellow stripes parallel to veins (yellow rust)', 'Powder rubs off on fingers', 'Spreads in cool cloudy spells'],
      ta: ['இலைகளில் வரிசையாக ஆரஞ்சு-பழுப்பு பொடி கொப்பளங்கள் (பிரௌன் ரஸ்ட்)', 'நரம்புகளுக்கு இணையாக மஞ்சள் கோடுகள் (மஞ்சள் ரஸ்ட்)', 'பொடி விரல்களில் தேயும்', 'குளிர் மேகமூட்டமான காலத்தில் பரவும்']
    },
    causes: {
      en: ['Cool, cloudy weather with moderate humidity', 'Susceptible variety', 'Excess nitrogen favouring rust development'],
      ta: ['மிதமான ஈரப்பதத்துடன் குளிர், மேகமூட்டமான காலநிலை', 'நோய்க்கு எளிதில் ஆளாகும் ரகம்', 'அதிக நைட்ரஜன் துருவின் வளர்ச்சிக்கு ஏற்றது']
    },
    immediateActions: {
      en: ['Scout the field to gauge severity before spraying', 'Avoid additional nitrogen top-dressing during an outbreak'],
      ta: ['தெளிப்பதற்கு முன் தீவிரத்தை மதிப்பிட வயலை கண்காணிக்கவும்', 'வெடிப்பு காலத்தில் மேலும் நைட்ரஜன் இடுவதை தவிர்க்கவும்']
    },
    organicTreatment: [
      { method: { en: 'Sulfur-based fungicide dust/spray', ta: 'கந்தகம் அடிப்படையிலான பூஞ்சைக்கொல்லி பொடி/தெளிப்பு' },
        why: { en: 'Traditional protectant against rust fungi', ta: 'ரஸ்ட் பூஞ்சைக்கு எதிரான பாரம்பரிய பாதுகாப்பு பொருள்' },
        how: { en: 'Dust or spray per label rate at first sign of pustules', ta: 'கொப்பளங்கள் முதலில் தென்படும்போது லேபிள் அளவின்படி பொடி/தெளிப்பு செய்யவும்' },
        frequency: { en: 'Every 10 days until controlled', ta: 'கட்டுப்படும் வரை ஒவ்வொரு 10 நாட்களுக்கும்' },
        precautions: { en: 'Do not apply in very hot weather — can scorch leaves', ta: 'மிக வெப்பமான காலநிலையில் பயன்படுத்த வேண்டாம் — இலைகளை எரிக்கலாம்' } }
    ],
    fertilizerGuidance: {
      en: ['Balanced nitrogen — excess favors rust', 'Adequate potassium improves plant resistance'],
      ta: ['சீரான யூரியா — அதிகம் துருவை ஊக்குவிக்கும்', 'போதிய பொட்டாசியம் நோய் எதிர்ப்பை மேம்படுத்தும்']
    },
    irrigationGuidance: {
      en: ['Avoid over-irrigation that keeps humidity high around the canopy'],
      ta: ['இலைப்படலத்தைச் சுற்றி அதிக ஈரப்பதத்தை ஏற்படுத்தும் அளவுக்கு நீர்ப் பாசனத்தை தவிர்க்கவும்']
    },
    harvestGuidance: {
      en: 'Severe rust reduces grain weight and quality — monitor grain fill closely and harvest promptly once mature to limit further loss.',
      ta: 'கடுமையான துரு தானிய எடை மற்றும் தரத்தை குறைக்கும் — தானிய நிரப்பத்தை நெருக்கமாக கண்காணித்து முதிர்ந்தவுடன் விரைவாக அறுவடை செய்யவும்.'
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
    category: 'fungal', severity: 'moderate',
    symptoms: {
      en: ['Pale yellow streaks on leaves turn dark brown-black with yellow halo', 'Large areas of leaf die back', 'Fruits mature prematurely and unevenly', 'Worst in wet season'],
      ta: ['வெளிர் மஞ்சள் கோடுகள் அடர் பழுப்பு-கருப்பாக மஞ்சள் வளையத்துடன் மாறும்', 'இலையின் பெரிய பகுதி காய்ந்து போகும்', 'கனிகள் சீக்கிரம் சீரற்ற முறையில் முதிரும்', 'மழைக்காலத்தில் அதிகம்']
    },
    causes: {
      en: ['Wet, humid weather', 'Dense planting reducing airflow', 'Continuous cultivation without leaf sanitation'],
      ta: ['ஈரமான, ஈரப்பதமான காலநிலை', 'அடர்த்தியான நடவு காற்றோட்டத்தை குறைக்கும்', 'இலை தூய்மை இல்லாத தொடர் சாகுபடி']
    },
    immediateActions: {
      en: ['Remove and destroy heavily spotted leaves (deleafing)', 'Improve field drainage', 'Avoid excess overhead irrigation'],
      ta: ['அதிக புள்ளிகள் உள்ள இலைகளை அகற்றி அழிக்கவும் (இலை நீக்கம்)', 'வயல் வடிகாலை மேம்படுத்தவும்', 'மேலிருந்து அதிக நீர்ப் பாசனத்தை தவிர்க்கவும்']
    },
    organicTreatment: [
      { method: { en: 'Neem oil spray with a natural sticker', ta: 'இயற்கை ஒட்டும் பொருளுடன் வேப்பெண்ணெய் தெளிப்பு' },
        why: { en: 'Mild antifungal action, protects leaf surface from spore establishment', ta: 'மிதமான பூஞ்சைத் தடுப்பு தன்மை, இலை மேற்பரப்பில் வித்து படிவதை தடுக்கும்' },
        how: { en: 'Mix per label with a natural sticker/spreader; spray both leaf surfaces', ta: 'லேபிள் அளவின்படி இயற்கை ஒட்டும் பொருளுடன் கலந்து, இலையின் இரு பக்கமும் தெளிக்கவும்' },
        frequency: { en: 'Every 10–14 days in the wet season', ta: 'மழைக்காலத்தில் ஒவ்வொரு 10–14 நாட்களுக்கும்' },
        precautions: { en: 'Spray during cooler hours; avoid runoff into water bodies', ta: 'குளிர்ந்த நேரத்தில் தெளிக்கவும்; நீர்நிலைகளில் ஓடிச் சேராமல் பார்த்துக்கொள்ளவும்' } }
    ],
    fertilizerGuidance: {
      en: ['Balanced, potassium-rich fertilization supports leaf vigour and bunch fill', 'Avoid excess nitrogen that promotes dense, soft canopy'],
      ta: ['சீரான, பொட்டாசியம் நிறைந்த உரமிடல் இலை வலிமையையும் குலை நிரப்பத்தையும் ஆதரிக்கும்', 'அடர்த்தியான, மென்மையான இலைப்படலத்தை ஏற்படுத்தும் அதிக நைட்ரஜனை தவிர்க்கவும்']
    },
    irrigationGuidance: {
      en: ['Drip irrigation preferred', 'Avoid prolonged leaf wetness from overhead sprinklers'],
      ta: ['சொட்டு நீர் பாசனம் விரும்பத்தக்கது', 'மேலிருந்து தெளிப்பதால் இலைகள் நீண்ட நேரம் ஈரமாக இருப்பதை தவிர்க்கவும்']
    },
    harvestGuidance: {
      en: 'Severe infection causes premature, uneven ripening and smaller bunch size, reducing market value — harvest promptly once symptoms are noted.',
      ta: 'கடுமையான தாக்குதல் கனிகள் சீக்கிரம் சீரற்ற முறையில் முதிரவும், குலை சிறியதாகவும் ஆக்கி சந்தை மதிப்பை குறைக்கும் — அறிகுறி தென்பட்டவுடன் விரைவாக அறுவடை செய்யவும்.'
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
    category: 'fungal', severity: 'moderate',
    symptoms: {
      en: ['Dark circular spots with bright yellow halo on leaves', 'Lower leaves drop first, defoliation moves upward', 'Spots may join and kill whole leaflets', 'Appears 4–6 weeks after sowing'],
      ta: ['இலைகளில் பிரகாசமான மஞ்சள் வளையத்துடன் அடர் வட்ட புள்ளிகள்', 'கீழ் இலைகள் முதலில் உதிரும், மேல்நோக்கி பரவும்', 'புள்ளிகள் இணைந்து முழு இலையையும் காய்ச்சும்', 'விதைத்த 4–6 வாரங்களில் தோன்றும்']
    },
    causes: {
      en: ['Warm humid weather', 'Continuous groundnut cropping without rotation', 'Infected crop debris left in field'],
      ta: ['வெப்பமான ஈரப்பதமான காலநிலை', 'மாற்று பயிர் இல்லாமல் தொடர் நிலக்கடலை சாகுபடி', 'வயலில் விடப்பட்ட நோய் தாக்கிய பயிர் கழிவுகள்']
    },
    immediateActions: {
      en: ['Remove and destroy severely spotted leaves', 'Avoid working the field when leaves are wet'],
      ta: ['கடுமையாக பாதிக்கப்பட்ட இலைகளை அகற்றி அழிக்கவும்', 'இலைகள் ஈரமாக இருக்கும்போது வயலில் வேலை செய்வதை தவிர்க்கவும்']
    },
    organicTreatment: [
      { method: { en: 'Neem cake soil application + neem oil spray', ta: 'வேப்பம் புண்ணாக்கு மண் பயன்பாடு + வேப்பெண்ணெய் தெளிப்பு' },
        why: { en: 'Improves soil health and gives mild fungal suppression on foliage', ta: 'மண் ஆரோக்கியத்தை மேம்படுத்தி, இலைகளில் மிதமான பூஞ்சை அடக்கத்தை அளிக்கும்' },
        how: { en: 'Incorporate neem cake at sowing; spray neem oil per label during vegetative growth', ta: 'விதைப்பின்போது வேப்பம் புண்ணாக்கை கலக்கவும்; வளர்ச்சி காலத்தில் லேபிள் அளவின்படி வேப்பெண்ணெய் தெளிக்கவும்' },
        frequency: { en: 'Neem cake once at sowing; spray every 10 days', ta: 'வேப்பம் புண்ணாக்கு விதைப்பின்போது ஒருமுறை; தெளிப்பு 10 நாளுக்கு ஒருமுறை' },
        precautions: { en: 'Use well-decomposed neem cake only', ta: 'நன்கு மக்கிய வேப்பம் புண்ணாக்கை மட்டும் பயன்படுத்தவும்' } }
    ],
    fertilizerGuidance: {
      en: ['Balanced fertilization avoiding excess nitrogen', 'Adequate calcium/gypsum supports pod development'],
      ta: ['அதிக நைட்ரஜன் இல்லாத சீரான உரமிடல்', 'போதிய கால்சியம்/ஜிப்சம் காய் வளர்ச்சிக்கு உதவும்']
    },
    irrigationGuidance: {
      en: ['Avoid overhead irrigation late in the day', 'Ensure good field drainage'],
      ta: ['நாளின் பிற்பகுதியில் மேலிருந்து நீர்ப் பாசனத்தை தவிர்க்கவும்', 'நல்ல வயல் வடிகால் இருக்குமாறு பார்த்துக்கொள்ளவும்']
    },
    harvestGuidance: {
      en: 'Early defoliation reduces pod fill and yield — harvest at correct maturity even if some leaf loss has occurred, do not delay past the recommended window.',
      ta: 'இலைகள் சீக்கிரம் உதிர்ந்தால் காய் நிரப்பமும் விளைச்சலும் குறையும் — சில இலை இழப்பு இருந்தாலும் சரியான முதிர்ச்சியில் அறுவடை செய்யவும்.'
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
    category: 'pest', severity: 'severe',
    symptoms: {
      en: ['Ragged, irregular holes on whorl leaves', 'Sawdust-like moist frass visible in the whorl', '"Window-pane" patches where leaf tissue is scraped', 'Serious damage in 15–40 day old crop'],
      ta: ['கண்ணி இலைகளில் ஒழுங்கற்ற துளைகள்', 'கண்ணியில் வண்ணப்பட்டை போன்ற ஈர புழு கழிவு', 'இலை திசு கீறப்பட்ட "ஜன்னல் வடிவ" பகுதிகள்', '15–40 நாள் வயது பயிரில் அதிக சேதம்']
    },
    causes: {
      en: ['Moth migration and egg-laying on young whorl leaves', 'Warm weather speeds larval development', 'Continuous maize cropping in the region'],
      ta: ['இளம் கண்ணி இலைகளில் அந்துப்பூச்சி இடம்பெயர்ந்து முட்டையிடல்', 'வெப்பமான காலநிலை புழு வளர்ச்சியை துரிதப்படுத்தும்', 'பகுதியில் தொடர் மக்காச்சோள சாகுபடி']
    },
    immediateActions: {
      en: ['Scout whorls for egg masses and young larvae weekly', 'Hand-crush egg masses and young larvae where feasible', 'Whorl-directed spraying is far more effective than blanket spray'],
      ta: ['முட்டைக் கூடுகள் மற்றும் இளம் புழுக்களுக்கு வாரம்தோறும் கண்ணிகளை கண்காணிக்கவும்', 'முடிந்தால் முட்டைக் கூடுகள் மற்றும் இளம் புழுக்களை கையால் நசுக்கவும்', 'கண்ணியில் நேரடியாக தெளிப்பது பொது தெளிப்பை விட மிகவும் பயனுள்ளது']
    },
    organicTreatment: [
      { method: { en: 'Bacillus thuringiensis (Bt) whorl-directed spray', ta: 'பேசில்லஸ் துரிஞ்சியன்சிஸ் (Bt) கண்ணி-குறிவைத்த தெளிப்பு' },
        why: { en: 'Targets caterpillar gut specifically, safe for beneficial insects', ta: 'குறிப்பாக புழுவின் குடலை குறிவைக்கும், நன்மை பயக்கும் பூச்சிகளுக்கு பாதுகாப்பானது' },
        how: { en: 'Spray directly into the whorl per label rate in the evening', ta: 'மாலையில் லேபிள் அளவின்படி நேரடியாக கண்ணியில் தெளிக்கவும்' },
        frequency: { en: 'Every 7 days while larvae are active', ta: 'புழுக்கள் செயலில் இருக்கும்போது ஒவ்வொரு 7 நாட்களுக்கும்' },
        precautions: { en: 'Apply in the evening — sunlight breaks Bt down quickly; do not rotate with the same product repeatedly', ta: 'மாலையில் பயன்படுத்தவும் — வெயில் Bt-யை வேகமாக சிதைக்கும்; அதே பொருளை மீண்டும் மீண்டும் பயன்படுத்த வேண்டாம்' } }
    ],
    fertilizerGuidance: {
      en: ['Maintain balanced nitrogen — stressed plants recover more slowly from feeding damage', 'Adequate potassium supports regrowth after whorl damage'],
      ta: ['சீரான நைட்ரஜனை பராமரிக்கவும் — அழுத்தமான செடிகள் சேதத்திலிருந்து மெதுவாக மீளும்', 'போதிய பொட்டாசியம் கண்ணி சேதத்திற்குப் பிறகு மறுவளர்ச்சிக்கு உதவும்']
    },
    irrigationGuidance: {
      en: ['Maintain consistent soil moisture — moisture-stressed plants show worse damage recovery'],
      ta: ['மண்ணில் சீரான ஈரப்பதத்தை பராமரிக்கவும் — நீர் அழுத்தமான செடிகள் சேதத்திலிருந்து மோசமாக மீளும்']
    },
    harvestGuidance: {
      en: 'Whorl damage early in the season can reduce final cob yield significantly — early control gives the biggest yield protection.',
      ta: 'பருவத்தின் ஆரம்பத்தில் கண்ணி சேதம் இறுதி கதிர் விளைச்சலை கணிசமாக குறைக்கும் — ஆரம்ப கட்டுப்பாடு அதிக விளைச்சலைப் பாதுகாக்கும்.'
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
    category: 'pest', severity: 'severe',
    symptoms: {
      en: ['Brownish-black insects crowded at stem base near water line', 'Circular dried patches — "hopper burn"', 'Sticky honeydew and black sooty mould near base', 'Field looks scorched in patches, spreads outward'],
      ta: ['தண்டு அடிப்பகுதி நீர் மட்டத்தில் பழுப்பு-கருப்பு பூச்சிகள் கூட்டமாக', 'வட்டமாக காய்ந்த பகுதிகள் — "ஹாப்பர் பர்ன்"', 'அடிப்பகுதியில் பசை திரவம், கருப்பு பூஞ்சை', 'வயல் பட்டை பட்டையாக காய்ந்து வெளிநோக்கி பரவும்']
    },
    causes: {
      en: ['Continuous standing water without drainage cycles', 'Excess nitrogen producing dense, succulent tillers', 'Close spacing limiting airflow at the base'],
      ta: ['வடிகால் இல்லாமல் தொடர் நிற்கும் நீர்', 'அடர்த்தியான, மென்மையான பதிர்களை உருவாக்கும் அதிக நைட்ரஜன்', 'அடிப்பகுதியில் காற்றோட்டத்தை குறைக்கும் நெருக்கமான இடைவெளி']
    },
    immediateActions: {
      en: ['Drain field water first, then treat at the plant base', 'Scout hills at the base — BPH hides low in the canopy', 'Avoid broad-spectrum insecticides that kill natural predators'],
      ta: ['முதலில் வயல் நீரை வடிகட்டி, பின் செடி அடிப்பகுதியில் சிகிச்சை செய்யவும்', 'அடிப்பகுதியில் தாள்களை கண்காணிக்கவும் — BPH இலைப்படலத்தின் கீழே மறைந்திருக்கும்', 'இயற்கை எதிரிகளை கொல்லும் பரந்த-தர பூச்சிக்கொல்லிகளை தவிர்க்கவும்']
    },
    organicTreatment: [
      { method: { en: 'Azadirachtin (neem-based) spray directed at the base', ta: 'அடிப்பகுதியில் அசாடிராக்டின் (வேப்பம் அடிப்படையிலான) தெளிப்பு' },
        why: { en: 'Disrupts hopper feeding and development while being gentler on natural predators than broad-spectrum chemicals', ta: 'பரந்த-தர இரசாயனங்களை விட இயற்கை எதிரிகளுக்கு மென்மையானது, மரப்புழுவின் உணவு உண்ணுதல் மற்றும் வளர்ச்சியை பாதிக்கும்' },
        how: { en: 'Drain field, then spray directly at the stem base per label rate', ta: 'வயலை வடிகட்டி, பின் லேபிள் அளவின்படி நேரடியாக தண்டு அடிப்பகுதியில் தெளிக்கவும்' },
        frequency: { en: 'Every 7 days until hopper burn patches stop spreading', ta: 'ஹாப்பர் பர்ன் பரவுவது நிற்கும் வரை ஒவ்வொரு 7 நாட்களுக்கும்' },
        precautions: { en: 'Ensure good spray coverage at the base — hoppers hide deep in the canopy', ta: 'அடிப்பகுதியில் நல்ல தெளிப்பு பரவலை உறுதி செய்யவும் — மரப்புழுக்கள் இலைப்படலத்தின் ஆழத்தில் மறைந்திருக்கும்' } }
    ],
    fertilizerGuidance: {
      en: ['Do not exceed recommended nitrogen — excess nitrogen strongly favours BPH buildup', 'Split nitrogen doses over the season'],
      ta: ['பரிந்துரைக்கப்பட்ட யூரியா அளவை மீறாதீர்கள் — அதிக நைட்ரஜன் BPH பெருகுவதற்கு பெரிதும் ஏற்றது', 'பருவம் முழுவதும் நைட்ரஜனை பிரித்து இடவும்']
    },
    irrigationGuidance: {
      en: ['Alternate wetting and drying instead of continuous flooding', 'Drain the field periodically to disrupt hopper habitat at the base'],
      ta: ['தொடர் நீர்ப்பாசனம் இல்லாமல் ஈரம்-உலர் முறையில் நீர் நிர்வகியுங்கள்', 'அடிப்பகுதியில் மரப்புழு வாழிடத்தை பாதிக்க அவ்வப்போது வயலை வடிகட்டவும்']
    },
    harvestGuidance: {
      en: 'Untreated hopper burn can cause complete crop loss in affected patches within days — treat promptly and harvest unaffected areas first if spread is severe.',
      ta: 'சிகிச்சை அளிக்கப்படாத ஹாப்பர் பர்ன் சில நாட்களில் பாதிக்கப்பட்ட பகுதிகளில் முழு பயிர் இழப்பை ஏற்படுத்தலாம் — உடனே சிகிச்சை அளித்து, பரவல் கடுமையாக இருந்தால் பாதிக்கப்படாத பகுதிகளை முதலில் அறுவடை செய்யவும்.'
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
    category: 'pest', severity: 'moderate',
    symptoms: {
      en: ['Young plants: central shoot dries — "dead heart" (pulls out easily)', 'After flowering: empty white ear-heads ("white ear")', 'Hollow stems with caterpillar frass inside', 'Damage appears in scattered clumps across field'],
      ta: ['இளம் செடிகளில் நடு முளை காய்ந்து "செதில் இதழ்" (எளிதாக இழுத்து விடும்)', 'பூக்கும் பின் வெறுமையான வெண்ணிற கதிர்கள் ("வெண் கதிர்")', 'தண்டு உள்ளே காலியாக, புழு கழிவு', 'வயலில் இடம்பிடித்த கொத்து கொத்தாக பாதிப்பு']
    },
    causes: {
      en: ['Moth egg-laying on leaf blades near transplanting', 'Warm humid weather speeds larval development', 'Continuous rice cropping without stubble destruction'],
      ta: ['நடவுக்கு அருகில் இலை மேல் அந்துப்பூச்சி முட்டையிடல்', 'வெப்பமான ஈரப்பதமான காலநிலை புழு வளர்ச்சியை துரிதப்படுத்தும்', 'கால் மொட்டை அழிப்பு இல்லாமல் தொடர் நெல் சாகுபடி']
    },
    immediateActions: {
      en: ['Clip and destroy egg masses on seedling tips before transplanting', 'Remove and destroy dead-heart tillers', 'Scout field weekly for white ear symptoms after flowering'],
      ta: ['நடவுக்கு முன் நாற்று நுனிகளில் உள்ள முட்டை கூடுகளை வெட்டி அழிக்கவும்', 'செதில் இதழ் பதிர்களை அகற்றி அழிக்கவும்', 'பூக்கும் பின் வெண் கதிர் அறிகுறிகளுக்கு வாரம்தோறும் வயலை கண்காணிக்கவும்']
    },
    organicTreatment: [
      { method: { en: 'Egg mass collection + Trichogramma (egg parasitoid) release', ta: 'முட்டை கூடு சேகரிப்பு + ட்ரைக்கோகிராமா (முட்டை ஒட்டுண்ணி) விடுவிப்பு' },
        why: { en: 'Biological control that reduces the next generation of borer larvae', ta: 'அடுத்த தலைமுறை துளைப்பான் புழுக்களை குறைக்கும் உயிரியல் கட்டுப்பாடு' },
        how: { en: 'Collect and destroy visible egg masses weekly; release Trichogramma cards per local KVK guidance', ta: 'தென்படும் முட்டை கூடுகளை வாரம்தோறும் சேகரித்து அழிக்கவும்; உள்ளூர் KVK ஆலோசனையின்படி ட்ரைக்கோகிராமா அட்டைகளை விடுவிக்கவும்' },
        frequency: { en: 'Weekly scouting; Trichogramma release at early tillering', ta: 'வாரந்தோறும் கண்காணிப்பு; ஆரம்ப பதிர் நேரத்தில் ட்ரைக்கோகிராமா விடுவிப்பு' },
        precautions: { en: 'Avoid broad-spectrum insecticides around the same time — they kill the released parasitoids', ta: 'அதே நேரத்தில் பரந்த-தர பூச்சிக்கொல்லிகளை தவிர்க்கவும் — அவை விடுவிக்கப்பட்ட ஒட்டுண்ணிகளை கொல்லும்' } }
    ],
    fertilizerGuidance: {
      en: ['Avoid excess nitrogen which increases succulent tillers attractive to egg-laying moths', 'Balanced potassium aids recovery from dead-heart damage'],
      ta: ['முட்டையிடும் அந்துப்பூச்சியை ஈர்க்கும் மென்மையான பதிர்களை அதிகரிக்கும் அதிக நைட்ரஜனை தவிர்க்கவும்', 'சீரான பொட்டாசியம் செதில் இதழ் சேதத்திலிருந்து மீட்புக்கு உதவும்']
    },
    irrigationGuidance: {
      en: ['Maintain standard water management for rice; avoid prolonged drought stress which weakens plant recovery'],
      ta: ['நெல்லுக்கான வழக்கமான நீர் நிர்வாகத்தை பராமரிக்கவும்; செடி மீட்பை பலவீனப்படுத்தும் நீண்ட வறட்சி அழுத்தத்தை தவிர்க்கவும்']
    },
    harvestGuidance: {
      en: 'White ear symptoms after flowering mean that tiller\'s panicle is already empty — assess the percentage of white ears to estimate yield loss before harvest.',
      ta: 'பூக்கும் பின் வெண் கதிர் அறிகுறி அந்த பதிரின் கதிர் ஏற்கனவே காலியாக உள்ளது என்பதைக் குறிக்கும் — அறுவடைக்கு முன் வெண் கதிர் சதவீதத்தை மதிப்பிடவும்.'
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
    category: 'pest', severity: 'moderate',
    symptoms: {
      en: ['Leaves curl upward, become small, brittle and leathery', 'Silvery shiny streaks on leaf surface', 'Tiny pale-yellow insects inside flowers and buds', 'Heavy flower and fruit drop'],
      ta: ['இலைகள் மேல்நோக்கி சுருண்டு, சிறியதாக, உடையக்கூடியதாக மாறும்', 'இலை மேல் வெள்ளி போன்ற பளபளப்பான கோடுகள்', 'பூக்கள், மொட்டுகளில் சிறிய வெளிர் மஞ்சள் பூச்சிகள்', 'பூ & காய் அதிகம் உதிர்தல்']
    },
    causes: {
      en: ['Hot, dry weather favours thrips buildup', 'Continuous chilli cropping nearby', 'Absence of natural predators due to broad-spectrum spraying'],
      ta: ['வெப்பமான, வறண்ட காலநிலை தத்தும்பூச்சி பெருகுவதற்கு ஏற்றது', 'அருகில் தொடர் மிளகாய் பயிரிடுதல்', 'பரந்த-தர தெளிப்பால் இயற்கை எதிரி பூச்சிகள் இல்லாதது']
    },
    immediateActions: {
      en: ['Install blue sticky traps — thrips are attracted to blue more than yellow', 'Remove and destroy severely curled shoots', 'Avoid broad-spectrum sprays that kill predatory mites'],
      ta: ['நீல பசை பொறிகளை அமைக்கவும் — மஞ்சளை விட நீலம் தத்தும்பூச்சியை அதிகம் ஈர்க்கும்', 'கடுமையாக சுருண்ட தளிர்களை அகற்றி அழிக்கவும்', 'எதிரி நாசி பூச்சிகளை கொல்லும் பரந்த-தர தெளிப்புகளை தவிர்க்கவும்']
    },
    organicTreatment: [
      { method: { en: 'Neem seed kernel extract / neem oil spray', ta: 'வேப்பங்கொட்டை சாறு / வேப்பெண்ணெய் தெளிப்பு' },
        why: { en: 'Repels and disrupts thrips feeding and breeding', ta: 'தத்தும்பூச்சி உணவு உண்ணுதலையும் இனப்பெருக்கத்தையும் தடுக்கும்' },
        how: { en: 'Mix about 5 ml per litre of water; spray covering leaf undersides and buds', ta: '1 லிட்டர் நீரில் 5 மி.லி கலந்து, இலை அடிப்பகுதி மற்றும் மொட்டுகள் நனையும்படி தெளிக்கவும்' },
        frequency: { en: 'Every 7 days', ta: 'ஒவ்வொரு 7 நாட்களுக்கும்' },
        precautions: { en: 'Avoid spraying in peak sun or during heavy pollinator activity', ta: 'கடும் வெயிலில் அல்லது மகரந்தச் சேர்ப்பான் பூச்சிகள் அதிகம் இயங்கும் நேரத்தில் தெளிக்க வேண்டாம்' } }
    ],
    fertilizerGuidance: {
      en: ['Avoid excess nitrogen which produces soft growth attractive to thrips', 'Ensure adequate potassium for plant resilience'],
      ta: ['அதிக நைட்ரஜன் தவிர்க்கவும் — மென்மையான வளர்ச்சி தத்தும்பூச்சியை ஈர்க்கும்', 'செடியின் தாங்கும் திறனுக்கு போதிய பொட்டாசியம் அளிக்கவும்']
    },
    irrigationGuidance: {
      en: ['Avoid moisture stress — thrips populations often rise in drought-stressed plants', 'Maintain consistent soil moisture'],
      ta: ['நீர்ப் பற்றாக்குறையை தவிர்க்கவும் — வறண்ட செடிகளில் தத்தும்பூச்சி அதிகரிக்கும்', 'மண்ணில் நிலையான ஈரப்பதத்தை பராமரிக்கவும்']
    },
    harvestGuidance: {
      en: 'Heavy infestation reduces fruit set and quality — affected plants often give smaller, curled fruit; sort and discard heavily damaged pods at harvest.',
      ta: 'அதிக தாக்குதல் காய் பிடிப்பு மற்றும் தரத்தை குறைக்கும் — பாதிக்கப்பட்ட செடிகளில் சிறிய, சுருண்ட காய்கள் கிடைக்கும்; அறுவடையின்போது அதிகம் சேதமான காய்களை பிரித்து அகற்றவும்.'
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

/* Exact low-confidence message required by the product spec — used when
   the rule-based keyword matcher cannot find a confident match. This is
   an honest limitation notice, not a fabricated "AI" uncertainty score. */
const ADVISORY_LOW_CONFIDENCE_MSG = {
  en: 'The image is not sufficient for a reliable diagnosis. Please upload a clear photo of the affected leaf, stem, fruit, and the full plant.',
  ta: 'நம்பகமான கண்டறிதலுக்கு இந்தப் படம் போதுமானதாக இல்லை. பாதிக்கப்பட்ட இலை, தண்டு, கனி மற்றும் முழு செடியின் தெளிவான புகைப்படத்தைப் பதிவேற்றவும்.',
  hi: 'विश्वसनीय निदान के लिए यह तस्वीर पर्याप्त नहीं है। कृपया प्रभावित पत्ती, तने, फल और पूरे पौधे की एक स्पष्ट तस्वीर अपलोड करें।'
};

/* General chemical-guidance disclaimer, shown under every pesticide
   table (in addition to the existing advisory_disclaimer i18n string). */
const ADVISORY_CHEMICAL_DISCLAIMER = {
  en: 'Follow the product label and local agricultural regulations. Use appropriate PPE and observe pre-harvest and re-entry requirements.',
  ta: 'பொருளின் லேபிளையும் உள்ளூர் வேளாண் விதிமுறைகளையும் பின்பற்றவும். பொருத்தமான பாதுகாப்பு உபகரணங்களை (PPE) அணியவும், அறுவடைக்கு முன் காத்திருப்பு காலம் மற்றும் மறு-நுழைவு காலத்தை கடைபிடிக்கவும்.',
  hi: 'उत्पाद के लेबल और स्थानीय कृषि नियमों का पालन करें। उपयुक्त सुरक्षा उपकरण (PPE) पहनें और कटाई-पूर्व प्रतीक्षा अवधि तथा पुनः-प्रवेश अवधि का ध्यान रखें।'
};
