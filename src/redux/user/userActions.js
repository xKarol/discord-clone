import {
  REGISTER_USER_REQUEST,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAILURE,
} from "./userTypes";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { doc, getFirestore, setDoc } from "firebase/firestore";

export const registerUser = (username, email, password) => {
  return async (dispatch) => {
    dispatch(fetchUserRequest());
    const auth = getAuth();
    const db = getFirestore();
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      await setDoc(doc(db, "users", user.uid), {
        username,
      });
      dispatch(fetchUserSuccess());
      // navigate("/", { replace: true });
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
      // navigate("/", { replace: true });
    } catch (error) {
      dispatch(fetchUserFailure(error.code));
    }
  };
};

export const fetchUserRequest = () => {
  return {
    type: REGISTER_USER_REQUEST,
  };
};

export const fetchUserSuccess = (users) => {
  return {
    type: REGISTER_USER_SUCCESS,
    payload: users,
  };
};

export const fetchUserFailure = (error) => {
  return {
    type: REGISTER_USER_FAILURE,
    payload: error,
  };
};
