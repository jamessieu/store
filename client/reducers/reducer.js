import { combineReducers } from 'redux';
<<<<<<< HEAD
import userInfoReducer from './userInfoReducer.js'

const reducers = combineReducers({
  chat: userInfoReducer
})
=======
import productsReducer from './productReducer';


const reducers = combineReducers({
    products: productsReducer
});
>>>>>>> master

export default reducers;