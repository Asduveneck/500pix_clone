// React
import React from 'react';
import ReactDOM from 'react-dom';

// Components:
import Root from './components/root';
import configureStore from './store/store';


document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  let store;
  if (window.currentUser) { // If there is a current User
    const preLoadedState = { // make a preloaded state shaped like:
      session: {id: window.currentUser.id },
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      }
    };
    store = configureStore(preLoadedState);
    delete window.currentUser; // removes currentUser from window since we logged in now.
  } else { // No current User, so not logged in.
    store = configureStore();
  }

  ReactDOM.render( <Root store={store}/> , root);

})

