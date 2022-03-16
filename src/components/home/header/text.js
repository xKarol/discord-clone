import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import { useSelector } from "react-redux";
import { StyledHeaderText } from "./styles";
import TagIcon from "@mui/icons-material/Tag";
import { HEADER_TYPE_CHANNEL } from "../../../constants/header";
import { Skeleton } from "@mui/material";

function Text() {
  const { headerText, headerType } = useSelector((state) => state.app);

  if (!headerText) return <Skeleton variant="text" width={150} height={40} />;
  return (
    <StyledHeaderText>
      {headerType === HEADER_TYPE_CHANNEL ? (
        <TagIcon />
      ) : (
        <AlternateEmailIcon />
      )}
      {headerText}
    </StyledHeaderText>
  );
}

export default Text;
