#!/usr/bin/env python3
"""Mark a lead built: leads ledger row + pipeline-tracker row.

Usage: mark_built.py <slug> <ledger_name> [status]
"""
import csv, sys, datetime
from pathlib import Path
SLUG, NAME = sys.argv[1], sys.argv[2]
STATUS = sys.argv[3] if len(sys.argv) > 3 else "built"
LED = Path.home()/"Desktop/web-agency/_sales/leads/plovdiv-wedding-venues.csv"
TRK = Path.home()/"Desktop/web-agency/_sales/pipeline-tracker.csv"
URL = f"https://mitev22.github.io/webbuild-plovdiv-wedding-venues/sites/{SLUG}/"
TODAY = datetime.date.today().isoformat()

rows = list(csv.DictReader(LED.open(encoding="utf-8")))
cols = rows[0].keys()
hit = False
for r in rows:
    if r["name"].strip() == NAME.strip():
        r["status"] = STATUS; r["demo_url"] = URL; r["date_built"] = TODAY
        r["template"] = "gravura"; r["gallery_status"] = "not_contacted"; hit = True
if not hit:
    sys.exit(f"ledger: no row named {NAME!r}")
with LED.open("w", newline="", encoding="utf-8") as fh:
    w = csv.DictWriter(fh, fieldnames=list(cols)); w.writeheader(); w.writerows(rows)

if TRK.exists():
    trows = list(csv.DictReader(TRK.open(encoding="utf-8")))
    tcols = list(trows[0].keys()) if trows else []
    if tcols and not any((r.get("slug") or r.get("Slug") or "") == SLUG for r in trows):
        new = {c: "" for c in tcols}
        for c in tcols:
            lc = c.lower()
            if lc == "slug": new[c] = SLUG
            elif "name" in lc or "business" in lc or "клиент" in lc: new[c] = NAME
            elif "url" in lc or "link" in lc or "demo" in lc: new[c] = URL
            elif "status" in lc: new[c] = "not_contacted"
            elif "niche" in lc: new[c] = "wedding-venues"
            elif "date" in lc or "built" in lc: new[c] = TODAY
        trows.append(new)
        with TRK.open("w", newline="", encoding="utf-8") as fh:
            w = csv.DictWriter(fh, fieldnames=tcols); w.writeheader(); w.writerows(trows)
        print("tracker row added")
print(f"ledger: {NAME} -> {STATUS}")
