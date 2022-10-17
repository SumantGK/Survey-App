module.exports = {
  root: true,
  parser: '@babel/eslint-parser',
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:jsx-a11y/recommended',
    'plugin:react-hooks/recommended',
    'airbnb',
    'plugin:jest/recommended',
    'plugin:jest/style',
    'prettier',
    'plugin:@next/next/recommended',
    'plugin:prettier/recommended',
  ],
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true,
    jest: true,
    jasmine: true,
    'jest/globals': true,
  },
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
    babelOptions: {
      configFile: './babel.config.js',
    },
  },
  settings: {
    react: {
      version: 'detect',
    },
    next: {
      rootDir: '/new-csmart-selfcare/',
    },
    'import/resolver': {
      node: {
        paths: ['app'],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
    jest: {
      version: 27,
    },
  },
  plugins: [
    'react',
    'jsx-a11y',
    'import',
    'prettier',
    'react-hooks',
    'jest',
    'mui-unused-classes',
  ],
  rules: {
    '@next/next/no-html-link-for-pages': [0, '/pages/'],
    '@next/next/no-img-element': 'off',
    '@next/next/no-document-import-in-page': 'off',
    'react/no-unescaped-entities': 'off',
    '@next/next/no-page-custom-font': 'off',
    'react/jsx-no-undef': [0, { allowGlobals: true }],
    'no-console': ['error', { allow: ['log', 'error', 'info'] }],
    'prettier/prettier': 'error',
    'react/react-in-jsx-scope': 'off',
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'no-unused-expressions': ['error', { allowShortCircuit: true }],
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'no-unused-vars': [2, { args: 'after-used', argsIgnorePattern: '^_' }],
    'import/no-unresolved': [2, { caseSensitive: false }],
    'react/jsx-one-expression-per-line': 'off',
    'jsx-a11y/label-has-associated-control': 'off',
    'react/jsx-props-no-spreading': 'off',
    'jest/no-disabled-tests': 'warn',
    'jest/no-focused-tests': 'error',
    'jest/no-identical-title': 'error',
    'jest/prefer-to-have-length': 'warn',
    'jest/valid-expect': 'error',
    'react/prop-types': [2, { ignore: ['children', 'className', 'id'] }],
    'react/require-default-props': ['off', { forbidDefaultForRequired: true }],
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: ['Links'],
        specialLink: ['hrefLeft', 'hrefRight'],
        aspects: ['invalidHref', 'preferButton'],
      },
    ],
    'react/forbid-prop-types': [
      'error',
      {
        forbid: ['any'],
        checkContextTypes: true,
        checkChildContextTypes: true,
      },
    ],
    'react/jsx-curly-newline': 'off',
    'mui-unused-classes/unused-classes': 2,
    'max-lines': [
      'error',
      { max: 700, skipComments: true, skipBlankLines: true },
    ],
  },
};
