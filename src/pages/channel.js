import { useRef } from "react";
import { useParams } from "react-router-dom";
import Message from "../components/conversation/message";
import MessageSendbox from "../components/conversation/message-sendbox";
import {
  StyledContainer,
  StyledMessagesBox,
} from "../components/conversation/styles";
import { HEADER_TYPE_CHANNEL } from "../constants/header";
import useUpdateHeaderText from "../hooks/useUpdateHeaderText";

function ChannelPage() {
  const messageBoxRef = useRef(null);
  const { channelId } = useParams();
  useUpdateHeaderText(HEADER_TYPE_CHANNEL, channelId);

  //   useEffect(() => {
  //     if (loading) return;
  //     const element = messageBoxRef.current;
  //     element.scrollTo(0, element.scrollHeight);
  //   }, [messages, loading]);

  return (
    <StyledContainer>
      <StyledMessagesBox ref={messageBoxRef}>
        {true &&
          [...new Array(3)].map((_, index) => (
            <Message key={index} skeleton={index} />
          ))}
        {/* {!loading &&
          messages.map((props) => <Message key={props.messageId} {...props} />)} */}
      </StyledMessagesBox>
      <MessageSendbox />
    </StyledContainer>
  );
}

export default ChannelPage;
