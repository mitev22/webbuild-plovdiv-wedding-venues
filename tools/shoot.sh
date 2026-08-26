#!/bin/bash
# Capture the gallery hero shot for one built site (desktop crop).
set -euo pipefail
SLUG="$1"
REPO="$HOME/Desktop/web-agency/webbuild-plovdiv-wedding-venues"
URL="http://localhost:8791/webbuild-plovdiv-wedding-venues/sites/$SLUG/"
agent-browser open "$URL" --session shots >/dev/null 2>&1
sleep 3
agent-browser eval --session shots "window.scrollTo(0,0); document.querySelectorAll('.reveal,[class*=reveal]').forEach(e=>e.classList.add('in')); 'ok'" >/dev/null 2>&1
sleep 1
agent-browser screenshot "$REPO/shots/$SLUG.png" --session shots >/dev/null 2>&1
echo "shot: $(ls -la "$REPO/shots/$SLUG.png" | awk '{print $5}') bytes"
