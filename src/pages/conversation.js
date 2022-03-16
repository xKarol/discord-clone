import { useRef } from "react";
import { useSelector } from "react-redux";
import { Navigate, useParams } from "react-router-dom";
import Message from "../components/conversation/message";
import useMessages from "../hooks/useMessages";
import { HOME as ROUTE_HOME } from "../constants/routes";
import { HEADER_TYPE_CONVERSATION } from "../constants/header";
import useUpdateHeaderText from "../hooks/useUpdateHeaderText";
import Conversation from "../components/conversation";
import useUpdateScroll from "../hooks/useUpdateScroll";

function ConversationPage() {
  const messageBoxRef = useRef(null);
  const {
    user: { userId },
  } = useSelector((state) => state.user);
  const { userId: recipientId } = useParams();
  const authorized = recipientId !== userId;
  const { messages, loading } = useMessages(
    HEADER_TYPE_CONVERSATION,
    authorized,
    recipientId,
    userId
  );
  useUpdateHeaderText(HEADER_TYPE_CONVERSATION, recipientId);
  useUpdateScroll(messageBoxRef, messages, loading);

  if (!authorized) return <Navigate to={ROUTE_HOME} replace={true} />;
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

export default ConversationPage;
