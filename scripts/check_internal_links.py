from __future__ import annotations

import re
import sys
from pathlib import Path
from urllib.parse import unquote, urlsplit

from catalog import ROOT


MARKDOWN_LINK = re.compile(r"!?(?:\[[^\]]*\])\(([^)\s]+)(?:\s+['\"][^'\"]*['\"])?\)")
HTML_LINK = re.compile(r"(?:href|src)=[\"']([^\"']+)[\"']", re.IGNORECASE)
SKIP_PREFIXES = ("http://", "https://", "mailto:", "tel:", "data:", "#", "{{")


def candidates() -> list[Path]:
    files = list(ROOT.glob("*.md"))
    for directory in ("guides", "recipes", "stacks", "templates", "site"):
        files.extend((ROOT / directory).rglob("*.md"))
        files.extend((ROOT / directory).rglob("*.html"))
    return sorted(set(files))


def check() -> list[str]:
    errors: list[str] = []
    for path in candidates():
        content = path.read_text(encoding="utf-8")
        links = MARKDOWN_LINK.findall(content) if path.suffix == ".md" else HTML_LINK.findall(content)
        for raw_link in links:
            link = unquote(raw_link.strip("<>"))
            if not link or link.startswith(SKIP_PREFIXES):
                continue
            target_path = urlsplit(link).path
            if not target_path:
                continue
            base = ROOT if path.parent == ROOT / "templates" else path.parent
            target = (base / target_path).resolve()
            try:
                target.relative_to(ROOT)
            except ValueError:
                errors.append(f"{path.relative_to(ROOT)}: link escapes repository: {raw_link}")
                continue
            if not target.exists():
                errors.append(f"{path.relative_to(ROOT)}: missing target: {raw_link}")
    return errors


def main() -> int:
    errors = check()
    if errors:
        print(f"Internal link check failed with {len(errors)} error(s):", file=sys.stderr)
        for error in errors:
            print(f"- {error}", file=sys.stderr)
        return 1
    print(f"Checked internal links in {len(candidates())} documentation files.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
