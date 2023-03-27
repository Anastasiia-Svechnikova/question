import { createFeatureSelector, createSelector } from '@ngrx/store';
import { getRouterSelectors } from '@ngrx/router-store';
import { IListsState } from './reducer';

const selectQuestionsFeature = createFeatureSelector<IListsState>('lists');

export const { selectRouteParams } = getRouterSelectors();

export const selectAnsweredQuestions = createSelector(
  selectQuestionsFeature,
  (state: IListsState) => {
    return state.questions.filter((question) => question.answered);
  },
);
export const selectNotAnsweredQuestions = createSelector(
  selectQuestionsFeature,
  (state: IListsState) => {
    return state.questions.filter((question) => !question.answered);
  },
);
export const selectLoading = createSelector(
  selectQuestionsFeature,
  (state: IListsState) => state.loading,
);
export const selectListsError = createSelector(
  selectQuestionsFeature,
  (state: IListsState) => state.error,
);
