import { defineConfig } from '@playwright/test';

export default defineConfig({
	webServer: {
		command: 'npm run build && npm run preview',
		port: 4173,
		reuseExistingServer: !process.env.CI
	},
	testDir: 'e2e',
	// Adjust timeout for all tests to be more realistic
	timeout: 30000,
	// Allow tests to retry automatically on failure
	retries: process.env.CI ? 2 : 0,
	// Add longer expect timeout for assertions
	expect: {
		timeout: 10000
	},
	// Use a consistent viewport
	use: {
		viewport: { width: 1280, height: 720 },
		// Slow down actions for local debugging
		launchOptions: {
			slowMo: process.env.CI ? 0 : 100
		},
		// Take screenshots on failure
		screenshot: 'only-on-failure'
	},
	// Run tests in parallel in CI but serially locally
	workers: process.env.CI ? undefined : 1,
	// Add nice HTML reporter
	reporter: [
		['html', { open: 'never' }],
		['list']
	]
});
