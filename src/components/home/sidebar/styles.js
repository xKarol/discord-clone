import styled from "styled-components";
import { HideScrollbar } from "../styles";

const StyledSidebarBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 240px;
  height: 100vh;
  align-items: center;
  background-color: ${(props) => props.theme.colors.formDark};
  padding: 15px 0;
  padding-bottom: 0;
  overflow-y: scroll;
  max-height: 100vh;
  ${HideScrollbar};
`;

const StyledSidebarContainer = styled.div`
  padding: 0 10px;
`;

const StyledSearchBox = styled.button.attrs({ type: "button" })`
  background-color: ${(props) => props.theme.colors.dark};
  border: none;
  border-radius: 3px;
  cursor: pointer;
  padding: 5px 15px;
  color: ${(props) => props.theme.colors.gray};
  font-size: 13px;
`;
const StyledFriendsList = styled.ul``;
const StyledFriend = styled.li``;

export {
  StyledSidebarContainer,
  StyledSidebarBox,
  StyledSearchBox,
  StyledFriendsList,
  StyledFriend,
};
