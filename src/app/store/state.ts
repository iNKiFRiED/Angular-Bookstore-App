import * as Router from '@ngrx/router-store';

import { BookstoreState } from './bookstore/state';

export interface State {
  router: Router.RouterReducerState;
  bookstore: BookstoreState;
}
