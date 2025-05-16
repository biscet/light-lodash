import { describe, expect, it } from 'vitest';
import { difference } from '../src/chunks/difference';

describe('difference', () => {
  it('возвращает уникальные элементы первого массива', () => {
    expect(difference([1, 2, 3], [2])).toEqual([1, 3]);
  });

  it('при полном перекрытии → пустой массив', () => {
    expect(difference(['a', 'b'], ['a', 'b'])).toEqual([]);
  });
});
