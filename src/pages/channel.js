import { useRef } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Conversation from "../components/conversation";
import Message from "../components/conversation/message";
import { HEADER_TYPE_CHANNEL } from "../constants/header";
import useMessages from "../hooks/useMessages";
import useUpdateHeaderText from "../hooks/useUpdateHeaderText";
import useUpdateScroll from "../hooks/useUpdateScroll";

function ChannelPage() {
  const messageBoxRef = useRef(null);
  const { channelId } = useParams();
  const {
    user: { userId },
  } = useSelector((state) => state.user);
  const authorized = true;
  const { messages, loading } = useMessages(
    HEADER_TYPE_CHANNEL,
    authorized,
    channelId,
    userId
  );
  useUpdateHeaderText(HEADER_TYPE_CHANNEL, channelId);
  useUpdateScroll(messageBoxRef, messages, loading);

  return (
    <Conversation messageBoxRef={messageBoxRef}>
      {loading &&
        [...new Array(3)].map((_, index) => (
          <Message key={index} skeleton={index} />
        ))}
      {!loading &&
        messages.map((props) => <Message key={props.messageId} {...props} />)}
    </Conversation>
  );
}

export default ChannelPage;
