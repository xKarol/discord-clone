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

function MessageSendbox() {
  const [message, setMessage] = useState("");
  const dispatch = useDispatch();
  const { userId: recipientId } = useParams();
  const {
    user: { userId },
  } = useSelector((state) => state.user);
  const { recipientName } = useSelector((state) => state.app);

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
          placeholder={`Message @${recipientName}`}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <RightIcons />
      </StyledMessageSendInput>
    </StyledMessageSendBox>
  );
}

export default MessageSendbox;
