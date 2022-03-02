import { NavLink } from "react-router-dom";
import { StyledListItem } from "./styles";
import styled from "styled-components";

function ListItem({ name, icon, href = "/" }) {
  const StyledNavLink = styled(NavLink)`
    &.active {
      background-color: ${(props) => props.theme.colors.hoverColor};
    }
    margin-bottom: 2px;
  `;

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
