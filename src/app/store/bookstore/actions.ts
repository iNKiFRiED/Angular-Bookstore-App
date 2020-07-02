import { createAction, props } from '@ngrx/store';
import { FormGroup } from '@angular/forms';

import { Book } from '../../models/Book';

export const GET_BOOKS = 'Get books';
export const GET_BOOKS_SUCCESS = 'Get books success';
export const GET_BOOKS_FAILURE = 'Get books failure';

export const GET_BOOK = 'Get book';
export const GET_BOOK_SUCCESS = 'Get book success';
export const GET_BOOK_FAILURE = 'Get book failure';

export const ADD_BOOK = 'Add book';
export const ADD_BOOK_SUCCESS = 'Add book success';
export const ADD_BOOK_FAILURE = 'Add book failure';

export const GetBooks = createAction(
    GET_BOOKS
);

export const GetBooksSuccess = createAction(
    GET_BOOKS_SUCCESS,
    props<{ payload: Book[] }>()
);

export const GetBooksFailure = createAction(
    GET_BOOKS_FAILURE,
    props<Error>()
);

export const GetBook = createAction(
    GET_BOOK,
    props<{ payload: string }>()
);

export const GetBookSuccess = createAction(
    GET_BOOK_SUCCESS,
    props<{ payload: Book }>()
);

export const GetBookFailure = createAction(
    GET_BOOK_FAILURE,
    props<Error>()
);

export const AddBook = createAction(
    ADD_BOOK,
    props<{ payload: Book }>()
);

export const AddBookSuccess = createAction(
    ADD_BOOK_SUCCESS,
    props<{ payload: Book }>()
);

export const AddBookFailure = createAction(
    ADD_BOOK_FAILURE,
    props<Error>()
);
