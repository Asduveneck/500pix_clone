import { connect } from 'react-redux';
import userShow from './user_show';
import { fetchUser, clearUser } from '../../actions/user_actions'; // time to make user actions
import { fetchPhoto } from '../../actions/photo_actions';

// TODO: Modify this and App.jsx so that we match by username FINDME
    // Will probably need to update our AJAX call too.
// TODO: import fetchPhoto or fetchPhotos so we can show off the users images
const mSTP = (state, ownProps) => ({
  user: state.entities.users[ownProps.match.params.userId], 
  photos: Object.values(state.entities.photos)
});

const mDTP = dispatch => ({
  fetchUser: userId => dispatch(fetchUser(userId)) ,
  clearUser: () => dispatch(clearUser()),
  fetchPhoto: photoId => dispatch(fetchPhoto(photoId)),
});

export default connect(mSTP, mDTP)(userShow)