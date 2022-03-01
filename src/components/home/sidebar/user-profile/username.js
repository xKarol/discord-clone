import { StyledUsername } from "./styles";
import { useSelector } from "react-redux";
import Tooltip from "../../../tooltip";

function Username() {
  const {
    user: { username },
  } = useSelector((state) => state.user);

  return (
    <Tooltip title="Click to copy username" placement="top" medium="true">
      <StyledUsername>
        <span>{username}</span>
        <small>#0000</small>
      </StyledUsername>
    </Tooltip>
  );
}

export default Username;
