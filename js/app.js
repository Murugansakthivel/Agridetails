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

    // language switching is handled by #langSwitch buttons bound in i18n.js

    // route by page body content
    if (document.getElementById('homeTicker')) initHome();
    if (document.getElementById('priceTableBody')) initPrices();
    if (document.getElementById('newsList')) initNews();
    if (document.getElementById('analyzeBtn')) initAdvisory();
    if (document.getElementById('stocksGrid')) initStocksPage();
  });

  function t(key) { return I18N[currentLang()][key] || I18N.en[key] || key; }

  function fmt(n) { return Number(n).toLocaleString('en-IN'); }

  /* Build a wa.me share link with a pre-filled price message in the
     current site language. r = price row, lang = 'en'|'ta'|'hi', label =
     crop name already resolved to that language. */
  function buildWhatsAppShareUrl(r, lang, label) {
    const kg = (r.modal / 100).toFixed(2);
    const siteUrl = 'https://murugansakthivel.github.io/Agridetails/prices.html';
    const templates = {
      en: `🌾 ${label} price today (${selectedDateForShare()})\n₹${fmt(r.modal)}/quintal · ₹${kg}/kg\nMarket: ${r.market}\n\nCheck more prices: ${siteUrl}`,
      ta: `🌾 ${label} இன்றைய விலை (${selectedDateForShare()})\n₹${fmt(r.modal)}/குவின்டல் · ₹${kg}/கிலோ\nசந்தை: ${r.market}\n\nமேலும் விலைகள்: ${siteUrl}`,
      hi: `🌾 ${label} आज का भाव (${selectedDateForShare()})\n₹${fmt(r.modal)}/क्विंटल · ₹${kg}/किग्रा\nबाज़ार: ${r.market}\n\nऔर भाव देखें: ${siteUrl}`
    };
    const text = templates[lang] || templates.en;
    return 'https://wa.me/?text=' + encodeURIComponent(text);
  }
  function selectedDateForShare() {
    const el = document.getElementById('dateFilter');
    return (el && el.value) || (typeof todayStr === 'function' ? todayStr() : '');
  }

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
      renderMarquee(rows);
    } catch (e) {
      el.innerHTML = '<p class="muted">Could not load prices.</p>';
    }
  }
  document.addEventListener('agri:lang', initHome);

  function renderMarquee(rows) {
    const track = document.getElementById('marqueeTrack');
    if (!track) return;
    const icons = { Tomato:'🍅', Onion:'🧅', Potato:'🥔', Carrot:'🥕', Mango:'🥭', Banana:'🍌',
      Brinjal:'🍆', Cabbage:'🥬', Lemon:'🍋', Grapes:'🍇', Rice:'🌾', Groundnut:'🥜',
      'Green Chilli':'🌶️', Garlic:'🧄', Ginger:'🫚', Coconut:'🥥' };
    const wanted = Object.keys(icons);
    const picks = [];
    for (const w of wanted) {
      const r = rows.find(x => x.en === w);
      if (r && !picks.some(p => p.en === w)) picks.push(r);
    }
    const item = r => `<span class="mq-item">${icons[r.en] || '🌱'} ${r[currentLang()] || r.en} <b>₹${fmt(r.modal)}/qtl</b> · ₹${(r.modal/100).toFixed(2)}/kg</span>`;
    const half = picks.map(item).join('');
    track.innerHTML = half + half;   // duplicated for seamless loop
  }

  /* ================= PRICES ================= */
  async function getPrices(dateStr) {
    const cfg = window.AGRI_CONFIG || {};
    if (cfg.DATA_GOV_API_KEY) {
      try {
        return await fetchLivePrices(cfg, dateStr);
      } catch (e) {
        console.warn('Live fetch failed, using demo data:', e);
      }
    }
    return demoAsRows(dateStr);
  }

  function demoAsRows(dateStr) {
    dateStr = dateStr || todayStr();
    return {
      updated: dateStr,
      source: 'demo',
      rows: buildCatalogRows(dateStr).map(r => Object.assign({ change7d: changeFor(r, dateStr) }, r))
    };
  }

  function changeFor(row, dateStr) {
    const series = buildTrendSeries(row.en, dateStr, 7);
    if (!series.length) return null;
    const prev = series[0], now = series[series.length - 1];
    if (!prev) return null;
    return Math.round(((now - prev) / prev) * 1000) / 10; // percent
  }

  async function fetchLivePrices(cfg, dateStr) {
    dateStr = dateStr || todayStr();
    // AGMARKNET date filter format is DD/MM/YYYY
    const [y, m, d] = dateStr.split('-');
    const url = cfg.API_URL + '?api-key=' + encodeURIComponent(cfg.DATA_GOV_API_KEY)
      + '&format=json&limit=' + (cfg.LIMIT || 500)
      + '&filters%5Bstate%5D=Tamil%20Nadu'
      + '&filters%5Barrival_date%5D=' + encodeURIComponent(`${d}/${m}/${y}`);
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
      updated: dateStr,
      source: 'live',
      rows: Object.values(byKey)
    };
  }

  function initPrices() {
    let all = [];
    let catFilter = 'all';
    let selectedDate = todayStr();
    const cropSel = document.getElementById('cropFilter');
    const mktSel = document.getElementById('marketFilter');
    const dateSel = document.getElementById('dateFilter');
    const tbody = document.getElementById('priceTableBody');
    const note = document.getElementById('dataSourceNote');
    const tabsEl = document.getElementById('catTabs');

    if (dateSel) {
      dateSel.value = selectedDate;
      dateSel.max = todayStr();
      dateSel.min = addDays(todayStr(), -29);   // 30-day searchable window
    }

    function load() {
      getPrices(selectedDate).then(rows => {
        all = rows.rows;
        buildTabs();
        populateCropOptions();
        render();
        renderTrends();

        const dEl = document.getElementById('priceDate');
        if (dEl) dEl.textContent = t('prices_updated') + ' ' + rows.updated;

        const head = document.querySelector('.page-head .container');
        let banner = document.getElementById('srcBanner');
        if (head && !banner) {
          banner = document.createElement('p');
          banner.id = 'srcBanner';
          banner.className = 'small muted';
          head.appendChild(banner);
        }
        if (banner) banner.textContent = rows.source === 'live' ? t('live_banner') : t('demo_banner');
        if (note) note.textContent = '';
      });
    }
    load();

    if (dateSel) {
      dateSel.addEventListener('change', () => {
        selectedDate = dateSel.value || todayStr();
        load();
      });
    }

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
      const nl = currentLang();
      const crops = [...new Set(filtered().map(r => r.en))]
        .map(en => {
          const row = all.find(r => r.en === en);
          return { v: en, label: (row && (row[nl] || row.en)) || en };
        })
        .sort((x, y) => x.label.localeCompare(y.label, nl === 'hi' ? 'hi' : (nl === 'ta' ? 'ta' : 'en')));
      const cur = cropSel.value;
      cropSel.innerHTML = '<option value="">' + t('filter_crop') + ' —</option>' +
        crops.map(c => `<option value="${c.v}" ${c.v === cur ? 'selected' : ''}>${c.label}</option>`).join('');
    }

    function render() {
      const rows = filtered();
      const nl = currentLang();   // crop names follow the site language
      if (!rows.length) {
        tbody.innerHTML = '<tr><td colspan="11" class="muted">No matching rows</td></tr>';
        return;
      }
      tbody.innerHTML = rows.map(r => {
        let ch = '<span class="change-flat">—</span>';
        if (r.change7d !== null && r.change7d !== undefined && !isNaN(r.change7d)) {
          const cls = r.change7d > 0 ? 'change-up' : (r.change7d < 0 ? 'change-down' : 'change-flat');
          const arrow = r.change7d > 0 ? '▲' : (r.change7d < 0 ? '▼' : '');
          ch = `<span class="${cls}">${arrow} ${Math.abs(r.change7d)}%</span>`;
        }
        const nameMap = { ta: r.ta, hi: r.hi, en: r.en };
        const others = ['ta', 'hi', 'en']
          .filter(k => k !== nl && nameMap[k])
          .map(k => nameMap[k])
          .join(' · ');
        const waHref = buildWhatsAppShareUrl(r, nl, nameMap[nl] || r.en);
        return `<tr>
          <td class="small muted">${selectedDate}</td>
          <td><strong>${nameMap[nl] || r.en}</strong>${others ? `<br><span class="small muted">${others}</span>` : ''}</td>
          <td>${r.ta}</td>
          <td>${r.hi || '—'}</td>
          <td>${r.market}</td>
          <td class="num">${fmt(r.min)}</td>
          <td class="num"><strong>${fmt(r.modal)}</strong><br><span class="small muted">₹${(r.modal / 100).toFixed(2)}/kg</span></td>
          <td class="num">${fmt(r.max)}</td>
          <td class="num"><strong>₹${(r.modal / 100).toFixed(2)}</strong></td>
          <td class="num">${ch}</td>
          <td class="num"><a class="wa-share-btn" href="${waHref}" target="_blank" rel="noopener" title="${t('share_whatsapp')}" aria-label="${t('share_whatsapp')}">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M17.5 14.4c-.3-.1-1.7-.9-2-1-.3-.1-.5-.1-.7.1-.2.3-.8 1-.9 1.2-.2.2-.3.2-.6.1-.3-.1-1.2-.5-2.3-1.5-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.5.1-.1.2-.3.3-.5.1-.2 0-.4 0-.5C10.1 9 9.6 7.8 9.4 7.3c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.2.3-.9.9-.9 2.2s1 2.6 1.1 2.7c.1.2 2 3 4.8 4.2.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.5-.1 1.7-.7 2-1.4.2-.6.2-1.2.2-1.3-.1-.2-.3-.2-.6-.4z"/><path d="M12 2C6.5 2 2 6.5 2 12c0 1.8.5 3.6 1.4 5.1L2 22l5-1.3c1.4.8 3.1 1.2 4.9 1.2 5.5 0 10-4.5 10-10S17.5 2 12 2zm0 18.1c-1.6 0-3.1-.4-4.5-1.2l-.3-.2-3 .8.8-2.9-.2-.3C4 15 3.5 13.5 3.5 12c0-4.7 3.8-8.5 8.5-8.5s8.5 3.8 8.5 8.5-3.8 8.5-8.5 8.5z"/></svg>
          </a></td>
        </tr>`;
      }).join('');
    }

    function renderTrends() {
      const grid = document.getElementById('trendGrid');
      if (!grid) return;
      const featured = ['Tomato', 'Onion', 'Rice', 'Carrot', 'Brinjal', 'Groundnut'];
      grid.innerHTML = featured.map(cropEn => {
        const row = all.find(r => r.en === cropEn);
        if (!row) return '';
        const vals = buildTrendSeries(cropEn, selectedDate, 7);
        const min = Math.min(...vals), max = Math.max(...vals);
        const span = (max - min) || 1;
        const bars = vals.map((v, i) =>
          `<div class="trend-bar ${i === vals.length - 1 ? 'today' : ''}" style="height:${8 + ((v - min) / span) * 92}%"></div>`
        ).join('');
        const diff = (((vals[vals.length - 1] - vals[0]) / vals[0]) * 100).toFixed(1);
        const dir = diff > 0 ? '▲' : (diff < 0 ? '▼' : '·');
        const label = row[currentLang()] || row.en;
        return `<div class="trend-card">
          <h4>${label} <span class="muted small">· ${row.market}</span></h4>
          <div class="trend-bars">${bars}</div>
          <div class="trend-labels"><span>−6d</span><span>${selectedDate}</span></div>
          <div class="trend-now">${t('trend_now')} ₹${fmt(vals[vals.length - 1])}/qtl · ₹${(vals[vals.length - 1] / 100).toFixed(2)}/kg
            <span class="${diff > 0 ? 'change-up' : 'change-down'}">${dir} ${Math.abs(diff)}%</span> / 7d</div>
        </div>`;
      }).join('');
    }

    cropSel.addEventListener('change', render);
    mktSel.addEventListener('change', render);
    document.getElementById('resetFilters').addEventListener('click', () => {
      cropSel.value = ''; mktSel.value = ''; catFilter = 'all';
      selectedDate = todayStr();
      if (dateSel) dateSel.value = selectedDate;
      load();
    });
    document.addEventListener('agri:lang', () => { buildTabs(); populateCropOptions(); render(); renderTrends(); });
  }

  /* ================= AGRI & FOOD STOCKS (full page) ================= */
  function initStocksPage() {
    const grid = document.getElementById('stocksGrid');
    const asOfEl = document.getElementById('stocksAsOf');
    const detail = document.getElementById('stockDetail');
    if (!grid || typeof AGRI_STOCKS === 'undefined') return;

    let activeSymbol = null;

    function groupLabel(g) {
      const L = currentLang();
      return g[L] || g.en;
    }

    function allStocks() {
      return AGRI_STOCKS.groups.flatMap(g => g.stocks.map(s => Object.assign({ groupKey: g.key, groupLabel: groupLabel(g) }, s)));
    }

    function renderGrid() {
      if (asOfEl) asOfEl.textContent = t('stocks_as_of') + ' ' + AGRI_STOCKS.asOf;
      grid.innerHTML = AGRI_STOCKS.groups.map(g => {
        const cards = g.stocks.map(s => {
          const cls = s.change > 0 ? 'up' : (s.change < 0 ? 'down' : '');
          const arrow = s.change > 0 ? '▲' : (s.change < 0 ? '▼' : '·');
          const active = s.symbol === activeSymbol ? ' active' : '';
          return `<button type="button" class="stock-card${active}" data-symbol="${s.symbol}">
            <div class="stock-card-top">
              <span class="stock-name">${s.name}</span>
              <span class="stock-symbol">${s.symbol}</span>
            </div>
            <div class="stock-card-bottom">
              <span class="stock-price">₹${s.price.toLocaleString('en-IN')}</span>
              <span class="stock-change ${cls}">${arrow} ${Math.abs(s.change)}%</span>
            </div>
          </button>`;
        }).join('');
        return `<div class="stocks-group-t">${groupLabel(g)}</div><div class="stock-card-grid">${cards}</div>`;
      }).join('');
    }

    function buildSpark(symbol, basePrice) {
      // Deterministic 15-day series seeded from symbol so it's stable across renders.
      const h = agriHash(symbol);
      const days = 15;
      const vals = [];
      let v = basePrice * (1 - ((h % 7) - 3) / 100);
      for (let i = 0; i < days; i++) {
        const dayHash = agriHash(symbol + '|' + i);
        const drift = ((dayHash % 9) - 4) / 100;
        v = Math.max(1, v * (1 + drift));
        vals.push(Math.round(v * 100) / 100);
      }
      vals[vals.length - 1] = basePrice; // end exactly on today's real price
      return vals;
    }

    function financialRow(label, value) {
      if (!value) return '';
      return `<div class="fin-row"><span class="fin-label">${label}</span><span class="fin-value">${value}</span></div>`;
    }

    function renderDetail(s) {
      const cls = s.change > 0 ? 'up' : (s.change < 0 ? 'down' : '');
      const arrow = s.change > 0 ? '▲' : (s.change < 0 ? '▼' : '·');
      const vals = buildSpark(s.symbol, s.price);
      const min = Math.min(...vals), max = Math.max(...vals);
      const span = (max - min) || 1;
      const bars = vals.map((v, i) =>
        `<div class="trend-bar ${i === vals.length - 1 ? 'today' : ''}" style="height:${8 + ((v - min) / span) * 92}%" title="₹${v}"></div>`
      ).join('');

      const news = (s.news || []).map(n => `
        <div class="stock-news-item">
          <div class="stock-news-headline">${n.headline}</div>
          <div class="stock-news-detail small muted">${n.detail || ''}</div>
          <div class="stock-news-meta small">
            ${n.date ? `<span class="muted">${n.date}</span> · ` : ''}
            ${n.source ? `<a href="${n.source}" target="_blank" rel="noopener">${t('stock_source_link')}</a>` : ''}
          </div>
        </div>`).join('') || `<p class="small muted">${t('stock_no_news')}</p>`;

      detail.innerHTML = `
        <div class="stock-detail-head">
          <div>
            <h2>${s.name} <span class="stock-symbol">${s.symbol}</span></h2>
            <p class="small muted">${s.groupLabel}</p>
          </div>
          <button type="button" class="stock-detail-close" id="stockDetailClose" aria-label="Close">✕</button>
        </div>

        <div class="stock-detail-price">
          <span class="stock-detail-price-num">₹${s.price.toLocaleString('en-IN')}</span>
          <span class="stock-change ${cls}" style="font-size:1rem">${arrow} ${Math.abs(s.change)}%</span>
          <span class="small muted">${t('stocks_as_of')} ${AGRI_STOCKS.asOf}</span>
        </div>

        <h3 class="stock-detail-subhead">${t('stock_15d_trend')}</h3>
        <div class="trend-bars stock-detail-chart">${bars}</div>
        <div class="trend-labels"><span>−14d</span><span>${t('stock_today')}</span></div>

        <h3 class="stock-detail-subhead">${t('stock_financials')}</h3>
        <div class="fin-grid">
          ${financialRow(t('stock_52w_high'), s.high52w ? '₹' + s.high52w.toLocaleString('en-IN') : '')}
          ${financialRow(t('stock_52w_low'), s.low52w ? '₹' + s.low52w.toLocaleString('en-IN') : '')}
          ${financialRow(t('stock_mcap'), s.marketCap || '')}
          ${financialRow(t('stock_pe'), s.pe || '')}
        </div>

        <h3 class="stock-detail-subhead">${t('stock_news_title')}</h3>
        <div class="stock-news-list">${news}</div>

        <p class="small muted stocks-disclaimer">${t('stock_detail_disclaimer')}</p>
      `;
      document.getElementById('stockDetailClose').addEventListener('click', closeDetail);
      detail.hidden = false;
      detail.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    function openDetail(symbol) {
      const s = allStocks().find(x => x.symbol === symbol);
      if (!s) return;
      activeSymbol = symbol;
      renderGrid();
      renderDetail(s);
    }
    function closeDetail() {
      activeSymbol = null;
      detail.hidden = true;
      detail.innerHTML = '';
      renderGrid();
    }

    grid.addEventListener('click', ev => {
      const card = ev.target.closest('.stock-card');
      if (!card) return;
      if (card.dataset.symbol === activeSymbol) { closeDetail(); return; }
      openDetail(card.dataset.symbol);
    });

    renderGrid();
    document.addEventListener('agri:lang', () => {
      renderGrid();
      if (activeSymbol) {
        const s = allStocks().find(x => x.symbol === activeSymbol);
        if (s) renderDetail(s);
      }
    });
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
    function kbLabel(d) {
      const L = currentLang();
      if (L === 'ta') return d.en.ta_name;
      if (L === 'hi') return `${d.en.name} · ${d.en.ta_name}`;
      return d.en.name;
    }
    function renderQuick() {
      quick.innerHTML = ADVISORY_KB.slice(0, 8).map(d =>
        `<li><button type="button" data-id="${d.id}" data-crop="${d.crops[0]}">${kbLabel(d)}</button></li>`
      ).join('');
    }
    renderQuick();
    document.addEventListener('agri:lang', renderQuick);
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
