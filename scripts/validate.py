from __future__ import annotations

import argparse
import json
import re
import sys
from datetime import date, timedelta
from pathlib import Path
from urllib.parse import urlparse

from catalog import ROOT, load_resources


SCHEMA_PATH = ROOT / "data" / "schema" / "resource.schema.json"


def value_type_matches(value: object, expected: str | list[str]) -> bool:
    expected_types = [expected] if isinstance(expected, str) else expected
    mapping = {
        "array": list,
        "boolean": bool,
        "null": type(None),
        "object": dict,
        "string": str,
    }
    return any(isinstance(value, mapping[item]) for item in expected_types)


def validate_value(value: object, rule: dict, path: str, errors: list[str]) -> None:
    expected = rule.get("type")
    if expected and not value_type_matches(value, expected):
        errors.append(f"{path}: expected {expected}, got {type(value).__name__}")
        return

    if "const" in rule and value != rule["const"]:
        errors.append(f"{path}: must be {rule['const']!r}")
    if "enum" in rule and value not in rule["enum"]:
        errors.append(f"{path}: {value!r} is not one of {rule['enum']}")

    if isinstance(value, str):
        if len(value.strip()) < rule.get("minLength", 0):
            errors.append(f"{path}: value is too short")
        pattern = rule.get("pattern")
        if pattern and not re.search(pattern, value):
            errors.append(f"{path}: does not match {pattern}")
        if rule.get("format") == "uri":
            parsed = urlparse(value)
            if parsed.scheme != "https" or not parsed.netloc:
                errors.append(f"{path}: must be a valid HTTPS URL")
        if rule.get("format") == "date":
            try:
                date.fromisoformat(value)
            except ValueError:
                errors.append(f"{path}: must be an ISO date")

    if isinstance(value, list):
        if len(value) < rule.get("minItems", 0):
            errors.append(f"{path}: needs at least {rule['minItems']} item(s)")
        if rule.get("uniqueItems") and len(value) != len(set(value)):
            errors.append(f"{path}: items must be unique")
        item_rule = rule.get("items", {})
        for index, item in enumerate(value):
            validate_value(item, item_rule, f"{path}[{index}]", errors)

    if isinstance(value, dict):
        required = rule.get("required", [])
        for key in required:
            if key not in value:
                errors.append(f"{path}: missing required field {key!r}")
        properties = rule.get("properties", {})
        if rule.get("additionalProperties") is False:
            extras = sorted(set(value) - set(properties))
            for key in extras:
                errors.append(f"{path}: unexpected field {key!r}")
        for key, child in value.items():
            if key in properties:
                validate_value(child, properties[key], f"{path}.{key}", errors)


def validate(max_age: int | None = None) -> list[str]:
    with SCHEMA_PATH.open(encoding="utf-8") as handle:
        schema = json.load(handle)

    resources = load_resources()
    errors: list[str] = []
    if not resources:
        errors.append("catalog: no resources found")
        return errors

    seen_ids: dict[str, str] = {}
    today = date.today()
    for resource in resources:
        filename = resource.pop("_file")
        validate_value(resource, schema, filename, errors)
        resource_id = resource.get("id")
        if resource_id:
            if resource_id in seen_ids:
                errors.append(f"{filename}: duplicate id also used by {seen_ids[resource_id]}")
            seen_ids[resource_id] = filename
            if filename != f"{resource_id}.json":
                errors.append(f"{filename}: filename must match id ({resource_id}.json)")

        verified = resource.get("last_verified")
        if isinstance(verified, str):
            try:
                verified_date = date.fromisoformat(verified)
                if verified_date > today + timedelta(days=1):
                    errors.append(f"{filename}: last_verified is in the future")
                if max_age is not None and (today - verified_date).days > max_age:
                    errors.append(f"{filename}: verification is older than {max_age} days")
            except ValueError:
                pass

        if resource.get("access") == "local" and resource.get("privacy") == "provider-processed":
            errors.append(f"{filename}: local resources cannot be provider-processed")
        if resource.get("free_type") == "open-source" and not resource.get("license"):
            errors.append(f"{filename}: open-source entries require a license")

    return errors


def main() -> int:
    parser = argparse.ArgumentParser(description="Validate Free AI Atlas catalog data")
    parser.add_argument("--max-age", type=int, help="Fail when a verification is older than N days")
    args = parser.parse_args()
    errors = validate(args.max_age)
    if errors:
        print(f"Validation failed with {len(errors)} error(s):", file=sys.stderr)
        for error in errors:
            print(f"- {error}", file=sys.stderr)
        return 1
    print(f"Validated {len(load_resources())} resources successfully.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
