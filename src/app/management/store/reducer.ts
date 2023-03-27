import { createReducer, on } from '@ngrx/store';

import { IQuestion } from 'src/app/shared/models/models';
import { managementActions } from './actions';

export interface IManagementState {
  loading: boolean;
  questions: IQuestion[];
  error: Error | null;
}

const initialState: IManagementState = {
  loading: false,
  questions: [],
  error: null,
};

export const managementReducer = createReducer(
  initialState,
  on(managementActions.loadQuestions, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),

  on(managementActions.loadedQuestions, (state, { questions }) => ({
    ...state,
    loading: false,
    questions: questions,
    error: null,
  })),

  on(managementActions.deleteQuestion, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),

  on(managementActions.deletedQuestion, (state, { id }) => {
    const questions = state.questions.filter((question) => question.id !== id);
    return {
      ...state,
      loading: false,
      questions: questions,
      error: null,
    };
  }),

  on(managementActions.managementError, (state, { error }) => ({
    ...state,
    loading: false,
    error: error,
  })),
);
