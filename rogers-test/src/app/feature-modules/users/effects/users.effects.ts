import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from "rxjs";
import * as usersActions from "../actions/users.actions";
import { DataFetcherService } from "../../../modules/core-module/services/data-fetcher.service";
import { UsersPageInterface } from "../interfaces/users-page.interface";


@Injectable()
export class UsersEffects {
  constructor(private actions$: Actions, private dataFetcherService: DataFetcherService) {}

  usersRequest$ = createEffect(() =>
    this.actions$.pipe(
      ofType(usersActions.requestUsers),
      switchMap(({ pageId }) => {
        const url = `https://reqres.in/api/users?page=${pageId}`;
        return this.dataFetcherService.fetch(url).pipe(
          map((payload: UsersPageInterface) => {
            return usersActions.upsertUsersPage({ payload });
          }),
          catchError(() => {
            return of(usersActions.requestUsersFailed());
          })
        );
      })
    )
  );

}
