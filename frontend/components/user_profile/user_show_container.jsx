import React from 'react';
import { connect } from 'react-redux';
import userShow from './user_show';
import { fetchUser, clearUser } from '../../actions/user_actions'; // time to make user actions
import { fetchPhoto } from '../../actions/photo_actions';
import { openModal, closeModal } from '../../actions/modal_actions';

// TODO: Modify this and App.jsx so that we match by username FINDME
    // Will probably need to update our AJAX call too.
// TODO: import fetchPhoto or fetchPhotos so we can show off the users images
const mSTP = (state, ownProps) => ({
  user: state.entities.users[ownProps.match.params.userId], 
  photos: Object.values(state.entities.photos),
  currentUserId: Object.keys(state.entities.currentUser)[0]
});

const mDTP = dispatch => ({
  fetchUser: userId => dispatch(fetchUser(userId)) ,
  clearUser: () => dispatch(clearUser()),
  fetchPhoto: photoId => dispatch(fetchPhoto(photoId)),
  openModal: (
    <span className="setting_link" 
      onClick={ () => {dispatch(openModal('userSetting'))} } >
      Settings
    </span>
  ),
  closeModal: () => dispatch(closeModal()) // TODO: check this
});

export default connect(mSTP, mDTP)(userShow)