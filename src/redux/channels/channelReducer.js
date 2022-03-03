import {
  GET_CHANNELS,
  FETCH_CHANNELS_REQUEST,
  FETCH_CHANNELS_SUCCESS,
  FETCH_CHANNELS_FAILURE,
  ADD_NEW_CHANNEL,
} from "./channelTypes";

const initialState = {
  loading: false,
  channels: [],
  error: "",
};

const channelsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CHANNELS:
      return {
        ...state,
        loading: true,
      };
    case FETCH_CHANNELS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_CHANNELS_SUCCESS:
      return {
        loading: false,
        error: "",
        channels: action.payload,
      };
    case FETCH_CHANNELS_FAILURE:
      return {
        loading: false,
        loggedIn: false,
        error: action.payload,
      };
    case ADD_NEW_CHANNEL:
      return {
        ...state,
        channels: [...state.channels, action.payload],
      };
    default:
      return state;
  }
};

export default channelsReducer;
