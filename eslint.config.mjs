import tseslint from 'typescript-eslint'
import stylistic from '@stylistic/eslint-plugin'

export default tseslint.config(
  {
    ignores: [ 'node_modules', 'playwright-report', 'test-results' ],
  },
  ...tseslint.configs.recommended,
  // Full stylistic formatting set (indentation, spacing, etc.)
  stylistic.configs.customize({
    quotes: 'single',
    semi: false,
    indent: 2,
  }),
  {
    rules: {
      '@stylistic/array-bracket-spacing': [ 'error', 'always' ],
    },
  },
)
