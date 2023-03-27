import { createActionGroup, emptyProps, props } from '@ngrx/store';

import { IQuestion } from 'src/app/shared/models/models';

export const managementActions = createActionGroup({
  source: 'Management',
  events: {
    'Load questions': emptyProps(),
    'Loaded questions': props<{ questions: IQuestion[] }>(),
    'Management Error': props<{ error: Error }>(),
    'Delete question': props<{ id: string }>(),
    'Deleted question': props<{ id: string }>(),
  },
});
