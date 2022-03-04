import { useSelector, useDispatch } from "react-redux";
import Avatar from "../../avatar";
import * as route from "../../../constants/routes";
import isOnline from "../../../utils/is-online";
import { StyledList } from "./styles";
import ListItem from "./list-item";
import { useEffect } from "react";
import { getLatestConversations } from "../../../redux/latest-conversations/latest-conversationsActions";

function LastConversations() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const { latestConversations } = useSelector(
    (state) => state.latestConversations
  );

  useEffect(() => {
    dispatch(getLatestConversations(user?.userId));

    const timer = setInterval(() => {
      dispatch(getLatestConversations(user?.userId));
    }, 1000 * 20);

    return () => clearInterval(timer);
  }, [dispatch, user?.userId]);

  return (
    <StyledList>
      {latestConversations.map(({ userId, username, avatar, lastOnline }) => (
        <ListItem
          key={userId}
          name={username}
          icon={<Avatar src={avatar} status={isOnline(lastOnline)} />}
          href={`${route.CONVERSATION}/${userId}`}
        />
      ))}
    </StyledList>
  );
}

export default LastConversations;
