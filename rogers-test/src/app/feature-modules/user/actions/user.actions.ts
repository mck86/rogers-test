import { createAction, props } from '@ngrx/store';
import { UserInterface } from "../interfaces/user.interface";

export const requestUser = createAction(
  '[User/API] User Data Request',
  props<{ userId: number }>()
);

export const upsertUser = createAction(
  '[User/API] Upsert User',
  props<{ payload: UserInterface }>()
);

export const requestUserFailed = createAction(
  '[User/API] Request Failed'
);
