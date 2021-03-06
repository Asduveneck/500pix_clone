import { connect } from 'react-redux';
import photoPost from './photo_post';
import { createPhoto } from '../../actions/photo_actions';
import { fetchUser } from '../../actions/user_actions';


const mSTP = ({ session, entities: { currentUser } }) => ({
  currentUserID: currentUser[session.id].id
});

const mDTP = dispatch => ({
  createPhoto: photo => dispatch(createPhoto(photo)),  // We don't do this part just yet if we have a secondary form...
  fetchUser: userId => dispatch(fetchUser(userId))
});

export default connect(mSTP, mDTP)(photoPost)