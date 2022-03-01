import GifBoxIcon from "@mui/icons-material/GifBox";
import NoteAddOutlinedIcon from "@mui/icons-material/NoteAddOutlined";
import CreditCardOutlinedIcon from "@mui/icons-material/CreditCardOutlined";
import { StyledRightIcons } from "./styles";
import Emoticons from "./emoticons";

function RightIcons() {
  return (
    <StyledRightIcons>
      <CreditCardOutlinedIcon />
      <GifBoxIcon />
      <NoteAddOutlinedIcon />
      <Emoticons />
    </StyledRightIcons>
  );
}

export default RightIcons;
