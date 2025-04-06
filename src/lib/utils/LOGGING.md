# Logging System Documentation

## Overview

The application uses a centralized logging system that provides:

- Consistent log formatting across the application
- Configurable log levels (ERROR, WARN, INFO, DEBUG, TRACE)
- Context-aware logging for better debugging
- Environment-based configuration
- Timestamps for all log entries

## Log Levels

The system supports the following log levels in order of severity:

1. **NONE (0)** - No logging at all
2. **ERROR (1)** - Critical errors that require immediate attention
3. **WARN (2)** - Warning conditions that should be addressed
4. **INFO (3)** - General information about application progress (default in production)
5. **DEBUG (4)** - Detailed information for debugging (default in development)
6. **TRACE (5)** - Extremely detailed tracing information

Each level includes all the levels above it. For example, setting the level to INFO will also show ERROR and WARN messages.

## Configuration

### Environment Variables

Configure the logging level using the `VITE_LOG_LEVEL` environment variable:

```
# .env or .env.local
VITE_LOG_LEVEL=DEBUG
```

Valid values are: `NONE`, `ERROR`, `WARN`, `INFO`, `DEBUG`, `TRACE`

### Default Behavior

- In development: Defaults to DEBUG level
- In production: Defaults to INFO level

## Usage

### Basic Usage

```typescript
import { logger } from '$lib/utils/logger';

// Log at different levels
logger.error('This is an error message');
logger.warn('This is a warning message');
logger.info('This is an info message');
logger.debug('This is a debug message');
logger.trace('This is a trace message');

// Log with additional data
logger.info('User logged in:', { userId: 'user123' });
```

### Context-Specific Loggers

Create loggers for specific components or modules:

```typescript
import { createLogger } from '$lib/utils/logger';

// Create a logger for a specific component or service
const componentLogger = createLogger('ComponentName');

componentLogger.debug('Component initialized');
componentLogger.info('Operation completed', { result: 'success' });
```

### In Svelte Components

```svelte
<script lang="ts">
  import { createLogger } from '$lib/utils/logger';
  
  // Create a logger for this component
  const logger = createLogger('ComponentName');
  
  onMount(() => {
    logger.debug('Component mounted');
  });
</script>
```

### Programmatically Setting Log Level

```typescript
import { setLogLevel, LogLevel } from '$lib/utils/logger';

// Set to ERROR level only
setLogLevel(LogLevel.ERROR);

// Later, set back to DEBUG
setLogLevel(LogLevel.DEBUG);
```

## Best Practices

1. **Be Consistent**: Use the appropriate log level for each message:
   - `error`: Application errors and exceptions
   - `warn`: Warning conditions that don't stop the application
   - `info`: General operational information
   - `debug`: Detailed information for debugging
   - `trace`: Very detailed tracing information

2. **Add Context**: Include relevant data with log messages to aid debugging.

3. **Don't Over-Log**: Excessive logging can impact performance and make it harder to find important information.

4. **Use Component-Specific Loggers**: Create loggers with meaningful context names rather than using the default logger.

## Examples

See `src/lib/utils/logging-examples.ts` for more detailed examples. 