module.exports = {
  verbose: true,
  roots: [
    "<rootDir>/packages"
  ],
  moduleFileExtensions: [
    'js',
    'jsx',
    'json',
    'vue',
    'ts',
    'tsx'
  ],
  transform: {
    '^.+\\.vue$': 'vue-jest',
    '.+\\.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub',
    '^.+\\.(js|ts|tsx)$': 'ts-jest'
  },
  transformIgnorePatterns: [
    'node_modules',
  ],
  testPathIgnorePatterns: [
    '/build/',
    '/config/',
    '/data/',
    '/dist/',
    '/node_modules/',
    '/vendor/'
  ],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>packages/$1/src'
  },
  snapshotSerializers: [
    'jest-serializer-vue'
  ],
  testMatch: [
    '**/jest/*.spec.(js|jsx|ts|tsx)|__tests__/*.(js|jsx|ts|tsx)'
  ],
  testURL: 'http://localhost/',
  watchPlugins: [
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname'
  ]
}
