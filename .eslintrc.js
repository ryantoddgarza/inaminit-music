const off = 0;
const error = 2;

module.exports = {
  root: true,
  env: {
    es2021: true,
    node: true,
    browser: true,
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  extends: [
    'airbnb',
    'prettier',
    'plugin:import/errors',
    'plugin:import/warnings',
  ],
  plugins: ['@typescript-eslint', 'prettier', 'import'],
  settings: {
    'import/resolver': {
      'babel-module': {},
      'alias': {
        map: [
          ['@components', './packages/site/src/components'],
          ['@resources', './packages/site/src/resources'],
          ['@styles', './packages/site/src/styles'],
        ],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
    'react': {
      version: 'detect',
    },
  },
  rules: {
    'import/prefer-default-export': off,
    'no-unreachable': error,
    'no-useless-return': error,
    'prettier/prettier': error,
    'quote-props': [error, 'consistent'],
    'react/jsx-filename-extension': [
      error,
      { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
    ],
    'react/require-default-props': [
      error,
      { ignoreFunctionalComponents: true },
    ],
    'import/extensions': [
      error,
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
  },
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      parser: '@typescript-eslint/parser',
      rules: {
        'no-undef': 'off',
        // https://github.com/typescript-eslint/typescript-eslint/issues/2540
        'no-use-before-define': off,
        '@typescript-eslint/no-use-before-define': error,
      },
    },
  ],
};
