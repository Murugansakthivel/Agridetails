/* Agridetails — Climate News: current & near-term weather/climate alerts
   affecting Tamil Nadu farming, with crop-specific impact and mitigation
   advice. Tracked DAY-WISE — every refresh appends a new dated snapshot to
   `history` rather than overwriting, so farmers can look back at what was
   reported on any given day. NOT a substitute for official IMD warnings —
   always confirm at mausam.imd.gov.in/chennai before acting.

   Sources: IMD Pune ENSO/IOD Bulletin (Jul 2026), IMD 2nd-stage Long Range
   Forecast (29 May/30 Jun 2026), USDA FAS GAIN report on 2026 kharif season,
   Down To Earth kharif sowing coverage, DT Next / TOI / News9Live / DD India
   Tamil Nadu rainfall & Koyambedu market reports (Aug-Sep 2026), TNAU
   climate change / agromet advisory portal.

   STRUCTURE:
   CLIMATE_NEWS.asOf        = latest snapshot date (YYYY-MM-DD), also history[0].date
   CLIMATE_NEWS.history     = array of { date: 'YYYY-MM-DD', items: [...] },
                              NEWEST FIRST. Each items[] entry is a full,
                              self-contained climate item (same shape used
                              previously): {id, severity, tag{en,ta,hi},
                              en{title,sum}, ta{...}, hi{...},
                              affectedCrops{en,ta,hi}, advice{en,ta,hi},
                              date, source, srcName}.
   Cron job MUST prepend a new { date, items } snapshot on every real
   update (carrying forward still-relevant items + adding new ones) and
   should NOT delete or rewrite older snapshots — only trim the array's
   TAIL once it exceeds ~60 days to bound file size. */
