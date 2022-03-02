import {
  GET_LATEST_CONVERSATIONS,
  FETCH_LATEST_CONVERSATIONS_REQUEST,
  FETCH_LATEST_CONVERSATIONS_SUCCESS,
  FETCH_LATEST_CONVERSATIONS_FAILURE,
} from "./latest-conversationsTypes";

const initialState = {
  loading: false,
  latestConversations: [],
  error: "",
};

const latestConversationsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_LATEST_CONVERSATIONS:
      return {
        ...state,
        loading: true,
      };
    case FETCH_LATEST_CONVERSATIONS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_LATEST_CONVERSATIONS_SUCCESS:
      return {
        loading: false,
        error: "",
        latestConversations: action.payload,
      };
    case FETCH_LATEST_CONVERSATIONS_FAILURE:
      return {
        loading: false,
        loggedIn: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default latestConversationsReducer;
