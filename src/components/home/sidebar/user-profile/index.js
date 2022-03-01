import Avatar from "../../../avatar";
import { StyledCurrentUserData } from "./styles";
import Username from "./username";
import ProfileIcons from "./profile-icons";

function CurrentUserData() {
  return (
    <StyledCurrentUserData>
      <Avatar status="online" />
      <Username />
      <ProfileIcons />
    </StyledCurrentUserData>
  );
}

export default CurrentUserData;
