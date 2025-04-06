/**
 * Generic sorting utilities for admin components
 */

/**
 * Sort an array of items by a specific field and direction
 */
export function sortItems<T>(items: T[], field: keyof T, direction: 'asc' | 'desc'): T[] {
  return [...items].sort((a, b) => {
    // Handle string fields
    if (typeof a[field] === 'string' && typeof b[field] === 'string') {
      return direction === 'asc'
        ? (a[field] as string).localeCompare(b[field] as string)
        : (b[field] as string).localeCompare(a[field] as string);
    }
    // Handle boolean fields
    if (typeof a[field] === 'boolean' && typeof b[field] === 'boolean') {
      return direction === 'asc'
        ? (a[field] as boolean) === (b[field] as boolean)
          ? 0
          : (a[field] as boolean)
            ? 1
            : -1
        : (a[field] as boolean) === (b[field] as boolean)
          ? 0
          : (a[field] as boolean)
            ? -1
            : 1;
    }
    // Handle number fields
    if (typeof a[field] === 'number' && typeof b[field] === 'number') {
      return direction === 'asc'
        ? (a[field] as number) - (b[field] as number)
        : (b[field] as number) - (a[field] as number);
    }
    return 0;
  });
}

/**
 * Toggle sort direction when a column header is clicked
 */
export function toggleSort<T>(
  field: keyof T,
  currentField: keyof T,
  currentDirection: 'asc' | 'desc'
): ['asc' | 'desc', keyof T] {
  if (field === currentField) {
    return [currentDirection === 'asc' ? 'desc' : 'asc', field];
  }
  return ['asc', field];
}

/**
 * Sort an array of objects by name property
 */
export function sortByName<T extends { name: string }>(items: T[]): T[] {
  return [...items].sort((a, b) => a.name.localeCompare(b.name));
}

/**
 * Format column label with sort indicators
 */
export function formatColumnLabel(
  label: string,
  field: string,
  currentField: string,
  direction: 'asc' | 'desc'
): string {
  return `${label} ${field === currentField ? (direction === 'asc' ? '↑' : '↓') : ''}`;
} 