import { describe, it, expect } from 'vitest';
import { flattenDeep } from '../../src';

describe('flattenDeep', () => {
  it('корректно разворачивает многослойные массивы', () => {
    expect(flattenDeep([1, [2, [3, [4]]]])).toEqual([1, 2, 3, 4]);
  });

  it('работает с вложенными пустыми массивами', () => {
    expect(flattenDeep([[[], [1]], 2])).toEqual([1, 2]);
  });
});
