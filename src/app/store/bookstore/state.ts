import { Book } from '../../models/Book';
import { UICollectionState, DEFAULT_COLLECTION_STATE } from '../../models/UICollectionState';

export class BookstoreState {
    books: Array<Book>;
    uiCollectionState: UICollectionState;
}

export const initializeState = (): BookstoreState => {
    return {
        books: [],
        uiCollectionState: { ...DEFAULT_COLLECTION_STATE }
    };
};
