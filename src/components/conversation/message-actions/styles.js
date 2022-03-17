import styled from "styled-components";

const StyledMessageAction = styled.div`
  color: ${(props) => props.theme.colors.gray};
  cursor: pointer;
  margin-right: 10px;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: color 100ms ease-in-out;
  &:hover {
    color: ${(props) => props.theme.colors.lightGray};
  }
  &:last-child {
    margin-right: 0;
  }
`;

export { StyledMessageAction };
