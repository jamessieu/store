//Will need state to render the products on the the main page. 
import React, { Component } from 'react';
import { connect } from 'react-redux';
// import SingleProduct from '../components/SingleProduct'

// const mapDispatchToProps = dispatch => ({
//   showItems: () => dispatch(actions.loadStore())
// })

class ProductDisplay extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div className='productdisplay'>
        <p>Super Cool Products</p>
        <p>Test</p>
      </div>
    );
  }
}



export default ProductDisplay;
// export default connect(mapDispatchToProps)(ProductDisplay);