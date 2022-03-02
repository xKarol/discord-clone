import Avatar from "../avatar";
import {
  StyledMessage,
  StyledMessageBox,
  StyledMessageDate,
  StyledMessageText,
  StyledMessageHeader,
  StyledMessageUsername,
} from "./styles";

function Message({ user: { username, avatar }, date, message }) {
  return (
    <StyledMessage>
      <Avatar src={avatar} />
      <StyledMessageBox>
        <StyledMessageHeader>
          <StyledMessageUsername>{username}</StyledMessageUsername>
          <StyledMessageDate>Today at 9:54PM</StyledMessageDate>
        </StyledMessageHeader>
        <StyledMessageText>{message}</StyledMessageText>
      </StyledMessageBox>
    </StyledMessage>
  );
}

export default Message;
