import { StyledSidebarItem, StyledSidebarItemBox } from "./styles";
import { getAcronym } from "../../../utils/regex";
import Tooltip from "../../tooltip";
import { useNavigate } from "react-router-dom";

function SidebarItem(props) {
  const navigate = useNavigate();

  const handleClick = () => {
    if (props.href) {
      navigate(props.href);
    }
  };

  return (
    <Tooltip title={props.name} placement="right">
      <StyledSidebarItemBox onClick={handleClick} {...props}>
        <StyledSidebarItem color={props.color}>
          {props.icon ? props.icon : getAcronym(props.name)}
        </StyledSidebarItem>
      </StyledSidebarItemBox>
    </Tooltip>
  );
}

export default SidebarItem;
