module.exports = {
  env: {
    browser: true,
    es2020: true
  },
  extends: [
    'plugin:react/recommended'
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 11,
    requireConfigFile: false,
    sourceType: 'module'
  },
  plugins: [
    'react'
  ],
  rules: {
  },
  parser: '@babel/eslint-parser',
  settings: {
    react: {
      version: 'detect'
    }
  }
}
