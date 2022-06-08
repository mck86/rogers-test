import { createSelector } from "@ngrx/store";
import { selectUserFeatureState } from "../reducers";

export const selectUserState = createSelector(
  selectUserFeatureState,
  userFeatureState => userFeatureState.user
);

export const selectUserEntities = createSelector(
  selectUserState,
  userState => userState.entities
);
