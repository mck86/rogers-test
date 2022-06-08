import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { DataFetcherService } from "../../../modules/core-module/services/data-fetcher.service";
import { catchError, map, of, switchMap } from "rxjs";
import * as userActions from "../actions/user.actions";
import { UserInterface } from "../interfaces/user.interface";

@Injectable()
export class UserEffects {
  constructor(private actions$: Actions, private dataFetcherService: DataFetcherService) {}

  usersRequest$ = createEffect(() =>
    this.actions$.pipe(
      ofType(userActions.requestUser),
      switchMap(({ userId }) => {
        const url = `https://reqres.in/api/users/${userId}`;
        return this.dataFetcherService.fetch(url).pipe(
          map((payload: UserInterface) => {
            return userActions.upsertUser({ payload });
          }),
          catchError(() => {
            return of(userActions.requestUserFailed());
          })
        );
      })
    )
  );

}
