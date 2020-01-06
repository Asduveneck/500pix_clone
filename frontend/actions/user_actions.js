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
