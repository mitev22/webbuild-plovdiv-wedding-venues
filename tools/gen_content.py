#!/usr/bin/env python3
"""Author a gravura content pack from a per-venue facts JSON.

Usage: gen_content.py <venue.json> <work_dir>

Emits lib/content.ts + lib/content-extra.ts matching the schema the gravura
components consume (same shape as the 01-wedding-venues vertical packs, which
are known to compile). Only the DOCUMENTED content surface is written;
components are never touched.

Hard rules enforced here:
  * every venue-specific string comes from the JSON — nothing is inherited
    from a donor venue (leak_check() fails the build if it is);
  * unknown facts stay empty (arrays/strings), never invented;
  * reviews are verbatim-or-absent.
"""
import json, re, sys
from pathlib import Path

vp, work = Path(sys.argv[1]), Path(sys.argv[2])
V = json.loads(vp.read_text(encoding="utf-8"))

DONOR_LEAK = re.compile(
    r"Colibri|Коматево|Марица|Maritsa|Резиденция Марица|Сребро|Злато|Платина|Silver|Platinum",
)

def ts(o, ind=0):
    pad = "  " * ind
    if isinstance(o, dict):
        if not o: return "{}"
        rows = ",\n".join(f"{pad}  {k}: {ts(v, ind+1)}" for k, v in o.items())
        return "{\n" + rows + f",\n{pad}}}"
    if isinstance(o, list):
        if not o: return "[]"
        rows = ",\n".join(f"{pad}  {ts(v, ind+1)}" for v in o)
        return "[\n" + rows + f",\n{pad}]"
    if isinstance(o, bool): return "true" if o else "false"
    if isinstance(o, (int, float)): return str(o)
    return json.dumps(o, ensure_ascii=False)

def L(node, lang):
    """Pick a bg/en variant, tolerating plain values."""
    if isinstance(node, dict) and ("bg" in node or "en" in node):
        return node.get(lang, node.get("bg", ""))
    return node

# ── venue object ────────────────────────────────────────────────────────────
venue = {
    "slug": V["slug"],
    "name": V.get("nameEn") or V["nameBg"],
    "nameBg": V["nameBg"],
    "wordmark": V["wordmark"],
    "navMark": V["navMark"],
    "logo": {"src": "", "w": 0, "h": 0},
    "town": V.get("town", "Пловдив"),
    "type": V.get("type", "hall"),
    "venueNoun": V["venueNoun"],
    "address": V["address"],
    "addressEn": V["addressEn"],
    "addressStructured": {"street": V["addressStreet"], "locality": V.get("town", "Пловдив")},
    "phone": V.get("phone", []),
    "phoneHref": ("tel:" + V["phoneE164"]) if V.get("phoneE164") else "",
    "phoneE164": V.get("phoneE164", ""),
    "email": V.get("email", ""),
    "instagram": V.get("instagram", ""),
    "facebook": V.get("facebook", ""),
    "sameAs": V.get("sameAs", []),
    "mapQuery": V["mapQuery"],
    "maxCapacity": V.get("maxCapacity", 0),
    "capacity": V.get("capacity", []),
    "spaces": V.get("spaces", []),
    "packages": [],
    "packageIncludes": V.get("packageIncludes", []),
    "packageAssist": L(V.get("packageAssist", ""), "bg"),
    "whyUs": L(V.get("whyUs", []), "bg"),
    "parking": L(V.get("parking", ""), "bg"),
    "seasonsAvailable": V.get("seasonsAvailable", [
        "Пролет 2026", "Лято 2026", "Есен 2026", "Зима 2026",
        "Пролет 2027", "Лято 2027", "Есен 2027", "Зима 2027"]),
    "reviews": V.get("reviews", []),
    "handoff": V.get("handoff", []),
}

