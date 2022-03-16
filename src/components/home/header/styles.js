import styled from "styled-components";

const StyledHeader = styled.header`
  display: flex;
  width: 100%;
  height: 50px;
  max-height: 50px;
  background: ${(props) => props.theme.colors.formDark};
  border-bottom: 1px solid #20222599;
`;

const StyledHeaderMain = styled.div`
  display: flex;
  flex: 1;
  background: ${(props) => props.theme.colors.dark};
  align-items: center;
  padding: 0 20px;
`;

const StyledHeaderMainIcons = styled.div`
  margin-left: auto;
  display: flex;
  padding-left: 15px;
  color: ${(props) => props.theme.colors.gray};
  border-left: 1px solid ${(props) => props.theme.colors.darkGray};
  > * {
    cursor: pointer;
    transition: color 100ms ease-in-out;
    &:hover {
      color: #f0f0f0;
    }
  }
  > :last-child {
    margin-left: 15px;
  }
`;

const StyledHeaderText = styled.span`
  > :first-child {
    color: ${(props) => props.theme.colors.darkGray};
    margin-right: 5px;
  }
  font-weight: 600;
  font-size: 16px;
  color: #f0f0f0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export {
  StyledHeader,
  StyledHeaderMain,
  StyledHeaderMainIcons,
  StyledHeaderText,
};
