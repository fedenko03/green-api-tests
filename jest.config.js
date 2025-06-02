module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    testMatch: ['**/__tests__/**/*.test.ts'],
    forceExit: true,
    maxWorkers: 1,
    testRunner: 'jest-circus/runner'
  };
  