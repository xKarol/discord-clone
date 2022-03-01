import {
  StyledHeader,
  StyledSearchBox,
  StyledHeaderLeft,
  StyledHeaderMain,
} from "./styles";
function Header() {
  return (
    <StyledHeader>
      <StyledHeaderLeft>
        <StyledSearchBox>Find or start a conversation</StyledSearchBox>
      </StyledHeaderLeft>
      <StyledHeaderMain>
          Main
      </StyledHeaderMain>
    </StyledHeader>
  );
}

export default Header;
