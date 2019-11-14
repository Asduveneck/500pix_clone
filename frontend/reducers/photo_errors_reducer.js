import {
  RECEIVE_PHOTO_ERRORS,
} from '../actions/photo_actions'

const photosErrorReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_PHOTO_ERRORS:
      debugger;
      return action.errors;
    default:
      return state;
  }
};

export default photosErrorReducer;
