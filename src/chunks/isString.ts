export function isString(value: unknown): value is string {
  return (
    value !== null &&
    value !== undefined &&
    typeof (value as { valueOf(): unknown }).valueOf() === 'string'
  );
}