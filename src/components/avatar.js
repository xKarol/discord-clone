import { StyledAvatar } from "../styles";
import { Avatar } from "@mui/material";

function CustomAvatar(props) {
  return (
    <StyledAvatar {...props} status={props.status}>
      <Avatar
        src={props.src ?? "/images/default-avatars/green-avatar.svg"}
        sx={{ width: "33px", height: "33px" }}
      />
    </StyledAvatar>
  );
}

export default CustomAvatar;
