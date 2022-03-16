import Text from "./text";
import MainIcons from "./main-icons";
import { StyledHeader, StyledHeaderMain } from "./styles";
import { useLocation } from "react-router-dom";
import * as route from "../../../constants/routes";
import Hamburger from "./hamburger";

function Header({ children }) {
  const { pathname } = useLocation();

  return (
    <StyledHeader>
      <StyledHeaderMain>
        <Hamburger />
        {pathname !== route.HOME && <Text />}
        {children}
        <MainIcons />
      </StyledHeaderMain>
    </StyledHeader>
  );
}

export default Header;
