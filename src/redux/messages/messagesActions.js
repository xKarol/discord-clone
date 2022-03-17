import {
  SEND_MESSAGES_REQUEST,
  SEND_MESSAGES_SUCCESS,
  SEND_MESSAGES_FAILURE,
} from "./messagesTypes";
import {
  collection,
  getFirestore,
  addDoc,
  deleteDoc,
  doc,
  serverTimestamp,
} from "firebase/firestore";
import {
  HEADER_TYPE_CHANNEL,
  HEADER_TYPE_CONVERSATION,
} from "../../constants/header";

export const sendMessage = (type, id, userId, message) => {
  return async (dispatch) => {
    try {
      dispatch(sendMessageRequest());
      const db = getFirestore();
      if (type === HEADER_TYPE_CONVERSATION) {
        await addDoc(collection(db, "messages"), {
          message,
          userId,
          recipientId: id,
          users: [id, userId],
          timestamp: serverTimestamp(),
        });
      } else if (type === HEADER_TYPE_CHANNEL) {
        await addDoc(collection(db, "channel-messages"), {
          message,
          userId,
          channelId: id,
          timestamp: serverTimestamp(),
        });
      } else throw new Error();
      dispatch(sendMessageSuccess());
    } catch (error) {
      dispatch(sendMessageFailure(error.code));
    }
  };
};

export const deleteMessage = (type, messageId) => {
  return async (dispatch) => {
    const db = getFirestore();
    if (type === HEADER_TYPE_CONVERSATION) {
      await deleteDoc(doc(db, "messages", messageId));
    } else if (type === HEADER_TYPE_CHANNEL) {
      await deleteDoc(doc(db, "channel-messages", messageId));
    } else throw new Error();
  };
};

export const sendMessageRequest = () => {
  return {
    type: SEND_MESSAGES_REQUEST,
  };
};

export const sendMessageSuccess = () => {
  return {
    type: SEND_MESSAGES_SUCCESS,
  };
};

export const sendMessageFailure = (error) => {
  return {
    type: SEND_MESSAGES_FAILURE,
    payload: error,
  };
};
