// @ts-check
import { test, expect } from '@playwright/test';

test('should load page', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle('Vite + Vue');

  
});
