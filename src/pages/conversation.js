import MessageSendbox from "../components/conversation/message-sendbox";
import {
  StyledContainer,
  StyledMessagesBox,
} from "../components/conversation/styles";

function ConversationPage() {
  return (
    <StyledContainer>
      <StyledMessagesBox>messages</StyledMessagesBox>
      <MessageSendbox />
    </StyledContainer>
  );
}

export default ConversationPage;
