import UserProfile from "./user-profile";
import {
  StyledSidebarBox,
  StyledSidebarContainer,
  StyledSearchBox,
  StyledList,
  StyledDirectMessages,
} from "./styles";
import ListItem from "./list-item";
import EmojiPeopleIcon from "@mui/icons-material/EmojiPeople";
import BoltIcon from "@mui/icons-material/Bolt";
import AddIcon from "@mui/icons-material/Add";

function Sidebar() {
  return (
    <StyledSidebarBox>
      <StyledSidebarContainer>
        <StyledSearchBox>Find or start a conversation</StyledSearchBox>
      </StyledSidebarContainer>
      <StyledList>
        <ListItem text="Friends">
          <EmojiPeopleIcon />
        </ListItem>
        <ListItem text="Nitro">
          <BoltIcon />
        </ListItem>
      </StyledList>
      <StyledDirectMessages>
        Direct Messages
        <AddIcon fontSize={"small"} />
      </StyledDirectMessages>
      <StyledList>
        <ListItem text="Test">{/* <Avatar /> */}</ListItem>
      </StyledList>
      <UserProfile />
    </StyledSidebarBox>
  );
}

export default Sidebar;
