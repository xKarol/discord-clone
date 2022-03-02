import Avatar from "../avatar";
import {
  StyledMessage,
  StyledMessageBox,
  StyledMessageDate,
  StyledMessageText,
  StyledMessageHeader,
  StyledMessageUsername,
} from "./styles";

function Message({ username, date, message }) {
  return (
    <StyledMessage>
      <Avatar />
      <StyledMessageBox>
        <StyledMessageHeader>
          <StyledMessageUsername>Karol</StyledMessageUsername>
          <StyledMessageDate>Today at 9:54PM</StyledMessageDate>
        </StyledMessageHeader>
        <StyledMessageText>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas
          veniam, temporibus, eligendi corrupti, quis magni sed eveniet laborum
          non molestiae aliquid ut nobis officiis animi vero dignissimos
          repellat. Dignissimos recusandae harum sit fuga in? Laudantium
          accusantium rerum architecto reprehenderit aspernatur quae placeat
          error, et beatae cupiditate nobis ut impedit doloribus.
        </StyledMessageText>
      </StyledMessageBox>
    </StyledMessage>
  );
}

export default Message;
