import { test, BrowserContext, Page, devices } from '@playwright/test'

test('Emulator test', async ({ browser }) => {
  const context: BrowserContext = await browser.newContext({ ...devices['iPhone 15'] })
  const page: Page = await context.newPage()
  await page.goto('https://playwright.dev/')
  await page.waitForTimeout(5000)
})
