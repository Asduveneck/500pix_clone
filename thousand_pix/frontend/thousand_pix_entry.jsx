// React
import React from 'react';
import ReactDOM from 'react-dom';

// Components to make:
// import Root from './components/root';
import configureStore from './store/store';
import { signup, login, logout } from './actions/session_actions'



document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  const store = configureStore(); // imports store 

  ReactDOM.render( <h1>1000 Pix entry file in 'frontend'. </h1>, root);

  // Window Testing

  // Testing Store
  window.getState = store.getState;
  window.dispatch = store.dispatch;

  // Testing Thunk actions and User Auth
  window.signup = signup;
  window.login = login;
  window.logout = logout;

  // Constants for testing login logout! 
    // Positive Control
    window.user1 = {  // Already exists from previous tests
      user_name: "user_01",
      password: 'password',
      
    };
    /* 
      In console, run:
        dispatch(login(user1));
        dispatch(logout()); // success now
    
      // Both of the above succeed as intended.
    */

    // Negative Controls:
    window.user2 = {
      user_name: "user_02",
      password: 'invalid password'
    };

    // dispatch(login(user2)); // fails as expected


  // Testing Signup Route Ajax method in session_util
  // Positive Control
  window.user4 = {  // test
    user_name: "user_04",
    password: 'password',
    email: 'user_04_email',
    first_name: 'firstname_04',
    last_name: 'lastname_04',
  };
  // dispatch(login(user4)); // fails as expected 
  // dispatch(signup(user4)); // Works and am signed in 
  // dispatch(logout());
  
  // Negative Control
  window.user4_invalid = {  // test invalid signup
    user_name: "user_04",
    password: 'password',
    // email: 'user_04_email',
    // first_name: 'firstname_04',
    last_name: 'lastname_04',
  };


})

