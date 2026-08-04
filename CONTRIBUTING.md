# Contributing to Free AI Atlas

Thank you for helping make zero-cost AI easier to understand. The catalog values accurate, durable evidence over the number of entries.

## Before proposing a resource

A resource belongs here when it offers meaningful ongoing value without mandatory payment. It must have an official source that confirms the relevant claim.

Do not submit:

- short trials or expiring promotional credits as ongoing free access;
- leaked credentials, shared accounts, piracy, or quota bypasses;
- referral-only promotions;
- affiliate links;
- copied marketing claims without official evidence;
- model or software listings whose license cannot be identified.

## Fast contribution paths

- **A limit changed:** use the “Report a changed free offer” issue form.
- **A new resource exists:** use the “Propose a resource” issue form.
- **You already verified it:** open a pull request with one JSON file and the official source.

## Add a catalog record

1. Copy a similar file in `data/resources/`.
2. Name it exactly after its `id`, for example `example-tool.json`.
3. Fill both English and French description fields. A maintainer can help improve the French in review.
4. Link `source.url` directly to official pricing, documentation, or the official repository.
5. Set `last_verified` to the date you personally checked the claim, not the date you opened the pull request.
6. Run:

```bash
python scripts/validate.py
python scripts/build.py
python scripts/build.py --check
python -m unittest discover -s tests -v
```

7. Commit the source record and generated files together.

## Evidence requirements

| Claim | Acceptable evidence |
|---|---|
| Hosted free plan | Official pricing or plan documentation |
| Exact quota | Official current limits page or authenticated product page described in the PR |
| Open-source license | Current official repository license file |
| Commercial use | Explicit license or terms; otherwise use `depends` or `check-license` |
| Privacy | Official privacy/data-control documentation, scoped to the listed plan |

Third-party articles can help discovery but cannot be the primary evidence.

## Pull request expectations

- Keep one logical catalog change per PR when possible.
- Explain what you personally verified.
- Do not update `last_verified` for unrelated resources.
- Do not mark a claim verified because a link checker returned HTTP 200.
- Disclose material conflicts of interest, including employment or ownership.
- Expect maintainers to narrow descriptions or reject low-value duplication.

By contributing data or documentation, you agree to release that contribution under CC0-1.0. Code contributions are accepted under MIT.

## Ways to own a lane

Recurring contributors can take responsibility for one category, one language, documentation, accessibility, or link-verification triage. Start with a focused issue, document the official sources you checked, and keep uncertain claims explicit.

Contributors are recognized in GitHub history and in milestone release notes; see [CONTRIBUTORS.md](CONTRIBUTORS.md).
