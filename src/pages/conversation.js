import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Message from "../components/conversation/message";
import MessageSendbox from "../components/conversation/message-sendbox";
import {
  StyledContainer,
  StyledMessagesBox,
} from "../components/conversation/styles";
import { getMessages } from "../redux/messages/messagesActions";
import {
  getFirestore,
  collection,
  query,
  where,
  onSnapshot,
  orderBy,
} from "firebase/firestore";
import { getUserById } from "../helpers/get-user";

function ConversationPage() {
  const {
    user: { uid: userId },
  } = useSelector((state) => state.user);
  // const data = useSelector((state) => state.messages);
  // const dispatch = useDispatch();
  const { userId: recipientId } = useParams();
  const navigate = useNavigate();
  const unAuthorized = recipientId === userId;
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    if (unAuthorized) navigate("/");
  }, [navigate, unAuthorized]);
  // useEffect(() => {
  //   if (!unAuthorized) return;
  //   dispatch(getMessages(recipientId));
  // }, [dispatch, unAuthorized, recipientId]);

  useEffect(() => {
    if (unAuthorized) return;
    const db = getFirestore();
    const q = query(
      collection(db, "messages"),
      where("users", "array-contains", recipientId, userId),
      orderBy("timestamp", "desc")
    );
    const unsub = onSnapshot(q, async (messagesDoc) => {
      // const data = messagesDoc.docs.map((message) => ({
      //   messageId: message.id,
      //   ...message.data(),
      // }));

      const data = await Promise.all(
        messagesDoc.docs.map(async (docData) => {
          const userId = docData.data().userId;
          const userData = await getUserById(db, userId);
          return {
            user: userData,
            ...docData.data(),
            messageId: docData.id,
          };
        })
      );
      setMessages(data);
    });
    return () => unsub();
  }, [unAuthorized, recipientId, userId]);

  if (unAuthorized) return null;
  return (
    <StyledContainer>
      <StyledMessagesBox>
        {messages.map((props) => (
          <Message key={props.messageId} {...props} />
        ))}
      </StyledMessagesBox>
      <MessageSendbox />
    </StyledContainer>
  );
}

export default ConversationPage;
