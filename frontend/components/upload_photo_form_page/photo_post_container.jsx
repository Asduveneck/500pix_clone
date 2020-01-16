import { connect } from 'react-redux';
import photoPost from './photo_post';
import { createPhoto } from '../../actions/photo_actions';


const mSTP = (state, ownProps) => ({

});

const mDTP = dispatch => ({
  createPhoto: photo => dispatch(createPhoto(photo))  // We don't do this part just yet if we have a secondary form...
});

export default connect(mSTP, mDTP)(photoPost)