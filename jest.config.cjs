// jest.config.js
module.exports = {
  transform: {
    "^.+\\.[t|j]sx?$": "babel-jest",
  },
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    '\\.(jpg|jpeg|png|gif|webp|svg|mp4)$': '<rootDir>/__mocks__/fileMock.js',
  },
  testEnvironment: "jsdom",
};
