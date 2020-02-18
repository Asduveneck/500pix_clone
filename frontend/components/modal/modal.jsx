import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import UserSettingContainer from '../user_profile/user_setting_container';

function Modal({ modal, closeModal }) {
  if (!modal) {
    // debugger;
    return null;
  }
  let component;
  
  // debugger;

  switch (modal) {
    case 'userSetting':
      // debugger;
      component = <UserSettingContainer />;
      break;
    default:
      return null;
  }

  return (
    <div className="modal-background" onClick={closeModal}>
      <div className="modal-child" onClick={e => e.stopPropagation()}>
        {component}
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  // debugger; // not even triggering!
  return {
    modal: state.ui.modal
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);