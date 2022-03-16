import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import ProtectedRoutes from "./components/protected-routes";
import * as route from "./constants/routes";
import PendingScreen from "./components/pending-screen";
import useUserStatus from "./hooks/useUserStatus";
import useAuth from "./hooks/useAuth";

const Login = React.lazy(() => import("./pages/login"));
const Register = React.lazy(() => import("./pages/register"));
const NotFound = React.lazy(() => import("./pages/404"));
const Home = React.lazy(() => import("./pages/home"));
const Channel = React.lazy(() => import("./pages/channel"));
const Conversation = React.lazy(() => import("./pages/conversation"));

function App() {
  const { pending } = useAuth();
  useUserStatus();

  return (
    <Routes>
      <Route
        path={route.HOME}
        element={
          <Suspense fallback={null}>
            <ProtectedRoutes pending={pending}>
              <Home />
            </ProtectedRoutes>
          </Suspense>
        }
      >
        <Route
          path={`${route.CONVERSATION}/:userId`}
          element={
            <Suspense fallback={null}>
              <Conversation />
            </Suspense>
          }
        />
        <Route
          path={`${route.CHANNEL}/:channelId`}
          element={
            <Suspense fallback={null}>
              <Channel />
            </Suspense>
          }
        />
      </Route>
      <Route
        path={route.REGISTER}
        element={
          pending ? (
            <PendingScreen />
          ) : (
            <Suspense fallback={null}>
              <Register />
            </Suspense>
          )
        }
      />
      <Route
        path={route.LOGIN}
        element={
          pending ? (
            <PendingScreen />
          ) : (
            <Suspense fallback={null}>
              <Login />
            </Suspense>
          )
        }
      />
      <Route
        path={"*"}
        element={
          <Suspense fallback={null}>
            <NotFound />
          </Suspense>
        }
      />
    </Routes>
  );
}

export default App;
