import { StyledMessageActions } from "../styles";
import AddReactionIcon from "@mui/icons-material/AddReaction";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import MessageAction from "./action";

function MessageActions() {
  return (
    <StyledMessageActions>
      <MessageAction
        text="Add Reaction"
        icon={<AddReactionIcon sx={{ fontSize: "1em" }} />}
      />
      <MessageAction text="Edit" icon={<EditIcon sx={{ fontSize: "1em" }} />} />
      <MessageAction
        text="Delete"
        icon={<DeleteIcon sx={{ color: "red", fontSize: "1em" }} />}
      />
    </StyledMessageActions>
  );
}

export default MessageActions;
