//Will need state to render the products on the the main page. 
import React from 'react'
import SingleProduct from '../components/SingleProduct.jsx'






const ProductDisplay = () => {
  return (
    <div className="productdisplay"> 
        {/* //Should display ProductItems.  */}
        <p>Super Cool Products</p>
        <SingleProduct />
     </div>
)}



export default ProductDisplay; 