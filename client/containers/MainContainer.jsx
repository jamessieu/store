import React, { Component } from 'react';
import { connect } from 'react-redux';
import HeaderComponent from '../components/HeaderComponent.jsx'
import ProductDisplay from '../components/ProductDisplayComponent.jsx' 




class MainContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <HeaderComponent />
        <ProductDisplay /> 
      </div>
    );
  }
}


export default MainContainer;