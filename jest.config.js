module.exports = {
  roots: ['<rootDir>/'],
  collectCoverageFrom: ['**/src/**/*.{js,jsx}', '!**/node_modules/**', '!**/vendor/**'],
  testEnvironment: 'jsdom',
  testMatch: ['**/__tests__/**/*.+(js|jsx)', '**/?(*.)+(spec|test).+(js|jsx)'],
  transform: {
    '^.+\\.(js|jsx)$': 'esbuild-jest'
  },
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    '\\.(jpg|jpeg|png|gif|webp)$': '<rootDir>/__mocks__/fileMock.js',
    '\\.svg\\?react$': '<rootDir>/__mocks__/svgReactComponentMock.js'
  },
  setupFilesAfterEnv: ['<rootDir>/setupTests.js']
};
