import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAX_LENGTH_OPEN_QUESTION } from 'src/app/shared/constants/constants';
import { IQuestion } from 'src/app/shared/models/models';
import { emptyCheckBoxValidator } from '../validators/empty-checkbox-validator';

export class FormGenerator {
  static single(question: IQuestion): FormGroup {
    const answer = question.answer?.at(0) || '';
    const form = new FormGroup({
      answer: new FormControl(answer, [
        Validators.required,
        Validators.maxLength(MAX_LENGTH_OPEN_QUESTION),
      ]),
    });
    return form;
  }

  static multiple(question: IQuestion): FormGroup {
    const form = new FormGroup({}, { validators: [emptyCheckBoxValidator()] });
    question.options.forEach((item) => {
      const value = question.answer?.includes(item);
      form.addControl(item, new FormControl(value));
    });
    return form;
  }
}
