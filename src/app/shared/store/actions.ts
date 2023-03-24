import { createActionGroup, emptyProps, props } from '@ngrx/store';

import { Question } from '../models/models';

export const questionsActions = createActionGroup({
  source: 'Questions',
  events: {
    'Load questions': emptyProps(),
    'Loaded questions': props<{ questions: Question[] }>(),
    'Loaded Error': props<{ error: Error }>(),
    'Delete question': props<{ id: string }>(),
    'Deleted question': props<{ id: string }>(),
    'Add question': props<{ question: Question }>(),
    'Added question': props<{ question: Question }>(),
    'Update question': props<{ question: Question }>(),
    'Updated question': props<{ question: Question }>(),
    'Answer question': props<{ question: Question }>(),
    'Revert question': props<{ id: string }>(),
  },
});
