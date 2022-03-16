import { SET_HEADER_TEXT, SET_HEADER_TYPE } from "./appTypes";

const initialState = {
  headerText: "",
  headerType: undefined
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_HEADER_TEXT:
      return { ...state, headerText: action.payload };
    case SET_HEADER_TYPE:
      return { ...state, headerType: action.payload };
    default:
      return state;
  }
};

export default appReducer;
