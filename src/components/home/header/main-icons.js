import { StyledHeaderMainIcons } from "./styles";
import InboxIcon from "@mui/icons-material/Inbox";
import HelpIcon from "@mui/icons-material/Help";
import Tooltip from "../../tooltip";

function MainIcons() {
  return (
    <StyledHeaderMainIcons>
      <Tooltip placement="bottom" title="Inbox" medium="true">
        <InboxIcon />
      </Tooltip>
      <Tooltip placement="bottom" title="Help" medium="true">
        <HelpIcon />
      </Tooltip>
    </StyledHeaderMainIcons>
  );
}

export default MainIcons;
