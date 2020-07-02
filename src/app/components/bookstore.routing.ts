import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BookCreateContainerComponent } from './create/create.container';
import { BookDetailContainerComponent } from './detail/detail.container';
import { BookstoreContainerComponent } from './bookstore.container';

const routes: Routes = [
    { path: '', component: BookstoreContainerComponent },
    { path: 'add', component: BookCreateContainerComponent },
    { path: 'detail/:isbn', component: BookDetailContainerComponent }
];

@NgModule({
    exports: [RouterModule],
    imports: [RouterModule.forChild(routes)]
})
export class BookstoreRoutingModule { }
