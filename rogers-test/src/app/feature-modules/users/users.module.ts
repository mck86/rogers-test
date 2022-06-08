import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersContainer } from "./containers/users/users.container";
import { RouterModule, Routes } from "@angular/router";
import { StoreModule } from '@ngrx/store';
import * as fromUsers from './reducers';
import { EffectsModule } from '@ngrx/effects';
import { UsersEffects } from './effects/users.effects';
import { DataFetcherService } from "../../modules/core-module/services/data-fetcher.service";

export const routes: Routes = [
  {
    path: '',
    component: UsersContainer
  },
];

@NgModule({
  declarations: [
    UsersContainer
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('users', fromUsers.reducers),
    EffectsModule.forFeature([UsersEffects])
  ],
  providers: [
    DataFetcherService
  ],
  bootstrap: [UsersContainer]
})
export class UsersModule { }
