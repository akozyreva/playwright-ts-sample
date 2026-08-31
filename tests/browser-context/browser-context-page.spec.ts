import { test, chromium, Browser, BrowserContext, Page } from '@playwright/test'

test('Browser, context, page', async () => {
  // create browser
  const browser: Browser = await chromium.launch()
  console.log(browser.contexts())
  // create context
  const context1: BrowserContext = await browser.newContext()
  const context2: BrowserContext = await browser.newContext()

  // create page
  const page1: Page = await context1.newPage()
  const page2: Page = await context2.newPage()
  await page1.goto('https://www.saucedemo.com/')
  await page2.goto('https://www.saucedemo.com/')
  await page1.waitForTimeout(5000)
  await page2.waitForTimeout(5000)
  await context1.close()
  await context2.close()
})
