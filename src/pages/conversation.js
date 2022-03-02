import Message from "../components/conversation/message";
import MessageSendbox from "../components/conversation/message-sendbox";
import {
  StyledContainer,
  StyledMessagesBox,
} from "../components/conversation/styles";

function ConversationPage() {
  return (
    <StyledContainer>
      <StyledMessagesBox>
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
      </StyledMessagesBox>
      <MessageSendbox />
    </StyledContainer>
  );
}

export default ConversationPage;
