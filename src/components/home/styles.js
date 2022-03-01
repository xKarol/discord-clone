import styled from "styled-components";

const StyledBackground = styled.main`
  display: flex;
  width: 100%;
  height: 100vh;
  background-color: ${(props) => props.theme.colors.dark};
`;

const StyledBody = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
`;

export { StyledBackground, StyledBody };
