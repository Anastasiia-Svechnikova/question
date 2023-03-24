import { FormGroup } from '@angular/forms';
import { FormQuestionData, Question } from 'src/app/shared/models/models';

export const updateQuestion = (
  form: FormGroup,
  questionData: FormQuestionData,
): Question => {
  const id = questionData.id;
  return {
    ...form.value,
    id,
    createdAt: Date.now(),
    answered: false,
    answer: null,
  };
};
