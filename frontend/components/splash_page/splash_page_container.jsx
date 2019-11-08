import { connect } from 'react-redux';
import React from 'react';
// import { Link } from 'react-router-dom';
import SplashPage from './splash_page';

const mapStateToProps = (state) => ({
    // psuedo-props per row? Like row_1 images, row_2 images, etc. ?
  });

const  mapDispatchToProps = dispatch => ({
  // probably not applicable here.
}); 

export default connect(mapStateToProps, mapDispatchToProps)(SplashPage)
