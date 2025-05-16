export function isEmpty(value: unknown): boolean {
  if (value == null) return true;

  if (Array.isArray(value)) return value.length === 0;

  if (typeof value === 'object') {
    return Object.keys(value as Record<string, unknown>).length === 0;
  }

  return false;
}