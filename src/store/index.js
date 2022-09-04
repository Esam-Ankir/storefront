import { combineReducers, createStore } from 'redux';
import categories from './categories';
import products from './products';
import { composeWithDevTools } from 'redux-devtools-extension';

let reducers = combineReducers({ categories, products })

const store = () => {

    return createStore(reducers, composeWithDevTools());

}

export default store();