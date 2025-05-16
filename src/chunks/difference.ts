export function difference<T>(
  a: readonly T[],
  b: readonly T[]
): T[] {
  const setB = new Set(b);
  return a.filter(item => !setB.has(item));
}
