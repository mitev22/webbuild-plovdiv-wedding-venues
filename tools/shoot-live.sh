#!/bin/bash
# Recapture a gallery card shot from the deployed site (the console pitches off
# these, so they must show what the venue will actually open).
set -euo pipefail
REPO="$HOME/Desktop/web-agency/webbuild-plovdiv-wedding-venues"
for SLUG in "$@"; do
  URL="https://mitev22.github.io/webbuild-plovdiv-wedding-venues/sites/$SLUG/"
  agent-browser open "$URL" --session shots >/dev/null 2>&1
  sleep 4
  agent-browser eval --session shots "window.scrollTo(0,0); document.querySelectorAll('.reveal,[class*=reveal]').forEach(e=>e.classList.add('in')); 'ok'" >/dev/null 2>&1
  sleep 2
  agent-browser screenshot "$REPO/shots/$SLUG.png" --session shots >/dev/null 2>&1
  echo "$SLUG: $(stat -f%z "$REPO/shots/$SLUG.png") bytes"
done
agent-browser close --session shots >/dev/null 2>&1 || true
