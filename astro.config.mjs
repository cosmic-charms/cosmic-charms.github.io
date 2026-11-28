import tailwindcss from '@tailwindcss/vite';
// @ts-check
import { defineConfig } from 'astro/config';

// GitHub Pages: org site cosmic-charms.github.io with custom domain cosmiccharms.org.
// Root base path (no project subpath). Keep CNAME in public/ for the custom domain.
export default defineConfig({
	output: 'static',
	site: 'https://cosmiccharms.org',
	trailingSlash: 'always',
	vite: {
		plugins: [tailwindcss()],
	},
});
