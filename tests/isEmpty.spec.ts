import { describe, expect, it } from 'vitest';
import { isEmpty } from '../src/chunks/isEmpty';

describe('isEmpty', () => {
  it('возвращает true для пустых значений', () => {
    expect(isEmpty(null)).toBe(true);
    expect(isEmpty(undefined)).toBe(true);
    expect(isEmpty({})).toBe(true);
    expect(isEmpty([])).toBe(true);
  });

  it('возвращает false для непустых', () => {
    expect(isEmpty({ a: 1 })).toBe(false);
    expect(isEmpty([0])).toBe(false);
    expect(isEmpty('')).toBe(false);
    expect(isEmpty(0)).toBe(false);
    expect(isEmpty(-1)).toBe(false);
    expect(isEmpty(1)).toBe(false);
    expect(isEmpty(()=>{})).toBe(false);
  });
});