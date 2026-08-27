#!/bin/bash
# Build one gravura demo site from a SPEC (the 2026-07 vertical builds, whose
# content pack lives in an old venue app rather than a venue facts JSON) and
# stage it into the gallery repo.
#
# Counterpart of build_site.sh, which serves the venue-JSON generation. Both
# clear the template's seeded venue media and overlay assets/<slug>/ so a demo
# only ever carries the venue it is for.
#
# Usage: build_spec_site.sh <slug>
set -euo pipefail
SLUG="$1"
REPO="$HOME/Desktop/web-agency/webbuild-plovdiv-wedding-venues"
TPL="$HOME/Desktop/web-agency/templates/wedding-venues/gravura"
OLD="$HOME/Desktop/web-agency/01-wedding-venues/$SLUG"
WORK="$(mktemp -d)/$SLUG"
BASE="/webbuild-plovdiv-wedding-venues/sites/$SLUG"
URL="https://mitev22.github.io$BASE"

[ -d "$OLD" ] || { echo "no old app dir: $OLD"; exit 1; }
[ -f "$REPO/tools/specs/$SLUG.json" ] || { echo "no spec: $SLUG"; exit 1; }

cp -R "$TPL" "$WORK"

# Drop the template's seeded reference-venue media BEFORE reskin: reskin.py
# rmtree+copytree's the old app's own public/{brand,photos,atmosphere} over
# these, so clearing them afterwards would delete the VENUE'S photographs, not
# the template's. Order matters here.
rm -f "$WORK/public/photos/"* "$WORK/public/brand/"*

python3 "$REPO/tools/reskin.py" "$OLD" "$WORK" "$REPO/tools/specs/$SLUG.json"

if [ -d "$REPO/assets/$SLUG" ]; then
  cp -R "$REPO/assets/$SLUG/." "$WORK/public/"
  echo "assets: $(find "$REPO/assets/$SLUG" -type f | wc -l | tr -d ' ') venue files overlaid"
fi

( cd "$WORK" && SITE_BASE_PATH="$BASE" npx next build >/tmp/build-$SLUG.log 2>&1 ) \
  || { echo "BUILD FAILED — tail:"; tail -25 /tmp/build-$SLUG.log; exit 1; }

rm -rf "$REPO/sites/$SLUG" "$REPO/configs/$SLUG"
mkdir -p "$REPO/sites/$SLUG" "$REPO/configs/$SLUG"
cp -R "$WORK/out/." "$REPO/sites/$SLUG/"
cp "$WORK/lib/template.config.ts" "$WORK/lib/content.ts" "$WORK/lib/content-extra.ts" "$REPO/configs/$SLUG/"
sed -n '/:root/,/}/p' "$WORK/app/globals.css" > "$REPO/configs/$SLUG/globals-root.css"
cat > "$REPO/configs/$SLUG/BUILD.md" <<EOF2
Template: gravura
Built: $(date +%Y-%m-%d)
SITE_BASE_PATH=$BASE
Content pack: 01-wedding-venues/$SLUG (vertical build), re-skinned by tools/reskin.py
EOF2
echo "BUILT $SLUG -> $URL"
