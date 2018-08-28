import * as types from '../constants/actionTypes';

const dbURL = 'postgres://bqufsisv:GF9pz3P09rMGLSVfKA0baTop5Nx4vdC6@pellefant.db.elephantsql.com:5432/bqufsisv';

const initialState = {
  items: []
};

const storeReducer = (state = initialState, action) => {
  let items = [];

  switch(action.type) {
    case types.LOAD_STORE:
      fetch('/main')
      .then(response => console.log('response is ' ,response))
      .then(data => console.log('data is: ', data));
      console.log('helloworld');
      return {
        ...state,
        products: action.payload.products
      }
    default: 
      return state;
    }
};

export default storeReducer;