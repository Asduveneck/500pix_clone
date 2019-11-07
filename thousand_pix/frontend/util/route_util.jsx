import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, withRouter } from 'react-router-dom';


// Auth route: Login required.
const Auth = ({ component: Component, path, loggedIn, exact }) => ( 
  <Route path={path} exact={exact} render={(props) => (
    !loggedIn ? (
      <Component {...props} /> // If logged in take them to the component
    ) : (
        <Redirect to="/" />   // else redirect them to the splash page
      )
  )} />
);


