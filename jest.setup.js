import 'react-native-gesture-handler/jestSetup';

// Mock for react-native-reanimated
jest.mock('react-native-reanimated', () => ({
  default: {
    call: () => {},
  },
  createAnimatedComponent: (component) => component,
}));

// Simple mock for animations
jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper', () => ({
  addListener: jest.fn(),
  removeListener: jest.fn(),
  removeAllListeners: jest.fn(),
  dispatch: jest.fn(),
}), { virtual: true });

// Mock for react-navigation
jest.mock('@react-navigation/native', () => ({
  useNavigation: () => ({
    navigate: jest.fn(),
  }),
  useRoute: () => ({
    params: {},
  }),
}));

// Mock for expo-status-bar
jest.mock('expo-status-bar', () => ({
  StatusBar: jest.fn(),
}));

// Mock for MaterialIcons
jest.mock('react-native-vector-icons/MaterialIcons', () => 'Icon');