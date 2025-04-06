import { vi } from 'vitest';

// Mock for $app/navigation

/**
 * Mock goto function
 */
export const goto = vi.fn();

/**
 * Mock invalidate function
 */
export const invalidate = vi.fn();

/**
 * Mock pushState function
 */
export const pushState = vi.fn();

/**
 * Mock replaceState function
 */
export const replaceState = vi.fn(); 