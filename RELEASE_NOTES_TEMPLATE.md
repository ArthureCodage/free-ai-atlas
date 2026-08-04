# Monthly Release Notes Template

Use this template to create monthly release notes for Free AI Atlas.

---

# Free AI Atlas — [Month Year] Release Notes

## Summary

[1-2 sentence summary of the month's highlights]

## New resources

- **[Resource Name]** — [Brief description] ([category])
- **[Resource Name]** — [Brief description] ([category])

## Updated resources

- **[Resource Name]** — [What changed] ([contributor])

## Removed resources

- **[Resource Name]** — [Reason for removal]

## Community contributions

- [Contributor 1] — [What they contributed]
- [Contributor 2] — [What they contributed]

## Category health

| Category | Resources | Verified this month | Owner |
|---|---|---|---|
| [Category] | [Count] | [Count] | [Owner] |

## Evidence review

- Resources verified: [Count]
- Resources updated: [Count]
- Resources flagged: [Count]

## Translation updates

- [Language] translations: [Count] files updated

## Looking ahead

- [Next month's priorities]
- [Upcoming changes]

## Thank you

Thanks to all contributors who helped improve Free AI Atlas this month!

---

## How to use this template

1. Copy this template to a new file: `RELEASE_NOTES_YYYY_MM.md`
2. Fill in the sections with actual data
3. Update the CHANGELOG.md with a link to the release notes
4. Create a GitHub release with the release notes
5. Share on social media and discussions

## Data sources

- **New resources**: Check `git log` for new files in `data/resources/`
- **Updated resources**: Check `git log` for changes to existing files
- **Contributions**: Check GitHub contributors page
- **Category health**: Run `python scripts/build.py` and check `STATS.md`
- **Evidence review**: Check issues labeled `needs-verification`