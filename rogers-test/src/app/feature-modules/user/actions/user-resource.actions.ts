import { createAction, props } from '@ngrx/store';
import { UserResourceInterface } from "../interfaces/user-resource.interface";

export const requestUserResource = createAction(
  '[User Resource/API] User Resource Data Request',
  props<{ userId: number }>()
);

export const upsertUserResource = createAction(
  '[User Resource/API] Upsert User Resource',
  props<{ payload: UserResourceInterface }>()
);

export const requestUserResourceFailed = createAction(
  '[User Resource/API] Request Failed'
);
