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

function useMessages(authorized, recipientId, userId) {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    if (!authorized) return;
    const db = getFirestore();
    const q = query(
      collection(db, "messages"),
      where("users", "array-contains", recipientId, userId),
      orderBy("timestamp", "asc")
    );
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
    });
    return () => unsub();
  }, [authorized, recipientId, userId]);

  return { messages };
}

export default useMessages;
