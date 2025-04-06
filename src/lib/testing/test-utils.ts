import { vi } from 'vitest';

/**
 * Resets all mocks between tests
 */
export function resetAllMocks() {
  vi.resetAllMocks();
}

/**
 * Creates a mock store with a subscribe function that returns an unsubscribe function
 * 
 * @param initialValue The initial value for the store
 * @returns A mock store object with a subscribe function
 */
export function createStoreMock<T>(initialValue: T) {
  // Create an unsubscribe function that will be returned from subscribe
  const unsubscribe = vi.fn();

  return {
    subscribe: vi.fn((callback) => {
      callback(initialValue);
      return unsubscribe;
    }),
    // Make the unsubscribe directly accessible for testing
    unsubscribe
  };
}

/**
 * Simulates a click event on an element without using the 'view' property
 * that causes issues in JSDOM tests
 * 
 * @param element The element to click
 */
export function simulateClick(element: HTMLElement) {
  // Create a MouseEvent without the 'view' property that fails in JSDOM
  const event = new MouseEvent('click', {
    bubbles: true,
    cancelable: true
  });

  element.dispatchEvent(event);
}

/**
 * Mock the $app/stores module
 * @param params URL parameters to mock
 * @returns Mock page store
 */
export function mockAppStores(params: Record<string, string> = {}) {
  const searchParams = new URLSearchParams(params);
  const url = new URL('https://example.com');
  Object.entries(params).forEach(([key, value]) => {
    url.searchParams.set(key, value);
  });

  return {
    page: createStoreMock({
      url,
      params: {},
      route: { id: '/' },
      status: 200,
      error: null,
      data: {},
      form: undefined,
      searchParams
    })
  };
}

/**
 * Mock a Svelte component
 * @returns A mock Svelte component
 */
export function mockSvelteComponent() {
  return {
    $destroy: vi.fn(),
    $on: vi.fn()
  };
}

/**
 * Prepare the DOM for testing Svelte components
 */
export function setupTestDOM(): void {
  // Clean up any previous test container
  if (!document.getElementById('test-container')) {
    document.body.innerHTML = '<div id="test-container"></div>';
  }
}

/**
 * Simulate an input event on an input element
 * @param element Input element
 * @param value Value to set
 */
export function simulateInput(element: HTMLInputElement, value: string): void {
  if (!element) return;

  // Set the value
  element.value = value;

  // Dispatch an input event
  const inputEvent = new Event('input', {
    bubbles: true,
    cancelable: true
  });
  element.dispatchEvent(inputEvent);
}

/**
 * Simulate a change event on a select or input element
 * @param element Element to trigger change on
 */
export function simulateChange(element: HTMLElement): void {
  if (!element) return;

  const changeEvent = new Event('change', {
    bubbles: true,
    cancelable: true
  });
  element.dispatchEvent(changeEvent);
}

/**
 * Wait for any pending promises to resolve
 */
export async function flushPromises(): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, 0));
} 