// Package dependencies
import React from "react";
import { Route } from 'react-router-dom'

// Routes
import { AuthRoute, ProtectedRouted } from '../util/route_util'

// Dependencies within this project (containers)
import GreetingContainer from './greeting/greeting_container';
import SignupFormContainer from './session_form/signup_form_container';
import LoginFormContainer from './session_form/login_form_container';


const App = () => (
  <div className="entireApp_file"> {/* This wraps around entire page. Background white */}
    <h1>App File</h1>
    <header>
      <h2> Within header. Nav Bar? </h2>


    </header>
    <div className="login_signup_form_page">  {/* Should be grey everywhere... */}

      <div className="login_signup_form_box">
        <div className="session_form_inner"> 
          <GreetingContainer />
          <br />
          <AuthRoute exact path="/login" component={LoginFormContainer} />
          <AuthRoute path="/signup" component={SignupFormContainer} />
        </div>
      </div>

    </div>


    {/* Routes to use */}


  </div>

);

export default App;