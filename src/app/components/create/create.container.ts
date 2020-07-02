import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { FormGroup } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

import { Book } from '../../models/Book';
import { BookstoreAction, BookstoreSelect } from '../../store';
import { UICollectionState } from '../../models/UICollectionState';
import { BookstoreState } from '../../store/bookstore/state';
import { State } from '../../store/state';

@Component({
    selector: 'app-book-create-container',
    templateUrl: './create.container.html'
})
export class BookCreateContainerComponent implements OnInit, OnDestroy {

    constructor(
        private store: Store<State>,
        private router: Router
    ) { }

    ngOnInit() { }

    ngOnDestroy() { }

    addBook(book: Book) {
        this.store.dispatch(BookstoreAction.AddBook({ payload: book }));
        this.router.navigateByUrl('/books');
    }

}
