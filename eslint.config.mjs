import { defineConfig } from 'eslint/config'
import tseslint from 'typescript-eslint'
import stylistic from '@stylistic/eslint-plugin'

export default defineConfig(
  {
    // folders/files ESLint should never look at (build output, generated reports, its own config)
    ignores: [ 'node_modules', 'playwright-report', 'test-results', 'eslint.config.mjs' ],
  },
  // recommended TS rules that need real type info (catches things plain syntax rules can't, e.g. unsafe `any` usage)
  tseslint.configs.recommendedTypeChecked,
  // full stylistic formatting set (indentation, spacing, etc.)
  stylistic.configs.customize({
    quotes: 'single',
    semi: false,
    indent: 2,
  }),
  {
    languageOptions: {
      parserOptions: {
        // tells the type-aware rules above which tsconfig to pull type info from
        project: './tsconfig.json',
        tsconfigRootDir: import.meta.dirname,
      },
    },
    rules: {
      // require a space right inside [ ] — matches this project's style
      '@stylistic/array-bracket-spacing': [ 'error', 'always' ],
      // catches a missing `await` on a promise-returning call (e.g. a Playwright action fired but not awaited)
      '@typescript-eslint/no-floating-promises': 'error',
      // require function params to have an explicit type — TS can't infer these, so they'd silently become `any` without strict/this rule
      '@typescript-eslint/typedef': [ 'error', {
        parameter: true,
      } ],
    },
  },
)
