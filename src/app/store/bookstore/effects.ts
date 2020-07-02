import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap, map, switchMap, withLatestFrom, catchError } from 'rxjs/operators';
import { Action, select, Store } from '@ngrx/store';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { BookstoreService } from '../../shared/services/bookstore.service';
import { BookstoreAction, BookstoreSelect } from '../bookstore';
import { State } from '../state';

import { Book } from '../../models/Book';

@Injectable()
export class BookstoreEffects {

    constructor(
        private store$: Store<State>,
        private actions$: Actions,
        private bookstoreService: BookstoreService
    ) { }

    getBooks$ = createEffect(() =>
        this.actions$.pipe(
            ofType(BookstoreAction.GetBooks),
            switchMap(action =>
                this.bookstoreService.getBooks().pipe(
                    map(books => {
                        const mappedBooks = books.map(b => new Book(b));
                        return BookstoreAction.GetBooksSuccess({ payload: mappedBooks });
                    }),
                    catchError(error => of(BookstoreAction.GetBooksFailure(error)))
                )
            ),
            catchError(error => of(BookstoreAction.GetBookFailure(error)))
        )
    );

    addBook$ = createEffect(() =>
        this.actions$.pipe(
            ofType(BookstoreAction.AddBook),
            switchMap(action => {
                // before we pass the newly created book down to the success action
                // we need to format the published property accordingly since we need a datestring
                // type format for the presentation layer
                const book = {
                    ...action.payload,
                    published: new Date(Number(action.payload.published), 0, 1).toDateString()
                };
                return of(BookstoreAction.AddBookSuccess({ payload: book }));
            }),
            catchError(error => of(BookstoreAction.AddBookFailure(error)))
        )
    );

}
