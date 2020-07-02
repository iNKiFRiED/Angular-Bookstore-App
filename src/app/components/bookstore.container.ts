import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

import { Book } from '../models/Book';
import { BookstoreAction, BookstoreSelect } from '../store';
import { UICollectionState } from '../models/UICollectionState';
import { BookstoreState } from '../store/bookstore/state';
import { State } from '../store/state';

@Component({
    selector: 'app-bookstore-container',
    templateUrl: './bookstore.container.html'
})
export class BookstoreContainerComponent implements OnInit, OnDestroy {

    books$: Observable<BookstoreState>;
    booksSubscription: Subscription;

    books: Book[] = [];
    collectionState: UICollectionState;

    constructor(
        private store: Store<State>,
        private router: Router
    ) {
        this.books$ = this.store.pipe(select('bookstore'));
    }

    ngOnInit() {
        this.booksSubscription = this.books$
            .pipe(
                map(x => {
                    this.books = x.books;
                    this.collectionState = x.uiCollectionState;
                })
            )
            .subscribe();

        if (!this.collectionState.dataHasLoaded) {
            this.store.dispatch(BookstoreAction.GetBooks());
        }
    }

    ngOnDestroy() {
        if (this.booksSubscription) {
            this.booksSubscription.unsubscribe();
        }
    }

}
