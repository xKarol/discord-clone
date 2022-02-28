import {
  REGISTER_USER_REQUEST,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAILURE,
} from "./userTypes";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { doc, getFirestore, setDoc } from "firebase/firestore";

export const registerUser = (navigate, username, email, password) => {
  return async (dispatch) => {
    dispatch(fetchUsersRequest());
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
      dispatch(fetchUsersSuccess());
      navigate("/", { replace: true });
    } catch (error) {
      dispatch(fetchUsersFailure(error.code));
    }
  };
};

export const fetchUsersRequest = () => {
  return {
    type: REGISTER_USER_REQUEST,
  };
};

export const fetchUsersSuccess = (users) => {
  return {
    type: REGISTER_USER_SUCCESS,
    payload: users,
  };
};

export const fetchUsersFailure = (error) => {
  return {
    type: REGISTER_USER_FAILURE,
    payload: error,
  };
};
