import { useLayoutEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import PendingScreen from "./pending-screen";
import * as route from "../constants/routes";

function ProtectedRoutes({ children, pending, loggedIn }) {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    if (pending) return;
    if (!loggedIn && pathname === route.HOME) {
      return navigate(route.LOGIN);
    }
    if (loggedIn && (pathname === route.LOGIN || pathname === route.REGISTER)) {
      navigate(route.HOME);
    }
  }, [pathname, loggedIn, navigate, pending]);

  if (pending) return <PendingScreen />;
  return children;
}

export default ProtectedRoutes;
