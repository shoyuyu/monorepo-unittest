// eslint.config.mjs
import eslintPluginTypescript from '@typescript-eslint/eslint-plugin';
import eslintParser from '@typescript-eslint/parser';
import eslintPluginReact from 'eslint-plugin-react';
import eslintPluginPrettier from 'eslint-plugin-prettier';
import eslintConfigPrettier from 'eslint-config-prettier';

export default [
  {
    ignores: ["**/__tests__/**"]
  },
  {
    files: ["packages/*/src/**/*.{ts,tsx,js,jsx}"],
    languageOptions: {
      parser: eslintParser,
      parserOptions: {
        project: "./tsconfig.json",
        sourceType: "module"
      },
    },
    settings: {
      react: {
        version: "detect"
      },
    },
    plugins: {
      "@typescript-eslint": eslintPluginTypescript,
      "react": eslintPluginReact,
      "prettier": eslintPluginPrettier
    },
    rules: {
      ...eslintConfigPrettier.rules,
      "prettier/prettier": "error"
    }
  }
];
