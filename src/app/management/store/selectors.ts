import { createFeatureSelector, createSelector } from '@ngrx/store';

import { IManagementState } from './reducer';

const selectQuestionsFeature =
  createFeatureSelector<IManagementState>('management');

export const selectAllQuestions = createSelector(
  selectQuestionsFeature,
  (state: IManagementState) => state.questions,
);
export const selectLoading = createSelector(
  selectQuestionsFeature,
  (state: IManagementState) => state.loading,
);
export const selectManagementError = createSelector(
  selectQuestionsFeature,
  (state: IManagementState) => state.error,
);
