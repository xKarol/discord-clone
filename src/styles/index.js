import styled, { css } from "styled-components";

const StyledAvatar = styled.div`
  display: flex;
  position: relative;
  cursor: pointer;
  &::before {
    content: "";
    position: absolute;
    bottom: -2px;
    right: -2px;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: ${(props) =>
      props.status === "online"
        ? props.theme.colors.green
        : props.theme.colors.gray};
    z-index: 10;
    border: 3px solid ${(props) => props.theme.colors.formDark};
    display: ${(props) => (props.status ? "block" : "none")};
  }
`;

const HideScrollbar = () => css`
  ::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
`;

export { StyledAvatar, HideScrollbar };
