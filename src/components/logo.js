import { Link } from "react-router-dom";

function Logo({ href }) {
  return (
    <Link to={"/"}>
      <img src={"/images/logo.svg"} alt="discord logo" />
    </Link>
  );
}

export default Logo;
