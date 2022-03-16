import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import Message from "../components/conversation/message";
import MessageSendbox from "../components/conversation/message-sendbox";
import {
  StyledContainer,
  StyledMessagesBox,
} from "../components/conversation/styles";
import { setHeaderText, setHeaderType } from "../redux/app/appActions";
import { getChannelById } from "../helpers/get-channel";
import { getFirestore } from "firebase/firestore";
import { HEADER_TYPE_CHANNEL } from "../constants/header";

function ChannelPage() {
  const dispatch = useDispatch();
  const messageBoxRef = useRef(null);
  const { channelId } = useParams();

  useEffect(() => {
    const updateHeader = async () => {
      const db = getFirestore();
      const { name } = await getChannelById(db, channelId);
      dispatch(setHeaderText(name));
    };
    updateHeader();
    dispatch(setHeaderType(HEADER_TYPE_CHANNEL));
  }, [dispatch, channelId]);

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
