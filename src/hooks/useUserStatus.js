import {
  getFirestore,
  updateDoc,
  serverTimestamp,
  doc,
} from "firebase/firestore";
import { useEffect } from "react";
import { useSelector } from "react-redux";

function useUserStatus() {
  const {
    user: { uid: userId },
    loggedIn,
  } = useSelector((state) => state.user);

  useEffect(() => {
    if (!loggedIn) return;
    const db = getFirestore();
    const update = async () => {
      await updateDoc(doc(db, "users", userId), {
        lastOnline: serverTimestamp(),
      });
    };
    update();
    const timer = setInterval(() => {
      update();
    }, 1000 * 30);
    return () => clearInterval(timer);
  }, [userId, loggedIn]);

  return null;
}

export default useUserStatus;
