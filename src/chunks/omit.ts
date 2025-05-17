export function omit<
  T extends Record<string, unknown>,
  K extends keyof T
>(obj: T, keys: readonly K[]): Omit<T, K> {
  const result = { ...obj };
  keys.forEach((key) => {
    delete result[key];
  });
  return result;
}
