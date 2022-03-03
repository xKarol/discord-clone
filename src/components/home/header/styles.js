import styled from "styled-components";

const StyledHeader = styled.header`
  display: flex;
  width: 100%;
  height: 50px;
  max-height: 50px;
  background: ${(props) => props.theme.colors.formDark};
  border-bottom: 1px solid #20222599;
`;

const StyledSearchBox = styled.button.attrs({ type: "button" })`
  background-color: ${(props) => props.theme.colors.dark};
  border: none;
  border-radius: 3px;
  cursor: pointer;
  padding: 7px 15px;
  width: calc(100% - 20px);
  color: ${(props) => props.theme.colors.gray};
  font-size: 13px;
`;

const StyledHeaderLeft = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 235px;
  min-width: 235px;
  height: 100%;
  background: ${(props) => props.theme.colors.lightDark};
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

const StyledHeaderUsername = styled.span`
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
  StyledSearchBox,
  StyledHeaderLeft,
  StyledHeaderMain,
  StyledHeaderMainIcons,
  StyledHeaderUsername,
};
