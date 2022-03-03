import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import { useSelector } from "react-redux";
import { StyledHeaderUsername } from "./styles";

function Username() {
  const { recipientName } = useSelector((state) => state.app);

  if (!recipientName) return null;
  return (
    <StyledHeaderUsername>
      <AlternateEmailIcon />
      {recipientName}
    </StyledHeaderUsername>
  );
}

export default Username;
