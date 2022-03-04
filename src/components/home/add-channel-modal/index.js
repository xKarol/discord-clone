import { Modal } from "@mui/material";
import { StyledBox } from "./styles";
import CloseIcon from "@mui/icons-material/Close";
import Main from "./main";
import Add from "./add";
import { useContext } from "react";
import { NewChannelContext } from "../../../context/new-channel-context";

function AddChannelModal() {
  const { setOpen, open } = useContext(NewChannelContext);

  const handleClose = () => setOpen(!open);

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      sx={{ display: "flex" }}
    >
      <StyledBox>
        <CloseIcon className="close-icon" onClick={handleClose} />
        {/* <Main /> */}
        <Add />
      </StyledBox>
    </Modal>
  );
}

export default AddChannelModal;
