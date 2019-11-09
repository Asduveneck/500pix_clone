import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';

import NavBar from './nav_bar';

// mapStateToProps 
const mSTP = ({ session, entities: { users } }) => ({
  currentUser: users[session.id]
});

//mapDispatchToProps
const mDTP = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(mSTP, mDTP)(NavBar)