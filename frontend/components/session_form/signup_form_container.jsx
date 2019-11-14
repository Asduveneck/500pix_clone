import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { login, signup, clearSessionErrors } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = ({ errors }) => {
  return {
    errors: errors.session,
    formType: 'signup',
    navLink: <Link to="/login">Log in</Link>,
    headerMain: 'Join 1000px',
    headerSub: 'Share your photos, be inspired, and develop your skills',
    navPrompt: 'Already have an account?',
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    processForm: (user) => dispatch(signup(user)).then(() => ownProps.history.push('/index')),
    clearErrors: () => dispatch(clearSessionErrors()), // Wipes out errors...
    demo: (demoUser) => dispatch(login(demoUser)).then(() => ownProps.history.push('/index')),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
