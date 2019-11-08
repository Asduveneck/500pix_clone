import { combineReducers } from 'redux';

import session from './session_errors_reducer';

// Tracks any error messages
const allErrorsReducer = combineReducers({
  session
});

export default allErrorsReducer;
