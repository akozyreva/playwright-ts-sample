// locators - preferably to use built-in locators firstly
// https:// playwright.dev/docs/locators
import { test, expect } from '@playwright/test'
test('Locators test', async ({ page }) => {
  // to block advertisements
  await page.route(/fundingchoicesmessages\.google\.com|googlesyndication\.com|doubleclick\.net|googletagservices\.com/, route => route.abort())
  // page.getByRole()
  // to understand roles, run:
  // npx playwright codegen https://automationexercise.com/
  // then it shows to you possible locator values
  await page.goto('https://automationexercise.com/')
  await page.getByRole('link', { name: 'Products' }).click()
  // page.getByText()
  await expect(page.getByText('All Products')).toBeVisible()
  // await page.getByPlaceholder() - strictly placeholder!
  await page.getByPlaceholder('Search Product').fill('Blue Top')
  // page.getByTestId() - in playwright.config.ts specify, how ids look like! `testIdAttribute`
  await page.getByTestId('submit_search').click()
  // check, that only one product is visible after clicking
  await expect(page.locator('div.single-products')).toHaveCount(1)
  // page.getByAltText() search by alt text  in img attr
  // expected, that img of product is visible
  await expect(page.getByAltText('ecommerce website products')).toBeVisible()
})
