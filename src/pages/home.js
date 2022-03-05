import SidebarChannels from "../components/home/sidebar-channels";
import Sidebar from "../components/home/sidebar";
import {
  StyledBackground,
  StyledBody,
  StyledLeftContainers,
  StyledMainSection,
} from "../components/home/styles";
import Header from "../components/home/header";
import { Outlet } from "react-router-dom";

function HomePage() {
  return (
    <StyledBackground>
      <StyledLeftContainers>
        <SidebarChannels />
        <Sidebar />
      </StyledLeftContainers>

      <StyledBody>
        <Header />
        <StyledMainSection>
          <Outlet />
        </StyledMainSection>
      </StyledBody>
    </StyledBackground>
  );
}

export default HomePage;
