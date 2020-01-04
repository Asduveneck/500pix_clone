import { connect } from 'react-redux';
import photoShow from './photo_show';
const mSTP = (state) => ({
  test: "placeholder"
});

//mapDispatchToProps
const mDTP = dispatch => ({

});

export default connect(mSTP, mDTP)(photoShow)