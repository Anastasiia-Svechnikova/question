import { createFeatureSelector, createSelector } from '@ngrx/store';
import { getRouterSelectors } from '@ngrx/router-store';
import { IQuestionsState } from './reducer';
import { IEmptyQuestion, Question } from '../models/models';
import { EMPTY_QUESTION } from '../constants/constants';

const selectQuestionsFeature =
  createFeatureSelector<IQuestionsState>('questions');

export const { selectRouteParams } = getRouterSelectors();

export const selectAllQuestions = createSelector(
  selectQuestionsFeature,
  (state: IQuestionsState) => state.questions,
);
export const selectQuestionById = createSelector(
  selectAllQuestions,
  selectRouteParams,
  (questions, { id }): Question | IEmptyQuestion => {
    if (id) {
      const data = questions.filter((question: Question) => question.id === id);
      return data[0];
    } else {
      return EMPTY_QUESTION;
    }
  },
);
export const selectAnsweredQuestions = createSelector(
  selectQuestionsFeature,
  (state: IQuestionsState) => {
    return state.questions.filter((question) => question.answered);
  },
);
export const selectNotAnsweredQuestions = createSelector(
  selectQuestionsFeature,
  (state: IQuestionsState) => {
    return state.questions.filter((question) => !question.answered);
  },
);

export const selectLoading = createSelector(
  selectQuestionsFeature,
  (state: IQuestionsState) => state.loading,
);
export const selectLoadError = createSelector(
  selectQuestionsFeature,
  (state: IQuestionsState) => state.loadError,
);
