# Testing Strategy for Rental Map Application

This document outlines the testing strategy for the Rental Map Svelte 5 application.

## Testing Layers

The application uses a multi-layered testing approach:

1. **Unit Tests**: Testing individual components and services in isolation
2. **Integration Tests**: Testing interactions between connected parts (stores and components)
3. **End-to-End Tests**: Testing the full application flow from a user perspective

## Testing Tools

- **Vitest**: For unit and integration tests
- **@testing-library/svelte**: For component testing with Vitest
- **Playwright**: For end-to-end testing

## Test Files Organization

Each test file is placed alongside the code it tests, using the following naming conventions:

- Unit/Component tests: `*.svelte.test.ts` for Svelte components, `*.test.ts` for other files
- E2E tests: Located in the `e2e/` directory with `*.test.ts` naming pattern

## Running Tests

```bash
# Run unit tests
npm run test:unit

# Run unit tests in watch mode
npm run test:unit -- --watch

# Run end-to-end tests
npm run test:e2e

# Run all tests
npm run test
```

## Test Coverage

The tests cover the following key areas:

### 1. Component Testing

- **RentalApp.svelte**: Tests loading states, error handling, and main component rendering
- **ManufacturerFilter.svelte**: Tests dropdown behavior and filter selection
- **ProductFilter.svelte**: Tests dropdown behavior and filter selection
- **Search.svelte**: Tests search input functionality
- **AdminModal.svelte**: Tests authentication flow and admin panel tabs

### 2. Store Testing

- **rentalStore.ts**: Tests store initialization, filter logic, and derived stores

### 3. End-to-End Testing

- Full application flow testing
- Filter interactions
- Search functionality
- Map interactions
- Admin panel access and authentication

## Mocking Strategy

- **API Calls**: Mocked at the service level
- **Firebase/Firestore**: Service calls are mocked
- **Store Subscriptions**: Store subscribes are mocked to provide test data

## E2E Test Reliability

For end-to-end tests, we follow these principles to ensure reliable testing:

1. **Resilient Selectors**: Use specific and stable selectors that are less likely to change:
   - Prefer `input#email` over `getByText('Email')`
   - Use attribute selectors like `button[type="submit"]` where possible
   - Use CSS selectors like `.manufacturer-dropdown .custom-scrollbar`

2. **Appropriate Waiting Strategies**:
   - Wait for elements to be visible before interacting with them
   - Use longer timeouts (e.g., 10000ms) for network-dependent operations
   - Add explicit waits for UI state changes after actions

3. **Handle Animation/Transitions**:
   - Add small timeouts where needed for animations to complete
   - Wait for loading indicators to disappear before proceeding

4. **Avoid Brittle Assertions**:
   - Don't assert on exact text when content may change with data
   - Use more general assertions like `.not.toBeEmpty()` for dynamic content
   - Avoid tests that depend on specific data values that may change

5. **Handle CSS/Styling Challenges**:
   - Be aware of elements that intercept clicks and adjust tests accordingly
   - Test visibility and presence rather than trying to interact with problematic elements

6. **Test Simplification**:
   - Break down complex tests into simpler, more focused ones
   - Validate core functionality without requiring exact behavior

## Debugging Tests

When tests fail, you can:

1. Run in watch mode with `npm run test:unit -- --watch` to quickly iterate
2. Use `console.log` statements (removed before committing)
3. For E2E tests, use Playwright's debugging tools:
   ```bash
   # Run with UI mode
   npx playwright test --ui
   ```
4. Use `page.pause()` in Playwright tests to debug interactively

## Continuous Integration

Tests are automatically run on each PR to ensure code quality. All tests must pass before merging.

## Future Improvements

- Increase test coverage for admin functionality
- Add visual regression testing for UI components
- Implement testing for Firebase authentication 