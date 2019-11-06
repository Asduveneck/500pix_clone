// React
import React from 'react';
import ReactDOM from 'react-dom';

// Components to make:
// import Root from './components/root';
import configureStore from './store/store';

// Components to Test on Window:



document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  const store = configureStore(); // imports store 

  ReactDOM.render( <h1>1000 Pix entry file in 'frontend'. </h1>, root);

  // Window Testing: 
  window.getState = store.getState;
  window.dispatch = store.dispatch;

})

