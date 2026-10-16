#!/usr/bin/env bash
# Capture desktop + mobile screenshots of CAPTURE_URL into CAPTURE_DIR.
# Exit 75 = temporary navigation/browser infra failure, 1 = script/rendering defect.
set -euo pipefail
cd "$(dirname "$0")"
PROJECT_DIR="$(pwd)"
: "${RUNTIME_DIR:?Set RUNTIME_DIR}"
: "${CAPTURE_URL:?Set CAPTURE_URL}"
: "${CAPTURE_DIR:?Set CAPTURE_DIR}"
/usr/bin/time -p mkdir -p "$CAPTURE_DIR"
/usr/bin/time -p node "${RUNTIME_DIR}/scripts/default-capture.mjs"
/usr/bin/time -p test -s "$CAPTURE_DIR/final-desktop.png"
/usr/bin/time -p test -s "$CAPTURE_DIR/final-mobile.png"
/usr/bin/time -p ls -la "$CAPTURE_DIR/final-desktop.png" "$CAPTURE_DIR/final-mobile.png"
