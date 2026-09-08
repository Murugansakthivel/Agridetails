/* Agridetails — Tamil Nadu district headquarters coordinates.
   Used for the Weather module (Open-Meteo lookup by lat/lon) and the
   Farm Profile location picker. Coordinates are the approximate
   district headquarters town location (public geographic data, not
   an official government boundary/centroid dataset) — sufficient for
   a district-level weather lookup, not for precise field-level siting. */
const TN_DISTRICTS = [
  { key: 'Ariyalur',        en: 'Ariyalur',        ta: 'அரியலூர்',        hi: 'अरियालूर',        lat: 11.1401, lon: 79.0782 },
  { key: 'Chengalpattu',    en: 'Chengalpattu',    ta: 'செங்கல்பட்டு',    hi: 'चेंगलपट्टु',      lat: 12.6819, lon: 79.9888 },
  { key: 'Chennai',         en: 'Chennai',         ta: 'சென்னை',          hi: 'चेन्नई',          lat: 13.0827, lon: 80.2707 },
  { key: 'Coimbatore',      en: 'Coimbatore',      ta: 'கோயம்புத்தூர்',   hi: 'कोयंबटूर',        lat: 11.0168, lon: 76.9558 },
  { key: 'Cuddalore',       en: 'Cuddalore',       ta: 'கடலூர்',          hi: 'कुड्डालोर',       lat: 11.7480, lon: 79.7714 },
  { key: 'Dharmapuri',      en: 'Dharmapuri',      ta: 'தர்மபுரி',        hi: 'धर्मपुरी',        lat: 12.1211, lon: 78.1582 },
  { key: 'Dindigul',        en: 'Dindigul',        ta: 'திண்டுக்கல்',     hi: 'डिंडीगुल',        lat: 10.3673, lon: 77.9803 },
  { key: 'Erode',           en: 'Erode',           ta: 'ஈரோடு',           hi: 'इरोड',            lat: 11.3410, lon: 77.7172 },
  { key: 'Kallakurichi',    en: 'Kallakurichi',    ta: 'கள்ளக்குறிச்சி',  hi: 'कल्लाकुरिची',     lat: 11.7382, lon: 78.9594 },
  { key: 'Kancheepuram',    en: 'Kancheepuram',    ta: 'காஞ்சிபுரம்',     hi: 'कांचीपुरम',       lat: 12.8342, lon: 79.7036 },
  { key: 'Karur',           en: 'Karur',           ta: 'கரூர்',           hi: 'करूर',            lat: 10.9601, lon: 78.0766 },
  { key: 'Krishnagiri',     en: 'Krishnagiri',     ta: 'கிருஷ்ணகிரி',     hi: 'कृष्णागिरी',      lat: 12.5186, lon: 78.2137 },
  { key: 'Madurai',         en: 'Madurai',         ta: 'மதுரை',           hi: 'मदुरै',           lat: 9.9252,  lon: 78.1198 },
  { key: 'Mayiladuthurai',  en: 'Mayiladuthurai',  ta: 'மயிலாடுதுறை',     hi: 'मयिलादुथुराई',    lat: 11.1085, lon: 79.6537 },
  { key: 'Nagapattinam',    en: 'Nagapattinam',    ta: 'நாகப்பட்டினம்',   hi: 'नागापट्टिनम',     lat: 10.7672, lon: 79.8449 },
  { key: 'Namakkal',        en: 'Namakkal',        ta: 'நாமக்கல்',        hi: 'नामक्कल',         lat: 11.2189, lon: 78.1677 },
  { key: 'Nilgiris',        en: 'Nilgiris',        ta: 'நீலகிரி',         hi: 'नीलगिरी',         lat: 11.4916, lon: 76.7337 },
  { key: 'Perambalur',      en: 'Perambalur',      ta: 'பெரம்பலூர்',      hi: 'पेरम्बलूर',       lat: 11.2342, lon: 78.8807 },
  { key: 'Pudukkottai',     en: 'Pudukkottai',     ta: 'புதுக்கோட்டை',    hi: 'पुदुक्कोट्टई',    lat: 10.3813, lon: 78.8213 },
  { key: 'Ramanathapuram',  en: 'Ramanathapuram',  ta: 'இராமநாதபுரம்',    hi: 'रामनाथपुरम',      lat: 9.3639,  lon: 78.8395 },
  { key: 'Ranipet',         en: 'Ranipet',         ta: 'இராணிப்பேட்டை',   hi: 'रानीपेट',         lat: 12.9249, lon: 79.3308 },
  { key: 'Salem',           en: 'Salem',           ta: 'சேலம்',           hi: 'सेलम',            lat: 11.6643, lon: 78.1460 },
  { key: 'Sivaganga',       en: 'Sivaganga',       ta: 'சிவகங்கை',        hi: 'शिवगंगा',         lat: 9.8433,  lon: 78.4809 },
  { key: 'Tenkasi',         en: 'Tenkasi',         ta: 'தென்காசி',        hi: 'तेनकासी',         lat: 8.9601,  lon: 77.3152 },
  { key: 'Thanjavur',       en: 'Thanjavur',       ta: 'தஞ்சாவூர்',       hi: 'तंजावुर',         lat: 10.7870, lon: 79.1378 },
  { key: 'Theni',           en: 'Theni',           ta: 'தேனி',            hi: 'थेनी',            lat: 10.0104, lon: 77.4768 },
  { key: 'Thoothukudi',     en: 'Thoothukudi',     ta: 'தூத்துக்குடி',    hi: 'थूथुक्कुडी',      lat: 8.7642,  lon: 78.1348 },
  { key: 'Tiruchirappalli', en: 'Tiruchirappalli', ta: 'திருச்சிராப்பள்ளி', hi: 'तिरुचिरापल्ली', lat: 10.7905, lon: 78.7047 },
  { key: 'Tirunelveli',     en: 'Tirunelveli',     ta: 'திருநெல்வேலி',    hi: 'तिरुनेलवेली',     lat: 8.7139,  lon: 77.7567 },
  { key: 'Tirupathur',      en: 'Tirupathur',      ta: 'திருப்பத்தூர்',   hi: 'तिरुपत्तूर',      lat: 12.4950, lon: 78.5678 },
  { key: 'Tiruppur',        en: 'Tiruppur',        ta: 'திருப்பூர்',      hi: 'तिरुप्पुर',       lat: 11.1085, lon: 77.3411 },
  { key: 'Tiruvallur',      en: 'Tiruvallur',      ta: 'திருவள்ளூர்',     hi: 'तिरुवल्लूर',      lat: 13.1439, lon: 79.9089 },
  { key: 'Tiruvannamalai',  en: 'Tiruvannamalai',  ta: 'திருவண்ணாமலை',    hi: 'तिरुवन्नामलई',    lat: 12.2253, lon: 79.0747 },
  { key: 'Tiruvarur',       en: 'Tiruvarur',       ta: 'திருவாரூர்',      hi: 'तिरुवारूर',       lat: 10.7661, lon: 79.6345 },
  { key: 'Vellore',         en: 'Vellore',         ta: 'வேலூர்',          hi: 'वेल्लूर',         lat: 12.9165, lon: 79.1325 },
  { key: 'Viluppuram',      en: 'Viluppuram',      ta: 'விழுப்புரம்',     hi: 'विल्लुपुरम',      lat: 11.9401, lon: 79.4861 },
  { key: 'Virudhunagar',    en: 'Virudhunagar',    ta: 'விருதுநகர்',      hi: 'विरुधुनगर',       lat: 9.5851,  lon: 77.9577 }
];
