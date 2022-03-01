import { Modal } from "@mui/material";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { toggleOpen } from "../../../redux/add-server/addServerActions";
import { StyledBox } from "./styles";
import CloseIcon from "@mui/icons-material/Close";
import Main from "./main";
import Add from "./add";

function AddServer() {
  const dispatch = useDispatch();
  const { opened } = useSelector((state) => state.addServer);

  const handleClose = () => dispatch(toggleOpen());

  return (
    <Modal
      open={opened}
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

export default AddServer;
