import {
  GET_CHANNELS,
  FETCH_CHANNELS_REQUEST,
  FETCH_CHANNELS_SUCCESS,
  FETCH_CHANNELS_FAILURE,
  ADD_NEW_CHANNEL,
  ADD_NEW_CHANNEL_REQUEST,
  ADD_NEW_CHANNEL_SUCCESS,
  ADD_NEW_CHANNEL_FAILURE,
} from "./channelTypes";

const initialState = {
  loading: false,
  channels: [],
  error: "",
  addChannelError: "",
  addChannelLoading: false,
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
        ...state,
        loading: false,
        error: "",
        channels: action.payload,
      };
    case FETCH_CHANNELS_FAILURE:
      return {
        ...state,
        loading: false,
        loggedIn: false,
        error: action.payload,
      };
    case ADD_NEW_CHANNEL:
      return {
        ...state,
        channels: [...state.channels, action.payload],
      };
    case ADD_NEW_CHANNEL_SUCCESS:
      return {
        ...state,
        addChannelError: "",
        addChannelLoading: false,
      };
    case ADD_NEW_CHANNEL_FAILURE:
      return {
        ...state,
        addChannelError: action.payload,
        addChannelLoading: false,
      };
    case ADD_NEW_CHANNEL_REQUEST:
      return {
        ...state,
        addChannelLoading: true,
        addChannelError: "",
      };
    default:
      return state;
  }
};

export default channelsReducer;
