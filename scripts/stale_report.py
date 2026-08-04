from __future__ import annotations

import argparse
import sys
from datetime import date
from pathlib import Path

from catalog import ROOT, load_resources


DEFAULT_MAX_AGE = {
    "free-tier": 45,
    "freemium": 45,
    "free-compute": 45,
    "open-source": 90,
}


def main() -> int:
    parser = argparse.ArgumentParser(description="Report catalog entries that need evidence reverification")
    parser.add_argument("--summary", type=Path, default=ROOT / "reports" / "stale-verification.md")
    args = parser.parse_args()
    today = date.today()
    stale: list[tuple[dict, int, int]] = []
    for item in load_resources():
        age = (today - date.fromisoformat(item["last_verified"])).days
        max_age = DEFAULT_MAX_AGE[item["free_type"]]
        if age > max_age:
            stale.append((item, age, max_age))

    lines = [
        "# Catalog entries need reverification",
        "",
        f"Date: {today.isoformat()}",
        f"Entries due: {len(stale)}",
        "",
    ]
    if stale:
        lines.extend(["| Resource | Free type | Last verified | Age | Target | Official evidence |", "|---|---|---|---|---|---|"])
        for item, age, max_age in sorted(stale, key=lambda row: row[1], reverse=True):
            lines.append(f"| {item['name']} | {item['free_type']} | {item['last_verified']} | {age} days | {max_age} days | [review]({item['source']['url']}) |")
        lines.extend(["", "Reverification requires reading the official evidence. Do not update dates from link reachability alone."])
    else:
        lines.append("No catalog entry has crossed its evidence-review target.")
    args.summary.parent.mkdir(parents=True, exist_ok=True)
    args.summary.write_text("\n".join(lines) + "\n", encoding="utf-8", newline="\n")
    print(f"Freshness audit: {len(stale)} entrie(s) due for review.")
    return 1 if stale else 0


if __name__ == "__main__":
    raise SystemExit(main())
