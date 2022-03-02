import {
  StyledMessageSendBox,
  StyledMessageSendInput,
  StyledInput,
} from "./styles";
import UploadIcon from "./upload";
import RightIcons from "./right-icons";

function MessageSendbox() {
  return (
    <StyledMessageSendBox>
      <StyledMessageSendInput>
        <UploadIcon />
        <StyledInput placeholder="Message @Karol" />
        <RightIcons />
      </StyledMessageSendInput>
    </StyledMessageSendBox>
  );
}

export default MessageSendbox;
