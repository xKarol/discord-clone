import { combineReducers } from "redux";
import userReducer from "./user/userReducer";
import addServerReducer from "./add-server/addServerReducer";
import channelsReducer from "./channels/channelReducer";
import latestConversationsReducer from "./latest-conversations/latest-conversationsReducer";
import messagesReducer from "./messages/messagesReducer";
import appReducer from "./app/appReducer";

const rootReducer = combineReducers({
  app: appReducer,
  user: userReducer,
  channels: channelsReducer,
  messages: messagesReducer,
  latestConversations: latestConversationsReducer,
  addServer: addServerReducer,
});

export default rootReducer;
