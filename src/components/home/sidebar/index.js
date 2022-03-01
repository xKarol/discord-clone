import CurrentUserData from "./current-user-data";
import {
  StyledSidebarBox,
  StyledSidebarContainer,
  StyledSearchBox,
  StyledFriendsList,
  StyledFriend,
} from "./styles";

function Sidebar() {
  return (
    <StyledSidebarBox>
      <StyledSidebarContainer>
        <StyledSearchBox>Find or start a conversation</StyledSearchBox>
        <StyledFriendsList>
          <StyledFriend />
        </StyledFriendsList>
      </StyledSidebarContainer>
      <CurrentUserData />
    </StyledSidebarBox>
  );
}

export default Sidebar;
