#!/bin/bash
# QA a built site, capture its gallery shot, and push it live.
set -euo pipefail
SLUG="$1"
REPO="$HOME/Desktop/web-agency/webbuild-plovdiv-wedding-venues"
S="$REPO/sites/$SLUG"

# 1. noindex present on every page
MISS=$(find "$S" -name '*.html' -exec grep -L 'content="noindex, nofollow"' {} + | wc -l | tr -d ' ')
[ "$MISS" = "0" ] || { echo "QA FAIL: $MISS page(s) missing noindex"; exit 1; }
# 2. donor / placeholder leak
if grep -ril 'colibri\|коматево\|марица\|maritsa\|lorem ipsum\|REPLACE_WITH' "$S" | grep -q .; then
  echo "QA FAIL: placeholder or donor text leaked"; grep -ril 'colibri\|марица\|lorem ipsum' "$S" | head -3; exit 1
fi
# 3. mobile probe + shot
"$REPO/tools/shoot.sh" "$SLUG"
echo "QA OK: $SLUG ($(find "$S" -name '*.html' | wc -l | tr -d ' ') pages, noindex on all)"

cd "$REPO"
git add "sites/$SLUG" "configs/$SLUG" "shots/$SLUG.png" "tools/venues/$SLUG.json"
git commit -q -m "run 2: $SLUG demo site

Co-Authored-By: Claude Opus 5 <noreply@anthropic.com>"
git push -q origin main
echo "PUBLISHED https://mitev22.github.io/webbuild-plovdiv-wedding-venues/sites/$SLUG/"
