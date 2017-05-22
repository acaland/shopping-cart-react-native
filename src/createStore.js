import { createStore, applyMiddleware, combineReducers } from 'redux';
import { logger } from 'redux-logger';
import promiseMiddleware from 'redux-promise';
import shoppingListReducer from './reducers/shoppingListReducer';

export default (initialState = {}) => (
  createStore(combineReducers({
    items: shoppingListReducer
  }), initialState, applyMiddleware(logger, promiseMiddleware))
);
