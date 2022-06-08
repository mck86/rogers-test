import { createAction, props } from '@ngrx/store';
import { UsersPageInterface } from "../interfaces/users-page.interface";

export const requestUsers = createAction(
  '[Users/API] Users Data Request',
  props<{ pageId: number }>()
);

export const upsertUsersPage = createAction(
  '[Users/API] Upsert Users',
  props<{ payload: UsersPageInterface }>()
);

export const requestUsersFailed = createAction(
  '[Users/API] Request Failed'
);
