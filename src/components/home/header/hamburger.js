import MenuIcon from "@mui/icons-material/Menu";
import { useDispatch } from "react-redux";
import { StyledHamburger } from "./styles";
import { toggleMenu } from "../../../redux/app/appActions";

function Hamburger() {
  const dispatch = useDispatch();
  return (
    <StyledHamburger onClick={() => dispatch(toggleMenu())}>
      <MenuIcon />
    </StyledHamburger>
  );
}

export default Hamburger;
