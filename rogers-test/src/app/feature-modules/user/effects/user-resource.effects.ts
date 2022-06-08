import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { DataFetcherService } from "../../../modules/core-module/services/data-fetcher.service";
import { catchError, map, of, switchMap } from "rxjs";
import * as userResourceActions from "../actions/user-resource.actions";
import { UserResourceInterface } from "../interfaces/user-resource.interface";

@Injectable()
export class UserResourceEffects {
  constructor(private actions$: Actions, private dataFetcherService: DataFetcherService) {}

  userResourceRequest$ = createEffect(() =>
    this.actions$.pipe(
      ofType(userResourceActions.requestUserResource),
      switchMap(({ userId }) => {
        const url = `https://reqres.in/api/unknown/${userId}`;
        return this.dataFetcherService.fetch(url).pipe(
          map((payload: UserResourceInterface) => {
            return userResourceActions.upsertUserResource({ payload });
          }),
          catchError(() => {
            return of(userResourceActions.requestUserResourceFailed());
          })
        );
      })
    )
  );

}
