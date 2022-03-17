import { StyledMessageActions } from "../styles";
import AddReactionIcon from "@mui/icons-material/AddReaction";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import MessageAction from "./action";
import { useDispatch, useSelector } from "react-redux";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ReplyIcon from "@mui/icons-material/Reply";
import { useContext } from "react";
import { MessageContext } from "../../../context/message-context";
import { deleteMessage } from "../../../redux/messages/messagesActions";

function MessageActions() {
  const {
    user: { userId },
  } = useSelector((state) => state.user);
  const { userId: messageUserId, messageId } = useContext(MessageContext);
  const { headerType } = useSelector((state) => state.app);
  const currentUserMessage = userId === messageUserId;
  const dispatch = useDispatch();

  const handleDeleteMessage = () => {
    if (!currentUserMessage) return;
    dispatch(deleteMessage(headerType, messageId));
  };

  return (
    <StyledMessageActions>
      <MessageAction
        text="Add Reaction"
        icon={<AddReactionIcon sx={{ fontSize: "1em" }} />}
      />
      {currentUserMessage ? (
        <>
          <MessageAction
            text="Edit"
            icon={<EditIcon sx={{ fontSize: "1em" }} />}
          />
          <MessageAction
            text="Delete"
            icon={<DeleteIcon sx={{ color: "#e32636", fontSize: "1em" }} />}
            onClick={handleDeleteMessage}
          />
        </>
      ) : (
        <>
          <MessageAction
            text="Reply"
            icon={<ReplyIcon sx={{ fontSize: "1em" }} />}
          />
          <MessageAction
            text="More"
            icon={<MoreHorizIcon sx={{ fontSize: "1em" }} />}
          />
        </>
      )}
    </StyledMessageActions>
  );
}

export default MessageActions;
