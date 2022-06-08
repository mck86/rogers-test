import * as userResourceActions from "../actions/user-resource.actions"
import { createEntityAdapter, EntityAdapter, EntityState } from "@ngrx/entity";
import { UserResourceDataInterface } from "../interfaces/user-resource.interface";
import { createReducer, on } from "@ngrx/store";

export interface UserResourceState extends EntityState<UserResourceDataInterface> {}

export const adapter: EntityAdapter<UserResourceDataInterface> =
  createEntityAdapter<UserResourceDataInterface>({
    selectId: (entry: UserResourceDataInterface) => entry.id,
  });

export const initialState: UserResourceState = adapter.getInitialState({
});

export const userResourceReducer = createReducer(
  initialState,
  on(userResourceActions.upsertUserResource,
    (state, action) => {
      return adapter.upsertOne(action.payload.data, state)
    }
  )
);
