/* Agridetails — Home "Today" Dashboard.
   Stitches together data from modules that already exist and already
   fetch/store real data (Weather's Open-Meteo cache, Farm Calendar's
   localStorage tasks, Government Schemes' sourced list) into one
   personalized daily briefing on the home page, per product spec
   Section 5.1 (Home Dashboard) / Section 21 (Daily Farm Assistant).
   This does NOT call any new data source and does NOT use AI — it is a
   client-side aggregation of already-live/local data the farmer has
   already provided or that Weather has already fetched. If no Farm
   Profile is saved yet, it shows a simple setup prompt instead of
   fabricating anything. */
(function () {
  'use strict';

  function t(key) { return I18N[currentLang()][key] || I18N.en[key] || key; }

  function loadProfile() {
    try { return JSON.parse(localStorage.getItem('agri_farm_profile_v1') || 'null'); } catch (e) { return null; }
  }
  function loadTasks() {
    try { return JSON.parse(localStorage.getItem('agri_farm_calendar_v1') || '[]'); } catch (e) { return []; }
  }
  function loadWeatherCache(lat, lon) {
    try {
      const all = JSON.parse(localStorage.getItem('agri_weather_cache_v1') || '{}');
      return all[lat.toFixed(2) + ',' + lon.toFixed(2)] || null;
    } catch (e) { return null; }
  }

  window.initHomeDashboard = function initHomeDashboard() {
    const el = document.getElementById('todayDashboard');
    if (!el) return;

    function render() {
      const profile = loadProfile();

      if (!profile) {
        el.innerHTML = `
          <div class="card today-setup-card">
            <h3>👋 ${t('today_welcome_t')}</h3>
            <p class="muted">${t('today_setup_sub')}</p>
            <a href="farm.html" class="btn btn-primary btn-sm">🚜 ${t('today_setup_btn')}</a>
          </div>`;
        return;
      }

      const district = (typeof TN_DISTRICTS !== 'undefined') ? TN_DISTRICTS.find(d => d.key === profile.districtKey) : null;
      const tasks = loadTasks();
      const today = new Date().toISOString().slice(0, 10);
      const todayTasks = tasks.filter(x => !x.done && x.date === today);
      const overdueTasks = tasks.filter(x => !x.done && x.date < today);
      const upcomingCount = tasks.filter(x => !x.done && x.date > today).length;

      let weatherHtml = `<p class="small muted">${t('today_weather_unavailable')}</p>`;
      if (district) {
        const cached = loadWeatherCache(district.lat, district.lon);
        if (cached && cached.data && cached.data.current) {
          const cur = cached.data.current;
          weatherHtml = `<div class="today-weather-mini">
            <span class="today-weather-temp">${Math.round(cur.temperature_2m)}°C</span>
            <span class="small muted">${district.en}</span>
          </div>`;
        }
      }

      const taskListHtml = todayTasks.length
        ? todayTasks.map(x => `<li>${x.icon || '📌'} ${x.title || taskTypeLabelFallback(x.type)}${x.crop ? ' — ' + x.crop : ''}</li>`).join('')
        : `<li class="muted">${t('today_no_tasks')}</li>`;

      function taskTypeLabelFallback(type) { return t('cal_type_' + type) || type; }

      el.innerHTML = `
        <div class="card today-card">
          <h3>👋 ${profile.farmName ? profile.farmName : t('today_welcome_t')}</h3>
          <div class="today-grid">
            <div class="today-block">
              <h4>⛅ ${t('today_weather_t')}</h4>
              ${weatherHtml}
              <a href="weather.html" class="link-arrow small">${t('today_view_weather')} →</a>
            </div>
            <div class="today-block">
              <h4>🗓️ ${t('today_tasks_t')}</h4>
              <ul class="today-task-list">${taskListHtml}</ul>
              ${overdueTasks.length ? `<p class="small" style="color:#c0392b">⚠️ ${overdueTasks.length} ${t('today_overdue_suffix')}</p>` : ''}
              <a href="calendar.html" class="link-arrow small">${t('today_view_calendar')} →</a>
            </div>
            <div class="today-block">
              <h4>🌿 ${t('today_doctor_t')}</h4>
              <p class="small muted">${t('today_doctor_sub')}</p>
              <a href="advisory.html" class="btn btn-sm btn-primary">${t('today_doctor_btn')}</a>
            </div>
          </div>
        </div>`;
    }

    render();
    document.addEventListener('agri:lang', render);
    // re-render if the farm profile/calendar/weather cache changes in another tab or after navigation back
    window.addEventListener('storage', render);
    window.addEventListener('pageshow', render);
  };
})();
