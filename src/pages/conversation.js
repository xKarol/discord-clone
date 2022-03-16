import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { Navigate, useParams } from "react-router-dom";
import Message from "../components/conversation/message";
import MessageSendbox from "../components/conversation/message-sendbox";
import {
  StyledContainer,
  StyledMessagesBox,
} from "../components/conversation/styles";
import useMessages from "../hooks/useMessages";
import { HOME as ROUTE_HOME } from "../constants/routes";
import { HEADER_TYPE_CONVERSATION } from "../constants/header";
import useUpdateHeaderText from "../hooks/useUpdateHeaderText";

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

  useEffect(() => {
    if (loading) return;
    const element = messageBoxRef.current;
    element.scrollTo(0, element.scrollHeight);
  }, [messages, loading]);

  if (!authorized) return <Navigate to={ROUTE_HOME} replace={true} />;
  return (
    <StyledContainer>
      <StyledMessagesBox ref={messageBoxRef}>
        {loading &&
          [...new Array(3)].map((_, index) => (
            <Message key={index} skeleton={index} />
          ))}
        {!loading &&
          messages.map((props) => <Message key={props.messageId} {...props} />)}
      </StyledMessagesBox>
      <MessageSendbox />
    </StyledContainer>
  );
}

export default ConversationPage;
