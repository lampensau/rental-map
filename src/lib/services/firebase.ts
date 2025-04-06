import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// Firebase configuration (replace with your own values)
// You'd typically store these in environment variables
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || '',
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || '',
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || '',
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || '',
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || '',
  appId: import.meta.env.VITE_FIREBASE_APP_ID || ''
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