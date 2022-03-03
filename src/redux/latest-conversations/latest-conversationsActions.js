import {
  FETCH_LATEST_CONVERSATIONS_REQUEST,
  FETCH_LATEST_CONVERSATIONS_SUCCESS,
  FETCH_LATEST_CONVERSATIONS_FAILURE,
} from "./latest-conversationsTypes";
import {
  collection,
  getFirestore,
  query,
  where,
  getDocs,
} from "firebase/firestore";

export const getLatestConversations = (userId) => {
  return async (dispatch) => {
    if (!userId) return null;
    dispatch(fetchLatestConversationsRequest());
    try {
      const db = getFirestore();
      const q = query(collection(db, "users"), where("userId", "!=", userId));
      const conversationsDocs = await getDocs(q);
      const conversationsData = conversationsDocs.docs.map((docData) => ({
        userId: docData.id,
        ...docData.data(),
      }));
      dispatch(fetchLatestConversationsSuccess(conversationsData));
    } catch (error) {
      dispatch(fetchLatestConversationsFailure(error.code));
    }
  };
};

export const fetchLatestConversationsRequest = () => {
  return {
    type: FETCH_LATEST_CONVERSATIONS_REQUEST,
  };
};

export const fetchLatestConversationsSuccess = (latestConversations) => {
  return {
    type: FETCH_LATEST_CONVERSATIONS_SUCCESS,
    payload: latestConversations,
  };
};

export const fetchLatestConversationsFailure = (error) => {
  return {
    type: FETCH_LATEST_CONVERSATIONS_FAILURE,
    payload: error,
  };
};
