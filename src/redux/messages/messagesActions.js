import {
  FETCH_MESSAGES_REQUEST,
  FETCH_MESSAGES_SUCCESS,
  FETCH_MESSAGES_FAILURE,
  SEND_MESSAGES_REQUEST,
  SEND_MESSAGES_SUCCESS,
  SEND_MESSAGES_FAILURE,
} from "./messagesTypes";
import {
  collection,
  getFirestore,
  getDocs,
  addDoc,
  orderBy,
  where,
  query,
  serverTimestamp,
} from "firebase/firestore";

export const getMessages = (userId) => {
  return async (dispatch) => {
    dispatch(fetchMessagesRequest());
    try {
      const db = getFirestore();
      const q = query(
        collection(db, "messages"),
        where("userId", "==", userId),
        orderBy("timestamp", "desc")
      );
      const messagesDocs = await getDocs(q);
      const messagesData = messagesDocs.docs.map((docData) => ({
        id: docData.id,
        ...docData.data(),
      }));
      dispatch(fetchMessagesSuccess(messagesData));
    } catch (error) {
      dispatch(fetchMessagesFailure(error.code));
    }
  };
};

export const sendMessage = (recipientId, userId, message) => {
  return async (dispatch) => {
    try {
      dispatch(sendMessageRequest());
      const db = getFirestore();
      await addDoc(collection(db, "messages"), {
        message,
        userId,
        users: [recipientId, userId],
        timestamp: serverTimestamp(),
      });
      dispatch(sendMessageSuccess());
    } catch (error) {
      dispatch(sendMessageFailure(error.code));
    }
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

export const fetchMessagesRequest = () => {
  return {
    type: FETCH_MESSAGES_REQUEST,
  };
};

export const fetchMessagesSuccess = (messages) => {
  return {
    type: FETCH_MESSAGES_SUCCESS,
    payload: messages,
  };
};

export const fetchMessagesFailure = (error) => {
  return {
    type: FETCH_MESSAGES_FAILURE,
    payload: error,
  };
};
