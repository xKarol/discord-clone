import { combineReducers } from "redux";
import userReducer from "./user/userReducer";
import addServerReducer from "./add-server/addServerReducer";
import channelsReducer from "./channels/channelReducer";

const rootReducer = combineReducers({
  user: userReducer,
  channels: channelsReducer,
  addServer: addServerReducer,
});

export default rootReducer;
