export function isEqual(a: unknown, b: unknown): boolean {
  if (a === b) return true;

  if (
    typeof a !== 'object' || a === null ||
    typeof b !== 'object' || b === null
  ) {
    return false;
  }

  const keysA = Object.keys(a as Record<string, unknown>);
  const keysB = Object.keys(b as Record<string, unknown>);

  if (keysA.length !== keysB.length) return false;

  for (const key of keysA) {
    if (!keysB.includes(key)) return false;
    if (!isEqual(
      (a as Record<string, unknown>)[key],
      (b as Record<string, unknown>)[key]
    )) {
      return false;
    }
  }
  return true;
}
