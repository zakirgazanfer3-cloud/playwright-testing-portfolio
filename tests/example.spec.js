const { test, expect } = require('@playwright/test');

test('homepage has the correct title', async ({ page }) => {
await page.goto('https://playwright.dev/');
await expect(page).toHaveTitle(/Playwright/);
});

test('getting started link is visible', async ({ page }) => {
await page.goto('https://playwright.dev/');
await expect(
page.getByRole('link', { name: 'Get started' })
).toBeVisible();
});