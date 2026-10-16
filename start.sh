#!/usr/bin/env bash
# Office Shortcuts Pro - static server.
# Builds dist/ inside PROJECT_DIR and serves it in the foreground on $PORT.
set -euo pipefail
cd "$(dirname "$0")"
PROJECT_DIR="$(pwd)"
SRC="$PROJECT_DIR/office-shortcuts-pro"
DIST="$PROJECT_DIR/dist"
PORT="${PORT:-3000}"
OPENCODE_WEB_DIR="${OPENCODE_WEB_DIR:-/home/runner/work/_temp/omgithub-web}"
/usr/bin/time -p mkdir -p "$OPENCODE_WEB_DIR"
/usr/bin/time -p test -f "$SRC/index.html"
/usr/bin/time -p rm -rf "$DIST"
/usr/bin/time -p mkdir -p "$DIST"
/usr/bin/time -p cp -r "$SRC/." "$DIST/"
/usr/bin/time -p test -f "$DIST/index.html"
/usr/bin/time -p printf '{"project":"%s","directory":"%s"}' "$PROJECT_DIR" "$DIST" > "$OPENCODE_WEB_DIR/deployment-output.json"
/usr/bin/time -p cat "$OPENCODE_WEB_DIR/deployment-output.json"
echo "Serving $DIST on port $PORT"
exec python3 -m http.server "$PORT" --directory "$DIST"
