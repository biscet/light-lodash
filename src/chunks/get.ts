type PathSegment = string | number | symbol;

type Path = string | readonly PathSegment[];

export function get<Obj extends object, Def = undefined>(
  object: Obj,
  path: Path | null | undefined,
  defaultValue?: Def
): unknown | Def {
  if (path == null) return defaultValue;

  const segments: PathSegment[] =
    typeof path === 'string'
      ? path.split('.').filter(Boolean)
      : path.reduce<PathSegment[]>((acc, part) => {
        if (typeof part === 'string') {
          acc.push(...part.split('.').filter(Boolean));
        } else {
          acc.push(part);
        }
        return acc;
      }, []);

  let current: unknown = object;

  for (const key of segments) {
    if (
      current == null ||
      (typeof current !== 'object' &&
       typeof current !== 'function')
    ) {
      return defaultValue;
    }

    current = (current as Record<PathSegment, unknown>)[key];
  }

  return current === undefined ? defaultValue : current;
}
