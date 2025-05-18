declare function isEmpty(value: unknown): boolean;

declare function isString(value: unknown): value is string;

declare function throttle<F extends (...args: unknown[]) => void>(fn: F, wait: number): (...args: Parameters<F>) => void;

interface CxParams {
    defaultClass: string | string[];
    activeClass: string;
    nonActiveClass?: string;
    condition?: boolean;
}
declare function cx({ defaultClass, activeClass, nonActiveClass, condition }: CxParams): string;

declare function debounce<F extends (...args: unknown[]) => void>(func: F, wait: number): (...args: Parameters<F>) => void;

declare function isObject(value: unknown): value is Record<PropertyKey, unknown>;

declare function cloneDeep<T>(value: T): T;

declare function merge<T extends object, U extends object>(target: T, source: U): T & U;

declare function omit<T extends Record<string, unknown>, K extends keyof T>(obj: T, keys: readonly K[]): Omit<T, K>;

type PathSegment$1 = string | number | symbol;
type Path = string | readonly PathSegment$1[];
declare function get<Obj extends object, Def = undefined>(object: Obj, path: Path | null | undefined, defaultValue?: Def): unknown | Def;

type PathSegment = string | number | symbol;
declare function has(obj: unknown, key: string | PathSegment[]): boolean;

declare function pickBy<T extends object>(object: T): Partial<T>;

declare function isEqual(a: unknown, b: unknown): boolean;

declare function difference<T>(a: readonly T[], b: readonly T[]): T[];

declare function uniq<T>(array: readonly T[]): T[];

declare function intersection<T>(a: readonly T[], b: readonly T[]): T[];

declare function flattenDeep<T>(arr: readonly T[]): T[];

declare function isArray<T = unknown>(value: unknown): value is T[];

export { cloneDeep, cx, debounce, difference, flattenDeep, get, has, intersection, isArray, isEmpty, isEqual, isObject, isString, merge, omit, pickBy, throttle, uniq };
