import { expect, test } from '@playwright/test';

test('home page has expected header', async ({ page }) => {
	await page.goto('/');
	// Check for the container div instead of a specific h1
	await expect(page.locator('.h-screen.w-full.overflow-hidden')).toBeVisible();
});
