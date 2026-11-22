# Step 1: Project Foundation and Design System

I want to build the Cosmic Charms Bakery website using Jekyll, Liquid, Tailwind CSS, and DaisyUI, with deployment through GitHub Pages.

The attached image `design/cosmic-charms-homepage.png` is the primary visual reference for the website's design.

For this step, focus exclusively on inspecting the repository, establishing the project architecture, and configuring the development environment. Do not build the homepage sections yet.

## 1. Inspect the existing project

Before making changes:
- Inspect the existing repository structure.
- Identify existing dependencies and configurations.
- Determine whether Jekyll is already configured.
- Check for existing Tailwind CSS or DaisyUI configurations.
- Identify any existing image assets, logos, fonts, or reusable components.
- Check whether GitHub Pages deployment is already configured.

Preserve existing functionality and avoid unnecessary changes.

## 2. Establish the technology stack

The project must use:

- Jekyll for static site generation.
- Liquid for layouts, includes, and reusable templates.
- Tailwind CSS for styling.
- DaisyUI for reusable UI components.
- Minimal vanilla JavaScript where necessary.
- GitHub Actions for building and deploying the site to GitHub Pages.

Do not introduce React, Next.js, Vue, or other frontend frameworks.

Choose mutually compatible versions of Tailwind CSS and DaisyUI. Prefer a setup that is straightforward to maintain.

## 3. Configure the build pipeline

Set up the project so that:

- Jekyll builds the website.
- Tailwind compiles the CSS.
- DaisyUI styles are included in the compiled CSS.
- Development builds are easy to run locally.
- Production builds generate a deployable static website.
- GitHub Actions can build and deploy the website.

GitHub Pages must not be expected to compile Tailwind automatically.

Use a GitHub Actions workflow to handle the necessary build steps.

Account for Jekyll's `baseurl` and `relative_url` behavior so assets and links work when deployed to a GitHub Pages project repository.

Avoid unsupported GitHub Pages plugins.

## 4. Establish the design system

Create a consistent design system based on the supplied mockup.

### Color palette

Use these colors as a base:


// dark blues and purples
- navy-blue: oklch(0.273 0.120 275);
- navy-blue-dark: oklch(0.273 0.107 281);
- primary-purple: oklch(0.388 0.117 286);
- secondary-purple: oklch(0.441 0.118 288);
- medium-purple: oklch(0.414 0.149 305);

// pink purples
- pink-purple: oklch(0.545 0.172 336);
- light-purple: oklch(0.724 0.088 295);

// lavenders and neutrals
- lavender: oklch(0.892 0.034 284);
- soft-lavender: oklch(0.930 0.022 297);
- off-white: oklch(0.984 0.004 301);
- white: oklch(1.000 0.000 90);

// blues and teals
- light-blue: oklch(0.918 0.047 219);
- medium-blue: oklch(0.581 0.126 248);
- teal: oklch(0.431 0.091 234);

Configure a custom DaisyUI theme using these colors.

Do not use the default DaisyUI appearance.

### Typography

Use:
- Playfair Display or Cormorant Garamond for headings.
- Lato or Nunito Sans for body text.

Choose appropriate font weights and establish a consistent typography scale.

### Visual identity

The design should feel:
- Whimsical and celestial.
- Elegant and polished.
- Magical without looking childish.
- Luxurious but approachable.

Establish reusable styling for:
- Buttons.
- Links.
- Cards.
- Rounded corners.
- Shadows.
- Section spacing.
- Decorative celestial elements.
- Light and dark section backgrounds.

## 5. Project structure

Establish a maintainable Jekyll structure.

Suggested organization:

- `_layouts/`
- `_includes/`
- `_data/`
- `assets/css/`
- `assets/js/`
- `assets/images/`
- `design/`
- `_config.yml`
- `index.html`
- `package.json`
- `Gemfile`
- `.github/workflows/`

Adjust this structure if the existing project already has an established convention.

Use reusable Liquid includes for common elements.

Keep content separate from presentation where practical.

## 6. Development experience

Provide convenient commands for:
- Installing dependencies.
- Running the local development server.
- Compiling Tailwind CSS.
- Building the production website.

Configure file watching and live reload where practical.

## 7. Completion criteria

When finished:

1. The project should build successfully.
2. Jekyll and Tailwind should work together.
3. DaisyUI should be configured with the custom theme.
4. GitHub Actions should be configured for deployment.
5. The project structure should be ready for homepage development.
6. Document the commands needed to run and build the project.

Do not begin building the homepage sections yet.

Start by presenting your repository findings and implementation plan. Then implement the foundation and verify that the build works.
