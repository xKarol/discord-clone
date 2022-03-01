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
      background-color: rgba(185, 187, 190, 0.2);
    }
  }
`;

export {
  StyledSidebarContainer,
  StyledSidebarBox,
  StyledSearchBox,
  StyledFriendsList,
  StyledFriend,
  StyledCurrentUserData,
  StyledUsername,
  StyledUserIcons,
};
