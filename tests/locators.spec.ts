// locators - preferably to use built-in locators firstly
// https:// playwright.dev/docs/locators
import { test, expect, Locator } from '@playwright/test'
test('Locators test', async ({ page }) => {
  // to block advertisements
  await page.route(/fundingchoicesmessages\.google\.com|googlesyndication\.com|doubleclick\.net|googletagservices\.com/, route => route.abort())
  // page.getByRole()
  // to understand roles, run:
  // npx playwright codegen https://automationexercise.com/
  // then it shows to you possible locator values
  // roles can be used for buttons, a, li, etc.
  await page.goto('https://automationexercise.com/')
  await page.getByRole('link', { name: 'Products' }).click()
  // page.getByText()
  // can be found by partial text name
  // used for non-interactive elements, like div, p, span, etc.
  await expect(page.getByText('All Products')).toBeVisible()
  // substring can be used here as well or regexp! trim() is done automatically
  // full text is: Copyright © 2021 All rights reserved
  await expect(page.getByText('reserved')).toBeVisible()
  // await page.getByPlaceholder() - strictly placeholder!
  await page.getByPlaceholder('Search Product').fill('Blue Top')
  // page.getByTestId() - in playwright.config.ts specify, how ids look like! `testIdAttribute`
  await page.getByTestId('submit_search').click()
  await page.waitForURL('**?search=**')
  // check, that only one product is visible after clicking
  await expect(page.locator('div.single-products')).toHaveCount(1)
  // page.getByAltText() search by alt text  in img attr

  // how to save locator
  // it's only instruction, how to find element -> no await is needed there!!
  const imgLocator: Locator = page.getByAltText('ecommerce website products')
  // expected, that img of product is visible
  await expect(imgLocator).toBeVisible()
  // getByLabel() - very convenient to fill in form
})
