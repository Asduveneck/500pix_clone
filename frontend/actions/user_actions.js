// ======================== Imports and Exports ==========================
import * as APIUtil from '../util/user_api_util';

export const RECEIVE_USER = "RECEIVE_USER";
export const RECEIVE_USER_ERRORS = "RECEIVE_USER_ERRORS";
// export const DELETE_USER = "DELETE_USER"; // no deleting users yet

// ============================= Actions ======================================

// ------- CRUD --------
// Create not present since we make that in the session

export const receiveUser = user => ({
  type: RECEIVE_USER,
  user
})

// Update: in THUNK.
// Delete: no deleting users yet

export const clearUser = () => ({
  type: RECEIVE_USER,
  user: {} // replace user object with empty pojo. For navigating away
})



// --------- Errors --------

export const receiveErrors = errors => ({
  type: RECEIVE_USER_ERRORS,
  errors
});

export const clearUserErrors = () => ({
  type: RECEIVE_PHOTO_ERRORS,
  errors: [], // Return an empty array, wiping away errors.
});

// ========================== Thunk Actions  ===================================

export const fetchUser = userId => dispatch => (
  APIUtil.fetchUser(userId)
    .then(user => (dispatch(receiveUser(user))
    ), err => (
      dispatch(receiveErrors(err.responseJSON))
    ))
);

export const updateUser = user => dispatch => (
  APIUtil.updateUser(user)
    .then(updatedUser => (dispatch(receiveUser(updatedUser))
    ), err => (
      dispatch(receiveErrors(err.responseJSON))
    ))
);
