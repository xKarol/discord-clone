import { Avatar } from "@mui/material";
import { StyledCurrentUserData } from "./styles";
import Username from "./username";
import ProfileIcons from "./profile-icons";

function CurrentUserData() {
  return (
    <StyledCurrentUserData>
      <Avatar sx={{ width: "33px", height: "33px" }} />
      <Username />
      <ProfileIcons />
    </StyledCurrentUserData>
  );
}

export default CurrentUserData;
