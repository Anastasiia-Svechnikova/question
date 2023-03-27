import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export const emptyCheckBoxValidator = (): ValidatorFn => {
  return (control: AbstractControl): ValidationErrors | null => {
    const isValid = Object.values(control.value).some((value) => value);
    return isValid ? null : { required: true };
  };
};
