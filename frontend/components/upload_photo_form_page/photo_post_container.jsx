import { connect } from 'react-redux';
import photoPost from './photo_post';
import { createPhoto } from '../../actions/photo_actions';


const mSTP = (state, ownProps) => ({

});

const mDTP = dispatch => ({
  createPhoto: photo => dispatch(createPhoto(photo))
});

export default connect(mSTP, mDTP)(photoPost)