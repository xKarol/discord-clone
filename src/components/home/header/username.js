import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import { useSelector } from "react-redux";
import { StyledHeaderUsername } from "./styles";
import TagIcon from "@mui/icons-material/Tag";
import { HEADER_TYPE_CHANNEL } from "../../../constants/header";
function Username() {
  const { headerText, headerType } = useSelector((state) => state.app);

  if (!headerText) return null;
  return (
    <StyledHeaderUsername>
      {headerType === HEADER_TYPE_CHANNEL ? (
        <TagIcon />
      ) : (
        <AlternateEmailIcon />
      )}
      {headerText}
    </StyledHeaderUsername>
  );
}

export default Username;
