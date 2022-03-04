import { StyledSubmit } from "./styles";
import { CircularProgress } from "@mui/material";

function Submit({ loading, children }) {
  return (
    <StyledSubmit type="submit">
      {loading ? (
        <CircularProgress size={20} thickness={6} sx={{ color: "#FFF" }} />
      ) : (
        children
      )}
    </StyledSubmit>
  );
}

export default Submit;
