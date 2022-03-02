import {
  GET_MESSAGES,
  FETCH_MESSAGES_REQUEST,
  FETCH_MESSAGES_SUCCESS,
  FETCH_MESSAGES_FAILURE,
  SEND_MESSAGES_REQUEST,
  SEND_MESSAGES_SUCCESS,
  SEND_MESSAGES_FAILURE,
} from "./messagesTypes";

const initialState = {
  loading: false,
  messages: [],
  error: "",
  sendMessageLoading: false,
  sendMessageError: "",
};

const messagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MESSAGES:
      return {
        ...state,
        loading: true,
      };
    case FETCH_MESSAGES_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_MESSAGES_SUCCESS:
      return {
        loading: false,
        error: "",
        messages: action.payload,
      };
    case FETCH_MESSAGES_FAILURE:
      return {
        loading: false,
        error: action.payload,
      };
    case SEND_MESSAGES_REQUEST:
      return {
        sendMessageLoading: true,
      };
    case SEND_MESSAGES_SUCCESS:
      return {
        sendMessageLoading: false,
        sendMessageError: "",
      };
    case SEND_MESSAGES_FAILURE:
      return {
        sendMessageLoading: false,
        sendMessageError: action.payload,
      };
    default:
      return state;
  }
};

export default messagesReducer;
