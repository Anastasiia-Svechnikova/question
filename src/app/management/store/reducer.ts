import { createReducer, on } from '@ngrx/store';
import { IQuestion } from 'src/app/shared/models/models';
import { questionsActions } from 'src/app/shared/store/actions';

export interface IQuestionsState {
  loading: boolean;
  questions: IQuestion[];
  loadError: Error | null;
}

const initialState: IQuestionsState = {
  loading: false,
  questions: [],
  loadError: null,
};

export const questionsReducer = createReducer(
  initialState,
  on(questionsActions.loadQuestions, (state) => ({
    ...state,
    loading: true,
    loadError: null,
  })),
  on(questionsActions.loadedQuestions, (state, { questions }) => ({
    ...state,
    loading: false,
    questions: questions,
    loadError: null,
  })),
  on(questionsActions.deleteQuestion, (state) => ({
    ...state,
    loading: true,
    loadError: null,
  })),
  on(questionsActions.deletedQuestion, (state, { id }) => {
    const questions = state.questions.filter((question) => question.id !== id);
    return {
      ...state,
      loading: false,
      questions: questions,
      loadError: null,
    };
  }),
  on(questionsActions.addQuestion, (state) => ({
    ...state,
    loading: true,
    loadError: null,
  })),
  on(questionsActions.addedQuestion, (state) => {
    return {
      ...state,
      loading: false,
      loadError: null,
    };
  }),
  on(questionsActions.updateQuestion, (state) => ({
    ...state,
    loading: true,
    loadError: null,
  })),

  on(questionsActions.updatedQuestion, (state, { question }) => {
    const questions = state.questions.map((stateQuestion) =>
      stateQuestion.id === question.id ? question : stateQuestion,
    );
    return {
      ...state,
      loading: false,
      questions: questions,
      loadError: null,
    };
  }),
  //   on(questionsActions.answerQuestion, (state) => ({
  //     ...state,
  //     loading: true,
  //     loadError: null,
  //   })),
  //   on(questionsActions.revertQuestion, (state) => ({
  //     ...state,
  //     loading: true,
  //     loadError: null,
  //   })),
  on(questionsActions.loadedError, (state, { error }) => ({
    ...state,
    loading: false,
    loadError: error,
  })),
);
