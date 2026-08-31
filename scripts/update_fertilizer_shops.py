"""Agridetails.com — daily Tamil Nadu Fertilizer Shop Details refresh.

Scrapes real dealer name, phone number and live fertilizer stock (tonnes)
per district/taluk from the Tamil Nadu Department of Agriculture's public
Fertilizer Stock Availability portal, and regenerates js/fertilizer-shops.js.

Source: https://tnagriculture.in/ARS/fert_stock_position/index/en
No address or pesticide data exists on any TN government source, so those
fields stay blank in the generated file — verified values live in the
hand-maintained js/fertilizer-shops-overrides.js instead, which this script
never touches.

Usage:  python scripts/update_fertilizer_shops.py
Requires: requests, beautifulsoup4, lxml  (pip install requests beautifulsoup4 lxml)

Designed to be safe to re-run: raw scrape progress is cached in
scripts/.cache/fert_raw.json so a network blip mid-run just resumes on the
next execution instead of re-fetching completed districts. Delete that cache
file to force a full re-scrape.
"""
import requests, re, json, time, sys, os, unicodedata, datetime

HERE = os.path.dirname(os.path.abspath(__file__))
REPO_ROOT = os.path.dirname(HERE)
CACHE_DIR = os.path.join(HERE, ".cache")
RAW_CACHE = os.path.join(CACHE_DIR, "fert_raw.json")
OUT_JS = os.path.join(REPO_ROOT, "js", "fertilizer-shops.js")

BASE = "https://tnagriculture.in/ARS/fert_stock_position"
HEADERS = {"User-Agent": "Mozilla/5.0"}

DISTRICTS = {
    3317: "Ariyalur", 3338: "Chengalpattu", 3333: "Coimbatore", 3318: "Cuddalore",
    3331: "Dharmapuri", 3313: "Dindigul", 3310: "Erode", 3337: "Kallakurichi",
    3303: "Kanchipuram", 3330: "Kanniyakumari", 3314: "Karur", 3332: "Krishnagiri",
    3324: "Madurai", 3340: "Mayiladuthurai", 3319: "Nagapattinam", 3309: "Namakkal",
    3316: "Perambalur", 3322: "Pudukkottai", 3327: "Ramanathapuram", 3335: "Ranipet",
    3308: "Salem", 3323: "Sivaganga", 3339: "Tenkasi", 3321: "Thanjavur",
    3311: "The Nilgiris", 3325: "Theni", 3301: "Thiruvallur", 3320: "Thiruvarur",
    3328: "Thoothukkudi", 3315: "Tiruchirappalli", 3329: "Tirunelveli",
    3336: "Tirupathur", 3334: "Tiruppur", 3306: "Tiruvannamalai", 3304: "Vellore",
    3307: "Villupuram", 3326: "Virudhunagar",
}

# Collapse the ~30 raw fertilizer product columns into readable categories.
PRODUCT_GROUPS = [
    ("Urea", ["Urea", "Imported Urea", "Neem Coated Urea(45 Kg)", "RCF Thal Urea"]),
    ("DAP", ["DAP", "Imported DAP", "Imported MAP"]),
    ("MOP (Potash)", ["MOP"]),
    ("Complex / NPK (10-26-26, 17-17-17, 20-20-0-13 etc.)", [
        "10-26-26", "12-32-16", "14-35-14", "15-15-15", "15-15-15-9",
        "16-20-0-13", "17-17-17", "19-19-19", "20-20-0-13", "24-24-0",
        "28-28-0", "Imported 10-26-26", "Imported 15-15-15",
        "Imported 16-16-16", "Imported 16-20-0-13", "Imported 20-20-0-13",
        "Zincated 20-20-0-13",
    ]),
    ("SSP (Single Super Phosphate)", [
        "SSP-Granular", "SSP-Powdered", "SSP-Zincated(Granular)", "SSP-Zincated(Powder)",
    ]),
    ("Ammonium Sulphate", ["Amm Sulphate"]),
    ("City Compost / Organic", ["City Compost"]),
]


def get(url, retries=3):
    for _ in range(retries):
        try:
            r = requests.get(url, headers=HEADERS, timeout=25)
            if r.status_code == 200:
                return r.text
        except Exception as e:
            print("retry", url, e, file=sys.stderr)
        time.sleep(1)
    return None


def parse_taluks(html):
    from bs4 import BeautifulSoup
    soup = BeautifulSoup(html, "lxml")
    taluks = []
    for a in soup.select("th a[href*='dealer_report']"):
        m = re.search(r"dealer_report/(\d+)", a["href"])
        if m:
            taluks.append((m.group(1), a.get_text(strip=True)))
    return taluks


def parse_headers(soup):
    thead = soup.find("thead")
    ths = thead.find_all("th") if thead else []
    return [th.get_text(strip=True) for th in ths[1:]]  # skip "Dealer Wise Stock" label col


def parse_dealers(html):
    from bs4 import BeautifulSoup
    soup = BeautifulSoup(html, "lxml")
    cols = parse_headers(soup)
    body = soup.find("tbody")
    dealers = []
    if not body:
        return dealers
    for tr in body.find_all("tr"):
        th = tr.find("th")
        if not th:
            continue
        phone_span = th.find("span")
        phone = phone_span.get_text(strip=True) if phone_span else ""
        th_copy = BeautifulSoup(str(th), "lxml")
        for sp in th_copy.find_all("span"):
            sp.decompose()
        name = th_copy.get_text(separator=" ", strip=True)
        stock, total = {}, 0.0
        for i, td in enumerate(tr.find_all("td")):
            txt = td.get_text(strip=True)
            if not txt:
                continue
            try:
                v = float(txt)
            except ValueError:
                continue
            if v > 0 and i < len(cols):
                stock[cols[i]] = v
                total += v
        if name:
            dealers.append({"name": name, "phone": phone, "stock": stock, "total": round(total, 2)})
    return dealers


