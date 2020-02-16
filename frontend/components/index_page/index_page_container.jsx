import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import {fetchPhotos} from '../../actions/photo_actions';
import IndexPage from './index_page';

const mSTP = (state) => ({
  photos: Object.values(state.entities.photos)
});

const mDTP = (dispatch) => ({
  fetchPhotos: (page) => dispatch(fetchPhotos(page)),
});

export default connect(mSTP, mDTP)(IndexPage);