import { describe, expect, it } from 'vitest';
import { isArray } from '../../src';

describe('isArray', () => {
  it('true только для массивов', () => {
    expect(isArray([1, 2])).toBe(true);
    expect(isArray('str')).toBe(false);
    expect(isArray({})).toBe(false);
    expect(isArray(() => [])).toBe(false);
    expect(isArray(new Date())).toBe(false);
  });
});
