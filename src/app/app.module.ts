import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { FilterBooksPipe } from './shared/filter-books.pipe';
import { AppRouterModule } from './router/router.module';
import { UIComponentsModule } from './ui-components/ui-components.module';
import { AppComponent } from './app.component';

import { BookstoreHttpInterceptor } from './shared/services/interceptor.service';

import { StoreModule as BookStoreModule } from './store';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRouterModule,
    FormsModule,
    ReactiveFormsModule,
    UIComponentsModule,
    BookStoreModule,
    StoreModule.forRoot({}),
    StoreDevtoolsModule.instrument({
      maxAge: 25 //  Retains last 25 states
    }),
    EffectsModule.forRoot([])
  ],
  providers: [
    FilterBooksPipe,
    { provide: HTTP_INTERCEPTORS, useClass: BookstoreHttpInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
