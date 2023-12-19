const esModules = [
  'other_modules_based_on_your_needs',
  // but mainly those 4 bellow
  'query-string',
  'decode-uri-component',
  'split-on-first',
  'filter-obj',
];

export default {
  preset: 'ts-jest',
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.{js,jsx,tsx,ts}'],
  coverageDirectory: 'coverage',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleNameMapper: {
    'node_modules/(.*)': 'ts-jest',
    'src/(.*)': 'babel-jest',
    '^.+\\.(css|less|scss)$': 'babel-jest',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': 'babel-jest'
  },
  transform: {
    '^.+\\.[t|j]sx?$': 'babel-jest',
    '^.+\\.svg$': 'babel-jest',
    '^.+\\.ts?$': 'ts-jest',
    'node_modules/query-string/.+\\.(j|t)sx?$': 'ts-jest',
    '^.+\\.(js|jsx|ts|tsx)$': 'ts-jest'

  },
  moduleDirectories: ['node_modules', '<rootDir>/src/'],
  transformIgnorePatterns: esModules.length ? [`/node_modules/(?!${esModules.join('|')})`] : [],
};