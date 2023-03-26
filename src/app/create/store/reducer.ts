import { createReducer, on } from '@ngrx/store';
import { createActions } from './actions';

export interface ICreateState {
  loading: boolean;
  editError: Error | null;
  addError: Error | null;
}

const initialState: ICreateState = {
  loading: false,
  addError: null,
  editError: null,
};

export const createAndEditReducer = createReducer(
  initialState,
  on(createActions.addQuestion, (state) => ({
    ...state,
    loading: true,
    addError: null,
  })),
  on(createActions.addedQuestion, (state) => {
    return {
      ...state,
      loading: false,
      addError: null,
    };
  }),
  on(createActions.editQuestion, (state) => ({
    ...state,
    loading: true,
    editError: null,
  })),

  on(createActions.editedQuestion, (state) => {
    return {
      ...state,
      loading: false,
      editError: null,
    };
  }),
  on(createActions.editError, (state, { error }) => ({
    ...state,
    loading: false,
    editError: error,
  })),
  on(createActions.addError, (state, { error }) => ({
    ...state,
    loading: false,
    editError: error,
  })),
);