const CLIMATE_NEWS = {
  asOf: '2026-08-31',
  history: [
    {
      date: '2026-08-31',
      items: [
        {
          id: 'enso-elnino-2026',
          severity: 'watch',
          tag: { en: 'El Niño Watch', ta: 'எல் நினோ எச்சரிக்கை', hi: 'अल नीनो चेतावनी' },
          en: {
            title: 'Moderate El Niño strengthening — monsoon rainfall likely below normal',
            sum: 'IMD confirms El Niño conditions developed by June 2026 and are strengthening through the monsoon season. August-September rainfall is forecast at below 94% of the Long Period Average, with several regions facing deficits even as central/peninsular India sees near-normal rain.'
          },
          ta: {
            title: 'எல் நினோ வலுவடைகிறது — பருவமழை சராசரியை விட குறையக்கூடும்',
            sum: 'ஜூன் 2026 முதல் எல் நினோ நிலைமைகள் உருவாகி, பருவமழை காலம் முழுவதும் வலுவடைந்து வருகிறது என IMD உறுதிப்படுத்துகிறது. ஆகஸ்ட்-செப்டம்பர் மழை நீண்டகால சராசரியில் 94%க்கும் குறைவாக இருக்கலாம் என எதிர்பார்க்கப்படுகிறது.'
          },
          hi: {
            title: 'अल नीनो और मज़बूत हो रहा है — मानसून बारिश सामान्य से कम रहने की संभावना',
            sum: 'IMD ने पुष्टि की है कि जून 2026 तक अल नीनो की स्थिति बन चुकी है और मानसून सीज़न में और मज़बूत हो रही है। अगस्त-सितंबर की बारिश दीर्घकालिक औसत के 94% से कम रहने का अनुमान है।'
          },
          affectedCrops: { en: ['Rice (paddy)', 'Groundnut', 'Cotton', 'Pulses', 'Maize', 'Sugarcane'], ta: ['நெல்', 'நிலக்கடலை', 'பருத்தி', 'பயறு வகைகள்', 'சோளம்', 'கரும்பு'], hi: ['धान', 'मूंगफली', 'कपास', 'दलहन', 'मक्का', 'गन्ना'] },
          advice: {
            en: 'Prioritize water-saving practices: mulching, drip/sprinkler irrigation where possible, and short-duration crop varieties. Plan sowing around district-level IMD forecasts rather than the calendar date. Avoid over-sowing water-intensive paddy in rain-deficit blocks — consider System of Rice Intensification (SRI) to cut water use by 25-30%.',
            ta: 'நீர் சேமிப்பு முறைகளை முன்னுரிமை செய்யுங்கள்: மல்ச்சிங், முடிந்தால் சொட்டு/தெளிப்பு பாசனம், குறுகிய கால பயிர் வகைகள். மாவட்ட அளவிலான IMD முன்னறிவிப்பை பார்த்து விதைப்பு திட்டமிடுங்கள். மழை பற்றாக்குறை உள்ள பகுதிகளில் அதிக நீர் தேவைப்படும் நெல் சாகுபடியை தவிர்க்கவும்; SRI முறையை பரிசீலிக்கவும்.',
            hi: 'पानी बचाने के उपायों को प्राथमिकता दें: मल्चिंग, जहाँ संभव हो ड्रिप/स्प्रिंकलर सिंचाई, और कम अवधि की फसल किस्में। कैलेंडर तारीख के बजाय ज़िला-स्तरीय IMD पूर्वानुमान के अनुसार बुवाई की योजना बनाएं। कम बारिश वाले क्षेत्रों में अधिक पानी वाली धान की खेती से बचें।'
          },
          date: '30 Jun 2026', source: 'https://www.khetivyapar.com/en/imd-issues-new-monsoon-forecast-for-august-september-2026-10279', srcName: 'IMD via Kheti Vyapar'
        },
        {
          id: 'kharif-sowing-deficit-2026',
          severity: 'watch',
          tag: { en: 'Kharif Sowing', ta: 'கார் பயிர் விதைப்பு', hi: 'खरीफ बुवाई' },
          en: {
            title: 'Kharif sowing running behind last year in several states',
            sum: '111 districts flagged high-risk for soil moisture deficit as El Niño-linked rainfall gaps slow planting of rice, cotton and pulses. Reservoir levels remain above the 10-year average nationally, which helps buffer irrigation-fed areas, but rainfed farms are most exposed.'
          },
          ta: {
            title: 'கார் பருவ விதைப்பு கடந்த ஆண்டை விட பின்தங்கியுள்ளது',
            sum: 'எல் நினோ தொடர்பான மழை இடைவெளிகள் காரணமாக நெல், பருத்தி, பயறு வகைகளின் விதைப்பு தாமதமாகி, 111 மாவட்டங்கள் மண் ஈரப்பத பற்றாக்குறைக்கு அதிக ஆபத்துடையவை என அடையாளம் காணப்பட்டுள்ளன.'
          },
          hi: {
            title: 'कई राज्यों में खरीफ बुवाई पिछले साल से पीछे',
            sum: 'अल नीनो से जुड़े बारिश के अंतराल के कारण धान, कपास और दलहन की बुवाई धीमी हुई है; 111 ज़िलों को मिट्टी की नमी की कमी के लिए उच्च-जोखिम के रूप में चिह्नित किया गया है।'
          },
          affectedCrops: { en: ['Rice (paddy)', 'Cotton', 'Pulses (Arhar, Urad, Moong)', 'Coarse cereals (Jowar)'], ta: ['நெல்', 'பருத்தி', 'பயறு வகைகள்', 'கம்பு/சோளம்'], hi: ['धान', 'कपास', 'दलहन (अरहर, उड़द, मूंग)', 'मोटे अनाज (ज्वार)'] },
          advice: {
            en: "If your block is showing soil moisture deficit, delay water-heavy sowing until a confirmed rain spell rather than sowing dry and risking seed loss. Consider drought-tolerant / short-duration pulse varieties as a fallback crop for this season. Check your district's soil moisture status on the TNAU Agromet advisory before committing seed.",
            ta: 'உங்கள் பகுதியில் மண் ஈரப்பத பற்றாக்குறை இருந்தால், உறுதியான மழைக்குப் பிறகே நீர் தேவைப்படும் பயிர்களை விதைக்கவும் — உலர் மண்ணில் விதைத்து விதை இழப்பை தவிர்க்கவும். இந்த பருவத்திற்கு வறட்சி தாங்கும் / குறுகிய கால பயறு வகைகளை மாற்று பயிராக பரிசீலிக்கவும்.',
            hi: 'यदि आपके क्षेत्र में मिट्टी की नमी की कमी दिख रही है, तो सूखी बुवाई से बचें और पक्की बारिश का इंतज़ार करें। इस सीज़न के लिए सूखा-सहिष्णु/कम अवधि की दलहन किस्मों को वैकल्पिक फसल के रूप में देखें।'
          },
          date: 'Jun-Jul 2026', source: 'https://www.downtoearth.org.in/agriculture/el-ni%C3%B1o-impact-monsoon-rainfall-deficit-slows-kharif-sowing-across-india-leaving-planting-20-behind-last-year', srcName: 'Down To Earth'
        },
        {
          id: 'tn-heavy-rain-alert-sep2026',
          severity: 'alert',
          tag: { en: 'Heavy Rain Alert', ta: 'கனமழை எச்சரிக்கை', hi: 'भारी बारिश चेतावनी' },
          en: {
            title: 'Western Tamil Nadu & Ghats: heavy rain, gusty winds likely Sept 1-2',
            sum: 'IMD forecasts heavy rainfall accompanied by gusty winds in Coimbatore, Theni, Tirunelveli districts and hilly areas of Nilgiris on Thursday-Friday (Sept 1-2), driven by weak atmospheric circulation over northern TN coastal areas. Isolated heavy rain may continue in Theni, Tenkasi, Tirunelveli on Saturday. Moderate rain expected across Chennai, northern and interior districts through the weekend.'
          },
          ta: {
            title: 'மேற்கு தமிழ்நாடு & மலைப்பகுதிகள்: செப்.1-2 கனமழை, பலத்த காற்று',
            sum: 'வட தமிழ்நாடு கடலோரப் பகுதிகளில் பலவீனமான வளிமண்டல சுழற்சி காரணமாக கோவை, தேனி, திருநெல்வேலி மாவட்டங்கள் மற்றும் நீலகிரி மலைப்பகுதிகளில் வியாழன்-வெள்ளி (செப்.1-2) கனமழை மற்றும் பலத்த காற்று எதிர்பார்க்கப்படுகிறது. தேனி, தென்காசி, திருநெல்வேலியில் சனிக்கிழமை தனித்தனி இடங்களில் கனமழை தொடரலாம்.'
          },
          hi: {
            title: 'पश्चिमी तमिलनाडु और घाट: 1-2 सितंबर भारी बारिश, तेज़ हवाएं संभव',
            sum: 'उत्तरी तमिलनाडु तटीय क्षेत्रों में कमज़ोर वायुमंडलीय परिसंचरण के कारण कोयंबटूर, थेनी, तिरुनेलवेली ज़िलों और नीलगिरि पहाड़ी क्षेत्रों में गुरुवार-शुक्रवार (1-2 सितंबर) भारी बारिश और तेज़ हवाओं का पूर्वानुमान। शनिवार को थेनी, तेनकासी, तिरुनेलवेली में अलग-अलग स्थानों पर भारी बारिश जारी रह सकती है।'
          },
          affectedCrops: { en: ['Tea plantations', 'Vegetables (beans, carrot, potato)', 'Banana', 'Turmeric', 'Cardamom'], ta: ['தேயிலை தோட்டங்கள்', 'காய்கறிகள் (பீன்ஸ், கேரட், உருளைக்கிழங்கு)', 'வாழை', 'மஞ்சள்', 'ஏலக்காய்'], hi: ['चाय बागान', 'सब्ज़ियां (बीन्स, गाजर, आलू)', 'केला', 'हल्दी', 'इलायची'] },
          advice: {
            en: 'In hilly areas, monitor for landslide warnings and avoid steep field work during heavy spells. Ensure proper drainage in tea and cardamom estates to prevent waterlogging. Delay spraying operations until after the rain passes. For vegetable growers in affected districts, harvest ready produce before the rain window to capture current market prices before supply normalizes.',
            ta: 'மலைப்பகுதிகளில் நிலச்சரிவு எச்சரிக்கைகளை கண்காணித்து, கனமழை பெய்யும் போது செங்குத்தான வயல் வேலைகளை தவிர்க்கவும். தேயிலை மற்றும் ஏலக்காய் தோட்டங்களில் நீர் தேங்காமல் சரியான வடிகால் அமைப்பை உறுதி செய்யவும். மழைக்குப் பிறகு தெளித்தல் நடவடிக்கைகளை செய்யவும். பாதிக்கப்பட்ட மாவட்டங்களில் காய்கறி விவசாயிகள், விநியோகம் இயல்புநிலைக்கு வருவதற்கு முன் தற்போதைய சந்தை விலைகளைப் பெற மழைக்கு முன் தயார் விளைபொருட்களை அறுவடை செய்யவும்.',
            hi: 'पहाड़ी क्षेत्रों में भूस्खलन चेतावनी की निगरानी करें और भारी बारिश के दौरान खड़ी ढलानों पर खेत का काम टालें। चाय और इलायची बागानों में जलभराव रोकने के लिए उचित जल निकासी सुनिश्चित करें। बारिश बीतने तक छिड़काव कार्य स्थगित करें। प्रभावित ज़िलों में सब्ज़ी उत्पादकों के लिए, आपूर्ति सामान्य होने से पहले वर्तमान बाज़ार मूल्य पाने के लिए बारिश से पहले तैयार उपज की कटाई करें।'
          },
          date: '31 Aug 2026', source: 'https://ddindia.co.in/2026/08/heavy-rain-gusty-winds-likely-in-parts-of-tamil-nadu-over-next-three-days-imd/', srcName: 'IMD via DD India'
        },
        {
          id: 'koyambedu-price-disruption-2026',
          severity: 'info',
          tag: { en: 'Market Impact', ta: 'சந்தை தாக்கம்', hi: 'बाज़ार प्रभाव' },
          en: {
            title: 'Recent heavy rains cut vegetable arrivals at Koyambedu, pushed prices up 20-30%',
            sum: "Waterlogged farms and transport disruption dropped Koyambedu's daily vegetable truckloads from ~400 to ~250 during a recent rain spell, spiking wholesale prices for beans, carrots and other vegetables by 20-30%. Traders expect gradual correction as fresh arrivals stabilize."
          },
          ta: {
            title: 'சமீபத்திய கனமழை கோயம்பேடு காய்கறி வரவை குறைத்து விலையை 20-30% உயர்த்தியது',
            sum: 'மழை காரணமாக நீர் தேங்கிய வயல்களும் போக்குவரத்து சிக்கல்களும் கோயம்பேடு தினசரி காய்கறி லாரி வரவை ~400 இலிருந்து ~250 ஆக குறைத்தது; பீன்ஸ், கேரட் மற்றும் பிற காய்கறிகளின் மொத்த விலை 20-30% உயர்ந்தது.'
          },
          hi: {
            title: 'हाल की भारी बारिश से कोयंबेडु में सब्ज़ी आवक घटी, दाम 20-30% बढ़े',
            sum: 'जलभराव और परिवहन बाधा के कारण कोयंबेडु में रोज़ाना सब्ज़ी ट्रकों की संख्या ~400 से घटकर ~250 रह गई, जिससे बीन्स, गाजर व अन्य सब्ज़ियों के थोक दाम 20-30% बढ़ गए।'
          },
          affectedCrops: { en: ['Beans', 'Carrot', 'Tomato', 'Broad beans', 'Green peas'], ta: ['பீன்ஸ்', 'கேரட்', 'தக்காளி', 'அவரைக்காய்', 'பட்டாணி'], hi: ['बीन्स', 'गाजर', 'टमाटर', 'सेम', 'हरी मटर'] },
          advice: {
            en: "If you have a harvest ready and roads are passable, moving produce to market quickly can capture the current price spike before supply normalizes. Farmers in unaffected blocks may see a short-term price advantage — check today's Prices page before selling.",
            ta: 'அறுவடை தயாராக இருந்து சாலைகள் பயன்படுத்தக்கூடியதாக இருந்தால், விலை உயர்வு நீடிக்கும் போதே விற்பனைக்கு கொண்டு செல்வது நல்லது. இன்றைய விலைப் பக்கத்தை சரிபார்த்து விற்பனை செய்யவும்.',
            hi: 'यदि फ़सल तैयार है और सड़कें चलने योग्य हैं, तो आपूर्ति सामान्य होने से पहले जल्दी बाज़ार भेजना फ़ायदेमंद हो सकता है। बेचने से पहले आज के भाव पेज ज़रूर देखें।'
          },
          date: 'Aug 2026', source: 'https://news9live.com/state/tamil-nadu/heavy-rains-spoil-supply-send-vegetable-prices-soaring-in-chennais-koyambedu-market-2902605', srcName: 'News9 Live'
        },
        {
          id: 'reservoir-buffer-2026',
          severity: 'info',
          tag: { en: 'Reservoir Status', ta: 'நீர்த்தேக்க நிலவரம்', hi: 'जलाशय स्थिति' },
          en: {
            title: 'National reservoir levels above 10-year average, cushioning irrigated areas',
            sum: "Despite El Niño-linked rainfall deficits, India's major reservoirs are holding above their 10-year seasonal average, which supports crop prospects in canal- and tank-irrigated areas even where direct rainfall is short. Rainfed and dryland farms remain the most exposed to the deficit."
          },
          ta: {
            title: 'தேசிய நீர்த்தேக்க அளவுகள் 10-ஆண்டு சராசரியை விட அதிகம் — பாசன பகுதிகளுக்கு ஆதரவு',
            sum: 'எல் நினோ தொடர்பான மழை பற்றாக்குறை இருந்தபோதிலும், இந்தியாவின் முக்கிய நீர்த்தேக்கங்கள் 10-ஆண்டு பருவகால சராசரியை விட அதிகமாக உள்ளன — கால்வாய் மற்றும் ஏரி பாசன பகுதிகளுக்கு இது உதவியாக இருக்கும்.'
          },
          hi: {
            title: 'राष्ट्रीय जलाशय स्तर 10-वर्षीय औसत से ऊपर, सिंचित क्षेत्रों को राहत',
            sum: 'अल नीनो से जुड़ी बारिश की कमी के बावजूद, भारत के प्रमुख जलाशय अपने 10-वर्षीय मौसमी औसत से ऊपर बने हुए हैं, जो नहर और तालाब सिंचित क्षेत्रों की फसल संभावनाओं को सहारा देता है।'
          },
          affectedCrops: { en: ['Canal-irrigated paddy', 'Sugarcane', 'Banana'], ta: ['கால்வாய் பாசன நெல்', 'கரும்பு', 'வாழை'], hi: ['नहर-सिंचित धान', 'गन्ना', 'केला'] },
          advice: {
            en: 'If your farm draws from a major reservoir or canal system, current storage levels suggest normal irrigation scheduling should hold through the season — but confirm with your local Water Users Association since local tank levels can differ sharply from state/national averages.',
            ta: 'உங்கள் வயல் ஒரு பெரிய நீர்த்தேக்கம் அல்லது கால்வாய் அமைப்பிலிருந்து நீர் பெறுகிறதெனில், தற்போதைய சேமிப்பு அளவுகள் இந்த பருவம் முழுவதும் இயல்பான பாசன அட்டவணையை பராமரிக்க உதவும். ஆயினும் உங்கள் உள்ளூர் நீர்பயனாளர் சங்கத்துடன் உறுதிப்படுத்தவும்.',
            hi: 'यदि आपका खेत किसी बड़े जलाशय या नहर प्रणाली से पानी लेता है, तो मौजूदा भंडारण स्तर सीज़न भर सामान्य सिंचाई शेड्यूल बनाए रखने का संकेत देते हैं — फिर भी स्थानीय जल उपयोगकर्ता संघ से पुष्टि करें।'
          },
          date: 'Jun 2026', source: 'https://apps.fas.usda.gov/newgainapi/api/Report/DownloadReportByFileName?fileName=Monsoon+Advances+Amid+Emerging+El+Nino+Concerns_Mumbai_India_IN2026-0038.pdf', srcName: 'USDA FAS GAIN Report'
        }
      ]
    }
  ]
};
