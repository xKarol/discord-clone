import {
  getFirestore,
  updateDoc,
  serverTimestamp,
  doc,
} from "firebase/firestore";
import { useEffect } from "react";
import { useSelector } from "react-redux";

function useUserStatus() {
  const { user } = useSelector((state) => state.user);

  useEffect(() => {
    if (!user?.userId) return;
    const db = getFirestore();
    const update = async () => {
      await updateDoc(doc(db, "users", user?.userId), {
        lastOnline: serverTimestamp(),
      });
    };
    update();
    const timer = setInterval(() => {
      update();
    }, 1000 * 30);
    return () => clearInterval(timer);
  }, [user?.userId]);

  return null;
}

export default useUserStatus;
