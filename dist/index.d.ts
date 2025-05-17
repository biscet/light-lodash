declare function isEmpty(value: unknown): boolean;

type PathSegment = string | number | symbol;
type Path = string | readonly PathSegment[];
declare function get<Obj extends object, Def = undefined>(object: Obj, path: Path | null | undefined, defaultValue?: Def): unknown | Def;

declare function isString(value: unknown): value is string;

declare function isObject(value: unknown): value is Record<PropertyKey, unknown>;

declare function isArray<T = unknown>(value: unknown): value is T[];

declare function intersection<T>(a: readonly T[], b: readonly T[]): T[];

interface CxParams {
    defaultClass: string | string[];
    activeClass: string;
    nonActiveClass?: string;
    condition?: boolean;
}
declare function cx({ defaultClass, activeClass, nonActiveClass, condition }: CxParams): string;

declare function cloneDeep<T>(value: T): T;

declare function uniq<T>(array: readonly T[]): T[];

declare function merge<T extends object, U extends object>(target: T, source: U): T & U;

declare function throttle<F extends (...args: unknown[]) => void>(fn: F, wait: number): (...args: Parameters<F>) => void;

declare function omit<T extends Record<string, unknown>, K extends keyof T>(obj: T, keys: readonly K[]): Omit<T, K>;

export { cloneDeep, cx, get, intersection, isArray, isEmpty, isObject, isString, merge, omit, throttle, uniq };
