/* Agridetails — Tamil Nadu Dam Details: major reservoirs located within
   Tamil Nadu, with full/current level, district location, live storage and
   current inflow/outflow, in English, Tamil and Hindi. Compiled from
   Central Water Commission (CWC) weekly Reservoir Storage Bulletin and
   Tamil Nadu Water Resources Department portals (TN Agrisnet /
   tnagriculture.in). Each entry carries its own "as of" reading date since
   readings are taken on different cycles — always confirm with the live
   source link before acting on a flood/irrigation decision.

   Scope: Tamil Nadu dams only (site is TN-focused). Dams outside TN,
   including ones that feed TN river basins from neighbouring states
   (e.g. Periyar, Parambikulam in Kerala; Krishna Raja Sagar/Kabini in
   Karnataka), are intentionally excluded — see agridetails-data-pages
   skill / project decision log.

   stateKey/districtKey are plain English canonical values used ONLY for the
   district filter dropdown on the Dam Details page — the visible district
   text (which may include descriptive/bilingual notes) lives in district{}
   as before. */
const DAM_DETAILS = {
  asOf: '1 Sep 2026',
  items: [
    {
      id: 'mettur',
      name: { en: 'Mettur Dam (Stanley Reservoir)', ta: 'மேட்டூர் அணை (ஸ்டான்லி நீர்த்தேக்கம்)', hi: 'मेट्टूर बांध (स्टेनली जलाशय)' },
      river: { en: 'Cauvery', ta: 'காவேரி', hi: 'कावेरी' },
      stateKey: 'Tamil Nadu', districtKey: 'Salem',
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
      stateKey: 'Tamil Nadu', districtKey: 'Erode',
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
      stateKey: 'Tamil Nadu', districtKey: 'Tiruppur',
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
      id: 'vaigai',
      name: { en: 'Vaigai Dam', ta: 'வைகை அணை', hi: 'वैगई बांध' },
      river: { en: 'Vaigai', ta: 'வைகை', hi: 'वैगई' },
      stateKey: 'Tamil Nadu', districtKey: 'Theni',
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
      stateKey: 'Tamil Nadu', districtKey: 'Krishnagiri',
      state: { en: 'Tamil Nadu', ta: 'தமிழ்நாடு', hi: 'तमिलनाडु' },
      district: { en: 'Krishnagiri', ta: 'கிருஷ்ணகிரி', hi: 'कृष्णागिरी' },
      fullLevelFt: 52, currentLevelFt: 46.85,
      fullCapacity: '1,666 Mcft', currentStorage: '1,129 Mcft',
      percentFull: 67.8,
      inflow: '162 cusecs', outflow: '162 cusecs',
      dateAsOf: '31 Aug 2026',
      source: 'https://tnagriculture.in/ARS/home/reservoir', srcName: 'tnagriculture.in — WRD'
    },
    {
      id: 'sathanur',
      name: { en: 'Sathanur Dam', ta: 'சாத்தனூர் அணை', hi: 'सथानूर बांध' },
      river: { en: 'Ponnaiyar', ta: 'பொன்னையாறு', hi: 'पोन्नैयार' },
      stateKey: 'Tamil Nadu', districtKey: 'Tiruvannamalai',
      state: { en: 'Tamil Nadu', ta: 'தமிழ்நாடு', hi: 'तमिलनाडु' },
      district: { en: 'Tiruvannamalai', ta: 'திருவண்ணாமலை', hi: 'तिरुवन्नामलई' },
      fullLevelFt: 119, currentLevelFt: 86.25,
      fullCapacity: '7,321 Mcft', currentStorage: '2,066 Mcft',
      percentFull: 28.2,
      inflow: '—', outflow: '—',
      dateAsOf: '31 Aug 2026',
      source: 'https://tnagriculture.in/ARS/home/reservoir', srcName: 'tnagriculture.in — WRD'
    },
    {
      id: 'papanasam',
      name: { en: 'Papanasam Dam (Karaiyar)', ta: 'பாபநாசம் அணை (கரையாறு)', hi: 'पापनासम बांध (करैयार)' },
      river: { en: 'Thamirabarani', ta: 'தாமிரபரணி', hi: 'तामिरपरणी' },
      stateKey: 'Tamil Nadu', districtKey: 'Tirunelveli',
      state: { en: 'Tamil Nadu', ta: 'தமிழ்நாடு', hi: 'तमिलनाडु' },
      district: { en: 'Tirunelveli', ta: 'திருநெல்வேலி', hi: 'तिरुनेलवेली' },
      fullLevelFt: 143, currentLevelFt: 71.7,
      fullCapacity: '5,500 Mcft', currentStorage: '1,695 Mcft',
      percentFull: 30.8,
      inflow: '409 cusecs', outflow: '1,105 cusecs',
      dateAsOf: '31 Aug 2026',
      source: 'https://tnagriculture.in/ARS/home/reservoir', srcName: 'tnagriculture.in — WRD'
    },
    {
      id: 'manimuthar',
      name: { en: 'Manimuthar Dam', ta: 'மணிமுத்தாறு அணை', hi: 'मणिमुत्तारु बांध' },
      river: { en: 'Manimuthar (Thamirabarani tributary)', ta: 'மணிமுத்தாறு (தாமிரபரணி துணை ஆறு)', hi: 'मणिमुत्तारु (तामिरपरणी सहायक नदी)' },
      stateKey: 'Tamil Nadu', districtKey: 'Tirunelveli',
      state: { en: 'Tamil Nadu', ta: 'தமிழ்நாடு', hi: 'तमिलनाडु' },
      district: { en: 'Tirunelveli', ta: 'திருநெல்வேலி', hi: 'तिरुनेलवेली' },
      fullLevelFt: 118, currentLevelFt: 61.71,
      fullCapacity: '5,511 Mcft', currentStorage: '1,094 Mcft',
      percentFull: 19.9,
      inflow: '13 cusecs', outflow: '100 cusecs',
      dateAsOf: '31 Aug 2026',
      source: 'https://tnagriculture.in/ARS/home/reservoir', srcName: 'tnagriculture.in — WRD'
    },
    {
      id: 'servalar',
      name: { en: 'Servalar Dam', ta: 'செர்வலார் அணை', hi: 'सेर्वलार बांध' },
      river: { en: 'Servalar (Thamirabarani tributary, joins above Papanasam)', ta: 'செர்வலார் (தாமிரபரணி துணை ஆறு, பாபநாசத்திற்கு மேல் இணைகிறது)', hi: 'सेर्वलार (तामिरपरणी सहायक नदी, पापनासम से पहले मिलती है)' },
      stateKey: 'Tamil Nadu', districtKey: 'Tirunelveli',
      state: { en: 'Tamil Nadu', ta: 'தமிழ்நாடு', hi: 'तमिलनाडु' },
      district: { en: 'Tirunelveli (Papanasam)', ta: 'திருநெல்வேலி (பாபநாசம்)', hi: 'तिरुनेलवेली (पापनासम)' },
      fullLevelFt: 156, currentLevelFt: 102.03,
      fullCapacity: '1,225 Mcft', currentStorage: '~940 Mcft (est. at 102 ft)',
      percentFull: 65.4,
      inflow: '—', outflow: '—',
      dateAsOf: '1 Aug 2026',
      source: 'https://thehindu.com/news/cities/Madurai/good-rainfall-in-catchment-areas-of-papanasam-dam/article71295080.ece', srcName: 'The Hindu (Tirunelveli)'
    },
    {
      id: 'pechiparai',
      name: { en: 'Pechiparai Dam', ta: 'பேச்சிப்பாறை அணை', hi: 'पेचिपराई बांध' },
      river: { en: 'Kodayar', ta: 'கொடையாறு', hi: 'कोडयार' },
      stateKey: 'Tamil Nadu', districtKey: 'Kanyakumari',
      state: { en: 'Tamil Nadu', ta: 'தமிழ்நாடு', hi: 'तमिलनाडु' },
      district: { en: 'Kanyakumari', ta: 'கன்யாகுமரி', hi: 'कन्याकुमारी' },
      fullLevelFt: 48, currentLevelFt: 27.65,
      fullCapacity: '4,350 Mcft', currentStorage: '1,828 Mcft',
      percentFull: 42.0,
      inflow: '390 cusecs', outflow: '558 cusecs',
      dateAsOf: '31 Aug 2026',
      source: 'https://tnagriculture.in/ARS/home/reservoir', srcName: 'tnagriculture.in — WRD'
    },
    {
      id: 'perunchani',
      name: { en: 'Perunchani Dam', ta: 'பெருஞ்சானி அணை', hi: 'पेरुनचानी बांध' },
      river: { en: 'Paralayar (Thamirabarani tributary)', ta: 'பாரளையாறு (தாமிரபரணி துணை ஆறு)', hi: 'पारलयार (तामिरपरणी सहायक नदी)' },
      stateKey: 'Tamil Nadu', districtKey: 'Kanyakumari',
      state: { en: 'Tamil Nadu', ta: 'தமிழ்நாடு', hi: 'तमिलनाडु' },
      district: { en: 'Kanyakumari', ta: 'கன்யாகுமரி', hi: 'कन्याकुमारी' },
      fullLevelFt: 77, currentLevelFt: 56.8,
      fullCapacity: '2,890 Mcft', currentStorage: '1,231 Mcft',
      percentFull: 42.6,
      inflow: '106 cusecs', outflow: '350 cusecs',
      dateAsOf: '31 Aug 2026',
      source: 'https://tnagriculture.in/ARS/home/reservoir', srcName: 'tnagriculture.in — WRD'
    },
    {
      id: 'sholayar',
      name: { en: 'Sholayar Dam', ta: 'சோலையாறு அணை', hi: 'शोलायार बांध' },
      river: { en: 'Sholayar', ta: 'சோலையாறு', hi: 'शोलायार' },
      stateKey: 'Tamil Nadu', districtKey: 'Coimbatore',
      state: { en: 'Tamil Nadu', ta: 'தமிழ்நாடு', hi: 'तमिलनाडु' },
      district: { en: 'Coimbatore (Valparai)', ta: 'கோயம்புத்தூர் (வால்பாறை)', hi: 'कोयंबटूर (वालपराई)' },
      fullLevelFt: 160, currentLevelFt: 101.58,
      fullCapacity: '5,046 Mcft', currentStorage: '2,339 Mcft',
      percentFull: 46.3,
      inflow: '1,116 cusecs', outflow: '1,616 cusecs',
      dateAsOf: '31 Aug 2026',
      source: 'https://tnagriculture.in/ARS/home/reservoir', srcName: 'tnagriculture.in — WRD'
    },
    {
      id: 'aliyar',
      name: { en: 'Aliyar Dam', ta: 'ஆலியாறு அணை', hi: 'अलियार बांध' },
      river: { en: 'Aliyar', ta: 'ஆலியாறு', hi: 'अलियार' },
      stateKey: 'Tamil Nadu', districtKey: 'Coimbatore',
      state: { en: 'Tamil Nadu', ta: 'தமிழ்நாடு', hi: 'तमिलनाडु' },
      district: { en: 'Coimbatore (Pollachi)', ta: 'கோயம்புத்தூர் (பொள்ளாச்சி)', hi: 'कोयंबटूर (पोल्लाची)' },
      fullLevelFt: 120, currentLevelFt: 65.5,
      fullCapacity: '3,864 Mcft', currentStorage: '771 Mcft',
      percentFull: 20.0,
      inflow: '156 cusecs', outflow: '150 cusecs',
      dateAsOf: '31 Aug 2026',
      source: 'https://tnagriculture.in/ARS/home/reservoir', srcName: 'tnagriculture.in — WRD'
    },
    {
      id: 'thirumurthy',
      name: { en: 'Thirumurthy Dam', ta: 'திருமூர்த்தி அணை', hi: 'थिरुमूर्ति बांध' },
      river: { en: 'Palar (Aliyar tributary)', ta: 'பாலாறு (ஆலியாறு துணை ஆறு)', hi: 'पालार (अलियार सहायक नदी)' },
      stateKey: 'Tamil Nadu', districtKey: 'Tiruppur',
      state: { en: 'Tamil Nadu', ta: 'தமிழ்நாடு', hi: 'तमिलनाडु' },
      district: { en: 'Tiruppur (Udumalpet)', ta: 'திருப்பூர் (உடுமலைப்பேட்டை)', hi: 'तिरुप्पुर (उदुमलपेट)' },
      fullLevelFt: 60, currentLevelFt: 33.17,
      fullCapacity: '1,744 Mcft', currentStorage: '739 Mcft',
      percentFull: 42.4,
      inflow: '21 cusecs', outflow: '—',
      dateAsOf: '31 Aug 2026',
      source: 'https://tnagriculture.in/ARS/home/reservoir', srcName: 'tnagriculture.in — WRD'
    }
  ]
};
