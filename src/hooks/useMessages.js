import { useState, useEffect } from "react";
import {
  getFirestore,
  collection,
  query,
  where,
  onSnapshot,
  orderBy,
} from "firebase/firestore";
import { getUserById } from "../helpers/get-user";
import {
  HEADER_TYPE_CONVERSATION,
  HEADER_TYPE_CHANNEL,
} from "../constants/header";
function useMessages(type, authorized, id, userId) {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(true);

  useEffect(() => {
    if (!authorized) return;
    const db = getFirestore();
    let q;
    if (type === HEADER_TYPE_CONVERSATION) {
      q = query(
        collection(db, "messages"),
        where("users", "array-contains", id, userId),
        orderBy("timestamp", "asc")
      );
    } else if (type === HEADER_TYPE_CHANNEL) {
      q = query(
        collection(db, "channel-messages"),
        where("channelId", "==", id),
        orderBy("timestamp", "asc")
      );
    } else return setError(true);

    const unsub = onSnapshot(q, async (messagesDoc) => {
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
      setLoading(false);
    });
    return () => unsub();
  }, [type, authorized, id, userId]);

  return { messages, error, loading };
}

export default useMessages;
