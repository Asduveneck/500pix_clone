import merge from 'lodash/merge';
import {
  RECEIVE_PHOTO,
  RECEIVE_PHOTOS,
  DELETE_PHOTO,
} from '../actions/photo_actions'

const _defaultPhoto = Object.freeze({
  // description: null,
  // fileUrl: "",
  // id: null,
  // rating: null,
  // title: "",
  // views: 0,
});



// Default state would be... no pictures?

// Handles shape for all the photos

const photosReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state)
  switch (action.type) {
    case RECEIVE_PHOTO:
      nextState = merge(nextState, {[action.photo.id]: action.photo})
      return nextState;

    case RECEIVE_PHOTOS:
      return action.photos;

    case DELETE_PHOTO:
      delete nextState[action.photoId];
      return nextState;

    default:
      return state;
  }
};

export default photosReducer;
