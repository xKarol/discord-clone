import { Link } from "react-router-dom";
import { StyledListItem } from "./styles";

function ListItem({ name, icon, href = "/" }) {
  return (
    <Link to={href}>
      <StyledListItem>
        {icon}
        <span>{name}</span>
      </StyledListItem>
    </Link>
  );
}

export default ListItem;
