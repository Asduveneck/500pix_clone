// React
import React from 'react';
import ReactDOM from 'react-dom';

// Components:
import Root from './components/root';
import configureStore from './store/store';

//Window Tests:
// import {createPhoto, fetchPhoto, fetchPhotos, updatePhoto, deletePhoto } from './util/photo_api_util';  // ajax not tested yet
import { receivePhoto, receivePhotos, delPhoto, createPhoto, fetchPhoto, fetchPhotos, updatePhoto, deletePhoto} from './actions/photo_actions'

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


  window.receivePhoto = receivePhoto; 
  window.receivePhotos = receivePhotos; 
  window.delPhoto = delPhoto; 

  window.createPhoto = createPhoto; 
  window.fetchPhoto = fetchPhoto;
  window.fetchPhotos = fetchPhotos;
  window.updatePhoto = updatePhoto; 
  window.deletePhoto = deletePhoto;

  // window.RECEIVE_PHOTO = "RECEIVE_PHOTO";
  // window.RECEIVE_PHOTOS = "RECEIVE_PHOTOS";
  // window.RECEIVE_PHOTO_ERRORS = "RECEIVE_PHOTO_ERRORS";
  // window.DELETE_PHOTO = "DELETE_PHOTO";


  
  window.photo1 =  {photo: {title: 'photo1', user_id: 1 }};
  window.photo2 =  {photo: {title: 'photo2', user_id: 1 }};
  // by destructuring our prop object, we don't need to nest within a photo key! 
  window.photo3 =  {photo: {title: 'photo3', user_id: 1 }};

  window.photo4 =  {photo: {title: 'photo4', user_id: 1 }};

  window.photo_invalid = {};  // not worried with url yet
  



})

