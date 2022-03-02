import styled from "styled-components";

const StyledCurrentUserData = styled.div`
  display: flex;
  padding: 10px;
  margin-top: auto;
  width: 100%;
  background-color: ${(props) => props.theme.colors.dark};
`;

const StyledUsername = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 8px;
  font-size: 13px;
  cursor: pointer;
  > span {
    font-weight: 800;
  }
  > small {
    color: ${(props) => props.theme.colors.gray};
  }
`;

const StyledUserIcons = styled.div`
  display: flex;
  margin-left: auto;
  margin-top: auto;
  margin-bottom: auto;
  > * {
    color: ${(props) => props.theme.colors.gray};
    transition: background-color 100ms ease-in-out;
    border-radius: 5px;
    padding: 5px;
    font-size: 30px !important;
    cursor: pointer;
    &:hover {
      background-color: ${props => props.theme.colors.hoverColor};
    }
  }
`;

export { StyledCurrentUserData, StyledUsername, StyledUserIcons };
