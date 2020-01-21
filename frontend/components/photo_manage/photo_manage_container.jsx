import { connect } from 'react-redux';
import photoManage from './photo_manage';
import { fetchPhoto, updatePhoto, deletePhoto } from '../../actions/photo_actions';


const mSTP = ({ session, entities: { currentUser } }) => ({
  currentUserID: currentUser[session.id].id
});

const mDTP = dispatch => ({
  fetchPhoto: photoId => dispatch(fetchPhoto(photoId)),
  updatePhoto: photo => dispatch(updatePhoto(photo)),
  deletePhoto: photoId => dispatch(deletePhoto(photoId)),
});

export default connect(mSTP, mDTP)(photoManage)