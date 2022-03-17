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

function Message({ user, timestamp, message, skeleton }) {
  const date = timestamp
    ? formatMessageDate(timestamp.toDate())
    : "in a few seconds";
  if (skeleton !== undefined) return <MessageSkeleton skeleton={skeleton} />;
  return (
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
  );
}

export default Message;
