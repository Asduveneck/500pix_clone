import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { login, clearSessionErrors } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = ({ errors }) => {
  return {
    errors: errors.session,
    formType: 'login',
    navLink: <Link to="/signup">Sign up</Link>,
    headerMain: 'Log In to 1000px',
    navPrompt: 'Don\'t have an account?'
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return { // May implicitly return later...
    processForm: (user) => dispatch(login(user)).then( () => ownProps.history.push('/index')),
    clearErrors: () => dispatch(clearSessionErrors()),  // thread down error clearing
    demo: (demoUser) => dispatch(login(demoUser)).then(() => ownProps.history.push('/index')),// Consistency between containers
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
