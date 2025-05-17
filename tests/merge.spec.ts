import { describe, it, expect } from 'vitest';
import { merge } from '../src/chunks/merge';

describe('merge', () => {
  it('глубоко объединяет объекты', () => {
    const a = { x: { y: 1 } };
    const b = { x: { z: 2 } };
    
    expect(merge(a, b)).toEqual({ x: { y: 1, z: 2 } });
  });
});
