import styled from "styled-components";
import { HideScrollbar } from "../styles";

const StyledSidebarBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 240px;
  height: 100vh;
  background-color: ${(props) => props.theme.colors.formDark};
  padding: 15px 0;
  padding-bottom: 0;
  max-height: 100vh;
`;

const StyledSidebarContainer = styled.div`
  width: 100%;
  padding: 0 10px;
`;

const StyledSearchBox = styled.button.attrs({ type: "button" })`
  width: 100%;
  background-color: ${(props) => props.theme.colors.dark};
  border: none;
  border-radius: 3px;
  cursor: pointer;
  padding: 5px 15px;
  color: ${(props) => props.theme.colors.gray};
  font-size: 13px;
`;
const StyledList = styled.ul`
  width: 100%;
  padding: 0 10px;
  margin-top: 10px;
  border-top: 1px solid ${(props) => props.theme.colors.dark};
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  max-height: calc(100vh - 215px);
  ${HideScrollbar};
`;
const StyledListItem = styled.li`
  display: flex;
  padding: 10px;
  align-items: center;
  cursor: pointer;
  transition: background-color 100ms ease-in-out;
  color: ${(props) => props.theme.colors.gray};
  font-weight: 500;
  &:first-child {
    margin-top: 10px;
  }
  > :first-child {
    margin-right: 10px;
  }
  &:hover {
    background-color: ${(props) => props.theme.colors.dark};
  }
`;

const StyledDirectMessages = styled.h5`
  color: ${(props) => props.theme.colors.gray};
  cursor: pointer;
  text-transform: uppercase;
  padding: 0 20px;
  margin-top: 10px;
  transition: color 100ms ease-in-out;
  display: flex;
  justify-content: space-between;
  align-items: center;
  &:hover {
    color: ${(props) => props.theme.colors.lightGray};
  }
`;

export {
  StyledSidebarContainer,
  StyledSidebarBox,
  StyledSearchBox,
  StyledList,
  StyledListItem,
  StyledDirectMessages,
};
