import { createSelector } from "@ngrx/store";
import { selectUserFeatureState } from "../reducers";

export const selectUserResourceState = createSelector(
  selectUserFeatureState,
  userResourceFeatureState => userResourceFeatureState.userResource
);

export const selectUserResourceEntities = createSelector(
  selectUserResourceState,
  userResourceState => userResourceState.entities
);
