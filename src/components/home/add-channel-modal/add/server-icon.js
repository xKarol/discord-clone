import { StyledAvatar, StyledAvatarText, StyledPreviewImage } from "./styles";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import { useContext, useEffect, useRef, useState } from "react";
import { NewChannelContext } from "../../../../context/new-channel-context";

function ServerIcon() {
  const inputRef = useRef(null);
  const [file, setFile] = useState(null);
  const { setSelectedAvatar, selectedAvatar } = useContext(NewChannelContext);

  useEffect(() => {
    if (!file) return;
    const reader = new FileReader();
    reader.readAsDataURL(file);

    const changePreviewImg = () => setSelectedAvatar(reader.result);
    reader.addEventListener("load", changePreviewImg);
    return () => reader.removeEventListener("load", changePreviewImg);
  }, [file, setSelectedAvatar]);

  return (
    <StyledAvatar
      overflow={selectedAvatar}
      onClick={() => inputRef.current.click()}
    >
      {selectedAvatar ? (
        <StyledPreviewImage src={selectedAvatar} />
      ) : (
        <>
          <PhotoCameraIcon />
          <StyledAvatarText>Upload</StyledAvatarText>
        </>
      )}
      <input
        type="file"
        ref={inputRef}
        hidden
        accept="image/*"
        onChange={(e) => setFile(e.target.files[0])}
      />
    </StyledAvatar>
  );
}

export default ServerIcon;
