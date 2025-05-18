import { describe, expect, it, vi } from 'vitest';
import { debounce } from '../../src';

describe('debounce', () => {
  it('вызывает функцию один раз после задержки', () => {
    vi.useFakeTimers();
    const spy = vi.fn();

    const debounced = debounce(spy, 200);
    
    debounced();
    debounced();

    vi.advanceTimersByTime(199);
    expect(spy).not.toHaveBeenCalled();

    vi.advanceTimersByTime(1);
    expect(spy).toHaveBeenCalledTimes(1);

    vi.useRealTimers();
  });
});
