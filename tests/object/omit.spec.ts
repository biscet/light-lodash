import { describe, it, expect } from 'vitest';
import { omit } from '../../src';

describe('omit', () => {
  it('исключает указанные ключи', () => {
    const obj = { a: 1, b: 2, c: 3 };
    expect(omit(obj, ['b', 'c'])).toEqual({ a: 1 });
  });
});
