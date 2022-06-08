import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';
import * as fromUsers from './users.reducer';
import { State } from "../../../modules/core-module/reducers";

export interface UsersState extends State {
  usersPage: fromUsers.UsersPageState;
}

export const reducers: ActionReducerMap<UsersState> = {
  usersPage: fromUsers.reducer
};

export const selectUsersFeatureState = createFeatureSelector<UsersState>('users');
