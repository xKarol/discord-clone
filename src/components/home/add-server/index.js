import { Modal } from "@mui/material";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { toggleOpen } from "../../../redux/add-server/addServerActions";
import {
  StyledBox,
  StyledHeading,
  StyledDescription,
  StyledOptions,
  StyledLabel,
  StyledScrollbar,
  StyledHeader,
  StyledFooter,
  StyledButton,
} from "./styles";
import Option from "./option";
import CloseIcon from "@mui/icons-material/Close";

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
        <StyledHeader>
          <StyledHeading id="modal-modal-title">Create a Server</StyledHeading>
          <StyledDescription id="modal-modal-description">
            Your server is where you and your friends hang out. Make yours and
            start talking.
          </StyledDescription>
        </StyledHeader>
        <StyledScrollbar>
          <Option text="Create My Own" image="/images/magic-wand.png" />
          <StyledLabel>Start from template</StyledLabel>
          <StyledOptions>
            <Option text="Gaming" image="/images/controller.png" />
            <Option text="School Club" image="/images/school.png" />
            <Option text="Study group" image="/images/backpack.png" />
            <Option text="Friends" image="/images/people.png" />
          </StyledOptions>
        </StyledScrollbar>
        <StyledFooter>
          <h5>Have an invite already?</h5>
          <StyledButton>Join a server</StyledButton>
        </StyledFooter>
      </StyledBox>
    </Modal>
  );
}

export default AddServer;
