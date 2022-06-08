import { RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../../../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { DataFetcherService } from "./services/data-fetcher.service";
import { HttpClientModule } from "@angular/common/http";
import { RoutingModule } from "../routing-module/routing-module.module";

@NgModule({
  imports: [
    RoutingModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forRoot(),
    HttpClientModule
  ],
  providers: [
    DataFetcherService
  ],
  exports: [RouterModule]
})
export class CoreModule { }
