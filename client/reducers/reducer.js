import { combineReducers } from 'redux';
import userInfoReducer from './userInfoReducer.js'

const reducers = combineReducers({
  chat: userInfoReducer
})

export default reducers;