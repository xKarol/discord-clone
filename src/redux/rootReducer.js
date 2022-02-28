import { combineReducers } from "redux";
import userReducer from "./user/userReducer";
import addServerReducer from "./add-server/addServerReducer";

const rootReducer = combineReducers({
  user: userReducer,
  addServer: addServerReducer,
});

export default rootReducer;
