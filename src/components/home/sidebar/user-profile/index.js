import Avatar from "../../../avatar";
import { StyledCurrentUserData } from "./styles";
import Username from "./username";
import ProfileIcons from "./profile-icons";
import { logoutUserRequest } from "../../../../redux/user/userActions";
import { useDispatch } from "react-redux";

function CurrentUserData() {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logoutUserRequest());
  };

  return (
    <StyledCurrentUserData>
      <Avatar status="online" onClick={handleLogout} />
      <Username />
      <ProfileIcons />
    </StyledCurrentUserData>
  );
}

export default CurrentUserData;
