import { createStore, combineReducers } from 'redux';

import { composeWithDevTools } from 'redux-devtools-extension';

import Categories from './Categories';
import Products from './Products';
import Cart from './CartRedux'

let reducers = combineReducers({ Categories, Products, Cart });

const store = () => {
  return createStore(reducers, composeWithDevTools());
};

export default store();