from __future__ import annotations

import argparse
import json
import ssl
import sys
import time
from concurrent.futures import ThreadPoolExecutor, as_completed
from datetime import datetime, timezone
from pathlib import Path
from urllib.error import HTTPError, URLError
from urllib.request import Request, urlopen

from catalog import ROOT, load_resources


REACHABLE_HTTP_ERRORS = {401, 403, 405, 418, 429}


def check_url(resource_id: str, kind: str, url: str, timeout: float) -> dict:
    started = time.monotonic()
    request = Request(url, headers={"User-Agent": "Free-AI-Atlas-Link-Audit/1.0"})
    try:
        with urlopen(request, timeout=timeout, context=ssl.create_default_context()) as response:
            status = response.status
            final_url = response.geturl()
            ok = 200 <= status < 400
            error = None
    except HTTPError as exc:
        status = exc.code
        final_url = exc.geturl()
        ok = status in REACHABLE_HTTP_ERRORS
        error = str(exc) if not ok else None
    except (URLError, TimeoutError, ssl.SSLError) as exc:
        status = None
        final_url = url
        ok = False
        error = str(exc)
    return {
        "resource": resource_id,
        "kind": kind,
        "url": url,
        "final_url": final_url,
        "status": status,
        "ok": ok,
        "error": error,
        "elapsed_ms": round((time.monotonic() - started) * 1000),
    }


def write_summary(path: Path, results: list[dict]) -> None:
    failures = [item for item in results if not item["ok"]]
    lines = [
        "# Free AI Atlas link audit",
        "",
        f"Checked: {len(results)} URLs",
        f"Failures: {len(failures)}",
        "",
    ]
    if failures:
        lines.extend(["| Resource | Link | Status | Error |", "|---|---|---|---|"])
        for item in failures:
            lines.append(
                f"| {item['resource']} | [{item['kind']}]({item['url']}) | {item['status'] or 'network'} | {item['error'] or ''} |"
            )
    else:
        lines.append("All catalog URLs were reachable. This confirms reachability only, not the catalog claims.")
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text("\n".join(lines) + "\n", encoding="utf-8", newline="\n")


def main() -> int:
    parser = argparse.ArgumentParser(description="Audit catalog homepage and evidence links")
    parser.add_argument("--report", type=Path, default=ROOT / "reports" / "link-audit.json")
    parser.add_argument("--summary", type=Path, default=ROOT / "reports" / "link-audit.md")
    parser.add_argument("--timeout", type=float, default=20)
    parser.add_argument("--workers", type=int, default=8)
    args = parser.parse_args()

    jobs: list[tuple[str, str, str]] = []
    for item in load_resources():
        jobs.append((item["id"], "homepage", item["homepage"]))
        if item["source"]["url"] != item["homepage"]:
            jobs.append((item["id"], "source", item["source"]["url"]))

    results: list[dict] = []
    with ThreadPoolExecutor(max_workers=args.workers) as executor:
        futures = [executor.submit(check_url, *job, args.timeout) for job in jobs]
        for future in as_completed(futures):
            results.append(future.result())
    results.sort(key=lambda item: (item["resource"], item["kind"]))

    payload = {
        "checked_at": datetime.now(timezone.utc).isoformat(),
        "note": "Reachability does not verify pricing, limits, privacy, or licensing claims.",
        "results": results,
    }
    args.report.parent.mkdir(parents=True, exist_ok=True)
    args.report.write_text(json.dumps(payload, indent=2) + "\n", encoding="utf-8", newline="\n")
    write_summary(args.summary, results)
    failures = sum(not item["ok"] for item in results)
    print(f"Audited {len(results)} URLs: {failures} failure(s).")
    return 1 if failures else 0


if __name__ == "__main__":
    raise SystemExit(main())
