import {
  REGISTER_USER_REQUEST,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAILURE,
  LOGOUT_USER,
} from "./userTypes";
import { getAuth, signOut, signInWithEmailAndPassword } from "firebase/auth";
import { firebase_registerUser } from "../../helpers/register-user";
import { getFirestore } from "firebase/firestore";

export const registerUser = (username, email, password) => {
  return async (dispatch) => {
    dispatch(fetchUserRequest());
    try {
      const db = getFirestore();
      const auth = getAuth();
      await firebase_registerUser(db, auth, email, password, username);
    } catch (error) {
      dispatch(fetchUserFailure(error.code));
    }
  };
};

export const loginUser = (email, password) => {
  return async (dispatch) => {
    dispatch(fetchUserRequest());
    const auth = getAuth();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      dispatch(fetchUserSuccess());
    } catch (error) {
      dispatch(fetchUserFailure(error.code));
    }
  };
};

export const logoutUserRequest = () => {
  return async (dispatch) => {
    const auth = getAuth();
    await signOut(auth);
    dispatch(logoutUser());
  };
};

export const logoutUser = () => {
  return {
    type: LOGOUT_USER,
  };
};

export const fetchUserRequest = () => {
  return {
    type: REGISTER_USER_REQUEST,
  };
};

export const fetchUserSuccess = (user) => {
  return {
    type: REGISTER_USER_SUCCESS,
    payload: user,
  };
};

export const fetchUserFailure = (error) => {
  return {
    type: REGISTER_USER_FAILURE,
    payload: error,
  };
};
