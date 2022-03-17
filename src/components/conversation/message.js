import Avatar from "../avatar";
import {
  StyledMessage,
  StyledMessageBox,
  StyledMessageDate,
  StyledMessageText,
  StyledMessageHeader,
  StyledMessageUsername,
} from "./styles";
import { formatMessageDate } from "../../utils/format-date";
import MessageSkeleton from "./message-skeleton";
import MessageActions from "./message-actions";
import { MessageContext } from "../../context/message-context";

function Message({ messageId, user, timestamp, message, skeleton }) {
  const date = timestamp
    ? formatMessageDate(timestamp.toDate())
    : "in a few seconds";
  if (skeleton !== undefined) return <MessageSkeleton skeleton={skeleton} />;
  return (
    <MessageContext.Provider value={{ userId: user.userId, messageId }}>
      <StyledMessage>
        <Avatar src={user.avatar} />
        <StyledMessageBox>
          <StyledMessageHeader>
            <StyledMessageUsername>{user.username}</StyledMessageUsername>
            <StyledMessageDate>{date}</StyledMessageDate>
          </StyledMessageHeader>
          <StyledMessageText>{message}</StyledMessageText>
        </StyledMessageBox>
        <MessageActions />
      </StyledMessage>
    </MessageContext.Provider>
  );
}

export default Message;
