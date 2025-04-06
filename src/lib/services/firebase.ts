import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// At the top of the file
declare global {
  interface Window {
    ENV?: {
      VITE_FIREBASE_API_KEY: string;
      VITE_FIREBASE_AUTH_DOMAIN: string;
      VITE_FIREBASE_PROJECT_ID: string;
      VITE_FIREBASE_STORAGE_BUCKET: string;
      VITE_FIREBASE_MESSAGING_SENDER_ID: string;
      VITE_FIREBASE_APP_ID: string;
    };
  }
}

// Firebase configuration
const firebaseConfig = {
  apiKey: typeof window !== 'undefined' && window.ENV?.VITE_FIREBASE_API_KEY || import.meta.env.VITE_FIREBASE_API_KEY || '',
  authDomain: typeof window !== 'undefined' && window.ENV?.VITE_FIREBASE_AUTH_DOMAIN || import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || '',
  projectId: typeof window !== 'undefined' && window.ENV?.VITE_FIREBASE_PROJECT_ID || import.meta.env.VITE_FIREBASE_PROJECT_ID || '',
  storageBucket: typeof window !== 'undefined' && window.ENV?.VITE_FIREBASE_STORAGE_BUCKET || import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || '',
  messagingSenderId: typeof window !== 'undefined' && window.ENV?.VITE_FIREBASE_MESSAGING_SENDER_ID || import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || '',
  appId: typeof window !== 'undefined' && window.ENV?.VITE_FIREBASE_APP_ID || import.meta.env.VITE_FIREBASE_APP_ID || ''
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