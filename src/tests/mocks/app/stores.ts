import { readable } from 'svelte/store';

// Mock for $app/stores

/**
 * Mock page store
 */
export const page = readable({
  url: new URL('http://example.com'),
  params: {},
  route: { id: '' },
  status: 200,
  error: null,
  data: {},
  form: null
});

/**
 * Mock navigating store
 */
export const navigating = readable(null);

/**
 * Mock updated store
 */
export const updated = readable({}); 