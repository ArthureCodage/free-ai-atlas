# Free AI Atlas contributor instructions

Free AI Atlas is a trust-first catalog. Accuracy is more important than size or publishing cadence.

## Non-negotiable rules

- Use an official product page, official documentation, or the official repository as the primary source for every claim.
- Never mark a resource as verified after checking only that its link responds.
- Do not silently invent exact quotas. If a provider publishes dynamic limits, say that the limits are dynamic.
- Store catalog facts in `data/resources/*.json`; generated Markdown and site data are outputs, not sources.
- Treat commercial-use and model-license claims carefully. Use `check-license` when licenses vary by model or artifact.
- Automated research may open an issue or pull request with evidence. It must not merge material pricing, privacy, or licensing claims without review.

## Required checks

Run these before proposing a change:

```bash
python scripts/validate.py
python scripts/build.py --check
python -m unittest discover -s tests -v
```

For network-backed source checks, also run:

```bash
python scripts/audit_links.py --report reports/link-audit.json --summary reports/link-audit.md
```
