import { describe, expect, it } from 'vitest';
import { cx } from '../src/chunks/cx';

describe('cx', () => {
  it('возвращает activeClass при условии true', () => {
    expect(cx({
      defaultClass: 'btn',
      activeClass: 'btn--on',
      nonActiveClass: 'btn--off',
      condition: true
    })).toBe('btn btn--on');
  });

  it('возвращает nonActiveClass при условии false', () => {
    expect(cx({
      defaultClass: ['btn', 'btn-lg'],
      activeClass: 'btn--on',
      nonActiveClass: 'btn--off',
      condition: false
    })).toBe('btn btn-lg btn--off');
  });
});
