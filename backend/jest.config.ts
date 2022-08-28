import type { Config } from '@jest/types'

const config: Config.InitialOptions = {
  preset: '@shelf/jest-mongodb',
  roots: ['<rootDir>/src'],
  coverageDirectory: '.coverage',
  collectCoverageFrom: [
    '<rootDir>/src/**/*.ts',
    '!<rootDir>/src/*.d.ts',
    '!<rootDir>/src/**/index.ts',
    '!<rootDir>/src/global-vars.ts',
    '!<rootDir>/src/main/functions/**/handler.ts',
  ],
  testEnvironment: 'node',
  testMatch: ['**/*.spec.ts', '**/*.test.ts'],
  testPathIgnorePatterns: ['<rootDir>/node_modules/'],
  moduleNameMapper: {
    '[$]/(.*)': '<rootDir>/src/$1'
  },
  transform: {
    '.+\\.ts$': 'ts-node'
  },
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
}

export default config