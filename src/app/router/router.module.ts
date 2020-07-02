import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';

import { InternalErrorComponent as InternalErrorPage } from '../shared/internal-error';
import { NotFoundComponent as NotFoundPage } from '../shared/not-found';

/**
 * Here we declare top level routes and laso lazy-loaded routes,
 * along with the wildcard routes and also the error fallback routes.
 * In this case the bookstore module is lazy-loaded.
 * If we had more complexity, each part of the bookstore (ie cart/checkout etc)
 * would have their own lazy-loaded routes declared here
 */
const routes: Routes = [
  {
    path: '',
    redirectTo: '/books',
    pathMatch: 'full'
  },
  {
    path: 'books',
    loadChildren: () => import('../components/bookstore.module').then(m => m.BookstoreModule)
  },
  {
    path: '500',
    component: InternalErrorPage
  },
  {
    path: '404',
    component: NotFoundPage
  },
  {
    path: '**',
    component: NotFoundPage
  }
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forRoot(routes, {
      useHash: false
    })
  ],
  exports: [
    RouterModule
  ]
})
export class AppRouterModule { }
