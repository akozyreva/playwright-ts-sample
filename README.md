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

Run test file with browser:

```bash
npx playwright test tests/my-test.spec.ts --headed
```

Run test by test name:

```bash
npx playwright test -g "Invalid title"
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

## Allure reports

Test results are collected by the `allure-playwright` reporter (configured in
`playwright.config.ts`) into the `allure-results/` folder on every run.

Requires the `allure` CLI and Java. On macOS:

```bash
brew install allure
```

Homebrew installs a keg-only OpenJDK, so add it to your `PATH` (once):

```bash
echo 'export PATH="/opt/homebrew/opt/openjdk/bin:$PATH"' >> ~/.zshrc
```

Build a single-file HTML report from the latest results and open it:

```bash
npm run report
```

Run the tests and build the report in one command (the report is built even if
tests fail, so you can inspect the failures):

```bash
npm run test:report
```

## Linting & formatting

ESLint (with `@stylistic`) enforces the code style: single quotes, no
semicolons, spaces inside array brackets (`[ a ]`), 2-space indentation.

In VS Code, install the **ESLint** extension (`dbaeumer.vscode-eslint`) — code
is auto-fixed on save (already wired up in `.vscode/settings.json`).

## Writing tests

Test file names should be ended by `*.spec.ts`
By default `run` cmd works for all 3 def browsers from configuration. UI-mode uses installed Chromium.
Test names - use `my-test.spec.ts` syntax.

## Snippets

There's no extension for snippets, so there are custom ones (see file: `.vscode/playwright.code-snippets`)
