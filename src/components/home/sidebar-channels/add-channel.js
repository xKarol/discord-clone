import { useContext } from "react";
import AddIcon from "@mui/icons-material/Add";
import SidebarItem from "./sidebar-item";
import { NewChannelContext } from "../../../context/new-channel-context";
import AddChannelModal from "../add-channel-modal";

function AddChannel() {
  const { setOpen, open } = useContext(NewChannelContext);

  return (
    <>
      <SidebarItem
        name="Add a Server"
        icon={<AddIcon sx={{ color: "#3BA55D" }} />}
        onClick={() => setOpen(!open)}
        active={open}
        noIndicator
        activeColor="#3BA55D"
      />
      <AddChannelModal />
    </>
  );
}

export default AddChannel;
