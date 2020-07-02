import { Action, createReducer, on } from '@ngrx/store';
import * as BookstoreActions from './actions';
import { BookstoreState, initializeState } from './state';

import { Book } from '../../models/Book';
import { State } from './selectors';

const initialState = initializeState();

const reducer = createReducer(
    initialState,
    on(BookstoreActions.GetBooks, (state: BookstoreState) => {
        return {
            ...state,
            uiCollectionState: {
                ...state.uiCollectionState,
                loading: true,
                success: false,
                error: null
            }
        };
    }),
    on(BookstoreActions.GetBooksSuccess, (state: BookstoreState, { payload }) => {
        return {
            ...state,
            books: [
                ...state.books,
                ...payload
            ],
            uiCollectionState: {
                ...state.uiCollectionState,
                dataHasLoaded: true,
                loading: false,
                success: true
            }
        };
    }),
    on(BookstoreActions.GetBooksFailure, (state: BookstoreState, error: Error) => {
        return {
            ...state,
            uiCollectionState: {
                ...state.uiCollectionState,
                loading: false,
                success: false,
                error
            }
        };
    }),
    on(BookstoreActions.AddBook, (state: BookstoreState, { payload }) => {
        return {
            ...state,
            uiCollectionState: {
                ...state.uiCollectionState,
                loading: true,
                success: false,
                error: null
            }
        };
    }),
    on(BookstoreActions.AddBookSuccess, (state: BookstoreState, { payload }) => {
        return {
            ...state,
            books: [
                ...state.books,
                payload
            ],
            uiCollectionState: {
                ...state.uiCollectionState,
                loading: false,
                success: true
            }
        };
    })
);

export function BookstoreReducer(
    state: BookstoreState | undefined,
    action: Action
): BookstoreState {
    return reducer(state, action);
}
