// React
import React from 'react';
import ReactDOM from 'react-dom';

// Components to make:
// import Root from './components/root';
// import configureStore from './store/store';

// Components to Test on Window:
import {login, signup, logout} from './util/session_api_util'


document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  ReactDOM.render( <h1>1000 Pix entry file in 'frontend'. </h1>, root);

  // Window Function Tests:
  window.login = login;
  window.logout = logout;
  window.signup = signup;

  // Objects for Window function tests:
  // Testing Login/Logout Ajax method in session_util
  // Positive Control
    window.user1 = {  // Already exists from previous tests
        user_name: "user_01",
        password: 'password',

    };
    // Negative Controls:
    window.user2 = {
      user_name: "user_02",
      password: 'invalid password'
    }; 

    window.user2b = {
      user_name: "invalid username",
      password: 'password',
    };

  // Testing Signup Route Ajax method in session_util
    window.user3 = {  // test
      user_name: "user_03",
      password: 'password',
      email: 'user_03_email',
      first_name: 'firstname_03',
      last_name: 'lastname_03',
    };
    window.user3_missing = {  // test
      user_name: "user_03",
      // password: 'password',
      email: 'user_03_email',
      first_name: 'firstname_03',
      last_name: 'lastname_03',
    };

})

