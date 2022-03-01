import { useEffect } from "react";
import { useDispatch } from "react-redux";
import AddServer from "../components/home/add-server";
import SidebarChannels from "../components/home/sidebar-channels";
import Sidebar from "../components/home/sidebar";
import { StyledBackground } from "../components/home/styles";
import { getChannels } from "../redux/channels/channelActions";

function HomePage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getChannels());
  }, [dispatch]);

  return (
    <StyledBackground>
      <SidebarChannels />
      <Sidebar />
      <AddServer />
    </StyledBackground>
  );
}

export default HomePage;
