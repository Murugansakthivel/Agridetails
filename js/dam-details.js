/* Agridetails — India Dam Details: major reservoirs with full/current level,
   state & district location, live storage and current inflow/outflow, in
   English, Tamil and Hindi. Compiled from Central Water Commission (CWC)
   weekly Reservoir Storage Bulletin, state water resource portals (TN
   Agrisnet/tnagriculture.in, Odisha Hydromet, Kerala SDMA, AP WRIMS) and
   reservoirs.earth aggregation. Each entry carries its own "as of" reading
   date because states report on different cycles — always confirm with the
   live source link before acting on a flood/irrigation decision. */
const DAM_DETAILS = {
  asOf: '31 Aug 2026',
  items: [
    {
      id: 'mettur',
      name: { en: 'Mettur Dam (Stanley Reservoir)', ta: 'மேட்டூர் அணை (ஸ்டான்லி நீர்த்தேக்கம்)', hi: 'मेट्टूर बांध (स्टेनली जलाशय)' },
      river: { en: 'Cauvery', ta: 'காவேரி', hi: 'कावेरी' },
      state: { en: 'Tamil Nadu', ta: 'தமிழ்நாடு', hi: 'तमिलनाडु' },
      district: { en: 'Salem', ta: 'சேலம்', hi: 'सेलम' },
      fullLevelFt: 120, currentLevelFt: 90.47,
      fullCapacity: '93.47 TMC ft (2,647 Mcm)', currentStorage: '53.70 TMC ft',
      percentFull: 57.5,
      inflow: '10,485 cusecs', outflow: '2,000 cusecs (drinking water) + irrigation release from 1 Sep',
      dateAsOf: '31 Aug 2026',
      source: 'https://prokerala.com/news/articles/a1806746.html', srcName: 'PTI / IANS via Prokerala'
    },
    {
      id: 'bhavanisagar',
      name: { en: 'Bhavanisagar Dam', ta: 'பவானிசாகர் அணை', hi: 'भवानीसागर बांध' },
      river: { en: 'Bhavani', ta: 'பவானி', hi: 'भवानी' },
      state: { en: 'Tamil Nadu', ta: 'தமிழ்நாடு', hi: 'तमिलनाडु' },
      district: { en: 'Erode', ta: 'ஈரோடு', hi: 'इरोड' },
      fullLevelFt: 105, currentLevelFt: 51.31,
      fullCapacity: '32,800 Mcft', currentStorage: '4,754 Mcft',
      percentFull: 14.5,
      inflow: '1,052 cusecs', outflow: '2,400 cusecs',
      dateAsOf: '28 Aug 2026',
      source: 'https://www.tnagrisnet.tn.gov.in/ARS/home/reservoir', srcName: 'TN Agrisnet — WRD'
    },
    {
      id: 'amaravathi',
      name: { en: 'Amaravathi Dam', ta: 'அமராவதி அணை', hi: 'अमरावती बांध' },
      river: { en: 'Amaravathi', ta: 'அமராவதி', hi: 'अमरावती' },
      state: { en: 'Tamil Nadu', ta: 'தமிழ்நாடு', hi: 'तमिलनाडु' },
      district: { en: 'Tiruppur', ta: 'திருப்பூர்', hi: 'तिरुप्पुर' },
      fullLevelFt: 90, currentLevelFt: 60.5,
      fullCapacity: '4,047 Mcft', currentStorage: '1,756 Mcft',
      percentFull: 43.4,
      inflow: '471 cusecs', outflow: '—',
      dateAsOf: '28 Aug 2026',
      source: 'https://www.tnagrisnet.tn.gov.in/ARS/home/reservoir', srcName: 'TN Agrisnet — WRD'
    },
    {
      id: 'periyar',
      name: { en: 'Periyar Dam', ta: 'பெரியார் அணை', hi: 'पेरियार बांध' },
      river: { en: 'Periyar', ta: 'பெரியார்', hi: 'पेरियार' },
      state: { en: 'Kerala (feeds Tamil Nadu\u2019s Vaigai basin)', ta: 'கேரளா (தமிழ்நாடு வைகை படுகைக்கு நீர் வழங்குகிறது)', hi: 'केरल (तमिलनाडु के वैगई बेसिन को जल आपूर्ति)' },
      district: { en: 'Idukki', ta: 'இடுக்கி', hi: 'इडुक्की' },
      fullLevelFt: 152, currentLevelFt: 122.6,
      fullCapacity: '10,570 Mcft', currentStorage: '3,143 Mcft',
      percentFull: 29.7,
      inflow: '1,151 cusecs', outflow: '800 cusecs',
      dateAsOf: '28 Aug 2026',
      source: 'https://www.tnagrisnet.tn.gov.in/ARS/home/reservoir', srcName: 'TN Agrisnet — WRD'
    },
    {
      id: 'vaigai',
      name: { en: 'Vaigai Dam', ta: 'வைகை அணை', hi: 'वैगई बांध' },
      river: { en: 'Vaigai', ta: 'வைகை', hi: 'वैगई' },
      state: { en: 'Tamil Nadu', ta: 'தமிழ்நாடு', hi: 'तमिलनाडु' },
      district: { en: 'Theni', ta: 'தேனி', hi: 'थेनी' },
      fullLevelFt: 71, currentLevelFt: 37.47,
      fullCapacity: '6,091 Mcft', currentStorage: '761 Mcft',
      percentFull: 12.5,
      inflow: '315 cusecs', outflow: '126 cusecs',
      dateAsOf: '28 Aug 2026',
      source: 'https://www.tnagrisnet.tn.gov.in/ARS/home/reservoir', srcName: 'TN Agrisnet — WRD'
    },
    {
      id: 'krishnagiri',
      name: { en: 'Krishnagiri Dam', ta: 'கிருஷ்ணகிரி அணை', hi: 'कृष्णागिरी बांध' },
      river: { en: 'Thenpennai (Ponnaiyar)', ta: 'தென்பெண்ணை (பொன்னையாறு)', hi: 'थेनपेन्नई (पोन्नैयार)' },
      state: { en: 'Tamil Nadu', ta: 'தமிழ்நாடு', hi: 'तमिलनाडु' },
      district: { en: 'Krishnagiri', ta: 'கிருஷ்ணகிரி', hi: 'कृष्णागिरी' },
      fullLevelFt: 52, currentLevelFt: 39.1,
      fullCapacity: '1,666 Mcft', currentStorage: '545 Mcft',
      percentFull: 32.7,
      inflow: '170 cusecs', outflow: '170 cusecs',
      dateAsOf: 'late Aug 2026',
      source: 'https://www.tnagrisnet.tn.gov.in/ARS/home/reservoir', srcName: 'TN Agrisnet — WRD'
    },
    {
      id: 'sathanur',
      name: { en: 'Sathanur Dam', ta: 'சாத்தனூர் அணை', hi: 'सथानूर बांध' },
      river: { en: 'Ponnaiyar', ta: 'பொன்னையாறு', hi: 'पोन्नैयार' },
      state: { en: 'Tamil Nadu', ta: 'தமிழ்நாடு', hi: 'तमिलनाडु' },
      district: { en: 'Tiruvannamalai', ta: 'திருவண்ணாமலை', hi: 'तिरुवन्नामलई' },
      fullLevelFt: 119, currentLevelFt: null,
      fullCapacity: '207 hm³ (199 hm³ usable)', currentStorage: '60 hm³',
      percentFull: 28.7,
      inflow: '—', outflow: '—',
      dateAsOf: '21 Aug 2026',
      source: 'https://reservoirs.earth/india/reservoirs/sathanur-in', srcName: 'reservoirs.earth (TN WRD data)'
    },
    {
      id: 'idukki',
      name: { en: 'Idukki Dam', ta: 'இடுக்கி அணை', hi: 'इडुक्की बांध' },
      river: { en: 'Periyar', ta: 'பெரியார்', hi: 'पेरियार' },
      state: { en: 'Kerala', ta: 'கேரளா', hi: 'केरल' },
      district: { en: 'Idukki', ta: 'இடுக்கி', hi: 'इडुक्की' },
      fullLevelFt: 2403, currentLevelFt: null,
      fullCapacity: '70.5 TMC ft (1,996 Mcm)', currentStorage: '43.5 TMC ft (1,231 Mcm)',
      percentFull: 61.7,
      inflow: '—', outflow: '—',
      dateAsOf: '28 Aug 2026',
      source: 'https://reservoirs.earth/india/reservoirs/idukki-in', srcName: 'reservoirs.earth (CWC data)'
    },
    {
      id: 'krs',
      name: { en: 'Krishna Raja Sagar (KRS) Dam', ta: 'கிருஷ்ணராஜ சாகர் (KRS) அணை', hi: 'कृष्ण राजा सागर (केआरएस) बांध' },
      river: { en: 'Cauvery', ta: 'காவேரி', hi: 'कावेरी' },
      state: { en: 'Karnataka', ta: 'கர்நாடகா', hi: 'कर्नाटक' },
      district: { en: 'Mandya', ta: 'மாண்டியா', hi: 'मांड्या' },
      fullLevelFt: 124.8, currentLevelFt: 108.63,
      fullCapacity: '49,452 Mcft', currentStorage: '30,366 Mcft',
      percentFull: 61.4,
      inflow: '9,438 cusecs', outflow: '4,478 cusecs',
      dateAsOf: '28 Aug 2026',
      source: 'https://www.tnagrisnet.tn.gov.in/ARS/home/reservoir', srcName: 'TN Agrisnet (cross-border Cauvery data)'
    },
    {
      id: 'kabini',
      name: { en: 'Kabini Dam', ta: 'காபினி அணை', hi: 'कबिनी बांध' },
      river: { en: 'Kabini', ta: 'காபினி', hi: 'कबिनी' },
      state: { en: 'Karnataka', ta: 'கர்நாடகா', hi: 'कर्नाटक' },
      district: { en: 'Mysuru', ta: 'மைசூர்', hi: 'मैसूर' },
      fullLevelFt: 65, currentLevelFt: 53.79,
      fullCapacity: '19,516 Mcft', currentStorage: '13,092 Mcft',
      percentFull: 67.1,
      inflow: '9,487 cusecs', outflow: '7,760 cusecs',
      dateAsOf: '28 Aug 2026',
      source: 'https://www.tnagrisnet.tn.gov.in/ARS/home/reservoir', srcName: 'TN Agrisnet (cross-border Cauvery data)'
    },
    {
      id: 'srisailam',
      name: { en: 'Srisailam Dam', ta: 'ஸ்ரீசைலம் அணை', hi: 'श्रीशैलम बांध' },
      river: { en: 'Krishna', ta: 'கிருஷ்ணா', hi: 'कृष्णा' },
      state: { en: 'Andhra Pradesh / Telangana border', ta: 'ஆந்திரப் பிரதேசம் / தெலங்கானா எல்லை', hi: 'आंध्र प्रदेश / तेलंगाना सीमा' },
      district: { en: 'Nandyal (AP) / Nagarkurnool (Telangana)', ta: 'நந்தியால் (ஆ.பி.) / நாகர்கர்னூல் (தெலங்கானா)', hi: 'नंद्याल (आं.प्र.) / नागरकुरनूल (तेलंगाना)' },
      fullLevelFt: 885, currentLevelFt: 863.9,
      fullCapacity: '~215.8 TMC ft (live)', currentStorage: '118.62 TMC ft',
      percentFull: 55,
      inflow: '2,45,183 cusecs (from Jurala)', outflow: '—',
      dateAsOf: '5 Aug 2026',
      source: 'https://apwrims.ap.gov.in/mis/reservoir/summary', srcName: 'APWRIMS'
    },
    {
      id: 'nagarjunasagar',
      name: { en: 'Nagarjuna Sagar Dam', ta: 'நாகார்ஜுன சாகர் அணை', hi: 'नागार्जुन सागर बांध' },
      river: { en: 'Krishna', ta: 'கிருஷ்ணா', hi: 'कृष्णा' },
      state: { en: 'Telangana / Andhra Pradesh border', ta: 'தெலங்கானா / ஆந்திரப் பிரதேசம் எல்லை', hi: 'तेलंगाना / आंध्र प्रदेश सीमा' },
      district: { en: 'Nalgonda (Telangana) / Palnadu (AP)', ta: 'நல்கொண்டா (தெலங்கானா) / பால்நாடு (ஆ.பி.)', hi: 'नलगोंडा (तेलंगाना) / पालनाडु (आं.प्र.)' },
      fullLevelFt: null, currentLevelFt: null,
      fullCapacity: '537.60 TMC ft', currentStorage: '312.05 TMC ft',
      percentFull: 58.76,
      inflow: '—', outflow: '—',
      dateAsOf: '29 Aug 2026',
      source: 'https://apwrims.ap.gov.in/mis/reservoir/summary', srcName: 'APWRIMS'
    },
    {
      id: 'bhakra',
      name: { en: 'Bhakra Dam (Gobind Sagar)', ta: 'பாக்ரா அணை (கோவிந்த் சாகர்)', hi: 'भाखड़ा बांध (गोविंद सागर)' },
      river: { en: 'Sutlej', ta: 'சட்லெஜ்', hi: 'सतलुज' },
      state: { en: 'Himachal Pradesh', ta: 'இமாசலப் பிரதேசம்', hi: 'हिमाचल प्रदेश' },
      district: { en: 'Bilaspur', ta: 'பிலாஸ்பூர்', hi: 'बिलासपुर' },
      fullLevelFt: null, currentLevelFt: null,
      fullCapacity: '9,868 Mcm (gross)', currentStorage: '3,356 Mcm (~118.5 TMC)',
      percentFull: 53.9,
      inflow: '—', outflow: '—',
      dateAsOf: '20 Aug 2026',
      source: 'https://reservoirs.earth/the-reservoir/bhakra-dam-water-level-august-2026', srcName: 'reservoirs.earth (BBMB/CWC data)'
    },
    {
      id: 'indirasagar',
      name: { en: 'Indira Sagar Dam', ta: 'இந்திரா சாகர் அணை', hi: 'इंदिरा सागर बांध' },
      river: { en: 'Narmada', ta: 'நர்மதை', hi: 'नर्मदा' },
      state: { en: 'Madhya Pradesh', ta: 'மத்தியப் பிரதேசம்', hi: 'मध्य प्रदेश' },
      district: { en: 'Khandwa', ta: 'காண்ட்வா', hi: 'खंडवा' },
      fullLevelFt: null, currentLevelFt: null,
      fullCapacity: 'India\u2019s largest reservoir by capacity', currentStorage: '—',
      percentFull: 31.5,
      inflow: '—', outflow: '—',
      dateAsOf: '6 Aug 2026',
      source: 'https://reservoirs.earth/the-reservoir/madhya-pradesh-reservoir-levels-august-2026', srcName: 'reservoirs.earth (CWC data)'
    },
    {
      id: 'hirakud',
      name: { en: 'Hirakud Dam', ta: 'ஹிராகுட் அணை', hi: 'हीराकुंड बांध' },
      river: { en: 'Mahanadi', ta: 'மகாநதி', hi: 'महानदी' },
      state: { en: 'Odisha', ta: 'ஒடிசா', hi: 'ओडिशा' },
      district: { en: 'Sambalpur', ta: 'சம்பல்பூர்', hi: 'सम्बलपुर' },
      fullLevelFt: 630, currentLevelFt: 625,
      fullCapacity: '8.136 Mcm live storage', currentStorage: '79.87% of live storage',
      percentFull: 79.87,
      inflow: '—', outflow: '8 of 98 gates open',
      dateAsOf: '31 Aug 2026',
      source: 'https://jalasoochana-wr.odisha.gov.in/Report/riverMap?mapType=mahanadi', srcName: 'Odisha Hydromet (DoWR)'
    }
  ]
};
