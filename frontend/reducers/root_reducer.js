import { combineReducers } from 'redux';


/*
We will import:
  1. entities_reducer, which imports:
    users_reducer
    photos_reducer 

  2. session_reducer, which does not import anything
  
  3. errors_reducer, which imports:
    session_errors_reducer
    photos_errors_reducer
*/

// Start importing all of your reducers, but check sample state too! 

import entities from './entities_reducer';
import session from './session_reducer'; 
import errors from './errors_reducer'; 

const rootReducer = combineReducers({
  entities,
  session,
  errors,
});

export default rootReducer;

/*
Current state slice:
  {
    entities: {
      users: {},
      photos: {},
    },
    session: {
      id: null
    },
    errors: {
      session: []
    }
  }

*/