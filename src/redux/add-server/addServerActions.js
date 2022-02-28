import { TOGGLE_OPEN, SET_NEXT_PAGE, SET_PREV_PAGE } from "./addServerTypes";

export const toggleOpen = () => {
  return {
    type: TOGGLE_OPEN,
  };
};

export const setNextPage = () => {
  return {
    type: SET_NEXT_PAGE,
  };
};

export const setPrevPage = () => {
  return {
    type: SET_PREV_PAGE,
  };
};
