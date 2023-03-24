import { FormGroup } from '@angular/forms';
import { EMPTY_QUESTION } from 'src/app/shared/constants/constants';
import { FormQuestionData, IQuestion } from 'src/app/shared/models/models';

export const updateQuestion = (
  form: FormGroup,
  questionData: FormQuestionData,
): IQuestion => {
  const id = questionData.id;
  return {
    ...EMPTY_QUESTION,
    ...form.value,
    id,
    createdAt: Date.now(),
    answer: null,
    answered: false,
  };
};