def scrape():
    # The cache only exists to survive a network blip WITHIN a single run
    # (resume without re-fetching districts already done today). It must
    # NOT persist across calendar days, or every later run would just see
    # "already done" for every district and never pick up new stock figures.
    os.makedirs(CACHE_DIR, exist_ok=True)
    today = datetime.date.today().isoformat()
    result = {}
    if os.path.exists(RAW_CACHE):
        try:
            with open(RAW_CACHE, "r", encoding="utf-8") as f:
                cache_obj = json.load(f)
            cached_date = cache_obj.get("_scraped_date")
            if cached_date == today:
                result = cache_obj.get("data", {})
            else:
                print(f"cache is from {cached_date}, not today ({today}) \u2014 starting a fresh scrape")
        except Exception:
            result = {}

    def save_cache():
        with open(RAW_CACHE, "w", encoding="utf-8") as f:
            json.dump({"_scraped_date": today, "data": result}, f, ensure_ascii=False)

    idx_html = get(f"{BASE}/index/en")
    print("fetched index", len(idx_html) if idx_html else 0)

    for did, dname in DISTRICTS.items():
        if dname in result and result[dname]:
            continue
        try:
            sub_html = get(f"{BASE}/subdistrict_report/{did}/en")
            if not sub_html:
                print("FAILED subdistrict", did, dname, file=sys.stderr)
                continue
            taluks = parse_taluks(sub_html)
            all_dealers = []
            for tid, tname in taluks:
                try:
                    dh = get(f"{BASE}/dealer_report/{tid}/en")
                    if not dh:
                        continue
                    dealers = parse_dealers(dh)
                    for d in dealers:
                        d["taluk"] = tname
                    all_dealers.extend(dealers)
                except Exception as e:
                    print("ERR taluk", tname, e, file=sys.stderr)
                time.sleep(0.15)
            result[dname] = all_dealers
            print(dname, "dealers:", len(all_dealers))
        except Exception as e:
            print("ERR district", dname, e, file=sys.stderr)
        save_cache()

    return result


def slugify(s):
    s = unicodedata.normalize("NFKD", s).encode("ascii", "ignore").decode()
    s = re.sub(r"[^a-zA-Z0-9]+", "-", s).strip("-").lower()
    return s


def clean_phone(p):
    digits = re.sub(r"\D", "", p or "")
    return digits if len(digits) >= 10 else ""


def group_stock(stock):
    out = []
    for label, cols in PRODUCT_GROUPS:
        total = round(sum(stock.get(c, 0) for c in cols), 2)
        if total > 0:
            out.append({"name": label, "stockMT": total})
    return out


def transform(raw):
    districts_out = []
    total_shops = 0
    for dist_name in sorted(raw.keys()):
        clean = []
        for d in raw[dist_name]:
            phone = clean_phone(d.get("phone", ""))
            name = (d.get("name") or "").strip()
            if not name or not phone:
                continue
            groups = group_stock(d.get("stock", {}))
            if not groups:
                continue
            clean.append({
                "name": name, "phone": phone, "taluk": d.get("taluk", ""),
                "totalMT": d.get("total", 0), "products": groups,
            })
        clean.sort(key=lambda x: x["totalMT"], reverse=True)
        top = clean[:10]
        shops = [{
            "id": f"{slugify(dist_name)}-{i}",
            "name": d["name"], "phone": d["phone"], "taluk": d["taluk"],
            "address": "", "products": d["products"], "totalStockMT": d["totalMT"],
        } for i, d in enumerate(top, 1)]
        districts_out.append({"district": dist_name, "shops": shops})
        total_shops += len(shops)
    return districts_out, total_shops


def write_js(districts_out):
    payload = {
        "state": "Tamil Nadu",
        "asOf": datetime.date.today().strftime("%d %b %Y"),
        "source": "https://tnagriculture.in/ARS/fert_stock_position/index/en",
        "srcName": "Department of Agriculture, Tamil Nadu \u2014 Fertilizer Stock Availability Reports",
        "note": "Dealer name, phone number and fertilizer stock (in tonnes) are pulled from the government portal above. The portal does not publish shop addresses or pesticide stock, so those fields are blank until manually confirmed \u2014 call the dealer to confirm current stock before travelling.",
        "districts": districts_out,
    }
    js = (
        "/* Agridetails \u2014 Tamil Nadu Fertilizer Shop Details.\n"
        "   AUTO-GENERATED daily by scripts/update_fertilizer_shops.py from the\n"
        "   Tamil Nadu Department of Agriculture's Fertilizer Stock Availability\n"
        "   portal (tnagriculture.in/ARS/fert_stock_position). Real dealer names,\n"
        "   phone numbers and live fertilizer stock (in tonnes).\n"
        "   Addresses and pesticide/pest-control stock are NOT published by any TN\n"
        "   government source \u2014 those fields are intentionally left blank rather\n"
        "   than invented. Do not hand-edit this file; the daily job overwrites it.\n"
        "   To add a verified address or pesticide stock, edit\n"
        "   js/fertilizer-shops-overrides.js instead \u2014 it is never auto-overwritten. */\n"
        "const FERTILIZER_SHOPS = " + json.dumps(payload, ensure_ascii=False, indent=2) + ";\n"
    )
    with open(OUT_JS, "w", encoding="utf-8") as f:
        f.write(js)


def main():
    raw = scrape()
    districts_out, total_shops = transform(raw)
    write_js(districts_out)
    print(f"Wrote {OUT_JS}: {len(districts_out)} districts, {total_shops} shops")


if __name__ == "__main__":
    main()
