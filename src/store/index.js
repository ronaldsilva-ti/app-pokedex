import { createStore, combineReducers } from 'redux';
import modal from './ducks/modal';

const rootReducer = combineReducers({
  modal,
});

export default createStore(rootReducer);
