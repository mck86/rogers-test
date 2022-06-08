import { UserContainer } from "./containers/user/user.container";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { EffectsModule } from "@ngrx/effects";
import { DataFetcherService } from "../../modules/core-module/services/data-fetcher.service";
import { NgModule } from "@angular/core";
import { StoreModule } from "@ngrx/store";
import { reducers } from "./reducers";
import { UserEffects } from "./effects/user.effects";
import { UserResourceContainer } from "./containers/user-resource/user-resource.container";
import { UserResourceEffects } from "./effects/user-resource.effects";

export const routes: Routes = [
  {
    path: ':id',
    component: UserContainer
  }
];

@NgModule({
  declarations: [
    UserContainer,
    UserResourceContainer
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('user', reducers),
    EffectsModule.forFeature([UserEffects, UserResourceEffects])
  ],
  providers: [
    DataFetcherService
  ]
})
export class UserModule { }
