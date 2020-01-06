import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from '../actions/session_actions';


// Keeps track of users... 
const currentUserReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state);
  
  switch (action.type) { 
    case RECEIVE_CURRENT_USER:
      nextState[action.currentUser.id] = action.currentUser;
      return nextState;
    case LOGOUT_CURRENT_USER:
      return {};
    default:
      return state;
  }
};

export default currentUserReducer;
