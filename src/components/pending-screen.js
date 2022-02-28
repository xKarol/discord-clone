import logo from "../assets/logo.svg";
import styled from "styled-components";

const StyledLogo = styled.img`
  margin: auto;
  objec-fit: contain;
  width: 150px;
`;

const StyledContainer = styled.main`
  min-height: 100vh;
  display: flex;
`;

function PendingScreen() {
  return (
    <StyledContainer>
      <StyledLogo src={logo} alt="discord logo" />
    </StyledContainer>
  );
}

export default PendingScreen;
