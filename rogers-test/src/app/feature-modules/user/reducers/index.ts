import { State } from "../../../modules/core-module/reducers";
import { ActionReducerMap, createFeatureSelector } from "@ngrx/store";
import * as fromUser from "../reducers/user.reducer"
import * as fromUserResource from "../reducers/user-resource.reducer"

export interface UserFeatureState extends State {
  user: fromUser.UserState;
  userResource: fromUserResource.UserResourceState;
}

export const reducers: ActionReducerMap<UserFeatureState> = {
  user: fromUser.reducer,
  userResource: fromUserResource.userResourceReducer
};

export const selectUserFeatureState = createFeatureSelector<UserFeatureState>('user');
