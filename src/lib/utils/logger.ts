/**
 * Logger utility for the rental-map application
 * Provides a unified way to log messages with different severity levels
 * Log level is controlled via environment variables
 */

// Log levels in order of severity
export enum LogLevel {
  NONE = 0,
  ERROR = 1,
  WARN = 2,
  INFO = 3,
  DEBUG = 4,
  TRACE = 5
}

// Default log level is INFO in production, DEBUG in development
const DEFAULT_LOG_LEVEL = process.env.NODE_ENV === 'production' ? LogLevel.INFO : LogLevel.DEBUG;

// Get log level from environment variable
const getLogLevel = (): LogLevel => {
  const envLogLevel = typeof window !== 'undefined' ?
    import.meta.env.VITE_LOG_LEVEL :
    process.env.VITE_LOG_LEVEL;

  if (!envLogLevel) return DEFAULT_LOG_LEVEL;

  switch (envLogLevel.toUpperCase()) {
    case 'NONE': return LogLevel.NONE;
    case 'ERROR': return LogLevel.ERROR;
    case 'WARN': return LogLevel.WARN;
    case 'INFO': return LogLevel.INFO;
    case 'DEBUG': return LogLevel.DEBUG;
    case 'TRACE': return LogLevel.TRACE;
    default: return DEFAULT_LOG_LEVEL;
  }
};

// Current log level
let currentLogLevel = getLogLevel();

// Override current log level (useful for testing)
export function setLogLevel(level: LogLevel): void {
  currentLogLevel = level;
}

// Check if a given log level should be logged
const shouldLog = (level: LogLevel): boolean => {
  return level <= currentLogLevel;
};

// Format log message with timestamp and context
const formatMessage = (context: string, ...args: any[]): any[] => {
  const timestamp = new Date().toISOString();
  return [`[${timestamp}] [${context}]`, ...args];
};

// Check if we're in browser context
const isBrowser = typeof window !== 'undefined';

// Logger interface
export interface Logger {
  error: (...args: any[]) => void;
  warn: (...args: any[]) => void;
  info: (...args: any[]) => void;
  debug: (...args: any[]) => void;
  trace: (...args: any[]) => void;
}

// Create a logger for a specific context
export function createLogger(context: string): Logger {
  return {
    error: (...args: any[]): void => {
      if (shouldLog(LogLevel.ERROR)) {
        // Only log in browser context to avoid server console logs
        if (isBrowser) {
          console.error(...formatMessage(`ERROR:${context}`, ...args));
        }
      }
    },

    warn: (...args: any[]): void => {
      if (shouldLog(LogLevel.WARN)) {
        if (isBrowser) {
          console.warn(...formatMessage(`WARN:${context}`, ...args));
        }
      }
    },

    info: (...args: any[]): void => {
      if (shouldLog(LogLevel.INFO)) {
        if (isBrowser) {
          console.info(...formatMessage(`INFO:${context}`, ...args));
        }
      }
    },

    debug: (...args: any[]): void => {
      if (shouldLog(LogLevel.DEBUG)) {
        if (isBrowser) {
          console.debug(...formatMessage(`DEBUG:${context}`, ...args));
        }
      }
    },

    trace: (...args: any[]): void => {
      if (shouldLog(LogLevel.TRACE)) {
        if (isBrowser) {
          console.log(...formatMessage(`TRACE:${context}`, ...args));
        }
      }
    }
  };
}

// Default logger (no context)
export const logger = createLogger('app');

// Export default logger methods for convenience
export const { error, warn, info, debug, trace } = logger; 