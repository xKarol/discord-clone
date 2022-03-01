import { StyledAvatar } from "../styles";
import { Avatar } from "@mui/material";

function CustomAvatar({ src, status }) {
  return (
    <StyledAvatar status={status}>
      <Avatar src={src} sx={{ width: "33px", height: "33px" }} />
    </StyledAvatar>
  );
}

export default CustomAvatar;
