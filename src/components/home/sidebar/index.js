import UserProfile from "./user-profile";
import {
  StyledSidebarBox,
  StyledList,
  StyledDirectMessages,
} from "./styles";
import ListItem from "./list-item";
import EmojiPeopleIcon from "@mui/icons-material/EmojiPeople";
import BoltIcon from "@mui/icons-material/Bolt";
import AddIcon from "@mui/icons-material/Add";
import Avatar from "../../avatar";

function Sidebar() {
  return (
    <StyledSidebarBox>
      <StyledList>
        <ListItem text="Friends" icon={<EmojiPeopleIcon />} />
        <ListItem text="Nitro" icon={<BoltIcon />} />
      </StyledList>
      <StyledDirectMessages>
        Direct Messages
        <AddIcon fontSize={"small"} />
      </StyledDirectMessages>
      <StyledList>
        <ListItem text="Test" icon={<Avatar status="offline" />} />
      </StyledList>
      <UserProfile />
    </StyledSidebarBox>
  );
}

export default Sidebar;
