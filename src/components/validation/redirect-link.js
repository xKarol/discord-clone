import { Link } from "react-router-dom";
import { StyledLink } from "./styles";

function RedirectLink({ linkText, href, extraText }) {
  return (
    <StyledLink>
      {extraText}
      <Link to={href}>{linkText}</Link>
    </StyledLink>
  );
}

export default RedirectLink;
