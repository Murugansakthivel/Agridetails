/* Agridetails — Farm Profile.
   Farmer-entered farm details, saved LOCALLY (localStorage only — there is
   no backend/account system yet, so this data never leaves the browser).
   This powers: default district for the Weather module, and (in future)
   personalized Crop Doctor / calendar recommendations. Deleting/clearing
   is fully in the farmer's control via the "Delete farm profile" button —
   matches the site's privacy stance (Section 52 of the product spec). */
(function () {
  'use strict';

  const KEY = 'agri_farm_profile_v1';

  function t(key) { return I18N[currentLang()][key] || I18N.en[key] || key; }

  function loadProfile() {
    try { return JSON.parse(localStorage.getItem(KEY) || 'null'); } catch (e) { return null; }
  }
  function saveProfile(p) { localStorage.setItem(KEY, JSON.stringify(p)); }
  function clearProfile() { localStorage.removeItem(KEY); }

  window.initFarmProfile = function initFarmProfile() {
    const form = document.getElementById('farmProfileForm');
    const districtSel = document.getElementById('farmDistrict');
    const cropsWrap = document.getElementById('farmCropsWrap');
    const savedView = document.getElementById('farmSavedView');
    const editBtn = document.getElementById('farmEditBtn');
    const deleteBtn = document.getElementById('farmDeleteBtn');
    const statusEl = document.getElementById('farmSaveStatus');
    if (!form || typeof TN_DISTRICTS === 'undefined') return;

    // district options
    districtSel.innerHTML = '<option value="">—</option>' + TN_DISTRICTS.map(d =>
      `<option value="${d.key}">${d.en} / ${d.ta}</option>`
    ).join('');

    // crop checkboxes from the existing catalog
    function allCropNames() {
      if (typeof CROP_CATALOG === 'undefined') return [];
      return [...(CROP_CATALOG.vegetables || []), ...(CROP_CATALOG.fruits || [])].map(c => c.en);
    }
    function renderCropOptions(selected) {
      const names = allCropNames();
      cropsWrap.innerHTML = names.map(name => {
        const checked = selected && selected.includes(name) ? 'checked' : '';
        const id = 'fc_' + name.replace(/[^a-z0-9]/gi, '_');
        return `<label class="farm-crop-chip"><input type="checkbox" id="${id}" value="${name}" ${checked}> ${name}</label>`;
      }).join('');
    }
    renderCropOptions([]);

    function selectedCrops() {
      return [...cropsWrap.querySelectorAll('input[type=checkbox]:checked')].map(c => c.value);
    }

    function fillForm(p) {
      form.farmName.value = p.farmName || '';
      districtSel.value = p.districtKey || '';
      form.farmAreaValue.value = p.areaValue || '';
      form.farmAreaUnit.value = p.areaUnit || 'acre';
      form.soilType.value = p.soilType || '';
      form.irrigationMethod.value = p.irrigationMethod || '';
      form.sowingDate.value = p.sowingDate || '';
      renderCropOptions(p.crops || []);
    }

    function showSaved(p) {
      form.hidden = true;
      savedView.hidden = false;
      const summaryContent = document.getElementById('farmSummaryContent');
      const d = TN_DISTRICTS.find(x => x.key === p.districtKey);
      const districtLabel = d ? `${d.en} / ${d.ta}` : (p.districtKey || '—');
      summaryContent.innerHTML = `
        <div class="card farm-summary-card">
          <h3>🚜 ${p.farmName || t('farm_untitled')}</h3>
          <div class="farm-summary-grid">
            <div><span class="farm-summary-label">${t('farm_district_label')}</span><span>${districtLabel}</span></div>
            <div><span class="farm-summary-label">${t('farm_area_label')}</span><span>${p.areaValue || '—'} ${p.areaUnit ? t('farm_unit_' + p.areaUnit) : ''}</span></div>
            <div><span class="farm-summary-label">${t('farm_soil_label')}</span><span>${p.soilType ? t('farm_soil_' + p.soilType) : '—'}</span></div>
            <div><span class="farm-summary-label">${t('farm_irrigation_label')}</span><span>${p.irrigationMethod ? t('farm_irr_' + p.irrigationMethod) : '—'}</span></div>
            <div><span class="farm-summary-label">${t('farm_sowing_label')}</span><span>${p.sowingDate || '—'}</span></div>
          </div>
          <div class="farm-summary-crops">
            <span class="farm-summary-label">${t('farm_crops_label')}</span>
            <div class="farm-crop-tags">${(p.crops || []).map(c => `<span class="farm-crop-tag">${c}</span>`).join('') || '<span class="muted small">' + t('farm_no_crops') + '</span>'}</div>
          </div>
          <p class="small muted" style="margin-top:1rem">🔒 ${t('farm_privacy_note')}</p>
        </div>`;
    }

    function showForm() {
      form.hidden = false;
      savedView.hidden = true;
    }

    form.addEventListener('submit', ev => {
      ev.preventDefault();
      const p = {
        farmName: form.farmName.value.trim(),
        districtKey: districtSel.value,
        areaValue: form.farmAreaValue.value,
        areaUnit: form.farmAreaUnit.value,
        soilType: form.soilType.value,
        irrigationMethod: form.irrigationMethod.value,
        sowingDate: form.sowingDate.value,
        crops: selectedCrops(),
        savedAt: new Date().toISOString()
      };
      saveProfile(p);
      statusEl.textContent = t('farm_saved_msg');
      statusEl.hidden = false;
      setTimeout(() => { statusEl.hidden = true; }, 2500);
      showSaved(p);
    });

    editBtn.addEventListener('click', () => {
      const p = loadProfile();
      if (p) fillForm(p);
      showForm();
    });

    deleteBtn.addEventListener('click', () => {
      if (!confirm(t('farm_delete_confirm'))) return;
      clearProfile();
      showForm();
      form.reset();
      renderCropOptions([]);
    });

    // initial render
    const existing = loadProfile();
    if (existing) { showSaved(existing); } else { showForm(); }

    document.addEventListener('agri:lang', () => {
      const p = loadProfile();
      districtSel.innerHTML = '<option value="">—</option>' + TN_DISTRICTS.map(d => `<option value="${d.key}">${d.en} / ${d.ta}</option>`).join('');
      if (p) { districtSel.value = p.districtKey || ''; showSaved(p); }
    });
  };
})();
