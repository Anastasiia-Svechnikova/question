import { createFeatureSelector, createSelector } from '@ngrx/store';
import { getRouterSelectors } from '@ngrx/router-store';

import { ICreateState } from './reducer';
import { EMPTY_QUESTION } from 'src/app/shared/constants/constants';
import { IEmptyQuestion, IQuestion } from 'src/app/shared/models/models';
import { selectAllQuestions } from 'src/app/shared/store/selectors';

const selectCreateFeature = createFeatureSelector<ICreateState>('questions');

export const { selectRouteParams } = getRouterSelectors();

export const selectQuestionById = createSelector(
  selectAllQuestions,
  selectRouteParams,
  (questions, { id }): IQuestion | IEmptyQuestion => {
    if (id) {
      const data = questions.filter(
        (question: IQuestion) => question.id === id,
      );
      return data[0];
    } else {
      return EMPTY_QUESTION;
    }
  },
);

export const selectLoading = createSelector(
  selectCreateFeature,
  (state: ICreateState) => state.loading,
);
export const selectEditError = createSelector(
  selectCreateFeature,
  (state: ICreateState) => state.editError,
);
export const selectAddError = createSelector(
  selectCreateFeature,
  (state: ICreateState) => state.addError,
);