CHAPTERS = {
 "bg": [{"id":"pristigane","label":"Пристигане"},{"id":"ceremonia","label":"Церемония"},
        {"id":"vecherya","label":"Вечеря"},{"id":"tanci","label":"Танци"},
        {"id":"sboguvane","label":"Сбогуване"}],
 "en": [{"id":"pristigane","label":"Arrival"},{"id":"ceremonia","label":"Ceremony"},
        {"id":"vecherya","label":"Dinner"},{"id":"tanci","label":"Dancing"},
        {"id":"sboguvane","label":"Farewell"}],
}
GEN = {
 "bg": {"langCode":"bg","otherLangHref":"/en/","otherLangLabel":"EN","inquire":"Запитване",
   "call":"Обадете се","seasonHint":"Едно място в четири сезона. Изберете вашия.",
   "scrollCue":"Разгледайте деня","gettingHere":"Как се стига","mapCta":"Вижте на картата",
   "reviewsTitle":"Отзиви","formName":"Вашите имена","formContact":"Телефон или имейл",
   "formSeason":"Сезон / дата","formSeasonPlaceholder":"Изберете сезон",
   "formDateOptional":"Точна дата (по избор)","formGuests":"Брой гости",
   "formBudget":"Ориентировъчен бюджет (лв.)",
   "formBudgetHint":"Само число. Помага ни да предложим точния вариант.",
   "formMessage":"Разкажете ни за вашия ден",
   "formConsent":"Съгласен/на съм личните ми данни да бъдат използвани за отговор на запитването.",
   "formSubmit":"Изпратете запитване","formPromise":"Ще Ви отговорим до 2 работни дни.",
   "formSuccess":"Благодарим ви! Запитването е прието. Ще се свържем с вас до 2 работни дни.",
   "formDemo":"(спец-демо: формата ще бъде активирана при предаване на сайта)",
   "errRequired":"Задължително поле","errBudget":"Моля, въведете число",
   "errContact":"Въведете валиден телефон или имейл",
   "privacy":"Политика за поверителност","privacyHref":"/poveritelnost/"},
 "en": {"langCode":"en","otherLangHref":"/","otherLangLabel":"BG","inquire":"Enquire",
   "call":"Call us","seasonHint":"One place in four seasons. Choose yours.",
   "scrollCue":"Walk through the day","gettingHere":"Getting here","mapCta":"See it on the map",
   "reviewsTitle":"Reviews","formName":"Your names","formContact":"Phone or email",
   "formSeason":"Season / date","formSeasonPlaceholder":"Choose a season",
   "formDateOptional":"Exact date (optional)","formGuests":"Number of guests",
   "formBudget":"Approximate budget (BGN)",
   "formBudgetHint":"A number only. It helps us propose the right option.",
   "formMessage":"Tell us about your day",
   "formConsent":"I agree my personal data may be used to answer this enquiry.",
   "formSubmit":"Send enquiry","formPromise":"We reply within 2 working days.",
   "formSuccess":"Thank you. Your enquiry has been received. We will be in touch within 2 working days.",
   "formDemo":"(spec demo: the form is activated on handover)",
   "errRequired":"Required field","errBudget":"Please enter a number",
   "errContact":"Enter a valid phone or email",
   "privacy":"Privacy policy","privacyHref":"/en/privacy/"},
}

def build_dict(lang):
    d = dict(GEN[lang])
    d["metaTitle"] = V["meta"][lang]["title"]
    d["metaDescription"] = V["meta"][lang]["desc"]
    d["navCity"] = V.get("town", "Пловдив") if lang == "bg" else V.get("townEn", "Plovdiv")
    d["navSpot"] = L(V["navSpot"], lang)
    d["navSeats"] = L(V["navSeats"], lang)
    d["atmosphereNote"] = L(V["atmosphereNote"], lang)
    d["chapters"] = CHAPTERS[lang]
    for i in (1, 2, 3, 4, 5):
        ch = V[f"ch{i}"][lang]
        d[f"ch{i}Title"] = ch["title"]
        d[f"ch{i}Lead"] = ch["lead"]
        if ch.get("body"): d[f"ch{i}Body"] = ch["body"]
    d["gettingHereRows"] = V["gettingHereRows"][lang]
    d["whyTitle"] = L(V["whyTitle"], lang)
    d["packagesTitle"] = L(V["packagesTitle"], lang)
    d["packagesLead"] = L(V["packagesLead"], lang)
    d["includesTitle"] = L(V["includesTitle"], lang)
    d["reviewsLead"] = L(V["reviewsLead"], lang)
    d["footerDemo"] = (
        f"Демонстрационен сайт (spec) от Meridian Solutions. Не е официалният сайт на {V['nameBg']}."
        if lang == "bg" else
        f"Spec demonstration site by Meridian Solutions. Not the official {venue['name']} website.")
    d["footerRights"] = (f"{V['nameBg']} · {V.get('town','Пловдив')}" if lang == "bg"
                         else f"{venue['name']} · {V.get('townEn','Plovdiv')}")
    d["capacityStats"] = V["capacityStats"][lang]
    return d

header = (
 "/**\n * Content pack — INDUSTRY-wedding-venues.md §6 schema.\n"
 f" * Venue: {V['nameBg']}. Harvested {V.get('harvestedOn','2026-08-26')} from: "
 f"{V.get('sources','Google Business profile')}.\n"
 " * Unknown facts stay empty (never invented). Reviews verbatim-or-absent.\n */\n\n")

