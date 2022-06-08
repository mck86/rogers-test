import { createEntityAdapter, EntityAdapter, EntityState } from "@ngrx/entity";
import { UserDataInterface } from "../interfaces/user.interface";
import { createReducer, on } from "@ngrx/store";
import * as userActions from "../actions/user.actions"

export interface UserState extends EntityState<UserDataInterface> {}

export const adapter: EntityAdapter<UserDataInterface> =
  createEntityAdapter<UserDataInterface>({
    selectId: (entry: UserDataInterface) => entry.id,
  });

export const initialState: UserState = adapter.getInitialState({
});

export const reducer = createReducer(
  initialState,
  on(userActions.upsertUser,
    (state, action) => {
      return adapter.upsertOne(action.payload.data, state)
    }
  )
);
