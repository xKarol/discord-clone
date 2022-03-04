import SidebarChannels from "../components/home/sidebar-channels";
import Sidebar from "../components/home/sidebar";
import { StyledBackground, StyledBody } from "../components/home/styles";
import Header from "../components/home/header";
import { Outlet } from "react-router-dom";

function HomePage() {
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
    </StyledBackground>
  );
}

export default HomePage;
