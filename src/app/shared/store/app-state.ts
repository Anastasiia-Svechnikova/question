import { routerReducer, RouterReducerState } from '@ngrx/router-store';
import { ActionReducerMap } from '@ngrx/store';
import {
  createAndEditReducer,
  ICreateState,
} from 'src/app/create/store/reducer';
import { ListsEffects } from 'src/app/lists/store/effects';
import { ManagementEffects } from 'src/app/management/store/effects';
import { CreateAndEditEffects } from 'src/app/create/store/effects';
import { IListsState, listsReducer } from 'src/app/lists/store/reducer';
import {
  IManagementState,
  managementReducer,
} from 'src/app/management/store/reducer';

export interface State {
  router: RouterReducerState;
  lists: IListsState;
  create: ICreateState;
  management: IManagementState;
}

export const reducers: ActionReducerMap<State> = {
  router: routerReducer,
  lists: listsReducer,
  create: createAndEditReducer,
  management: managementReducer,
};
export const effects = [ManagementEffects, ListsEffects, CreateAndEditEffects];
