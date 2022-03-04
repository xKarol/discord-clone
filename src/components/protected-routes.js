import { Navigate } from "react-router-dom";
import PendingScreen from "./pending-screen";
import { LOGIN as ROUTE_LOGIN } from "../constants/routes";
import { useSelector } from "react-redux";

function ProtectedRoutes({ children, pending }) {
  const { loggedIn } = useSelector((state) => state.user);

  if (pending) return <PendingScreen />;
  if (!loggedIn) return <Navigate to={ROUTE_LOGIN} />;
  return children;
}

export default ProtectedRoutes;
