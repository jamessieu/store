import * as types from '../constants/actionTypes';

const initialState = {
    cart: [],
    stock: [{
            ProductID: 1,
            quantity: 30,
            title: "T-Shirt",
            "product-image-path": "https://target.scene7.com/is/image/Target/52377357?wid=1400",
            price: "15.99"
            },
            {
            ProductID: 2,
            quantity: 16,
            title: "Blouse",
            "product-image-path": "https://target.scene7.com/is/image/Target/50362600?wid=1400",
            price: "35.99"
            },
            {
            ProductID: 3,
            quantity: 1,
            title: "Sweater",
            "product-image-path": "https://target.scene7.com/is/image/Target/53152327?wid=1400",
            price: "18.99"
            }],
    // stock: []
}

const products = (state=initialState, action) => {

    let cart;
    let stock;
    
    switch(action.type) {
        case types.LOAD_PRODUCTS:
            let items = action.payload;
            // return [...state, ...items];
            console.log('state: ', state);
            return Object.assign(state, {stock: items, cart: []})
        case types.ADD_CART:
            cart = state.cart;
            stock = state.stock.map(product => {
                if(product.ProductID === action.productID) {
                    const productObj = {
                        ProductID: product.ProductID,
                        quantity: product.quantity - 1,
                        title: product.title,
                        "product-image-path": product["product-image-path"],
                        price: product.price
                    }     
                    return productObj;
                } else {
                    return product;
                }
            });

            console.log('stock: ', stock);
            // console.log('cart: ', cart);
            return Object.assign(state, {stock, cart})
            
        default:
            return state;
    }
}

export default products;