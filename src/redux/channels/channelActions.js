import {
  FETCH_CHANNELS_REQUEST,
  FETCH_CHANNELS_SUCCESS,
  FETCH_CHANNELS_FAILURE,
  ADD_NEW_CHANNEL,
  ADD_NEW_CHANNEL_REQUEST,
  ADD_NEW_CHANNEL_SUCCESS,
  ADD_NEW_CHANNEL_FAILURE,
} from "./channelTypes";
import {
  collection,
  getFirestore,
  addDoc,
  getDocs,
  serverTimestamp,
} from "firebase/firestore";
import {
  getStorage,
  ref,
  uploadString,
  getDownloadURL,
} from "firebase/storage";

export const getChannels = (userId) => {
  return async (dispatch) => {
    dispatch(fetchChannelsRequest());
    try {
      const db = getFirestore();
      // const q = query(collection(db, "channels"), orderBy("timestamp", "desc"));
      const channelsDocs = await getDocs(collection(db, "channels"));
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

export const createNewChannel = (channelName, channelAvatar) => {
  return async (dispatch) => {
    try {
      dispatch(addNewChannelRequest());
      const db = getFirestore();
      let url = "";
      if (channelAvatar) {
        const storage = getStorage();
        const fileName = `${Date.now()}${Math.random(1)}`;
        const storageRef = ref(storage, fileName);
        const upload = await uploadString(
          storageRef,
          channelAvatar,
          "data_url"
        );
        url = await getDownloadURL(upload.ref);
      }
      const channelData = {
        name: channelName,
        image: url,
        createdAt: serverTimestamp(),
      };
      const channelDoc = await addDoc(collection(db, "channels"), channelData);
      dispatch(addNewChannel({ id: channelDoc.id, ...channelData }));
      dispatch(addNewChannelSuccess());
    } catch (err) {
      console.log(err);
      dispatch(addNewChannelFailure(err));
    }
  };
};

export const addNewChannel = (channelData) => {
  return {
    type: ADD_NEW_CHANNEL,
    payload: channelData,
  };
};

export const addNewChannelRequest = () => {
  return {
    type: ADD_NEW_CHANNEL_REQUEST,
  };
};

export const addNewChannelSuccess = () => {
  return {
    type: ADD_NEW_CHANNEL_SUCCESS,
  };
};

export const addNewChannelFailure = (error) => {
  return {
    type: ADD_NEW_CHANNEL_FAILURE,
    payload: error,
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
