# Verification policy

Free AI Atlas separates availability, evidence, and editorial judgment.

## What the dates mean

- `last_verified` means a person or reviewed automation inspected the official evidence and confirmed the catalog claim on that date.
- A successful daily link audit means only that a URL was reachable or intentionally access-controlled.
- The “latest verification” badge is the newest verified catalog record, not a claim that every entry was rechecked that day.

## Source hierarchy

1. Official pricing or plan documentation.
2. Official product documentation.
3. Current license in the official source repository.
4. Official public product interface when the information is not documented, with a review note.

Blogs, social posts, search snippets, generated summaries, and other catalogs are discovery inputs only.

## Review cadence

- Daily: link reachability and obvious source failures.
- Weekly: changed-page reports, newly discovered resources, and open audit issues.
- Every 30–45 days: volatile hosted free tiers and API limits.
- Every 90 days: stable open-source software entries, unless a license or ownership change is detected earlier.

## Automation boundaries

Automation may:

- check HTTP reachability and redirects;
- compare public source fingerprints;
- validate data and generated outputs;
- prepare evidence summaries;
- open an issue or pull request.

Automation must not independently merge changes to pricing, privacy, licensing, commercial use, or safety caveats.

## Confidence

- `high`: the official source directly supports the material claim.
- `medium`: official evidence exists but is dynamic, incomplete, or plan-dependent.
- `low`: the entry needs further review and should normally remain unpublished or marked for attention.

## Corrections

When an offer changes, preserve truth rather than appearances. Update the limits and evidence, change the status, or remove the entry. Never keep an outdated resource merely to maintain a catalog count.
