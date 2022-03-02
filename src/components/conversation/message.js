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

function Message({ user: { username, avatar }, timestamp, message }) {
  const date = formatMessageDate(timestamp.toDate());
  return (
    <StyledMessage>
      <Avatar src={avatar} />
      <StyledMessageBox>
        <StyledMessageHeader>
          <StyledMessageUsername>{username}</StyledMessageUsername>
          <StyledMessageDate>{date}</StyledMessageDate>
        </StyledMessageHeader>
        <StyledMessageText>{message}</StyledMessageText>
      </StyledMessageBox>
    </StyledMessage>
  );
}

export default Message;
