import { routerReducer, RouterReducerState } from '@ngrx/router-store';
import { ActionReducerMap } from '@ngrx/store';
import {
  createAndEditReducer,
  ICreateState,
} from 'src/app/create/store/reducer';
import { IQuestionsState, questionsReducer } from './reducer';

export interface State {
  router: RouterReducerState;
  questions: IQuestionsState;
  create: ICreateState;
}

export const reducers: ActionReducerMap<State> = {
  router: routerReducer,
  questions: questionsReducer,
  create: createAndEditReducer,
};
