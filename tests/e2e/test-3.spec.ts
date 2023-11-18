import { test, expect } from '@playwright/test';
// import { expect as vtExpect, test as vtTest } from 'vitest'


test.skip("should login and logout", async ({ page }) => {
  // test.setTimeout(3000)

  await page.goto('/');
  await expect(page).toHaveScreenshot();

  await page.getByRole('link', { name: 'Login' }).click();
  await expect(page).toHaveScreenshot();

  await page.getByLabel('Email address').click();
  await page.getByLabel('Email address').fill('test@example.com');
  await page.getByLabel('Password').click();
  await page.getByLabel('Password').fill('password');
  await page.getByRole('button', { name: 'Sign in' }).click();
  await expect(page).toHaveScreenshot();

  await page.getByRole('heading', { name: 'Dashboard' }).click();
  await page.getByText('Logout').click();
  await expect(page).toHaveScreenshot();

  await page.getByRole('heading', { name: 'Sign in to your account' }).click();
});


// test.describe('login page', () => {
//   test('should show error message on invalid email address', async ({ page }) => {
//     await page.goto('http://localhost:9000/login');
//     await page.getByLabel('Email address').click();
//     await page.getByLabel('Email address').fill('no a valid email');
//     await page.getByRole('button', { name: 'Sign in' }).click();
//     await expect(page).toHaveScreenshot();
//   });

//   test('should not show error message on valid email address', async ({ page }) => {
//     await page.goto('/login');
//     await page.getByLabel('Email address').click();
//     await page.getByLabel('Email address').fill('tes@example.com');
//     await page.getByRole('button', { name: 'Sign i' }).click();
//     await expect(page).toHaveScreenshot();
//   });
// });