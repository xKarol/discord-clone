import { Modal } from "@mui/material";
import { StyledMainBox } from "./styles";
import CloseIcon from "@mui/icons-material/Close";
import Main from "./main";
import Add from "./add";
import { useContext } from "react";
import { NewChannelContext } from "../../../context/new-channel-context";
import { AnimatePresence, motion } from "framer-motion";
import { MAIN } from "../../../constants/channel-modal-pages";

function AddChannelModal() {
  const { setOpen, open, page } = useContext(NewChannelContext);
  const handleClose = () => setOpen(!open);
  console.log(page);
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      sx={{ display: "flex" }}
    >
      <StyledMainBox>
        <CloseIcon className="close-icon" onClick={handleClose} />
        <AnimatePresence exitBeforeEnter>
          <motion.div
            key={page}
            exit={{ x: -400, opacity: 0 }}
            initial={{ x: 400 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.2 }}
          >
            {page === MAIN ? <Main /> : <Add />}
          </motion.div>
        </AnimatePresence>
      </StyledMainBox>
    </Modal>
  );
}

export default AddChannelModal;
