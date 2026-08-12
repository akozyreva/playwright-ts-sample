import { test, expect } from '@playwright/test'

// fixture - global variable: page, browser)

test('Verify page title', async ({ page }) => {
  await page.goto('https://automationexercise.com/')
  // if expect works with page or locator, it's required
  // to have await

  // it resolves the promise, but doesn't wait
  // promise is like task
  page.title().then((title: string) => {
    console.log(`1 title: ${title}`)
  })
  // it's the correct one, because there's guarantee, that it will be done step by step
  const title: string = await page.title()
  console.log(`2 title: ${title}`)
  await expect(page).toHaveTitle('Automation Exercise')
})

test('Invalid title', async ({ page }) => {
  await page.goto('https://automationexercise.com/')
  await expect(page).toHaveTitle('Wrong title')
})
