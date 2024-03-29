module.exports = {
  parserOptions: {
    ecmaVersion: 2019, // 支援 ECMAScript2019
    sourceType: 'module', // 使用 ECMAScript ****module
    ecmaFeatures: {
      jsx: true, // 支援 JSX
      experimentalObjectRestSpread: true,
    },
  },
  // 加上 ts 相關規則
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      extends: [
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:import/recommended',
      ],
      parser: '@typescript-eslint/parser',
      plugins: ['@typescript-eslint'],
    },
  ],
  extends: ['plugin:import/typescript', 'plugin:tailwindcss/recommended'],
  // 加上 no console log 規則
  rules: {
    'no-console': 'error',
    // Tailwind CSS
    'tailwindcss/no-contradicting-classname': 'error',
    'tailwindcss/classnames-order': 'off',
    'tailwindcss/enforces-negative-arbitrary-values': 'error',
    'tailwindcss/enforces-shorthand': 'off',
    'tailwindcss/migration-from-tailwind-2': 'error',
    'tailwindcss/no-arbitrary-value': 'off', // Disable this rule for arbitrary values
    'tailwindcss/no-custom-classname': 'off', // Disable this rule for custom classnames
  },
  settings: {
    tailwindcss: {
      // These are the default values but feel free to customize
      callees: ['classnames', 'clsx', 'ctl'],
      config: 'tailwind.config.js',
      cssFiles: ['**/*.css', '!**/node_modules', '!**/.*', '!**/dist', '!**/build'],
      cssFilesRefreshRate: '5_000',
      removeDuplicates: true,
      whitelist: [],
    },
    // 整合 prettier 和解決 prettier 衝突問題
    plugins: ['prettier'],
  },
};
