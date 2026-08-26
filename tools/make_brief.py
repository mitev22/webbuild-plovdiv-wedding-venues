#!/usr/bin/env python3
"""Compose a scaffold brief for the common archetype: a Plovdiv restaurant or hall
with no website (or a dead one), whose only public facts are name, address, phone,
rating, hours and a handful of listed attributes.

Usage: make_brief.py <facts.json>   ->  /tmp/briefs/<slug>.json

The copy is positioned around "тържества / поводи" rather than claiming the venue
specialises in weddings, unless facts["weddings"] is true (i.e. the business itself
says so). Nothing here asserts a fact the caller did not supply.
"""
import json, sys
from pathlib import Path
F = json.loads(Path(sys.argv[1]).read_text(encoding="utf-8"))
g = F.get
nb, ne = F["nameBg"], F["nameEn"]
noun = F.get("venueNoun", {"bg": "ресторанта", "en": "the restaurant"})
kindBg = g("kindBg", "Ресторант"); kindEn = g("kindEn", "A restaurant")
addr, addrEn = F["address"], F["addressEn"]
tel = g("phone", "")
rating = g("rating", "")
hoursBg, hoursEn = g("hoursBg", ""), g("hoursEn", "")
extrasBg, extrasEn = g("extrasBg", []), g("extrasEn", [])
distBg, distEn = g("districtBg", ""), g("districtEn", "")
lead_note_bg = g("noSiteBg", "Собствен сайт няма, така че телефонът остава единственият начин за резервация.")
lead_note_en = g("noSiteEn", "There is no website, so the telephone remains the only way to book.")

knownBg = [f"{kindBg} на {addr}"] + ([hoursBg] if hoursBg else []) + extrasBg
knownEn = [f"{kindEn.rstrip('.')} at {addrEn}"] + ([hoursEn] if hoursEn else []) + extrasEn
whyBg = ([f"{rating} от отзивите в Google"] if rating else []) + extrasBg[:3]
whyEn = ([f"{rating} from its Google reviews"] if rating else []) + extrasEn[:3]

stats_bg, stats_en = [], []
if rating:
    stats_bg.append({"value": rating, "count": float(rating), "label": "от отзивите в Google"})
    stats_en.append({"value": rating, "count": float(rating), "label": "from its Google reviews"})
for a, b in zip(g("statsBg", []), g("statsEn", [])):
    stats_bg.append(a); stats_en.append(b)

