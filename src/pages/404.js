import { Navigate } from "react-router-dom";
import { HOME as ROUTE_HOME } from "../constants/routes";

function NotFoundPage() {
  return <Navigate to={ROUTE_HOME} />;
}

export default NotFoundPage;
