import { describe, it, expect } from 'vitest';
import { uniq } from '../../src';

describe('uniq', () => {
  it('убирает дубликаты', () => {
    expect(uniq([1, 2, 2, 3])).toEqual([1, 2, 3]);
  });
});
