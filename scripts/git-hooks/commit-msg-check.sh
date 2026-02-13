#!/usr/bin/env bash
# Enforce commit message: first line min length; allow "Merge" / "Revert" / "fixup!" / "squash!".
set -e
MSG_FILE="${1:-.git/COMMIT_EDITMSG}"
[ ! -f "$MSG_FILE" ] && exit 0
FIRST=$(head -n1 "$MSG_FILE")
MIN_LEN="${COMMIT_MSG_MIN_LEN:-10}"

# Allow merge / revert / fixup / squash
case "$FIRST" in
Merge\ *) exit 0 ;;
Revert\ *) exit 0 ;;
fixup!*) exit 0 ;;
squash!*) exit 0 ;;
esac

# Treat first line as empty when it's a comment (starts with #)
if [[ "$FIRST" =~ ^# ]]; then
    TRIMMED=""
else
    TRIMMED="$FIRST"
fi
LEN=${#TRIMMED}
if [ "$LEN" -lt "$MIN_LEN" ]; then
    echo "Commit message first line too short (min ${MIN_LEN} chars). Example: feat(scope): short description"
    exit 1
fi
exit 0
