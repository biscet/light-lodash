import { cloneDeep } from './cloneDeep';

export function merge<T extends object, U extends object>(
  target: T,
  source: U
): T & U {
  Object.keys(source).forEach((key) => {
    const srcVal = (source as Record<string, unknown>)[key];
    const tgtVal = (target as Record<string, unknown>)[key];

    if (
      srcVal &&
      typeof srcVal === 'object' &&
      !Array.isArray(srcVal) &&
      tgtVal &&
      typeof tgtVal === 'object' &&
      !Array.isArray(tgtVal)
    ) {
      merge(tgtVal, srcVal);
    } else {
      (target as Record<string, unknown>)[key] = cloneDeep(srcVal);
    }
  });

  return target as T & U;
}

