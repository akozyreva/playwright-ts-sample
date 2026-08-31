import { test } from '@playwright/test'

test.describe.configure({ mode: 'serial' })
// sequent execution of tests. one by one.
// if one fails, all fail

test.beforeAll(() => {
  console.log('Before all')
})
test('first good', () => {
  console.log('Log in shop')
})
test('second flaky', () => {
  console.log(' Proceed to checkout')
})
test('third good', () => {
  console.log('Make payment')
})
