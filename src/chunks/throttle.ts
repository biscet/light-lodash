export function throttle<F extends (...args: unknown[]) => void>(
  fn: F,
  wait: number
): (...args: Parameters<F>) => void {
  let lastCall = 0;
  let timeoutId: ReturnType<typeof setTimeout> | undefined;

  return function throttled(this: unknown, ...args: Parameters<F>) {
    const now = Date.now();

    const invoke = () => {
      lastCall = now;
      fn.apply(this, args);
    };

    if (now - lastCall >= wait) {
      invoke();
    } else {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(invoke, wait - (now - lastCall));
    }
  };
}
