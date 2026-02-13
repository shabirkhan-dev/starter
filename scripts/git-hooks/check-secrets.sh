#!/usr/bin/env bash
# Scan staged content for common secret patterns. Exit 1 if likely secrets found.
set -e
TMP=$(mktemp)
trap 'rm -f "$TMP"' EXIT

# Only check added lines in staged diff (avoid blaming existing repo content)
git diff --staged -U0 >"$TMP" || true

# Patterns: private keys, AWS-style keys, generic api_key/password in assignments.
# Exclude docs/tests that might mention "example" keys.
PATTERNS=(
    '^-.*-----BEGIN (RSA |EC |DSA )?PRIVATE KEY-----'
    '^-.*-----BEGIN OPENSSH PRIVATE KEY-----'
    '^-.*(aws_access_key_id|aws_secret_access_key)\s*=\s*["\047]?[A-Za-z0-9/+=]{20,}'
    '^-.*(api[_-]?key|apikey)\s*=\s*["\047]?[A-Za-z0-9_\-]{20,}'
    '^-.*(password|passwd|secret)\s*=\s*["\047][^"\047]{8,}'
    '^-.*(Bearer|Authorization)\s*:\s*["\047]?[A-Za-z0-9_\-.]{20,}'
)

FOUND=
for pat in "${PATTERNS[@]}"; do
    if grep -qE "$pat" "$TMP" 2>/dev/null; then
        echo "Possible secret detected (pattern match in staged diff):"
        grep -nE "$pat" "$TMP" | head -5
        FOUND=1
    fi
done

if [ -n "$FOUND" ]; then
    echo "Remove or rotate secrets and do not commit them. Use env vars or a secrets manager."
    exit 1
fi
exit 0
