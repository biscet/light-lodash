import { describe, expect, it } from 'vitest';
import { intersection } from '../../src';

describe('intersection', () => {
  it('находит общие элементы', () => {
    expect(intersection([1, 2, 3], [2, 3, 4])).toEqual([2, 3]);
    expect(intersection(['a', 'b'], ['c'])).toEqual([]);
  });
});
