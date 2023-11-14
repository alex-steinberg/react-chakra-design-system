/// <reference types="vitest/globals" />

import "@testing-library/jest-dom";

const matchMediaMock = (query: string): any => {
  return {
    matches: false,
    media: query,
    onchange: null,
    addListener: () => {}, // Deprecated but still in use in older code
    removeListener: () => {}, // Deprecated but still in use in older code
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => {},
  };
};

beforeEach(() => {
  vi.spyOn(window, "matchMedia").mockImplementation(matchMediaMock);
});
