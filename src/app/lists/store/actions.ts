import { createActionGroup, emptyProps, props } from '@ngrx/store';

import { IQuestion } from 'src/app/shared/models/models';

export const listsActions = createActionGroup({
  source: 'Lists',
  events: {
    'Load questions': emptyProps(),
    'Loaded questions': props<{ questions: IQuestion[] }>(),
    'Lists Error': props<{ error: Error }>(),
    'Updated answer': props<{ question: IQuestion }>(),
    'Answer question': props<{ question: IQuestion }>(),
    'Revert question': props<{ id: string }>(),
  },
});
