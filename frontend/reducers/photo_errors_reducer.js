import {
  RECEIVE_PHOTO_ERRORS,
  RECEIVE_PHOTO,

} from '../actions/photo_actions'

const photosErrorReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_PHOTO_ERRORS:
      return action.errors;
    case RECEIVE_PHOTO:
      return [];
    default:
      return state;
  }
};

export default photosErrorReducer;
