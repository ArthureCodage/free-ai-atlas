from __future__ import annotations

import json
from pathlib import Path
from typing import Any


ROOT = Path(__file__).resolve().parents[1]
RESOURCE_DIR = ROOT / "data" / "resources"


def load_resources() -> list[dict[str, Any]]:
    resources: list[dict[str, Any]] = []
    for path in sorted(RESOURCE_DIR.glob("*.json")):
        with path.open(encoding="utf-8") as handle:
            resource = json.load(handle)
        resource["_file"] = path.name
        resources.append(resource)
    return resources


def public_resource(resource: dict[str, Any]) -> dict[str, Any]:
    return {key: value for key, value in resource.items() if not key.startswith("_")}
