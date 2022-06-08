import { createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import * as UsersActions from '../actions/users.actions';
import { UsersPageInterface } from "../interfaces/users-page.interface";

export interface UsersPageState extends EntityState<UsersPageInterface> {
  currentPage: number;
}

export const adapter: EntityAdapter<UsersPageInterface> =
  createEntityAdapter<UsersPageInterface>({
  selectId: (entry: UsersPageInterface) => entry.page,
});

export const initialState: UsersPageState = adapter.getInitialState({
  currentPage: 1
});

export const reducer = createReducer(
  initialState,
  on(UsersActions.requestUsers,
    (state, action) => {
      return {
        ...state,
        currentPage: action.pageId
      };
    }
  ),
  on(UsersActions.upsertUsersPage,
    (state, action) => {
      return adapter.upsertOne(action.payload, state)
    }
  )
);

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();
