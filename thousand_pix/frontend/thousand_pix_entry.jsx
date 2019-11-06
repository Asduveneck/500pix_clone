// React
import React from 'react';
import ReactDOM from 'react-dom';

// Components to make:
import Root from './components/root';
import configureStore from './store/store';




document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  const store = configureStore(); // imports store 

  ReactDOM.render( <Root store={store}/> , root);

})

