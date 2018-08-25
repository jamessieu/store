import React, { Component } from 'react';
import { connect } from 'react-redux';
import HeaderComponent from '../components/HeaderComponent.jsx'
import ProductDisplay from '../components/ProductDisplayComponent.jsx' 
import LeftSidebarMenuComponent from '../components/LeftSidebarMenuComponent.jsx'
import axios from 'axios'; 


const URL = 'https://localhost3000.com'





class MainContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      images: []

    }
  }
}


axios.get(API_URI) 
  .then((response) => {
    const items = response.
  
  

}); 



render() {
  return (
    <div>
      <HeaderComponent />
      <ProductDisplay /> 
      <LeftSidebarMenuComponent />
    </div>
  );
}



export default MainContainer;



import React from 'react';
