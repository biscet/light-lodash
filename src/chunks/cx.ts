import { isEmpty } from './isEmpty';

interface CxParams {
  defaultClass: string | string[];
  activeClass: string;
  nonActiveClass?: string;
  condition?: boolean;
}

export function cx({
  defaultClass,
  activeClass,
  nonActiveClass,
  condition = true
}: CxParams): string {
  const classes = Array.isArray(defaultClass)
    ? [...defaultClass]
    : defaultClass.trim().split(/\s+/);

  const altClass = isEmpty(nonActiveClass) ? '' : nonActiveClass!;
  classes.push(condition ? activeClass : altClass);

  return classes.filter(Boolean).join(' ');
}
