import { StyledSidebarItem, StyledSidebarItemBox } from "./styles";
import { getAcronym } from "../../../utils/regex";
import Tooltip from "../../tooltip";
import { useNavigate } from "react-router-dom";
import { StyledChannelAvatar } from "./styles";
import { useState } from "react";

function SidebarItem(props) {
  const navigate = useNavigate();
  const [blockHoverTransition, setBlockHoverTransition] = useState(false);

  const handleClick = () => {
    if (props.href) {
      navigate(props.href);
    }
  };

  const checkImgSize = (e) => {
    const img = e.target;
    if (img.naturalWidth > 60 || img.naturalHeight > 60) return;
    setBlockHoverTransition(true);
  };

  return (
    <StyledSidebarItemBox onClick={handleClick}>
      <Tooltip title={props.name} placement="right">
        <StyledSidebarItem
          blockHoverTransition={blockHoverTransition}
          color={props.image ? null : "#36393F"}
          active={props.active}
          {...props}
        >
          {props.image ? (
            <StyledChannelAvatar
              src={props.image}
              alt={props.name}
              onLoad={(e) => checkImgSize(e)}
            />
          ) : props.icon ? (
            props.icon
          ) : (
            getAcronym(props.name)
          )}
        </StyledSidebarItem>
      </Tooltip>
    </StyledSidebarItemBox>
  );
}

export default SidebarItem;
