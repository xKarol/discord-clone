import AddServer from "../components/home/add-server";
import Sidebar from "../components/home/sidebar";
import { StyledBackground } from "../components/home/styles";

function HomePage() {
  return (
    <StyledBackground>
      <Sidebar />
      <AddServer />
    </StyledBackground>
  );
}

export default HomePage;
