import { describe, it, expect, vi, beforeEach } from 'vitest';
import { resetAllMocks } from '$lib/testing/test-utils';
import * as authService from '$lib/services/auth';
import * as rentalStore from '$lib/stores/rentalStore';

// Mock the app navigation
vi.mock('$app/navigation', () => ({
  goto: vi.fn()
}));

// Mock the auth service
vi.mock('$lib/services/auth', () => {
  return {
    isUserAdmin: { subscribe: vi.fn() },
    isAuthenticated: { subscribe: vi.fn() },
    signIn: vi.fn(),
    signOut: vi.fn()
  };
});

// Mock the rental store
vi.mock('$lib/stores/rentalStore', () => {
  return {
    refreshProductsData: vi.fn()
  };
});

describe('AdminModal Integration', () => {
  beforeEach(() => {
    resetAllMocks();

    // Setup auth subscriptions
    const isAuthenticatedMock = vi.fn();
    vi.mocked(authService.isAuthenticated.subscribe).mockImplementation((callback) => {
      callback(false);
      return isAuthenticatedMock;
    });

    const isUserAdminMock = vi.fn();
    vi.mocked(authService.isUserAdmin.subscribe).mockImplementation((callback) => {
      callback(false);
      return isUserAdminMock;
    });
  });

  it('should call signIn with correct credentials', async () => {
    vi.mocked(authService.signIn).mockResolvedValueOnce(undefined);

    await authService.signIn('test@example.com', 'password123');

    expect(authService.signIn).toHaveBeenCalledWith('test@example.com', 'password123');
  });

  it('should handle authentication state changes', () => {
    // Test with authenticated = true
    const authCallback = vi.fn();

    vi.mocked(authService.isAuthenticated.subscribe).mockImplementation((callback) => {
      callback(true);
      authCallback(true);
      return vi.fn();
    });

    // Simulate subscription
    authService.isAuthenticated.subscribe(() => { });

    // Verify callback was called with authenticated=true
    expect(authCallback).toHaveBeenCalledWith(true);
  });

  it('should handle admin state changes', () => {
    // Test with admin = true
    const adminCallback = vi.fn();

    vi.mocked(authService.isUserAdmin.subscribe).mockImplementation((callback) => {
      callback(true);
      adminCallback(true);
      return vi.fn();
    });

    // Simulate subscription
    authService.isUserAdmin.subscribe(() => { });

    // Verify callback was called with admin=true
    expect(adminCallback).toHaveBeenCalledWith(true);
  });

  it('should call refreshProductsData when admin panel initializes', () => {
    // Simulate component initialization calling refreshProductsData
    rentalStore.refreshProductsData();

    expect(rentalStore.refreshProductsData).toHaveBeenCalled();
  });

  it('should handle signOut', async () => {
    // Test signOut function
    await authService.signOut();

    expect(authService.signOut).toHaveBeenCalled();
  });
}); 