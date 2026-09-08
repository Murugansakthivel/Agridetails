/* Agridetails — Government Schemes for farmers.
   REAL scheme data only, sourced from official government portals and
   verified news coverage of official budget announcements — never
   invented, per the product spec's hard rule (Section 26: "Never invent
   scheme information"). Each entry carries its official source URL and
   the date this entry was last verified against that source.

   Central Government schemes: verified against pmkisan.gov.in,
   pmfby.gov.in, agriwelfare.gov.in, soilhealth.dac.gov.in, sbi.bank.in
   (Kisan Credit Card), maandhan.in — Sept 2026.
   Tamil Nadu State schemes: verified against Tamil Nadu Agriculture
   Budget 2025-26 official announcements (presented by Minister
   M.R.K. Panneerselvam, TN Legislative Assembly, 22 Mar 2025) as
   reported by multiple verified press sources (ETV Bharat, The Hindu
   BusinessLine, Economic Times) — Sept 2026.

   Amounts/eligibility can change with each budget cycle — the
   "Last verified" date on each entry and the official source link
   are the source of truth, not this file. */
const GOVT_SCHEMES = {
  lastReviewed: '7 Sep 2026',
  items: [
    {
      id: 'pm_kisan',
      level: 'central',
      name: { en: 'PM-KISAN (Pradhan Mantri Kisan Samman Nidhi)', ta: 'பிஎம்-கிசான் (பிரதமர் கிசான் சம்மான் நிதி)', hi: 'पीएम-किसान (प्रधानमंत्री किसान सम्मान निधि)' },
      benefit: {
        en: '₹6,000 per year (₹2,000 every 4 months) paid directly to bank account.',
        ta: '₹6,000 ஆண்டுக்கு (ஒவ்வொரு 4 மாதத்திற்கும் ₹2,000) நேரடியாக வங்கிக் கணக்கில் செலுத்தப்படும்.',
        hi: '₹6,000 प्रति वर्ष (हर 4 महीने में ₹2,000) सीधे बैंक खाते में जमा।'
      },
      eligibility: {
        en: 'All landholding farmer families (subject to exclusions — serving/retired government employees above certain grades, income-tax payers, professionals like doctors/engineers/lawyers, institutional landholders are excluded). Family = husband, wife, minor children.',
        ta: 'நிலம் வைத்திருக்கும் அனைத்து விவசாய குடும்பங்களும் (சில விதிவிலக்குகள் உண்டு — அரசு ஊழியர்கள், வருமான வரி செலுத்துபவர்கள், மருத்துவர்/பொறியாளர் போன்ற தொழில் வல்லுநர்கள் தவிர்க்கப்படுவர்). குடும்பம் = கணவர், மனைவி, சிறார் குழந்தைகள்.',
        hi: 'सभी भूमिधारक किसान परिवार (कुछ अपवादों के साथ — सरकारी कर्मचारी, आयकरदाता, डॉक्टर/इंजीनियर जैसे पेशेवर बाहर रखे गए हैं)। परिवार = पति, पत्नी, नाबालिग बच्चे।'
      },
      documents: {
        en: 'Aadhaar card, land records, bank account (eKYC mandatory).',
        ta: 'ஆதார் அட்டை, நில பதிவுகள், வங்கி கணக்கு (eKYC கட்டாயம்).',
        hi: 'आधार कार्ड, भूमि रिकॉर्ड, बैंक खाता (eKYC अनिवार्य)।'
      },
      howToApply: {
        en: 'Apply online at pmkisan.gov.in, or through Common Service Centres (CSC).',
        ta: 'pmkisan.gov.in இல் ஆன்லைனில் அல்லது Common Service Centre (CSC) மூலம் விண்ணப்பிக்கவும்.',
        hi: 'pmkisan.gov.in पर ऑनलाइन या Common Service Centre (CSC) के माध्यम से आवेदन करें।'
      },
      source: 'https://www.pmkisan.gov.in/', srcName: 'PM-KISAN Official Portal',
      lastVerified: '7 Sep 2026'
    },
    {
      id: 'pmfby',
      level: 'central',
      name: { en: 'Pradhan Mantri Fasal Bima Yojana (PMFBY) — Crop Insurance', ta: 'பிரதமர் பசல் பீமா யோஜனா (PMFBY) — பயிர் காப்பீடு', hi: 'प्रधानमंत्री फसल बीमा योजना (PMFBY) — फसल बीमा' },
      benefit: {
        en: 'Insurance payout for crop loss from natural calamities, pests and diseases. Farmer pays only a small subsidized premium — 2% of sum insured for Kharif crops, 1.5% for Rabi crops, 5% for annual commercial/horticultural crops; the rest is paid by central + state government.',
        ta: 'இயற்கை பேரிடர்கள், பூச்சி மற்றும் நோய்களால் ஏற்படும் பயிர் இழப்புக்கு காப்பீட்டுத் தொகை. விவசாயி சிறிய மானியப் பிரீமியம் மட்டுமே செலுத்துவார் — காரீஃப் பயிர்களுக்கு 2%, ரபி பயிர்களுக்கு 1.5%, வணிக/தோட்டக்கலை பயிர்களுக்கு 5% — மீதி மத்திய + மாநில அரசு செலுத்தும்.',
        hi: 'प्राकृतिक आपदाओं, कीट और रोगों से फसल हानि पर बीमा भुगतान। किसान केवल एक छोटा सब्सिडी वाला प्रीमियम देता है — खरीफ फसलों के लिए 2%, रबी के लिए 1.5%, वार्षिक वाणिज्यिक/बागवानी फसलों के लिए 5% — शेष केंद्र + राज्य सरकार वहन करती है।'
      },
      eligibility: {
        en: 'All farmers growing notified crops in notified areas, including tenant farmers and sharecroppers. Enrollment must be completed within two weeks of the sowing season starting.',
        ta: 'அறிவிக்கப்பட்ட பகுதிகளில் அறிவிக்கப்பட்ட பயிர்களை பயிரிடும் அனைத்து விவசாயிகளும் (குத்தகைதாரர்கள், பங்கு விவசாயிகள் உட்பட) தகுதியுடையவர்கள். விதைப்பு பருவம் தொடங்கிய இரண்டு வாரங்களுக்குள் பதிவு செய்ய வேண்டும்.',
        hi: 'अधिसूचित क्षेत्रों में अधिसूचित फसलें उगाने वाले सभी किसान, किरायेदार किसान और बटाईदार सहित पात्र हैं। बुवाई का मौसम शुरू होने के दो सप्ताह के भीतर नामांकन पूरा करना आवश्यक है।'
      },
      documents: {
        en: 'Land ownership/tenancy record, Aadhaar, bank account, sowing certificate.',
        ta: 'நில உரிமை/குத்தகை பதிவு, ஆதார், வங்கி கணக்கு, விதைப்பு சான்றிதழ்.',
        hi: 'भूमि स्वामित्व/किरायेदारी रिकॉर्ड, आधार, बैंक खाता, बुवाई प्रमाण पत्र।'
      },
      howToApply: {
        en: 'Apply online at pmfby.gov.in, through your bank (if you have a crop loan), or at the local agriculture department office.',
        ta: 'pmfby.gov.in இல், உங்கள் வங்கி மூலம் (பயிர் கடன் இருந்தால்), அல்லது உள்ளூர் வேளாண் துறை அலுவலகத்தில் விண்ணப்பிக்கவும்.',
        hi: 'pmfby.gov.in पर, अपने बैंक के माध्यम से (यदि फसल ऋण है), या स्थानीय कृषि विभाग कार्यालय में आवेदन करें।'
      },
      source: 'https://www.pmfby.gov.in/', srcName: 'PMFBY Official Portal',
      lastVerified: '7 Sep 2026'
    },
    {
      id: 'kcc',
      level: 'central',
      name: { en: 'Kisan Credit Card (KCC)', ta: 'கிசான் கடன் அட்டை (KCC)', hi: 'किसान क्रेडिट कार्ड (KCC)' },
      benefit: {
        en: 'Short-term credit for cultivation and post-harvest expenses, seeds, fertilizer, and farm equipment at concessional interest rates.',
        ta: 'சாகுபடி மற்றும் அறுவடைக்குப் பிந்தைய செலவுகள், விதைகள், உரம், விவசாய உபகரணங்களுக்கு சலுகை வட்டி விகிதத்தில் குறுகிய கால கடன்.',
        hi: 'खेती और कटाई के बाद के खर्चों, बीज, उर्वरक और कृषि उपकरणों के लिए रियायती ब्याज दरों पर अल्पकालिक ऋण।'
      },
      eligibility: {
        en: 'Individual/joint owner-cultivators, tenant farmers, oral lessees, sharecroppers; Self-Help Groups (SHGs) or Joint Liability Groups of farmers including tenants.',
        ta: 'தனிநபர்/கூட்டு உரிமையாளர்-சாகுபடியாளர்கள், குத்தகை விவசாயிகள், வாய்மொழி குத்தகைதாரர்கள், பங்கு விவசாயிகள்; சுய உதவிக் குழுக்கள் (SHG) அல்லது கூட்டுப் பொறுப்புக் குழுக்கள்.',
        hi: 'व्यक्तिगत/संयुक्त स्वामी-कृषक, किरायेदार किसान, मौखिक पट्टेदार, बटाईदार; स्वयं सहायता समूह (SHG) या किसानों के संयुक्त देयता समूह।'
      },
      documents: {
        en: 'Identity proof, address proof, land records, passport-size photo.',
        ta: 'அடையாள சான்று, முகவரி சான்று, நில பதிவுகள், பாஸ்போர்ட் அளவு புகைப்படம்.',
        hi: 'पहचान प्रमाण, पता प्रमाण, भूमि रिकॉर्ड, पासपोर्ट साइज़ फोटो।'
      },
      howToApply: {
        en: 'Apply at any nearest bank branch (public/private/cooperative/regional rural bank), or online via jansamarth.in.',
        ta: 'அருகிலுள்ள எந்த வங்கி கிளையிலும் (பொது/தனியார்/கூட்டுறவு/பிராந்திய கிராமிய வங்கி), அல்லது jansamarth.in மூலம் ஆன்லைனில் விண்ணப்பிக்கவும்.',
        hi: 'निकटतम किसी भी बैंक शाखा (सार्वजनिक/निजी/सहकारी/क्षेत्रीय ग्रामीण बैंक) में, या jansamarth.in के माध्यम से ऑनलाइन आवेदन करें।'
      },
      source: 'https://www.jansamarth.in/kisan-credit-card-scheme', srcName: 'JanSamarth (Govt. of India loan portal)',
      lastVerified: '7 Sep 2026'
    },
    {
      id: 'soil_health_card',
      level: 'central',
      name: { en: 'Soil Health Card Scheme', ta: 'மண் ஆரோக்கிய அட்டை திட்டம்', hi: 'मृदा स्वास्थ्य कार्ड योजना' },
      benefit: {
        en: 'Free soil testing (12 parameters — N, P, K, pH, EC, organic carbon, and 6 micronutrients) once every 2–3 years, with crop-specific fertilizer recommendations to reduce input cost and improve yield.',
        ta: 'ஒவ்வொரு 2-3 ஆண்டுகளுக்கும் ஒருமுறை இலவச மண் பரிசோதனை (12 அளவுருக்கள் — N, P, K, pH, EC, கரிமக் கார்பன், 6 நுண்ணூட்டச்சத்துக்கள்), பயிர்-குறிப்பிட்ட உர பரிந்துரைகளுடன்.',
        hi: 'हर 2-3 वर्ष में एक बार मुफ्त मृदा परीक्षण (12 पैरामीटर — N, P, K, pH, EC, कार्बनिक कार्बन, और 6 सूक्ष्म पोषक तत्व), फसल-विशिष्ट उर्वरक सिफारिशों के साथ।'
      },
      eligibility: {
        en: 'Any farmer with agricultural land in India — no application needed in most cases, Block Agriculture Office collects samples on a grid basis; farmers can also request testing voluntarily.',
        ta: 'இந்தியாவில் விவசாய நிலம் வைத்திருக்கும் எந்த விவசாயியும் — பெரும்பாலான சந்தர்ப்பங்களில் விண்ணப்பம் தேவையில்லை, தொகுதி வேளாண் அலுவலகம் மாதிரிகளை சேகரிக்கும்; தானாக முன்வந்தும் கேட்கலாம்.',
        hi: 'भारत में कृषि भूमि वाला कोई भी किसान — अधिकांश मामलों में आवेदन की आवश्यकता नहीं, ब्लॉक कृषि कार्यालय ग्रिड आधार पर नमूने एकत्र करता है; किसान स्वेच्छा से भी अनुरोध कर सकते हैं।'
      },
      documents: {
        en: 'None required for routine grid-based testing; Aadhaar/land record if applying voluntarily via portal.',
        ta: 'வழக்கமான கிரிட் அடிப்படையிலான பரிசோதனைக்கு எதுவும் தேவையில்லை; போர்ட்டல் மூலம் தானாக விண்ணப்பித்தால் ஆதார்/நில பதிவு தேவை.',
        hi: 'नियमित ग्रिड-आधारित परीक्षण के लिए कुछ भी आवश्यक नहीं; पोर्टल के माध्यम से स्वेच्छा से आवेदन करने पर आधार/भूमि रिकॉर्ड चाहिए।'
      },
      howToApply: {
        en: 'Visit soilhealth.dac.gov.in, or contact your local Krishi Vigyan Kendra (KVK) / Block Agriculture Office.',
        ta: 'soilhealth.dac.gov.in ஐப் பார்வையிடவும், அல்லது உங்கள் உள்ளூர் கிரிஷி விஞ்ஞான் கேந்திரா (KVK) / தொகுதி வேளாண் அலுவலகத்தைத் தொடர்பு கொள்ளவும்.',
        hi: 'soilhealth.dac.gov.in पर जाएं, या अपने स्थानीय कृषि विज्ञान केंद्र (KVK) / ब्लॉक कृषि कार्यालय से संपर्क करें।'
      },
      source: 'https://soilhealth.dac.gov.in/', srcName: 'Soil Health Card Official Portal',
      lastVerified: '7 Sep 2026'
    },
    {
      id: 'pmkmy',
      level: 'central',
      name: { en: 'Pradhan Mantri Kisan Maandhan Yojana (PMKMY) — Farmer Pension', ta: 'பிரதமர் கிசான் மான்தன் யோஜனா (PMKMY) — விவசாயி ஓய்வூதியம்', hi: 'प्रधानमंत्री किसान मानधन योजना (PMKMY) — किसान पेंशन' },
      benefit: {
        en: 'Voluntary contributory pension scheme — guaranteed minimum pension of ₹3,000/month after age 60. Government matches the farmer\u2019s monthly contribution.',
        ta: 'தன்னார்வ பங்களிப்பு ஓய்வூதியத் திட்டம் — 60 வயதுக்குப் பிறகு மாதம் குறைந்தபட்சம் ₹3,000 உத்தரவாதமான ஓய்வூதியம். விவசாயியின் மாதாந்திர பங்களிப்புக்கு அரசு சமமான தொகையை சேர்க்கும்.',
        hi: 'स्वैच्छिक अंशदायी पेंशन योजना — 60 वर्ष की आयु के बाद ₹3,000/माह की न्यूनतम गारंटीशुदा पेंशन। सरकार किसान के मासिक योगदान के बराबर राशि जोड़ती है।'
      },
      eligibility: {
        en: 'Small & marginal landholding farmers (owning ≤2 hectares as per state land records), entry age 18–40 years, not already enrolled in another statutory social security scheme or an income-tax payer.',
        ta: 'சிறு மற்றும் குறு நிலம் வைத்திருக்கும் விவசாயிகள் (மாநில நில பதிவுகளின்படி ≤2 ஹெக்டேர்), நுழைவு வயது 18-40, மற்றொரு சட்டரீதியான சமூகப் பாதுகாப்புத் திட்டத்தில் இல்லாதவர் அல்லது வருமான வரி செலுத்தாதவர்.',
        hi: 'लघु और सीमांत भूमिधारक किसान (राज्य भूमि रिकॉर्ड के अनुसार ≤2 हेक्टेयर के मालिक), प्रवेश आयु 18-40 वर्ष, किसी अन्य वैधानिक सामाजिक सुरक्षा योजना में नामांकित नहीं या आयकरदाता नहीं।'
      },
      documents: {
        en: 'Aadhaar card, land ownership record, bank passbook, age proof.',
        ta: 'ஆதார் அட்டை, நில உரிமை பதிவு, வங்கி பாஸ்புக், வயது சான்று.',
        hi: 'आधार कार्ड, भूमि स्वामित्व रिकॉर्ड, बैंक पासबुक, आयु प्रमाण।'
      },
      howToApply: {
        en: 'Enroll at your nearest Common Service Centre (CSC), or if already a PM-KISAN beneficiary, opt in directly through the PM-KISAN portal.',
        ta: 'உங்கள் அருகிலுள்ள Common Service Centre (CSC) இல் பதிவு செய்யவும், அல்லது ஏற்கனவே PM-KISAN பயனாளியாக இருந்தால் PM-KISAN போர்ட்டல் மூலம் நேரடியாக விருப்பப்படுத்தவும்.',
        hi: 'अपने निकटतम Common Service Centre (CSC) पर नामांकन करें, या यदि पहले से PM-KISAN लाभार्थी हैं, तो PM-KISAN पोर्टल के माध्यम से सीधे विकल्प चुनें।'
      },
      source: 'https://pmkmy.gov.in/', srcName: 'PM Kisan Maandhan Yojana Official Portal',
      lastVerified: '7 Sep 2026'
    },
    {
      id: 'tn_crop_insurance_2025',
      level: 'state',
      name: { en: 'TN State Crop Insurance Scheme (2025–26)', ta: 'தமிழ்நாடு பயிர் காப்பீட்டுத் திட்டம் (2025-26)', hi: 'तमिलनाडु राज्य फसल बीमा योजना (2025-26)' },
      benefit: {
        en: 'State share of premium subsidy (₹841 crore allocated for 2025–26) protecting farmers against income loss from crop damage due to natural calamities, covering approximately 35 lakh acres statewide, operated alongside PMFBY.',
        ta: 'இயற்கை பேரிடர்களால் ஏற்படும் பயிர் சேதத்தால் ஏற்படும் வருமான இழப்பிலிருந்து விவசாயிகளைப் பாதுகாக்கும் மாநிலப் பங்கு பிரீமியம் மானியம் (2025-26 க்கு ₹841 கோடி ஒதுக்கீடு), மாநிலம் முழுவதும் சுமார் 35 லட்சம் ஏக்கர் பரப்பளவை உள்ளடக்கியது, PMFBY உடன் இணைந்து செயல்படுத்தப்படுகிறது.',
        hi: 'प्राकृतिक आपदाओं से फसल क्षति के कारण होने वाले आय नुकसान से किसानों की रक्षा करने वाली राज्य प्रीमियम सब्सिडी (2025-26 के लिए ₹841 करोड़ आवंटित), राज्यभर में लगभग 35 लाख एकड़ को कवर करती है, PMFBY के साथ संचालित।'
      },
      eligibility: {
        en: 'Farmers in Tamil Nadu growing notified crops, enrolled through the standard PMFBY process — see PMFBY entry above for full eligibility.',
        ta: 'தமிழ்நாட்டில் அறிவிக்கப்பட்ட பயிர்களை பயிரிடும் விவசாயிகள், நிலையான PMFBY செயல்முறை மூலம் பதிவு செய்யப்பட்டவர்கள் — முழு தகுதிக்கு மேலே PMFBY பதிவை பார்க்கவும்.',
        hi: 'तमिलनाडु में अधिसूचित फसलें उगाने वाले किसान, मानक PMFBY प्रक्रिया के माध्यम से नामांकित — पूर्ण पात्रता के लिए ऊपर PMFBY प्रविष्टि देखें।'
      },
      documents: { en: 'Same as PMFBY (see above).', ta: 'PMFBY போலவே (மேலே பார்க்கவும்).', hi: 'PMFBY के समान (ऊपर देखें)।' },
      howToApply: {
        en: 'Apply through your bank (if you have a crop loan) or the local Tamil Nadu Agriculture Department office — same process as PMFBY.',
        ta: 'உங்கள் வங்கி மூலம் (பயிர் கடன் இருந்தால்) அல்லது உள்ளூர் தமிழ்நாடு வேளாண் துறை அலுவலகம் மூலம் விண்ணப்பிக்கவும் — PMFBY போன்ற செயல்முறை.',
        hi: 'अपने बैंक (यदि फसल ऋण है) या स्थानीय तमिलनाडु कृषि विभाग कार्यालय के माध्यम से आवेदन करें — PMFBY के समान प्रक्रिया।'
      },
      source: 'https://thehindubusinessline.com/economy/agri-business/tn-agri-budget-fy26-increased-outlay-farmer-welfare-boost-and-new-projects/article69333209.ece',
      srcName: 'Tamil Nadu Agriculture Budget 2025-26 (official announcement, reported by The Hindu BusinessLine)',
      lastVerified: '7 Sep 2026'
    },
    {
      id: 'tn_hill_farmer_2025',
      level: 'state',
      name: { en: 'Malaivazh Uzhavar Munnetra Thittam (Hill Farmer Development Scheme)', ta: 'மலைவாழ் உழவர் முன்னேற்ற திட்டம்', hi: 'मलैवाझ़ उझवर मुन्नेत्रम योजना (पहाड़ी किसान विकास योजना)' },
      benefit: {
        en: '₹22.80 crore allocated (2025–26) to support 63,000 hill farmers across 20 districts — covers minor millet cultivation, input distribution, vegetable area expansion, farm mechanization, value addition, micro-irrigation, and Kisan Credit Card enrollment support.',
        ta: '20 மாவட்டங்களில் 63,000 மலைவாழ் விவசாயிகளுக்கு ஆதரவாக ₹22.80 கோடி ஒதுக்கீடு (2025-26) — சிறுதானிய சாகுபடி, உள்ளீடு விநியோகம், காய்கறி பரப்பு விரிவாக்கம், விவசாய இயந்திரமயமாக்கல், மதிப்பு கூட்டல், நுண்ணீர்ப்பாசனம், மற்றும் கிசான் கடன் அட்டை பதிவுக்கு உதவி.',
        hi: '20 जिलों में 63,000 पहाड़ी किसानों को सहायता के लिए ₹22.80 करोड़ आवंटित (2025-26) — इसमें लघु धान्य फसल, इनपुट वितरण, सब्ज़ी क्षेत्र विस्तार, कृषि मशीनीकरण, मूल्यवर्धन, सूक्ष्म सिंचाई, और किसान क्रेडिट कार्ड नामांकन सहायता शामिल है।'
      },
      eligibility: {
        en: 'Farmers cultivating in Tamil Nadu\u2019s hill/hilly terrain districts (as designated by the scheme) — exact district list and application window set by the TN Department of Agriculture each year.',
        ta: 'தமிழ்நாட்டின் மலைப்பாங்கான மாவட்டங்களில் சாகுபடி செய்யும் விவசாயிகள் (திட்டத்தால் நியமிக்கப்பட்டவை) — சரியான மாவட்டப் பட்டியல் மற்றும் விண்ணப்ப காலம் ஒவ்வொரு ஆண்டும் தமிழ்நாடு வேளாண் துறையால் நிர்ணயிக்கப்படும்.',
        hi: 'तमिलनाडु के पहाड़ी/पहाड़ी इलाके वाले जिलों में खेती करने वाले किसान (योजना द्वारा नामित) — सटीक जिला सूची और आवेदन विंडो हर साल तमिलनाडु कृषि विभाग द्वारा तय की जाती है।'
      },
      documents: {
        en: 'Land record, Aadhaar — confirm exact requirements with your local Assistant Director of Agriculture office.',
        ta: 'நில பதிவு, ஆதார் — உங்கள் உள்ளூர் உதவி வேளாண் இயக்குநர் அலுவலகத்தில் சரியான தேவைகளை உறுதிப்படுத்தவும்.',
        hi: 'भूमि रिकॉर्ड, आधार — अपने स्थानीय सहायक कृषि निदेशक कार्यालय से सटीक आवश्यकताओं की पुष्टि करें।'
      },
      howToApply: {
        en: 'Contact your local Tamil Nadu Department of Agriculture office (Assistant Director of Agriculture at the Block level) or a nearby Chief Minister\u2019s Farmers Service Centre.',
        ta: 'உங்கள் உள்ளூர் தமிழ்நாடு வேளாண் துறை அலுவலகத்தை (தொகுதி மட்டத்தில் உதவி வேளாண் இயக்குநர்) அல்லது அருகிலுள்ள முதலமைச்சரின் விவசாயிகள் சேவை மையத்தைத் தொடர்பு கொள்ளவும்.',
        hi: 'अपने स्थानीय तमिलनाडु कृषि विभाग कार्यालय (ब्लॉक स्तर पर सहायक कृषि निदेशक) या नज़दीकी मुख्यमंत्री किसान सेवा केंद्र से संपर्क करें।'
      },
      source: 'https://eng.ruralvoice.in/tamil-nadu-unveils-45661-crore-agriculture-budget-focusing-on-paddy-sugarcane-and-new-initiatives',
      srcName: 'Tamil Nadu Agriculture Budget 2025-26 (official announcement, reported by Rural Voice)',
      lastVerified: '7 Sep 2026'
    }
  ]
};
