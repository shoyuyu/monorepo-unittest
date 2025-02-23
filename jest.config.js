module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ['**/__tests__/**/*.ts', '**/?(*.)+(spec|test).ts'],
  moduleFileExtensions: ['ts', 'js'],
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageReporters: ['html', 'text', 'text-summary', 'lcov'],
  projects: [
    '<rootDir>/packages/react-test',
    '<rootDir>/packages/typescript-test'
  ],
  reporters: [
    'default',
    'jest-html-reporters'
  ],
};
