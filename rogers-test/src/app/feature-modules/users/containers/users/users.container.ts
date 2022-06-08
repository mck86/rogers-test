import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { select, Store } from "@ngrx/store";
import { UsersState } from "../../reducers";
import { filter, map, Observable, tap } from "rxjs";
import { UsersPageInterface } from "../../interfaces/users-page.interface";
import { selectUsersPageState } from "../../selectors/users.selectors";
import { requestUsers } from "../../actions/users.actions";

@Component({
  selector: 'users-containers',
  templateUrl: './users.container.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsersContainer implements OnInit {

  usersData$: Observable<UsersPageInterface>;
  pageArr: Array<number> = [];
  constructor(private store: Store<UsersState>) { }

  ngOnInit(): void {
    this.changePage(1);
    this.usersData$ = this.getUsersData();
  }

  public changePage(pageId: number) {
    this.store.dispatch(requestUsers({ pageId }))
  }

  private getUsersData(): Observable<UsersPageInterface> {
    return this.store.pipe(
      select(selectUsersPageState),
      filter(data => !!data.entities && !!data.currentPage),
      map(data => {
        return data.entities[data.currentPage] || { page: 0 };
      }),
      tap(data => {
        this.pageArr = [];
        let x = 1;
        const totalPages = data.total_pages || 0;
        while (x <= totalPages) {
          this.pageArr.push(x);
          x++;
        }
      }),
    );
  }

}
