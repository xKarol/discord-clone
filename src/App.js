import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Conversation from "./pages/conversation";
import Login from "./pages/login";
import Register from "./pages/register";
import NotFound from "./pages/404";
import ProtectedRoutes from "./components/protected-routes";
import * as route from "./constants/routes";
import useUserStatus from "./hooks/useUserStatus";
import useAuth from "./hooks/useAuth";

function App() {
  const { loggedIn, pending } = useAuth();
  useUserStatus();

  return (
    <ProtectedRoutes loggedIn={loggedIn} pending={pending}>
      <Routes>
        <Route path={route.HOME} element={<Home />}>
          <Route
            path={`${route.CONVERSATION}/:userId`}
            element={<Conversation />}
          />
        </Route>
        <Route path={route.REGISTER} element={<Register />} />
        <Route path={route.LOGIN} element={<Login />} />
        <Route path={"*"} element={<NotFound />} />
      </Routes>
    </ProtectedRoutes>
  );
}

export default App;
