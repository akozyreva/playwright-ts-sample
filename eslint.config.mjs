import { defineConfig } from 'eslint/config'
import tseslint from 'typescript-eslint'
import stylistic from '@stylistic/eslint-plugin'

export default defineConfig(
  {
    ignores: [ 'node_modules', 'playwright-report', 'test-results', 'eslint.config.mjs' ],
  },
  tseslint.configs.recommendedTypeChecked,
  // Full stylistic formatting set (indentation, spacing, etc.)
  stylistic.configs.customize({
    quotes: 'single',
    semi: false,
    indent: 2,
  }),
  {
    languageOptions: {
      parserOptions: {
        project: './tsconfig.json',
        tsconfigRootDir: import.meta.dirname,
      },
    },
    rules: {
      '@stylistic/array-bracket-spacing': [ 'error', 'always' ],
      // to put await where is needed
      '@typescript-eslint/no-floating-promises': 'error',
    },
  },
)
