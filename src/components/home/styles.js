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
  flex-direction: column;
`;

const StyledLeftContainers = styled.div`
  display: flex;
  z-index: 100;
`;

const StyledMainSection = styled.main`
  display: flex;
  width: 100%;
  height: 100%;
  max-height: calc(100% - 50px);
`;

export {
  StyledBackground,
  StyledBody,
  StyledLeftContainers,
  StyledMainSection,
};
