import { ChangeDetectionStrategy, Component, Input, OnInit } from "@angular/core";
import { select, Store } from "@ngrx/store";
import { UserFeatureState } from "../../reducers";
import { map, Observable, tap } from "rxjs";
import { UserResourceDataInterface } from "../../interfaces/user-resource.interface";
import { selectUserResourceEntities } from "../../selectors/user-resource.selectors";
import { requestUserResource } from "../../actions/user-resource.actions";

@Component({
  selector: 'user-resource-container',
  templateUrl: './user-resource.container.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserResourceContainer implements OnInit {
  @Input('userId') userId: number;
  userResourceData$: Observable<UserResourceDataInterface | undefined>;
  constructor(private store: Store<UserFeatureState>) { }

  ngOnInit(): void {
    this.userResourceData$ = this.fetchUserResourceData();
  }

  private fetchUserResourceData(): Observable<UserResourceDataInterface | undefined> {
    return this.store.pipe(
      select(selectUserResourceEntities),
      tap(data => {
        if (!data[this.userId]) {
          this.store.dispatch(
            requestUserResource({ userId: this.userId })
          );
        }
      }),
      map(users => {
        return users[this.userId];
      }),
      // filter(data => !!data.users[data.userId]),
      // map(data => data.users[data.userId])
    );
  }
}
