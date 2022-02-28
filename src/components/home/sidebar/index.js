import SidebarItem from "./sidebar-item";
import { StyledSidebar } from "./styles";
import AddIcon from "@mui/icons-material/Add";
import ExploreIcon from "@mui/icons-material/Explore";
import { toggleOpen } from "../../../redux/add-server/addServerActions";
import { useDispatch } from "react-redux";

function Sidebar() {
  const dispatch = useDispatch();

  const handleAddServer = () => dispatch(toggleOpen());

  return (
    <StyledSidebar>
      <SidebarItem name="Home" color={"#5865F2"}>
        <img
          src={"/images/logo-white.svg"}
          alt="discord logo"
          style={{ width: "100%", transform: "scale(0.6)" }}
        />
      </SidebarItem>
      <SidebarItem name="Server" />
      <SidebarItem name="Server" />
      <SidebarItem name="Server" />
      <SidebarItem name="Add a Server" onClick={handleAddServer}>
        <AddIcon sx={{ color: "#3BA55D" }} />
      </SidebarItem>
      <SidebarItem name="Explore Public Servers">
        <ExploreIcon sx={{ color: "#3BA55D" }} />
      </SidebarItem>
    </StyledSidebar>
  );
}

export default Sidebar;