B = {
 "slug": F["slug"], "nameBg": nb, "nameEn": ne,
 "sources": g("sources", "Google Business профила им (нямат сайт)"),
 "wordmark": F["wordmark"], "navMark": F["navMark"],
 "town": g("town", "Пловдив"), "townEn": g("townEn", "Plovdiv"),
 "type": g("type", "hall"), "venueNoun": noun,
 "address": addr, "addressEn": addrEn, "addressStreet": F["addressStreet"],
 "phone": tel, "phoneE164": g("phoneE164", ""), "email": g("email", ""),
 "facebook": g("facebook", ""), "mapQuery": F["mapQuery"],
 "evidence": g("evidence", "no-website"),
 "navSpot": F["navSpot"],
 "navSeats": {"bg": "капацитет по запитване", "en": "capacity on request"},
 "knownBg": knownBg, "knownEn": knownEn, "whyBg": whyBg, "whyEn": whyEn,
 "meta": {"bg": {"title": F["metaTitleBg"], "desc": F["metaDescBg"]},
          "en": {"title": F["metaTitleEn"], "desc": F["metaDescEn"]}},
 "hero": {"bg": {"title": F["heroBg"], "under": F["heroUnderBg"], "wall": F["wallBg"],
                 "ch1Title": f"{nb}. {g('ch1TagBg','Мястото на повода.')}",
                 "ch1Lead": f"Денят започва с пристигането. {kindBg} е на {addr}{(', ' + distBg) if distBg else ''}."},
          "en": {"title": F["heroEn"], "under": F["heroUnderEn"], "wall": F["wallEn"],
                 "ch1Title": f"{ne}. {g('ch1TagEn','Where the occasion happens.')}",
                 "ch1Lead": f"The day begins with the arrival. {kindEn} sits at {addrEn}{(', ' + distEn) if distEn else ''}."}},
 "ch2": {"bg": {"lead": F["ch2LeadBg"],
                "body": "Подробности за капацитета и за броя места не са публикувани никъде. Ще бъдат добавени, след като бъдат предоставени от домакините."},
         "en": {"lead": F["ch2LeadEn"],
                "body": "Details of the capacity and the number of seats are not published anywhere. They will be added once the hosts provide them."}},
 "ch3": {"bg": {"title": g("ch3TitleBg", "Вечерята"), "lead": F["ch3LeadBg"]},
         "en": {"title": g("ch3TitleEn", "Dinner"), "lead": F["ch3LeadEn"]}},
 "ch4": {"bg": {"title": "Вечерта продължава", "lead": F["ch4LeadBg"], "body": lead_note_bg},
         "en": {"title": "The evening goes on", "lead": F["ch4LeadEn"], "body": lead_note_en}},
 "gettingHereRows": {
   "bg": [["Адрес", addr]] + ([["Работно време", hoursBg]] if hoursBg else [])
         + ([["Телефон", tel]] if tel else [["Забележка", "телефон не е публикуван"]]),
   "en": [["Address", addrEn]] + ([["Opening hours", hoursEn]] if hoursEn else [])
         + ([["Phone", tel]] if tel else [["Note", "no telephone is published"]])},
 "gettingHereNote": {"bg": f"{kindBg} е на {addr}.", "en": f"{kindEn} is at {addrEn}."},
 "stats": {"bg": stats_bg, "en": stats_en},
 "menuLabelBg": g("menuLabelBg", "Мястото"), "menuLabelEn": g("menuLabelEn", "The place"),
 "menuBg": F["menuBg"], "menuEn": F["menuEn"],
 "techBg": g("techBg", extrasBg[:4]), "techEn": g("techEn", extrasEn[:4]),
 "eventsBg": F["eventsBg"], "eventsEn": F["eventsEn"],
 "eventsLead": {"bg": g("eventsLeadBg", "Мястото се предлага за поводи от всякакъв вид."),
                "en": g("eventsLeadEn", "The place is offered for occasions of every kind.")},
 "galleryEmpty": {"bg": g("galleryEmptyBg", "Домакините нямат собствен сайт, а профилът им в Google не съдържа фотографии, годни за публикуване."),
                  "en": g("galleryEmptyEn", "The hosts have no website of their own, and their Google profile holds no publishable photographs.")},
 "bandQuote": {"bg": F["bandQuoteBg"], "en": F["bandQuoteEn"]},
 "pageTitles": {"bg": {"events": g("pageEventsBg", "Поводите на мястото")},
                "en": {"events": g("pageEventsEn", "Occasions at the venue")}},
 "performer": {"bg": F["performerBg"], "en": F["performerEn"]},
 "navHints": {"bg": ["мястото на повода", "какво се знае", "всеки повод", "на разположение", "предстои", "до 2 работни дни"],
              "en": ["where the occasion happens", "what is known", "any occasion", "available", "to come", "within 2 working days"]},
 "capacityRows": {"bg": F["capacityRowsBg"], "en": F["capacityRowsEn"]},
 "timetable": {"bg": F["timetableBg"], "en": F["timetableEn"]},
 "handoffExtra": g("handoffExtra", ["Капацитет и брой места", "Меню и куверт за тържества",
                                    "Facebook или Instagram страница, ако имат"]),
}
out = Path("/tmp/briefs")/f"{F['slug']}.json"
out.parent.mkdir(exist_ok=True)
out.write_text(json.dumps(B, ensure_ascii=False, indent=1), encoding="utf-8")
print("brief:", out)
