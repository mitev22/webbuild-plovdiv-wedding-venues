#!/usr/bin/env python3
"""Compose a full gravura venue facts JSON from a compact per-venue brief.

Usage: scaffold_venue.py <brief.json>  ->  writes tools/venues/<slug>.json

The brief carries ONLY what is venue-specific and verified. Everything this
script fills in is either structural or an honest statement about a missing
fact ("X publishes no menu"), never an invented one. Anything unknown stays
an empty array/string so the template renders its documented stand-in.
"""
import json, sys
from pathlib import Path

B = json.loads(Path(sys.argv[1]).read_text(encoding="utf-8"))
g = B.get
name_bg, name_en = B["nameBg"], B.get("nameEn") or B["nameBg"]
noun = B["venueNoun"]           # {"bg":"залата","en":"the hall"}
town, town_en = g("town", "Пловдив"), g("townEn", "Plovdiv")
has_site = bool(g("web"))
fb_only = g("evidence") == "facebook-only"

def none_pub(what_bg, what_en):
    return (f"{name_bg} не публикува {what_bg}.", f"{name_en} publishes no {what_en}.")

menu_note_bg, menu_note_en = none_pub("меню", "menu")
V = {
 "slug": B["slug"], "nameBg": name_bg, "nameEn": name_en,
 "harvestedOn": g("harvestedOn", "2026-08-26"),
 "sources": g("sources", "Google Business профила им"),
 "wordmark": B["wordmark"], "navMark": B["navMark"],
 "town": town, "townEn": town_en, "type": g("type", "hall"), "venueNoun": noun,
 "address": B["address"], "addressEn": B["addressEn"], "addressStreet": B["addressStreet"],
 "phone": ([B["phone"]] if g("phone") else []), "phoneE164": g("phoneE164", ""),
 "email": "", "instagram": "", "facebook": g("facebook", ""),
 "sameAs": [x for x in [g("facebook", "")] if x],
 "mapQuery": B["mapQuery"], "maxCapacity": g("maxCapacity", 0),
 "capacity": g("capacity", []), "spaces": g("spaces", []),
 "packageIncludes": g("knownBg", []), "packageIncludesEn": g("knownEn", []),
 "packageAssist": {"bg": g("assistBg", ""), "en": g("assistEn", "")},
 "whyUs": {"bg": g("whyBg", []), "en": g("whyEn", [])},
 "parking": {"bg": g("parkingBg", ""), "en": g("parkingEn", "")},
 "reviews": g("reviews", []),
 "navSpot": B["navSpot"], "navSeats": B["navSeats"],
 "atmosphereNote": {
   "bg": f"атмосферни визуализации, предстои добавяне на снимки на {noun['bg']}",
   "en": f"atmospheric visualisations, photographs of {noun['en']} to be added"},
 "meta": B["meta"],
 "ch1": {"bg": {"title": B["hero"]["bg"]["ch1Title"], "lead": B["hero"]["bg"]["ch1Lead"]},
         "en": {"title": B["hero"]["en"]["ch1Title"], "lead": B["hero"]["en"]["ch1Lead"]}},
 "ch2": {"bg": {"title": g("ch2", {}).get("bg", {}).get("title", "Церемонията"),
                "lead": B["ch2"]["bg"]["lead"], "body": B["ch2"]["bg"].get("body", "")},
         "en": {"title": g("ch2", {}).get("en", {}).get("title", "The ceremony"),
                "lead": B["ch2"]["en"]["lead"], "body": B["ch2"]["en"].get("body", "")}},
 "ch3": {"bg": {"title": B["ch3"]["bg"]["title"], "lead": B["ch3"]["bg"]["lead"]},
         "en": {"title": B["ch3"]["en"]["title"], "lead": B["ch3"]["en"]["lead"]}},
 "ch4": {"bg": {"title": B["ch4"]["bg"]["title"], "lead": B["ch4"]["bg"]["lead"], "body": B["ch4"]["bg"].get("body", "")},
         "en": {"title": B["ch4"]["en"]["title"], "lead": B["ch4"]["en"]["lead"], "body": B["ch4"]["en"].get("body", "")}},
 "ch5": {"bg": {"title": "Сбогуването е ново начало",
                "lead": "Опишете деня си: сезон, брой гости, ориентировъчен бюджет. Отговаряме лично на всяко запитване."},
         "en": {"title": "The farewell is a beginning",
                "lead": "Tell us about your day: season, guest count, approximate budget. Every enquiry gets a personal reply."}},
 "gettingHereRows": B["gettingHereRows"],
 "whyTitle": {"bg": f"Защо младоженците избират {name_bg}", "en": f"Why couples choose {name_en}"},
 "packagesTitle": {"bg": "Какво се знае за мястото", "en": "What is known about the place"},
 "packagesLead": {
   "bg": f"{name_bg} не публикува куверт и пакети. Показано е само това, което самите те съобщават. Опишете тържеството си във формата и ще получите оферта.",
   "en": f"{name_en} publishes no per-head price or packages. Only what they state themselves appears here. Describe your celebration in the form and you will receive an offer."},
 "includesTitle": {"bg": "На разположение за деня", "en": "Available for the day"},
 "reviewsLead": {
   "bg": f"{name_bg} няма публикувани отзиви, които да бъдат проверени. Разделът остава празен, докато не бъдат предоставени истински.",
   "en": f"{name_en} has no verifiable published reviews. This section stays empty until real ones are supplied."},
 "gettingHereNote": {"bg": B["gettingHereNote"]["bg"], "en": B["gettingHereNote"]["en"]},
 "capacityStats": B["stats"],
 "menu": {
   "bg": [{"key": "mqstoto", "label": g("menuLabelBg", "Мястото"),
           "note": f"{menu_note_bg} Показано е само това, което сами съобщават.",
           "dishes": B["menuBg"]}],
   "en": [{"key": "mqstoto", "label": g("menuLabelEn", "The place"),
           "note": f"{menu_note_en} Only what they state themselves appears here.",
           "dishes": B["menuEn"]}]},
 "menuFooter": {
   "bg": "Меню, куверт и кетъринг условия не са публикувани никъде и предстои да бъдат предоставени.",
   "en": "The menu, the per-head price and the catering terms are published nowhere and are still to be supplied."},
 "services": {"bg": g("knownBg", []), "en": g("knownEn", [])},
 "tech": {"bg": g("techBg", []), "en": g("techEn", [])},
 "events": {"bg": B["eventsBg"], "en": B["eventsEn"]},
 "performer": {"bg": B["performer"]["bg"], "en": B["performer"]["en"]},
 "gallery": [],
 "navHints": B["navHints"],
 "extra": {
  "bg": {"menuTitle": g("menuLabelBg", "Мястото"),
     "menuLead": f"{menu_note_bg} Ето какво съобщават за самото място:",
     "servicesTitle": "Услуги", "servicesLead": "Ето какво се знае, че стои на разположение за деня.",
     "techTitle": f"В {noun['bg']}", "eventsTitle": "Поводи", "eventsLead": B["eventsLead"]["bg"],
     "galleryTitle": f"{g('galleryNounBg','Мястото')}, както изглежда",
     "galleryLead": f"{name_bg} няма публикувани собствени фотографии на обекта.",
     "galleryChip": "предстоят реални снимки",
     "galleryEmptyTitle": f"Тук ще стоят снимките на {noun['bg']}.",
     "galleryEmptyBody": B["galleryEmpty"]["bg"],
     "performerTitle": "Сезонът, с техните думи", "tableBandQuote": B["bandQuote"]["bg"],
     "pageTitleGallery": "Снимките предстоят", "pageTitleEvents": B["pageTitles"]["bg"]["events"],
     "pageTitleMenu": "Мястото, описано с техните думи", "pageTitleServices": "Какво стои на разположение"},
  "en": {"menuTitle": g("menuLabelEn", "The place"),
     "menuLead": f"{menu_note_en} Here is what they state about the place itself:",
     "servicesTitle": "Services", "servicesLead": "Here is what is known to be available for the day.",
     "techTitle": f"In {noun['en']}", "eventsTitle": "Occasions", "eventsLead": B["eventsLead"]["en"],
     "galleryTitle": f"{g('galleryNounEn','The place')} as it looks",
     "galleryLead": f"{name_en} has no published photographs of the venue.",
     "galleryChip": "real photographs to come",
     "galleryEmptyTitle": f"The photographs of {noun['en']} will stand here.",
     "galleryEmptyBody": B["galleryEmpty"]["en"],
     "performerTitle": "The season, in their words", "tableBandQuote": B["bandQuote"]["en"],
     "pageTitleGallery": "Photographs to come", "pageTitleEvents": B["pageTitles"]["en"]["events"],
     "pageTitleMenu": "The place, in their words", "pageTitleServices": "What is available"}},
 "handoff": [
   f"Снимки на {noun['bg']} и на минали сватби (реални фото-слотове)",
   "Капацитет: брой места седнали, коктейл и на открито",
   "Меню и куверт",
   "Web3Forms access key за формата за запитване",
   "Имейл адрес за контакт",
   "Текст за политика за поверителност — преглед от юрист",
 ] + g("handoffExtra", []),
 "tokens": {
   "capacityRows": B["capacityRows"], "timetable": B["timetable"],
   "packagesNote": {
     "bg": f"{name_bg} не публикува куверт. Опишете деня си във формата и ще получите лична оферта.",
     "en": f"{name_en} publishes no per-head price. Describe your day in the form for a personal offer."},
   "copy": {
     "bg": {"heroTitle": B["hero"]["bg"]["title"], "heroUnder": B["hero"]["bg"]["under"],
       "heroCaption": "Час преди гостите.", "heroCaptionNote": "Атмосферна визуализация",
       "ctaEnquiry": "Запитване за дата", "ctaVisit": "Заповядайте на оглед",
       "wallTitle": B["hero"]["bg"]["wall"], "duetTitle": "Вечерта минава на едно място.",
       "inviteLine": "Заповядайте на оглед. Огледът трае час и не задължава с нищо.",
       "enquiryTitle": "Запитване за дата",
       "enquiryLead": "Опишете деня си: сезон, брой гости, ориентировъчен бюджет. Отговаряме лично на всяко запитване.",
       "atmosphereNote": "атмосферни визуализации, предстои добавяне на снимки"},
     "en": {"heroTitle": B["hero"]["en"]["title"], "heroUnder": B["hero"]["en"]["under"],
       "heroCaption": "An hour before the guests.", "heroCaptionNote": "Atmospheric visualisation",
       "ctaEnquiry": "Enquire about a date", "ctaVisit": "Come for a viewing",
       "wallTitle": B["hero"]["en"]["wall"], "duetTitle": "The evening, from start to finish.",
       "inviteLine": "Come for a viewing. It commits you to nothing.",
       "enquiryTitle": "Enquire about a date",
       "enquiryLead": "Tell us about your day: season, guest count, approximate budget. Every enquiry gets a personal reply.",
       "atmosphereNote": "atmospheric visualisations, venue photography to be added"}}},
}
out = Path.home()/"Desktop/web-agency/webbuild-plovdiv-wedding-venues/tools/venues"/f"{B['slug']}.json"
out.write_text(json.dumps(V, ensure_ascii=False, indent=2), encoding="utf-8")
print("scaffolded:", out.name)
