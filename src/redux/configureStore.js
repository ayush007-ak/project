import {createStore, combineReducers, applyMiddleware} from 'redux';
import {Products} from './products';
import {Comments} from './comments';
import {Promotions} from './promotions';
import {Stores} from './stores';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { createForms } from 'react-redux-form';
import { InitialFeedback } from './forms';


export const ConfigureStore = () => {
    const store = createStore(
      combineReducers({
          products: Products,
          comments:Comments,
          promotions: Promotions,
          stores: Stores,
          ...createForms({
            feedback: InitialFeedback
        })


      }),
      applyMiddleware(thunk, logger)
    );

    return store;
}