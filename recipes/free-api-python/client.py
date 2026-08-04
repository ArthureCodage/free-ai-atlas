from __future__ import annotations

import json
import os
import sys
from urllib.error import HTTPError, URLError
from urllib.request import Request, urlopen


def main() -> int:
    if len(sys.argv) < 2:
        print('Usage: python client.py "your prompt"', file=sys.stderr)
        return 2

    api_key = os.environ.get("AI_API_KEY")
    if not api_key:
        print("AI_API_KEY is required.", file=sys.stderr)
        return 2

    base_url = os.environ.get("AI_BASE_URL", "https://openrouter.ai/api/v1").rstrip("/")
    model = os.environ.get("AI_MODEL", "openrouter/free")
    timeout = float(os.environ.get("AI_TIMEOUT", "60"))
    payload = json.dumps({
        "model": model,
        "messages": [{"role": "user", "content": " ".join(sys.argv[1:])}],
    }).encode("utf-8")
    request = Request(
        f"{base_url}/chat/completions",
        data=payload,
        method="POST",
        headers={"Authorization": f"Bearer {api_key}", "Content-Type": "application/json"},
    )
    try:
        with urlopen(request, timeout=timeout) as response:
            result = json.load(response)
    except HTTPError as exc:
        detail = exc.read().decode("utf-8", errors="replace")
        print(f"Provider returned HTTP {exc.code}: {detail}", file=sys.stderr)
        return 1
    except URLError as exc:
        print(f"Network error: {exc}", file=sys.stderr)
        return 1

    try:
        print(result["choices"][0]["message"]["content"])
    except (KeyError, IndexError, TypeError):
        print(json.dumps(result, indent=2))
        return 1
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
