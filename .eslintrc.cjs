module.exports = {
  'env': {
    'node': true,
    'es2021': true
  },
  'extends': [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  'overrides': [
  ],
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    'ecmaVersion': 'latest'
  },
  'plugins': [
    'react',
    '@typescript-eslint',
    'react-refresh',
    'react-hooks',
    // @MUI eslint
    'mui-path-imports',
  ],
  'rules': {
    'quotes': [
      'error',
      'single'
    ],
    'semi': [
      'error',
      'always'
    ],
    'indent': ['warn', 2],
    'no-multiple-empty-lines': 1,
    'no-trailing-spaces': 1,
    'react/react-in-jsx-scope': 'off',
    '@typescript-eslint/no-empty-interface': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    'no-empty-pattern': 'off',
    'linebreak-style': 'off',
    'no-empty': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/ban-types': 'off',
    '@typescript-eslint/semi': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    'react-refresh/only-export-components': 'warn',
    // @mui eslint
    'no-restricted-imports': [
      'error',
      {
        'patterns': ['@mui/*/*/*']
      }
    ],
    'mui-path-imports/mui-path-imports': 'error'
  }
};
