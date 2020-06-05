import {PRODUCTS} from '../shared/products';
import {COMMENTS} from '../shared/comments';
import {STORES} from '../shared/stores';
import {PROMOTIONS} from '../shared/promotions';



export const initialState = {
    products: PRODUCTS,
    comments: COMMENTS,
    stores: STORES,
    promotions:PROMOTIONS
};

export const Reducer = (state = initialState, action) => {
    return state;
};