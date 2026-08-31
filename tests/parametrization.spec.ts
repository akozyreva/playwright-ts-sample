// for huge data is usually used file
// for js - JSON is standard
import { test, expect } from '@playwright/test'
import testData from '@/test-data/data.json'

// testdata
const searchItems: string[] = [ 'book', 'laptop' ]

test.describe('searching items', () => {
  searchItems.forEach((item) => {
    test(`login test ${item}`, async ({ page }) => {
      await page.goto('https://demowebshop.tricentis.com/')
      await page.locator('#small-searchterms').fill(item)
      await page.locator('input[value=Search]').click()
      await expect.soft(page.locator('h2 a').nth(0)).toContainText(item, { ignoreCase: true })
    })
  })
})

// JSON example
testData.forEach((user) => {
  test(`login with ${user.email}`, () => {
    console.log(user.email)
    console.log(user.password)
  })
})
