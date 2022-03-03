import { SET_RECIPIENT_NAME } from "./appTypes";

const initialState = {
  recipientName: "",
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_RECIPIENT_NAME:
      return { ...state, recipientName: action.payload };
    default:
      return state;
  }
};

export default appReducer;
