# Cayman Islands Inline Hockey Federation

Static website for **ciihf.org** — Astro + Tailwind CSS.

## Develop

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Content edits

Update JSON under `src/content/`:

| File | Purpose |
|------|---------|
| `site.json` | Mission, contacts, location, social |
| `age-groups.json` | Season age groups |
| `tournaments.json` | ECHO / TORHS / NARCh |
| `sponsors.json` | Current + historical sponsors |
| `alumni.json` | Past players |
| `board.json` | Governance / officers |

Photos: add files to `public/images/` (rights-cleared only).

Forms: replace Formspree `placeholder` IDs on Contact and Sponsors pages before launch.

## Deploy

GitHub Pages publishes the static `dist/` build from `main` via `.github/workflows/deploy.yml`.

Live site: https://mavrick11-123.github.io/ciihf/
