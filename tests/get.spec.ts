import { describe, expect, it } from 'vitest';
import { get } from '../src/chunks/get';

describe('get', () => {
  const sample = {
    a: { b: [{ c: 42 }] },
    d: { e: undefined },
    f: null
  };

  it('возвращает значение по строковому пути с точками', () => {
    expect(get(sample, 'a.b.0.c')).toBe(42);
  });

  it('возвращает значение по массиву сегментов', () => {
    expect(get(sample, ['a', 'b', 0, 'c'])).toBe(42);
  });

  it('возвращает defaultValue, если путь отсутствует', () => {
    expect(get(sample, 'a.x.y', 'fallback')).toBe('fallback');
  });

  it('возвращает defaultValue, если путь указывает на undefined', () => {
    expect(get(sample, 'd.e', 'empty')).toBe('empty');
  });

  it('возвращает defaultValue при null/undefined пути', () => {
    expect(get(sample, null, 'no-path')).toBe('no-path');
    expect(get(sample, undefined, 'no-path')).toBe('no-path');
  });

  it('возвращает defaultValue, если на середине встретилось null', () => {
    expect(get(sample, 'f.x', 'null-branch')).toBe('null-branch');
  });

  it('возвращает undefined, если не был найден элемент', () => {
    expect(get(sample, 'f.x')).toBe(undefined);
  });
});
