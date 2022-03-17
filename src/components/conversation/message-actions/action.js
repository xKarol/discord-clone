import Tooltip from "../../tooltip";
import { StyledMessageAction } from "./styles";

function MessageAction({ text, icon, onClick }) {
  return (
    <Tooltip title={text} medium="true" placement="top">
      <StyledMessageAction onClick={onClick}>{icon}</StyledMessageAction>
    </Tooltip>
  );
}

export default MessageAction;
