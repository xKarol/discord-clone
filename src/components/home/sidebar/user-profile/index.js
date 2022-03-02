import Avatar from "../../../avatar";
import { StyledCurrentUserData } from "./styles";
import Username from "./username";
import ProfileIcons from "./profile-icons";
import { logoutUserRequest } from "../../../../redux/user/userActions";
import { useDispatch, useSelector } from "react-redux";

function CurrentUserData() {
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logoutUserRequest());
  };

  return (
    <StyledCurrentUserData>
      <Avatar src={user.avatar} status="online" onClick={handleLogout} />
      <Username />
      <ProfileIcons />
    </StyledCurrentUserData>
  );
}

export default CurrentUserData;
