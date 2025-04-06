// Global setup for all tests
import { vi, beforeEach, afterEach } from 'vitest';
import '@testing-library/jest-dom';

// Setup browser-like environment for testing
Object.defineProperty(window, 'IS_BROWSER_ENVIRONMENT', { value: true });

// Set environment explicitly for Svelte 5
// @ts-ignore - Override process.env to ensure Svelte uses browser runtime
process.env.SVELTE_BUILD_ENVIRONMENT = 'browser';

// Expand Element prototype for Svelte 5 behavior
if (!Element.prototype.addEventListener) {
  Element.prototype.addEventListener = vi.fn();
}
if (!Element.prototype.removeEventListener) {
  Element.prototype.removeEventListener = vi.fn();
}

// Ensure document has required methods for JSDOM
if (!document.createRange) {
  document.createRange = () => {
    const range = {
      setStart: vi.fn(),
      setEnd: vi.fn(),
      commonAncestorContainer: {
        nodeName: 'BODY',
        ownerDocument: document,
      },
      createContextualFragment: (html: string) => {
        const div = document.createElement('div');
        div.innerHTML = html;
        return div.children[0];
      },
    };
    return range as unknown as Range;
  };
}

// Mock fetch for API calls
global.fetch = vi.fn();

// Mock window resize events
global.ResizeObserver = vi.fn().mockImplementation(() => ({
  observe: vi.fn(),
  unobserve: vi.fn(),
  disconnect: vi.fn()
}));

// Mock IntersectionObserver
global.IntersectionObserver = vi.fn().mockImplementation(() => ({
  observe: vi.fn(),
  unobserve: vi.fn(),
  disconnect: vi.fn()
}));

// Mock Element.scrollIntoView
Element.prototype.scrollIntoView = vi.fn();

// Mock matchMedia
global.matchMedia = vi.fn().mockImplementation((query) => ({
  matches: false,
  media: query,
  onchange: null,
  addListener: vi.fn(),
  removeListener: vi.fn(),
  addEventListener: vi.fn(),
  removeEventListener: vi.fn(),
  dispatchEvent: vi.fn()
}));

// Create a test container
beforeEach(() => {
  const testContainer = document.createElement('div');
  testContainer.id = 'test-container';
  document.body.appendChild(testContainer);
});

// Clean up test container
afterEach(() => {
  const testContainer = document.getElementById('test-container');
  if (testContainer) {
    document.body.removeChild(testContainer);
  }
}); 