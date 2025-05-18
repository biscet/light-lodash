export function pickBy<T extends object>(object: T): Partial<T> {
  const result = {} as Partial<T>;

  for (const [key, value] of Object.entries(object) as [keyof T, T[keyof T]][]) {
    if (value) {
      result[key] = value;
    }
  }

  return result;
}
