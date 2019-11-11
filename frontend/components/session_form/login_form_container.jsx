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

const mapDispatchToProps = dispatch => {
  return { // May implicitly return later...
    processForm: (user) => dispatch(login(user)),
    clearErrors: () => dispatch(clearSessionErrors())  // thread down error clearing
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
