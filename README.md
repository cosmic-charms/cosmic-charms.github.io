# Cosmic Charms Bakery Website

A Jekyll-based website for Cosmic Charms Bakery, featuring a whimsical cosmic theme with purple colors and starry backgrounds.

## Setup

1. Install Ruby and Bundler (if not already installed):
   ```bash
   gem install bundler
   ```

2. Install dependencies:
   ```bash
   bundle install
   ```

3. Run the Jekyll server locally:
   ```bash
   bundle exec jekyll serve
   ```

4. Visit `http://localhost:4000` in your browser

## GitHub Pages Deployment

This site is configured to work with GitHub Pages. To deploy:

1. Push this repository to GitHub
2. Go to your repository settings
3. Navigate to "Pages" in the sidebar
4. Select the branch (usually `main` or `master`) and folder (`/ (root)`)
5. GitHub Pages will automatically build and deploy your site

The site will be available at `https://[username].github.io/cosmic-charms.github.io` or your custom domain if configured.

## Project Structure

```
.
├── _config.yml          # Jekyll configuration
├── _includes/           # Reusable components (header, footer)
├── _layouts/            # Page layouts
├── assets/
│   ├── css/            # Stylesheets
│   └── js/             # JavaScript files
├── index.html          # Homepage
└── Gemfile             # Ruby dependencies
```

## Customization

- Edit `_config.yml` to update site information, contact details, and social media links
- Modify `assets/css/main.css` to change colors and styling
- Update `index.html` to modify homepage content
- Add new pages by creating HTML/Markdown files in the root directory

## Features

- Responsive design
- Product carousel with auto-play
- Newsletter signup forms
- Cosmic-themed styling with animated starry backgrounds
- Mobile-friendly navigation
