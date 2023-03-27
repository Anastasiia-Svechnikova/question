import { createReducer, on } from '@ngrx/store';

import { IQuestion } from 'src/app/shared/models/models';
import { listsActions } from './actions';

export interface IListsState {
  loading: boolean;
  questions: IQuestion[];
  error: Error | null;
}

const initialState: IListsState = {
  loading: false,
  questions: [],
  error: null,
};

export const listsReducer = createReducer(
  initialState,
  on(listsActions.answerQuestion, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),

  on(listsActions.revertQuestion, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),

  on(listsActions.updatedAnswer, (state, { question }) => {
    const questions = state.questions.map((stateQuestion) =>
      stateQuestion.id === question.id ? question : stateQuestion,
    );
    return {
      ...state,
      loading: false,
      questions: questions,
      error: null,
    };
  }),

  on(listsActions.loadQuestions, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),

  on(listsActions.loadedQuestions, (state, { questions }) => ({
    ...state,
    loading: false,
    questions: questions,
    error: null,
  })),

  on(listsActions.listsError, (state, { error }) => ({
    ...state,
    loading: false,
    error: error,
  })),
);
