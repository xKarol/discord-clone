import { StyledOption, StyledOptionImage } from "./styles";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

function Option({ image, text }) {
  return (
    <StyledOption>
      <StyledOptionImage src={image} alt={text} />
      {text}
      <ChevronRightIcon sx={{ marginLeft: "auto" }} />
    </StyledOption>
  );
}

export default Option;
