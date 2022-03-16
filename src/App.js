import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Conversation from "./pages/conversation";
import Channel from "./pages/channel";
import Login from "./pages/login";
import Register from "./pages/register";
import NotFound from "./pages/404";
import ProtectedRoutes from "./components/protected-routes";
import * as route from "./constants/routes";
import useUserStatus from "./hooks/useUserStatus";
import useAuth from "./hooks/useAuth";
import PendingScreen from "./components/pending-screen";

function App() {
  const { pending } = useAuth();
  useUserStatus();

  return (
    <Routes>
      <Route
        path={route.HOME}
        element={
          <ProtectedRoutes pending={pending}>
            <Home />
          </ProtectedRoutes>
        }
      >
        <Route
          path={`${route.CONVERSATION}/:userId`}
          element={<Conversation />}
        />
        <Route path={`${route.CHANNEL}/:channelId`} element={<Channel />} />
      </Route>
      <Route
        path={route.REGISTER}
        element={pending ? <PendingScreen /> : <Register />}
      />
      <Route
        path={route.LOGIN}
        element={pending ? <PendingScreen /> : <Login />}
      />
      <Route path={"*"} element={<NotFound />} />
    </Routes>
  );
}

export default App;
