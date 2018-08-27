import { combineReducers } from 'redux';
import productsReducer from './productReducer';


const reducers = combineReducers({
    products: productsReducer
});

export default reducers;