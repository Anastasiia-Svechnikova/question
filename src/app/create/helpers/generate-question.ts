import { FormGroup } from '@angular/forms';
import { nanoid } from 'nanoid';
import { EMPTY_QUESTION } from 'src/app/shared/constants/constants';
import { IQuestion } from 'src/app/shared/models/models';

export const generateQuestion = (form: FormGroup): IQuestion => {
  return {
    ...EMPTY_QUESTION,
    ...form.value,
    id: nanoid(),
    createdAt: Date.now(),
    answer: null,
    answered: false,
  };
};
