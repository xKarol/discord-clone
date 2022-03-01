import styled, { css } from "styled-components";

const StyledBackground = styled.main`
  display: flex;
  width: 100%;
  height: 100vh;
  background-color: ${(props) => props.theme.colors.dark};
`;

const HideScrollbar = () => css`
  ::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
`;

export { StyledBackground, HideScrollbar };
