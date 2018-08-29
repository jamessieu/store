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

                                
            //iterate through array of objects
                //if exits, increment by 1
                //no, create and set count to 1 and push to array
            //     console.log(cart.length);
            // for(let x = 0; x < cart.length; x += 1){
            //     console.log('cart: ', cart[x]);
            //     console.log('ProductID:  ',art[x].ProductID, 'actionID: ', action.productID );
            //     if(cart[x].ProductID === action.productID){
            //         (cart[x].count === undefined) ? cart.push({ProductID: action.productID, count: 1}) : cart[x].count += 1;
            //     }
            // }
     
            console.log('stock: ', stock);
            // console.log('cart: ', cart);
            return Object.assign(state, {stock, cart})
            
        default:
            return state;
    }
}

export default products;