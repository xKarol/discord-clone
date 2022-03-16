import { doc, getDoc } from "firebase/firestore";

export async function getChannelById(db, Id) {
  if (!Id) return;
  const channelDoc = await getDoc(doc(db, "channels", Id));
  const channel = { ...channelDoc.data(), channelId: channelDoc.id };
  return { ...channel };
}
