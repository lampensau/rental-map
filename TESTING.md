# Testing Strategy for Rental Map Application

This document outlines the testing strategy for the Rental Map application, including how to write, run, and maintain tests.

## Testing Layers

The application uses multiple testing layers:

1. **Unit Tests**: For testing individual functions, stores, and utilities.
2. **Component Tests**: For testing UI components in isolation.
3. **End-to-End Tests**: For testing the application as a whole from a user perspective.

## Running Tests

### Unit Tests
Test individual functions and stores.

```bash
# Run all unit tests
npm run test:unit

# Watch mode for unit tests
npm run test:unit:watch
```

### Component Tests
Test Svelte components in isolation. 

```bash
# Run all component tests
npm run test:component

# Watch mode for component tests
npm run test:component:watch
```

### E2E Tests
End-to-end tests simulate user interactions with the application.

```bash
# Run all E2E tests
npm run test:e2e
```

### Run All Tests
```bash
# Run unit tests, component tests, and E2E tests
npm run test
```

## Test Structure Guidelines

### Unit Tests
- Place unit tests in the same directory as the file they test
- Name tests with the same name as the file they test, but with `.test.ts` suffix
- Focus on testing business logic, data transformation, and store behavior

### Component Tests
- Test components by rendering them and asserting on their output
- Use `@testing-library/svelte` to render components and interact with them
- Focus on component behavior rather than implementation details
- Use `vi.mock()` to mock dependencies

### E2E Tests
- Place E2E tests in the `e2e/` directory
- Focus on user flows and real-world usage scenarios
- Use page objects to abstract away implementation details

## Test Utilities

The application has several test utilities to make testing easier:

- `src/lib/testing/svelte-test-utils.ts`: Contains utilities for testing Svelte components

### Example: Mocking Svelte Stores

```typescript
import { createStoreWithValue } from '$lib/testing/svelte-test-utils';

// Mock a store with an initial value
const mockStore = createStoreWithValue({ count: 0 });

// Use in a test
vi.mock('$lib/stores/myStore', () => ({
  myStore: createStoreWithValue({ count: 0 })
}));
```

### Example: Component Testing

```typescript
import { renderSvelte, setupSvelteTestEnvironment, resetDOM } from '$lib/testing/svelte-test-utils';
import MyComponent from './MyComponent.svelte';

describe('MyComponent', () => {
  beforeEach(() => {
    resetDOM();
    setupSvelteTestEnvironment();
  });

  it('renders correctly', () => {
    renderSvelte(MyComponent, { prop1: 'value1' });
    // Make assertions with @testing-library/svelte
  });
});
```

## Best Practices

1. **Test Behavior, Not Implementation**: Focus on what the code does, not how it does it.
2. **Isolate Tests**: Each test should run independently without relying on other tests.
3. **Mock External Dependencies**: Use mocks for external services, APIs, and stores.
4. **Keep Tests Simple**: Each test should test one thing only.
5. **Use Descriptive Names**: Test names should describe what they're testing.

## Known Issues and Workarounds

1. **JSDOM and Svelte 5**: JSDOM has some issues with Svelte 5 components. Our test utilities in `svelte-test-utils.ts` help avoid these issues by providing proper setup and teardown functions.

2. **Mock Subscribe Functions**: Always make sure to return a function from mock subscribes to allow proper cleanup.

```typescript
vi.mocked(store.subscribe).mockImplementation((callback) => {
  callback(mockValue);
  return () => {}; // This is important for cleanup
});
```

3. **Document Event Mocking**: Click outside handlers and other document events need to be mocked to prevent memory leaks. Use the `setupSvelteTestEnvironment()` function to handle this automatically.

## Continuous Integration

Tests are run automatically on CI. Make sure all tests pass before submitting a PR. 