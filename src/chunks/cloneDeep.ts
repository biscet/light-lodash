export function cloneDeep<T>(value: T): T {
  if (value === null || typeof value !== 'object') return value;

  if (value instanceof Date) return new Date(value.getTime()) as unknown as T;

  if (value instanceof RegExp) return new RegExp(value) as unknown as T;

  if (Array.isArray(value)) return value.map(cloneDeep) as unknown as T;

  if (value instanceof Map)
    return new Map(
      Array.from(value.entries()).map(([k, v]) => [k, cloneDeep(v)])
    ) as unknown as T;

  if (value instanceof Set)
    return new Set(Array.from(value.values()).map(cloneDeep)) as unknown as T;

  const result = {} as Record<PropertyKey, unknown>;

  Object.keys(value as Record<string, unknown>).forEach((key) => {
    result[key] = cloneDeep((value as Record<string, unknown>)[key]);
  });

  return result as T;
}
