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
import { useSelector } from "react-redux";

function HomePage() {
  const { toggledMenu } = useSelector((state) => state.app);

  return (
    <StyledBackground>
      <StyledLeftContainers active={toggledMenu}>
        <SidebarChannels />
        <Sidebar />
      </StyledLeftContainers>

      <StyledBody active={toggledMenu}>
        <Header />
        <StyledMainSection>
          <Outlet />
        </StyledMainSection>
      </StyledBody>
    </StyledBackground>
  );
}

export default HomePage;
