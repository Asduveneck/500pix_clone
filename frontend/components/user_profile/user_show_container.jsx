import { connect } from 'react-redux';
import userShow from './user_show';
// import {  } from '../../actions/session_actions'; // time to make user actions


const mSTP = (state, ownProps) => ({
  // photo: state.entities.photos[ownProps.match.params.photoId],
});

const mDTP = dispatch => ({
  // fetchPhoto: photoId => dispatch(fetchPhoto(photoId)),
});

export default connect(mSTP, mDTP)(userShow)