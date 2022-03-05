import { StyledOption, StyledOptionImage } from "./styles";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

function Option({ onClick, image, text }) {
  return (
    <StyledOption onClick={onClick}>
      <StyledOptionImage src={image} alt={text} />
      {text}
      <ChevronRightIcon sx={{ marginLeft: "auto" }} />
    </StyledOption>
  );
}

export default Option;
