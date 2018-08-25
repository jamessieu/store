import React, { Component } from 'react';
import { connect } from 'react-redux';
import HeaderComponent from '../components/HeaderComponent.jsx';
import Chat from '../components/CustomerService.jsx';

class MainContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div> 
        H3llo from react MainContainer
        <HeaderComponent />
        <Chat/>
      </div>
    );
  }
}


export default MainContainer;