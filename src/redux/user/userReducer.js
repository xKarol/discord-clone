import {
  REGISTER_USER,
  REGISTER_USER_REQUEST,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAILURE,
  LOGOUT_USER,
} from "./userTypes";

const initialState = {
  loading: false,
  loggedIn: false,
  user: {},
  error: "",
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_USER:
      return {
        ...state,
        error: "",
        loggedIn: true,
      };
    case REGISTER_USER_REQUEST:
      return {
        ...state,
        error: "",
        loading: true,
      };
    case REGISTER_USER_SUCCESS:
      return {
        loading: false,
        loggedIn: true,
        error: "",
        user: action.payload,
      };
    case REGISTER_USER_FAILURE:
      return {
        loading: false,
        loggedIn: false,
        error: action.payload,
      };
    case LOGOUT_USER:
      return initialState;
    default:
      return state;
  }
};

export default userReducer;
