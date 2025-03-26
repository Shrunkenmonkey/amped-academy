module.exports = {
  extends: 'next',
  rules: {
    // Disable rules that are causing deployment issues
    'react/no-unescaped-entities': 'off',
    '@typescript-eslint/no-unused-vars': ['warn', { 
      argsIgnorePattern: '^_',
      varsIgnorePattern: '^_',
    }],
    '@next/next/no-img-element': 'warn', // Downgrade from error to warning
  },
}; 