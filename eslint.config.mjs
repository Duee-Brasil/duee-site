import path from 'node:path'
import { fileURLToPath } from 'node:url'

import { FlatCompat } from '@eslint/eslintrc'
import js from '@eslint/js'
import typescriptEslintEslintPlugin from '@typescript-eslint/eslint-plugin'
import tsParser from '@typescript-eslint/parser'
import prettier from 'eslint-plugin-prettier'
import react from 'eslint-plugin-react'
import jest from 'eslint-plugin-jest'
import simpleImportSort from 'eslint-plugin-simple-import-sort'
import unusedImports from 'eslint-plugin-unused-imports'
import storybook from 'eslint-plugin-storybook'
import globals from 'globals'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
})

export default [
  {
    ignores: [
      '**/*.yaml',
      '**/*.yml',
      '**/*.config.js',
      '**/.next/',
      '**/out/',
      '**/node_modules/',
      '**/.vscode/',
      '**/public/',
      '**/.storybook/',
      '**/package.json',
      '**/package-lock.json',
      '**/tsconfig.json',
      'src/data/generated-hooks/react.tsx',
      'src/data/types/types.ts',
    ],
  },
  ...compat.extends(
    'plugin:@typescript-eslint/recommended',
    'next/core-web-vitals',
    'prettier',
    'next/typescript',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
    'plugin:react-hooks/recommended',
    'eslint:recommended'
  ),
  ...storybook.configs['flat/recommended'],
  {
    plugins: {
      react,
      '@typescript-eslint': typescriptEslintEslintPlugin,
      'unused-imports': unusedImports,
      'simple-import-sort': simpleImportSort,
      prettier,
      jest,
    },

    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.jest,
        React: true,
        JSX: true,
        NodeJS: true,
      },

      parser: tsParser,
      ecmaVersion: 15,
      sourceType: 'module',

      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        project: './tsconfig.json',
      },
    },

    rules: {
      semi: 'off',
      'no-console': 'warn',
      'prettier/prettier': 'error',
      'react/react-in-jsx-scope': 'off',
      'react/jsx-uses-react': 'error',
      'react/jsx-uses-vars': 'error',
      'react/prop-types': 'off',
      'react-hooks/exhaustive-deps': 'warn',
      'react-hooks/rules-of-hooks': 'error',
      '@typescript-eslint/no-unused-vars': 'warn',
      '@typescript-eslint/no-var-requires': 'warn',
      'unused-imports/no-unused-imports': 'error',
      'react/jsx-sort-props': [
        'warn',
        {
          callbacksLast: true,
          shorthandFirst: true,
          noSortAlphabetically: false,
          reservedFirst: true,
        },
      ],
      // Descomente para verificar ciclos de importação.
      // Esta comentado pois demora muito, e como é executado a cada commit, atrapalha muito.
      // 'import/no-cycle': ['error', { ignoreExternal: true }],

      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': 'warn',
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-non-null-assertion': 'warn',
      'jest/no-identical-title': 'error',
      'jest/no-disabled-tests': 'warn',
      'jest/valid-expect': 'error',
    },
  },
  {
    files: ['src/test-utils/**'],
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
    },
  },
  {
    files: ['src/**/*.test.ts', 'src/**/*.test.tsx'],
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
    },
  },
]
