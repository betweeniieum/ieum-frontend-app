module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es2021: true
  },
  parser: '@typescript-eslint/parser', // TypeScript 파서 사용
  parserOptions: {
    ecmaVersion: 12, // 최신 ECMAScript 기능을 사용하도록 설정
    sourceType: 'module', // ES 모듈 구문을 사용하도록 설정
    ecmaFeatures: {
      jsx: true // JSX 지원 활성화
    }
  },
  extends: [
    'plugin:react/recommended',
    'plugin:@next/next/recommended',
    './config/eslint/prettier/.eslintrc.js'
  ],
  plugins: ['@typescript-eslint'],
  rules: {
    'react/react-in-jsx-scope': 'off' // Next.js에서는 필요 없음
  },
  settings: {
    react: {
      version: 'detect' // 설치된 React 버전을 자동으로 감지
    }
  }
};
