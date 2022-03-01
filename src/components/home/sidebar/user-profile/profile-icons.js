import { StyledUserIcons } from "./styles";
import SettingsIcon from "@mui/icons-material/Settings";
import MicIcon from "@mui/icons-material/Mic";
import HeadphonesIcon from "@mui/icons-material/Headphones";
import Tooltip from "../../../tooltip";

function ProfileIcons() {
  return (
    <StyledUserIcons>
      <Tooltip title="Mute" placement="top" medium="true">
        <MicIcon />
      </Tooltip>
      <Tooltip title="Deafen" placement="top" medium="true">
        <HeadphonesIcon />
      </Tooltip>
      <Tooltip title="User Settings" placement="top" medium="true">
        <SettingsIcon />
      </Tooltip>
    </StyledUserIcons>
  );
}

export default ProfileIcons;
