# Cosmic Charms Bakery

Jekyll + Liquid + Tailwind CSS + DaisyUI website for Cosmic Charms Bakery, deployed to GitHub Pages.

## Stack

- **Jekyll** — static site generation
- **Liquid** — layouts and includes
- **Tailwind CSS 4** — utility styling
- **DaisyUI 5** — components and the custom `cosmic` theme
- **GitHub Actions** — build CSS + Jekyll, then deploy to Pages

GitHub Pages does not compile Tailwind. CSS is built with Node before Jekyll runs.

## Prerequisites

- Ruby 3.1+ and Bundler
- Node.js 20+
- For private `@cosmic-charms` packages: `NODE_REGISTRY_TOKEN` in your environment (see `.npmrc`)

## Install

```bash
bundle install   # installs Ruby gems into ./vendor/bundle
npm install
```

## Development

Compile Tailwind in watch mode and serve Jekyll with live reload:

```bash
npm start
```

Then open [http://127.0.0.1:4000](http://127.0.0.1:4000).

Useful individual commands:

```bash
npm run css:watch      # Tailwind watch
npm run css:build      # Minified Tailwind build
npm run jekyll:serve   # Jekyll only (requires a prior CSS build)
npm run jekyll:build   # Jekyll production build only
```

## Production build

```bash
npm run build
```

Output is written to `_site/`.

## Design system

- Custom DaisyUI theme: `cosmic` (`data-theme="cosmic"` on `<html>`)
- Brand colors available as Tailwind utilities (`bg-navy-blue`, `text-lavender`, and so on)
- Fonts: **Aptly** (headings) and **Quicksand** (body), loaded from `assets/fonts/`
- Reusable utilities: `section-light`, `section-soft`, `section-dark`, `section-navy`, `section-spacing`, `celestial-surface`, `star-field`, `shadow-glow`, `shadow-soft`, `rounded-media`

Visual references live in `mockup/` (see `design/README.md`).

## Deploy

Pushes to `main` run `.github/workflows/deploy.yml`:

1. Install Ruby and Node dependencies
2. Build Tailwind CSS
3. Build Jekyll with `JEKYLL_ENV=production`
4. Deploy `_site` to GitHub Pages

Repository settings should use **GitHub Actions** as the Pages source. Keep the `NODE_REGISTRY_TOKEN` secret available for installing private npm packages.

Custom domain: `cosmiccharms.org` (see `CNAME`). `baseurl` is empty for this organization Pages site.
