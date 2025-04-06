# End-to-End Tests for Rental Map Application

This directory contains end-to-end tests using Playwright that validate the application's functionality from a user perspective.

## Running Tests

```bash
# Run all e2e tests
npm run test:e2e

# Run with UI mode for interactive debugging
npx playwright test --ui

# Run a specific test file
npx playwright test rental-app.test.ts

# Run tests with headed browsers
npx playwright test --headed
```

## Test Structure

The tests follow these principles:

1. **Focus on core functionality**: Tests verify that key application features work, not implementation details
2. **Resilient selectors**: Tests use specific CSS selectors that are less likely to break with UI changes
3. **Appropriate waits**: Tests wait for elements to be visible and network operations to complete
4. **Simplified assertions**: Tests avoid brittle assertions on exact content that may change

## Common Issues and Solutions

- **Timeouts**: If tests are timing out, check if elements are actually visible in the UI or if they're being obscured
- **Click interception**: For elements that can't be clicked directly, look for containers or try force-clicking
- **Visual issues**: Use `page.pause()` to debug visual issues and check element states

## Maintaining Tests

When updating the application:

1. Run tests to see if they still pass
2. If tests fail, examine the UI changes and adjust selectors accordingly
3. Avoid testing for exact text content that may change between different app states
4. Focus on structure and functionality rather than visual details

## Best Practices

- Keep tests focused on user-visible functionality
- Test the happy path first, then add edge cases
- Avoid depending on specific test data
- Use the `page.pause()` method liberally when debugging
- Take screenshots during test development to understand the UI state 