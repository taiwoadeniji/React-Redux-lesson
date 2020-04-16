import { createStore, Store, combineReducers } from 'redux';
import { productReducer, IProductState } from './reducers';

// Interface for our application state.
export interface IAppState {
    productState: IProductState
}

// Set up a root reducer.
const rootReducer = combineReducers<IAppState>({
    productState: productReducer
});

// Global storage.
export default function configureStore (): Store<IAppState, any> {
    const store = createStore( rootReducer );
    return store;
}