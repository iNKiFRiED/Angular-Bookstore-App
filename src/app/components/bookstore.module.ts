import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FilterBooksPipe } from '../shared/filter-books.pipe';
import { UIComponentsModule } from '../ui-components/ui-components.module';

import { BookstoreComponent } from './bookstore.component';
import { BookstoreContainerComponent } from './bookstore.container';
import { BookDetailComponent } from './detail/detail.component';
import { BookDetailContainerComponent } from './detail/detail.container';
import { BookCreateComponent } from './create/create.component';
import { BookCreateContainerComponent } from './create/create.container';

import { BookstoreRoutingModule } from './bookstore.routing';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        BookstoreRoutingModule,
        UIComponentsModule
    ],
    declarations: [
        FilterBooksPipe,
        BookCreateComponent,
        BookDetailComponent,
        BookstoreComponent,
        BookCreateContainerComponent,
        BookDetailContainerComponent,
        BookstoreContainerComponent
    ]
})
export class BookstoreModule { }
