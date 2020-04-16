import { Reducer } from 'redux';
import { ProductActions, ProductActionTypes } from './actions';

// What is a product?
export interface IProduct {
    name: string,
    description: string,
    stock: number
}

// Define the state.
export interface IProductState {
    readonly products: IProduct[]
}

// Default populated state value (empty array, in this case.)
const initialProductState: IProductState = {
    products: []
}

export const productReducer: Reducer<IProductState, ProductActions> = 
( state = initialProductState, action ) => {
    switch ( action.type )
    {
        case ProductActionTypes.GET_ALL:
            return {
                ...state, // Spread operator.
                // products: action.products
            }
        case ProductActionTypes.GET_ONE:
            return {
                ...state, // Spread operator.
                // products: action.product
            }
        default:
            return state;
    }
}