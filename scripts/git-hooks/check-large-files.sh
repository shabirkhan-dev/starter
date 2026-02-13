#!/usr/bin/env bash
# Forbid committing files over MAX_SIZE_MB (default 2).
set -e
MAX_SIZE_MB="${MAX_SIZE_MB:-2}"
MAX_BYTES=$((MAX_SIZE_MB * 1024 * 1024))
FOUND=

while IFS= read -r -d '' f; do
    [ -z "$f" ] && continue
    [ ! -f "$f" ] && continue
    SZ=$(stat -c%s "$f" 2>/dev/null || stat -f%z "$f" 2>/dev/null)
    if [ -n "$SZ" ] && [ "$SZ" -gt "$MAX_BYTES" ]; then
        SZ_MB=$((SZ / 1024 / 1024))
        echo "error: file too large: $f (${SZ_MB}MB, max ${MAX_SIZE_MB}MB)"
        FOUND=1
    fi
done < <(git diff --staged --name-only -z 2>/dev/null || true)

if [ -n "$FOUND" ]; then
    echo "Staged files exceed ${MAX_SIZE_MB}MB. Unstage or add to .gitignore."
    exit 1
fi
exit 0
