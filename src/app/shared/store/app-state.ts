import { routerReducer, RouterReducerState } from '@ngrx/router-store';
import { ActionReducerMap } from '@ngrx/store';
import { IQuestionsState, questionsReducer } from './reducer';

export interface State {
  router: RouterReducerState;
  questions: IQuestionsState;
}

export const reducers: ActionReducerMap<State> = {
  router: routerReducer,
  questions: questionsReducer,
};
