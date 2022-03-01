import { StyledAvatar, StyledAvatarText } from "./styles";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";

function ServerIcon() {
  return (
    <StyledAvatar>
      <PhotoCameraIcon />
      <StyledAvatarText>Upload</StyledAvatarText>
    </StyledAvatar>
  );
}

export default ServerIcon;
