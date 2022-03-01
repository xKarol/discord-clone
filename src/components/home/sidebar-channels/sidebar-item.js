import { StyledSidebarItem, StyledSidebarItemBox } from "./styles";
import { getAcronym } from "../../../utils/regex";
import Tooltip from "../../tooltip";

function SidebarItem(props) {
  return (
    <Tooltip title={props.name} placement="right">
      <StyledSidebarItemBox>
        <StyledSidebarItem color={props.color}>
          {props.children ?? getAcronym(props.name)}
        </StyledSidebarItem>
      </StyledSidebarItemBox>
    </Tooltip>
  );
}

export default SidebarItem;
