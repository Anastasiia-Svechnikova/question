import { Component, forwardRef, Provider } from '@angular/core';
import {
  ControlValueAccessor,
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  NG_VALUE_ACCESSOR,
  Validators,
} from '@angular/forms';
import { debounceTime, takeUntil } from 'rxjs';

import { UnSubscriberComponent } from 'src/app/shared/classes/unsubscriber';
import { INPUT_DEBOUNCE_TIME } from 'src/app/shared/constants/constants';

const COUNTRY_CONTROL_VALUE_ACCESSOR: Provider = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => CreateOptionsControlComponent),
  multi: true,
};

@Component({
  selector: 'app-options-control',
  templateUrl: './create-options-control.component.html',
  providers: [COUNTRY_CONTROL_VALUE_ACCESSOR],
  styleUrls: ['./create-options-control.component.css'],
})
export class CreateOptionsControlComponent
  extends UnSubscriberComponent
  implements ControlValueAccessor
{
  form!: FormGroup;

  private onTouched!: () => object;
  private onChanged!: <T>(arg: T) => object;

  constructor(private fb: FormBuilder) {
    super();
  }

  get options(): FormArray<FormControl> {
    return this.form.get('options') as FormArray;
  }

  onAddOption(): void {
    this.options.push(this.fb.control('', Validators.required));
  }

  onDeleteOption(index: number): void {
    this.options.removeAt(index);
  }

  writeValue(value: string[]): void {
    const options = value.length ? value : ['', ''];
    const formOptions = options.map((option: string) => {
      return this.fb.control(option, Validators.required);
    });
    this.form = this.fb.group({
      options: this.fb.array(formOptions),
    });
  }

  registerOnChange(fn: <T>(arg: T) => object): void {
    this.form.valueChanges
      .pipe(takeUntil(this.destroyed$), debounceTime(INPUT_DEBOUNCE_TIME))
      .subscribe((val) => {
        if (this.form.valid) {
          fn([...val.options]);
        } else {
          fn('');
        }
      });
  }

  registerOnTouched(fn: () => object): void {
    this.onTouched = fn;
  }
}
