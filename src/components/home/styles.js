import styled from "styled-components";

const StyledBackground = styled.main`
  display: flex;
  width: 100%;
  height: 100vh;
  background-color: ${(props) => props.theme.colors.dark};
`;

export { StyledBackground };
