import styled from "styled-components";

const StyledAvatar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
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

export { StyledAvatar };
