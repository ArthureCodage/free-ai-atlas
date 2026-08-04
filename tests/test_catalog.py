from __future__ import annotations

import json
import csv
import subprocess
import sys
import unittest
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
SCRIPTS = ROOT / "scripts"
sys.path.insert(0, str(SCRIPTS))

from catalog import load_resources  # noqa: E402
from validate import validate  # noqa: E402
from stale_report import DEFAULT_MAX_AGE  # noqa: E402
from check_internal_links import check as check_internal_links  # noqa: E402


class CatalogTests(unittest.TestCase):
    def test_catalog_is_valid(self) -> None:
        self.assertEqual(validate(), [])

    def test_catalog_has_beginner_and_advanced_entries(self) -> None:
        levels = {item["difficulty"] for item in load_resources()}
        self.assertIn("beginner", levels)
        self.assertIn("advanced", levels)

    def test_catalog_has_local_and_cloud_entries(self) -> None:
        access = {item["access"] for item in load_resources()}
        self.assertIn("local", access)
        self.assertIn("cloud", access)

    def test_catalog_meets_reference_coverage_floor(self) -> None:
        resources = load_resources()
        self.assertGreaterEqual(len(resources), 50)
        self.assertGreaterEqual(len({item["category"] for item in resources}), 15)
        self.assertGreaterEqual(sum(item["free_type"] == "open-source" for item in resources), 35)

    def test_every_resource_has_bilingual_limits_and_caveats(self) -> None:
        for item in load_resources():
            self.assertTrue(item["limits"].strip(), item["id"])
            self.assertTrue(item["limits_fr"].strip(), item["id"])
            self.assertEqual(len(item["caveats"]), len(item["caveats_fr"]), item["id"])

    def test_generated_site_payload_is_valid_json(self) -> None:
        path = ROOT / "site" / "data" / "resources.json"
        with path.open(encoding="utf-8") as handle:
            payload = json.load(handle)
        self.assertEqual(payload["meta"]["resource_count"], len(payload["resources"]))
        self.assertEqual(payload["meta"]["open_source_count"], sum(item["free_type"] == "open-source" for item in payload["resources"]))

    def test_generated_csv_matches_catalog(self) -> None:
        path = ROOT / "site" / "data" / "resources.csv"
        with path.open(encoding="utf-8", newline="") as handle:
            rows = list(csv.DictReader(handle))
        self.assertEqual(len(rows), len(load_resources()))
        self.assertEqual({row["id"] for row in rows}, {item["id"] for item in load_resources()})

    def test_generated_files_are_current(self) -> None:
        completed = subprocess.run(
            [sys.executable, str(SCRIPTS / "build.py"), "--check"],
            cwd=ROOT,
            capture_output=True,
            text=True,
            check=False,
        )
        self.assertEqual(completed.returncode, 0, completed.stderr)

    def test_every_free_type_has_a_review_target(self) -> None:
        free_types = {item["free_type"] for item in load_resources()}
        self.assertEqual(free_types, set(DEFAULT_MAX_AGE))

    def test_internal_links_resolve(self) -> None:
        self.assertEqual(check_internal_links(), [])


if __name__ == "__main__":
    unittest.main()
