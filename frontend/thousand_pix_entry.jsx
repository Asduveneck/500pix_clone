// React
import React from 'react';
import ReactDOM from 'react-dom';

// Components:
import Root from './components/root';
import configureStore from './store/store';

//Window Tests:
// import {createPhoto, fetchPhotos, fetchPhoto, updatePhoto, deletePhoto } from './util/photo_api_util';  // ajax not tested yet
import {createPhoto, fetchPhoto, updatePhoto, deletePhoto} from './actions/photo_actions'

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

  // ========================= Testing on Window ===============================
  
  window.getState = store.getState;
  window.dispatch = store.dispatch;

  window.createPhoto = createPhoto 
  window.fetchPhoto = fetchPhoto 
  window.updatePhoto = updatePhoto 
  window.deletePhoto = deletePhoto

  
  window.photo1 = {title: "fluffy_banana"};
  window.photo2_invalid = {}; 
  



})

