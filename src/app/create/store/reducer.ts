import { createReducer, on } from '@ngrx/store';

import { createActions } from './actions';

export interface ICreateState {
  loading: boolean;
  error: Error | null;
}

const initialState: ICreateState = {
  loading: false,
  error: null,
};

export const createAndEditReducer = createReducer(
  initialState,
  on(createActions.addQuestion, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),

  on(createActions.addedQuestion, (state) => {
    return {
      ...state,
      loading: false,
      error: null,
    };
  }),

  on(createActions.editQuestion, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),

  on(createActions.editedQuestion, (state) => {
    return {
      ...state,
      loading: false,
      error: null,
    };
  }),

  on(createActions.createError, (state, { error }) => ({
    ...state,
    loading: false,
    error: error,
  })),
);
