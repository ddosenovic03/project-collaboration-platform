# Versioning and release process

This project uses [Semantic Versioning](https://semver.org/) in the form `MAJOR.MINOR.PATCH`.

## Version numbers

- `MAJOR` is increased for incompatible API, database, configuration, or behavior changes. Example: `1.4.2` to `2.0.0`.
- `MINOR` is increased for backward-compatible functionality. Example: `1.0.0` to `1.1.0`.
- `PATCH` is increased for backward-compatible bug fixes and small corrections. Example: `1.1.0` to `1.1.1`.

Pre-release versions may use suffixes such as `1.2.0-alpha.1`, `1.2.0-beta.1`, or `1.2.0-rc.1`.

## Version sources

The following values must contain the same release version:

- `/VERSION`
- `/frontend/package.json`
- `/frontend/package-lock.json`
- `/backend/package.json`
- `/backend/package-lock.json`

`CHANGELOG.md` contains the human-readable history of notable changes. Small internal refactors do not need separate entries unless they affect users, contributors, security, deployment, or compatibility.

## During development

Add notable upcoming changes to the `Unreleased` section of `CHANGELOG.md` under one of these headings:

- `Added` for new functionality.
- `Changed` for changes to existing behavior.
- `Deprecated` for functionality that will be removed later.
- `Removed` for removed functionality.
- `Fixed` for bug fixes.
- `Security` for security-related changes.

## Release checklist

1. Decide whether the release is major, minor, or patch.
2. Move the relevant entries from `Unreleased` to a new dated version section.
3. Update all version sources listed above.
4. Run frontend lint and build checks.
5. Run backend build and automated tests when available.
6. Commit the release using a message such as `chore(release): v1.1.0`.
7. Create and push an annotated Git tag.
8. Create a GitHub Release from the tag and copy the matching changelog section into the release notes.

Example commands:

```bash
git tag -a v1.1.0 -m "Release v1.1.0"
git push origin v1.1.0
```

GitHub creates downloadable source archives for every release tag, which makes each published version independently accessible.

## Commit messages

Using a consistent commit format makes future automated release notes easier:

```text
feat: add real-time project notifications
fix: prevent duplicate project invitations
refactor: extract authorization policy helpers
docs: update local development instructions
chore(release): v1.2.0
```
