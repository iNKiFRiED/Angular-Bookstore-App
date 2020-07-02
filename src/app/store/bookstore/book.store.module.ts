import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { BookstoreEffects } from './effects';
import { BookstoreReducer } from './reducer';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('bookstore', BookstoreReducer),
    EffectsModule.forFeature([BookstoreEffects])
  ],
  providers: [BookstoreEffects]
})
export class BookStoreModule { }
