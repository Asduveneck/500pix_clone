import { combineReducers } from 'redux';


/*
We will import:
  1. entities_reducer, which imports:
    current_user_reducer
    users_reducer // to do
    photos_reducer 

  2. session_reducer, which does not import anything
  
  3. errors_reducer, which imports:
    session_errors_reducer
    photos_errors_reducer

  4. ui_reducer, which imports
     modal_reducer
*/

// Start importing all of your reducers, but check sample state too! 

import entities from './entities_reducer';
import session from './session_reducer'; 
import errors from './errors_reducer'; 
import ui from './ui_reducer';

const rootReducer = combineReducers({
  entities,
  session,
  ui,
  errors,
});

export default rootReducer;

/*
Current state slice:
  {
    entities: {
      currentUser: {},
      photos: {},
    },
    session: {
      id: null
    },
    ui: {
      modal: {},
    }
    errors: {
      session: []
    }
  }

*/