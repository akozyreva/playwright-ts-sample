import { test, expect, BrowserContext } from '@playwright/test'
test('page fixture test', async ({ page }) => {
  await page.goto('https://demowebshop.tricentis.com/')
  await page.getByText('Register').click()
  // it's regexp, it matches word register
  await expect(page).toHaveURL(/register/)
})

test('context fixture test', async ({ context }) => {
  const myPage = await context.newPage()
  await myPage.goto('https://demowebshop.tricentis.com/')
  await myPage.getByText('Register').click()
  // it's regexp, it matches word register
  await expect(myPage).toHaveURL(/register/)
})

test('browser fixture test', async ({ browser }) => {
  const context1: BrowserContext = await browser.newContext()
  const myPage = await context1.newPage()
  await myPage.goto('https://demowebshop.tricentis.com/')
  await myPage.getByText('Register').click()
  // it's regexp, it matches word register
  await expect(myPage).toHaveURL(/register/)

  const context2: BrowserContext = await browser.newContext()
  const myPage2 = await context2.newPage()
  await myPage2.goto('https://demowebshop.tricentis.com/')
  await myPage2.getByText('Register').click()
  // it's regexp, it matches word register
  await expect(myPage2).toHaveURL(/register/)
})
