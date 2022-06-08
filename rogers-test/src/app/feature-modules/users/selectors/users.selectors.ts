import { createSelector, MemoizedSelector } from '@ngrx/store';
import { selectUsersFeatureState } from '../reducers';
import { selectIds } from "../reducers/users.reducer";

export const selectUsersPageState = createSelector(
  selectUsersFeatureState,
  usersFeatureState => usersFeatureState.usersPage
);

export const selectUsersPageIds: MemoizedSelector<object, any> = createSelector(selectUsersPageState, selectIds);

export const selectUsersPageById = (id: number): MemoizedSelector<object, any> => createSelector(selectUsersPageState, usersPageData => usersPageData.entities[id]);

