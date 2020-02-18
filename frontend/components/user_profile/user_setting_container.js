import { connect } from 'react-redux';
import userSetting from './user_setting';
import { fetchUser, clearUser } from '../../actions/user_actions'; // time to make user actions
import { fetchPhoto } from '../../actions/photo_actions';

// stolen from user_show
const mSTP = (state, ownProps) => ({
  // user: state.entities.users[ownProps.match.params.userId],
  // currentUserId: Object.keys(state.entities.currentUser)[0]
});

const mDTP = dispatch => ({
  fetchUser: userId => dispatch(fetchUser(userId)),
  clearUser: () => dispatch(clearUser()),
  fetchPhoto: photoId => dispatch(fetchPhoto(photoId)),
});

export default connect(mSTP, mDTP)(userSetting)