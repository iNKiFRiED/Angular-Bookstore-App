import { ErrorHandler, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreModule as NgrxStoreModule, ActionReducerMap } from '@ngrx/store';
import { EffectsModule as NgrxEffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule as NgrxRouterStoreModule } from '@ngrx/router-store';
import { StoreDevtoolsModule as NgrxStoreDevtoolsModule } from '@ngrx/store-devtools';

import { SharedModule } from '../shared/shared.module';

import { environment } from '../../environments/environment';

import { BookStoreModule } from './bookstore';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    BookStoreModule,

    /**
     * StoreModule.provideStore is imported once in the root module, accepting a reducer
     * function or object map of reducer functions. If passed an object of
     * reducers, combineReducers will be run creating your application
     * meta-reducer. This returns all providers for an @ngrx/store
     * based application.
     */
    NgrxStoreModule.forRoot({}),

    /**
     * @ngrx/router-store keeps router state up-to-date in the store and uses
     * the store as the single source of truth for the router's state.
     */
    NgrxRouterStoreModule.forRoot({ stateKey: 'router' }),

    /**
     * Store devtools instrument the store retaining past versions of state
     * and recalculating new states. This enables powerful time-travel
     * debugging.
     *
     * To use the debugger, install the Redux Devtools extension for either
     * Chrome or Firefox
     *
     * See: https://github.com/zalmoxisus/redux-devtools-extension
     */
    NgrxStoreDevtoolsModule.instrument({
      name: 'NgRx Store DevTools',
      logOnly: environment.production
    }),

    /**
     * EffectsModule.forRoot([...]) sets up the effects class to be initialized
     * immediately when the application starts.
     *
     * See: https://github.com/ngrx/effects/blob/master/docs/api.md#run
     */

    NgrxEffectsModule.forRoot([])
  ],
})
export class StoreModule {
}
