export interface UICollectionState {
    loading: boolean;
    dataHasLoaded: boolean;
    error: Error;
    success: boolean;
}

export const DEFAULT_COLLECTION_STATE: UICollectionState = {
    loading: false,
    dataHasLoaded: false,
    error: null,
    success: false
};
