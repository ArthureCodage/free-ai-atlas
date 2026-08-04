# Evidence Review Queue

This document describes the weekly evidence review process for Free AI Atlas.

## Purpose

Hosted free plans change faster than open-source repositories. Regular evidence reviews ensure our catalog remains accurate and trustworthy.

## Review schedule

- **Weekly**: Review 5-10 resources with oldest evidence
- **Monthly**: Full category health review
- **Quarterly**: Comprehensive catalog audit

## How to review

1. Pick a resource from the review queue (issues labeled `needs-verification`)
2. Check the official source (pricing page, documentation, repository)
3. Verify the following claims:
   - Free tier availability and limits
   - Account and card requirements
   - Privacy and data handling
   - Commercial use rights
   - License accuracy
4. Update the `last_verified` date if claims are still accurate
5. Open a PR with your changes
6. Reference the issue in your PR description

## What to update

### If claims are accurate
- Update `last_verified` to today's date
- Add a comment to the issue confirming verification

### If claims have changed
- Update the resource file with new information
- Update `last_verified` to today's date
- Add a comment to the issue describing the change
- If the change is major (free tier removed, limits drastically reduced), consider removing the resource

### If you cannot verify
- Add a comment explaining what you checked and what you couldn't verify
- Leave the `last_verified` date unchanged
- Consider adding `confidence: "low"` if you're uncertain

## Review queue

Issues labeled `needs-verification` are automatically added to the queue. Check the [issues page](https://github.com/ArthureCodage/free-ai-atlas/issues?q=is%3Aissue+is%3Aopen+label%3Aneeds-verification) for current items.

## Evidence standards

See [VERIFICATION.md](VERIFICATION.md) for detailed evidence requirements.

## Recognition

Contributors who complete 5+ evidence reviews are recognized in monthly release notes and can become category owners.