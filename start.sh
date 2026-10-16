#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"
/usr/bin/time -p pwd
/usr/bin/time -p bash -c 'PORT="${PORT:-3000}"; echo "PORT=$PORT"'
PROJECT_ROOT="$(/usr/bin/time -p pwd | tail -n 1)"
# Absolute built static directory inside PROJECT_DIR
DIST_DIR="$PROJECT_ROOT/dist"
/usr/bin/time -p mkdir -p "$DIST_DIR"
/usr/bin/time -p test -f "$DIST_DIR/index.html"
/usr/bin/time -p bash -c 'if [ -f package.json ]; then echo "package.json found"; else echo "no package.json, static html"; fi'
# Install dependencies when a lockfile / package.json exists
/usr/bin/time -p bash -c 'if [ -f package.json ]; then if [ -f package-lock.json ]; then npm ci --no-audit --no-fund; else npm install --no-audit --no-fund; fi; else echo "skip install: no package.json"; fi'
# Build when a build script exists; otherwise ensure dist/index.html exists from static source
/usr/bin/time -p bash -c 'if [ -f package.json ] && node -e "process.exit(require(\"./package.json\").scripts && require(\"./package.json\").scripts.build ? 0 : 1)"; then npm run build; else if [ ! -f dist/index.html ] && [ -f OfficeShortcutsApp/app/src/main/assets/www/index.html ]; then cp OfficeShortcutsApp/app/src/main/assets/www/index.html dist/index.html; echo "copied static index.html to dist"; else echo "skip build: dist ready"; fi; fi'
# Write deployment output for the controller (metadata only; app bits stay in PROJECT_DIR)
/usr/bin/time -p bash -c 'OUT="${OPENCODE_WEB_DIR:-/home/runner/work/_temp/omgithub-web}/deployment-output.json"; mkdir -p "$(dirname "$OUT")"; ROOT="$(pwd)"; printf "{\"project\":\"%s\",\"directory\":\"%s\"}" "$ROOT" "$ROOT/dist" > "$OUT"; cat "$OUT"; echo'
# Serve the built static directory in the foreground on PORT (default 3000)
/usr/bin/time -p bash -c 'echo "serving $PWD/dist on PORT=${PORT:-3000}"'
/usr/bin/time -p python3 -m http.server "${PORT:-3000}" --directory "$DIST_DIR" --bind 0.0.0.0
