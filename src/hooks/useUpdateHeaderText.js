import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setHeaderText, setHeaderType } from "../redux/app/appActions";
import { getChannelById } from "../helpers/get-channel";
import { getUserById } from "../helpers/get-user";
import { getFirestore } from "firebase/firestore";
import {
  HEADER_TYPE_CHANNEL,
  HEADER_TYPE_CONVERSATION,
} from "../constants/header";

export default function useUpdateHeaderText(type, id) {
  const dispatch = useDispatch();

  useEffect(() => {
    const updateHeader = async () => {
      const db = getFirestore();
      let text;
      dispatch(setHeaderText(""));
      if (type === HEADER_TYPE_CONVERSATION) {
        const { username } = await getUserById(db, id);
        text = username;
      } else if (type === HEADER_TYPE_CHANNEL) {
        const { name } = await getChannelById(db, id);
        text = name;
      } else return;
      dispatch(setHeaderText(text));
    };
    updateHeader();
    dispatch(setHeaderType(type));
  }, [dispatch, type, id]);
  return null;
}
