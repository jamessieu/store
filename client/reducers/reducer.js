import { combineReducers } from 'redux';
import { types } from '../../node_modules/pg-promise/typescript/pg-subset';
//import * types from './constants/actionTypes';


const initialState = {
    productList: [],

}

const productsReducer = (state=initialState, action) => {
    let productList = state.productList

    switch(action.type) {
        case types.LOAD_PRODUCTS:
            const l

    }















}




const reducers = combineReducers({

})

export default reducers;