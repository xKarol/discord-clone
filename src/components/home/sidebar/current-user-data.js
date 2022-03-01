import { Avatar } from "@mui/material";
import { StyledCurrentUserData, StyledUserIcons } from "./styles";
import SettingsIcon from "@mui/icons-material/Settings";
import MicIcon from "@mui/icons-material/Mic";
import HeadphonesIcon from "@mui/icons-material/Headphones";
import Username from "./username";

function CurrentUserData() {
  return (
    <StyledCurrentUserData>
      <Avatar sx={{ width: "33px", height: "33px" }} />
      <Username />
      <StyledUserIcons>
        <MicIcon />
        <HeadphonesIcon />
        <SettingsIcon />
      </StyledUserIcons>
    </StyledCurrentUserData>
  );
}

export default CurrentUserData;
