#!/usr/bin/env bash
# Strip trailing whitespace from staged text files and re-stage. Formatters (e.g. Biome) handle code; this covers other text.
set -e
FIXED=
while IFS= read -r -d '' f; do
    [ -z "$f" ] && continue
    [ ! -f "$f" ] && continue
    # Skip binary
    if grep -qI . "$f" 2>/dev/null; then
        TMPF=$(mktemp)
        if sed 's/[[:space:]]*$//' "$f" >"$TMPF" && ! cmp -s "$f" "$TMPF"; then
            mv "$TMPF" "$f"
            git add "$f"
            FIXED=1
        else
            rm -f "$TMPF"
        fi
    fi
done < <(git diff --staged --name-only -z 2>/dev/null || true)
if [ -n "$FIXED" ]; then
    echo "Fixed trailing whitespace in some staged files and re-staged them."
fi
exit 0
