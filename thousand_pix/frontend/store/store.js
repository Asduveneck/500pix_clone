import {createStore, applyMiddleware} from 'redux'; 
import logger from 'redux-logger';
import thunk from 'redux-thunk'; 

import rootRed from '../reducers/root_reducer';

const configureStore = (preLoadedState = {}) => (
  createStore(rootRed, preLoadedState, applyMiddleware(thunk, logger))
);

export default configureStore;