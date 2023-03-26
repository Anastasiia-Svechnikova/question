import { createActionGroup, emptyProps, props } from '@ngrx/store';

import { IQuestion } from '../models/models';

export const questionsActions = createActionGroup({
  source: 'Questions',
  events: {
    'Load questions': emptyProps(),
    'Loaded questions': props<{ questions: IQuestion[] }>(),
    'Loaded Error': props<{ error: Error }>(),
    'Delete question': props<{ id: string }>(),
    'Deleted question': props<{ id: string }>(),
    'Update question': props<{ question: IQuestion }>(),
    'Updated question': props<{ question: IQuestion }>(),
    'Answer question': props<{ question: IQuestion }>(),
    'Revert question': props<{ id: string }>(),
  },
});
