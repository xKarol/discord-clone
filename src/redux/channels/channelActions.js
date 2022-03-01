import {
  FETCH_CHANNELS_REQUEST,
  FETCH_CHANNELS_SUCCESS,
  FETCH_CHANNELS_FAILURE,
} from "./channelTypes";
import { collection, getFirestore, getDocs } from "firebase/firestore";

export const getChannels = (userId) => {
  return async (dispatch) => {
    dispatch(fetchChannelsRequest());
    try {
      const db = getFirestore();
      // const q = query(collection(db, "channels"), orderBy("timestamp", "desc"));
      const channelsDocs = await getDocs(collection(db, "channels"));
      console.log(channelsDocs);
      const channelsData = channelsDocs.docs.map((docData) => ({
        id: docData.id,
        ...docData.data(),
      }));
      dispatch(fetchChannelsSuccess(channelsData));
    } catch (error) {
      dispatch(fetchChannelsFailure(error.code));
    }
  };
};

export const fetchChannelsRequest = () => {
  return {
    type: FETCH_CHANNELS_REQUEST,
  };
};

export const fetchChannelsSuccess = (channels) => {
  return {
    type: FETCH_CHANNELS_SUCCESS,
    payload: channels,
  };
};

export const fetchChannelsFailure = (error) => {
  return {
    type: FETCH_CHANNELS_FAILURE,
    payload: error,
  };
};
