import { useState } from "react";
import {
  StyledMessageSendBox,
  StyledMessageSendInput,
  StyledInput,
} from "./styles";
import UploadIcon from "./upload";
import RightIcons from "./right-icons";
import { useDispatch, useSelector } from "react-redux";
import { sendMessage } from "../../../redux/messages/messagesActions";
import { useParams } from "react-router-dom";
import { HEADER_TYPE_CHANNEL } from "../../../constants/header";

function MessageSendbox() {
  const [message, setMessage] = useState("");
  const dispatch = useDispatch();
  const { userId: recipientId } = useParams();
  const {
    user: { userId },
  } = useSelector((state) => state.user);
  const { headerText, headerType } = useSelector((state) => state.app);
  const placeholder = `Message ${
    headerText && (headerType === HEADER_TYPE_CHANNEL ? "#" : "@")
  }${headerText}`;

  const handleSendMessage = (e) => {
    e.preventDefault();
    dispatch(sendMessage(recipientId, userId, message));
    setMessage("");
  };

  return (
    <StyledMessageSendBox>
      <StyledMessageSendInput onSubmit={(e) => handleSendMessage(e)}>
        <UploadIcon />
        <StyledInput
          placeholder={placeholder}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <RightIcons />
      </StyledMessageSendInput>
    </StyledMessageSendBox>
  );
}

export default MessageSendbox;
