import { getFirestore } from "firebase/firestore";
import { getUserById } from "../../helpers/get-user";
import { SET_RECIPIENT_NAME } from "./appTypes";

export const setRecipientName = (recipientId) => {
  return async (dispatch) => {
    const db = getFirestore();
    const user = await getUserById(db, recipientId);
    console.log(user);
    dispatch(setRecipientNameSuccess(user.username));
  };
};

export const setRecipientNameSuccess = (username) => {
  return {
    type: SET_RECIPIENT_NAME,
    payload: username,
  };
};
