/* Agridetails.com configuration.
   To enable LIVE price data:
   1. Register free at https://data.gov.in (user registration, API key is free)
   2. Subscribe to the resource "Current Daily Price of Various Commodities from Various Markets (Mandi)"
      (resource id: 9ef84268-d588-465a-a308-a864a43d0070)
   3. Paste your key below. Until then the site runs on built-in demo data. */
window.AGRI_CONFIG = {
  // e.g. '57b8413bdcf4...'. Leave '' to use demo data.
  DATA_GOV_API_KEY: '',

  // data.gov.in AGMARKNET current-daily-price resource
  API_URL: 'https://api.data.gov.in/resource/9ef84268-d588-465a-a308-a864a43d0070',

  // Tamil Nadu district markets to show when live mode is on
  TN_MARKETS: ['Chennai', 'Coimbatore', 'Madurai', 'Salem', 'Trichy', 'Vellore'],

  // How many records to pull per request (max 1000 on data.gov.in)
  LIMIT: 500
};
