/**
 * ************************************
 *
 * @module  index.js
 * @author
 * @date
 * @description simply a place to combine reducers
 *
 * ************************************
 */

import { combineReducers } from 'redux';

// import all reducers here
import storeReducer from './storeReducer';


// combine reducers
const reducers = combineReducers({
  store: storeReducer
});

// make the combined reducers available for import
export default reducers;