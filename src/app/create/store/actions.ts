import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { IQuestion } from 'src/app/shared/models/models';

export const createActions = createActionGroup({
  source: 'Create Edit',
  events: {
    'Add Error': props<{ error: Error }>(),
    'Edit Error': props<{ error: Error }>(),
    'Add question': props<{ question: IQuestion }>(),
    'Added question': emptyProps(),
    'Edit question': props<{ question: IQuestion }>(),
    'Edited question': emptyProps(),
  },
});
