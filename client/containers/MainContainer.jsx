import React, { Component } from 'react';
import { connect } from 'react-redux';
import HeaderComponent from '../components/HeaderComponent.jsx'




class MainContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <HeaderComponent />
      </div>
    );
  }
}


export default MainContainer;