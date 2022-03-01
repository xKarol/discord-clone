import { StyledListItem } from "./styles";

function ListItem({ text, icon }) {
  return (
    <StyledListItem>
      {icon}
      <span>{text}</span>
    </StyledListItem>
  );
}

export default ListItem;
