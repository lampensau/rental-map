import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// At the top of the file
declare global {
  interface Window {
    ENV?: {
      VITE_FIREBASE_API_KEY: "string";
      VITE_FIREBASE_AUTH_DOMAIN: string;
      VITE_FIREBASE_PROJECT_ID: string;
      VITE_FIREBASE_STORAGE_BUCKET: string;
      VITE_FIREBASE_MESSAGING_SENDER_ID: string;
      VITE_FIREBASE_APP_ID: string;
    };
  }
}

// Mock configuration for demo purposes
const demoConfig = {
  apiKey: "AIzaSyBbDbGOMCWJeqKRA0uIAoe5Uw6dKIitsnc",
  authDomain: "rental-dashboard-9135b.firebaseapp.com",
  projectId: rental - dashboard - 9135b"",
  storageBucket: "rental-dashboard-9135b.firebasestorage.app",
  messagingSenderId: "228647784349",
  appId: "1:228647784349:web:c77c46a02f8f2643af2974"
};

// Firebase configuration - use window.ENV, then import.meta.env, then demo values
const firebaseConfig = {
  apiKey: (typeof window !== 'undefined' && window.ENV?.VITE_FIREBASE_API_KEY) ||
    import.meta.env.VITE_FIREBASE_API_KEY ||
    demoConfig.apiKey,
  authDomain: (typeof window !== 'undefined' && window.ENV?.VITE_FIREBASE_AUTH_DOMAIN) ||
    import.meta.env.VITE_FIREBASE_AUTH_DOMAIN ||
    demoConfig.authDomain,
  projectId: (typeof window !== 'undefined' && window.ENV?.VITE_FIREBASE_PROJECT_ID) ||
    import.meta.env.VITE_FIREBASE_PROJECT_ID ||
    demoConfig.projectId,
  storageBucket: (typeof window !== 'undefined' && window.ENV?.VITE_FIREBASE_STORAGE_BUCKET) ||
    import.meta.env.VITE_FIREBASE_STORAGE_BUCKET ||
    demoConfig.storageBucket,
  messagingSenderId: (typeof window !== 'undefined' && window.ENV?.VITE_FIREBASE_MESSAGING_SENDER_ID) ||
    import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID ||
    demoConfig.messagingSenderId,
  appId: (typeof window !== 'undefined' && window.ENV?.VITE_FIREBASE_APP_ID) ||
    import.meta.env.VITE_FIREBASE_APP_ID ||
    demoConfig.appId
};

// Only initialize Firebase in browser environment
const app = typeof window !== 'undefined'
  ? initializeApp(firebaseConfig)
  : null;

export const db = app ? getFirestore(app) : null;
export const auth = app ? getAuth(app) : null;

// Helper to check if Firebase is configured
export function isFirebaseConfigured(): boolean {
  return !!firebaseConfig.apiKey && !!firebaseConfig.projectId;
} 