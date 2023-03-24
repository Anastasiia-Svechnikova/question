import { FormGroup } from '@angular/forms';
import { nanoid } from 'nanoid';
import { Question } from 'src/app/shared/models/models';

export const generateQuestion = (form: FormGroup): Question => {
  return {
    ...form.value,
    id: nanoid(),
    createdAt: Date.now(),
    answered: false,
    answer: null,
  };
};
