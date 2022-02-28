import SidebarItem from "./sidebar-item";
import { StyledSidebar } from "./styles";
import AddIcon from "@mui/icons-material/Add";
import ExploreIcon from "@mui/icons-material/Explore";

function Sidebar() {
  return (
    <StyledSidebar>
      <SidebarItem name="Home" color={"#5865F2"}>
        <img
          src={"/images/logo-white.svg"}
          alt="discord logo"
          style={{ width: "100%", transform: "scale(0.6)" }}
        />
      </SidebarItem>
      <SidebarItem />
      <SidebarItem />
      <SidebarItem />
      <SidebarItem name="Add a Server">
        <AddIcon sx={{ color: "#3BA55D" }} />
      </SidebarItem>
      <SidebarItem name="Explore Public Servers">
        <ExploreIcon sx={{ color: "#3BA55D" }} />
      </SidebarItem>
    </StyledSidebar>
  );
}

export default Sidebar;
