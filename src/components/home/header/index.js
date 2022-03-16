import Text from "./text";
import MainIcons from "./main-icons";
import { StyledHeader, StyledHeaderMain } from "./styles";
import { useLocation } from "react-router-dom";
import * as route from "../../../constants/routes";

function Header({ children }) {
  const { pathname } = useLocation();

  return (
    <StyledHeader>
      <StyledHeaderMain>
        {pathname !== route.HOME && <Text />}
        {children}
        <MainIcons />
      </StyledHeaderMain>
    </StyledHeader>
  );
}

export default Header;
