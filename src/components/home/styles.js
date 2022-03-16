import styled from "styled-components";
import { device } from "../../styles/breakpoints";

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
  position: ${(props) => (props.active ? "fixed" : "unset")};
  left: 320px;
  top: 0;
  bottom: 0;
  @media ${device.md} {
    position: unset;
  }
`;

const StyledLeftContainers = styled.div`
  z-index: 100;
  display: ${(props) => (props.active ? "flex" : "none")};
  position: ${(props) => (props.active ? "fixed" : "unset")};
  left: 0;
  top: 0;
  bottom: 0;
  @media ${device.md} {
    display: flex;
    position: unset;
  }
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
