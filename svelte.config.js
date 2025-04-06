import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		// Using static adapter for GitHub Pages
		adapter: adapter({
			// default options
			pages: 'build',
			assets: 'build',
			fallback: 'index.html',
			precompress: false,
			strict: true
		}),
		// Add this for GitHub Pages (replace 'rental-map' with your repo name)
		paths: {
			base: process.env.NODE_ENV === 'production' ? '/rental-map' : '',
			assets: process.env.NODE_ENV === 'production' ? '/rental-map' : ''
		}
	}
};

export default config;
