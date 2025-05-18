import { describe, expect, it } from 'vitest';
import { has } from '../../src';

describe('has', () => {
  const obj = { a: { b: 2 }, c: 3 };

  it('true для прямого свойства', () => {
    expect(has(obj, 'c')).toBe(true);
  });

  it('true для вложенного пути', () => {
    expect(has(obj, 'a.b')).toBe(true);
  });

  it('false, если свойства нет', () => {
    expect(has(obj, 'a.x')).toBe(false);
  });
});
