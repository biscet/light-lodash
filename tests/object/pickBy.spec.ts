import { describe, expect, it } from 'vitest';
import { pickBy } from '../../src';

describe('pickBy', () => {
  it('фильтрует falsy-значения', () => {
    const src = { a: 1, b: null, c: 0, d: false, e: 'hi' };
    expect(pickBy(src)).toEqual({ a: 1, e: 'hi' });
  });
});
