import { combineReducers } from 'redux';

import session from './session_errors_reducer';
import photos from './photo_errors_reducer';

// Tracks any error messages
const allErrorsReducer = combineReducers({
  session,
  photos,
});

export default allErrorsReducer;
