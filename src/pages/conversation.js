import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Message from "../components/conversation/message";
import MessageSendbox from "../components/conversation/message-sendbox";
import {
  StyledContainer,
  StyledMessagesBox,
} from "../components/conversation/styles";
import useMessages from "../hooks/useMessages";

function ConversationPage() {
  const messageBoxRef = useRef(null);
  const {
    user: { uid: userId },
  } = useSelector((state) => state.user);
  const { userId: recipientId } = useParams();
  const navigate = useNavigate();
  const authorized = recipientId !== userId;
  const { messages } = useMessages(authorized, recipientId, userId);

  useEffect(() => {
    if (!authorized) navigate("/");
  }, [navigate, authorized]);

  useEffect(() => {
    const element = messageBoxRef.current;
    element.scrollTop = element.scrollHeight;
  }, [messages]);

  if (!authorized) return null;
  return (
    <StyledContainer>
      <StyledMessagesBox ref={messageBoxRef}>
        {messages.map((props) => (
          <Message key={props.messageId} {...props} />
        ))}
      </StyledMessagesBox>
      <MessageSendbox />
    </StyledContainer>
  );
}

export default ConversationPage;
