import { connect } from 'react-redux';
import photoShow from './photo_show';
import { fetchPhoto } from '../../actions/photo_actions';


const mSTP = (state, ownProps) => {
  console.log("in mSTP");
  // debugger;
  return { photo: state.entities.photos[ownProps.match.params.photoId],}
};

//mapDispatchToProps
const mDTP = dispatch => ({
  fetchPhoto: photoId => dispatch(fetchPhoto(photoId)),
});

export default connect(mSTP, mDTP)(photoShow)