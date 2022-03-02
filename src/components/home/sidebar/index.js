import UserProfile from "./user-profile";
import { StyledSidebarBox, StyledList, StyledDirectMessages } from "./styles";
import ListItem from "./list-item";
import EmojiPeopleIcon from "@mui/icons-material/EmojiPeople";
import BoltIcon from "@mui/icons-material/Bolt";
import AddIcon from "@mui/icons-material/Add";
import { useSelector } from "react-redux";
import Avatar from "../../avatar";
import * as route from "../../../constants/routes";
import isOnline from "../../../utils/is-online";

function Sidebar() {
  const { latestConversations } = useSelector(
    (state) => state.latestConversations
  );

  return (
    <StyledSidebarBox>
      <StyledList>
        <ListItem name="Friends" href="/friends" icon={<EmojiPeopleIcon />} />
        <ListItem name="Nitro" href="/nitro" icon={<BoltIcon />} />
      </StyledList>
      <StyledDirectMessages>
        Direct Messages
        <AddIcon fontSize={"small"} />
      </StyledDirectMessages>
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
      <UserProfile />
    </StyledSidebarBox>
  );
}

export default Sidebar;