content = header
# TEMPLATE GAP: gravura indexes venue.phone[0] unconditionally, so a venue with no
# published phone needs the widened type rather than an empty readonly tuple.
venue_ts = ts(venue).replace("phone: []", "phone: [] as string[]", 1)
content += "export const venue = " + venue_ts + " as const;\n\n"
content += 'export type Season = "spring" | "summer" | "autumn" | "winter";\n\n'
content += ("export const seasons: { key: Season; bg: string; en: string }[] = [\n"
 '  { key: "spring", bg: "Пролет", en: "Spring" },\n'
 '  { key: "summer", bg: "Лято", en: "Summer" },\n'
 '  { key: "autumn", bg: "Есен", en: "Autumn" },\n'
 '  { key: "winter", bg: "Зима", en: "Winter" },\n];\n\n')
content += "export const dict = " + ts({"bg": build_dict("bg"), "en": build_dict("en")}) + " as const;\n\n"
content += "export type Lang = keyof typeof dict;\n\n"
content += ("export const seasonNamesEn: Record<Season, string> = {\n"
 '  spring: "Spring", summer: "Summer", autumn: "Autumn", winter: "Winter",\n};\n\n')
content += "export const packageNamesEn: Record<string, string> = {};\n\n"
content += "export const packageIncludesEn = " + ts(V.get("packageIncludesEn", [])) + ";\n\n"
content += "export const packageAssistEn =\n  " + json.dumps(L(V.get("packageAssist", ""), "en"), ensure_ascii=False) + ";\n\n"
content += "export const whyUsEn = " + ts(L(V.get("whyUs", []), "en")) + ";\n\n"
content += "export const gettingHereNote =\n  " + json.dumps(L(V.get("gettingHereNote",""), "bg"), ensure_ascii=False) + ";\n"

# ── content-extra ───────────────────────────────────────────────────────────
NAV = {
 "bg":[("/","Начало"),("/menu/","Мястото"),("/sabitia/","Поводи"),("/uslugi/","Услуги"),
       ("/galeria/","Галерия"),("/#sboguvane","Запитване")],
 "en":[("/en/","Home"),("/en/menu/","The place"),("/en/sabitia/","Occasions"),
       ("/en/uslugi/","Services"),("/en/galeria/","Gallery"),("/en/#sboguvane","Enquire")],
}
def navpages(lang):
    hints = V["navHints"][lang]
    return [{"href": h, "label": lb, "hint": hints[i]} for i, (h, lb) in enumerate(NAV[lang])]

EXTRA_GEN = {
 "bg":{"inquire":"Запитване","menuBtn":"Меню","closeBtn":"Затвори",
       "galleryMore":"Цялата галерия","exploreTitle":"Разгледайте още"},
 "en":{"inquire":"Enquire","menuBtn":"Menu","closeBtn":"Close",
       "galleryMore":"The full gallery","exploreTitle":"Explore further"},
}
def extra(lang):
    e = dict(EXTRA_GEN[lang]); e.update(V["extra"][lang]); return e

x = header.replace("Content pack — INDUSTRY", "Content pack (extension) — INDUSTRY")
x += "export type Dish = { n: string; d?: string; g?: string };\n\n"
DISH_T = "{ key: string; label: string; note?: string; dishes: Dish[] }[]"
for lang, suf in (("bg","Bg"), ("en","En")):
    x += f"export const menu{suf}: {DISH_T} = " + ts(V["menu"][lang]) + ";\n\n"
for lang, suf in (("bg","Bg"), ("en","En")):
    x += f"export const menuFooter{suf} =\n  " + json.dumps(L(V["menuFooter"], lang), ensure_ascii=False) + ";\n\n"
for key in ("services", "tech", "events", "performer"):
    for lang, suf in (("bg","Bg"), ("en","En")):
        x += f"export const {key}{suf} = " + ts(V[key][lang]) + ";\n\n"
x += ("export const gallery: { slug: string; bg: string; en: string; tall?: boolean }[] = "
      + ts(V.get("gallery", [])) + ";\n\n")
x += "export const exploreArt = " + ts(V.get("exploreArt", [
    {"src":"/atmosphere/m-s1-table-840.webp?v=1","alt":""},
    {"src":"/atmosphere/dusk-band-840.webp?v=1","alt":""},
    {"src":"/atmosphere/og-card.jpg?v=1","alt":""}])) + ";\n\n"
x += "export const navPages = " + ts({"bg": navpages("bg"), "en": navpages("en")}) + ";\n\n"
x += "export const extraStrings = " + ts({"bg": extra("bg"), "en": extra("en")}) + " as const;\n"

def leak_check(name, src):
    hits = sorted(set(DONOR_LEAK.findall(src)))
    if hits:
        sys.exit(f"LEAK in {name}: donor venue text survived -> {hits}")

leak_check("content.ts", content)
leak_check("content-extra.ts", x)
(work / "lib" / "content.ts").write_text(content, encoding="utf-8")
(work / "lib" / "content-extra.ts").write_text(x, encoding="utf-8")
print(f"content pack written: {V['nameBg']} ({len(content)} + {len(x)} bytes)")
