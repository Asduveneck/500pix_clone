import { combineReducers } from 'redux';

// Imports other reducers from this directory to combine (and thereby shape our state)

import currentUser from './current_user_reducer'; //usersReducer imported as users for implicit kv in JS
import photos from './photos_reducer';
export default combineReducers({
  currentUser, // equivalent to users: users,
  photos,
});