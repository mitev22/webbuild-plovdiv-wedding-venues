#!/usr/bin/env python3
"""Drop template media that no exported page references.

GitHub Pages' builder began failing once the gallery repo passed ~250 MB.
Every gravura export ships the full template asset set, but four families are
referenced by no page in any site (verified by grepping every .html/.js/.css
in sites/ before this list was fixed):

    petal-loop.mp4 / .webm      the hero petal video, never mounted
    season-<season>*.{webp,avif}  the season switcher renders coded gradients
    linen-tile.webp             superseded by a CSS gradient
    dusk-band*                  only referenced by an exploreArt default that
                                does not render when the gallery is empty

An earlier inference-based version of this script (delete anything whose name
does not appear in the site's own text files) DELETED REAL VENUE PHOTOS: the
gallery references them dynamically as `/photos/${slug}.webp`, so the literal
filenames appear nowhere. Do not reintroduce that approach. This denylist is
explicit on purpose; re-verify with grep before adding to it.
"""
import sys
from pathlib import Path

DENY_EXACT = {"petal-loop.mp4", "petal-loop.webm", "linen-tile.webp"}
DENY_PREFIX = ("season-spring", "season-summer", "season-autumn", "season-winter", "dusk-band")

root = Path(__file__).resolve().parent.parent / "sites"
apply = "--apply" in sys.argv
freed = n = 0
for f in root.rglob("*"):
    if not f.is_file() or f.parent.name != "atmosphere":
        continue
    if f.name in DENY_EXACT or f.name.startswith(DENY_PREFIX):
        freed += f.stat().st_size; n += 1
        if apply: f.unlink()
print(f"{'freed' if apply else 'would free'}: {freed/1e6:.1f} MB across {n} files")
if not apply: print("(dry run — pass --apply)")
