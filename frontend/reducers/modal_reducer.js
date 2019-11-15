import { OPEN_MODAL, CLOSE_MODAL } from '../actions/modal_actions';

// No default state since we only care about returning nothing or the modal.
export default function modalReducer(state = null, action) {
  switch (action.type) {
    case OPEN_MODAL:
      return action.modal;
    case CLOSE_MODAL:
      return null;
    default:
      return state;
  }
}
