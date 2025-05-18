export function intersection<T>(
  a: readonly T[],
  b: readonly T[]
): T[] {
  const setB = new Set(b);
  return a.filter(value => setB.has(value));
}