/**
This file is added here to mock the matchMedia function in the test environment.
More info here: https://jestjs.io/docs/manual-mocks#mocking-methods-which-are-not-implemented-in-jsdom
This was added when writing tests for ToggleThemeButton component. (See ToggleThemeButton.test.tsx file)
*/

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // deprecated
    removeListener: jest.fn(), // deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
})
