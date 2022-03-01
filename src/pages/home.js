import { useEffect } from "react";
import { useDispatch } from "react-redux";
import AddServer from "../components/home/add-server";
import SidebarChannels from "../components/home/sidebar-channels";
import Sidebar from "../components/home/sidebar";
import { StyledBackground } from "../components/home/styles";
import { getChannels } from "../redux/channels/channelActions";
import Header from "../components/home/header";

function HomePage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getChannels());
  }, [dispatch]);

  return (
    <StyledBackground>
      <SidebarChannels />
      <div style={{ display: "flex", width: "100%", flexWrap: "wrap" }}>
        <Header />
        <Sidebar />
      </div>
      <AddServer />
    </StyledBackground>
  );
}

export default HomePage;
