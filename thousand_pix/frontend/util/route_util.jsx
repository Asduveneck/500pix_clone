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

// Protected route: user should NOT be logged in:
const Protected = ({ component: Component, path, loggedIn, exact }) => (
  <Route path={path} exact={exact} render={(props) => (
    loggedIn ? (
      <Component {...props} />
    ) : (
        <Redirect to="/login" />
      )
  )} />
);

// Threading the login status:
const mapStateToProps = state => (
  { loggedIn: Boolean(state.session.id) } // Boolean so we return `true` or `false`...
);

// Exports
export const AuthRoute = withRouter(connect(mapStateToProps)(Auth));
export const ProtectedRoute = withRouter(connect(mapStateToProps)(Protected));