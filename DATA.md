# Use the Free AI Atlas data

The catalog is designed for people and machines. Source records live in `data/resources/*.json`; generated exports are rebuilt deterministically.

## Public exports

- [JSON](site/data/resources.json) — complete bilingual records plus aggregate metadata.
- [CSV](site/data/resources.csv) — a flat comparison-friendly export.
- [JSON Schema](data/schema/resource.schema.json) — the validation contract.
- [Catalog health](STATS.md) — generated coverage and trust statistics.

On GitHub Pages, use:

- `https://arthurecodage.github.io/free-ai-atlas/data/resources.json`
- `https://arthurecodage.github.io/free-ai-atlas/data/resources.csv`

## Stability

The project is pre-1.0, so fields can still evolve. Breaking schema changes must be documented in `CHANGELOG.md` and proposed publicly.

Every record includes:

- bilingual descriptions and best-use guidance;
- category, free-access type, difficulty, platform, and deployment mode;
- account and payment-card requirements;
- commercial-use posture, privacy model, and software license;
- explicit limits and caveats;
- one official evidence source and a verification date.

## Rebuild and validate

```bash
python scripts/validate.py
python scripts/build.py
python scripts/build.py --check
python -m unittest discover -s tests -v
```

Generated files should never be edited directly.

## License

Catalog data and documentation are released under CC0-1.0. Repository code is MIT licensed. Provider trademarks, linked content, models, and datasets keep their own licenses.
