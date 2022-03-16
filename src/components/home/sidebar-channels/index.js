import SidebarItem from "./sidebar-item";
import { StyledSidebar } from "./styles";
import ExploreIcon from "@mui/icons-material/Explore";
import { useDispatch, useSelector } from "react-redux";
import NewChannelProvider from "../../../context/new-channel-context";
import AddChannel from "./add-channel";
import {
  HOME as ROUTE_HOME,
  CHANNEL as ROUTE_CHANNEL,
} from "../../../constants/routes";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { getChannels } from "../../../redux/channels/channelActions";

function SidebarChannels() {
  const { channels } = useSelector((state) => state.channels);
  const { pathname } = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getChannels());
  }, [dispatch]);

  return (
    <NewChannelProvider>
      <StyledSidebar>
        <SidebarItem
          name="Home"
          color={"#5865F2"}
          href="/"
          icon={
            <img
              src={"/images/logo-white.svg"}
              alt="discord logo"
              style={{ width: "100%", transform: "scale(0.6)" }}
            />
          }
          active={pathname === ROUTE_HOME}
        />
        {!!channels.length &&
          channels.map(({ id, name, image }) => (
            <SidebarItem
              key={id}
              href={`${ROUTE_CHANNEL}/${id}`}
              name={name}
              image={image}
              active={pathname === `${ROUTE_CHANNEL}/${id}`}
            />
          ))}

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
