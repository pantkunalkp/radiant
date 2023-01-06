import { generateUtilityClass, generateUtilityClasses } from '../className';

export interface FormHelperTextClasses {
  /** Styles applied to the root element. */
  root: string;
}

export type FormHelperTextClassKey = keyof FormHelperTextClasses;

export function getFormHelperTextUtilityClass(slot: string): string {
  return generateUtilityClass('RadFormHelperText', slot);
}

const formHelperTextClasses: FormHelperTextClasses = generateUtilityClasses('RadFormHelperText', [
  'root',
]);

export default formHelperTextClasses;
