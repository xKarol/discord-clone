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
  const { userId: recipientId, channelId } = useParams();
  const {
    user: { userId },
  } = useSelector((state) => state.user);
  const { headerText, headerType } = useSelector((state) => state.app);
  const placeholder = `Message ${
    headerText && (headerType === HEADER_TYPE_CHANNEL ? "#" : "@")
  }${headerText}`;

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!message) return;
    if (message.trim().length === 0) return; //only spaces check

    dispatch(
      sendMessage(
        headerType,
        channelId ? channelId : recipientId,
        userId,
        message
      )
    );
    setMessage("");
  };

  const handleInput = (e) => {
    const text = e.target.value;
    if (text.length >= 1000) return;
    setMessage(text);
  };

  return (
    <StyledMessageSendBox>
      <StyledMessageSendInput onSubmit={(e) => handleSendMessage(e)}>
        <UploadIcon />
        <StyledInput
          placeholder={placeholder}
          value={message}
          onChange={(e) => handleInput(e)}
        />
        <RightIcons />
      </StyledMessageSendInput>
    </StyledMessageSendBox>
  );
}

export default MessageSendbox;
