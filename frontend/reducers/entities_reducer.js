import { combineReducers } from 'redux';

// Imports other reducers from this directory to combine (and thereby shape our state)

import users from './users_reducer'; //usersReducer imported as users for implicit kv in JS

export default combineReducers({
  users, // equivalent to users: users,
});