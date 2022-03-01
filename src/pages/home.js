import { useEffect } from "react";
import { useDispatch } from "react-redux";
import AddServer from "../components/home/add-server";
import SidebarChannels from "../components/home/sidebar-channels";
import Sidebar from "../components/home/sidebar";
import { StyledBackground, StyledBody } from "../components/home/styles";
import { getChannels } from "../redux/channels/channelActions";
import Header from "../components/home/header";
import { Outlet } from "react-router-dom";

function HomePage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getChannels());
  }, [dispatch]);

  return (
    <StyledBackground>
      <SidebarChannels />
      <StyledBody>
        <Header />
        <Sidebar />
        <Outlet />
      </StyledBody>
      <AddServer />
    </StyledBackground>
  );
}

export default HomePage;
