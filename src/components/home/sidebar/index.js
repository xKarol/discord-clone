import UserProfile from "./user-profile";
import {
  StyledSidebarBox,
  StyledList,
  StyledDirectMessages,
  StyledSearchBox,
  StyledSearchContainer,
} from "./styles";
import ListItem from "./list-item";
import EmojiPeopleIcon from "@mui/icons-material/EmojiPeople";
import BoltIcon from "@mui/icons-material/Bolt";
import AddIcon from "@mui/icons-material/Add";
import LastConversations from "./last-conversations";

function Sidebar() {
  return (
    <StyledSidebarBox>
      <StyledSearchContainer>
        <StyledSearchBox>Find or start a conversation</StyledSearchBox>
      </StyledSearchContainer>
      <StyledList>
        <ListItem name="Friends" href="/friends" icon={<EmojiPeopleIcon />} />
        <ListItem name="Nitro" href="/nitro" icon={<BoltIcon />} />
      </StyledList>
      <StyledDirectMessages>
        Direct Messages
        <AddIcon fontSize={"small"} />
      </StyledDirectMessages>
      <LastConversations />
      <UserProfile />
    </StyledSidebarBox>
  );
}

export default Sidebar;
