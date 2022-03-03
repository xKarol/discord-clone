import { getRandomAvatar } from "../utils/random-avatar";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";
import { createUserWithEmailAndPassword } from "firebase/auth";

export const firebase_registerUser = async (
  db,
  auth,
  email,
  password,
  username
) => {
  const userCredential = await createUserWithEmailAndPassword(
    auth,
    email,
    password
  );
  const user = userCredential.user;

  return await setDoc(doc(db, "users", user.uid), {
    userId: user.uid,
    username,
    avatar: getRandomAvatar(),
    lastOnline: serverTimestamp(),
  });
};
