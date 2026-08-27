# Photo harvest — status

Tool: `tools/harvest_images.py <slug> <domain>` (WP REST media library first, then a
sitemap/link crawl; strips WordPress `-WxH` and TheGem derivative suffixes so it keeps
originals, not thumbnails).

Raw harvests live **outside this repo** at `~/Desktop/web-agency/_harvest/<slug>/`
(559 MB total — not git-tracked). Only curated, web-sized WebP lands in `assets/<slug>/`.

## Done

| slug | source | raw images | in `assets/` | note |
|---|---|---:|---:|---|
| pavazh | Facebook page | — | 14 | harvested earlier |
| panorama-sp | **sphotel.net** | 285 | 14 + hero/walls/band/og | see note below |
| hebros | **oldlegends.bg** | 361 | 16 + hero/walls/band/og + 3 brand marks | see correction below |

### hebros — the config was wrong, not just missing photos

`tools/venues/hebros.json` said *„нямат сайт“*, *„няма публикувани снимки“*,
*„Собствен сайт няма, така че телефонът остава единственият начин за резервация“*.
All false. They are **Хотел и Ресторант Old Legends / Хеброс *****, oldlegends.bg —
a WordPress site with a 361-image media library, online booking, a virtual tour and
an English version. Corrected in the config on 2026-08-27:

- real e-mail `reservation@oldlegends.bg` (was empty) and landline `032 260 180` (only the mobile was recorded)
- restaurant: „Ресторант на годината“ (сп. Бакхус) **2016 and 2003** — was not recorded at all
- ~200-year-old Revival house below Балабановата къща; merchant → род Нешеви → community → restored 1986 → private since 1999
- spaces now named: салони, зимна градина, двор с маси на открито
- their own gold "Old Legends" wordmark is now the site's logo

## Harvested, curation pending

| slug | domain | images | quality |
|---|---|---:|---|
| ostrova | ostrova-plovdiv.com | 415 | **best of the batch** — real wedding setups, floral arches, aerials of the complex, pool |
| ~~chiirite~~ | chiirite.bg | 181 | **DONE** — 17 published |
| number-five | numberfivebg.com | 28 | 14 usable at ≥800×500 |
| hitar-petar | hitarpetar.net | 11 | 6 usable |
| joana | djoana.com | 11 | none ≥800×500 — thumbnails only |

## Dead / blocked

| slug | domain | problem |
|---|---|---|
| fiesta-paga | svatbensalonfiesta.com | **domain no longer resolves** — the config still cites it as their site |

## Not yet checked

The remaining 22 venues are all marked *„нямат сайт“* in their configs. hebros proves
that flag is unreliable — it was written from the Google Business profile without
checking whether a site existed. Each still needs a real look before the claim is
repeated on a demo site.

---

## Website check of the 20 remaining venues (2026-08-27)

Every one of these was recorded as *„нямат сайт“*. Six of those records were wrong.
Verified by search **and** an HTTP check — a domain only counts as a site if it resolves.

| slug | own site | verdict |
|---|---|---|
| **casa-de-cuba** | `casadecuba.bg` | **live**, has an EN version — record was wrong |
| **diana-1** | `dayanabg.com` | **live** — the Даяна–Джоана chain site — record was wrong |
| **dayana-3** | `dayanabg.com` | **live** — same chain site — record was wrong |
| **restaurant-real** | `real-hotel.com` | **live** — hotel site with a restaurant page — record was wrong |
| **panorama-sp** | `sphotel.net` | **live** — restaurant sits inside the Парк хотел Санкт Петербург site |
| **bohemys** | `bohemysfriends.eu` | **live but bot-walled** (redirects to `/challenge/verify`) — record said Facebook only |
| rusalka | `hotelrusalka.net/.com` | **dead** — neither domain resolves |
| restorant-fiesta | `restaurant-32000.business.site` | **dead** — Google auto-page, 404 |
| atlantik | — | directories + Facebook only ✓ |
| citizens-club | — | directories only ✓ |
| crystal-palace | — | Facebook only ✓ |
| ermitazh | — | directories only ✓ |
| garden-romantic | — | directories only ✓ |
| garden-weddings | — | Facebook only ✓ |
| paldin | — | Facebook + directories ✓ |
| ramido | — | directories only ✓ |
| rhodope-house | — | Facebook + Booking.com ✓ |
| singar | — | directories only ✓ |
| the-chicken | — | directories only ✓ |
| zala-kalinka | — | nothing found ✓ |

`dayanabg.com` also covers **joana** — `djoana.com` was harvested earlier but yielded
thumbnails only, so the chain site is the better source for all three.

### Score impact

The Run-2 rubric was *„строг праг — само без сайт / само Facebook / наистина остарял
сайт“*. Six venues were scored as having no site when they do. Their scores — and
whether they still clear the strict threshold at all — need re-deciding, the same way
hebros does.

### Harvested from the newly-found sites

| slug | domain | files | usable ≥800×500 | note |
|---|---|---:|---:|---|
| panorama-sp | sphotel.net | 285 | **179** | whole hotel site — needs filtering down to the restaurant/halls |
| restaurant-real | real-hotel.com | 270 | 8 | mostly small; only a handful at usable size |
| casa-de-cuba | casadecuba.bg | 30 | 6 | thin |
| dayana-chain | dayanabg.com | 7 | 1 | chain site is image-poor despite covering 3 venues |
| bohemys | bohemysfriends.eu | — | — | **not harvested** — bot wall, needs a real browser session |

