import { createFeatureSelector, createSelector, MemoizedSelector } from '@ngrx/store';
import { BookstoreState } from './state';

import { Book } from '../../models/Book';

const getBooks = (state: BookstoreState) => state.books;
const getUICollectionState = (state: BookstoreState) => state.uiCollectionState;
const getDataHasLoaded = (state: BookstoreState) => state.uiCollectionState.dataHasLoaded;

export const State: MemoizedSelector<object, BookstoreState> = createFeatureSelector<BookstoreState>('book');

export const books = createSelector(State, getBooks);
export const uiCollectionState = createSelector(State, getUICollectionState);
export const dataHasLoaded = createSelector(State, getDataHasLoaded);
export const bookByIsbn = (isbn) => createSelector(books, (allBooks: Book[]) => {
    if (allBooks) {
        return allBooks.find(elem => {
            return elem.isbn13 === isbn;
        });
    } else {
        return {};
    }
});
