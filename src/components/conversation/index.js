import MessageSendbox from "./message-sendbox";
import { StyledContainer, StyledMessagesBox } from "./styles";

function Conversation({ messageBoxRef, children }) {
  return (
    <StyledContainer>
      <StyledMessagesBox ref={messageBoxRef}>{children}</StyledMessagesBox>
      <MessageSendbox />
    </StyledContainer>
  );
}

export default Conversation;