Only **panorama-sp** yields enough for a full gallery. The others are thinner than
their page counts suggest.

### panorama-sp — rebuilt 2026-08-27

Its config claimed *„нямат сайт“*, `maxCapacity: 0` and *„Собствен сайт няма, така че
телефонът остава единственият начин за резервация“*. The restaurant is on the 22nd floor
of Парк хотел „Санкт Петербург“ and its pages are on `sphotel.net`. Real figures now in
the config: **120 seats**, floor 22, open summer garden, Greek/Mediterranean cooking from
a glass-walled kitchen, open 18:00–24:00, phone 088 868 6817.

Halls, from `/halls/`: **Пълдин** 5.20 × 17.30 m, 150 classroom / 300 theatre (largest);
**Нева** 5.20 × 11.90 m, 35 classroom / 20 horseshoe; **Дружба** 6.40 × 12 m, up to 40.

**Deliberate omission — the hall photographs are excluded from the gallery.** All 27 of
them show conference setups: rows of chairs, classroom tables with laptops and water
bottles, a lectern, a speaker presenting. The halls page mentions weddings nowhere and
sells business events only. Putting those frames in a wedding gallery would misrepresent
the venue, so the demo leads with the restaurant, the view and the two genuine
celebration frames (a laid table, a first dance). Real celebration photography of the
halls is on the handoff list.

### chiirite + number-five — built 2026-08-27

**chiirite** (Хотел „Чиирите“, chiirite.bg) — 17 photos. Real figures now in the
config: restaurant seats **70**, open 7:30–23:00, multifunctional hall with
multimedia, terrace and garden facing the mountain, `manager@chiirite.bg`,
032 202 600.

*Selection note:* filenames on this site are opaque (`131028Chiirite094.jpg`),
and a first pass picked a **bathroom, two bedrooms and a shelf of menu cards**
for the gallery. Guessing subject from filename does not work here. The fix was
to montage the pool in 12-image batches in a strict 4-column grid so index maps
exactly to position, then identify each frame by eye before selecting.

**number-five** (numberfivebg.com) — 8 photos, and two caveats worth carrying:

1. **It is not a wedding venue.** It is a private party hall — billiards table,
   karaoke, party lighting, a fitted bar. Their own page does list weddings among
   the occasions, so a *celebrations* demo is honest; a *wedding* pitch is not.
   The site copy is written as "поводи", not "сватби".
2. Its 28 files collapse to **8 unique frames** — the rest are duplicate exports
   of the same shot. 3 stock images were excluded, including one Pixabay file
   identifiable only by its `-g<hash>_1920` filename pattern.

The lead card's claim that they "не дава телефон" was also wrong — their
`/contacts/` page lists 0888 66 43 43.

## Where the photo coverage stands

12 of 38 demos now carry the venue's own photography. The remaining 26 have none,
and most cannot: they have no website to harvest from. Of the harvests already in
hand, `restaurant-real` (8 usable), `casa-de-cuba` (6), `hitar-petar` (6),
`dayana-chain` (1) and `joana` (0) are too thin to fill a gallery. Those venues
need photographs from the owners.

---

## Other sources tried (2026-08-27) — Facebook, Maps, directories

Asked to look beyond the venues' own websites. All four routes tested empirically:

| route | result |
|---|---|
| **Facebook** | Login wall. The public preview yields **one cover photo** (~1200–2048px, usable) plus 414×414 grid thumbnails. Full-size galleries are behind the wall. |
| **Google Maps** | Consent wall. **Not pursued** — see below. |
| **Directory sites** (pochivka.bg, oink.bg, opoznaiplovdiv.bg) | 44×28 flag icons and one 320×230 thumbnail. **Zero usable.** |
| **Booking.com** | HTTP 202 bot challenge, no images at all. |

**Google Maps was deliberately left alone.** Its photos are largely uploaded by
customers rather than the business, so republishing them in a commercial demo is a
rights problem the website harvests never had; Google's terms also bar scraping and
caching Maps content. Decision taken with the principal on 2026-08-27.

### Facebook covers — 1 hero each, no gallery

Grabbing "the largest public image" is unreliable and **every result needs eyes on
it**. Of 10 attempts, 3 were wrong and were discarded to `_fbcovers/_rejected/`:

- `rusalka` — twice: an aerial of bungalows in a field, then a black frame of flagpoles
- `colibri-wedding` — a "СЕЗОН 2026" promo collage with baked-in text and a phone number

Shipped as heroes (walls and band stay on the template's atmospherics — one photo
cannot fill five slots without obvious repetition): **atlantik, bohemys, fiesta-paga,
singar**.

`restorant-ruzh` turned up a website nobody had recorded — `rouge.alle.bg` — but it
serves only 3 images. Not worth a pass.

### ⚠ Thirteen venues have declined

Commit `f0ed7bb` ("gallery: drop the 13 venues that said no") removed the built output
for **casa-de-cuba, crystal-palace, garden-romantic, garden-weddings, kompleks-diana,
malak-bunardzhik, ostrova, paldin, rhodope-house, rusalka, svatben-dom, zala-kalinka,
zala-royal**. „Не искат" — the conversation happened and the answer was no.

Three of them (crystal-palace, garden-weddings, rhodope-house) had Facebook heroes
built for them before that commit was noticed; the work was reverted rather than
pushed. **Check this list before doing any further work on a venue.** `configs/` is
kept for all thirteen; `sites/` and `shots/` are not.

Note `ostrova` declined *after* its 17-photo gallery was built — that effort is spent.
