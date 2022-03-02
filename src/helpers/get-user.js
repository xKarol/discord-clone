import { doc, getDoc } from "firebase/firestore";

export async function getUserById(db, Id) {
  if (!Id) return;
  const userDoc = await getDoc(doc(db, "users", Id));
  const user = { ...userDoc.data(), userId: userDoc.id };
  return { ...user };
}
