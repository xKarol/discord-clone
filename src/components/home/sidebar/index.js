import UserProfile from "./user-profile";
import { StyledSidebarBox, StyledList, StyledDirectMessages } from "./styles";
import ListItem from "./list-item";
import EmojiPeopleIcon from "@mui/icons-material/EmojiPeople";
import BoltIcon from "@mui/icons-material/Bolt";
import AddIcon from "@mui/icons-material/Add";
import { useSelector } from "react-redux";
import Avatar from "../../avatar";
import * as route from "../../../constants/routes";

function Sidebar() {
  const { latestConversations } = useSelector(
    (state) => state.latestConversations
  );

  return (
    <StyledSidebarBox>
      <StyledList>
        <ListItem name="Friends" icon={<EmojiPeopleIcon />} />
        <ListItem name="Nitro" icon={<BoltIcon />} />
      </StyledList>
      <StyledDirectMessages>
        Direct Messages
        <AddIcon fontSize={"small"} />
      </StyledDirectMessages>
      <StyledList>
        {latestConversations.map(({ userId, username, avatar }) => (
          <ListItem
            key={userId}
            name={username}
            icon={<Avatar src={avatar} status="offline" />}
            href={`${route.CONVERSATION}/${userId}`}
          />
        ))}
      </StyledList>
      <UserProfile />
    </StyledSidebarBox>
  );
}

export default Sidebar;
