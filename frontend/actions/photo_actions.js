/*  README
- We link the photos in the Views json.jbuilder (where we shape or state).
- We'll write a validation in the model to check it's attached.
- Here we are working solely with the tables photo.
*/

// ======================== Imports and Exports ==========================

import * as APIUtil from '../util/photo_api_util';

export const RECEIVE_PHOTO = "RECEIVE_PHOTO";
export const RECEIVE_PHOTOS = "RECEIVE_PHOTOS";
export const RECEIVE_PHOTO_ERRORS = "RECEIVE_PHOTO_ERRORS";
export const DELETE_PHOTO = "DELETE_PHOTO";


// ============================= Actions ======================================

// ------- CRUD --------

// createPhoto action handled in receivePhotos; has own Thunk

const receivePhoto = photo => ({
  type: RECEIVE_PHOTO,
  photo
});
const receivePhotos = photos => ({
  type: RECEIVE_PHOTOS,
  photos
});

// updatePhoto action handled in receivePhotos; has own Thunk

const deletePhoto = photoId => ({ // Thunk component needed too.
  type: DELETE_PHOTO,
  photoId,
})


// --------- Errors --------
const receiveErrors = errors => ({
  type: RECEIVE_PHOTO_ERRORS,
  errors
});

const clearPhotoErrors = () => ({
  type: RECEIVE_PHOTO_ERRORS,
  errors: [], // Return an empty array, wiping away errors.
});


// ========================== Thunk Actions  ===================================

export const createPhoto = photo => dispatch(
  APIUtil.createPhoto(photo)
    .then(photo => (dispatch(receivePhoto(photo))
      ), err => (
        dispatch(receiveErrors(err.responseJson))
    ))
);

export const fetchPhotos = photos => dispatch( // FETCH
  APIUtil.fetchPhoto(photos)
    .then(photos => (dispatch(receivePhotos(photos))
      ), err => (
        dispatch(receiveErrors(err.responseJson))
    ))
);

export const fetchPhoto = photoId => dispatch(
  APIUtil.fetchPhoto(photoId)
    .then(photo => (dispatch(receivePhoto(photo))
      ), err => (
        dispatch(receiveErrors(err.responseJson))
    ))
);

export const updatePhoto = photo => dispatch(
  APIUtil.updatePhoto(photo)
    .then(updatedPhoto => (dispatch(receivePhoto(updatedPhoto))
      ), err => (
        dispatch(receiveErrors(err.responseJson))
    ))
);

export const deletePhoto = photoId => dispatch(
  APIUtil.deletePhoto(photoId)
    .then(() => (dispatch(deletePhoto(photoId))
    ), err => (
      dispatch(receiveErrors(err.responseJson))
    ))
);