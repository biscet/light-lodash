type PathSegment = string | number | symbol;

export function has(
  obj: unknown,
  key: string | PathSegment[]
): boolean {
  if (obj == null) return false;

  const segments: PathSegment[] = Array.isArray(key)
    ? key as PathSegment[]
    : key.split('.').filter(Boolean);

  let current: unknown = obj;

  for (const segment of segments) {
    if (
      current == null ||
      (typeof current !== 'object' && typeof current !== 'function') ||
      !(segment in current)
    ) {
      return false;
    }
    current = (current as Record<PathSegment, unknown>)[segment];
  }
  return true;
}
