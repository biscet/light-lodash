import { describe, it, expect } from 'vitest';
import { cloneDeep } from '../../src';

describe('cloneDeep', () => {
  it('создаёт глубокую копию объектов', () => {
    const src = { a: { b: [1, 2] } };
    const copy = cloneDeep(src);
    
    expect(copy).toEqual(src);

    copy.a.b.push(3);

    expect(src.a.b).toEqual([1, 2]); 
  });
});
