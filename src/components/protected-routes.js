import { useLayoutEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import PendingScreen from "./pending-screen";
import * as route from "../constants/routes";

function ProtectedRoutes({ children, pending, loggedIn }) {
  const navigate = useNavigate();
  const location = useLocation();

  useLayoutEffect(() => {
    if (pending) return;
    if (!loggedIn && location.pathname === route.HOME) {
      return navigate(route.LOGIN);
    }
    if (
      (location.pathname === route.LOGIN ||
        location.pathname === route.REGISTER) &&
      loggedIn
    ) {
      navigate(route.HOME);
    }
  }, [location.pathname, loggedIn, navigate, pending]);

  if (pending) return <PendingScreen />;
  return children;
}

export default ProtectedRoutes;
