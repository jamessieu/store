import React, { Component } from 'react';
import { connect } from 'react-redux';
import HeaderComponent from '../components/HeaderComponent.jsx';
import Chat from '../components/CustomerService.jsx';
import ProductDisplay from '../components/ProductDisplayComponent.jsx';
// import LeftSidebarMenuComponent from '../components/LeftSidebarMenuComponent.jsx';
import axios from 'axios'; 

class MainContainer extends Component {
  constructor(props) {
    super(props);
  }
render() {
  return (
    <div> 
      <Chat/>
      <HeaderComponent />
      <ProductDisplay /> 
    </div>
    );
  }
}


// axios.get(API_URI) 
//   .then((response) => {
//     const items = response;
//   });



export default MainContainer;