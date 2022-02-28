import { TOGGLE_OPEN, SET_NEXT_PAGE, SET_PREV_PAGE } from "./addServerTypes";

const initialState = {
  opened: false,
  page: 0,
  imageUrl: "",
  error: "",
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_OPEN:
      return { ...state, opened: !state.opened };
    case SET_NEXT_PAGE:
      return { ...state, page: state.page + 1 < 10 ? state.page + 1 : 0 };
    case SET_PREV_PAGE:
      return { ...state, page: state.page - 1 < 0 ? 10 : state.page - 1 };
    default:
      return state;
  }
};

export default userReducer;
