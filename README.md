# Cosmic Charms Bakery

Astro + Tailwind CSS + DaisyUI website for Cosmic Charms Bakery, deployed to GitHub Pages from the `astro` branch.

The previous Jekyll implementation remains in the repository as a reference.

## Stack

- **Astro** — static site generation and components
- **Tailwind CSS 4** — utility styling via `@tailwindcss/vite`
- **DaisyUI 5** — components and the custom `cosmic` theme
- **GitHub Actions** — build, preview artifact, and Pages deploy from `astro`

## Prerequisites

- Node.js 20+
- For private `@cosmic-charms` packages: `NODE_REGISTRY_TOKEN` in your environment (see `.npmrc`)
- Optional (Jekyll reference): Ruby 3.1+ and Bundler

## Install

```bash
npm install
```

## Development

```bash
npm start
```

Then open [http://127.0.0.1:4321](http://127.0.0.1:4321).

## Production build

```bash
npm run check   # Astro validation
npm run build   # writes dist/
npm run preview # serve dist locally
```

## GitHub Actions

| Workflow            | Trigger                    | Purpose                                      |
| ------------------- | -------------------------- | -------------------------------------------- |
| `astro-preview.yml` | push/PR to `astro`, manual | Build + upload `astro-site-preview` artifact |
| `deploy.yml`        | push to `astro`, manual    | Build + deploy `dist/` to GitHub Pages       |
| `astro-build.yml`   | reusable                   | Shared install, check, build, and uploads    |

Custom domain: `cosmiccharms.org` (`public/CNAME`). Site root has no project subpath.

### GitHub Pages settings (manual)

1. Repository **Settings → Pages**
2. Set **Source** to **GitHub Actions**
3. Confirm the custom domain is `cosmiccharms.org` (and DNS still points at GitHub Pages)
4. Push the `astro` branch (or run **Deploy GitHub Pages** via workflow_dispatch)

### Preview artifact

1. Open the **Astro Preview** workflow run on GitHub Actions
2. Download the `astro-site-preview` artifact
3. Unzip and open `index.html` with a local static server (for example `npx serve .`)

## Jekyll reference

```bash
bundle install
npm run jekyll:dev
```

Jekyll is no longer deployed from `main`.

## Design system

- Custom DaisyUI theme: `cosmic` (`data-theme="cosmic"` on `<html>`)
- Brand colors available as Tailwind utilities (`bg-navy-blue`, `text-lavender`, and so on)
- Fonts: **Aptly** (headings) and **Quicksand** (body), loaded from `public/assets/fonts/`
- Reusable utilities: `section-light`, `section-soft`, `section-dark`, `section-navy`, `section-spacing`, `celestial-surface`, `star-field`, `shadow-glow`, `shadow-soft`, `rounded-media`

Visual references live in `mockup/` (see `design/README.md`).
