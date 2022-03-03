import Username from "./username";
import MainIcons from "./main-icons";
import {
  StyledHeader,
  StyledSearchBox,
  StyledHeaderLeft,
  StyledHeaderMain,
} from "./styles";

function Header({ children }) {
  return (
    <StyledHeader>
      <StyledHeaderLeft>
        <StyledSearchBox>Find or start a conversation</StyledSearchBox>
      </StyledHeaderLeft>
      <StyledHeaderMain>
        <Username />
        {children}
        <MainIcons />
      </StyledHeaderMain>
    </StyledHeader>
  );
}

export default Header;
