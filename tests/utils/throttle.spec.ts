import { describe, it, vi, expect } from 'vitest';
import { throttle } from '../../src';

describe('throttle', () => {
  it('не даёт вызвать функцию чаще указанного интервала', () => {
    vi.useFakeTimers();
    const spy = vi.fn();
    const thr = throttle(spy, 100);

    thr();
    thr();
    
    vi.advanceTimersByTime(99);

    expect(spy).toBeCalledTimes(1);

    vi.advanceTimersByTime(1);

    expect(spy).toBeCalledTimes(2);

    vi.useRealTimers();
  });
});
