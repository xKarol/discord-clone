import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Message from "../components/conversation/message";
import MessageSendbox from "../components/conversation/message-sendbox";
import {
  StyledContainer,
  StyledMessagesBox,
} from "../components/conversation/styles";
import { HEADER_TYPE_CHANNEL } from "../constants/header";
import useMessages from "../hooks/useMessages";
import useUpdateHeaderText from "../hooks/useUpdateHeaderText";

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

  useEffect(() => {
    if (loading) return;
    const element = messageBoxRef.current;
    element.scrollTo(0, element.scrollHeight);
  }, [messages, loading]);

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

export default ChannelPage;
