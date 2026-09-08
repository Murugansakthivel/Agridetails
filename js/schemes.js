/* Agridetails — Government Schemes page logic. */
(function () {
  'use strict';

  function t(key) { return I18N[currentLang()][key] || I18N.en[key] || key; }

  window.initSchemes = function initSchemes() {
    const list = document.getElementById('schemesList');
    const levelFilter = document.getElementById('schemeLevelFilter');
    const asOfEl = document.getElementById('schemesAsOf');
    if (!list || typeof GOVT_SCHEMES === 'undefined') return;

    if (asOfEl) asOfEl.textContent = t('schemes_reviewed_label') + ' ' + GOVT_SCHEMES.lastReviewed;

    function pick(field, lang) { return (field && (field[lang] || field.en)) || ''; }

    function levelLabel(level) {
      return level === 'central' ? t('schemes_level_central') : t('schemes_level_state');
    }

    function render() {
      const lang = currentLang();
      const filterVal = levelFilter.value;
      const items = GOVT_SCHEMES.items.filter(s => !filterVal || s.level === filterVal);

      list.innerHTML = items.map(s => `
        <div class="card scheme-card">
          <div class="scheme-card-top">
            <span class="scheme-level-chip ${s.level}">${levelLabel(s.level)}</span>
            <span class="small muted">${t('schemes_verified_label')} ${s.lastVerified}</span>
          </div>
          <h3>${pick(s.name, lang)}</h3>
          <div class="scheme-section">
            <h4>${t('schemes_benefit_t')}</h4>
            <p>${pick(s.benefit, lang)}</p>
          </div>
          <div class="scheme-section">
            <h4>${t('schemes_eligibility_t')}</h4>
            <p>${pick(s.eligibility, lang)}</p>
          </div>
          <div class="scheme-section">
            <h4>${t('schemes_documents_t')}</h4>
            <p>${pick(s.documents, lang)}</p>
          </div>
          <div class="scheme-section">
            <h4>${t('schemes_how_t')}</h4>
            <p>${pick(s.howToApply, lang)}</p>
          </div>
          <a href="${s.source}" target="_blank" rel="noopener" class="scheme-source-link">${t('schemes_source_link')} — ${s.srcName} →</a>
        </div>`).join('');
    }

    levelFilter.addEventListener('change', render);
    render();
    document.addEventListener('agri:lang', () => {
      if (asOfEl) asOfEl.textContent = t('schemes_reviewed_label') + ' ' + GOVT_SCHEMES.lastReviewed;
      render();
    });
  };
})();
