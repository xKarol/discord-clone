import { NavLink } from "react-router-dom";
import { StyledListItem } from "./styles";
import styled from "styled-components";

const StyledNavLink = styled(NavLink)`
  &.active {
    background-color: ${(props) => props.theme.colors.hoverColor};
  }
  margin-bottom: 2px;
`;

function ListItem({ name, icon, href = "/" }) {
  return (
    <StyledNavLink to={href}>
      <StyledListItem>
        {icon}
        <span>{name}</span>
      </StyledListItem>
    </StyledNavLink>
  );
}

export default ListItem;
