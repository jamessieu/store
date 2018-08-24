import React, { Component } from 'react';
import { connect } from 'react-redux';
import HeaderComponent from './components/HeaderComponent'




class MainContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {HeaderComponent}
        H3llo from react MainContainer
      </div>
    );
  }
}


export default MainContainer;