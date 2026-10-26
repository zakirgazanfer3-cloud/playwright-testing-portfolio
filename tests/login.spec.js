const { test, expect } = require('@playwright/test');

test('login page displays correctly', async ({ page }) => {
await page.goto('https://www.saucedemo.com/');

await expect(page.locator('[data-test="username"]')).toBeVisible();
await expect(page.locator('[data-test="password"]')).toBeVisible();
await expect(page.locator('[data-test="login-button"]')).toBeVisible();
});