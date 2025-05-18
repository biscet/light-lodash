import { describe, expect, it } from 'vitest';
import { isEqual } from '../../src';

describe('isEqual', () => {
  it('глубокое равенство plain-объектов', () => {
    expect(isEqual({ a: { b: 1 } }, { a: { b: 1 } })).toBe(true);
  });

  it('разные структуры → false', () => {
    expect(isEqual({ a: 1 }, { a: 1, b: 2 })).toBe(false);
  });

  it('массивы сравниваются рекурсивно', () => {
    expect(isEqual([1, 2, [3]], [1, 2, [3]])).toBe(true);
    expect(isEqual([1, 2], [2, 1])).toBe(false);
  });
});
