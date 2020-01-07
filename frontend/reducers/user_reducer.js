import { RECEIVE_USER, CLEAR_USER } from '../actions/user_actions';


// Keeps track of users... 
const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_USER:
      nextState[action.user.id] = action.user;
      return nextState;
    case CLEAR_USER:
      return {} // empty object since we only view one user at a time
    default:
      return state;
  }
};

export default usersReducer;
