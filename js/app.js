/* Agridetails — main app logic */
(function () {
  'use strict';

  /* ---------- Shared UI ---------- */
  document.addEventListener('DOMContentLoaded', () => {
    // mobile nav
    const navToggle = document.getElementById('navToggle');
    const mainNav = document.getElementById('mainNav');
    if (navToggle && mainNav) {
      navToggle.addEventListener('click', () => mainNav.classList.toggle('open'));
    }

    // language toggle
    const langBtn = document.getElementById('langToggle');
    if (langBtn) {
      langBtn.addEventListener('click', () => {
        const next = currentLang() === 'en' ? 'ta' : 'en';
        localStorage.setItem('agri_lang', next);
        applyI18n(next);
        document.dispatchEvent(new CustomEvent('agri:lang', { detail: next }));
      });
    }

    // route by page body content
    if (document.getElementById('homeTicker')) initHome();
    if (document.getElementById('priceTableBody')) initPrices();
    if (document.getElementById('newsList')) initNews();
    if (document.getElementById('analyzeBtn')) initAdvisory();
  });

  function t(key) { return I18N[currentLang()][key] || I18N.en[key] || key; }

  function fmt(n) { return Number(n).toLocaleString('en-IN'); }

  /* ================= HOME ================= */
  async function initHome() {
    const el = document.getElementById('homeTicker');
    const dateEl = document.getElementById('tickerDate');
    try {
      const data = await getPrices();
      const rows = data.rows || [];
      const featured = ['Tomato', 'Onion', 'Potato', 'Carrot'];
      const picks = [];
      for (const c of featured) {
        const r = rows.find(x => x.en === c);
        if (r && !picks.some(p => p.en === c)) picks.push(r);
      }
      el.innerHTML = picks.map(r => `
        <div class="price-card">
          <div class="pc-crop">${r[currentLang()] || r.en}</div>
          <div class="pc-tamil">${r.ta || ''}${r.hi ? ' · ' + r.hi : ''}</div>
          <div class="pc-price">₹${fmt(r.modal)} <span class="pc-unit">/qtl · ₹${(r.modal / 100).toFixed(2)}/kg</span></div>
          <div class="small muted">${r.market}</div>
        </div>`).join('');
      if (dateEl) dateEl.textContent = t('prices_updated') + ' ' + data.updated;
    } catch (e) {
      el.innerHTML = '<p class="muted">Could not load prices.</p>';
    }
  }

  /* ================= PRICES ================= */
  async function getPrices() {
    const cfg = window.AGRI_CONFIG || {};
    if (cfg.DATA_GOV_API_KEY) {
      try {
        return await fetchLivePrices(cfg);
      } catch (e) {
        console.warn('Live fetch failed, using demo data:', e);
      }
    }
    return demoAsRows();
  }

  function demoAsRows() {
    return {
      updated: PRICE_DATA.updated,
      source: 'demo',
      rows: buildCatalogRows().map(r => Object.assign({ change7d: changeFor(r) }, r))
    };
  }

  function changeFor(row) {
    let hist = PRICE_HISTORY[row.en + '|' + row.market];
    if (!hist) {
      const k = Object.keys(PRICE_HISTORY).find(x => x.startsWith(row.en + '|'));
      if (k) hist = PRICE_HISTORY[k];
    }
    if (!hist) return null;
    const prev = hist[0], now = hist[hist.length - 1];
    return Math.round(((now - prev) / prev) * 1000) / 10; // percent
  }

  async function fetchLivePrices(cfg) {
    const url = cfg.API_URL + '?api-key=' + encodeURIComponent(cfg.DATA_GOV_API_KEY)
      + '&format=json&limit=' + (cfg.LIMIT || 500)
      + '&filters%5Bstate%5D=Tamil%20Nadu';
    const res = await fetch(url);
    if (!res.ok) throw new Error('data.gov.in HTTP ' + res.status);
    const json = await res.json();
    const recs = json.records || [];
    // Map AGMARKNET fields: state, district, market, commodity, variety,
    // grade, arrival_date, min_price, max_price, modal_price
    const byKey = {};
    recs.forEach(r => {
      const k = r.commodity + '|' + r.market;
      if (!byKey[k]) {
        byKey[k] = {
          en: r.commodity, ta: '', hi: '', cat: '',
          market: r.market,
          min: +r.min_price || 0, modal: +r.modal_price || 0, max: +r.max_price || 0
        };
      }
    });
    return {
      updated: new Date().toISOString().slice(0, 10),
      source: 'live',
      rows: Object.values(byKey)
    };
  }

  function initPrices() {
    let all = [];
    let catFilter = 'all';
    const cropSel = document.getElementById('cropFilter');
    const mktSel = document.getElementById('marketFilter');
    const nameSel = document.getElementById('nameLangSel');
    const tbody = document.getElementById('priceTableBody');
    const note = document.getElementById('dataSourceNote');
    const tabsEl = document.getElementById('catTabs');

    getPrices().then(rows => {
      all = rows.rows;
      // source banner
      const head = document.querySelector('.page-head .container');
      if (head && !document.getElementById('srcBanner')) {
        const b = document.createElement('p');
        b.id = 'srcBanner';
        b.className = 'small muted';
        b.textContent = rows.source === 'live' ? t('live_banner') : t('demo_banner');
        head.appendChild(b);
      }
      buildTabs();
      populateCropOptions();
      render();
      renderTrends();

      const dEl = document.getElementById('priceDate');
      if (dEl) dEl.textContent = t('prices_updated') + ' ' + rows.updated;
      if (note) note.textContent = '';
    });

    /* ---- category tabs ---- */
    function buildTabs() {
      const cats = [
        ['all', t('cat_all')],
        ['veg', t('cat_veg')],
        ['fruit', t('cat_fruit')],
        ['grain', t('cat_grain')]
      ];
      tabsEl.innerHTML = cats.map(([k, label]) =>
        `<button class="cat-tab ${catFilter === k ? 'active' : ''}" data-cat="${k}">${label}</button>`
      ).join('');
    }
    tabsEl.addEventListener('click', ev => {
      const b = ev.target.closest('.cat-tab');
      if (!b) return;
      catFilter = b.dataset.cat;
      buildTabs();
      populateCropOptions();
      render();
    });

    function filtered() {
      return all.filter(r =>
        (catFilter === 'all' || r.cat === catFilter) &&
        (!cropSel.value || r.en === cropSel.value) &&
        (!mktSel.value || r.market === mktSel.value));
    }

    function populateCropOptions() {
      const crops = [...new Set(filtered().map(r => r.en))].sort();
      const cur = cropSel.value;
      cropSel.innerHTML = '<option value="">' + t('filter_crop') + ' —</option>' +
        crops.map(c => `<option ${c === cur ? 'selected' : ''}>${c}</option>`).join('');
    }

    function render() {
      const rows = filtered();
      const nl = nameSel ? nameSel.value : (currentLang() === 'ta' ? 'ta' : 'en');
      if (!rows.length) {
        tbody.innerHTML = '<tr><td colspan="9" class="muted">No matching rows</td></tr>';
        return;
      }
      tbody.innerHTML = rows.map(r => {
        let ch = '<span class="change-flat">—</span>';
        if (r.change7d !== null && r.change7d !== undefined && !isNaN(r.change7d)) {
          const cls = r.change7d > 0 ? 'change-up' : (r.change7d < 0 ? 'change-down' : 'change-flat');
          const arrow = r.change7d > 0 ? '▲' : (r.change7d < 0 ? '▼' : '');
          ch = `<span class="${cls}">${arrow} ${Math.abs(r.change7d)}%</span>`;
        }
        const nameMap = { en: r.en, ta: r.ta, hi: r.hi };
        const others = Object.keys(nameMap).filter(k => k !== nl && nameMap[k]).join(' · ');
        return `<tr>
          <td><strong>${nameMap[nl] || r.en}</strong>${others ? `<br><span class="small muted">${others}</span>` : ''}</td>
          <td>${r.ta}</td>
          <td>${r.hi || '—'}</td>
          <td>${r.market}</td>
          <td class="num">${fmt(r.min)}</td>
          <td class="num"><strong>${fmt(r.modal)}</strong><br><span class="small muted">₹${(r.modal / 100).toFixed(2)}/kg</span></td>
          <td class="num">${fmt(r.max)}</td>
          <td class="num"><strong>₹${(r.modal / 100).toFixed(2)}</strong></td>
          <td class="num">${ch}</td>
        </tr>`;
      }).join('');
    }

    function renderTrends() {
      const grid = document.getElementById('trendGrid');
      if (!grid) return;
      const entries = Object.entries(PRICE_HISTORY);
      grid.innerHTML = entries.map(([key, vals]) => {
        const [crop, mkt] = key.split('|');
        const min = Math.min(...vals), max = Math.max(...vals);
        const span = (max - min) || 1;
        const bars = vals.map((v, i) =>
          `<div class="trend-bar ${i === vals.length - 1 ? 'today' : ''}" style="height:${8 + ((v - min) / span) * 92}%"></div>`
        ).join('');
        const diff = ((vals[vals.length - 1] - vals[0]) / vals[0] * 100).toFixed(1);
        const dir = diff > 0 ? '▲' : (diff < 0 ? '▼' : '·');
        const row = all.find(r => r.en === crop);
        const label = row ? (row[currentLang()] || row.en) : crop;
        return `<div class="trend-card">
          <h4>${label} <span class="muted small">· ${mkt}</span></h4>
          <div class="trend-bars">${bars}</div>
          <div class="trend-labels"><span>−6d</span><span>today</span></div>
          <div class="trend-now">${t('trend_now')} ₹${fmt(vals[vals.length - 1])}/qtl · ₹${(vals[vals.length - 1] / 100).toFixed(2)}/kg
            <span class="${diff > 0 ? 'change-up' : 'change-down'}">${dir} ${Math.abs(diff)}%</span> / 7d</div>
        </div>`;
      }).join('');
    }

    cropSel.addEventListener('change', render);
    mktSel.addEventListener('change', render);
    if (nameSel) nameSel.addEventListener('change', render);
    document.getElementById('resetFilters').addEventListener('click', () => {
      cropSel.value = ''; mktSel.value = ''; catFilter = 'all'; buildTabs(); populateCropOptions(); render();
    });
    document.addEventListener('agri:lang', () => { buildTabs(); render(); renderTrends(); });
  }

  /* ================= NEWS ================= */
  const NEWS_ITEMS = [
    {
      tag: 'Mandi / Prices',
      en: { title: 'Agmarknet 2.0 app pushes real-time mandi prices to phones', sum: '4,367+ mandis are now linked to the Agmarknet network, and the new Agmarknet 2.0 mobile app lets farmers track prices and arrivals on the spot.' },
      ta: { title: 'அக்மார்க்நெட் 2.0 செயலி — சந்தை விலைகள் உடனடியாக கைபேசியில்', sum: '4,367+ சந்தைகள் அக்மார்க்நெட் வலையமைப்புடன் இணைக்கப்பட்டுள்ளன. புதிய செயலி மூலம் விலை, வரவு விவரங்களை உடனே பார்க்கலாம்.' },
      src: 'https://agritimes.co.in/farmers/over-1-67-crore-farmers-registered-on-e-nam-platform/agmarknet-2-0-e-nam-boost-real-time-mandi-price-transparency',
      srcName: 'AgriTimes'
    },
    {
      tag: 'eNAM',
      en: { title: 'eNAM price display helps farmers refuse low quotes — NABARD study', sum: 'A BITS Goa study for NABARD found farmers who see eNAM prices on their phones negotiate better and avoid below-MSP sales; an estimated 60–70% of middlemen dependence was reduced among registered growers.' },
      ta: { title: 'eNAM விலை தெரிவது விவசாயிகளுக்கு நல்ல விலை பெற உதவுகிறது — NABARD ஆய்வு', sum: 'BITS Goa நடத்திய NABARD ஆய்வில், கைபேசியில் eNAM விலைகளை பார்க்கும் விவசாயிகள் சிறந்த விலை பேசி முடிக்கிறார்கள்; தரகர் சார்பு 60–70% குறைந்தது.' },
      src: 'https://www.thehindubusinessline.com/economy/agri-business/integration-of-mandis-with-enam-helping-farmers-get-better-prices/article69483263.ece',
      srcName: 'The Hindu BusinessLine'
    },
    {
      tag: 'Advisory',
      en: { title: 'TNAU Agritech Portal: season-wise crop protection guides', sum: 'For every major Tamil Nadu crop, TNAU publishes pest & disease calendars with registered pesticide doses — the reference we use for Crop Doctor advice.' },
      ta: { title: 'TNAU அக்ரிடெக் இணையதளம்: பருவ வாரியான பயிர் பாதுகாப்பு வழிகாட்டிகள்', sum: 'தமிழ்நாட்டின் ஒவ்வொரு முக்கிய பயிருக்கும் TNAU பூச்சி & நோய் நாட்காட்டிகளை பதிவிடுகிறது — பயிர் மருத்துவர் ஆலோசனைக்கு நாங்கள் பயன்படுத்தும் ஆதாரம் இதுவே.' },
      src: 'https://agritech.tnau.ac.in',
      srcName: 'TNAU Agritech Portal'
    },
    {
      tag: 'Training',
      en: { title: 'Access Agriculture: free farming videos in Tamil and 110 other languages', sum: '6,476+ agroecology training videos are free to watch — a good companion to this site for learning new techniques visually.' },
      ta: { title: 'Access Agriculture: தமிழ் உள்பட 111 மொழிகளில் இலவச விவசாய பயிற்சி வீடியோக்கள்', sum: '6,476+ வேளாண் கல்வி வீடியோக்கள் இலவசம் — புதிய நுட்பங்களை காட்சியாக கற்றுக்கொள்ள சிறந்தது.' },
      src: 'https://www.accessagriculture.org/',
      srcName: 'Access Agriculture'
    }
  ];

  function initNews() {
    const list = document.getElementById('newsList');
    function render() {
      list.innerHTML = NEWS_ITEMS.map(n => {
        const L = currentLang() === 'ta' ? n.ta : n.en;
        return `<article class="news-item">
          <span class="news-tag">${n.tag}</span>
          <h3>${L.title}</h3>
          <p>${L.sum}</p>
          <div class="news-meta"><a href="${n.src}" target="_blank" rel="noopener">${t('read_source')}</a>
            <span class="muted"> (${n.srcName})</span></div>
        </article>`;
      }).join('');
    }
    render();
    document.addEventListener('agri:lang', render);
  }

  /* ================= ADVISORY ================= */
  function initAdvisory() {
    const dz = document.getElementById('dropZone');
    const input = document.getElementById('photoInput');
    const img = document.getElementById('previewImg');
    const idle = document.getElementById('dzIdle');
    const clearBtn = document.getElementById('clearPhotoBtn');
    const cropSel = document.getElementById('cropSelect');
    const symIn = document.getElementById('symptomInput');
    const btn = document.getElementById('analyzeBtn');

    let hasPhoto = false;

    // crop options from KB
    const crops = [...new Set(ADVISORY_KB.flatMap(d => d.crops))].sort();
    cropSel.innerHTML = '<option value="">—</option>' + crops.map(c => `<option>${c}</option>`).join('');

    // quick-help list
    const quick = document.getElementById('quickList');
    quick.innerHTML = ADVISORY_KB.slice(0, 8).map(d =>
      `<li><button type="button" data-id="${d.id}" data-crop="${d.crops[0]}">${d.en.name} · ${d.en.ta_name}</button></li>`
    ).join('');
    quick.addEventListener('click', ev => {
      const b = ev.target.closest('button[data-id]');
      if (!b) return;
      showResult(ADVISORY_KB.find(d => d.id === b.dataset.id), 'low');
    });

    dz.addEventListener('click', () => input.click());
    ['dragover', 'dragleave', 'drop'].forEach(evName =>
      dz.addEventListener(evName, ev => {
        ev.preventDefault();
        dz.classList.toggle('dragover', evName === 'dragover');
        if (evName === 'drop' && ev.dataTransfer.files[0]) setPhoto(ev.dataTransfer.files[0]);
      })
    );
    input.addEventListener('change', () => { if (input.files[0]) setPhoto(input.files[0]); });

    function setPhoto(file) {
      img.src = URL.createObjectURL(file);
      img.hidden = false; idle.hidden = true; clearBtn.hidden = false;
      hasPhoto = true; refreshBtn();
    }
    clearBtn.addEventListener('click', ev => {
      ev.stopPropagation();
      input.value = ''; img.hidden = true; idle.hidden = false; clearBtn.hidden = true;
      hasPhoto = false; refreshBtn();
    });

    symIn.addEventListener('input', refreshBtn);

    function refreshBtn() { btn.disabled = !(hasPhoto && symIn.value.trim().length > 2); }

    btn.addEventListener('click', () => {
      if (!hasPhoto) { alert(t('need_photo')); return; }
      btn.disabled = true; btn.textContent = t('analyzing');

      setTimeout(() => {   // small delay so the "checking" state is visible
        const crop = cropSel.value;
        const text = symIn.value.toLowerCase();
        const scored = ADVISORY_KB
          .filter(d => !crop || d.crops.includes(crop))
          .map(d => {
            let score = 0;
            d.keywords.forEach(kw => { if (text.includes(kw.toLowerCase())) score += 3; });
            d.keywords.forEach(kw => kw.toLowerCase().split(/\s+/).forEach(w => {
              if (w.length > 4 && text.includes(w)) score += 1;
            }));
            return { d, score };
          })
          .sort((a, b) => b.score - a.score);

        btn.disabled = false;
        btn.textContent = t('analyze_btn');

        const best = scored[0];
        if (!best || best.score <= 0) {
          showResult(null, 'none');
          return;
        }
        showResult(best.d, best.score >= 3 ? 'high' : 'low');
      }, 600);
    });

    let __lastDiagnosis = null;

    function showResult(d, match) {
      const empty = document.getElementById('emptyState');
      const card = document.getElementById('resultCard');
      empty.style.display = 'none';
      card.hidden = false;

      if (!d) {
        __lastDiagnosis = null;
        card.innerHTML = `<h2>${t('no_match')}</h2>`;
        return;
      }
      __lastDiagnosis = { d, match };

      const lang = currentLang();
      const name = lang === 'ta' ? d.en.ta_name : d.en.name;
      const sub = lang === 'ta' ? d.en.name : d.en.ta_name;
      const symptoms = lang === 'ta' ? d.symptoms.ta : d.symptoms.en;
      const prevention = lang === 'ta' ? d.prevention.ta : d.prevention.en;

      document.getElementById('matchBanner').textContent =
        match === 'high' ? t('match_high') : t('match_low');
      document.getElementById('matchBanner').className =
        'match-banner' + (match === 'high' ? '' : ' low');
      document.getElementById('diagnosisTitle').textContent = name;
      document.getElementById('diagnosisTa').textContent = sub;

      document.getElementById('symptomList').innerHTML =
        symptoms.map(s => `<li>${s}</li>`).join('');

      document.getElementById('pesticideBody').innerHTML = d.pesticides.map(p => {
        const pn = lang === 'ta' ? p.ta : p.en;
        const po = lang === 'ta' ? p.en : p.ta;
        return `<tr><td><strong>${pn}</strong><br><span class="small muted">${po}</span></td>
          <td>${p.dose}</td><td>${p.wait}</td></tr>`;
      }).join('');

      document.getElementById('preventionList').innerHTML =
        prevention.map(s => `<li>${s}</li>`).join('');
    }

    // re-render result on language switch
    document.addEventListener('agri:lang', () => {
      const card = document.getElementById('resultCard');
      if (!card.hidden && __lastDiagnosis) showResult(__lastDiagnosis.d, __lastDiagnosis.match);
    });
  }
})();
