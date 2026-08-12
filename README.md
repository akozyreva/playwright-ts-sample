# playwright-sample-ts

## Getting started

Inside that directory, you can run several commands:

```bash
npx playwright test
```

Run specific test file:

```bash
npx playwright test tests/my-test.spec.ts
```

Runs the end-to-end tests.

```bash
npx playwright test --ui
```

Starts the interactive UI mode.

```bash
npx playwright test --project=chromium
```

Runs the tests only on Desktop Chrome.

```bash
npx playwright test example
```

Runs the tests in a specific file.

```bash
npx playwright test --debug
```

Runs the tests in debug mode.

```bash
npx playwright codegen
```

Auto generate tests with Codegen.

## Writing tests

Test file names should be ended by `*.spec.ts`
By default `run` cmd works for all 3 def browsers from configuration. UI-mode uses installed Chromium.
Test names - use `my-test.spec.ts` syntax.

## Snippets

There's no extension for snippets, so there are custom ones (see file: `.vscode/playwright.code-snippets`)
