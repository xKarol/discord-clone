import { combineReducers } from "redux";
import userReducer from "./user/userReducer";
import addServerReducer from "./add-server/addServerReducer";
import channelsReducer from "./channels/channelReducer";
import latestConversationsReducer from "./latest-conversations/latest-conversationsReducer";

const rootReducer = combineReducers({
  user: userReducer,
  channels: channelsReducer,
  latestConversations: latestConversationsReducer,
  addServer: addServerReducer,
});

export default rootReducer;
