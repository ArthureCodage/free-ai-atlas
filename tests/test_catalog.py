from __future__ import annotations

import json
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

    def test_generated_site_payload_is_valid_json(self) -> None:
        path = ROOT / "site" / "data" / "resources.json"
        with path.open(encoding="utf-8") as handle:
            payload = json.load(handle)
        self.assertEqual(payload["meta"]["resource_count"], len(payload["resources"]))

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
