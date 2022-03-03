import Username from "./username";
import MainIcons from "./main-icons";
import {
  StyledHeader,
  StyledSearchBox,
  StyledHeaderLeft,
  StyledHeaderMain,
} from "./styles";
import { useLocation } from "react-router-dom";
import * as route from "../../../constants/routes";

function Header({ children }) {
  const { pathname } = useLocation();

  return (
    <StyledHeader>
      <StyledHeaderLeft>
        <StyledSearchBox>Find or start a conversation</StyledSearchBox>
      </StyledHeaderLeft>
      <StyledHeaderMain>
        {pathname !== route.HOME && <Username />}
        {children}
        <MainIcons />
      </StyledHeaderMain>
    </StyledHeader>
  );
}

export default Header;
