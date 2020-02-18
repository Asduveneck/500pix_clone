import { connect } from 'react-redux';
import userSetting from './user_setting';
import { updateUser } from '../../actions/user_actions'; // time to make user actions
import { closeModal } from '../../actions/modal_actions'

// stolen from user_show
const mSTP = (state, ownProps) => ({
  user: Object.values(state.entities.currentUser)[0]
  // currentUserId: Object.keys(state.entities.currentUser)[0]
});

const mDTP = dispatch => ({
  updateUser: newUser => dispatch(updateUser(newUser)),
  closeModal: () => dispatch(closeModal())
});

export default connect(mSTP, mDTP)(userSetting)