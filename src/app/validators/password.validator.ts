import { FormControl } from '@angular/forms';

export function passwordValidator(passwordValue: () => string): (control: FormControl) => {invalid: true} | null {
  return (control: FormControl): {invalid: true} | null => {
    if (control.value === passwordValue()) {
      return null;
    }

    return {invalid: true};
  };
}
