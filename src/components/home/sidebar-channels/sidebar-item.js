import { StyledSidebarItem, StyledSidebarItemBox } from "./styles";
import { getAcronym } from "../../../utils/regex";
import Tooltip from "../../tooltip";
import { useNavigate } from "react-router-dom";
import { StyledChannelAvatar } from "./styles";

function SidebarItem({
  name,
  color,
  href,
  icon,
  active,
  image,
  noIndicator,
  activeColor,
  onClick,
}) {
  const navigate = useNavigate();

  const handleClick = () => {
    if (href) navigate(href);
  };

  return (
    <StyledSidebarItemBox onClick={handleClick}>
      <Tooltip title={name} placement="right">
        <StyledSidebarItem
          color={image ? null : color ? color : "#36393F"}
          active={active}
          activeColor={activeColor}
          noIndicator={noIndicator}
          onClick={onClick}
        >
          {image ? (
            <StyledChannelAvatar src={image} alt={name} />
          ) : icon ? (
            icon
          ) : (
            getAcronym(name)
          )}
        </StyledSidebarItem>
      </Tooltip>
    </StyledSidebarItemBox>
  );
}

export default SidebarItem;
