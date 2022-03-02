import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AddServer from "../components/home/add-server";
import SidebarChannels from "../components/home/sidebar-channels";
import Sidebar from "../components/home/sidebar";
import { StyledBackground, StyledBody } from "../components/home/styles";
import { getChannels } from "../redux/channels/channelActions";
import Header from "../components/home/header";
import { Outlet } from "react-router-dom";
import { getLatestConversations } from "../redux/latest-conversations/latest-conversationsActions";

function HomePage() {
  const dispatch = useDispatch();
  const {
    user: { userId },
  } = useSelector((state) => state.user);
  useEffect(() => {
    dispatch(getChannels());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getLatestConversations(userId));
  }, [dispatch, userId]);

  return (
    <StyledBackground>
      <SidebarChannels />
      <StyledBody>
        <Header />
        <div
          style={{
            display: "flex",
            width: "100%",
            height: "100%",
            maxHeight: "calc(100% - 50px)",
          }}
        >
          <Sidebar />
          <Outlet />
        </div>
      </StyledBody>
      <AddServer />
    </StyledBackground>
  );
}

export default HomePage;
