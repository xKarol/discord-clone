import SidebarItem from "./sidebar-item";
import { StyledSidebar } from "./styles";
import ExploreIcon from "@mui/icons-material/Explore";
import { useSelector } from "react-redux";
import NewChannelProvider from "../../../context/new-channel-context";
import AddChannel from "./add-channel";
import { HOME } from "../../../constants/routes";
import { useLocation } from "react-router-dom";

function SidebarChannels() {
  const { channels } = useSelector((state) => state.channels);
  const { pathname } = useLocation();

  return (
    <NewChannelProvider>
      <StyledSidebar>
        <SidebarItem
          name="Home"
          color={"#5865F2"}
          icon={
            <img
              src={"/images/logo-white.svg"}
              alt="discord logo"
              style={{ width: "100%", transform: "scale(0.6)" }}
            />
          }
          active={pathname === HOME}
        />
        {!!channels.length &&
          channels.map(({ id, name }) => <SidebarItem key={id} name={name} />)}

        <AddChannel />
        <SidebarItem
          name="Explore Public Servers"
          icon={<ExploreIcon sx={{ color: "#3BA55D" }} />}
          noIndicator
          activeColor="#3BA55D"
        />
      </StyledSidebar>
    </NewChannelProvider>
  );
}

export default SidebarChannels;
