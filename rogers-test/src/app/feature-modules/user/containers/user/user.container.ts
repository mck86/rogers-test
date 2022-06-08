import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { select, Store } from "@ngrx/store";
import { UserFeatureState } from "../../reducers";
import { ActivatedRoute } from "@angular/router";
import { distinctUntilChanged, filter, map, Observable, switchMap, tap } from "rxjs";
import { UserDataInterface } from "../../interfaces/user.interface";
import { selectUserEntities } from "../../selectors/user.selectors";
import { requestUser } from "../../actions/user.actions";

@Component({
  selector: 'user-container',
  templateUrl: './user.container.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserContainer implements OnInit {

  userData$: Observable<UserDataInterface | undefined>;
  constructor(private store: Store<UserFeatureState>, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.userData$ = this.fetchUserData();
  }

  private fetchUserData(): Observable<UserDataInterface | undefined> {
    return this.activatedRoute.params.pipe(
      map(data => {
        return data['id'];
      }),
      distinctUntilChanged(),
      switchMap(userId => {
        return this.store.pipe(
          select(selectUserEntities),
          map(users => {
            return { userId, users };
          })
        );
      }),
      tap(data => {
        if (!data.users[data.userId]) {
          this.store.dispatch(
            requestUser({ userId: data.userId })
          );
        }
      }),
      filter(data => !!data.users[data.userId]),
      map(data => data.users[data.userId])
    );
  }
}
