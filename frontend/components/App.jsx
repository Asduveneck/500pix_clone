// Package dependencies
import React from "react";
import { Route } from 'react-router-dom'

// Routes
import { AuthRoute, ProtectedRoute } from '../util/route_util'

// Dependencies within this project (containers)
import GreetingContainer from './greeting/greeting_container';
import SignupFormContainer from './session_form/signup_form_container';
import LoginFormContainer from './session_form/login_form_container';
import SplashPageContainer from './splash_page/splash_page_container';
import NavBarContainer from './nav_bars/nav_bar_container'; 
import IndexPageContainer from './index_page/index_page_container';
import photoShowContainer from './photo_show/photo_show_container';

const App = () => (
  <div className="entireApp_file"> {/* This wraps around entire page. Background white */}
    <header>
      <NavBarContainer />
    </header>
      <GreetingContainer />
      <AuthRoute exact path="/" component={SplashPageContainer}/>
      <br />
    {/* Routes to use */}
      <ProtectedRoute exact path="/index" component={IndexPageContainer} />
      <ProtectedRoute path="/photo/" component={photoShowContainer} />
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute path="/signup" component={SignupFormContainer} />
  </div>

);

export default App