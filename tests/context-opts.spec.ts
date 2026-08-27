import { test, expect, BrowserContext } from '@playwright/test'

test('Context opts test', async ({ browser }) => {
  const context1: BrowserContext = await browser.newContext({
    // dark theme
    colorScheme: 'dark',
    // permissions
    permissions: [
      'notifications',
    ],
    locale: 'ru-RU',

  })
  const myPage = await context1.newPage()
  await myPage.goto('https://www.google.com/')
  await myPage.waitForTimeout(5000)
})
