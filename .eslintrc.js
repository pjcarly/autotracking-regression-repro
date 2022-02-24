module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module',
  },
  extends: [
    'eslint:recommended',
    'plugin:ember/recommended', // or 'plugin:ember/base'
  ],
  env: {
    browser: true,
  },
  plugins: ['ember'],
  rules: {
    'require-yield': 'off',
    'no-console': 'off'
  },
  globals: {
    window: true,
  },
};
