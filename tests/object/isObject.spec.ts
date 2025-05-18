import { describe, expect, it } from 'vitest';
import { isObject } from '../../src';

describe('isObject', () => {
  it('распознаёт обычные объекты', () => {
    expect(isObject({ a: 1 })).toBe(true);
    expect(isObject(new Date())).toBe(true);
  });

  it('отсекает null, массивы, функции и примитивы', () => {
    expect(isObject(null)).toBe(false);
    expect(isObject([1, 2, 3])).toBe(false);
    expect(isObject(function () {})).toBe(false);
    expect(isObject('str')).toBe(false);
    expect(isObject(0)).toBe(false);
  });
});