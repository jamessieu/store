import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './App.jsx';
import store from './store';

<script src="/socket.io/socket.io.js"></script>
render(
  <Provider store={store}>
    <App />
  </Provider>, 
  document.getElementById('root')
);


