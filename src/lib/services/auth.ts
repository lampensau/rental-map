import {
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut as firebaseSignOut,
  type User as FirebaseUser,
  type Auth
} from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { db, isFirebaseConfigured } from './firebase';
import { writable, derived } from 'svelte/store';
import type { AuthUser } from '$lib/types';
import { createLogger } from '$lib/utils/logger';
import { initializeApp } from 'firebase/app';

// Create logger for this module
const logger = createLogger('auth');

// Auth stores
export const user = writable<AuthUser | null>(null);
export const authLoading = writable<boolean>(true);
export const authError = writable<string | null>(null);

// Derived stores
export const isAuthenticated = derived(user, ($user) => $user !== null);
export const isUserAdmin = derived(user, ($user) => $user?.isAdmin === true);

// Initialize Firebase Auth if configured
let authInstance: Auth | null = null;
if (isFirebaseConfigured()) {
  try {
    // Get Firebase configuration from environment variables
    const firebaseConfig = {
      apiKey: import.meta.env.VITE_FIREBASE_API_KEY || '',
      authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || '',
      projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || '',
      storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || '',
      messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || '',
      appId: import.meta.env.VITE_FIREBASE_APP_ID || ''
    };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    authInstance = getAuth(app);
    logger.debug('Firebase Auth initialized');
  } catch (error) {
    logger.error('Failed to initialize Firebase Auth:', error);
  }
}

// Initialize auth state listener
export function initAuth() {
  if (!isFirebaseConfigured() || !authInstance) {
    authLoading.set(false);
    return () => { };
  }

  const unsubscribe = onAuthStateChanged(authInstance, async (firebaseUser) => {
    try {
      if (firebaseUser) {
        // Fetch additional user data from Firestore
        const userData = await getUserData(firebaseUser);
        user.set(userData);
      } else {
        user.set(null);
      }
    } catch (error) {
      logger.error('Error processing auth state change:', error);
      user.set(null);
      if (error instanceof Error) {
        authError.set(error.message);
      } else {
        authError.set('Unknown authentication error');
      }
    } finally {
      authLoading.set(false);
    }
  });

  return unsubscribe;
}

// Get user data from Firestore
async function getUserData(firebaseUser: FirebaseUser): Promise<AuthUser> {
  try {
    const userRef = doc(db, 'users', firebaseUser.uid);
    const userDoc = await getDoc(userRef);

    if (userDoc.exists()) {
      const userData = userDoc.data();
      return {
        uid: firebaseUser.uid,
        email: firebaseUser.email || '',
        isAdmin: userData.isAdmin || false
      };
    }
  } catch (error) {
    logger.error('Error fetching user data:', error);
  }

  // Return basic user if no additional data found
  return {
    uid: firebaseUser.uid,
    email: firebaseUser.email || '',
    isAdmin: false
  };
}

// Get custom claims from the user
async function getUserClaims(user: FirebaseUser): Promise<Record<string, any>> {
  if (!user) return {};

  try {
    // Get the ID token with fresh claims
    const token = await user.getIdTokenResult(true);
    return token.claims || {};
  } catch (error) {
    return {};
  }
}

// Sign in with email and password
export async function signIn(email: string, password: string): Promise<void> {
  logger.debug(`Attempting to sign in with email: ${email}`);

  if (!authInstance) {
    logger.error('Auth instance not initialized');
    return Promise.reject(new Error('Auth service not available'));
  }

  try {
    await signInWithEmailAndPassword(authInstance, email, password);
    logger.debug('Sign in successful');
    return Promise.resolve();
  } catch (error) {
    logger.error('Sign in failed:', error);
    return Promise.reject(error);
  }
}

// Sign out
export async function signOut(): Promise<void> {
  if (!authInstance) {
    logger.error('Auth instance not initialized');
    return Promise.reject(new Error('Auth service not available'));
  }

  try {
    await firebaseSignOut(authInstance);
    logger.debug('Sign out successful');
  } catch (error) {
    logger.error('Sign out failed:', error);
    throw error;
  }
}

// Initialize auth on client-side
if (typeof window !== 'undefined') {
  initAuth();
}

// Check if a user is an admin
export function checkIsAdmin(user: AuthUser | null): boolean {
  return !!user?.isAdmin;
} 