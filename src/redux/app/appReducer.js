import { SET_HEADER_TEXT, SET_HEADER_TYPE, TOGGLE_MENU } from "./appTypes";

const initialState = {
  headerText: "",
  headerType: undefined,
  toggledMenu: false,
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_HEADER_TEXT:
      return { ...state, headerText: action.payload };
    case SET_HEADER_TYPE:
      return { ...state, headerType: action.payload };
    case TOGGLE_MENU:
      return { ...state, toggledMenu: !state.toggledMenu };
    default:
      return state;
  }
};

export default appReducer;
