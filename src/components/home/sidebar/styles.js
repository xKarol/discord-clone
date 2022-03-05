import styled from "styled-components";
import { HideScrollbar } from "../../../styles";

const StyledSidebarBox = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 235px;
  height: 100%;
  background-color: ${(props) => props.theme.colors.formDark};
`;

const StyledList = styled.ul`
  width: 100%;
  min-height: 94px;
  padding: 0 10px;
  margin-top: 5px;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  max-height: calc(100vh - 215px);
  ${HideScrollbar};
`;

const StyledListItem = styled.li`
  display: flex;
  padding: 5px 10px;
  min-height: 45px;
  align-items: center;
  cursor: pointer;
  transition: background-color 100ms ease-in-out;
  color: ${(props) => props.theme.colors.gray};
  font-weight: 500;
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

const StyledSearchContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  max-height: 50px;
  border-bottom: 1px solid ${(props) => props.theme.colors.dark};
`;

export {
  StyledSidebarBox,
  StyledSearchBox,
  StyledList,
  StyledSearchContainer,
  StyledListItem,
  StyledDirectMessages,
};
