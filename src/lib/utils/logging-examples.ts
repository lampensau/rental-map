/**
 * Logging Examples - How to use the logger utility
 * 
 * This file provides examples of how to use the logger utility
 * in different parts of your application.
 */

import { createLogger, logger, LogLevel } from './logger';

// Example 1: Using the default logger
export function exampleDefaultLogger() {
  // Different log levels
  logger.error('This is an error message');
  logger.warn('This is a warning message');
  logger.info('This is an info message');
  logger.debug('This is a debug message');
  logger.trace('This is a trace message');

  // With objects or multiple arguments
  logger.info('User logged in:', { userId: 'user123', timestamp: new Date() });
  logger.debug('Database query completed', 'Results:', 5, 'Execution time:', '120ms');
}

// Example 2: Creating a context-specific logger
export function exampleContextSpecificLogger() {
  // Create a logger for a specific component or module
  const userServiceLogger = createLogger('UserService');

  userServiceLogger.info('User service initialized');
  userServiceLogger.debug('Processing user data', { count: 10 });

  // Another component with its own logger
  const authLogger = createLogger('Auth');
  authLogger.info('Authentication service ready');
  authLogger.error('Failed login attempt', { username: 'test@example.com', reason: 'Invalid password' });
}

// Example 3: In a Svelte component
/*
<script lang="ts">
  import { createLogger } from '$lib/utils/logger';
  
  // Create a logger for this component
  const logger = createLogger('ProfileComponent');
  
  onMount(() => {
    logger.debug('Profile component mounted');
  });
  
  function handleSave() {
    logger.info('Saving profile data');
    // Save logic...
    
    try {
      // Some operation that might fail
    } catch (error) {
      logger.error('Failed to save profile', error);
    }
  }
</script>
*/

// Example 4: Setting log level programmatically
export function exampleSetLogLevel() {
  // Override the log level (useful for testing or debugging)
  import('./logger').then(({ setLogLevel, LogLevel }) => {
    // Set to ERROR only - will suppress INFO, DEBUG and TRACE
    setLogLevel(LogLevel.ERROR);

    // Later set back to default level
    setLogLevel(LogLevel.DEBUG);
  });
}

// Example 5: Recommended log levels for different environments
/*
  // .env.development
  VITE_LOG_LEVEL=DEBUG  // Shows debug, info, warn, error
  
  // .env.test
  VITE_LOG_LEVEL=WARN   // Shows only warn, error
  
  // .env.production
  VITE_LOG_LEVEL=ERROR  // Shows only error
*/ 