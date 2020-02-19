import { Directive, Input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, Validator, ValidatorFn } from '@angular/forms';

export function forbiddenValueValidator(hexRegEx: RegExp): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} | null => {
    const forbidden = !hexRegEx.test(control.value);
    return forbidden ? {forbiddenValue: {value: control.value}} : null;
  };
}

@Directive({
  selector: '[appForbiddenValue]',
  providers: [{provide: NG_VALIDATORS, useExisting: ForbiddenValidatorDirective, multi: true}]
})
export class ForbiddenValidatorDirective implements Validator {
  @Input('appForbiddenValue') forbiddenValue: string;

  validate(control: AbstractControl): {[key: string]: any} | null {
    return this.forbiddenValue ? forbiddenValueValidator(new RegExp(this.forbiddenValue, 'i'))(control)
      : null;
  }
}



/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
