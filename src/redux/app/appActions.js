import { SET_HEADER_TEXT, SET_HEADER_TYPE, TOGGLE_MENU } from "./appTypes";

export const setHeaderText = (text) => {
  return {
    type: SET_HEADER_TEXT,
    payload: text,
  };
};

export const setHeaderType = (type) => {
  return {
    type: SET_HEADER_TYPE,
    payload: type,
  };
};

export const toggleMenu = () => {
  return {
    type: TOGGLE_MENU,
  };
};
