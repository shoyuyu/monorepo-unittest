/** @type {import('ts-jest').JestConfigWithTsJest} **/
export default {
  testEnvironment: "jsdom", // nodeからjsdomに変更
  transform: {
    "^.+.tsx?$": ["ts-jest",{}],
  },
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.ts"], // テスト環境のセットアップファイル
  moduleNameMapper: {
    "\\.(css|less|sass|scss)$": "identity-obj-proxy", // CSSモジュールのモック
  },
};
