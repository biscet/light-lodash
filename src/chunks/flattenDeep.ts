export function flattenDeep<T>(arr: readonly T[]): T[] {
  const out: T[] = [];

  for (const item of arr) {
    if (Array.isArray(item)) {
      out.push(...flattenDeep(item as unknown as readonly T[]));
    } else {
      out.push(item);
    }
  }

  return out;
}
