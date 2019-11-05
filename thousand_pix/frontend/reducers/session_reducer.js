import {
  RECEIVE_CURRENT_USER,
  LOGOUT_CURRENT_USER,
} from '../actions/session_actions';

const _defaultSession = Object.freeze({
  id: null
});
// Handles session login logout stuff
const sessionReducer = (state = _defaultSession, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return { id: action.currentUser.id };
    case LOGOUT_CURRENT_USER:
      return _defaultSession;
    default:
      return state;
  }
};

export default sessionReducer;
