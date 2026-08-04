from __future__ import annotations

import argparse
import csv
import io
import json
import sys
from collections import Counter
from pathlib import Path

from catalog import ROOT, load_resources, public_resource


TEMPLATES = ROOT / "templates"

FREE_LABELS = {
    "free-tier": "Free tier",
    "freemium": "Freemium",
    "open-source": "Open source",
    "free-compute": "Free compute",
}
FREE_LABELS_FR = {
    "free-tier": "Offre gratuite",
    "freemium": "Freemium",
    "open-source": "Open source",
    "free-compute": "Calcul gratuit",
}


def markdown_table(resources: list[dict], french: bool = False) -> str:
    if french:
        lines = [
            "| Ressource | Catégorie | Gratuité | Accès | Niveau | Vérifié |",
            "|---|---|---|---|---|---|",
        ]
    else:
        lines = [
            "| Resource | Category | Free access | Access | Level | Verified |",
            "|---|---|---|---|---|---|",
        ]
    labels = FREE_LABELS_FR if french else FREE_LABELS
    for item in resources:
        lines.append(
            "| [{name}]({url}) | {category} | {free_type} | {access} | {difficulty} | {verified} |".format(
                name=item["name"],
                url=item["homepage"],
                category=item["category"],
                free_type=labels[item["free_type"]],
                access=item["access"],
                difficulty=item["difficulty"],
                verified=item["last_verified"],
            )
        )
    return "\n".join(lines)


def catalog_markdown(resources: list[dict], french: bool = False) -> str:
    title = "# Catalogue vérifié" if french else "# Verified catalog"
    intro = (
        "Chaque affirmation ci-dessous renvoie à une source officielle. Les limites peuvent changer; vérifiez la date indiquée."
        if french
        else "Every claim below points to an official source. Limits can change; check the verification date."
    )
    output = [title, "", intro, ""]
    for item in resources:
        description = item["description_fr"] if french else item["description"]
        best_for = item["best_for_fr"] if french else item["best_for"]
        limits = item["limits_fr"] if french else item["limits"]
        labels = FREE_LABELS_FR if french else FREE_LABELS
        output.extend(
            [
                f"## {item['name']}",
                "",
                description,
                "",
                f"- **{'Idéal pour' if french else 'Best for'}:** {best_for}",
                f"- **{'Gratuité' if french else 'Free access'}:** {labels[item['free_type']]}",
                f"- **{'Limites' if french else 'Limits'}:** {limits}",
                f"- **{'Licence' if french else 'License'}:** {item['license'] or ('Variable ou propriétaire' if french else 'Variable or proprietary')}",
                f"- **{'Confidentialité' if french else 'Privacy'}:** {item['privacy']}",
                f"- **{'Vérifié' if french else 'Verified'}:** {item['last_verified']} — [{'source officielle' if french else 'official source'}]({item['source']['url']})",
                "",
            ]
        )
        caveats = item["caveats_fr"] if french else item["caveats"]
        if caveats:
            output.append(f"**{'À savoir' if french else 'Caveats'}**")
            output.append("")
            output.extend(f"- {caveat}" for caveat in caveats)
            output.append("")
    return "\n".join(output).rstrip() + "\n"


def render_template(name: str, replacements: dict[str, str]) -> str:
    content = (TEMPLATES / name).read_text(encoding="utf-8")
    for marker, value in replacements.items():
        content = content.replace("{{" + marker + "}}", value)
    return content


def catalog_csv(resources: list[dict]) -> str:
    fields = [
        "id", "name", "category", "free_type", "access", "difficulty",
        "platforms", "account_required", "card_required", "commercial_use",
        "privacy", "license", "homepage", "source_url", "last_verified",
        "status", "confidence",
    ]
    output = io.StringIO(newline="")
    writer = csv.DictWriter(output, fieldnames=fields, lineterminator="\n")
    writer.writeheader()
    for item in resources:
        writer.writerow({
            **{field: item.get(field) for field in fields if field not in {"platforms", "source_url"}},
            "platforms": "|".join(item["platforms"]),
            "source_url": item["source"]["url"],
        })
    return output.getvalue()


