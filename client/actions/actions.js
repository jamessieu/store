import * as types from '../constants/actionTypes';

export const loadStore = () => ({
  type: types.LOAD_STORE,
  payload: {products},
})

// export const fetchProductsBegin = () => {
//   type: types.FETCH_PRODUCTS_BEGIN
// }

// export const fetchProductsSuccess = (products) => {
//   type: types.FETCH_PRODUCTS_SUCCESS;
//   payload: { products }
// }

// export const fetchProductsFailure = (error) => {
//   type: types.FETCH_PRODUCTS_ERROR;
//   payload: { error }
// }



// export function fetchProducts() {
//   return dispatch => {
//     dispatch(fetchProductsBegin());
//     return fetch("/main")
//       .then(handleErrors)
//       .then(res => res.json())
//       .then(json => {
//         dispatch(fetchProductsSuccess(json.products));
//         return json.products;
//       })
//       .catch(error => dispatch(fetchProductsFailure(error)));
//   };
//   // Handle HTTP errors since fetch won't.
//   function handleErrors(response) {
//     if (!response.ok) {
//       throw Error(response.statusText);
//     }
//     return response;
//   }
  
// }