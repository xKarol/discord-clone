import { getAuth, onAuthStateChanged } from "firebase/auth";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import { useEffect, useLayoutEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import PendingScreen from "./pending-screen";
import * as route from "../constants/routes";

function ProtectedRoutes({ children }) {
  const [pending, setPending] = useState(true);
  const [loggedIn, setLoggedIn] = useState(false);
  const auth = getAuth();
  const navigate = useNavigate();
  let location = useLocation();
  const db = getFirestore();

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

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        console.log("login", uid, user);
        getDoc(doc(db, "users", uid)).then((userData) => {
          console.log(userData.data());
          setLoggedIn(true);
          setPending(false);
        });
      } else {
        console.log("logout");
        setLoggedIn(false);
        setPending(false);
      }
    });
    return () => unsubscribe();
  }, [auth, navigate, db]);

  if (pending) return <PendingScreen />;
  return children;
}

export default ProtectedRoutes;
