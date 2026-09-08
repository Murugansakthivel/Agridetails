/* Agridetails — Weather module.
   LIVE data source: Open-Meteo (https://open-meteo.com) — free, no API key,
   no attribution restriction for non-commercial use. This is a genuine
   real-time API call, not mock/demo data — if the network call fails we
   fall back to the last successfully cached reading (localStorage) and
   clearly label it as cached/stale, per the site's "no fabricated live
   data" rule. Location: TN district picker, GPS ("use my location"), or
   the farm's saved location from Farm Profile (js/farm-profile.js). */
(function () {
  'use strict';

  const CACHE_KEY = 'agri_weather_cache_v1';
  const LOC_KEY = 'agri_weather_loc_v1';

  function t(key) { return I18N[currentLang()][key] || I18N.en[key] || key; }

  // WMO weather codes -> icon + i18n key (subset covering codes Open-Meteo returns)
  const WMO = {
    0: { icon: '☀️', key: 'wx_clear' },
    1: { icon: '🌤️', key: 'wx_mainly_clear' },
    2: { icon: '⛅', key: 'wx_partly_cloudy' },
    3: { icon: '☁️', key: 'wx_overcast' },
    45: { icon: '🌫️', key: 'wx_fog' }, 48: { icon: '🌫️', key: 'wx_fog' },
    51: { icon: '🌦️', key: 'wx_drizzle' }, 53: { icon: '🌦️', key: 'wx_drizzle' }, 55: { icon: '🌦️', key: 'wx_drizzle' },
    61: { icon: '🌧️', key: 'wx_rain_light' }, 63: { icon: '🌧️', key: 'wx_rain' }, 65: { icon: '🌧️', key: 'wx_rain_heavy' },
    80: { icon: '🌦️', key: 'wx_showers' }, 81: { icon: '🌦️', key: 'wx_showers' }, 82: { icon: '⛈️', key: 'wx_showers_heavy' },
    95: { icon: '⛈️', key: 'wx_thunderstorm' }, 96: { icon: '⛈️', key: 'wx_thunderstorm' }, 99: { icon: '⛈️', key: 'wx_thunderstorm' }
  };
  function wmo(code) { return WMO[code] || { icon: '🌡️', key: 'wx_unknown' }; }

  window.initWeather = function initWeather() {
    const districtSel = document.getElementById('wxDistrict');
    const gpsBtn = document.getElementById('wxGpsBtn');
    const asOfEl = document.getElementById('wxAsOf');
    const currentEl = document.getElementById('wxCurrent');
    const forecastEl = document.getElementById('wxForecast');
    const alertsEl = document.getElementById('wxAlerts');
    const statusEl = document.getElementById('wxStatus');
    const refreshBtn = document.getElementById('wxRefreshBtn');
    if (!districtSel || typeof TN_DISTRICTS === 'undefined') return;

    districtSel.innerHTML = TN_DISTRICTS.map(d =>
      `<option value="${d.key}">${d.en} / ${d.ta}</option>`
    ).join('');

    function savedLoc() {
      try { return JSON.parse(localStorage.getItem(LOC_KEY) || 'null'); } catch (e) { return null; }
    }
    function saveLoc(loc) { localStorage.setItem(LOC_KEY, JSON.stringify(loc)); }

    function farmDistrictKey() {
      try {
        const f = JSON.parse(localStorage.getItem('agri_farm_profile_v1') || 'null');
        return f && f.districtKey ? f.districtKey : null;
      } catch (e) { return null; }
    }

    function initialLocation() {
      const saved = savedLoc();
      if (saved) return saved;
      const farmDist = farmDistrictKey();
      if (farmDist) {
        const d = TN_DISTRICTS.find(x => x.key === farmDist);
        if (d) return { type: 'district', key: d.key, lat: d.lat, lon: d.lon, label: d.en };
      }
      const d0 = TN_DISTRICTS.find(x => x.key === 'Chennai') || TN_DISTRICTS[0];
      return { type: 'district', key: d0.key, lat: d0.lat, lon: d0.lon, label: d0.en };
    }

    let loc = initialLocation();
    if (loc.type === 'district') districtSel.value = loc.key;

    districtSel.addEventListener('change', () => {
      const d = TN_DISTRICTS.find(x => x.key === districtSel.value);
      if (!d) return;
      loc = { type: 'district', key: d.key, lat: d.lat, lon: d.lon, label: d.en };
      saveLoc(loc);
      load();
    });

    if (gpsBtn) {
      gpsBtn.addEventListener('click', () => {
        if (!navigator.geolocation) { alert(t('wx_gps_unsupported')); return; }
        gpsBtn.disabled = true; gpsBtn.textContent = t('wx_locating');
        navigator.geolocation.getCurrentPosition(
          pos => {
            loc = { type: 'gps', lat: pos.coords.latitude, lon: pos.coords.longitude, label: t('wx_my_location') };
            saveLoc(loc);
            gpsBtn.disabled = false; gpsBtn.textContent = t('wx_use_gps');
            load();
          },
          () => {
            gpsBtn.disabled = false; gpsBtn.textContent = t('wx_use_gps');
            alert(t('wx_gps_denied'));
          },
          { timeout: 8000 }
        );
      });
    }

    if (refreshBtn) refreshBtn.addEventListener('click', () => load(true));

    function cacheFor(loc) {
      try {
        const all = JSON.parse(localStorage.getItem(CACHE_KEY) || '{}');
        return all[cacheKey(loc)] || null;
      } catch (e) { return null; }
    }
    function cacheKey(loc) { return loc.lat.toFixed(2) + ',' + loc.lon.toFixed(2); }
    function saveCache(loc, data) {
      try {
        const all = JSON.parse(localStorage.getItem(CACHE_KEY) || '{}');
        all[cacheKey(loc)] = { data, syncedAt: new Date().toISOString() };
        localStorage.setItem(CACHE_KEY, JSON.stringify(all));
      } catch (e) { /* storage full/unavailable — non-fatal */ }
    }

    async function load(forceStatus) {
      statusEl.textContent = t('wx_loading');
      statusEl.className = 'wx-status';
      const url = `https://api.open-meteo.com/v1/forecast?latitude=${loc.lat}&longitude=${loc.lon}` +
        `&current=temperature_2m,relative_humidity_2m,precipitation,weather_code,wind_speed_10m,uv_index` +
        `&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max,wind_speed_10m_max,uv_index_max` +
        `&timezone=auto&forecast_days=7`;
      try {
        const ctrl = new AbortController();
        const to = setTimeout(() => ctrl.abort(), 10000);
        const res = await fetch(url, { signal: ctrl.signal });
        clearTimeout(to);
        if (!res.ok) throw new Error('HTTP ' + res.status);
        const data = await res.json();
        saveCache(loc, data);
        render(data, false, new Date());
      } catch (err) {
        const cached = cacheFor(loc);
        if (cached) {
          render(cached.data, true, new Date(cached.syncedAt));
        } else {
          currentEl.innerHTML = '';
          forecastEl.innerHTML = '';
          alertsEl.innerHTML = '';
          statusEl.textContent = t('wx_error_no_cache');
          statusEl.className = 'wx-status error';
        }
      }
    }

    function render(data, stale, syncedAt) {
      const lang = currentLang();
      const cur = data.current;
      const w = wmo(cur.weather_code);

      asOfEl.textContent = `${t('wx_source_updated')}: ${new Date(cur.time).toLocaleString('en-IN')} · ${t('wx_synced')}: ${syncedAt.toLocaleString('en-IN')}`;
      statusEl.textContent = stale ? t('wx_stale_warning') : t('wx_live_badge');
      statusEl.className = 'wx-status' + (stale ? ' stale' : ' live');

      currentEl.innerHTML = `
        <div class="wx-current-main">
          <span class="wx-current-icon">${w.icon}</span>
          <div>
            <div class="wx-current-temp">${Math.round(cur.temperature_2m)}°C</div>
            <div class="wx-current-desc">${t(w.key)}</div>
            <div class="small muted">${loc.label}</div>
          </div>
        </div>
        <div class="wx-current-grid">
          <div class="wx-stat"><span class="wx-stat-label">${t('wx_humidity')}</span><span class="wx-stat-val">${Math.round(cur.relative_humidity_2m)}%</span></div>
          <div class="wx-stat"><span class="wx-stat-label">${t('wx_wind')}</span><span class="wx-stat-val">${Math.round(cur.wind_speed_10m)} km/h</span></div>
          <div class="wx-stat"><span class="wx-stat-label">${t('wx_precip')}</span><span class="wx-stat-val">${cur.precipitation} mm</span></div>
          <div class="wx-stat"><span class="wx-stat-label">${t('wx_uv')}</span><span class="wx-stat-val">${cur.uv_index != null ? cur.uv_index.toFixed(1) : '—'}</span></div>
        </div>`;

      const days = data.daily.time.map((dstr, i) => ({
        date: dstr,
        code: data.daily.weather_code[i],
        max: data.daily.temperature_2m_max[i],
        min: data.daily.temperature_2m_min[i],
        rainProb: data.daily.precipitation_probability_max[i],
        wind: data.daily.wind_speed_10m_max[i],
        uv: data.daily.uv_index_max[i]
      }));

      forecastEl.innerHTML = days.map((d, i) => {
        const dw = wmo(d.code);
        const dayLabel = i === 0 ? t('wx_today') : new Date(d.date).toLocaleDateString(lang === 'ta' ? 'ta-IN' : lang === 'hi' ? 'hi-IN' : 'en-IN', { weekday: 'short' });
        return `<div class="wx-day-card">
          <div class="wx-day-label">${dayLabel}</div>
          <div class="wx-day-icon">${dw.icon}</div>
          <div class="wx-day-temps"><b>${Math.round(d.max)}°</b> / ${Math.round(d.min)}°</div>
          <div class="wx-day-rain">💧 ${d.rainProb}%</div>
        </div>`;
      }).join('');

      renderAlerts(cur, days);
    }

    function renderAlerts(cur, days) {
      const alerts = [];
      const today = days[0], tomorrow = days[1];

      // Spray suitability: wind or rain risk
      if (cur.wind_speed_10m >= 20) {
        alerts.push({ level: 'warn', icon: '🌬️', textKey: 'wx_alert_wind_spray' });
      } else if (today.rainProb >= 60 || (tomorrow && tomorrow.rainProb >= 60)) {
        alerts.push({ level: 'warn', icon: '🌧️', textKey: 'wx_alert_rain_spray' });
      } else {
        alerts.push({ level: 'ok', icon: '✅', textKey: 'wx_alert_spray_ok' });
      }

      // Irrigation guidance
      if (today.rainProb >= 60) {
        alerts.push({ level: 'info', icon: '💧', textKey: 'wx_alert_skip_irrigation' });
      } else if (cur.temperature_2m >= 36 && cur.relative_humidity_2m < 40) {
        alerts.push({ level: 'warn', icon: '🔥', textKey: 'wx_alert_heat_irrigate' });
      }

      // Fungal risk from high humidity
      if (cur.relative_humidity_2m >= 85) {
        alerts.push({ level: 'warn', icon: '🍄', textKey: 'wx_alert_fungal_risk' });
      }

      // UV
      if (cur.uv_index != null && cur.uv_index >= 8) {
        alerts.push({ level: 'warn', icon: '☀️', textKey: 'wx_alert_high_uv' });
      }

      alertsEl.innerHTML = alerts.map(a =>
        `<div class="wx-alert ${a.level}"><span>${a.icon}</span><span>${t(a.textKey)}</span></div>`
      ).join('');
    }

    load();
    document.addEventListener('agri:lang', () => {
      districtSel.innerHTML = TN_DISTRICTS.map(d => `<option value="${d.key}">${d.en} / ${d.ta}</option>`).join('');
      if (loc.type === 'district') districtSel.value = loc.key;
      const cached = cacheFor(loc);
      if (cached) render(cached.data, false, new Date(cached.syncedAt));
    });
  };
})();
