import { connect } from 'react-redux';
import userShow from './user_show';
import { fetchUser, clearUser } from '../../actions/user_actions'; // time to make user actions

// Modify this and App.jsx so that we match by username
// Will probably need to update our AJAX call too.
const mSTP = (state, ownProps) => ({
  user: state.entities.users[ownProps.match.params.userId], // make sure this is some other user
});

const mDTP = dispatch => ({
  fetchUser: userId => dispatch(fetchUser(userId)),
  clearUser: () => dispatch(clearUser()),
});

export default connect(mSTP, mDTP)(userShow)