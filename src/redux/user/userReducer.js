import {
  REGISTER_USER,
  REGISTER_USER_REQUEST,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAILURE,
} from "./userTypes";

const initialState = {
  loading: false,
  loggedIn: false,
  error: "",
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_USER:
      return {
        ...state,
        loggedIn: true,
      };
    case REGISTER_USER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case REGISTER_USER_SUCCESS:
      return {
        loading: false,
        error: "",
      };
    case REGISTER_USER_FAILURE:
      return {
        loading: false,
        loggedIn: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
