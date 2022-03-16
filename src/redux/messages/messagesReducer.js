import {
  SEND_MESSAGES_REQUEST,
  SEND_MESSAGES_SUCCESS,
  SEND_MESSAGES_FAILURE,
} from "./messagesTypes";

const initialState = {
  sendMessageLoading: false,
  messages: [],
  sendMessageError: "",
};

const messagesReducer = (state = initialState, action) => {
  switch (action.type) {
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
