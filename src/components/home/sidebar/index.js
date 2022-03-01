import UserProfile from "./user-profile";
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
      <UserProfile />
    </StyledSidebarBox>
  );
}

export default Sidebar;