def stats_markdown(resources: list[dict], latest: str) -> str:
    def table(title: str, values: Counter) -> list[str]:
        lines = [f"## {title}", "", "| Value | Resources |", "|---|---:|"]
        lines.extend(f"| {name} | {count} |" for name, count in sorted(values.items()))
        lines.append("")
        return lines

    lines = [
        "# Catalog health",
        "",
        "This file is generated from the catalog source records.",
        "",
        f"- **Resources:** {len(resources)}",
        f"- **Latest verification:** {latest}",
        f"- **Open source:** {sum(item['free_type'] == 'open-source' for item in resources)}",
        f"- **Local-first:** {sum(item['access'] == 'local' for item in resources)}",
        f"- **No account required:** {sum(not item['account_required'] for item in resources)}",
        f"- **High confidence:** {sum(item['confidence'] == 'high' for item in resources)}",
        "",
    ]
    lines += table("Categories", Counter(item["category"] for item in resources))
    lines += table("Free access", Counter(item["free_type"] for item in resources))
    lines += table("Access", Counter(item["access"] for item in resources))
    lines += table("Difficulty", Counter(item["difficulty"] for item in resources))
    return "\n".join(lines).rstrip() + "\n"


def expected_outputs() -> dict[Path, str]:
    resources = sorted(load_resources(), key=lambda item: (item["category"], item["name"].lower()))
    public = [public_resource(item) for item in resources]
    latest = max(item["last_verified"] for item in resources)
    categories = Counter(item["category"] for item in resources)
    common = {
        "RESOURCE_COUNT": str(len(resources)),
        "CATEGORY_COUNT": str(len(categories)),
        "LATEST_VERIFICATION": latest,
    }
    site_payload = {
        "meta": {
            "resource_count": len(resources),
            "category_count": len(categories),
            "latest_verification": latest,
            "open_source_count": sum(item["free_type"] == "open-source" for item in resources),
            "local_count": sum(item["access"] == "local" for item in resources),
            "no_account_count": sum(not item["account_required"] for item in resources),
            "high_confidence_count": sum(item["confidence"] == "high" for item in resources),
        },
        "resources": public,
    }
    return {
        ROOT / "README.md": render_template("README.template.md", {**common, "RESOURCE_TABLE": markdown_table(resources)}),
        ROOT / "README.fr.md": render_template("README.fr.template.md", {**common, "RESOURCE_TABLE": markdown_table(resources, french=True)}),
        ROOT / "CATALOG.md": catalog_markdown(resources),
        ROOT / "CATALOG.fr.md": catalog_markdown(resources, french=True),
        ROOT / "STATS.md": stats_markdown(resources, latest),
        ROOT / "site" / "data" / "resources.json": json.dumps(site_payload, ensure_ascii=False, indent=2) + "\n",
        ROOT / "site" / "data" / "resources.csv": catalog_csv(public),
    }


def main() -> int:
    parser = argparse.ArgumentParser(description="Build generated Free AI Atlas files")
    parser.add_argument("--check", action="store_true", help="Check generated files without writing")
    args = parser.parse_args()
    changed: list[str] = []
    for path, expected in expected_outputs().items():
        current = path.read_text(encoding="utf-8") if path.exists() else None
        if current != expected:
            changed.append(str(path.relative_to(ROOT)))
            if not args.check:
                path.parent.mkdir(parents=True, exist_ok=True)
                path.write_text(expected, encoding="utf-8", newline="\n")
    if args.check and changed:
        print("Generated files are out of date:", file=sys.stderr)
        for path in changed:
            print(f"- {path}", file=sys.stderr)
        return 1
    action = "Checked" if args.check else "Built"
    print(f"{action} {len(expected_outputs())} generated files; {len(changed)} needed changes.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
