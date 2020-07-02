import { Component, Input, OnDestroy, OnInit, NgZone } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

import { Book } from '../../models/Book';
import { BookstoreAction } from '../../store';
import * as BookstoreSelect from '../../store/bookstore/selectors';
import { UICollectionState } from '../../models/UICollectionState';
import { BookstoreState } from '../../store/bookstore/state';
import { State } from '../../store/state';

@Component({
    selector: 'app-book-detail-container',
    templateUrl: './detail.container.html'
})
export class BookDetailContainerComponent implements OnInit, OnDestroy {

    books$: Observable<BookstoreState>;
    booksSubscription: Subscription;
    routerSubscription: Subscription;

    isbn: string;
    book: Book;
    books: Book[] = [];
    collectionState: UICollectionState;

    constructor(
        private store: Store<State>,
        private router: Router,
        private route: ActivatedRoute,
        private ngZone: NgZone
    ) {
        this.books$ = this.store.pipe(select('bookstore'));
    }

    ngOnInit() {
        this.isbn = this.route.snapshot.params.isbn;
        // subscribe to router's NavigationEnd event to get new ISBN param
        // this container will notify the presentation component to load new book
        this.routerSubscription = this.router.events.subscribe(ev => {
            if (ev instanceof NavigationEnd) {
                this.isbn = this.route.snapshot.params.isbn;
                // scroll to top of the page to show newly loaded book
                const scrollToTop = window.setInterval(() => {
                    const yOffset = window.pageYOffset;
                    if (yOffset > 0) {
                        window.scrollTo(0, yOffset - 20);
                    } else {
                        window.clearInterval(scrollToTop);
                    }
                }, 20);
            }
        });
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
        // cleanup for open subscriptions
        if (this.booksSubscription) {
            this.booksSubscription.unsubscribe();
        }
        if (this.routerSubscription) {
            this.routerSubscription.unsubscribe();
        }
    }

}
