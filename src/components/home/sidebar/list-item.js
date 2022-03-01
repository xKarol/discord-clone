import { StyledListItem } from "./styles";

function ListItem({ text, children }) {
  return (
    <StyledListItem>
      {children}
      <span>{text}</span>
    </StyledListItem>
  );
}

export default ListItem;
