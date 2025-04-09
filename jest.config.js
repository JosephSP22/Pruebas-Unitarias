module.exports = {
  preset: 'jest-expo',
  setupFiles: ['./jest.setup.js'],
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?react-native|@react-native(-community)?|expo(nent)?|@expo(nent)?/.*|@expo-google-fonts/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|native-base|react-native-svg|react-native-vector-icons)',
  ],
  moduleNameMapper: {
    '^react-native-vector-icons/MaterialIcons$': '<rootDir>/__mocks__/materialIconsMock.js',
    '^react-native/Libraries/Animated/NativeAnimatedHelper$': '<rootDir>/node_modules/react-native-reanimated/mock'
  },
  setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
  testEnvironment: 'node',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node']
};