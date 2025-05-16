import { describe, expect, it } from 'vitest';
import { isString } from '../src/chunks/isString';

describe('isString', () => {
  it('распознаёт обычные строки и String-объекты', () => {
    expect(isString('hello')).toBe(true);
    expect(isString(new String('hi'))).toBe(true);
  });

  it('отсекает не-строки', () => {
    expect(isString(123)).toBe(false);
    expect(isString({})).toBe(false);
    expect(isString(null)).toBe(false);
    expect(isString(() => '')).toBe(false);
    expect(isString([])).toBe(false);
    expect(isString(new Date())).toBe(false);
  });
});
